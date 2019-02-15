import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { Link } from 'gatsby'
import { Col, Row } from 'reactstrap'

import SectionDiv from "../components/section-div";
import IndexAdvantages from "../components/index-advantages"
import IndexSolidBgSection from '../components/index-solid-bg-section'


const IndexPage = () => (
  <Layout isHomepage={true}>
      <Hero />
      <SectionDiv>
          <h2>Wield bitcoin like never before</h2>
          <p>hookedin allows you to use bitcoin as a consumer or to accept bitcoin payments for your business, offering in both cases attractive advantages</p>
          <Row>
              <Col>
                  <h3>Send and Receive</h3>
                  <p>Trade with other individuals within hookedin or externally. Fast and with very low fees.</p>
              </Col>
              <Col>
                  <h3>Store</h3>
                  <p>Use hookedin wallet to keep your bitcoin safely for later use</p>
              </Col>
              <Col>
                  <h3>E-commerce</h3>
                  <p>hookedin platform will allow you to process bitcoin payments from your customers, safely, cost effectively and hands free</p>
              </Col>
          </Row>
      </SectionDiv>
      <IndexAdvantages />
      <IndexSolidBgSection>
          <h2>hookedin is secure</h2>
          <p style={{ textAlign: 'center' }}
             className="lead"
          >
              All transactions are secured by <b>blinded schnorr signatures</b>.
          </p>
      </IndexSolidBgSection>
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
      <IndexSolidBgSection>
          <h2 style={{ textAlign: 'center' }}>Are you ready to start?</h2>
          <p style={{ textAlign: 'center' }}
             className="lead"
          >
              No registration required.
          </p>
          <Row>
              <Col xs={{ size: 4, offset: 4 }}>
          <Link
              className="btn-lg btn-secondary btn-block"
              to="/overview/"
              style={{ textAlign: 'center'}}
          >Call to Action</Link>
              </Col>
          </Row>
      </IndexSolidBgSection>
  </Layout>
)

export default IndexPage

