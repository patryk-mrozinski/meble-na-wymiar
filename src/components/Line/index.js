import React from "react"
import { Box } from "theme-ui"

const Line = ({ sx = {} }) => (
  <Box
    sx={{
      border: "solid 1px teal",
      width: "100px",
      marginBottom: "24px",
      ...sx,
    }}
  />
)

export default Line
