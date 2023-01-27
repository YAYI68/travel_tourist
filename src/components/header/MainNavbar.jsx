import React from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import Logo from "../../assets/Jadoo.svg"
import { useStateContext } from '../../context/ContextProvider';
import { links } from '../../data'


 export const NavLink = ({url,name})=> {
    return (
      <li className=' pb-[.1rem] hover:border-b-2 hover:border-b-[#DF6951]'>
        <a href={url} className=''>{name}</a>
      </li>
    )
  }
  
function MainNavbar() {
  const {inView,headerRef } = useStateContext()

  return (
    <nav className={`${!inView && 'fixed z-10 bg-[#F1A501]'} w-full h-[10%] py-2 flex flex-col items-center justify-center  lg:hidden`} ref={headerRef}>
       
        <div className='w-[80%] h-[3rem]  flex items-center justify-between'>
          <div className='w-[20%]'>
            <img src={Logo} alt="" />
          </div>
          <ul className=' w-[60%] text-[1.1rem] list-none flex items-center justify-between h-full'>
           {links.map((link,i)=>(
             <NavLink key={i} url={link.url} name={link.name} />
           ))}
      
            <li className='group rounded border-2 border-black hover:bg-[#DF6951] px-3 py-2 cursor-pointer'>
                <a href='' className='group-hover:text-white'>Sign up</a>
            </li>
            <li className='flex items-center cursor-pointer'>
                <a href=''>EN</a>
                <IoChevronDownOutline className='h-[1rem] w-[1rem] fill-black' />
            </li>
          </ul>
        </div>
        
    </nav>
  )
}

export default MainNavbar