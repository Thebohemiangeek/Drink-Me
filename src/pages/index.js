import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiTeapot } from "react-icons/gi"
import Navbar from "../components/Globals/Navbar"
import { /* Link, */ graphql } from "gatsby"
import BackgroundHero from '../components/Globals/BackgroundHero'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <BackgroundHero img={data.img.childImageSharp.fluid} title="regular tea" styleClass="default-background">    <GiTeapot />
</BackgroundHero>
    
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
