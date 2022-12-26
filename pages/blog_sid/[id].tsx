import React, { useEffect, useState } from "react";
import DynamicHead from "../../layout/DynamicHead";
import { useRouter } from "next/router";
import axios from "axios";
import { Blog } from "../../@types/blog";
import axiosInstance from "../../utils/axios.config";

const Blog = () => {
  const router = useRouter();
  const { id }: any = router.query;

  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    const getBlog = async () => {
      const { data } = await axiosInstance.get(`/get_blog/${id}`);
      setBlog(data);
    };
    getBlog();
  }, [id]);

  return (
    <>
      <DynamicHead title="Blog" description="This is the blog page" />
      <div className="w-1/4"></div>
      <div className="flex-1 min-h-screen flex flex-col px-8 py-12 w-1/2">
        <div className="bg-body dark:bg-font flex flex-col">
          <div key={blog?.id} className="flex flex-col gap-y-3">
            <h1>{blog?.title}</h1>
            <p>{blog?.description}</p>

            <div
              dangerouslySetInnerHTML={{ __html: blog?.body }}
              className="flex flex-col gap-y-2 mt-3"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-1/4"></div>
    </>
  );
};

export default Blog;
