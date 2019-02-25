import React from 'react'
import SectionDiv from '../components/section-div'
import './tx-page.css'
import { Row, Col, Collapse, Button } from 'reactstrap';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight)

class TxPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
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
            vout: []

        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
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

    componentDidMount() {
        console.log('a transaction is: 11440bb2493d3f3ce5c4932bd79dd89c408b9dd7b5affdb0ec7b5434e0eb8ae8');
        console.log('a coinbase txid is: 35e78b61dce421c93cc476a90e2f416ffd13f6e70527b178617c888ebc43f0ff');
        this.getTransactionInfo(this.props.page)
    }

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
            this.getTransactionInfo(this.props.page);
        }
    }


    render(props) {
        const { collapse, error, isLoaded, height, blockHash, size, weight, fee, version, locktime, vin, vout } = this.state;
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
                                            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details { collapse ?  '-' : '+' }</Button>
                                        </Col>
                                    </Col>
                                </Row>
                                <div className="tx-input-and-output-table">
                                    <Collapse isOpen={this.state.collapse} style={{ color: 'red' }}>
                                        TO DO
                                    </Collapse>

                                    {
                                        vout.map(displayOutput)
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
        <div key={i} id={ 'spent-by-'+item.txid}>
            <div>#{i}</div>
            <div>
                {item.prevout.value / 100000000} tBTC from {' '}
                <Link to={"/explore/tbtc/address/" + item.prevout.scriptpubkey_address}>{item.prevout.scriptpubkey_address}</Link>{' '}
                (<Link to={"/explore/tbtc/tx/" + item.txid +"/#output-index-"+item.vout}>prev-output</Link>)
            </div>
        </div>
    );
}

function displayOutput(item, i){
    return (
        <div key={i} id={ 'output-index-'+i}>
            <div>#{i}</div>
            <div>
                { item.value/100000000 } tBTC to {' '}
                <Link to={"/explore/tbtc/address/" + item.scriptpubkey_address}>{item.scriptpubkey_address}</Link>{' '}
                (<Link to={"/explore/tbtc/tx/" + item.txid +"/#spent-by-"+item.vout}>spent</Link>)

            </div>
        </div>
    );
}


export default TxPage

// TO DO:
// In the links to other transactions we should be using Link and make sure all the API info updates
// Collapse / detail