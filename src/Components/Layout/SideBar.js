import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const SideBar = () => {
  return (
    <>
    {/* #110f3e */}
      <div className="bg-[#45555c] w-[220px] top-0  h-screen fixed  drop-shadow-2xl justify-center">
        <div className='text-xl text-white w-16 h-16 ml-8 mt-4'>
          <span className='font-bold'>Elscript</span>
        </div>

        <ul className='text-white text-[16px] pl-6 pt-10 '>
        <Link to="/"> <li className='px-2  hover:bg-[#e7e7e7] hover:text-black  pt-5 pb-2  '> <Icon className='w-6 h-auto float-left mr-4' icon="material-symbols:dashboard" />Dashboard</li></Link>
          <hr />
        
        <Link to="/campaign"> <li className='px-2  hover:bg-[#e7e7e7] hover:text-black  pt-5 pb-2  '> <Icon className='w-6 h-auto float-left mr-4' icon="material-symbols:dashboard" />Campaign</li></Link>
          <hr />
        </ul>
      </div>
      <div className="bg-[#42df7d]  w-full mt-10">
      </div>
    </>
  )
}

export default SideBar