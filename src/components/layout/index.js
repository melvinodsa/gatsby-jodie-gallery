import * as React from "react"
import PropTypes from "prop-types"

import Sidebar from "../sidebar"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div style={{
      display: 'flex',
    }}>
      <Sidebar />
      <main style={{ marginLeft: '320px' }}>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
