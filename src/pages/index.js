import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { Link } from 'gatsby'
import { Col, Row } from 'reactstrap'

import SectionDiv from "../components/section-div";
import IndexAdvantages from "../components/index-advantages"



const IndexPage = () => (
  <Layout isHomepage={true}>
      <Hero />
      <SectionDiv>
          <h2>Trade with bitcoin like never before</h2>
          <Row>
              <Col>Send and Receive</Col>
              <Col>Store</Col>
              <Col>E-commerce</Col>
          </Row>
      </SectionDiv>
      <SectionDiv>
          <h2>hookedin is awesome</h2>
          <IndexAdvantages />
      </SectionDiv>
      <SectionDiv>
          <h2>Are you thinking of the possible drawbacks?</h2>
          <Row>

              <Col xs={7} sm={9} md={10}>
                  <h3>Counter-party-risk</h3>
                  <p>hookedin requires you to place your bitcoin in our custody, therefore it is not trustless.
                      To tackle this we have develop hookedin to be <Link to="/provably-honest">provably honest</Link>.
                  </p>
              </Col>
          </Row>
          <br/>
          <Row>
              <Col xs={7} sm={9} md={10}>
                  <h3>Availability</h3>
                  <p>hookedin stores your bitcoin offline, therefore our system needs to be online for you to access it.
                      So there's a very small risk that our service could be down at some point. </p>
                  <p>To mitigate this risk we use the most reliable servers in the market, and are running without problems 99.9% of the time.</p>
              </Col>

          </Row>
      </SectionDiv>
  </Layout>
)

export default IndexPage

