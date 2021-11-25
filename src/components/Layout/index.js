import React from "react"

import Navbar from "../Navbar"

import { Box } from "theme-ui"

import "../../styles/global.css"

export const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="content">{children}</div>

        <footer>
          <p>Copyright 2021 Meble Na Wymiar</p>
        </footer>
      </Box>
    </Box>
  )
}

export default Layout
