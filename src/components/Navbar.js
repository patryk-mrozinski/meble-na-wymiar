import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Heading, Box } from "theme-ui"

import NavbarLink from "./NavbarLink"

const Navbar = ({ sx = {} }) => {
  const data = useStaticQuery(graphql`
    query Info {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <Flex
      sx={{
        margin: "0 0 21px",
        backgroundColor: "teal",
        padding: "21px",
        justifyContent: "space-between",
        alignItems: "baseline",
        ...sx,
      }}
    >
      <Heading sx={{ color: "white", textTransform: "uppercase" }}>
        {title}
      </Heading>

      <Box>
        <NavbarLink to="/">Meble Na Wymiar</NavbarLink>
        <NavbarLink to="/projekty">Projekty</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
      </Box>
    </Flex>
  )
}

export default Navbar
