import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import welcomeRobot from '../images/welcomerobot.png'

class Index extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Metadata title="Jenny Brennan" desc="AI policy researcher and software engineer" canonical="https://jennybrennan.com/" />
        <article>
          <img className="blog-robot" src={welcomeRobot} alt="Hello! on a sign held by a tiny robot." />
          <h1>Researching how to hold humans accountable for AI.</h1>
          <p>I'm Jenny, AI policy researcher and software engineer.</p>
          <p>You can read more <Link to={'/about'}>about me</Link>, <Link to={'/research'}>my current research</Link> on inspecting algorithms and assessing their impact on people and society, or the <Link to={'/projects'}>projects</Link> I'm involved in - from coding education and political tech to illustration. Or you can check out some recent <Link to={'/posts'}>posts</Link> below:</p>
          <h2>Writing &amp; resources</h2>
          <ul>
            {posts.slice(0,3).map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <li>
                  <Link to={node.fields.slug}>{title}</Link> <br/> {node.frontmatter.desc}
                </li>
              )
            })}
          </ul>
          <Link to={'/blog'} className="homepage">Read more posts...</Link>
        </article>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { ne: null } } }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            desc
          }
        }
      }
    }
  }
`
