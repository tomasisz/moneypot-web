import React from 'react'
import { Button, Col, Row } from "reactstrap";
import tile from '../images/tile.png'
import pirateImg from '../images/logo.svg'

const Hero = () => (
    <div
        style={{
            backgroundImage: `url(${tile})`,
            minHeight: '80vh',
            margin: '-5rem -1rem 0',
        }}
    >
        <div
            style={{
                color: '#fff',
                margin: '0% 8%',
                padding: '15% 2rem',
                textAlign: 'center'
            }}
        >
            <Row>
                <Col sm="8">
                    <p style={{ fontSize: '3rem', fontWeight: 'bold'}}>Bitcoin Layer 2.0</p>
                    <p style={{ fontSize: '2rem'}}>Wield bitcoin like never before</p>
                    <p style={{ fontSize: '2rem'}}>Making payments fast, cheap and super private!</p>

                    <Row>
                        <Col><Button size="lg" color="secondary">Learn More</Button></Col>
                        <Col><Button size="lg" href="https://wallet.hookedin.com/">Go to Wallet</Button></Col>
                    </Row>
                </Col>
                <Col xs="12" sm="4" md="4" lg="3">
                    <img src={pirateImg} alt="pirate illustration"/>
                </Col>
            </Row>
        </div>
    </div>
)

export default Hero

