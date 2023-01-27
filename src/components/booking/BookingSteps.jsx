import React from 'react'


export const BookingSteps = ({icon,title,description}) => {
  return (
    <div className='flex gap-5 w-[60%]'>
     <div className='h-[4rem] lg:h-[2rem] lg:w-[2.5rem] w-[5.5rem]'>
        <img src={icon} alt='' className='h-full ' />
     </div>
     <div className='h-[4rem] lg:h-[2rem]'>
        <p className='text-[1.2rem] lg:text-[.8rem] font-semibold'>{title}</p>
        <p className='text-[.8rem] lg:text-[.5rem]'>{description}</p>
     </div>
    </div>
  )
}
