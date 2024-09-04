import React from 'react'
import Typography from '@mui/material/Typography';
import { Container } from './index'
import theme from '../theme'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Consultation({ className = "" }) {

    const navigate = useNavigate();

    const handleConsultationClick = () => {
        navigate('/contact');
    };

    return (
        <div>
            <div className={` bg-[#11112B] text-white  ${className}`}>
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
                            <Button
                                variant="outlined"
                                sx={{ color: 'white' }}
                                onClick={handleConsultationClick}
                            >
                                GET FREE CONSULTATION
                            </Button>
                        </div>
                    </div>
                    <div className='flex justify-around mt-28'>
                        <div className='flex flex-col sm:flex-row'>
                            <div className='text-[#92DEED] sm:w-1/5 text-2xl mb-4'>GutenSol</div>
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

export default Consultation