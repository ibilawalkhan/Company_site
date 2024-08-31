import React from 'react'
import Typography from '@mui/material/Typography';
import { Container } from '../index'

function Footer() {
  return (
    <Container>
      <div className='flex justify-between'>
        <Typography variant="caption" display="block" gutterBottom sx={{ marginTop: '10px', fontSize: '10px' }}>
          Copyright © 2023 for GutenSol. All rights reserved.
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{ marginTop: '10px', fontSize: '10px' }}>
          Terms & Condition  |  Privacy Policy
        </Typography>
      </div>
    </Container>
  )
}

export default Footer