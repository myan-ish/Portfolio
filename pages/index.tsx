import Link from 'next/link'
import type { NextPage, } from 'next'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import DynamicHead from '../layout/DynamicHead'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { DiGithubBadge, FaLinkedin } from '../components/icons'
import { ProjectList } from '../@types/projectList';
import axios from 'axios';

const Home = () => {
  const [projects, setProjects] = useState<ProjectList>()

  useEffect(() => {
    const getProject = async () => {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/project_list/`
      )
      setProjects(data)
    }
    getProject()

    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <>
      <DynamicHead
        title='Home'
        description='This is the home page'
      />
      <div className='w-full flex flex-row'>
        <div className='w-1/6'></div>
        <div className='flex-1 min-h-screen flex flex-col gap-y-12 px-8 py-12'>
          <div className='bg-body dark:bg-font flex flex-row gap-y-3 gap-x-6'>

            <div className='h-96 rounded-md overflow-auto bg-gradient-to-r from-indigo-500 w-7/12 flex flex-col gap-y-12 p-4'>
              <h1 >Hello, I am Manish, a backend developer with 1 year of experience.</h1>
              <p>In my free time, I solve issues on Github, help newbies on discord and learning is always fun.</p>
              {/* Contact me row with linkedin and github link icons */}
              <div className='flex flex-row gap-x-4'>
                <button className='bg-white dark:bg-gray-800 rounded-full px-5 py-3'>
                  Contact me
                </button>
                <div className='rounded-full bg-white dark:bg-gray-800 flex flex-row gap-x-4 p-3'>
                  <a href='https://github.com/myan-ish/'>
                    <DiGithubBadge size={24} />
                  </a>
                </div>
                <div className='rounded-full bg-white dark:bg-gray-800 flex flex-row gap-x-4 p-3'>
                  <a href='https://www.linkedin.com/in/manish-kunwar/' target={"_blank"}>
                    <FaLinkedin size={24} />
                  </a>
                </div>

              </div>
            </div>
            <div className='h-96 rounded-md w-5/12'>
              <img
                src="https://cdn.shopify.com/s/files/1/0265/2769/4934/products/PFB_USPoster_small-scaled-1_1024x1024@2x.jpg?v=1621609955"
                alt="profile_image"
                className='object-cover w-full h-full '
              />
            </div>
          </div>
          <div className='bg-body dark:bg-font flex flex-row'>
            <div className='grid grid-cols-2 gap-8'>
              {projects?.projects.map((project) => (
                <Link href={`${project.link}`} key={project.id}>
                  <div className='flex flex-col gap-y-4' data-aos='fade-up' data-aos-duration={1000 + 200 * project.id}>
                    <div className='h-110 hover:scale-110 ease-in duration-300 rounded-md overflow-auto bg-transparent'>
                      <img
                        src={project.cover_image}
                        alt={project.title}
                        className='object-cover w-full h-full '
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-y-3 rounded-2xl overflow-auto bg-indigo-500 w-full p-4'>
            <h1>Want to work together?</h1>
            <p>Feel free to reach out for collaborations</p>
            <p>Ranaxmond@gmail.com</p>
            <div className='flex flex-row gap-x-4 mt-12'>
              <button className='bg-white dark:bg-gray-800 rounded-full px-5 py-3'>
                Contact me
              </button>
              <div className='rounded-full bg-white dark:bg-gray-800 flex flex-row gap-x-4 p-3'>
                <a href='https://github.com/myan-ish/'>
                  <DiGithubBadge size={24} />
                </a>
              </div>
              <div className='rounded-full bg-white dark:bg-gray-800 flex flex-row gap-x-4 p-3'>
                <a href='https://www.linkedin.com/in/manish-kunwar/'>
                  <FaLinkedin size={24} />
                </a>
              </div>

            </div>
          </div>

          <div className='w-1/6'></div>
        </div>
        <div className='w-1/6'></div>

      </div>

    </>
  )
}

export default Home