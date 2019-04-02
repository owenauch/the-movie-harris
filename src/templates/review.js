import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ReviewTemplate extends React.Component {
  render() {
    const review = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} smallHeader={true}>
        <SEO
          title={review.frontmatter.title}
          description={review.frontmatter.description || review.excerpt}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
          <h1>{review.frontmatter.title}</h1>
          <p style={{ marginLeft: ".8rem", marginRight: ".8rem"}}>|</p>
          {/* make red if below 5, green if above 5 */}
          {review.frontmatter.rating < 5 ?
            <h2>
              <span style={{ color: "#e51937"}}>{review.frontmatter.rating}</span>
              /10
            </h2> : 
            <h2>
              <span style={{ color: "#2CB714"}}>{review.frontmatter.rating}</span>
              /10
            </h2>
          }
        </div>
        <div dangerouslySetInnerHTML={{ __html: review.html }} />
      </Layout>
    )
  }
}

export default ReviewTemplate

export const pageQuery = graphql`
  query ReviewBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        rating
      }
    }
  }
`