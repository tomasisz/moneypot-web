import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import bitcointalkLogo from '../images/bitcointalk-icon.png'

const Footer = () => (
    <footer
        style={{
            width: '100%',
            height: '100px',
            padding: '2rem',
            textAlign: 'center'
        }}
    >
        <Container>
            <Row>
                <Col>
                    <a href="https://bitcointalk.org/" target="_blank" rel="noopener noreferrer">
                        <img src={bitcointalkLogo} style={{ height: '1.3rem', margin: 0}} alt="bitcointalk.org logo" /> bitcointalk.org
                    </a>
                </Col>
                <Col>
                    <Link to="/about">About</Link>

                </Col>
                <Col>
                    <Link to="/contact">Contact</Link>

                </Col>
            </Row>
        </Container>

    </footer>
)
export default Footer
