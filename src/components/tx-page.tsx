import React from 'react'
import SectionDiv from '../components/section-div'
import './tx-page.css'
import { Row, Col, Button, Badge } from 'reactstrap';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faLink)

class TxPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outspendsDetailsOpen: false,
            error: null,
            isLoaded: false,
            height: 0,
            blockHash: '',
            size: 0,
            weight: 0,
            fee: 0,
            version: 0,
            locktime: 0,
            vin: [],
            vout: [],
            outspends: null

        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({outspendsDetailsOpen: !this.state.outspendsDetailsOpen});
    }

    getTransactionInfo(txid){
        fetch("https://blockstream.info/testnet/api/tx/"+txid)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the api info is: ',result);
                    this.setState({
                        isLoaded: true,
                        height: result.status.block_height,
                        blockHash: result.status.block_hash,
                        size: result.size,
                        weight: result.weight,
                        fee: result.fee,
                        version: result.version,
                        locktime: result.locktime,
                        vin: result.vin,
                        vout: result.vout,

                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log('Error: ', error.message)

                }
            )
    }

    getOutspendsInfo(txid) {
        fetch("https://blockstream.info/testnet/api/tx/"+txid+"/outspends")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('the outspends api info is: ',result);
                    this.setState({
                        outspends: result
                    });
                    this.toggle();
                },
                (error) => {
                    this.setState({
                        error
                    });
                    console.log('Error while fetching outspends api: ', error.message)

                }
            )
    }

    componentDidMount() {
        console.log('a transaction is: 11440bb2493d3f3ce5c4932bd79dd89c408b9dd7b5affdb0ec7b5434e0eb8ae8');
        console.log('a coinbase txid is: 35e78b61dce421c93cc476a90e2f416ffd13f6e70527b178617c888ebc43f0ff');
        this.getTransactionInfo(this.props.page)
    }

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
            this.getTransactionInfo(this.props.page);
            if (this.state.outspendsDetailsOpen) {
                this.setState({
                    outspendsDetailsOpen: false
                });
            }
        }

    }

    displayOutput(i){
        const output = this.state.vout[i];
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

    displaySpentStatus(i) {
        if (!this.state.outspends) {
            return <span>unknown</span>
        }
        if (!this.state.outspendsDetailsOpen) {
            return <span>unknown</span>
        }
        const outspend = this.state.outspends[i];
        if (!outspend.spent) {
            return <Badge color="light">unspent</Badge>
        }
        return (
            <Link to={"/explore/tbtc/tx/" + outspend.txid + "/#spent-by-" + this.props.page + "-" + i}>
                <Badge color="success">spent <FontAwesomeIcon icon="link" /></Badge>
            </Link>
        );

    }


    render(props) {
        const { outspendsDetailsOpen, error, isLoaded, height, blockHash, size, weight, fee, version, locktime, vin, vout } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const vBytes = Math.ceil(weight / 4);
            const feeRate = fee/ vBytes;

            return (
                <div>
                    <SectionDiv>
                        <h2>Transaction {this.props.page}</h2>
                        <div className="tx-stats-table">
                            <div style={{ color: 'red' }}>
                                <div>Block Height</div>
                                <div>{ height }</div>
                            </div>
                            <div>
                                <div>Included in Block</div>
                                <div><a href="/">{ blockHash }</a></div>
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
                                <div>{parseFloat(fee / 100000000).toFixed(8)} tBTC ({ feeRate.toFixed(0) } sat/vB)</div>
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
                                <h2>Inputs & Outputs</h2>

                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <p style={{ textAlign: 'center' }}> { vin.length } Input{ vin.length > 1 ? 's' : ''} Consumed</p>
                                </Row>
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
                                <Row>
                                    <Col>
                                        <p style={{ textAlign: 'center' }}> { vout.length } Output{ vout.length > 1 ? 's' : ''} Created</p>
                                    </Col>
                                    <Col>
                                        <Col style={{ textAlign: 'right'}}>
                                            <Button
                                                color="primary"
                                                onClick={() => this.getOutspendsInfo(this.props.page)}
                                                style={{ marginBottom: '1rem' }}>
                                                Details { outspendsDetailsOpen ?  '-' : '+' }
                                                </Button>
                                        </Col>
                                    </Col>
                                </Row>
                                <div className="tx-input-and-output-table">
                                    {
                                        vout.map((_, i) => this.displayOutput(i))
                                    }
                                </div>
                            </Col>
                        </Row>
                    </SectionDiv>
                </div>
            );
        }
    }
}

function displayInput(item,i) {
    if ( item.is_coinbase ) {
        return <div key={i}>coinbase</div>
    }
    return (
        <div key={i} id={ 'spent-by-'+item.txid+'-'+item.vout}>
            <div>#{i}</div>
            <div>
                {item.prevout.value / 100000000} tBTC from {' '}
                <Link to={"/explore/tbtc/address/" + item.prevout.scriptpubkey_address}>{item.prevout.scriptpubkey_address}</Link>{' '}
                <Link to={"/explore/tbtc/tx/" + item.txid +"/#output-index-"+item.vout}>
                <Badge color="primary">prev-output <FontAwesomeIcon icon="link" /></Badge>
                </Link>
            </div>
        </div>
    );
}



export default TxPage
