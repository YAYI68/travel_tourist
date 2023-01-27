import React from 'react'
import Satellite from "../../assets/images/satelite.png"



export const Category = ({icon,title,description}) => {
  return (
    <div className='z-[2] lg:w-[45%] md:w-[90%] lg:flex-wrap lg:m-[1rem] overflow-hidden px-4 py-6 w-[24%] items-center rounded-md hover:shadow-lg hover:bg-white gap-4 flex flex-col'>
        <div className='h-[5rem] w-[5rem] '>
            <img src={icon} alt="" className='h-full w-full' />
        </div>
        <h4 className='font-semibold text-[1.5rem] text-center '>{title}</h4>
         <div className='w-[60%] text-center'>
            <p>{description}</p>
         </div>
    </div>
  )
}
