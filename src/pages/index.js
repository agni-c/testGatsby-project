import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import HeroSection from "../components/Reuseable/HeroSection"
import { graphql } from "gatsby"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualnfoblock from "../components/Reuseable/Dualinfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="LearnCodeOnline.com"
      heroclass="hero-background"
    />
    <Infoblock heading="About me" />
    <Coursecart courses={data.courses} />
    <Dualnfoblock
      heading="Our team"
      CardImg="https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      CardBtn="Click Picture"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
