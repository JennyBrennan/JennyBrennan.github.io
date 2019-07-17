import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout"
import Header from "../components/header"

class Index extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <div>
          <Header subtitle="Policy researcher and software engineer, trying to do the most good."/>
          <main>
          <h2 className="homepage">Projects</h2>
            <ul className="card-grid">
              <li>
                <div className="card">
                    <h3>ManifestWho?</h3>
                    <p>A game of guessing political party manifestos as an experiment in UK political understanding.</p>
                    <p><a className="project-link" href="https://manifestwho.com">Visit manifestwho.com &#8594;</a></p>
                </div>
              </li>
              <li>
                  <div className="card">
                      <h3>Campaign Library</h3>
                      <p>A new library resource for activists and campaign organisers on campaign theory and practice. Political research, product and development with <a href="http://campaignlab.london">Campaign Lab</a>.</p>
                      <p><a className="project-link" href="https://campaignlibrary.org">Visit campaignlibrary.org &#8594;</a></p>
                  </div>
              </li>
              <li>
                  <div className="card">
                      <h3>Unbias</h3>
                      <p>A Chrome extension to remove faces and names in LinkedIn profiles and searches, to reduce the effects of unconscious bias on recruiters.</p>
                      <p><a className="project-link" href="https://unbias.io">Visit unbias.io &#8594;</a></p>
                  </div>
              </li>
            </ul>
            <strong><Link to={'/projects'} className="homepage">See more projects...</Link></strong>

            <h2 className="homepage">Writing & resources</h2>
            <ul className="blog-index">
              {posts.slice(0,3).map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <li className="blog-card">
                    <Link to={node.fields.slug}>{title}</Link> - <em>{node.frontmatter.date}</em>
                    <br/>{node.frontmatter.desc}
                  </li>
                )
              })}
            </ul>
            <strong><Link to={'/blog'} className="homepage">Read more posts...</Link></strong>
          </main>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
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
