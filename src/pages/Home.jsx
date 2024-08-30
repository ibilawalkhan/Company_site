import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../theme'
import {
  Container,
  ClientStory,
  ServiceCard
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
            <Typography variant="caption" display="block" gutterBottom>
              From custom software development to cybersecurity, our team of experts is dedicated
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              to delivering solutions that are tailored to your unique needs.
            </Typography>
          </div>
        </div>

        <div className='min-h-screen mt-20'>
          <div>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '2rem',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '3rem',
                  justifyContent: 'flex-start',
                },
              }}
            >
              Why<br />Choose Us?
            </Typography>
          </div>

          <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-between'>
            <Card sx={{ maxWidth: 245, backgroundColor: '#11112B', color: 'white', marginTop: '40px' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={first}
                sx={{
                  width: '50%',
                  objectFit: 'cover',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div"
                  sx={{
                    textAlign: 'center',
                    [theme.breakpoints.up('sm')]: {
                      textAlign: 'left',
                    },
                  }}>
                  Expertise
                </Typography>
                <Typography variant="body2">
                  Our team of experienced experts have the knowledge and expertise to
                  deliver innovative IT solutions that meet your unique needs
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 245, backgroundColor: '#11112B', color: 'white', marginTop: '40px' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={third}
                sx={{
                  width: '50%',
                  objectFit: 'cover',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div"
                  sx={{
                    textAlign: 'center',
                    [theme.breakpoints.up('sm')]: {
                      textAlign: 'left',
                    },
                  }}
                >
                  Technology
                </Typography>
                <Typography variant="body2">
                  We stay up to date with the latest trends and technologies in the IT industry,
                  so you can get the most advanced solutions available.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 245, backgroundColor: '#11112B', color: 'white', marginTop: '40px' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={fourth}
                sx={{
                  width: '50%',
                  objectFit: 'cover',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div"
                  sx={{
                    textAlign: 'center',
                    [theme.breakpoints.up('sm')]: {
                      textAlign: 'left',
                    },
                  }}
                >
                  Solutions
                </Typography>
                <Typography variant="body2">
                  We take a personalized approach to every project, working closely with
                  you to understand your business and create solutions.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 245, backgroundColor: '#11112B', color: 'white', marginTop: '40px' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={second}
                sx={{
                  width: '50%',
                  objectFit: 'cover',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div"
                  sx={{
                    textAlign: 'center',
                    [theme.breakpoints.up('sm')]: {
                      textAlign: 'left',
                    },
                  }}
                >
                  Results
                </Typography>
                <Typography variant="body2">
                  Our track record speaks for itself – we've helped businesses of all sizes
                  and industries achieve their goals with our IT solutions.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
      <div className='bg-[#D5D9E5] text-black min-h-screen flex flex-col items-center justify-center'>
        <Container>
          <div className='flex justify-center'>
            <h2 className='text-2xl sm:text-4xl md:text-6xl p-6'>
              <span className='font-bold'>We believe that</span>
              <i> technology</i> <br />
              <span className='font-bold'> can</span>
              <span> change</span>
              <span className='font-bold'> the world</span>
            </h2>
          </div>
          <div className='flex flex-col items-center justify-center ml-6 mr-6 sm:ml-24 sm:mr-24 lg:ml-60 lg:mr-60'>
            <Typography variant="caption" display="block" gutterBottom>
              That's why we're committed to delivering innovative IT solutions to businesses of all sizes.
              Our team of experienced professionals is dedicated to helping you achieve your goals and thrive
              in a rapidly evolving digital landscape.
            </Typography>
          </div>
          <div className='flex flex-col justify-center items-center mt-4 w-full'>
            <div className='flex justify-between w-1/2 mr-10 sm:m-0'>
              <div className='flex justify-center w-1/5 font-bold text-2xl'>500+</div>
              <div className='flex justify-center w-1/5 font-bold text-2xl'>98%</div>
              <div className='flex justify-center w-1/5 font-bold text-2xl'>35+</div>
            </div>
            <div className='flex justify-between w-1/2 mr-16 sm:m-0'>
              <div>Successful Projects</div>
              <div>Satisfied Clients</div>
              <div>Handled Clients</div>
            </div>
          </div>
        </Container>
      </div>
      <div className='bg-[#11112B] text-white min-h-96'>
        <Container>
          <div className=''>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '2rem',
                marginTop: '100px',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '3rem',
                  justifyContent: 'flex-start',
                },
              }}
            >
              Testimonials
            </Typography>
          </div>
          <div className='sm:flex'>
            <ClientStory
              title="Amazing!"
              testimonial="“WaveNet's cybersecurity solution gave us the peace of mind we needed to focus on our business. They took the time to understand our unique needs and created a solution that protected our sensitive data and ensured compliance with industry regulations.”"
              clientName="Tom Johnson"
              clientTitle="CIO of Mika Medika Healthcare"
            // clientImage={firstClientImage}
            />
            <hr className="border-1 border-gray-300 my-12 sm:mx-4 sm:h-40 sm:border-l sm:border-t-0" />
            <ClientStory
              title="Best Service"
              testimonial="“We were struggling to keep up with the demands of our growing business until we partnered with WaveNet. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.”"
              clientName="Jane Doe"
              clientTitle="COO of DEF Manufacturing"
            // clientImage={firstClientImage}
            />
          </div>
        </Container>
      </div>
      <div className='bg-[#D5D9E5] text-black min-h-screen'>
        <div className='p-1 mt-28'>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '2rem',
              marginTop: '40px',
              [theme.breakpoints.up('sm')]: {
                fontSize: '3.5rem'
              },
            }}
          >
            Services
          </Typography>
        </div>
        <div className='mr-8 ml-8 sm:mr-20 sm:ml-20 mt-10'>
          <ServiceCard serviceName="Custom Software Development" />
          <hr className='border-1 border-gray-600 mt-8' />
          <ServiceCard serviceName="Web Development" />
          <hr className='border-1 border-gray-600 mt-8' />
          <ServiceCard serviceName="Mobile Development" />
          <hr className='border-1 border-gray-600 mt-8' />
          <ServiceCard serviceName="IOT Development" />
          <hr className='border-1 border-gray-600 mt-8' />
          <ServiceCard serviceName="Embedded Designs" />
          <hr className='border-1 border-gray-600 mt-8' />
          <ServiceCard serviceName="Generative AI" />
          <hr className='border-1 border-gray-600 mt-8' />
          <ServiceCard serviceName="Machine Learning" />
          <hr className='border-1 border-gray-600 mt-8' />
          <ServiceCard serviceName="Bubble No-Code Development" />
          <hr className='border-1 border-gray-600 mt-8' />
        </div>
      </div>
      <div className='bg-[#11112B] text-white'>
        <Container>
          <div>
            <div className='flex justify-center'>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  marginTop: '80px',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '3rem'
                  },
                }}
              >
                Need IT Solutions?
              </Typography>
            </div>
            <div className='flex justify-center'>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '3rem'
                  },
                }}
              >
                Let’s start now
              </Typography>
            </div>
            <div className='flex justify-center mt-8'>
              <Button variant="outlined" sx={{ color: 'white' }}>GET FREE CONSULTATION</Button>
            </div>
          </div>
          <div className='flex justify-around mt-28'>
            <div className='flex flex-col sm:flex-row'>
              <div className='text-[#92DEED] sm:w-1/5 text-2xl mb-4'>Wavenet</div>
              <div className='flex justify-between'>
                <div className='ml-8'>
                  <div className='font-bold'>Explore</div>
                  <div className='mt-2'>About</div>
                  <div className='mt-2'>Services</div>
                  <div className='mt-2'>Blog</div>
                  <div className='mt-2'>Contact</div>
                </div>
                <div className='ml-8'>
                  <div className='font-bold'>Contact</div>
                  <div className='mt-2'>Email</div>
                  <div className='mt-2'>Phone</div>
                  <div className='mt-2'>Address</div>
                  <div className='mt-2'>Social Media</div>
                </div>
                <div className='ml-8'>
                  <div className='font-bold'>Newsletter</div>
                  <div className='w-1/2'>
                    Subscribe to our newsletter to stay informed about our latest products, services, and promotions.
                    Feel free to unsubscribe anytime!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='border-1 white mt-8' />
        </Container>
      </div>
    </div>
  )
}

export default Home