import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import armadillo from "../images/armadillo.png"
import coding101 from "../images/coding101.jpg"

class ProjectsPage extends React.Component {
    render() {
        return (
            <Layout>
                <Metadata title="Projects by Jenny Brennan"/>
                <article>
                    <h1>Projects</h1>
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
                                <h3>Coders Who Teach</h3>
                                <p>A community focussed on growing best practice in coding teaching amongst educators from industry.</p>
                                <p><a className="project-link" href="https://coderswhoteach.com">Visit coderswhoteach.com &#8594;</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <h3>Unbias</h3>
                                <p>A Chrome extension to remove faces and names in LinkedIn profiles and searches, to reduce the effects of unconscious bias on recruiters.</p>
                                <p><a className="project-link" href="https://unbias.io">Visit unbias.io &#8594;</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <h3>Campaign Library</h3>
                                <p>A new library resource for activists and campaign organisers on campaign theory and practice. Research, product and development with Campaign Lab.</p>
                                <p><a className="project-link" href="https://campaignlibrary.org">Visit campaignlibrary.org &#8594;</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-image" style={{backgroundImage: `url(` + coding101 + `)`}}></div>
                        </li>
                        <li>
                            <div className="card">
                                <h3>Coding Teaching</h3>
                                <p>I'm a lead instructor with <a href="http://www.codefirstgirls.org.uk/">Code First: Girls</a>, and <a href="http://23codestreet.com/">23 Code Street</a>. I designed and taught Twitter's Coding 101 course around the world. I have taught over 500 women and girls their first line of code. </p>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <h3>London Tech Meetups</h3>
                                <p>An open-source list of London tech meetups, categorised by languages, technologies, groups for beginners, and for underrepresented groups.</p>
                                <p><a className="project-link" href="https://londontechmeetups.com">Visit londontechmeetups.com &#8594;</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <h3>Design & Illustration</h3>
                                <p>I have lead redesign and branding processes for YC-backed non-profit <a href="https://80000hours.org">80,000 Hours</a>, kids learn to code platform <a href="https://codekingdoms.com/">Code Kingdoms</a> and a number of SMEs. I also love illustration - both digital and on paper.</p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-image" style={{backgroundImage: `url(` + armadillo + `)`}}></div>
                        </li>
                        <li>
                            <div className="card">
                                <h3>Speaking</h3>
                                <p>I regularly speak and moderate panels for conferences, meetups and workshops. I am always interested in speaking opportunities - feel free to <a href="mailto:hello@jennybrennan.com">get in touch</a>.</p>
                            </div>
                        </li>
                    </ul>
                </article>
            </Layout>
        )   
    }
}

export default ProjectsPage