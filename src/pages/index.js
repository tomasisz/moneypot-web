import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Hero from '../components/hero'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Jumbotron
} from "reactstrap";

const IndexPage = () => (
  <Layout>
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Collapse  navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>      <Hero>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
            <Button>hi</Button>
        </div>
      <Jumbotron>test</Jumbotron>
        <Link to="/page-2/">Go to page 2</Link>
      </Hero>
  </Layout>
)

export default IndexPage

