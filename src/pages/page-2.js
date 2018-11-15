import React from 'react'
import { Link } from 'gatsby'
import hi from 'hookedin-lib'

import Layout from '../components/layout'


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
      <div>
        <h3>{ this.state.privkey.toBech() }</h3>
        <button onClick={ this.newPrivkey }>New!</button>
      </div>
    );
  }
}





const SecondPage = () => (
  <Layout>
    <h1>This is what a hookedin private key looks:</h1>
    <DemoPrivKey/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
