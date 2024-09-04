import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import theme from '../theme'
import {
    LikeButton,
    CommentCard,
    AddComment,
    Consultation
} from '../components/index'

function ReadBlog() {
    const { state } = useLocation();

    if (!state || !state.post) {
        return <div>Post not found</div>
    }

    const [post, setPost] = useState(state.post);
    const [comments, setComments] = useState([
        {
            "comment": "This article was super helpful! I learned a lot about responsive design. Keep up the great work!",
            "authorName": "Alice Johnson",
            "date": "2024-09-02"
        },
        {
            "comment": "Thanks for the detailed explanation on React basics. It really helped me understand how to get started.",
            "authorName": "Michael Lee",
            "date": "2024-09-01"
        },
        {
            "comment": "Great tips on writing clean code! I’ve been struggling with maintaining my projects, and this really pointed me in the right direction.",
            "authorName": "Sophia Martinez",
            "date": "2024-08-30"
        }
    ])

    const handleLikeToggle = (isLiked) => {
        setPost((prevPost) => ({
            ...prevPost,
            likes: isLiked ? prevPost.likes + 1 : prevPost.likes - 1,
        }))
    }

    const handleAddComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment])
    }

    return (
        <div className='min-h-screen bg-[#D5D9E5] text-black py-4 px-2 sm:px-18 md:px-32 '>
            <Typography variant="h2" gutterBottom sx={{
                fontSize: '1.5rem',
                textAlign: 'center',
                marginTop: '1rem',
                fontWeight: 'bold',
                paddingY: '2rem',
                [theme.breakpoints.up('sm')]: {
                    fontSize: '4rem',
                }
            }}>
                {post.title}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                {post.date}
            </Typography>
            <div className='relative min-h-60 sm:min-h-screen mb-4 bg-gray-200 rounded-xl' style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}></div>
            <Typography variant="body1" gutterBottom>
                {post.content}
            </Typography>
            <div className='flex flex-wrap mt-4'>
                {post.tags.map((tag, index) => (
                    <span key={index} className='bg-[#11112B] text-white px-3 rounded m-1'>
                        {tag}
                    </span>
                ))}
            </div>

            <div className='w-full max-w-7xl mx-auto mt-10'>
                <div className='grid grid-cols-6'>
                    <div className='col-span-5'>
                        <Typography variant="h4" gutterBottom sx={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '2rem',
                            }
                        }}>
                            Comments
                        </Typography>
                    </div>
                    <div>
                        <LikeButton post={post} onLikeToggle={handleLikeToggle} />
                    </div>
                </div>

                {comments.map((comment, index) => (
                    <CommentCard comment={comment} key={index} />
                ))}

                <AddComment onAddComment={handleAddComment} />
            </div>
            <Consultation className='!bg-[#D5D9E5] !text-black' />
        </div>
    );
}

export default ReadBlog;