import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Metadata from "../components/metadata"

class Unlisted extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Metadata title="Unlisted - Jenny Brennan" norobots={true} /> 
        <article>
          <h1>Unlisted posts</h1>
          <p>Posts that didn't make the cut for the <Link to={'/posts'}>posts page</Link> but are useful to share from time to time.</p>
          <p><strong>Warning:</strong> these posts may be outdated.</p>
          <ul>
            {posts.map(( { node } ) => {
              return (
                <li key={node.fields.slug}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  <br/>{node.frontmatter.desc}
                </li>
              )
            })}
          </ul>
        </article>
      </Layout>
    )
  }
}

export default Unlisted

export const pageQuery = graphql`
  query UnlistedQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: null } } }
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
            tags
          }
        }
      }
    }
  }
`
