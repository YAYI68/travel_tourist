
import { TestimonyData } from '../../data'
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
     <section className='w-[80%] my-[5rem]  flex '>
       <div className='w-[45%]  flex flex-col  gap-10'>
        <div className='w-[80%]'>     
        <p className='text-[1.5rem] lg:text-[1.2rem] font-semibold text-gray-500'>Testiomonies</p>
        <h3 className='text-[3.5rem] lg:text-[2rem] font-volkhov font-semibold'>What people say about Us.</h3>
        </div>
        <div className='flex gap-5'>
          <Indicator active />  
          <Indicator />  
          <Indicator />  
        </div>
       </div>
       <div className='relative w-[65%] md:w-[90%] '>
         <SideScroll />
         {TestimonyData.map((item,i)=>(
         <TestimonyCard
         key={i}
          bottom={'0'}
          right={'5rem'}
          zIndex={5}
          data={item}
         />
         ))}

        </div>
     </section>
  )
}
