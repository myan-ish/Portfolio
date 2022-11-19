import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import DynamicHead from '../layout/DynamicHead'

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [])

  return (
    <>
      <DynamicHead
        title='Home'
        description='This is the home page'
      />

      <main className='bg-body dark:bg-font flex flex-col gap-y-12'>

      </main>
    </>
  )
}

export default Home