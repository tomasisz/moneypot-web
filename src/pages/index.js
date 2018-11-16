import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import {
    Button
} from "reactstrap";
//import AdvantageCard from '../components/advantage-card'

const IndexPage = () => (
  <Layout>
      <Hero>
          <h1>Hookedin</h1>
          <p>Your bitcoin scaling solution</p>
      </Hero>
      <h2>How does Hookedin work?</h2>
      <h2>Why Hookedin is awesome</h2>
      <Button>Learn More</Button>
  </Layout>
)

export default IndexPage

