import React, { createContext ,useContext, useEffect, useRef, useState }  from 'react';
import { useInView } from 'react-intersection-observer';

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const[ navHeight,setNavHeight ] = useState("")
    const headerRef = useRef();
    const { ref, inView, entry } = useInView({
        root:null,
        threshold: 0,
        rootMargin: navHeight?`-${navHeight}px`:'0px',
      });

      useEffect(() =>{
        setNavHeight(headerRef.current.getBoundingClientRect().height)
    },[navHeight,headerRef])
  return (
    <StateContext.Provider   
      value={{
        ref, inView,headerRef
      }}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);