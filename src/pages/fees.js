import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import { Row, Col } from 'reactstrap';



const Fees = () => (
    <Layout>
        <SectionDiv>
            <h1>Fees</h1>
            <h2>Deposit</h2>
            <Row>
                <Col className="fee-box list-group-item-info" sm={{ size: 3, offset: 3 }}>Deposit fee:
                </Col>
                <Col className="fee-box list-group-item-info" sm="3">50 satoshi
                </Col>
            </Row>
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
        </SectionDiv>
    </Layout>
)

export default Fees

