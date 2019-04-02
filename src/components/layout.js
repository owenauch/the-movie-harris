import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import SmallHeader from "./smallHeader"

const Layout = ({ children, smallHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        {
          smallHeader ?
            <SmallHeader siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} /> :
            <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
        }
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            Site built by
            {` `}
            <a href="https://twitter.com/owenauch">Owen Auch</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  smallHeader: PropTypes.bool
}

export default Layout
