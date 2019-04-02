import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`movies`, `Harrison Steedman`, `film`, `reviews`]} />
    <h1>Hi Harris</h1>
    <p>Blog posts would go under here.</p>
  </Layout>
)

export default IndexPage