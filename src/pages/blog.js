import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    const categories = get(this, 'props.data.allMarkdownRemark.group')

    return (
      <Layout>
        <div>
          <h1>Posts</h1>
          <p>Blog posts, research, resources and helpful snippets.</p>
          <main>
            {categories.map(( { fieldValue, edges } ) => {
              return (
                <div>
                  <h2>{fieldValue}</h2>
                  <ul>
                    {edges.map(( { node } ) => {
                      return (
                        <li className="blog-card">
                          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                          <br/>{node.frontmatter.desc}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </main>
        </div>
      </Layout>
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
      group(field:frontmatter___tags){  
        fieldValue
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
  }
`
