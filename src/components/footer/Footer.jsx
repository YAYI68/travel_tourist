import React from 'react';
import GooglePlay from "../../assets/images/GooglePlay.png";
import PlayStore from "../../assets/images/PlayStore.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const Footer = () => {
  return (
   <footer className='mt-[5rem] w-screen flex flex-col items-center'>
      <div className='w-[80%]  flex justify-between '>
        <div className='w-[20%] p-4 gap-4 flex flex-col'>
          <h3 className='text-[3rem] font-semibold'>Jadoo.</h3>
          <p className=''>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className='w-[15%] p-6 gap-4 flex flex-col'>
          <h3 className='font-semibold text-[1.5rem] f'>Company</h3>
           <ul className='w-full flex flex-col gap-2'>
             <li>
              <a href="">About</a>
             </li>
             <li>
              <a href="">Careers</a>
             </li>
             <li>
              <a href="">Mobile</a>
             </li>
           </ul>         
        </div>
        <div className='w-[15%] p-6 gap-4 flex flex-col'>
        <h3 className='font-semibold text-[1.5rem] f'>Contact</h3>
           <ul className='w-full flex flex-col gap-2'>
             <li>
              <a href="">Help/FAQ</a>
             </li>
             <li>
              <a href="">Press</a>
             </li>
             <li>
              <a href="">Affiliate</a>
             </li>
           </ul>
        </div>
        <div className='w-[15%] p-6 gap-4 flex flex-col'>
        <h3 className='font-semibold text-[1.5rem] '>More</h3>
           <ul className='w-full flex flex-col gap-2'>
             <li>
              <a href="">Airlinefees</a>
             </li>
             <li>
              <a href="">Airline</a>
             </li>
             <li>
              <a href="">Low fare tips</a>
             </li>
           </ul>
        </div>
        <div className='w-[30%] p-6 flex flex-col gap-4 items-center'>
           <div className='w-[70%] flex items-center justify-between'>
               <button  className='h-[2.5rem] w-[2.5rem] rounded-[50%] bg-white shadow-md flex items-center justify-center'>
                  <FaFacebookF />      
               </button>
               <button  className='h-[2.5rem] w-[2.5rem] rounded-[50%] bg-white shadow-md flex items-center justify-center'>
                 <FaInstagram />
               </button>
               <button  className='h-[2.5rem] w-[2.5rem] rounded-[50%] bg-white shadow-md flex items-center justify-center'>
                    <FaTwitter />
               </button>
           </div>
           <p className='text-[1.5rem] font-semibold'>Discover our app</p>
           <div className=" items-center justify-between w-[80%] px-4 gap-2">
             <button className='w-[48%] h-[5rem]'>
              <img src={GooglePlay} alt='' />
             </button>
             <button className='w-[48%] h-[3rem]'>
              <img src={PlayStore} alt='' />
             </button>
           </div>
        </div>
      </div>
      <div className='w-[50%] text-center'>
         <p className='text-[.7rem]'>All rights @ Yayi</p>
      </div>
   </footer>
  )
}
