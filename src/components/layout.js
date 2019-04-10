import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import CustomNavbar from './custom-navbar'
import Footer from './footer'
import '../styles/layout.scss'


const Layout = ({ children, isHomepage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <CustomNavbar isHomepage={isHomepage} />
        <div
          style={{
            margin: '0 auto',
            padding: '0 2rem 0',
            paddingTop: 0,
              minHeight: '70vh',
          }}
        >
          {children}
        </div>
          <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
