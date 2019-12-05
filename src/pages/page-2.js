import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/shared/components/seo/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
