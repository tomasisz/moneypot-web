import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'

import SectionDiv from "../components/section-div";
import IndexAdvantages from "../components/index-advantages"

const IndexPage = () => (
  <Layout isHomepage={true}>
      <Hero />
      <SectionDiv><h2>How does Hookedin work?</h2></SectionDiv>
      <SectionDiv>
          <h2>Hookedin is awesome</h2>
          <IndexAdvantages />
      </SectionDiv>
  </Layout>
)

export default IndexPage

