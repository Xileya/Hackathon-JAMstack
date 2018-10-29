import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Hello my name is Natalie. I am interested on how to make websites in different ways. I am have some coding skills and I am a fast learner. I would like to participate this upcoming freeCodeCamp 2018 JAMstack Hackathon Online because it will be a new experience for me as a developer and I am excited to learn something new. </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
