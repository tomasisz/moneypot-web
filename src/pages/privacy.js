import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'
import tweet from '../images/tweet.png'


const Privacy = () => (
    <Layout>
        <SectionDiv>
            <h1>Privacy</h1>
            <p>It is important to protect your privacy (or your customer's privacy) when performing bitcoin transactions.</p>
            <p>Here is an example of how exposed your activity can be on the web: </p>
            <a href="https://twitter.com/BitcoinViper/status/1062932629333274625" target="_blank" rel="noopener noreferrer">
                <img
                    src={tweet}
                    alt="Tweet"
                    style={{ width: '560px'}}
                />
            </a>

        </SectionDiv>
    </Layout>
)

export default Privacy



