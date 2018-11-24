import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Container, Row, Col } from 'reactstrap';

const TechnicalOverview = () => (
    <Layout>
        <SectionDiv>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <h1>Technical Overview</h1>
                        <h2>How does hookedin work?</h2>
                        <h3>Step 1. Generate hookin address</h3>
                        <p>
                            This is a bitcoin address (created by deriving the Custodian Funding Public Key with your Public Key).
                        </p>
                        <h3>Step 2. Send bitcoin to hookin address</h3>
                        <p>
                            After you have done so (and it has enough confirmations), you let us know (by giving us the <i>txid</i> and Public Key).
                        </p>
                        <p>
                            We will issue you with <b>blinded coins</b>.
                        </p>
                        <h3>Step 3. Use blinded coins</h3>
                        <p>
                            All transfers and uses are <b>instant</b>, <b>cheap</b> and totally <b>private</b>!
                        </p>
                        <h3>Step 4. Cash your coins back into btc</h3>

                    </Col>
                </Row>
        </SectionDiv>
    </Layout>
)

export default TechnicalOverview

