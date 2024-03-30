import React from 'react'

import About from './About';
import Services from './service/Services';
import Specialization from './Specialization';
import Client from './clients/Client';
import Gallary from './Gallary';
import Swiper from 'swiper';
import Slideses from './swipers';
import Gallarys from './Gallary/Gallary';
import Footer from './New-Footer/Footer';

export default function Cover() {
  // const [imageIndex,setImageIndex]=useState(1)
  // const handleSetImage = (ind) => {
  //  setImageIndex(ind)
  
  // };
  return (
    <div className='bg-[#fffefc]'>
       {/* {data?.length && data.map((data,index)=>(

<img src={data.img} alt="homepage" key={data.index} className={` ${data.index===imageIndex ?'block':'hidden'} absolute bg-no-repeat bg-cover w-[100%]  max-[1364px]:h-[75%] max-md:h-[65%] max-[420px]:h-[100%] min-[439px]:max-[730px]:h-[60%] min-[769px]:max-[910px]:h-[80%] max-[914px]:h-[75%]  text-black `}/>
))

} */}
    
    <About/>
 
    <Services/>
    <Specialization/>
    <Client/>

    <Gallary/>
    {/* <Gallarys/> */}
    <Footer/>
    </div>
  )
}
