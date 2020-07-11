import React from "react"
import { Helmet } from "react-helmet"
import defaultImage from "../images/welcomerobot.png"

export default ({ title, desc, image, norobots }) => (
  <Helmet>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="title" content={title}/>
    <meta name="description" content={desc}/>
    <meta name="twitter:dnt" content="on"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@jennyhbren"/>
    <meta name="twitter:creator" content="@jennyhbren"/>
    <meta name="twitter:title" content={title + " - Jenny Brennan"}/>
    <meta name="twitter:description" content={desc}/>
    <meta name="twitter:image" content={"https://jennybrennan.com" + (image ? image : defaultImage)}/>
    {norobots && <meta name="robots" content="noindex" />}
    <title>{title}</title>
  </Helmet>
)