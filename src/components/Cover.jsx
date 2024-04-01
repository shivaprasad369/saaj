import React from 'react'

import About from './About';
import Services from './service/Services';
import Specialization from './Specialization';
import Client from './clients/Client';
import Gallary from './Gallary';

import Footer from './New-Footer/Footer';

export default function Cover() {
 
  return (
    <div className='bg-[#fffefc]'>
    
    <About/>
 
    <Services/>
    <Specialization/>
    <Client/>

    <Gallary/>
    <Footer/>
    </div>
  )
}
