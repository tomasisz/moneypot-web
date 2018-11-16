import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import icon16 from '../../static/favicons/favicon-16x16.png'
import icon32 from '../../static/favicons/favicon-32x32.png'
import favicon from '../../static/favicons/favicon.ico'


import CustomNavbar from './custom-navbar'
import '../styles/layout.scss'


const Layout = ({ children }) => (
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
          link={[
              { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${icon16}` },
              { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${icon32}` },
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <CustomNavbar />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
