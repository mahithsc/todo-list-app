import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Fab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Home = () => {
  return (
    <div className='flex flex-row'>

      {/* this is the sidebar */}
      <div className='flex flex-col bg-[#022050] flex-[1] h-screen items-center'>
        <div className='text-white'>Todo List App</div>
        <div>
          <div className='my-5 text-white flex space-x-2'>
            <HomeIcon className='text-white' />
            <Link href={'/'}>Home</Link>
          </div>
          <div className='text-white flex'>
            <PersonIcon className='text-white' />
            <Link href={'/profile'}>Profile</Link>
          </div>
        </div>
      </div>


      <div className='flex flex-[4] h-screen'>something</div>
    </div>
  )
}

export default Home