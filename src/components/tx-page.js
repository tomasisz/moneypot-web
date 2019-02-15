import React from 'react'
import SectionDiv from '../components/section-div'
import './tx-page.css'


class TxPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            height: 0,
            blockHash: '',
            size: 0,
            weight: 0,
            fee: 0,
            version: 0,
            locktime: 0,
        };
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
        const { error, isLoaded, height, blockHash, size, weight, fee, version, locktime } = this.state;
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
                                <div>???</div>
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
                </div>
            );
        }
    }
}



export default TxPage

