import React from 'react'
import TravellerImage from "../../assets/images/Traveller.png"
import Plane from "../../assets/images/plane.png"
import Decore from "../../assets/images/Decore2.png"
import { RectButton } from '../ui/RectButton'
import { RoundButton } from '../ui/RoundButton'

export const HeaderComponent = () => {
  return (
    <div className='w-[80%] h-[95vh] flex md:flex-col  lg:mb-[3rem] md:[95%]'>
      <div className='w-[50%] h-[90%] md:h-full pt-[5rem] md:w-[90%]'>
        <div className='w-[80%] h-full  flex flex-col gap-3 items-center md:w-full'>
            <p className='text-[1.5rem] font-[700] text-secondary-500'>Best Destinations around the world</p>
           <div className='w-full'>
           <h2 className='text-[4rem] font-volkhov w-full lg:text-[2rem] flex '>Travel,<span className='flex flex-col'> <span>enjoy</span> <span className='w-full h-[1.5rem'>
          <img src={Decore} alt="" className='h-full' />
           </span>  </span> </h2>
           <h2 className='text-[4rem] font-volkhov w-full lg:text-[2rem]'>and live a new and full life</h2> 
           </div>
           <p className='text-[1.1rem] md:text-[.8rem]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
           <div className='w-full'>
            <div className='w-[80%] flex gap-3 items-center md:w-full '>
             <div className=''>
                <RectButton text={'Find out more'} bgColor='#F1A501' />
             </div>
             <div className='flex items-center gap-2'>
                <RoundButton height={'3rem'} width={'3rem'} bgColor={'#DF6951'}>
                <svg fill="none" className='h-[1rem] w-[1rem] fill-white' stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                 </svg>
                </RoundButton>
                <p  className='text-[#686D77]'>Play Demo</p>
             </div>
            </div>
            
           </div>
            
        </div>        
      </div>
      <div className='w-[50%] h-full relative'>
        <div className='absolute top-10 left-[5rem] md:left-0 md:top-[-5rem] md:h-[4rem] md:w-[4rem]'>
            <img src={Plane} alt="" />
        </div>
        <div className='absolute top-[10rem] right-0 translate-x-[5rem] md:top-[-25rem] md:h-[4rem] md:w-[4rem]'>
            <img src={Plane} alt="" />
        </div>
        <img src={TravellerImage} alt="Traveller" className='h-full w-full' />
      </div>
    </div>
  )
}
