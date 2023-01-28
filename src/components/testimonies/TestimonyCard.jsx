
import TestimonyPic from "../../assets/images/testimonypic.png"

export const TestimonyCard = ({bottom,right,zIndex,data}) => {
  return (
    <div 
    style={{
        bottom: bottom,
        right: right,
        zIndex: zIndex,
    }}
    className='bg-white shadow-xl rounded-md w-[70%] h-[15rem] absolute  right-2 transition-all'>
        <div className='relative w-full h-full p-6 flex flex-col justify-between '>
            <div className="absolute h-[3.5rem] top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[3.5rem] rounded-[50%] overflow-hidden">
                <img src={data.image} alt="" className='h-full  w-full' />
            </div>
            <div className=' w-[80%] text-[#5E6282]'>
                <p>{data.description}</p>
            </div>
            <div className='w-[50%]'>
                <p className='text-[1.2rem] font-semibold '>{data.name}</p>
                <p>{data.position}</p>
            </div>
        </div>
    </div>
  )
}
