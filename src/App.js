import './App.css';



import Client from "./components/Client/Client";

import Cover from "./components/Cover";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './components/Services/Services';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Demo from './demo/Demo';
import Gallarys from './components/Gallary/Gallary';




function App() {
  
  return (
    <BrowserRouter>
{/*   
      <Demo/> */}
    <Home/>
    <Routes>

    <Route path='/' element={<Cover/>}/>
    <Route path='/why' element={<Client/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/gallary' element={<Gallarys/>}/>

    </Routes>
    <Footer/>

    {/* <div className="max-sm:overflow-x-hidden flex-wrap w-[100%] ">
    <Cover/>
    <Why/>
    <How/>
    <Footer/> */}
    {/* <div>
     <About/>
    </div>
    <Services/>
    <Specialization/>
    <Client/>
    <Gallary/>
    <Footer/> */}
 {/* <Main/> */}
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
