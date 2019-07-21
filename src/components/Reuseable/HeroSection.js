import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function HeroSection({ img, title, subtitle, heroclass }) {
  return (
    <BackgroundImage Tag="section" className={heroclass} fluid={img}>
      <h1 className="text-white text-uppercase text-centre display-4">
        {title}
      </h1>
      <div className="text-warning">{subtitle}</div>
    </BackgroundImage>
  )
}
