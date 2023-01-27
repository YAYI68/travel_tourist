import React from 'react';
import TestimonyPic from "../../assets/images/testimonypic.png"

export const TestimonyCard = ({bottom,right,zIndex}) => {
  return (
    <div 
    style={{
        bottom: bottom,
        right: right,
        zIndex: zIndex,
    }}
    className='bg-white shadow-xl rounded-md w-[70%] h-[15rem] absolute  right-2'>
        <div className='relative w-full h-full p-6 flex flex-col justify-between '>
            <div className="absolute h-[3.5rem] top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[3.5rem] ">
                <img src={TestimonyPic} alt="" className='h-full  w-full' />
            </div>
            <div className=' w-[80%] text-[#5E6282]'>
                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            </div>
            <div className='w-[50%]'>
                <p className='text-[1.2rem] font-semibold '>Mike taylor</p>
                <p>Lahore, Pakistan</p>
            </div>
        </div>
    </div>
  )
}
