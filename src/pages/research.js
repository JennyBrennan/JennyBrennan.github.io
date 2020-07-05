import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

class ResearchPage extends React.Component {
    render() {
        return (
            <Layout>
                <Metadata title="Research by Jenny Brennan" desc="On data, AI, policy and society."/>
                <article>
                    <h1>Research</h1>
                    <p>I research data, AI, policy and society at the <a href="https://adalovelaceinstitute.org">Ada Lovelace Institute</a>.</p>
                    <p>My current focus areas are:</p>
                    <ul>
                      <li>The use of algorithmic decision systems in the public sector</li>
                      <li>Methods and policy for auditing or regulatory inspection of algorithmic systems</li>
                    </ul>
                    <p>I've also been involved with the Ada Lovelace Institute's research on facial recognition and biometrics.</p>
                    <p>Beyond my main research, I'm also interested in the environmental impact of AI and existential risk.</p> {/* Add something on injustice/inequality */}
                    <p>I've previously worked on research into policymaking for future generations and  unconscious bias, particularly in recruitment and online platforms.</p>
                    <h2>Recent publications</h2>
                    <ul>
                      <li><a href="https://www.adalovelaceinstitute.org/examining-the-black-box-tools-for-assessing-algorithmic-systems/">Examining the Black Box: Tools for Assessing Algorithmic Systems</a></li>
                      <li>Facial recognition terms stuff</li>
                      <li>Beyond Face Value</li>
                    </ul>
                </article>
            </Layout>
        )   
    }
}

export default ResearchPage