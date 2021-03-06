




import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Blogs from "../components/Blogs.js"
const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs:{ nodes: blogs },
  } = data
  return (
    <Layout>
       <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="featured projects" showLink />
    
    </Layout>
   

  
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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

    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMM DO,YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  }
`

export default IndexPage
