import React from "react"
import Link from 'gatsby-link'
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
          <p>I'm <Link to={'/about'}>Jenny</Link>, and <Link to={'/research'}>my current research</Link> is on evaluating AI models for ethics and safety risks. I'm also involved in <Link to={'/projects'}>projects</Link> from coding education and political tech to illustration.</p>
        </article>
      </Layout>
    )
  }
}

export default Index