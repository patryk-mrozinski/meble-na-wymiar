import React from "react"
import Description from "../components/Description"
import Img from "gatsby-image"

import Slider from "react-slick"
import { Heading, Box, Flex } from "theme-ui"

const Project = ({ title, images, description }) => {

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

  return (
    <Box>
      <Flex sx={{ flexDirection: ["column", "row"], marginBottom: "70px" }}>
        <Box sx={{ flexGrow: 1, maxWidth: "70%", minWidth: "auto" }}>
          <Slider
            dots={true}
            customPaging={customPaging}
            appendDots={appendDots}
            infinite={true}
          >
            {images.map(image => {
              return (
                <div>
                  <Img fluid={image.image.childImageSharp.fluid} />
                </div>
              )
            })}
          </Slider>
        </Box>

        <Box sx={{ margin: "0 15px" }}>
          <Heading as="h2" mb="2">
            {title}{':'}
          </Heading>

          <Description text={description} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Project
