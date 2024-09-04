import React from 'react'
import Typography from '@mui/material/Typography';
import theme from '../../theme';
import { useForm } from 'react-hook-form';

function AddComment({ onAddComment }) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = (data, e) => {
        console.log("Comment: ", data);

        const newComment = {
            comment: data.message,
            authorName: data.name,
            date: new Date().toISOString().split('T')[0]
        }

        onAddComment(newComment);

        reset()
    }

    return (
        <div className='w-full text-white py-10 sm:px-6 md:px-48 rounded-2xl'>
            <div className='bg-[#11112B] w-full px-4 py-6 rounded-2xl'>
                <Typography variant="h6" gutterBottom sx={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    [theme.breakpoints.up('sm')]: {
                        fontSize: '3rem',
                    }
                }}>
                    Leave A Comment
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className='w-full flex flex-col justify-center items-center '>
                        <div className='w-full flex flex-col sm:flex-row sm:space-x-2 '>
                            <div className="form-control mb-4 w-full">
                                <Typography
                                    gutterBottom
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        fontSize: '1rem',
                                        color: '#92DEED',
                                        [theme.breakpoints.up('sm')]: {
                                            justifyContent: 'flex-start',
                                        },
                                    }}
                                >
                                    Name
                                </Typography>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: "Name is required" })}
                                    className={`w-full px-4 py-2 rounded-md border-2 focus:outline-none text-black focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                            </div>

                            <div className="form-control mb-4 w-full">
                                <Typography
                                    gutterBottom
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        fontSize: '1rem',
                                        color: '#92DEED',
                                        [theme.breakpoints.up('sm')]: {
                                            justifyContent: 'flex-start',
                                        },
                                    }}
                                >
                                    Email
                                </Typography>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: "Email is required" })}
                                    className={`w-full px-4 py-2 rounded-md border-2 focus:outline-none text-black focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="form-control mb-4 w-full">
                            <Typography
                                gutterBottom
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    fontSize: '1rem',
                                    color: '#92DEED',
                                    [theme.breakpoints.up('sm')]: {
                                        justifyContent: 'flex-start',
                                    },
                                }}
                            >
                                Message
                            </Typography>
                            <textarea
                                id="message"
                                rows="7"
                                {...register("message", { required: "Message is required" })}
                                className={`w-full px-4 py-2 rounded-md border-2 focus:outline-none text-black focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                aria-invalid={errors.message ? "true" : "false"}
                            ></textarea>
                            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                        </div>

                        <div className='w-full flex justify-end'>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 mt-4 bg-[#92DEED] text-white rounded-md hover:bg-blue-400 font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddComment;
