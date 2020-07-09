import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import twentythirteen from "../images/archive/2013.png"
import twentyfourteen from "../images/archive/2014.png"
import twentyfifteen from "../images/archive/2015.png"
import twentysixteen from "../images/archive/2016.png"
import twentyseventeen from "../images/archive/2017.png"
import twentynineteen from "../images/archive/2019.png"

class AboutPage extends React.Component {
    render() {
        return (
            <Layout>
              <Metadata title="About JennyBrennan.com"/>
              <article>
                  <h1>About this website</h1>
                  <p>This site is <a href="https://github.com/JennyBrennan/jennybrennan.github.io">open sourced on GitHub</a>.</p>
                  <p>It's designed to be light-weight, accessible, privacy-friendly, easy to read and a little bit fun.</p>
                  <p>The current version is powered by:</p>
                  <ul>
                    <li><a href="https://gatsbyjs.org">GatsbyJS</a> static site generator.</li>
                    <li><a href="https://pages.github.com/">GitHub Pages</a> for hosting.</li>
                    <li><a href="https://goatcounter.com">Goat Counter</a> for privacy-preserving aggregate usage analytics.</li>
                    <li><a href="https://code.visualstudio.com/">VS Code</a> as my current editor of choice.</li>
                    <li><a href="https://procreate.art/">Procreate</a> iPad app for drawing the robots.</li>
                  </ul>
                  <h2>Previous versions</h2>
                  <p>Inspired by <a href="https://alexwlchan.net/about-the-site/">Alex</a>, for entertainment/history, here are some previous versions of this site (with thanks to the <a href="https://web.archive.org/">WayBack Machine</a>). I still like sea green, but I like accessible colour contrast more:</p>
                  <h3>2019</h3>
                  <img className="site-archive" src={twentynineteen} alt="Sea green header, with grey subheading reading: policy researcher and software engineer trying to do the most good above tiled text boxes describing projects."/>
                  <h3>2017</h3> 
                  <img className="site-archive" src={twentyseventeen} alt="Minimalist sea green circle on white background, saying Jenny Brennan, Software Engineer. Was a parallax scrolling minimalist affair, only interrupted by an illustration of an armadillo halfway down the page. Looked slick, but I'm disappointed in myself for its poor accessibility."/>
                  <h3>2016</h3>
                  <img className="site-archive" src={twentysixteen} alt="Hello, I'm Jenny Brennan, a designer/developer/Jane of all trades (yes, that cheesy an intro), with links to projects, portfolio, blog and illustration of an armadillo."/>
                  <h3>2015</h3>
                  <img className="site-archive" src={twentyfifteen} alt="Tiled images of projects including website design and development, illustration and events"/>
                  <p>(It looked a bit less broken at the time, honest.)</p>
                  <h3>2014</h3>
                  <img className="site-archive" src={twentyfourteen} alt="Business founder, web developer and drummer with illustration of pile of things including a bodhran, drum kit, iPod nano, books and some very nice shoes"/>
                  <p>Again, not sure if the WayBack machine just mangled it, or whether I never finished it.</p>
                  <h3>2013</h3>
                  <img className="site-archive" src={twentythirteen} alt="Placeholder page with abstract tree and swing and retro Twitter button to @jennyhbren"/>
                  <h3>Pre-2013</h3>
                  <p>This domain was owned by another Jenny Brennan. There are quite a few out there.</p>
              </article>
            </Layout>
        )   
    }
}

export default AboutPage