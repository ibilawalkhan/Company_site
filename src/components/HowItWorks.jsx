import React from 'react'
import Typography from '@mui/material/Typography';
import theme from '../theme';

function HowItWorks({ image, no, name, description }) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center rounded-lg w-20 h-20 bg-[#4b4e58]'>
                <img
                    src={image}
                    alt='Discovery Image'
                    className='h-10'
                />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            textAlign: 'center',
                            marginTop: '3rem',
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '2rem',
                            }
                        }}
                    >
                        {no}
                    </Typography>
                </div>
                <div>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            textAlign: 'center',
                            marginTop: '1.5rem',
                            color: '#92DEED',
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '2.5rem',
                            }
                        }}
                    >
                        {name}
                    </Typography>
                </div>
                <div className='w-1/2'>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontSize: '0.5rem',
                            textAlign: 'center',
                            marginTop: '1.5rem',
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '0.8rem',
                            }
                        }}
                    >
                        {description}
                    </Typography>
                </div>
            </div>
        </div>

    )
}

export default HowItWorks