import React from 'react';
import Axon from "../../assets/images/axon.png"
import Expedia from "../../assets/images/expedia.png"
import Jetstar from "../../assets/images/jetstar.png"
import Qantas from "../../assets/images/qantas.png"
import Alitalia from "../../assets/images/alitalia.png"

 const BrandIcon = [
  {
    icon:Axon,
  },
  {
    icon:Jetstar,
  },
  {
    icon:Expedia,
  },
  {
    icon:Qantas,
  },
  {
    icon:Alitalia,
  },
 ]
   
export const Brand = () => {
  return (
    <section className='w-[80%] my-[5rem] md:w-[50%]'>
        <div className='w-full flex justify-between items-center md:flex-col'>
            {BrandIcon.map((brand,i)=>(
            <div className='group w-[15%] px-4 rounded-md hover:shadow-lg h-[5rem] flex items-center justify-center'>
              <img src={brand.icon} alt=''  className=' w-full grayscale group-hover:grayscale-0'/>
            </div>
            ))}       
        </div>
    </section>
  )
}
