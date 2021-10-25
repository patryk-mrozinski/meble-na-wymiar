import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import Project from "../components/Project"

export default function Projekty({ data }) {
  const projects = data.projects.nodes

  return (
    <Layout>
      {projects.map(project => {
        return (
          <Project
            title={project.frontmatter.title}
            images={project.frontmatter.images}
            description={project.frontmatter.description}
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
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
