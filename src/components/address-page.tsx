import React from 'react'
import SectionDiv from './section-div'
import './tx-page.scss'
import './explore.scss'
import { Row, Col, Button, Badge } from 'reactstrap';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faLink)


interface AddressPageState {
    errorAddressApi: any;
    addressResponse?: AddressResponse;
    errorTransactionsApi: any;
    transactionList?: TransactionList;

}

interface Stats {
    funded_txo_count: number;
    funded_txo_sum: number;
    spent_txo_count: number;
    spent_txo_sum: number;
    tx_count: number;
}


interface AddressResponse {
    address: string;
    chain_stats: Stats;
    mempool_stats: Stats;
}

interface TransactionList {
    transactionInfo: TxResponse[];

};


interface Status {
    block_height: number;
    block_hash: string;
    block_time: number;
    confirmed: boolean;
}

interface Vout {
    scriptpubkey: string;
    scriptpubkey_address: string;
    scriptpubkey_asm: string;
    scriptpubkey_type: string;
    value: number;
}

interface TxResponse {
    status: Status;
    size: number;
    weight: number;
    fee: number;
    version: number;
    locktime: number;
    vin: {
        is_coinbase: boolean;
        prevout: {
            scriptpubkey: string;
            scriptpubkey_address: string;
            scriptpubkey_asm: string;
            scriptpubkey_type: string;
            value: number;

        };
        scriptsig: string;
        scriptsig_asm: string;
        sequence: number;
        txid: string;
        vout: number;
        witness: any;

    }[];
    vout: Vout[];

}


class AddressPage extends React.Component<any,AddressPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorAddressApi: null,
            errorTransactionsApi: null,

        };
    }



    getAddressInfo(address: any){
        fetch("https://blockstream.info/testnet/api/address/"+address)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the address info is: ',result);
                    this.setState({
                        addressResponse: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        errorAddressApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )
    }

    getTransactionsInfo(address: any){
        fetch("https://blockstream.info/testnet/api/address/"+address+"/txs")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the tx info is: ',result);
                    this.setState({
                        transactionList: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        errorTransactionsApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )

    }

    displayOutput(output: Vout, i: number){
        return (
            <div key={i} id={ 'output-index-'+i}>
                <div>#{i}</div>
                <div>
                    { output.value/1e8 } tBTC to {' '}
                    <Link to={"/explore/tbtc/address/" + output.scriptpubkey_address}>{output.scriptpubkey_address}</Link>{' '}

                </div>
            </div>
        );
    }



    componentDidMount() {
        console.log('an address is: 2NAyorkMeZxQk1gfmc4u2q6uunLnXRmmMCN');
        this.getAddressInfo(this.props.page);
        this.getTransactionsInfo(this.props.page);



    }

    componentDidUpdate(prevProps: any) {
        if (this.props.page !== prevProps.page) {
            this.getAddressInfo(this.props.page);
            this.getTransactionsInfo(this.props.page);


        }

    }




    render() {
        const { errorAddressApi, errorTransactionsApi } = this.state;
        if (errorAddressApi) {
            return <div>Error: {errorAddressApi.message}</div>;
        }
        if (errorTransactionsApi) {
            return <div>Error: {errorTransactionsApi.message}</div>;
        }
        if ( this.state.addressResponse === undefined ) {
            return <div>Loading...</div>;
        }

        if ( this.state.transactionList === undefined ) {
            return <div>Loading...</div>;
        }

        const { funded_txo_count, funded_txo_sum, spent_txo_sum,   } = this.state.addressResponse.chain_stats;

        return (
            <div>
                <SectionDiv>
                    <div className="explore-header">
                        <h2>Address {this.props.page}</h2>
                    </div>
                    <div className="tx-stats-table">
                        <div>
                            <div># Transactions</div>
                            <div>{funded_txo_count }</div>
                        </div>
                        <div>
                            <div>Received</div>
                            <div>{ funded_txo_sum / 1e8 } BTC </div>
                        </div>
                        <div>
                            <div>Sent</div>
                            <div>{ spent_txo_sum/ 1e8 } BTC </div>
                        </div>
                        <div>
                            <div>Balance</div>
                            <div>{ (funded_txo_sum - spent_txo_sum)/ 1e8 } BTC</div>
                        </div>
                    </div>
                </SectionDiv>
                <SectionDiv>
                    <h3>Transactions</h3>
                    {
                        this.state.transactionList.map((tx, i) => {
                            return (
                                    <Row key={i}>
                                        <Col>
                                            <h4 className="inputs-and-outputs-subtitle"> { tx.vin.length } Input{ tx.vin.length > 1 ? 's' : ''} Consumed</h4>
                                            <div className="tx-input-and-output-table">
                                                {
                                                    tx.vin.map(displayInput)
                                                }
                                            </div>
                                        </Col>
                                        <Col xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon icon="chevron-right" />
                                        </Col>
                                        <Col>
                                            <h4 className="inputs-and-outputs-subtitle"> { tx.vout.length } Output{ tx.vout.length > 1 ? 's' : ''} Created</h4>
                                            <div className="tx-input-and-output-table">
                                                {
                                                    tx.vout.map((vout: Vout, i: number) => this.displayOutput(vout,i))
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                            );
                        })
                    }

                </SectionDiv>

            </div>
        );
    }

}

function displayInput(item: any, i: number) {
    if ( item.is_coinbase ) {
        return <div key={i}>coinbase</div>
    }
    return (
        <div key={i} id={ 'spent-by-'+item.txid+'-'+item.vout}>
            <div>#{i}</div>
            <div>
                {item.prevout.value / 100000000} tBTC from {' '}
                <Link to={"/explore/tbtc/address/" + item.prevout.scriptpubkey_address}>
                    {item.prevout.scriptpubkey_address ? item.prevout.scriptpubkey_address : 'Unknown Script Type'}
                    </Link>{' '}
                <Link to={"/explore/tbtc/tx/" + item.txid +"/#output-index-"+item.vout}>
                    <Badge color="primary">prev-output <FontAwesomeIcon icon="link" /></Badge>
                </Link>
            </div>
        </div>
    );
}

export default AddressPage
