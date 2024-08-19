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
        <div></div>
      </Container>
    </div>
  )
}

export default Home