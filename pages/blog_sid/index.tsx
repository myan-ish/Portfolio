import Link from "next/link";
import React, { useEffect, useState } from "react";
import DynamicHead from "../../layout/DynamicHead";
import { BlogList } from "../../@types/blogList";
import axios from "axios";
import axiosInstance from "../../utils/axios.config";

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogList>();
  useEffect(() => {
    const getBlog = async () => {
      const { data } = await axiosInstance.get(`/blog_list/`);
      setBlogs(data);
    };
    getBlog();
  }, []);

  return (
    <>
      <DynamicHead title="Blog List" description="This is the blog list page" />
      <div className="w-1/4"></div>
      <div className="flex-1 min-h-screen flex flex-col gap-y-16 px-8 py-12 w-1/2">
        <div className="flex flex-col gap-y-3">
          <div className="bg-body dark:bg-font flex flex-col gap-y-3">
            <p>
              Greetings, my name is Manish. I am working as a Software Engineer
              and contributing to backend for building web applications.
            </p>
            <p>
              In my free time, I solve issues on Github, help newbies on discord
              and learning is always fun.
            </p>
            <p>Here are some of my blogs.</p>
            <h2>Blogs</h2>
            {blogs?.blogs.map((blog) => (
              <div key={blog.id}>
                <p>
                  {blog.date} -{" "}
                  <Link
                    href={`/blog/${blog.id}`}
                    key={blog.id}
                    className="text-green-500 hover:underline"
                  >
                    {blog.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/4"></div>
    </>
  );
};

export default BlogList;
