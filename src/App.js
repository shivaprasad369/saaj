import './App.css';



import Client from "./components/Client/Client";

import Cover from "./components/Cover";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './components/Services/Services';
// import Home from './components/Home';
import NewHome from './components/NewHome.jsx'
import Footer from './components/New-Footer/Footer.jsx';
import Contact from './components/Contact/new.jsx';
import About from './components/About/About';
import Demo from './demo/Demo';
import Gallarys from './components/Gallary/Gallary';
import Blog from './components/BLog/Blog.jsx';
import Demos from './Admin/Demo.jsx'
import Admin from './Admin/Admin.jsx';



function App() {
  
  return (
    <BrowserRouter>
{/*   
      <Demo/> */}
    {/* <Home/> */}
    <NewHome/>
    <Routes>

    <Route path='/' element={<Cover/>}/>
    <Route path='/why' element={<Client/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/gallary' element={<Gallarys/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/admin' element={<Demos/>}/>
    <Route path='/panel' element={<Admin/>}/>
    </Routes>
    {/* <Footer/> */}
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
