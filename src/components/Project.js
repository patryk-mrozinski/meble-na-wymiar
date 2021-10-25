import React from "react"
import { useState } from "react"
import Description from "../components/Description"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"

const Project = ({ title, images, description }) => {
  const [isDiscriptionVisible, toggleDescriptionVisibility] = useState(false)

  const renderSlides = () =>
    images.map(image => {
      return (
        <div>
          <Img
            fluid={image.image.childImageSharp.fluid}
            style={{ width: "500px" }}
          />
        </div>
      )
    })

  function customPaging(i) {
    return (
      <div>
        <Img fluid={images[i].image.childImageSharp.fluid} />
      </div>
    )
  }

  function appendDots(dots) {
    return (
      <div style={{ backgroundColor: "#eee" }}>
        <ul style={{ margin: "3px" }}> {dots} </ul>
      </div>
    )
  }

  const onButtonClick = () => {
    toggleDescriptionVisibility(!isDiscriptionVisible)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div className="App">
          <Slider
            dots={true}
            customPaging={customPaging}
            appendDots={appendDots}
          >
            {renderSlides()}
          </Slider>
        </div>

        <div style={{ margin: "50px auto" }}>
          <button onClick={onButtonClick}>Toggle Details</button>

          {isDiscriptionVisible && <Description text={description} />}
        </div>
      </div>
    </div>
  )
}

export default Project
