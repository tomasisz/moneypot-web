import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Router, navigate } from "@reach/router"



const App = () => (
    <Layout>
        <SectionDiv>
            <Router className="router">
                <QueryTx path="explore/" />
                <QueryTx path="explore/tbtc/" />
                <QueryTx path="explore/tbtc/tx/" />
                <Tx path="explore/tbtc/tx/:page" />
            </Router>
        </SectionDiv>
    </Layout>
)



class QueryTx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('txid submitted: ' + this.state.value);
        navigate(`/explore/tbtc/tx/${this.state.value}`)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Explore</h1>
                <p>Enter a txid</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Txid:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Go" />
                </form>
            </div>
        );
    }
}


const Tx = props => (
    <div>
        <h1>Explore: {props.page}</h1>
    </div>
);

export default App





