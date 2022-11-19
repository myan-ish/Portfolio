import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

import { GiButterflyFlower, IoIosLaptop, FaProjectDiagram } from '../components/icons'


const Sidebar = () => {

    const router = useRouter();
    const getSelected = (path: string[]) => {
        if (path.some(p => router.pathname.includes(p))) {
            return 'bg-inputBgLight dark:bg-inputBgDark opacity-100'
        }
        else {
            return 'opacity-60'
        }
    }

    return (
        <div className='w-10 sticky top-0 left-0 h-screen bottom-0 bg-white dark:bg-navBgDark py-12 flex flex-col justify-between overflow-auto no-scrollbar'>
            <div className='flex flex-col gap-y-20'>

                <div className='w-full'>
                    <ul className='flex flex-col gap-y-3'>
                        <a href='/'>
                            <li className={`flex gap-x-4 py-4 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/'])}`}>
                                <GiButterflyFlower size={28} />
                                <h2>Garden</h2>
                            </li>
                        </a>

                        <a href='/blog'>
                            <li className={`flex gap-x-4 py-2 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/blog'])}`}>
                                <IoIosLaptop size={28} />
                                <h2>Blog</h2>
                            </li>
                        </a>

                        <a href='/project'>
                            <li className={`flex gap-x-4 py-2 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/project'])}`}>
                                <FaProjectDiagram size={28} />
                                <h2>Projects</h2>
                            </li>
                        </a>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar