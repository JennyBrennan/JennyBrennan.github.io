import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Header from "../components/header"

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header title="Writing &amp; resources" subtitle="Blog posts, research, resources and helpful snippets."/>
        <main>
          <ul className="blog-index">
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <li className="blog-card">
                  <Link to={node.fields.slug}>{title}</Link> - <em>{node.frontmatter.date}</em>
                  <br/>{node.frontmatter.desc}
                </li>
              )
            })}
          </ul>
        </main>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
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
