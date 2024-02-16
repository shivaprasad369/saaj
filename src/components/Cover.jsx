import React from 'react'

import About from './About';
import Services from './Services';
import Specialization from './Specialization';
import Client from './Client';
import Gallary from './Gallary';

export default function Cover() {
  // const [imageIndex,setImageIndex]=useState(1)
  // const handleSetImage = (ind) => {
  //  setImageIndex(ind)
  
  // };
  return (
    <>
       {/* {data?.length && data.map((data,index)=>(

<img src={data.img} alt="homepage" key={data.index} className={` ${data.index===imageIndex ?'block':'hidden'} absolute bg-no-repeat bg-cover w-[100%]  max-[1364px]:h-[75%] max-md:h-[65%] max-[420px]:h-[100%] min-[439px]:max-[730px]:h-[60%] min-[769px]:max-[910px]:h-[80%] max-[914px]:h-[75%]  text-black `}/>
))

} */}
    
    <About/>
 
    <Services/>
    <Specialization/>
    <Client/>
    <Gallary/>
    
    </>
  )
}
