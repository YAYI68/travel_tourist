import React from 'react'
import { RectButton } from '../ui/RectButton'
import MultiPlus2 from "../../assets/images/mult_plus2.png"

export const Contact = () => {
  return (
    <section className='mt-[4rem] w-[80%] relative md:w-[90%]'>
       <div className='py-[2rem] flex flex-col gap-[5rem] md:gap-4 items-center bg-[#DFD7F9]  rounded-tl-[8rem]'>
        <div className='w-[70%] font-medium'>    
          <h3 className='text-[2rem] text-center lg:text-[1.5rem] md:text-[1.2rem] text-[#5E6282]'>Subscribe to get information, latest news and other interesting offers about Jadoo</h3>
        </div>
       <div className='h-[3.5rem] lg:h-[2.5rem] w-[60%] flex gap-5 md:gap-2 items-center md:flex-col md:w-[80%] '>
        <div className='w-[60%] flex items-center gap-2 px-6 py-2 h-full rounded bg-white'>
            <div className='h-full flex items-center justify-center w-[2.5rem] '>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6" stroke="#39425D" stroke-linecap="round"/>
             <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D"/>
             </svg>
            </div>
            <input type="" name="" value="" placeholder='Your email' className='w-full outline-none' />
        </div>
        <RectButton 
         text={'Subscribe'}
         bgColor={'linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)'}
        />
       </div>
       </div> 
       <div className='bottom-0 right-0 absolute h-[8rem] w-[8rem] translate-y-1/2 translate-x-1/2 '>
           <img src={MultiPlus2} alt="" />     
        </div>
    </section>
  )
}
