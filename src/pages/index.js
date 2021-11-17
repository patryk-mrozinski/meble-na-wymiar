import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Project from "../components/Project"

import * as styles from "../styles/home.module.css"
import { Heading } from "theme-ui"

export default function Home({ data }) {
  const { title, description } = data?.site?.siteMetadata || {}
  const projects = data?.projects?.nodes || []

  return (
    <Layout>
      <div>
        <Heading mb="4">Projekty:</Heading>

        {projects.map(project => {
          return (
            <Project
              title={project.frontmatter.title}
              images={project.frontmatter.images}
              description={project.frontmatter.description}
            />
          )
        })}
      </div>
      <p>
        {title} - {description}
      </p>
    </Layout>
  )
}

export const query = graphql`
  query BasicInformation {
    site {
      siteMetadata {
        description
        title
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          description
          title
          images {
            image {
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
