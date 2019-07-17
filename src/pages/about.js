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
                            <p>Bridging technology and policy, I'm a software engineer, with particular interests in data and AI, as well as an obsession for all things policy and politics.</p>
                            <p>Previously at <a href="https://twitter.com">Twitter</a> and <a href="https://joinef.com">Entrepreneur First</a>, I've also worked with a number of early stage startups, on projects ranging from developing AI personal assistants to teaching over 200 kids to code. I have a soft spot for Clojure and functional programming.</p>
                            <p>I'm an instructor at <a href="http://codefirstgirls.org.uk">Code First: Girls</a>, lecturer at Ada College, and curate <a href="http://londontechmeetups.com">London Tech Meetups</a>. I enjoy speaking at events.</p>
                            <p>My academic background is in Politics, Philosophy and Economics, and I have a particular interest in the effects of unconscious bias in hiring processes.</p>
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