import React from "react"
import { BaseHeading } from "./BaseHeading"

const HeadingN = props => (
  <BaseHeading as="h1" fontSize={[3, 4, 5]} {...props} />
)

export { HeadingN as HN }
