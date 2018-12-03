import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Row, Col } from 'reactstrap';
import { Link } from 'gatsby'



const Fees = () => (
    <Layout>
        <SectionDiv>
            <h1>Fees</h1>
            <h2>Withdrawal</h2>
            <p>These fees includes both bitcoin blockchain fees and our commission. The list is updated dynamically, according to current market fees.</p>
            <Row>
                <Col className="fee-box green-fee"
                    sm={{ size: 3, offset: 3 }}>Immediate + High priority:
                </Col>
                <Col className="fee-box green-fee"
                    sm="3">10,000 satoshi
                </Col>
            </Row>
            <Row>
                <Col className="fee-box list-group-item-success"
                    sm={{ size: 3, offset: 3 }}>Immediate + Normal priority:
                </Col>
                <Col className="fee-box list-group-item-success" sm="3">5,000 satoshi
                </Col>
            </Row>
            <Row>
                <Col className="fee-box list-group-item-warning"
                     sm={{ size: 3, offset: 3 }}>Queued (~24 hours):
                </Col>
                <Col className="fee-box list-group-item-warning" sm="3">500 satoshi
                </Col>
            </Row>
            <Row>
                <Col className="fee-box list-group-item-danger" sm={{ size: 3, offset: 3 }}>Low priority (~7 days):
                </Col>
                <Col className="fee-box list-group-item-danger" sm="3" >50 satoshi
                </Col>
            </Row>

            <h2>Deposit</h2>
            <p>Our fee system is optimized to offer the lowest cost in the market, as well as being transparent for you. There are no hidden fees.</p>
            <p>
                Following these efforts, we do charge a deposit fee, so that when, for example, you withdraw a balance that is product of several deposits,
                the fee you will pay will be just the one you see above and nothing else. To learn more about this, please refer to our <Link to="/faq">FAQ.</Link>
            </p>
            <Row>
                <Col className="fee-box list-group-item-info" sm={{ size: 3, offset: 3 }}>Deposit fee:
                </Col>
                <Col className="fee-box list-group-item-info" sm="3">50 satoshi
                </Col>
            </Row>
        </SectionDiv>
    </Layout>
)

export default Fees

