import React from 'react'
import SectionDiv from './section-div'
import './tx-page.scss'
import './explore.scss'
import { Row, Col, Badge } from 'reactstrap';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons'
import * as Api from '../api-types'

library.add(faChevronRight, faLink)


interface TxPageState {
    errorTxApi: any;
    errorOutspendsApi: any;
    txResponse?: Api.TxResponse;
    outspendsResponse?: Api.OutspendsResponse;
}



class TxPage extends React.Component<any,TxPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorTxApi: null,
            errorOutspendsApi: null,

        };
    }



    getTransactionInfo(txid: any){
        fetch("https://blockstream.info/testnet/api/tx/"+txid)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the api info is: ',result);
                    this.setState({
                        txResponse: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        errorTxApi: error
                    });
                    console.error('Error: ', error.message)

                }
            )
    }

    getOutspendsInfo(txid: string) {
        fetch("https://blockstream.info/testnet/api/tx/"+txid+"/outspends")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the outspends api info is: ',result);
                    this.setState({
                        outspendsResponse: result
                    });
                },
                (error) => {
                    this.setState({
                        errorOutspendsApi: error
                    });
                    console.error('Error while fetching outspends api: ', error.message)

                }
            )
    }

    componentDidMount() {
        console.log('a coinbase txid is: 35e78b61dce421c93cc476a90e2f416ffd13f6e70527b178617c888ebc43f0ff');
        this.getTransactionInfo(this.props.page);

        setTimeout(
            () => {
                this.getOutspendsInfo(this.props.page);
            },
            3000
        );


    }

    componentDidUpdate(prevProps: any) {
        if (this.props.page !== prevProps.page) {
            this.getTransactionInfo(this.props.page);
            this.getOutspendsInfo(this.props.page);
        }

    }

    displayOutput(output: Api.Vout, i: number){
        return (
            <div key={i} id={ 'output-index-'+i}>
                <div>#{i}</div>
                <div>
                    { output.value/1e8 } tBTC to {' '}
                    <Link to={"/explore/tbtc/address/" + output.scriptpubkey_address}>{output.scriptpubkey_address}</Link>{' '}
                    { this.displaySpentStatus(i) }
                </div>
            </div>
        );
    }

    displaySpentStatus(i: number) {
        if (this.state.outspendsResponse === undefined) {
            return <span>unknown</span>
        }
        const outspend = this.state.outspendsResponse[i];
        if (!outspend.spent) {
            return <Badge color="light">unspent</Badge>
        }
        return (
            <Link to={"/explore/tbtc/tx/" + outspend.txid + "/#spent-by-" + this.props.page + "-" + i}>
                <Badge color="success">spent <FontAwesomeIcon icon="link" /></Badge>
            </Link>
        );

    }

    render() {
        const { errorTxApi } = this.state;
        if (errorTxApi) {
            return <div>Error: {errorTxApi.message}</div>;
        }
        if ( this.state.txResponse === undefined ) {
            return <div>Loading...</div>;
        }

        const { status, size, weight, fee, version, locktime, vin, vout } = this.state.txResponse;

        const vBytes = Math.ceil(weight / 4);
            const feeRate = fee/ vBytes;

            return (
                <div>
                    <SectionDiv>
                        <div className="explore-header">
                            <h2>Transaction {this.props.page}</h2>
                        </div>
                        <div className="tx-stats-table">
                            <div style={{ color: 'red' }}>
                                <div>Block Height</div>
                                <div>{ status.block_height }</div>
                            </div>
                            <div>
                                <div>Included in Block</div>
                                <div><a href="/">{ status.block_hash }</a></div>
                            </div>
                            <div>
                                <div>Size (bytes)</div>
                                <div>{ size }</div>
                            </div>
                            <div>
                                <div>Virtual size (vB)</div>
                                <div>{ vBytes }</div>
                            </div>
                            <div>
                                <div>Weight units (WU)</div>
                                <div>{ weight }</div>
                            </div>
                            <div>
                                <div>Transaction fees</div>
                                <div>{(fee / 1e8).toFixed(8)} tBTC ({ feeRate.toFixed(0) } sat/vB)</div>
                            </div>
                            <div>
                                <div>Version</div>
                                <div>{ version }</div>
                            </div>
                            <div>
                                <div>Lock time</div>
                                <div>{ locktime }</div>
                            </div>
                        </div>
                    </SectionDiv>
                    <SectionDiv>
                        <Row>
                                <h2>Details</h2>
                        </Row>
                        <Row>
                            <Col>
                                <h4 className="inputs-and-outputs-subtitle"> { vin.length } Input{ vin.length > 1 ? 's' : ''} Consumed</h4>
                                <div className="tx-input-and-output-table">
                                                {
                                                    vin.map(displayInput)
                                                    // This would be the same:
                                                   //vin.map((item, i)=> displayInput(item, i))
                                                }
                                </div>
                            </Col>
                            <Col xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon="chevron-right" />
                            </Col>
                            <Col>
                                <h4 className="inputs-and-outputs-subtitle"> { vout.length } Output{ vout.length > 1 ? 's' : ''} Created</h4>
                                <div className="tx-input-and-output-table">
                                    {
                                        vout.map((vout: Api.Vout, i: number) => this.displayOutput(vout,i))
                                    }
                                </div>
                            </Col>
                        </Row>
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



export default TxPage
