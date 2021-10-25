import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Project from "../components/Project"

import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const { title, description } = data?.site?.siteMetadata || {}
  const projects = data?.projects?.nodes || []

  return (
    <Layout>
      <section className={styles.project}>
        <div>
          <h2>Prejekty: </h2>

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
      </section>
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
