import React from 'react'

export const RectButton = ({text,bgColor}) => {
  return (
    <button className={`px-[2rem] rounded-md py-[1rem] shadow-md lg:py-[.5rem] `} style={{
        background:bgColor,
    }}>
        <p className='text-white'>{text}</p>
    </button>
  )
}
