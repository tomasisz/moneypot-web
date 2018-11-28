import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Row, Col } from 'reactstrap';

const Docs = () => (
    <Layout>
        <SectionDiv>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <h1>Documentation</h1>
                    <h2 id="deposits">Deposits
                        <a href="#deposits" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        1. Generate hookin address.
                        This is done <b>offline</b> from <i>hookedin</i>.
                    </p>
                    <p>
                        2. Save hookin address in your database.
                    </p>
                    <p>
                        3. Give hookin address to users as a deposit address.
                    </p>
                    <p>
                        4. When the user deposits, credit the user and claim <b>hookedin blinded coins</b>.
                    </p>
                    <h2 id="withdrawals">Withdrawals
                        <a href="#withdrawals" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        To do.
                    </p>
                    <h2 id="btcpayserver">BTCPayServer Integration
                        <a href="#btcpayserver" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        BTCPayServer is a popular open-source, self-hosted payment processor for bitcoin.
                        We offer a hassle-free integration for this technology.
                    </p>
                </Col>
            </Row>
        </SectionDiv>
    </Layout>
)

export default Docs

