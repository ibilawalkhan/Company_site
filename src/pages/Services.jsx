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
  nineth
} from '../assets/Services/index'
import {
  ServiceCard
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
                fontSize: '2.5rem',
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

      <Consultation />
    </Container>
  )
}

export default Services