import React from 'react'
import Decore from "../../assets/Decore.svg"
import { HeaderComponent } from './HeaderComponent'
import MainNavbar from './MainNavbar'
import { MobileNavbar } from './MobileNavbar'
function Header() {
  return (
    <header className='h-[95vh] relative w-screen  overflow-hidden flex justify-center'>
        <div className=' w-[50%] h-[90%] z-[-5] absolute right-0 top-0 translate-x-20 md:translate-x-0 md:w-[80%]'>
           <img src={Decore} alt="" className='h-full w-full' />
        </div>
        <div className='w-[80%] lg:w-[95%] h-full  '>
            <MainNavbar />
            <MobileNavbar />
            <HeaderComponent />
        </div>
    </header>
  )
}

export default Header