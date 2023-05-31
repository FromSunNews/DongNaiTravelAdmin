import React from 'react'

// blog layout
import BlogLayout from '../layouts/blog'

// pages
import Blogcategory from '../pages/blog-category'
import Blogcomments from '../pages/blog-comments'
import Blogdetails from '../pages/blog-details'
import Bloggrid from '../pages/blog-grid'
import Bloglist from '../pages/blog-list'
import BlogMain from '../pages/blog-main'
import Blogtrending from '../pages/blog-trending'
import Bloganalytic from '../pages/blog-analytic'

export const BlogRouter = [

    {
        path: '/',
        element: <BlogLayout />,
        children: [
            {
                path: 'blog',
                element: <Bloganalytic />
            },
            {
                path: 'blog/blog-main',
                element: <BlogMain />
            },
            {
                path: 'blog/blog-details',
                element: <Blogdetails />
            },
            {
                path: 'blog/blog-grid',
                element: <Bloggrid />
            },
            {
                path: 'blog/blog-list',
                element: <Bloglist />
            },
            {
                path: 'blog/blog-trending',
                element: <Blogtrending />
            },
            {
                path: 'blog/blog-comments',
                element: <Blogcomments />
            },
            {
                path: 'blog/blog-category',
                element: <Blogcategory />
            }
        ]
    }
]