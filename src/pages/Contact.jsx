import React from 'react';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import theme from '../theme';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_bj37cg2";
const TEMPLATE_ID = "template_v7xjxvw";
const PUBLIC_KEY = "SNl4XWhrs1jzknvVS";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = (data, e) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully');
        reset();
      }, (error) => {
        console.error('EmailJS Error:', error.text);
        alert('Something went wrong!');
      });
  };

  return (
    <div className='w-full max-w-7xl mx-auto px-4 flex justify-center'>
      <div className='bg-[#92DEED] w-full px-2 py-2 rounded-2xl mt-28 flex flex-col items-center justify-center sm:w-1/2'>
        <div>
          <Typography variant="h6" gutterBottom sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            [theme.breakpoints.up('sm')]: {
              fontSize: '2rem',
            }
          }}>
            Send Us Message
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ textAlign: 'center' }}>
            Have any questions regarding our services? Send us your message.
          </Typography>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto mt-8">
          <div className='flex flex-col justify-center items-center'>
            <div className='flex w-full'>
              <div className="form-control mb-4 w-full">
                <Typography
                  gutterBottom
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    fontSize: '1rem',
                    color: 'black',
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
                  placeholder='Enter your name'
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
                    color: 'black',
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
                  placeholder='Enter your email'
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
                  color: 'black',
                  [theme.breakpoints.up('sm')]: {
                    justifyContent: 'flex-start',
                  },
                }}
              >
                Message
              </Typography>
              <textarea
                id="message"
                placeholder='Enter your message'
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
                className="px-6 py-2 mt-4 bg-[#11112B] text-white rounded-md hover:bg-blue-400 font-bold  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
