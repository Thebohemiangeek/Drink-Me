import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiTeapot } from "react-icons/gi"
import Navbar from "../components/Globals/Navbar"



 const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Navbar/>
    <h1>Hi people</h1>
    <GiTeapot/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
