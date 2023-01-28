import React from 'react'


export const BookingSteps = ({icon,title,description}) => {
  return (
    <div className='flex gap-5 w-[60%] md:w-full'>
     <div className='h-[4rem] lg:h-[2rem] lg:w-[2.5rem] w-[5.5rem] md:h-[2.5rem] md:w-[3.5rem]'>
        <img src={icon} alt='' className='h-full ' />
     </div>
     <div className='h-[4rem] lg:h-[2rem] md:h-[3rem]'>
        <p className='text-[1.2rem] lg:text-[.8rem] md:text-[1rem] font-semibold '>{title}</p>
        <p className='text-[.8rem] lg:text-[.5rem] md:text-[.7rem]'>{description}</p>
     </div>
    </div>
  )
}
