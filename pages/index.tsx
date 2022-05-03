import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className='flex flex-row'>

      {/* this is the sidebar */}
      <div className='flex flex-col bg-[#022050] flex-[1] h-screen items-center'>
        <div>
          <div className='my-5 text-white'>Home</div>
          <div className='text-white'>Profile</div>
        </div>
      </div>


      <div className='flex flex-[4] h-screen'>something</div>
    </div>
  )
}

export default Home