import React from 'react'
import { Button, Col, Row } from "reactstrap";
import bgImg from '../images/bg.jpg'



const Hero = () => (
    <div
        style={{
            background: `linear-gradient(rgba(6, 25, 56, 0.1),rgba(56, 6, 16, 0.1)), url(${bgImg}) no-repeat center center fixed `,
            backgroundSize: 'cover',
            minHeight: '80vh',
            margin: '-5rem -2rem 0',
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
            <Row style={{     display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Col sm="8">
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0px'}}>The Ultimate </p>
                    <p style={{ fontSize: '3.5rem', fontWeight: 'bold', letterSpacing: '0.4rem'}}>Bitcoin Wallet</p>
                    <p
                        style={{ fontSize: '2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Wield bitcoin like never before
                    </p>
                    <p style={{ fontSize: '2rem'}}>Lowest fees, fast and private</p>
                    <p
                        style={{ fontSize: '1.5rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.2rem',
                            margin: '2rem 0'
                        }}
                    >alpha release: testnet only
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

