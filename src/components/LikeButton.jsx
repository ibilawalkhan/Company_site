import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

function LikeButton({ post, onLikeToggle }) {
    const [like, setLike] = useState(false);

    const handleLikes = () => {
        setLike(!like);
        onLikeToggle(!like)
    }

    return (
        <div className='flex justify-end items-center mt-5'>
            <div
                className='px-1 cursor-pointer text-xl flex items-center hover:text-red-600 transition duration-300 ease-in-out'
                role="button"
                aria-label={like ? 'Unlike' : 'Like'}
                onClick={handleLikes}
            >
                {like ? <FaHeart className="text-red-500" /> : <CiHeart className="text-gray-500" />}
            </div>
            <Typography
                variant="subtitle2"
                gutterBottom
                className='ml-2 text-gray-600'
            >
                {post.likes}
            </Typography>
        </div>
    );
}

export default LikeButton;
