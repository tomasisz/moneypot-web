import React from 'react'
import hi from 'hookedin-lib'
import Repl from '../../components/repl';


class DemoPrivKey extends React.Component {

    constructor(props) {
        super(props);

        this.newPrivkey = this.newPrivkey.bind(this);

        this.state = {
            privkey: hi.PrivateKey.fromRand()
        };
    }

    newPrivkey() {
        this.setState({ privkey: hi.PrivateKey.fromRand() });
    }

    render() {
        console.log('render recalled')
        return (
                <Repl>hi.PrivateKey.fromRand().toBech()</Repl>
        );
    }
}

export default DemoPrivKey
