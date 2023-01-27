import React from 'react'
import { SideScroll } from './SideScroll'
import { TestimonyCard } from './TestimonyCard'


const Indicator = ({active})=>{
 return(
        <button 
          style={active?{
            backgroundColor:'#39425D'
          }:{
            backgroundColor:'#E5E5E5'
          }
         }
        className='h-[.8rem] w-[.8rem] rounded-[50%] bg-yellow-600'></button>
    )
}


export const Testimonies = () => {
  return (
     <section className='w-[80%] mb-[5rem] mt-[6rem] flex'>
       <div className='w-[45%] h-[20rem] flex flex-col gap-10'>
        <div className='w-[80%]'>     
        <p className='text-[1.5rem] font-semibold text-gray-500'>Testiomonies</p>
        <h3 className='text-[3.5rem] font-volkhov font-semibold'>What people say about Us.</h3>
        </div>
        <div className='flex gap-5'>
          <Indicator active />  
          <Indicator />  
          <Indicator />  
        </div>
       </div>
       <div className='relative w-[65%] h-[20rem] '>
         <SideScroll />
         <TestimonyCard
          bottom={'5rem'}
          right={'5rem'}
          zIndex={5}
         />
         <TestimonyCard
          bottom={'.5rem'}
          right={'.5rem'}
          zIndex={1}
         />
         <TestimonyCard
          bottom={'.5rem'}
          right={'.5rem'}
          zIndex={1}
         />
        </div>
     </section>
  )
}
