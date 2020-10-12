import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import armadillo from "../images/projects/armadillo.png"
import coding101 from "../images/projects/coding101.jpg"
import manifestwho from "../images/projects/manifestwho.png"

class ProjectsPage extends React.Component {
    render() {
        return (
            <Layout>
                <Metadata title="Projects by Jenny Brennan" desc="From civic tech and Chrome extensions, to coding education and speaking at events."/>
                <article>
                    <h1>Projects</h1>
                    
                    <h2>ManifestWho?</h2>
                    <img className="project" src={manifestwho} alt="ManifestWho quiz site" />
                    <p>A game of guessing political party manifestos as an experiment in UK political understanding.</p>
                    <p><a href="https://manifestwho.com">Visit manifestwho.com &#8594;</a></p>
                    
                    <h2>Coders Who Teach</h2>
                    <p>A community focussed on growing best practice in coding teaching amongst educators from industry.</p>
                    <p><a href="https://coderswhoteach.com">Visit coderswhoteach.com &#8594;</a></p>
                
                    <h2>Unbias</h2>
                    <p>A Chrome extension to remove faces and names in LinkedIn profiles and searches, in a bid to reduce the effects of unconscious bias on recruiters.</p>
                    <p><a href="https://unbias.io">Visit unbias.io &#8594;</a></p>
            
                    <h2>Coding Teaching</h2>
                    <img className="project" src={coding101} alt="Coding 101 slide in front of classroom" />
                    <p>I'm a lead instructor with <a href="http://www.codefirstgirls.org.uk/">Code First: Girls</a>, and <a href="http://23codestreet.com/">23 Code Street</a>. I designed and taught Twitter's Coding 101 course around the world. I have taught over 500 women and girls their first line of code. </p>
                
                    <h2>London Tech Meetups</h2>
                    <p>An open-source list of London tech meetups, categorised by languages, technologies, groups for beginners, and for underrepresented groups.</p>
                    <p><a href="https://londontechmeetups.com">Visit londontechmeetups.com &#8594;</a></p>
                
                    <h2>Design &amp; Illustration</h2>
                    <img className="project" src={armadillo} alt="Cute armadillo with long tongue"/>
                    <p>I have lead redesign and branding processes for YC-backed non-profit <a href="https://80000hours.org">80,000 Hours</a>, kids learn to code platform <a href="https://codekingdoms.com/">Code Kingdoms</a> and a number of SMEs. I also love illustration - both digital and on paper.</p>
                
                    <h2>Speaking</h2>
                    <p>I regularly speak and moderate panels for conferences, meetups and workshops. I am always interested in speaking opportunities - feel free to <a href="mailto:hello@jennybrennan.com">get in touch</a>.</p>
                    
                </article>
            </Layout>
        )   
    }
}

export default ProjectsPage