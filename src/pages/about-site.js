import React from "react"
import Layout from "../components/layout"

class AboutPage extends React.Component {
    render() {
        return (
            <Layout>
              <article>
                  <h1>About this website</h1>
                  <p>This site is <a href="https://github.com/JennyBrennan/jennybrennan.github.io">open sourced on GitHub</a>.</p>
                  <p>It's designed to be light-weight, accessible, easy to read and a little bit fun.</p>
                  <p>I built it using:</p>
                  <ul>
                    <li>GatsbyJS - a static site generator.</li>
                  </ul>
                  <h2>Previous versions</h2>
                  <p>For entertainment/history, here are some previous versions of this site (with thanks to the <a href="https://web.archive.org/">WayBack Machine</a>):</p>
                  <h3>2019-2020</h3> 
                  <h3>2017-2019</h3>
                  <h3>2013</h3>

                  <h3>Pre-2013</h3>
                  <p>This domain was owned by another Jenny Brennan. There are quite a few out there.</p>
              </article>
            </Layout>
        )   
    }
}

export default AboutPage