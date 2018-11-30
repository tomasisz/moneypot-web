import React from 'react'
import Layout from '../components/layout'
import SectionDiv from '../components/section-div'



const LowerFees = () => (
    <Layout>
        <SectionDiv>
            <h1>How does hookedin manage to lower the bitcoin transaction fees for you?</h1>
            <ul>
                <li><b>Coin selection.</b> We own a cutting edge coin selection algorithm that allows our code to make the smartest choices while performing bitcoin transactions. </li>
                <li><b>Economies of scale.</b> Having a high volume of coins available allows us to perform better coin selection.</li>
                <li><b>Batching. </b> We perform batching to make blockchain fees even lower in the fastest way.</li>
                <li><b>Consolidation. </b>Consolidation is a very complex process to cost effectively manage. It trades off fees/security/privacy. We do this for you at scale.</li>
            </ul>
        </SectionDiv>
    </Layout>
)

export default LowerFees

