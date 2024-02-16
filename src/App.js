import './App.css';



import Client from "./components/Client/Client";

import Cover from "./components/Cover";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './components/Services/Services';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Home/>
    <Routes>

    <Route path='/' element={<Cover/>}/>
    <Route path='/why' element={<Client/>}/>
    <Route path='/services' element={<Services/>}/>
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
