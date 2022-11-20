import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

import { GiButterflyFlower, IoIosLaptop, FaProjectDiagram } from '../components/icons'


const Navbar = () => {

    const router = useRouter();
    const getSelected = (path: string[]) => {
        if (path.some(p => router.pathname == p)) {
            return 'bg-inputBgLight dark:bg-inputBgDark opacity-100'
        }
        else {
            return 'opacity-60'
        }
    }

    return (
        // Navbar that is on top of the page

        <div className='bg-transparent w-screen'>
            <div className='flex gap-y-20 w-full justify-between'>
                <div />
                <ul className='flex gap-y-3 mx-auto'>
                    <a href='/'>
                        <li className={`flex gap-x-4 py-2 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/'])}`}>
                            <h3>Garden</h3>
                        </li>
                    </a>

                    <a href='/blog'>
                        <li className={`flex gap-x-4 py-2 px-4 rounded-md cursor-pointer hover:bg-inputBgLight dark:hover:bg-inputBgDark ${getSelected(['/blog'])}`}>
                            <h3>Blog</h3>
                        </li>
                    </a>

                </ul>
                <div />
            </div>
        </div>
    )


}

export default Navbar
