/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-page-custom-font */

import { useRouter } from 'next/router'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='dark'>
      <div className='w-full h-screen bg-body dark:bg-font'>
          <main className='max-w-[1366px] mx-auto flex gap-y-12 px-4 xl:px-0'>
            {children}
          </main>
      </div>
    </div>
  )
}

export default Layout