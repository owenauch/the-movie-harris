import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const SmallHeader = ({ siteTitle, description }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      backgroundColor: "black"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: `flex`,
        alignItems: "center"
      }}
    >
      <div style={{ height: "5rem", margin: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
        <Link to="/">
          <h1 style={{marginBottom: 10, color: "#e51937"}}>
            {siteTitle}
          </h1>
        </Link>
      </div>
    </div>
  </header>
)

SmallHeader.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

SmallHeader.defaultProps = {
  siteTitle: ``,
  description : ``,
}

export default SmallHeader
