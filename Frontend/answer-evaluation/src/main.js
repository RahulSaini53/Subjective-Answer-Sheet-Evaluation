
import { IoIosCreate } from "react-icons/io";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Saved from './components/Saved';
import CreatePaper from './components/Create_Paper';
import Assessment from './components/Assessment';
// import { Link } from "react-router-dom";

export default function Main(props){


    return(
        <div className='min-h-[80vh] p-3 bg-white'>
        {/* {props.paths.get('*')==='Create_Paper' && <CreatePaper />} */}
        {props.componentids === 'Home' && <Home />}
        {props.componentids === 'About' && <About />}
        {props.componentids === 'Contact' && <Contact />}
        {props.componentids === 'Saved' && <Saved />}
        {props.componentids === 'Create_Paper' && <CreatePaper />}
        {props.componentids === 'Assessment' && <Assessment />}

        <div className="text-blue-800 text-lg flex space-x-3 justify-center items-center mt-7" id='createpaper' ><IoIosCreate color="blue" style={{cursor:'pointer',}} size={24} />
       
        <span className="hover:underline   cursor-pointer">Create Paper</span>
   
        </div>        

        </div>
    )
}