
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";

export const SideScroll = () => {
  return (
    <div className='h-[10rem] absolute right-[-2rem] bottom-5 flex flex-col gap-4 translate-x-1/2'>
       <button className='h-[2.5rem] w-[2.5rem] p-2 flex items-center justify-center hover:border'>
         <IoChevronDownSharp className="h-full w-full" />
       </button>
       <button className='h-[2.5rem] w-[2.5rem] p-2 rounded flex items-center justify-center hover:border'>
         <IoChevronUpSharp className="h-full w-full" />
       </button>
    </div>
  )
}
