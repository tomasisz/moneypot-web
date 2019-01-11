import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap';

const Overview = () => (
    <Layout>
        <SectionDiv>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <h1>Overview</h1>
                    <h2 id="what-is-hookedin">What is hookedin?
                        <a href="#what-is-hookedin" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        Hookedin is bitcoin payment platform enabled by a bitcoin-pegged cryptocurrency which makes transactions practical for both business and individuals.
                    </p>
                    <p>
                        Our sidechain makes it easy to put money in and out and makes processing payments practical.
                    </p>
                    <p>Furthermore, hookedin offers the following relevant advantages for its users:</p>
                    <ul>
                        <li>
                            <b>Lower fees. </b> Benefit from our economy of scale and pay less than if you were processing the payments yourself.
                            If you are a business, We do all the consolidation, resulting in a transparent process for you. <Link to="/lower-fees">Learn More.</Link>
                        </li>
                        <li>
                            <b>Privacy. </b>
                            We know how important it is privacy for you and your customers. We offer untrackable transactions to keep the user's privacy protected.
                            Here is an example of how user's transactions are exposed publicly in the internet:
                            <Link to="/privacy"> Learn More.</Link>
                        </li>
                        <li>
                            <b>White Label. </b>
                            You have complete control of the whole process as it best suits your business and we don't push any branding of our own.
                        </li>
                        <li>
                            <b>Offline. </b>
                        </li>

                    </ul>
                    <h2 id="how-does-it-work">How does hookedin work?
                        <a href="#how-does-it-work" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
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
                    <br/>
                    <h2 id="integration-guide">How can I integrate Hookedin in my business?
                        <a href="#integration-guide" className="anchor-section float-right">#</a>
                    </h2>
                    <hr />
                    <p>
                        Check out our complete <Link to="/integration-guide">Integration Guide</Link>
                    </p>
                </Col>
            </Row>
        </SectionDiv>
    </Layout>
)

export default Overview