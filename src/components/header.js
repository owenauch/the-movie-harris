import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      paddingTop: `20px`,
      backgroundColor: "black"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: "center"
      }}
    >
      {/* <div style={{height: "175px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid white"}}>
        <img
          alt="the harris"
          src="https://static.politico.com/dims4/default/f038baa/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fd4%2Ffa%2Fc50295a24e6b84618b97fe17e164%2F1902020-kamala-gty-773.jpg"
          style={{height: "100%", minHeight: "100%", objectFit: "contain", paddingRight: "20px", alignItems: "center", display: "inline-block", verticalAlign: "middle"}}
        />
      </div> */}
      <div style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
        <h1 style={{marginBottom: 10, color: "#e51937"}}>
          {siteTitle}
        </h1>
        <h4 style={{ color: "white" }}>{description}</h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  description : ``,
}

export default Header
