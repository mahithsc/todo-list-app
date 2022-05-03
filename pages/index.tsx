import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Fab } from '@mui/material';

const Home = () => {
  return (
    <div className='flex flex-row'>

      {/* this is the sidebar */}
      <div className='flex flex-col bg-[#022050] flex-[1] h-screen items-center'>
        <div>
          <div className='my-5 text-white'><Link href={'/'}>Home</Link></div>
          <div className='text-white'><Link href={'/profile'}>Profile</Link></div>
        </div>
      </div>


      <div className='flex flex-[4] h-screen'>something</div>
    </div>
  )
}

export default Home