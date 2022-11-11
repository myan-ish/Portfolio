import React from 'react'
import DynamicHead from '../layout/DynamicHead'

const Home = () => {
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