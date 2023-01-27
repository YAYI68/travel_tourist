import React from 'react'


export const BookingSteps = ({icon,title,description}) => {
  return (
    <div className='flex gap-5 w-[60%]'>
     <div className='h-[4rem] w-[5.5rem]'>
        <img src={icon} alt='' className='h-full ' />
     </div>
     <div className='h-[4rem]'>
        <p className='text-[1.2rem] font-semibold'>{title}</p>
        <p className='text-[.8rem]'>{description}</p>
     </div>
    </div>
  )
}
