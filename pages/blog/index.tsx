import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DynamicHead from '../../layout/DynamicHead'
import { BlogList } from '../../@types/blogList'
import axios from 'axios'

const BlogList = () => {
    const [blogs, setBlogs] = useState<BlogList>()
    useEffect(() => {
        const getBlog = async () => {
            const { data } = await axios.get(
                `http://127.0.0.1:8000/blog_list/`
            )
            setBlogs(data)
        }
        getBlog()
    }, [])

    return (
        <>
            <DynamicHead
                title='Blog List'
                description='This is the blog list page'
            />
            <div className='w-full flex flex-row'>
                <div className='w-1/4'></div>
                <div className='flex-1 min-h-screen flex flex-col gap-y-16 px-8 py-12 w-1/2'>
                    <div className='flex flex-col gap-y-3'>
                        <div className='bg-body dark:bg-font flex flex-col gap-y-3'>
                            <p>Here are some of my blogs.</p>
                            <h2>Blogs</h2>
                            {blogs?.blogs.map((blog) => (
                                <div key={blog.id} >
                                    <p>{blog.date} - <Link href={`/blog/${blog.id}`} key={blog.id} className="text-green-500 hover:underline">{blog.title}</Link></p>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-1/4'></div>
            </div>
        </>
    )
}

export default BlogList