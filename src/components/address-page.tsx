import React from 'react'
import SectionDiv from './section-div'
import './tx-page.scss'
import './explore.scss'
import { Row, Col, Button, Badge } from 'reactstrap';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faLink, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faLink, faExchangeAlt)


interface AddressPageState {
    errorAddressApi: any;
    addressResponse?: AddressResponse;
    errorTransactionsApi: any;
    transactionList?:  TxResponse[];
    errorMoreTransactionsApi: any;
    outspendsResponse?: any;
    errorOutspendsApi: any;

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



interface Status {
    block_height: number;
    block_hash: string;
    block_time: number;
    confirmed: boolean;
}
interface Vin {
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
    vin: Vin[];
    vout: Vout[];

}


class AddressPage extends React.Component<any,AddressPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorAddressApi: undefined,
            addressResponse: undefined,
            errorTransactionsApi: undefined,
            transactionList: undefined,
            errorMoreTransactionsApi: undefined,
            outspendsResponse: undefined,
            errorOutspendsApi: undefined

        }
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
                    console.log('the transactionList length is: ', this.state.transactionList.length)
                },
                (error) => {
                    this.setState({
                        errorTransactionsApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )

    }

    getMoreTransactionsInfo(address: string, lastTx: string){
        console.log('calling api address: ',"https://blockstream.info/testnet/api/address/"+address+"/txs/chain/"+lastTx )
        fetch("https://blockstream.info/testnet/api/address/"+address+"/txs/chain/"+lastTx)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the additional tx info is: ',result);
                    this.setState({ transactionList:   [...this.state.transactionList, ...result] }
                    );
                    console.log('the new transactionList length is: ', this.state.transactionList.length)
                },
                (error) => {
                    this.setState({
                        errorMoreTransactionsApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )

    }


    displayLoadMoreButton(){

        const { transactionList, addressResponse } = this.state;

        if (!addressResponse) {
            return
        }
        if (! transactionList) {
            return
        }

        if ( transactionList.length < addressResponse.chain_stats.funded_txo_count)
            console.log('last transaction is: ', transactionList[transactionList.length-1].txid)
        return (
            <div style={{ display: 'flex', alignContent: 'center', padding: '3rem'}}>
                <Button onClick={(address: string, lastTx: string) => this.getMoreTransactionsInfo(this.props.page, transactionList[transactionList.length-1].txid)}>Load More</Button>
            </div>
        )
    }

    displayInput(item: any, i: number) {
        if ( item.is_coinbase ) {
            return <div key={i}>coinbase</div>
        }
        const { page } = this.props
        return (
            <div key={i} id={ 'spent-by-'+item.txid+'-'+item.vout} className={ page === item.prevout.scriptpubkey_address ? 'hl-input-and-output-cell' : '' }>
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

    displayOutput(output: Vout, i: number){
        const { page } = this.props
        return (
            <div key={i} id={ 'output-index-'+i} className={ page === output.scriptpubkey_address ? 'hl-input-and-output-cell' : '' }>
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
                                    <div key={i} className="transaction-card">
                                        <Row style={{ display: 'flex', justifyContent: 'center'}}>
                                            <h4 className="transaction-subtitle">
                                                <Link to={"/explore/tbtc/tx/"+tx.txid}>
                                                <FontAwesomeIcon icon="exchange-alt" />{' '}
                                                {tx.txid}
                                                </Link>
                                            </h4>
                                        </Row>
                                        <Row>
                                        <Col>
                                            <h4 className="inputs-and-outputs-subtitle"> { tx.vin.length } Input{ tx.vin.length > 1 ? 's' : ''} Consumed</h4>
                                            <div className="tx-input-and-output-table">
                                                {
                                                    tx.vin.map((vin: Vin, i: number) => this.displayInput(vin,i))
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
                                    </div>
                            );
                        })
                    }
                        { this.displayLoadMoreButton() }

                </SectionDiv>

            </div>
        );
    }

}

export default AddressPage
