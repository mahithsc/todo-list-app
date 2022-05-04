import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Checkbox } from '@mui/material';

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
      <div className='flex flex-col bg-[#022050] flex-[1] items-center min-h-screen ]'>
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
            <div key={index} className = 'bg-slate-200 mt-2 mx-20 py-2 rounded-lg flex items-center relative'>
              {/* <div className='ml-3'>{item.description}</div> */}
              <div className='mx-5 md:mr-10'>{item.description}</div>
              <Checkbox defaultChecked size="small" className='absolute right-0'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home