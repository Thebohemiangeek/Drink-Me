import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { /* Link, */ graphql } from "gatsby"
import BackgroundHero from "../components/Globals/BackgroundHero"
import Info from "../components/Home/info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About us" />
    <BackgroundHero
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    >
      {" "}
    </BackgroundHero>
    <Info />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
