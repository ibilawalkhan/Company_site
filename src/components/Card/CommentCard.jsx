import React from 'react'
import Typography from '@mui/material/Typography';
import theme from '../../theme'

function CommentCard({ comment, index }) {
    return (
        <div key={index} className='flex flex-col items-start bg-white rounded-xl w-full py-6 px-2 space-x-4 mb-4'>
            <div>
                <Typography variant="subtitle2" gutterBottom sx={{
                    fontSize: '1rem',
                    marginLeft: '1rem',
                    [theme.breakpoints.up('sm')]: {
                        marginLeft: '1.5rem',
                    }
                }}>
                    {comment.comment}
                </Typography>
            </div>
            <div className='flex mt-3'>
                <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                <div className='px-3'>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0px' }}>
                        {comment.authorName}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ fontSize: '0.6rem' }}>
                        {comment.date}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default CommentCard