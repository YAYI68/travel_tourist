import React from 'react';
import Place1 from "../../assets/images/place1.png"


export const Place = ({location,image,duration,price}) => {
  return (
    <div className='flex flex-col items-center shadow-md overflow-hidden rounded-lg h-[27rem] w-[30%] md:w-[90%] hover:-translate-y-4 transition-[transform]'>
      <div className='w-full h-[75%]'>
        <img src={image} alt="location" className='h-full w-full hover:scale-105  transition-[transform]' />
      </div>
      <div className='h-[25%] flex flex-col w-[80%] justify-between'>
        <div className='flex justify-between py-[1rem]'>
           <p>{location}</p> 
           <p>{price}</p>
        </div>
        <div className='flex items-center gap-2'>
          <button  className='h-[2rem] w-[2rem] flex items-center justify-center rounded-[50%] hover:shadow-md'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M17.0682 1.76033L10.1932 16.7603C10.1357 16.886 10.0381 16.989 9.91582 17.0533C9.7935 17.1177 9.65332 17.1396 9.5172 17.1158C9.38108 17.092 9.25669 17.0237 9.16348 16.9217C9.07028 16.8197 9.01352 16.6896 9.00208 16.5519L8.42083 9.57896L1.44789 8.99771C1.31017 8.98627 1.18013 8.92951 1.0781 8.8363C0.976073 8.7431 0.90781 8.61871 0.88399 8.48258C0.860169 8.34646 0.882135 8.20628 0.946451 8.08397C1.01077 7.96166 1.11381 7.86411 1.23945 7.80658L16.2395 0.93158C16.3554 0.878438 16.4849 0.862048 16.6104 0.884614C16.736 0.907179 16.8516 0.967618 16.9418 1.05781C17.032 1.14801 17.0924 1.26365 17.115 1.38919C17.1375 1.51474 17.1212 1.64418 17.068 1.76014L17.0682 1.76033Z" fill="#080809"/>
          </svg>
          </button>  
          <p className='text-[.8rem]'>{duration}</p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  )
}
