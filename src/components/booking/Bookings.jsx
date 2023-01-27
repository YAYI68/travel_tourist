import React from 'react'
import { BookSteps } from '../../data'
import { BookingCard } from './BookingCard'
import { BookingSteps } from './BookingSteps'

BookSteps
export const Bookings = () => {
  return (
    <section className='flex my-[3rem] w-[80%]'>
        <div className='w-[50%]'>
            <div>
               <p className='text-[1.5rem] '>Easy and Fast</p>
               <h2 className='text-[3.5rem] font-volkhov'>Book Your Next Trip In 3 Easy Steps</h2> 
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
        <div className='w-[50%] relative '>
             <div className='h-[20rem] absolute right-5 top-5 z-[-5] w-[20rem] border-none bg-book-gradient'></div>
             <BookingCard />
        </div>
    </section>
  )
}
