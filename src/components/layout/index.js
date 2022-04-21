import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children, isOpen }) => {

  return (<>
    <div style={{
      display: 'flex',
    }}>
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <main style={{ transition: 'margin-left 0.7s', marginLeft: `${isOpen ? '320px' : '40px'}` }}>{children}</main>
    </div>
    <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
      © {new Date().getFullYear()}, Customer-name
    </footer>
  </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default Layout
