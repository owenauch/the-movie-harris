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
          <h3 style={{ display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
            <span style={{ color: "#e51937"}}>{node.frontmatter.title}</span>
            <span style={{ marginLeft: ".8rem", marginRight: ".8rem"}}>|</span>
            {node.frontmatter.rating < 5 ?
              <div><span style={{ color: "#e51937"}}>{node.frontmatter.rating}</span><span>/10</span></div> : 
              <div><span style={{ color: "#2CB714"}}>{node.frontmatter.rating}</span><span>/10</span></div>
          }
            <span> — {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
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
            date(formatString: "DD MMMM, YYYY")
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
