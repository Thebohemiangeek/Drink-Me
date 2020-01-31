import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiTeapot } from "react-icons/gi"
import { /* Link, */ graphql } from "gatsby"
import BackgroundHero from "../components/Globals/BackgroundHero"
import Info from "../components/Home/info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
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
    <Info />
    <Menu items={data.menu} />
    <Products />
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
    menu: allContentfulDrinkItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 59, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default IndexPage
