import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

class ResearchPage extends React.Component {
    render() {
        return (
            <Layout>
                <Metadata title="Research by Jenny Brennan" desc="On data, AI, policy and society." canonical="https://jennybrennan.com/research"/>
                <article>
                    <h1>Research</h1>
                    <p>I research data, AI, policy and society at the <a href="https://adalovelaceinstitute.org">Ada Lovelace Institute</a>.</p>
                    <p>My current focus areas are:</p>
                    <ul>
                        <li>Methods, policy and capacity building for auditing/inspecting algorithmic systems</li>
                        <li>Algorithmic impact assessments and approaches to increase consideration and mitigation of risks in software development and data science</li>
                        <li>Transparency and accountability for of AI in the public sector</li>
                    </ul>
                    <p>Beyond my main research, I'm also interested in the power dynamics of data infrastructure, the environmental impact of AI and existential risk.</p>
                    <p>I've previously worked on research into policymaking for future generations and  unconscious bias, particularly in recruitment and online platforms.</p>
                    <h2 id="recent-publications">Recent publications</h2>
                    <ul>
                        <li><a href="https://www.adalovelaceinstitute.org/report/algorithmic-impact-assessment-case-study-healthcare/">Algorithmic impact assessment: a case study in healthcare</a>, 2022, Ada Lovelace Institute</li>
                        <li><a href="https://www.adalovelaceinstitute.org/report/technical-methods-regulatory-inspection/">Technical methods for regulatory inspection of algorithmic systems</a>, 2021, Ada Lovelace Institute</li>
                        <li><a href="https://www.adalovelaceinstitute.org/report/algorithmic-accountability-public-sector/">Algorithmic accountability for the public sector: Learning from the first wave of policy implementation</a>, 2021, Ada Lovelace Institute, AI Now and Open Government Partnership</li>
                        <li><a href="https://www.adalovelaceinstitute.org/algorithms-in-social-media-realistic-routes-to-regulatory-inspection/">Inspecting algorithms in social media platforms</a>, 2021, Ada Lovelace Institute and Reset</li>
                        <li><a href="https://www.adalovelaceinstitute.org/examining-the-black-box-tools-for-assessing-algorithmic-systems/">Examining the black box: tools for assessing algorithmic systems</a>, 2020, Ada Lovelace Institute</li>
                        <li><a href="https://www.adalovelaceinstitute.org/beyond-face-value-public-attitudes-to-facial-recognition-technology/">Beyond face value: public attitudes to facial recognition technology</a>, 2019, Ada Lovelace Institute</li>
                    </ul>
                    <h2 id="press-media-blogs">Press, media, blogs</h2>
                    <ul>
                        <li><a href="https://www.newstatesman.com/spotlight/cyber/2021/12/why-ofcom-needs-clear-powers-to-audit-big-techs-algorithms">Why Ofcom needs clear powers to audit Big Tech's algorithms</a> - written for The New Statesman</li>
                        <li><a href="https://venturebeat.com/2021/12/08/the-u-k-s-new-ai-transparency-standard-is-a-step-closer-to-accountable-ai/">The U.K.'s new AI transparency standard is a step closer to accountable AI</a> - written for VentureBeat</li>
                        <li><a href="https://www.adalovelaceinstitute.org/blog/algorithms-social-media-realistic-routes-to-regulatory-inspection/">Algorithms in social media platforms: realistic routes to regulatory inspection</a> - on the Ada Lovelace Institute blog</li>
                        <li><a href="https://charitydigital.org.uk/topics/topics/understanding-the-impact-of-algorithms-7472">Understanding the impact of algorithms</a> - co-authored with DataKind UK CEO Giselle Cory for Charity Digital News</li>
                        <li><a href="https://www.adalovelaceinstitute.org/facial-recognition-defining-terms-to-clarify-challenges/">Facial recognition: defining terms to clarify challenges</a> - on the Ada Lovelace Institute blog</li>
                    </ul>
                </article>
            </Layout>
        )   
    }
}

export default ResearchPage