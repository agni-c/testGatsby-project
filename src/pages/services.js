import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import HeroSection from "../components/Reuseable/HeroSection"
import { graphql } from "gatsby"
// import Infoblock from "../components/Reuseable/Infoblock"
import Dualnfoblock from "../components/Reuseable/Dualinfoblock"
// import TeamPhotoSection from "../components/about/TeamPhotoSection"
import "../components/about/about.css"

const ServicesPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Learn More about our Products"
      subtitle=""
      heroclass="about-background"
    />
    <Dualnfoblock
      heading="Msg from the team"
      CardImg="https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      CardBtn="Click Picture"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ServicesPage
