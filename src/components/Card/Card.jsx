import React from 'react'

function Card({ image, title, description }) {
    return (
        <div className='w-1/2 sm:w-1/5 p-2'>
            <div className=''>
                <div className='mt-4'>
                    <img
                        src={image}
                        alt="Why choose us Image"
                        className='w-1/2 h-1/2'
                    />
                </div>
                <div className='mt-4'>
                    <h1 className='font-bold'>{title}</h1>
                    <p className='text-sm mt-2'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card