import React from 'react'
import { Button, Col, Row } from "reactstrap";
import bgImg from '../images/bg.svg'

const Hero = () => (
    <div
        style={{
            background: `url(${bgImg}) no-repeat center center fixed`,
            backgroundSize: 'cover',
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
                    <p
                        style={{ fontSize: '2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Wield bitcoin like never before
                    </p>
                    <p style={{ fontSize: '2rem'}}>Fast, cheap and super private!</p>
                    <p
                        style={{ fontSize: '1.5rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.2rem',
                            margin: '2rem 0'
                        }}
                    >For individual use or business
                    </p>
                    <Row>
                        <Col><Button size="lg" color="secondary">Learn More</Button></Col>
                        <Col><Button size="lg" href="https://wallet.hookedin.com/">Go to Wallet</Button></Col>
                    </Row>
                </Col>
                <Col xs="12" sm="4" md="4" lg="3">

                </Col>
            </Row>
        </div>
    </div>
)

export default Hero

