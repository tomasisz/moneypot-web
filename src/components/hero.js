import React from 'react'
import { Button, Col, Row, Badge } from "reactstrap";
import './hero.scss'
import ScreenshotImg from '../images/pixel2-screenshot.png'

const Hero = () => (
    <div
        className="hero"
        style={{
            background: `linear-gradient(#0552B1,#3D91F9), no-repeat center center fixed `,
            minHeight: '80vh',
            margin: '-5rem -2rem 0',
        }}
    >
        <div
            style={{
                color: '#fff',
                margin: '0% 8%',
                padding: '10vh 2rem',
                textAlign: 'center'
            }}
        >
            <Row style={{     display: 'flex', alignItems: 'center'}}>
                <Col sm="8">
                    <h1 className="brand-title">hookedin</h1>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0px'}}>A <del>cutting edge</del> revolutionary </p>
                    <p style={{ fontSize: '3.5rem', fontWeight: 'bold', letterSpacing: '0.4rem'}}>Bitcoin Wallet</p>
                    <p style={{ fontSize: '1.5rem'}}>
                        <Badge color="primary">lowest fees</Badge>{'  '}
                        <Badge color="primary">private</Badge>{'  '}
                        <Badge color="primary">fast</Badge>{'  '}
                        <Badge color="primary">open source</Badge>{'  '}
                    </p>

                    <p
                        style={{ fontSize: '1.4rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3rem',
                            marginTop: '5rem',
                            fontStyle: 'italic'
                        }}
                    >
                        Wield bitcoin like never before
                    </p>

                    <Row>

                    </Row>
                </Col>
                <Col xs="12" sm="4" md="4" lg="3">
                    <img src={ScreenshotImg} alt="hookedin wallet screenshot" className="screenshot-hero"/>
                    <p
                        style={{ fontSize: '1rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.1rem',
                            margin: '2rem 0'
                        }}
                    >alpha release: testnet only
                    </p>
                    <Button size="lg" href="https://wallet.hookedin.com/" color="secondary">Go to Wallet</Button>
                </Col>
            </Row>
        </div>
    </div>
)

export default Hero

