import React from 'react'
import BookingImage from "../../assets/images/bookingcard.png"
import Leaf from "../../assets/icons/leaf.svg"
import BuildingIcon from "../../assets/icons/building.svg"
import SendIcon from "../../assets/icons/send.svg"
import MapIcon from "../../assets/icons/map.svg"
import MosqueImg from "../../assets/images/mosques.png"



export const BookingCard = () => {
  return (
    <div className='w-[60%] lg:w-[80%] p-4 h-[90%] lg:h-full rounded-lg absolute md:static bg-white shadow-2xl top-20 right-[6rem] md:h-[20rem] '>
       <div className=' flex flex-col gap-3 w-full h-full rounded-lg'>
          <div className='w-full h-[50%] overflow-hidden rounded-lg'>
             <img src={BookingImage} alt="" className='h-full w-full' />
          </div>
          <div className='w-full h-[60%] relative flex flex-col justify-between'>
              <p className='font-semibold text-[1.5rem] lg:text-[1.2rem]'>Trip To Greece</p>
               <div className='text-[#84829A] flex gap-4 items-center lg:text-[.8rem]'>
                <p>14-29 June |</p>
                <p> by Robbin joseph</p>
               </div>
               <div className='flex gap-5'>
                <button type="" className='h-[2rem] bg-[#F5F5F5] hover:shadow-md w-[2rem] rounded-[50%] flex items-center justify-center'>
                    <img src={Leaf} alt="" />
                </button>
                <button type="" className='h-[2rem] bg-[#F5F5F5] hover:shadow-md w-[2rem] rounded-[50%] flex items-center justify-center'>
                    <img src={MapIcon} alt="" />
                </button>
                <button type="" className='h-[2rem] bg-[#F5F5F5] hover:shadow-md w-[2rem] rounded-[50%] flex items-center justify-center'>
                    <img src={SendIcon} alt="" />
                </button>
               </div>
               <div className='w-full justify-between flex items-center'>
                 <div className='w-[50%] flex gap-4 items-center'>
                 <button type="" className='h-[2rem]  hover:shadow-md w-[2rem] rounded-[50%] flex items-center justify-center'>
                    <img src={BuildingIcon} alt="" />
                </button>
                <p className='text-[.9rem] lg:text-[.7rem]'>24 people going</p>
                 </div>

                 <button className='h-[2rem] w-[2rem]'>
                 <svg width="20" height="20" className='h-[1rem] w-[1rem]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3644 2.45457C17.33 1.34265 15.8804 0.709981 14.3617 0.707636C12.8417 0.709395 11.3906 1.34173 10.3546 2.45386L10.0015 2.82698L9.64836 2.45386C7.59251 0.241198 4.13215 0.114128 1.91953 2.16998C1.82148 2.26112 1.72679 2.35577 1.63565 2.45386C-0.545218 4.80619 -0.545218 8.44162 1.63565 10.794L9.48255 19.069C9.75403 19.3556 10.2064 19.3679 10.493 19.0964C10.5024 19.0875 10.5115 19.0784 10.5204 19.069L18.3645 10.794C20.5452 8.44187 20.5452 4.80665 18.3644 2.45457ZM17.3302 9.80969H17.3294L10.0015 17.5386L2.67282 9.80969C1.00676 8.01229 1.00676 5.23481 2.67282 3.43741C4.1858 1.79757 6.74172 1.69475 8.38156 3.20773C8.46118 3.28119 8.53778 3.35779 8.61124 3.43741L9.48255 4.35663C9.76969 4.64193 10.2333 4.64193 10.5204 4.35663L11.3917 3.43812C12.9047 1.79828 15.4606 1.69546 17.1005 3.20844C17.1801 3.2819 17.2567 3.35851 17.3302 3.43812C19.0107 5.23837 19.023 8.02092 17.3302 9.80969Z" fill="#4152CA"/>
                 </svg>
                 </button>

               </div>
               <div className='absolute flex gap-2 p-2 rounded-lg right-[-7rem] md:right-[-3.5rem] md:top-4 top-12 bg-white h-[60%] md:w-[50%] md:[70%] w-[70%] z-[5] shadow-md'>
                  <div className='h-[3rem] w-[3rem] lg:h-[2rem] lg:w-[2rem] rounded-[50%] overflow-hidden '>
                     <img src={MosqueImg} alt="" />
                  </div>
                  <div className='flex flex-col w-[80%] gap-1'>
                     <p className='text-[#84829A] text-[.8rem] lg:text-[.6rem]'>On going</p>
                     <p className='font-semibold lg:text-[.8rem]'>Trip to rome</p>
                     <p className='text-[.8rem] lg:text-[.6rem] font-semibold'> <span className='text-[#8A79DF]'>40%</span> Completed</p>
                     <div className='w-full h-[.5rem] rounded-md bg-[#F5F5F5]'>
                       <div className='w-[40%] bg-[#8A79DF] rounded-md h-full'></div> 
                     </div>
                  </div>
               </div>
          </div>
       </div>
    </div>
  )
}
