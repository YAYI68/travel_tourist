import React, { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5';
import { VscThreeBars } from "react-icons/vsc";
import Logo from "../../assets/Logo.svg"


export const MobileNavbar = () => {
    const [slideIn, setSlideIn] = useState(false)
  return (
    <nav className='w-full h-[10%] z-[20]'>
        <div className={'w-full h-full py-2 items-center lg:flex hidden justify-between relative '}>
            <div className='w-[20%]'>
            <img src={Logo} alt="" />
            </div>
            <div className='flex items-center gap-4'>
              <button type="" className=' flex items-center gap-1 '>
                <span>EN</span>
               <IoChevronDownOutline className='h-[1rem] w-[1rem] fill-black' />
              </button>
              <button className='h-[2.5rem] w-[2.5rem] flex justify-center items-center' onClick={()=>setSlideIn(!slideIn)}>
                <VscThreeBars className='h-[2rem] w-[2rem] fill-[#FF946D]' />
                </button>
                <div className={`absolute bg-[#FF946D] h-screen w-[50%] md:w-full top-[100%] transition-[transform] right-[-3rem] z-[20] ${slideIn? 'translate-x-0':'translate-x-[100%]' }`}>
                   <ul className='w-full flex flex-col  items-center'>
                     <li className='group hover:bg-white w-full p-4 flex items-center justify-center' onClick={()=>setSlideIn(true)}>
                        <a href="" className='text-[1.5rem] group-hover:text-[#FF946D] text-white'>Destinations</a>
                     </li>
                     <li className=' group hover:bg-white w-full p-4 flex items-center justify-center' onClick={()=>setSlideIn(true)}>
                        <a href="" className='text-[1.5rem] group-hover:text-[#FF946D] text-white'>Hotels</a>
                     </li>
                     <li className='group hover:bg-white w-full p-4 flex items-center justify-center' onClick={()=>setSlideIn(true)}>
                        <a href="" className='text-[1.5rem] group-hover:text-[#FF946D] text-white'>Flights</a>
                     </li>
                     <li className='group hover:bg-white w-full p-4 flex items-center justify-center' onClick={()=>setSlideIn(true)}>
                        <a href="" className='text-[1.5rem] group-hover:text-[#FF946D] text-white'>Bookings</a>
                     </li>
                     <li className='group hover:bg-white w-full p-4 flex items-center justify-center' onClick={()=>setSlideIn(true)}>
                        <a href="" className='text-[1.5rem] group-hover:text-[#FF946D] text-white' >Login</a>
                     </li>
                     <button type="" className='text-[1.5rem] text-[#FF946D] bg-[#FFF1DA] w-full p-4 ' onClick={()=>setSlideIn(true)}>Sign up</button>
                   </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
