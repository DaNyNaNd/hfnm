import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Family from '../components/family';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Add your family members</h2>
    <Family />
  </Layout>
)

export default IndexPage
