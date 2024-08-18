import React from 'react'
import {
  Container,
  Card
} from '../components/index'
import {
  first,
  second,
  third,
  fourth
} from '../assets/index'

function Home() {
  return (
    <div>
      <Container>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-3xl sm:text-8xl font-bold'>
            <span className='text-[#92DEED]'>YOUR </span>
            <span>BEST</span>
            <br />
            <i> IT </i>
            PARTNERS
          </div>
          <div className='flex flex-col items-center ml-4 mt-6 text-sm/[12px] sm:text-xs'>
            <p>From custom software development to cybersecurity, our team of experts is dedicated</p>
            <p>to delivering solutions that are tailored to your unique needs.</p>
          </div>
        </div>
        <div className='min-h-screen mt-20'>
          <h1 className='text-2xl sm:text-6xl font-bold flex justify-center sm:justify-start'>Why<br />Choose Us?</h1>
          <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-between'>
            <Card
              image={first}
              title="expertise"
              description='Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.'
            />

            <Card
              image={second}
              title="technology"
              description='We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.'
            />
            <Card
              image={third}
              title="solutions"
              description='We take a personalized approach to every project, working closely with you to understand your business and create solutions.'
            />
            <Card
              image={fourth}
              title="results"
              description="Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions."
            />
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  )
}

export default Home