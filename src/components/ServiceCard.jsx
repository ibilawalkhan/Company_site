import React from 'react'
import Typography from '@mui/material/Typography';
import theme from '../theme'

function ServiceCard({ serviceName }) {
    return (
        <div>
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    fontSize: '1rem',
                    marginTop: '40px',
                    fontStyle: 'italic',
                    color: '#11112B',
                    [theme.breakpoints.up('sm')]: {
                        fontSize: '1.5rem',
                        justifyContent: 'flex-start'
                    },
                }}
            >
                {serviceName}
            </Typography>
            
        </div>
    )
}

export default ServiceCard