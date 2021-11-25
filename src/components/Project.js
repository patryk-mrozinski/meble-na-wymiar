import React from "react"
import Description from "../components/Description"
import Img from "gatsby-image"

import Slider from "react-slick"
import { Heading, Box, Flex } from "theme-ui"

import Line from "./Line"

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
    <Box
      sx={{
        background: "#e3e3e3",
        padding: "30px 0 6px",
        marginBottom: "50px",
        borderRadius: "10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
      }}
    >
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
            {title}
          </Heading>

          <Line />

          <Description text={description} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Project
