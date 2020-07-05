import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import robot from "../images/environmentrobot.png"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <Metadata title="{post.frontmatter.title} - Jenny Brennan"/>
        <article>
          <img className="blog-robot" src={robot} alt="blah"/>
          <h1>{post.frontmatter.title}</h1>
          <h3>{post.frontmatter.desc}</h3>
          <main>
            <article>
              <small>{post.frontmatter.date}</small>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <Link to={'/'} className="read-all">
                ← Read all posts
              </Link>
            </article>
          </main>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        desc
      }
    }
  }
`
