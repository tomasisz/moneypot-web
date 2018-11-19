import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import {
    Button
} from "reactstrap";
import SectionDiv from "../components/section-div";
import IndexAdvantages from "../components/index-advantages"

const IndexPage = () => (
  <Layout>
      <Hero>
          <h1>Hookedin</h1>
          <p>Your bitcoin scaling solution</p>
      </Hero>
      <SectionDiv><h2>How does Hookedin work?</h2></SectionDiv>
      <SectionDiv>
          <h2>Hookedin is awesome</h2>
          <IndexAdvantages />
      </SectionDiv>
      <Button>Learn More</Button>
  </Layout>
)

export default IndexPage

