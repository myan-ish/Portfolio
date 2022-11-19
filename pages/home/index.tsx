import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import DynamicHead from '../../layout/DynamicHead'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { DiGithubBadge, FaLinkedin } from '../../components/icons'

const ProjectList = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Project 1',
            image: 'https://aboghanbari.com/static/a89fe8a4ad332d942da74da90f09fb8f/180f3/Flop.webp'
        },
        {
            id: 2,
            title: 'Project 2',
            image: 'https://aboghanbari.com/static/51307f12012e74fb2b28b5c4456f6569/180f3/Lendscape.webp'
        },
        {
            id: 3,
            title: 'Project 3',
            image: 'https://aboghanbari.com/static/3455079efad05303051f83892d0c2fe3/180f3/Tribe.webp'
        },
        {
            id: 4,
            title: 'Project 4',
            image: 'https://aboghanbari.com/static/98c1b0b7e40d8f8807d62d9269b26f1c/180f3/Promot3.webp'
        },
        {
            id: 5,
            title: 'Project 5',
            image: 'https://aboghanbari.com/static/f0f2dd77c93adb2468a85b43b49007a5/180f3/Baffy.webp'
        },
        {
            id: 6,
            title: 'Project 6',
            image: 'https://aboghanbari.com/static/7882771b4b67e01db2255e01b71d6a5b/180f3/Crypto.webp'
        },

    ])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <>
            <DynamicHead
                title='Project List'
                description='This is the project list page'
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
                                    <a href='https://github.com/myan-ish/' target={"_blank"}>
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
                            {projects.map((project, index) => (
                                <Link href={`/project/${project.id}`} key={project.id}>
                                    <div className='flex flex-col gap-y-4' data-aos='fade-up' data-aos-duration={1000 + 200 * index}>
                                        <div className='h-110 hover:scale-110 ease-in duration-300 rounded-md overflow-auto bg-transparent'>
                                            <img
                                                src={project.image}
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
                                <a href='https://github.com/myan-ish/' target={"_blank"}>
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

                    <div className='w-1/6'></div>
                </div>
                <div className='w-1/6'></div>

            </div>


        </>
    )
}

export default ProjectList