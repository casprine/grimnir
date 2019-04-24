import React, { Fragment } from "react"
import GlobalStyle from "../../global.css"

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    {children}
  </Fragment>
)

export default Layout
