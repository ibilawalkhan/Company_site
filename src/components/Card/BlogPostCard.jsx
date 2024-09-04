import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

function BlogPostCard({ post }) {

    const navigate = useNavigate()
    const slug = post.title.toLowerCase().replace(/\s+/g, '-')

    return (
        <div
            className='grid grid-rows-2 gap-4 bg-white shadow-lg mb-6 rounded-b-2xl'
            onClick={() => navigate(`/blog/${slug}`, { state: { post } })}
        >
            <div
                className='relative h-60 flex items-end justify-start overflow-hidden bg-gray-200'
                style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                }}
            >
                <div className='absolute bottom-0 left-0 right-0 p-2 flex flex-wrap justify-start'>
                    {post.tags.map((tag, index) => (
                        <span key={index} className='bg-[#11112B] text-white px-3 rounded m-1 p-1'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col p-2'>
                <div className='font-bold text-lg mb-2'>{post.title}</div>
                <div>
                    <Typography variant="subtitle2"
                        sx={{
                            fontSize: '0.6rem',
                            color: '#11112B',
                            [theme.breakpoints.up("sm")]: {
                                fontSize: '0.8rem',
                            }
                        }}
                    >
                        {post.content}
                    </Typography>
                </div>
                <div className='flex justify-end mt-5'>
                    <div className='mt-1 px-1'>
                        <CiHeart />
                    </div>
                    <Typography variant="subtitle2" gutterBottom>
                        {post.likes}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default BlogPostCard
