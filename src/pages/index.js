import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`movies`, `Harrison Steedman`, `film`, `reviews`]}
    />
    <h1>Reviews</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
        >
          <h3 style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "10px"}}>
            <span style={{ color: "#3467eb"}}>{node.frontmatter.title}</span>
            <span style={{ marginLeft: ".5rem", marginRight: ".5rem"}}>|</span>
            {node.frontmatter.rating < 5 ?
              <div><span style={{ color: "#e51937"}}>{node.frontmatter.rating}</span><span>/10</span></div> : 
              <div><span style={{ color: "#2CB714"}}>{node.frontmatter.rating}</span><span>/10</span></div>
          }
          </h3>
          <div style={{ color: "#636363"}}>{node.frontmatter.date}</div>
          <p style={{color: "#203636"}}>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            rating
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
