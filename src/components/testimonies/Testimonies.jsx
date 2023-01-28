
import { useState } from 'react'
import { TestimonyData } from '../../data'
import { SideScroll } from './SideScroll'
import { TestimonyCard } from './TestimonyCard'


const Indicator = ({active,click})=>{
  
 return(
        <button 
          onClick={click}
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
  const [curState, setCurState ] = useState(0)
   
  const slideLenght = TestimonyData.length

  const scrollUp = ()=>{
    if(curState >= slideLenght - 1 ){
      setCurState(0)
    }else{
      setCurState(prev=>prev + 1)
    }
  }

  const scrolldown = ()=>{
    if(curState <= 0){
      setCurState(slideLenght)
    }
    setCurState(prev=>prev - 1)
  }

  const moveIndicator = (index)=>{
    setCurState(index)
  }


  return (
     <section className='w-[80%] my-[5rem]  flex '>
       <div className='w-[45%]  flex flex-col  gap-10'>
        <div className='w-[80%]'>     
        <p className='text-[1.5rem] lg:text-[1.2rem] font-semibold text-gray-500'>Testiomonies</p>
        <h3 className='text-[3.5rem] lg:text-[2rem] font-volkhov font-semibold'>What people say about Us.</h3>
        </div>
        <div className='flex gap-5'>
          {TestimonyData.map((_,i)=>(
            i===curState?<Indicator 
              active
              click={()=>moveIndicator(i)}
            /> :<Indicator 
               click={()=>moveIndicator(i)}
            />
          ))}
        
        </div>
       </div>
       <div className='relative w-[65%] md:w-[90%] '>
         <SideScroll moveUp={scrollUp} moveDown={scrolldown} current={curState} limit={slideLenght}  />
         {TestimonyData.map((item,i)=>(
          <TestimonyCard
          key={i}
          bottom={curState === i? '0':'-5rem'}
          right={curState === i? '5rem':'2rem'}
          zIndex={curState === i? curState:curState-1}
          data={item}
         />
         ))}

        </div>
     </section>
  )
}
