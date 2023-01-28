import React from 'react'
import { BookSteps } from '../../data'
import { BookingCard } from './BookingCard'
import { BookingSteps } from './BookingSteps'

BookSteps
export const Bookings = () => {
  return (
    <section className='flex my-[7rem] md:my-[4rem] w-[80%] md:w-full md:flex-col md:gap-10 items-center'>
        <div className='w-[50%] md:w-[90%] flex flex-col md:items-center'>
            <div className='md:text-center'>
               <p className='text-[1.5rem] lg:text-[1rem] md:text-[1.2rem] '>Easy and Fast</p>
               <h2 className='text-[3.5rem] lg:text-[2rem] font-volkhov md:text-[1.5rem]'>Book Your Next Trip In 3 Easy Steps</h2> 
            </div>
            <div className='flex flex-col gap-4 md:w-[80%] md:mt-[2rem]'>
                {BookSteps.map((step,i)=>(
                   <BookingSteps 
                       key={i}
                       icon={step.icon}
                       title={step.title}
                       description={step.description}
                   /> 
                ))}
            </div>
        </div>
        <div className='w-[50%] md:w-[90%] relative  md:flex md:flex-col '>
             <div className='h-[20rem] md:h-[15rem] absolute right-5 top-5 z-[-5] w-[20rem] border-none bg-book-gradient'></div>
             <BookingCard />
             </div>
    </section>
  )
}
