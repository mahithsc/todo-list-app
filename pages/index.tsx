import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Fab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data:any = await axios.get('http://127.0.0.1:5000')
    if(data !== null){
      setData(data.data)
    }
  }

  return (
    <div className='flex flex-row'>

      {/* this is the sidebar */}
      <div className='flex flex-col bg-[#022050] flex-[1] h-screen items-center'>
        <div className='text-white text-xl mt-5'>Todo List App</div>
        <div>
          <div className='my-5 text-white flex space-x-2'>
            <HomeIcon className='text-white' />
            <Link href={'/'}>Home</Link>
          </div>
          <div className='text-white flex'>
            <Link href={'/profile'}>
              <div className='flex'>
                <PersonIcon className='text-white' />
                <div>Profile</div></div>
            </Link>
          </div>
        </div>
      </div>


      <div className='flex flex-[4] h-screen flex-col'>
        {data.map((item:any, index:number)=> {
          return (
            <div key={index}>
              {item.description}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home