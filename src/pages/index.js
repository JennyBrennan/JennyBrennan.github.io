import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout"
import Metadata from "../components/metadata"

class Index extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Metadata title="Jenny Brennan"/>
        <article>
          <h1>Hello there!</h1>
          <p>Some copy.</p>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
