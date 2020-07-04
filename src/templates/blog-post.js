import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Header from "../components/header"
import Layout from "../components/layout"
import robot from "../images/environmentrobot.png"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <div>
          <img className="blog-robot" src={robot} alt="blah"/>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <Header title={post.frontmatter.title} subtitle={post.frontmatter.desc}/>
          <main>
            <article>
              <small>{post.frontmatter.date}</small>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <Link to={'/'} className="read-all">
                ← Read all posts
              </Link>
            </article>
          </main>
        </div>
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
