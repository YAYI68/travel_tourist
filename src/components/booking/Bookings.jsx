import React from 'react'
import { BookSteps } from '../../data'
import { BookingCard } from './BookingCard'
import { BookingSteps } from './BookingSteps'

BookSteps
export const Bookings = () => {
  return (
    <section className='flex my-[7rem] w-[80%] md:w-[95%] md:flex-col'>
        <div className='w-[50%] md:w-full'>
            <div>
               <p className='text-[1.5rem] lg:text-[1rem] '>Easy and Fast</p>
               <h2 className='text-[3.5rem] lg:text-[2rem] font-volkhov md:text-[1.5rem]'>Book Your Next Trip In 3 Easy Steps</h2> 
            </div>
            <div className='flex flex-col gap-4'>
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
        <div className='w-[50%] relative md:w-full '>
             <div className='h-[20rem] absolute right-5 top-5 z-[-5] w-[20rem] border-none bg-book-gradient'></div>
             <BookingCard />
        </div>
    </section>
  )
}
