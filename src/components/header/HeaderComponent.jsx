import React from 'react'
import TravellerImage from "../../assets/images/Traveller.png"
import Plane from "../../assets/images/plane.png"
import { RectButton } from '../ui/RectButton'
import { RoundButton } from '../ui/RoundButton'

export const HeaderComponent = () => {
  return (
    <div className='w-full h-[90%] flex md:flex-col  lg:mb-[3rem]'>
      <div className='w-[50%] h-[90%] pt-[5rem]'>
        <div className='w-[80%] h-full  flex flex-col gap-3 items-center'>
            <p className='text-[1.2rem] font-[700] text-secondary-500'>Best Destinations around the world</p>
           <div className='w-full'>
           <h2 className='text-[4rem] font-volkhov w-full lg:text[2.5rem]'>Travel,<span className=''>enjoy</span> and live a new and full life </h2> 
           </div>
           <p className='text-[1.1rem]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
           <div className='w-full'>
            <div className='w-[80%] flex gap-3 items-center '>
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
        <div className='absolute top-10 left-[5rem]'>
            <img src={Plane} alt="" />
        </div>
        <div className='absolute top-[10rem] right-0 translate-x-[5rem]'>
            <img src={Plane} alt="" />
        </div>
        <img src={TravellerImage} alt="Traveller" className='h-full w-full' />
      </div>
    </div>
  )
}
