import React from 'react'
import Wire from "../../assets/images/wire.png"
import { PlacesData } from '../../data'
import { Place } from './Place'


export const Destination = () => {
  return (
    <section className='my-[5rem] w-[80%] flex flex-col gap-5 relative'>

       <div className='flex flex-col gap-2 text-center w-full items-center'>
          <p className='text-[1.5rem]'>Top Selling</p>
          <h3 className='font-volkhov text-[2.5rem]'>Top Destinations</h3>
        </div>
        <div className='flex w-full justify-between mt-[2rem] relative'>
        <div className='top-10 z-[-5] right-0 absolute h-[10rem] w-[7rem]  translate-x-1/2 '>
         <img src={Wire} alt="" />     
        </div>
         {PlacesData.map((place,i)=>(
               <Place
                  key={i}
                  image={place.image}
                  duration={place.duration}
                  location={place.location}
                  price={place.price}

               
               />
         ))}
     
        </div>
    </section>
  )
}
