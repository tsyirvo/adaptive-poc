import React from "react"
import PropTypes from "prop-types"
import isMobile from "ismobilejs"
import loadable from "@loadable/component"

import PremiumHeader from "@shared/components/premiumHeader/PremiumHeader"

import "./layout.css"

const AsyncPage = loadable(props =>
  import(`../../${props.page}/components/navbar`)
)

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <PremiumHeader />
        {!isMobile().phone && <AsyncPage page="desktop" />}
        <main>{children}</main>
        {isMobile().phone && <AsyncPage page="mobile" />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
