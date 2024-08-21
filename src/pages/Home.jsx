import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import theme from '../theme'
import {
  Container
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
                sx={{ width: '50%', objectFit: 'cover' }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div">
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
                sx={{ width: '50%', objectFit: 'cover' }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div">
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
                sx={{ width: '50%', objectFit: 'cover' }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div">
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
                sx={{ width: '50%', aspectRatio: '10/9', objectFit: 'cover' }}
              />
              <CardContent sx={{ marginTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="div">
                  results
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
    </div>
  )
}

export default Home