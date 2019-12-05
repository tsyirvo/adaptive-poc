import React from "react"
import { Link } from "gatsby"
import isMobile from "ismobilejs"
import loadable from "@loadable/component"

import Layout from "@shared/layout/layout"
import SEO from "@shared/components/seo/Seo"
import Box from "@primitives/Box"
import Text from "@primitives/Text"

const Sidebar = loadable(() =>
  import(`@desktop/components/home/sidebar/Sidebar`)
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box display="flex" flexDirection="row">
      <Box flex={1}>
        <Text variant="title">Hi people</Text>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
        <Link to="/page-2/">Go to page 2</Link>
      </Box>

      {!isMobile().phone && <Sidebar />}
    </Box>
  </Layout>
)

export default IndexPage
