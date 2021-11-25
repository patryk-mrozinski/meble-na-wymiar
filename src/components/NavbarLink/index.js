import React from "react"
import { Link } from "gatsby"
import { Box } from "theme-ui"

const NavbarLink = ({ to, children, sx = {} }) => (
  <Box
    as={Link}
    to={to}
    sx={{
      display: "inline-block",
      marginLeft: "40px",
      fontWeight: "500",
      paddingBottom: "8px",
      borderBottom: "3px solid transparent",
      color: "white",
      textTransform: "uppercase",

      "&:hover": {
        borderColor: "wheat",
      },

      ...sx,
    }}
  >
    {children}
  </Box>
)

export default NavbarLink
