import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiTeapot } from "react-icons/gi"
import { /* Link, */ graphql } from "gatsby"
import BackgroundHero from "../components/Globals/BackgroundHero"
import Info from "../components/Home/info"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundHero
      img={data.img.childImageSharp.fluid}
      title="regular tea"
      styleClass="default-background"
    >
      {" "}
      <GiTeapot />
    </BackgroundHero>
    <Info></Info>
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
