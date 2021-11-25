import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Project from "../components/Project"
import Line from "../components/Line"

import * as styles from "../styles/home.module.css"
import { Heading, Flex } from "theme-ui"

export default function Home({ data }) {
  const { title, description } = data?.site?.siteMetadata || {}
  const projects = data?.projects?.nodes || []

  return (
    <Layout>
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        <Heading
          sx={{
            marginBottom: "16px",
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "2px",
          }}
        >
          Projekty
        </Heading>

        <Line />
      </Flex>

      {projects.map(project => {
        return (
          <Project
            title={project.frontmatter.title}
            images={project.frontmatter.images}
            description={project.frontmatter.description}
          />
        )
      })}
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
