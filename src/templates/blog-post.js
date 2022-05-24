import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { GatsbyImage } from "gatsby-plugin-image";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const canonicalUrl="https://jennybrennan.com" + post.fields.slug
   
    return (
      <Layout>
        {post.frontmatter.featuredImage ? <Metadata title={post.frontmatter.title} desc={post.frontmatter.desc} canonical={canonicalUrl} image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData.getSrc}/>
        : <Metadata title={post.frontmatter.title} desc={post.frontmatter.desc} canonical={canonicalUrl}/> }
        <article>
          {
            post.frontmatter.featuredImage &&  
            <GatsbyImage
              image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              className="blog-robot" />
          }
          <h1>{post.frontmatter.title}</h1>
          <h3 className="subheading">{post.frontmatter.desc}</h3>
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
    );
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`query BlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    html
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      desc
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 500, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  }
}
`
