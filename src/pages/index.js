import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import welcomeRobot from '../images/welcomerobot.png'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Metadata title="Jenny Brennan" desc="AI policy researcher and software engineer" canonical="https://jennybrennan.com/" />
        <article>
          <img className="blog-robot" src={welcomeRobot} alt="Hello! on a sign held by a tiny robot." />
          <h1>Researching how to hold humans accountable for AI.</h1>
          <p>I'm Jenny, an AI policy researcher and software engineer.</p>
          <p>You can read more <Link to={'/about'}>about me</Link>, <Link to={'/research'}>my current research</Link> on inspecting algorithms and assessing their impact on people and society, or the <Link to={'/projects'}>projects</Link> I'm involved in - from coding education and political tech to illustration.</p>
        </article>
      </Layout>
    )
  }
}

export default Index