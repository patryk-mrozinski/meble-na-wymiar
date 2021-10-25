import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
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
    <nav>
      <h1>{title}</h1>

      <div className="links">
        <Link to="/">Meble Na Wymiar</Link>
        <Link to="/projekty">Projekty</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
