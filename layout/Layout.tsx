/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-page-custom-font */
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

// import { useDispatch } from 'react-redux';

interface LayoutProps {
  children: React.ReactNode
}

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const forbiddenPaths = ['/auth/login', '/auth/register', '/auth/change', 'auth/verify']

  return (
    <div className='dark'>
      <Root className='bg-body dark:bg-font'>

        <main className='max-w-[1920px] mx-auto gap-y-8 flex flex-col'>
          {!forbiddenPaths.some(path => router.pathname.includes(path)) && <Navbar />}

          {children}
        </main>

        {/* {!forbiddenPaths.some(path => router.pathname.includes(path)) && <Footer />} */}

      </Root>
    </div>
  )
}

export default Layout