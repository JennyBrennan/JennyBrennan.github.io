import React from "react"
import { Helmet } from "react-helmet"

export default ({ title }) => (
  <Helmet>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>{title}</title>
  </Helmet>
)