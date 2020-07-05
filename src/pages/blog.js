import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout"
import Metadata from "../components/metadata"

class BlogIndex extends React.Component {
  render() {
    const categories = get(this, 'props.data.allMarkdownRemark.group')

    return (
      <Layout>
        <Metadata title="Posts - blog and resources - Jenny Brennan"/> 
        <article>
          <h1>Posts</h1>
          <p>Blog posts, research, resources and helpful snippets. (<a href="https://jennybrennan.com/rss.xml">RSS feed</a>).</p>
            {categories.map(( { fieldValue, edges } ) => {
              return (
                <div key={fieldValue}>
                  <h2>{fieldValue}</h2>
                  <ul>
                    {edges.map(( { node } ) => {
                      return (
                        <li key={node.fields.slug}>
                          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                          <br/>{node.frontmatter.desc}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
        </article>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
