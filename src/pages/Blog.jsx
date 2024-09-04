import React from 'react';
import Typography from '@mui/material/Typography';
import theme from '../theme';
import {
  BlogPostCard,
  SearchBlog
} from '../components/index';
import {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
} from '../assets/index'

function Blog() {

  const posts = [
    {
      "title": "Understanding Responsive Web Design",
      "tagline": "A beginner's guide to creating flexible web layouts",
      "content": "Responsive web design is all about creating web pages that look good on all devices. A responsive web design will automatically adjust for different screen sizes and viewports. In this article, we'll explore the basics of responsive design, including media queries, flexible grids, and images.",
      "tags": ["design", "development", "web", "responsive"],
      "likes": 120,
      "image": blog1,
      "category": "Web Design",
      "date": "2023-05-01"
    },
    {
      "title": "Getting Started with React",
      "tagline": "Learn how to build dynamic web applications with React",
      "content": "React is a popular JavaScript library for building user interfaces. It's component-based and allows you to build complex UIs from small, reusable pieces of code called components. In this post, we'll cover the basics of React, including components, props, and state.",
      "tags": ["development", "react", "javascript", "frontend"],
      "likes": 89,
      "image": blog3,
      "category": "JavaScript",
      "date": "2023-04-15"
    },
    {
      "title": "10 Tips for Writing Clean Code",
      "tagline": "Improve your code quality with these essential tips",
      "content": "Writing clean, readable code is an essential skill for any developer. Clean code is easier to understand, maintain, and scale. In this article, we'll share 10 practical tips for writing clean code, including naming conventions, comments, and refactoring techniques.",
      "tags": ["development", "best practices", "clean code"],
      "likes": 145,
      "image": blog2,
      "category": "Best Practices",
      "date": "2023-03-20"
    },
    {
      "title": "The Basics of SEO for Developers",
      "tagline": "Optimize your website to rank higher in search results",
      "content": "Search Engine Optimization (SEO) is crucial for increasing the visibility of your website. For developers, understanding SEO basics can greatly improve your site's performance in search engines. This guide covers the fundamentals of SEO, including keywords, meta tags, and site structure.",
      "tags": ["SEO", "development", "marketing"],
      "likes": 76,
      "image": blog4,
      "category": "SEO",
      "date": "2023-02-10"
    },
    {
      "title": "Exploring the New Features in JavaScript ES2024",
      "tagline": "Stay ahead with the latest updates in JavaScript",
      "content": "JavaScript ES2024 introduces a host of new features that make coding more efficient and fun. From new syntax to powerful APIs, this update brings a lot to the table. In this article, we'll explore some of the most exciting features of ES2024, including pattern matching, new data types, and improved asynchronous handling.",
      "tags": ["javascript", "development", "es2024", "programming"],
      "likes": 134,
      "image": blog5,
      "category": "JavaScript",
      "date": "2023-01-05"
    }
  ]

  return (
    <>
      <div className='min-h-screen bg-[#D5D9E5] text-black'>
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
            Blogs
          </Typography>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-10 gap-4 px-2'>
          <div className='sm:grid-cols-1'></div>

          <div className='order-1 sm:order-3 sm:col-span-2'>
            <SearchBlog />
          </div>

          <div className='order-2 sm:order-2 row-span-6 sm:col-span-6 bg-[#D9D9D9]'>
            {posts.map((post, index) => (
              <BlogPostCard
                key={index}
                post={post}
              />
            ))}
            <div className='sm:grid-cols-1'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
