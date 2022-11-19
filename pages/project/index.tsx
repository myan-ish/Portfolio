import Link from 'next/link'
import React, { useState } from 'react'
import DynamicHead from '../../layout/DynamicHead'

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


    return (
        <>
            <DynamicHead
                title='Project List'
                description='This is the project list page'
            />
            <div className='w-full flex flex-row'>
                <div className='w-1/6'></div>
                <div className='flex-1 min-h-screen flex flex-col gap-y-16 px-8 py-12'>
                    <div className='grid grid-cols-2 gap-8'>
                        {projects.map((project) => (
                            <Link href={`/project/${project.id}`} key={project.id}>
                                <div className='flex flex-col gap-y-4'>
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
                <div className='w-1/6'></div>
            </div>


        </>
    )
}

export default ProjectList