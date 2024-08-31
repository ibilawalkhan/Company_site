import React from 'react'
import { Container } from '../components/index'
import Typography from '@mui/material/Typography';
import theme from '../theme';
import { ProjectCard } from '../components/index'
import a from '../assets/a.jpeg'
import { Consultation } from '../components/index'

function Project() {

    const projects = [
        {
            title: 'Project 1',
            date: 'August 2024',
            image: a,
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',
        },
        {
            title: 'Project 2',
            date: 'September 2024',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',
        },
        {
            title: 'Project 3',
            date: 'October 2024',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',

        },
        {
            title: 'Project 4',
            date: 'November 2024',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',

        },
        {
            title: 'Project 5',
            date: 'December 2024',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',

        },
        {
            title: 'Project 6',
            date: 'January 2025',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',

        },
        {
            title: 'Project 7',
            date: 'February 2025',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',

        },
        {
            title: 'Project 8',
            date: 'March 2025',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',

        },
        {
            title: 'Project 9',
            date: 'April 2025',
            image: 'https://via.placeholder.com/150',
            description: 'This is a detailed description of Project 1. It includes everything you need to know about the project, including features, technologies used, and other relevant details.',

        },
    ]

    return (
        <Container>
            <div className='min-h-screen'>
                <div>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            textAlign: 'center',
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '4rem',
                            }
                        }}
                    >
                        Projects
                    </Typography>
                </div>

                <div className='m-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10'>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            date={project.date}
                            image={project.image}
                            description={project.description}
                        />
                    ))}
                </div>
                <hr className='border-1 white mt-8' />
                <Consultation />
            </div>
        </Container>
    )
}

export default Project