import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

import { GiButterflyFlower, IoIosLaptop, FaProjectDiagram } from '../components/icons'


const Navbar = () => {

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
        // Navbar that is on top of the page

        <div className='sticky top-0 bg-white dark:bg-navBgDark flex w-full justify-end '>
            <div className='flex gap-y-20'>

                <ul className='flex gap-y-3'>
                    <a href='/home'>
                        <li className={`flex gap-x-4 py-2 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/home'])}`}>
                            <h3>Garden</h3>
                        </li>
                    </a>

                    <a href='/blog'>
                        <li className={`flex gap-x-4 py-2 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/home'])}`}>
                            <h3>Blog</h3>
                        </li>
                    </a>

                    <a href='/project'>
                        <li className={`flex gap-x-4 py-2 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/project'])}`}>
                            <h3>Projects</h3>
                        </li>
                    </a>

                </ul>
            </div>
        </div>
    )


}

export default Navbar
