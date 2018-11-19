import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';

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
