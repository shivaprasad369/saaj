import './App.css';
import About from "./components/About";
import Services from "./components/Services";
import Specialization from "./components/Specialization";
import Client from "./components/Client";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import Cover from "./components/Cover";
import Main from './components/Main';

function App() {
  return (
    <div className="max-sm:overflow-x-hidden flex-wrap w-[100%] ">
    <Cover/>
    <div>
     <About/>
    </div>
    <Services/>
    <Specialization/>
    <Client/>
    <Gallary/>
    <Footer/>
 {/* <Main/> */}
    </div>
  );
}

export default App;
