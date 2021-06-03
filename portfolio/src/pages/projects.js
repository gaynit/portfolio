import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
   
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        
        github
        id
        
        title
        url
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage
