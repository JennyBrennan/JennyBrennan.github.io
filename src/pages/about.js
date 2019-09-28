import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import jennybrennan from "../images/jennybrennan.jpg"
import twitter from "../images/twitter1.png"
import linkedin from "../images/linkedin1.png"
import email from "../images/email1.png"

class AboutPage extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <Header title="About" subtitle="Policy researcher and software engineer, trying to do the most good."/>
                    <main>
                        <article>
                            <img className="profile-photo" src={jennybrennan} alt="Jenny Brennan - a brown-haired woman stood infront of the sea"/>
                            <p>I research data, AI, policy and society at the <a href="https://adalovelaceinstitute.org">Ada Lovelace Institute</a>.</p>
                            <p>Previously in software engineering at <a href="https://twitter.com">Twitter</a> and <a href="https://joinef.com">Entrepreneur First</a>, I've also worked with a number of early stage startups on projects ranging from developing AI personal assistants to an editor for the BBC micro:bit. I have a soft spot for Clojure and functional programming.</p>
                            <p>I'm a lead instructor with <a href="http://codefirstgirls.org.uk">Code First: Girls</a>, have lectured in Data Ethics at <a href="https://ada.ac.uk/">Ada College</a>, and founded the <a href="https://coderswhoteach.com">Coders Who Teach</a> community. I curate <a href="http://londontechmeetups.com">London Tech Meetups</a> and am an experienced public speaker - from meetups, to conferences, to panel moderation.</p>
                            <p>My academic background is in Politics, Philosophy and Economics, and I have a particular interest in the effects of <a href="https://unbias.io">unconscious bias in hiring processes</a>.</p>
                            <p>When I'm not doing those things, I'm usually found advocating for <a href="http://effective-altruism.com/ea/45/what_is_effective_altruism/" title="Introduction to Effective Altruism">effective altruism</a> (can I recommend <a href="http://www.amazon.co.uk/Doing-Good-Better-Effective-Difference/dp/1783350490/ref=sr_1_1?ie=UTF8&amp;qid=1451584737&amp;sr=8-1&amp;keywords=doing+good+better" title="Doing Good Better on Amazon">this book</a>?) or behind a drum kit.</p>
                            <p>
                                <a href="https://twitter.com/jennyhbren" title="Jenny Brennan on Twitter"><img className="social-media" src={twitter} alt="Twitter"/></a>
                                <a href="https://uk.linkedin.com/in/jennyhbren" title="Jenny Brennan on LinkedIn"><img className="social-media" src={linkedin} alt="LinkedIn"/></a>
                                <a href="mailto:hello@jennybrennan.com" title="Email Jenny Brennan"><img className="social-media" src={email} alt="Email"/></a>
                            </p>
                        </article>
                    </main>
                </div>
            </Layout>
        )   
    }
}

export default AboutPage