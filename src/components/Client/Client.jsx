import React, { useEffect } from 'react'

import Why from './Why'
import How from './How'
import { useLocation } from 'react-router-dom';


export default function Client() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById('why');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div id="why" className="max-sm:overflow-x-hidden flex-wrap w-[100%] ">
    
        
    <Why/>
    <How/>
  <div  className='my-[10%] max-sm:hidden border-b-[1px] border-gray-200'/>
    </div>
  )
}
