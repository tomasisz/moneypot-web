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


    componentDidMount(props) {
        console.log('a transaction is: 11440bb2493d3f3ce5c4932bd79dd89c408b9dd7b5affdb0ec7b5434e0eb8ae8');
        fetch("https://blockstream.info/testnet/api/tx/"+this.props.page)
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

    render(props) {
        const { collapse, error, isLoaded, height, blockHash, size, weight, fee, version, locktime, vin, vout } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <SectionDiv>
                        <h2>Transaction {this.props.page}</h2>
                        <div className="tx-stats-table">
                            <div>
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
                                <div>Virtual size (vbytes)</div>
                                <div>{ Math.ceil(weight / 4 )}</div>
                            </div>
                            <div>
                                <div>Weight units (WU)</div>
                                <div>{ weight }</div>
                            </div>
                            <div>
                                <div>Transaction fees</div>
                                <div>{parseFloat(fee / 100000000).toFixed(8)} tBTC (101 sat/vB)</div>
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
                            <Col>
                                <h2>Inputs & Outputs</h2>
                            </Col>
                            <Col style={{ textAlign: 'right'}}>
                                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details { collapse ?  '-' : '+' }</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="tx-input-and-output-table">
                                                {
                                                    vin.map(function(item, i){
                                                        return (
                                                            <div key={i}>
                                                                <div>#{i}</div>
                                                                <div><a href={"/explore/tbtc/tx/"+item.txid}>{item.txid}:{item.vout}</a></div>
                                                                <div>{ item.prevout.value/100000000 } tBTC</div>
                                                            </div>
                                                        );
                                                    })
                                                }

                                        <Collapse isOpen={this.state.collapse} style={{ color: 'red' }}>
                                            TO DO
                                        </Collapse>
                                </div>
                            </Col>
                            <Col xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon="chevron-right" />
                            </Col>
                            <Col>
                                <div className="tx-input-and-output-table">
                                    {
                                        vout.map(function(item, i){
                                            return (
                                                <div key={i}>
                                                    <div>#{i}</div>
                                                    <div>{item.scriptpubkey_address}</div>
                                                    <div>{ item.value/100000000 } tBTC</div>
                                                </div>
                                            );
                                        })
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



export default TxPage

