import React from 'react'
import { Category } from './Category'
import MultiPlus from "../../assets/images/mult_plus.png"
import { AboutCategory } from '../../data'





export const About = () => {
  return (
    <section className='my-[2rem] w-[80%] flex flex-col gap-5 relative'>
        <div className='top-0 right-0 absolute h-[8rem] w-[8rem] -translate-y-1/2 translate-x-1/2 '>
           <img src={MultiPlus} alt="" />     
        </div>
        <div className='flex flex-col gap-2 text-center w-full items-center'>
          <p className='text-[1.5rem]'>Category</p>
          <h3 className='font-volkhov text-[2.5rem] lg:text-[2rem]'>We Offer Best Services</h3>
        </div>
        <div className='flex justify-between relative w-full'>
            {AboutCategory.map((category,i)=>(
                <Category 
                  title={category.title}
                  icon ={category.icon}
                  description={category.description}
                />
            ))}
           
           
            <div className='absolute left-[25%] z-[-10] rounded-br-[.5rem] rounded-tl-[2rem] translate-y-1/2 -translate-x-1/2  h-[5rem] w-[5rem] bottom-0 bg-[#DF6951]'></div>
        </div>
    </section>
  )
}
