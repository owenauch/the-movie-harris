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
    {console.log(data)}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
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
