import React from 'react'
import { Container } from '../components/index'
import { Consultation } from '../components/index'
import Typography from '@mui/material/Typography';
import theme from '../theme';
import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eigth,
  nineth,
  Discovery,
  Planning,
  Development,
  Implementation
} from '../assets/Services/index'
import {
  ServiceCard,
  HowItWorks
} from '../components/index'

function Services() {

  const serviceData = [
    { image: first, title: 'Web Development', description: 'Create websites that are both visually appealing and functional for users.' },
    { image: second, title: 'Mobile App Development', description: 'Create or enhance mobile applications, ensuring optimized user experience.' },
    { image: third, title: 'Cybersecurity', description: 'Provides advanced protection for your data and systems against threats.' },
    { image: fourth, title: 'Digital Marketing', description: 'Create solutions to help businesses achieve their digital marketing goals.' },
    { image: fifth, title: 'Cloud Computing', description: 'Provides access to scalable computing resources to optimize their operations.' },
    { image: sixth, title: 'Software Development', description: 'Provides customized solutions to create and maintain software applications.' },
    { image: seventh, title: 'IT Consulting', description: 'Provides businesses with expert guidance and support for IT projects.' },
    { image: eigth, title: 'Data Analysis', description: 'Provide data analysis for varied categories to help client businesses.' },
    { image: nineth, title: 'Network Management', description: 'Provide management of network infrastructure design for clients.' }
  ]

  const process = [
    {
      no: '01',
      image: Discovery,
      name: 'Discovery',
      description: "We'll conduct a thorough analysis of your operations, market, and competition to identify the best solutions for you."
    },
    {
      no: '02',
      image: Planning,
      name: 'Planning',
      description: "Once we have a clear understanding, we develop a customized plan for the services and solutions we provide."
    },
    {
      no: '03',
      image: Development,
      name: 'Development',
      description: "We begin the design and development process, creating custom solutions for your specific business needs."
    },
    {
      no: '04',
      image: Implementation,
      name: 'Implementation',
      description: "We implement our solution into your business operations and integrate them with other systems and platforms."
    }
  ]

  return (
    <Container>
      <div className='min-h-80'>
        <div>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              textAlign: 'center',
              [theme.breakpoints.up('sm')]: {
                fontSize: '4rem',
              }
            }}
          >
            Services
          </Typography>
        </div>
        <div className='m-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10'>
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <div className='min-h-screen'>
        <div>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              textAlign: 'center',
              marginTop: '6rem',
              marginBottom: '2rem',
              [theme.breakpoints.up('sm')]: {
                fontSize: '3rem',
              }
            }}
          >
            How It Works
          </Typography>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className="flex justify-center items-center">
            <hr className="border-2 border-[#92DEED] my-12 mx-4 h-40 border-l border-t-0" />
          </div>

          {process.map((process, index) => (
            <div key={index}>
              <HowItWorks
                no={process.no}
                image={process.image}
                name={process.name}
                description={process.description}
              />
              <div className="flex justify-center items-center">
                <hr className="border-2 border-[#92DEED] my-12 mx-4 h-40 border-l border-t-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Consultation />
    </Container>
  )
}

export default Services