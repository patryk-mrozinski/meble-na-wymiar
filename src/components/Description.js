import React from "react"
import { Paragraph } from "theme-ui"

const Description = ({ text }) => (
  <Paragraph sx={{ my: 2, maxWidth: "300px" }}>{text}</Paragraph>
)

export default Description
