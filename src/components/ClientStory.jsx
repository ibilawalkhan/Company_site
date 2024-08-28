import React from 'react'
import Typography from '@mui/material/Typography';
import Container from './container/Container'
import theme from '../theme';

function ClientStory({
    title,
    testimonial,
    clientName,
    clientTitle,
    clientImage = ''
}) {
    return (
        <Container>
            <div>
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'start',
                        fontSize: '1rem',
                        marginTop: '40px',
                        color: '#92DEED',
                        [theme.breakpoints.up('sm')]: {
                            fontSize: '2rem',
                            justifyContent: 'flex-start'
                        },
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{ margin: '8px' }}>
                    {testimonial}
                </Typography>

                <div className="flex justify-center mt-8 sm:justify-end">
                    <div className="flex flex-col mr-4">
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: '1rem',
                                },
                            }}
                        >
                            {clientName}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            {clientTitle}
                        </Typography>
                    </div>
                    <div className="border rounded-full bg-white w-1/6 mb-2 sm:w-14">
                        <img src={clientImage} alt={clientName} className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ClientStory