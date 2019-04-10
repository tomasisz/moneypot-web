import React from 'react'
import { Link } from 'gatsby'

import {
    Row,
    Col
} from "reactstrap";
import fastImg from '../images/fast.jpg'
import privateImg from "../images/private.jpg";
import cheapImg from '../images/cheap.jpg'
import './index-advantages.css'


const IndexAdvantages = () => (
    <div  style={{
        margin: '0 -1rem',
        padding: '2rem 4rem'
    }}>

        <Row className="row-container" style={{ background: '#f5f5f5'}}>
            <Col xs={4} className="image-container">
                <img src={privateImg} alt="privacy" className="index-image" />
            </Col>
            <Col className="text-container" xs={8}>
                <h3 className="header">The most private service</h3>
                <p>
                    There will be no way to track your transactions, hookedin offers you the most private service in the market.
                </p>
                <Link to="/privacy">Learn More</Link>
            </Col>
        </Row>
        <Row className="row-container">
            <Col xs={4} className="image-container">
                <img src={cheapImg} alt="cost" className="index-image"/>
            </Col>
            <Col className="text-container" xs={8}>
                <h3 className="header">Save on fees!</h3>
                <p>
                    hookedin uses a state-of-the-art algorithm for coin selection to ensure the fees paid in bitcoin transactions are the lowest possible.
                </p>
                <p style={{ fontWeight: 'bold'}}>See for yourself:</p>
                <div className="fees-comparison-table">
                    <div>
                        <div></div>
                        <div>Send [fast]</div>
                        <div>Send [economic]</div>
                        <div>Receive</div>
                        <div>Instant</div>
                    </div>
                    <div>
                        <div>Any Wallet</div>
                        <div>....</div>
                        <div>....</div>
                        <div>0.1 sat</div>
                        <div>Not available</div>
                    </div>
                    <div>
                        <div>hookedin</div>
                        <div>....</div>
                        <div>....</div>
                        <div>0.01 sat</div>
                        <div>0.001 sat</div>
                    </div>
                </div>
                <Link to="/fees">Go to fees page</Link>
            </Col>
        </Row>
        <Row className="row-container" style={{ background: '#f5f5f5'}}>
            <Col xs={4} className="image-container">
                <img src={fastImg} alt="fast" className="index-image"/>
            </Col>
            <Col xs={8} className="text-container">
                <h3 className="header">It's fast, almost instant!</h3>
                <p>
                    Trading within hookedin with other users is very fast. You don't need to wait for confirmations.
                </p>
                <Link to="/">Learn More</Link>
            </Col>
        </Row>
    </div>
)

export default IndexAdvantages
