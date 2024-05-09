import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { CiSaveDown1 } from "react-icons/ci";
import { IoIosCreate } from "react-icons/io";
import { MdAssignmentAdd } from "react-icons/md";

export default function Headerdisplay(props){

    return(
        <div className={`${props.headerdisplay?'xl:w-[17vw] max-lg:min-w-[30vw]':'w-[8vw] max-xl:w-[15vw]'} transition-all duration-30000`}>
        <div className={`${props.headerdisplay?'xl:w-[17vw] max-lg:min-w-[30vw]':'w-[8vw] max-xl:w-[15vw]'} space-y-3 pt-5 pb-24 px-1 flex-col items-center flex transition-all hover:bg-slate-200 border-r-2 shadow-sm  border-slate-300 duration-300 h-full overflow-y-scroll bg-slate-200 fixed max-sm:top-20 max-sm:hidden z-30 myscrollbar`}>
            
        <div id="Home" className={`flex relative ${props.headerdisplay?'justify-start pl-4':"justify-center hover:before:content-['Home'] before:left-28 before:absolute before:text-black before:font-medium before:text-lg"} cursor-pointer  space-x-5 items-center p-2 hover:bg-slate-400 active:scale-95 rounded-xl w-[90%]`} onClick={()=>props.setcomponentids('Home')}><FaHome color="blue" size={24} /><span className={`text-blue text-lg max-lg:text-sm ${props.headerdisplay?'visible':'hidden'}`}>Home</span></div>

        <div  id="Saved" className={`flex relative ${props.headerdisplay? 'justify-start pl-4':"justify-center hover:before:content-['Saved'] before:left-28 before:absolute before:text-black before:font-medium before:text-lg"} cursor-pointer space-x-5 items-center p-2 hover:bg-slate-400 active:scale-95 rounded-xl w-[90%]`} onClick={()=>props.setcomponentids('Saved')}><CiSaveDown1 color="blue" size={24} /><span className={`text-blue text-lg max-lg:text-sm ${props.headerdisplay?'visible':'hidden'}`}>Saved</span></div>

        <div id="Create_Paper" className={`flex relative ${props.headerdisplay? 'justify-start pl-4':"justify-center hover:before:content-['Create_Paper'] before:left-28 before:absolute before:text-black before:font-medium before:text-lg"} cursor-pointer space-x-5 items-center p-2 hover:bg-slate-400 active:scale-95 rounded-xl w-[90%]`} onClick={()=>props.setcomponentids('Create_Paper')}><IoIosCreate color="blue" size={24} /><span className={`text-blue text-lg max-lg:text-sm ${props.headerdisplay?'visible':'hidden'}`}>Create Paper</span></div>

        <div id="Assessment" className={`flex relative ${props.headerdisplay? 'justify-start pl-4':"justify-center hover:before:content-['Assessment'] before:left-28 before:absolute before:text-black before:font-medium before:text-lg"} cursor-pointer space-x-5 items-center p-2 hover:bg-slate-400 active:scale-95 rounded-xl w-[90%] `} onClick={()=>props.setcomponentids('Assessment')}>
            <div><MdAssignmentAdd color="blue" size={24} /></div>
            <span className={`text-blue text-lg max-lg:text-sm line-clamp-1 ${props.headerdisplay?'visible':'hidden'}`}>Assessment</span></div>

        <div id="Contact" className={`flex relative ${props.headerdisplay? 'justify-start pl-4':"justify-center hover:before:content-['Contact'] before:left-28 before:absolute before:text-black before:font-medium before:text-lg"} cursor-pointer space-x-5 items-center p-2 hover:bg-slate-400 active:scale-95 rounded-xl w-[90%]`} onClick={()=>props.setcomponentids('Contact')}><IoIosContact color="blue" size={24} /><span className={`text-blue text-lg max-lg:text-sm ${props.headerdisplay?'visible':'hidden'}`}>Contact</span></div>

        <div id="About" className={`flex relative ${props.headerdisplay? 'justify-start pl-4':"justify-center hover:before:content-['About'] before:left-28 before:absolute before:text-black before:font-medium before:text-lg"} cursor-pointer space-x-5 items-center p-2 hover:bg-slate-400 active:scale-95 rounded-xl w-[90%]`} onClick={()=>props.setcomponentids('About')}><MdOutlineRoundaboutRight color="blue" size={24} /><span className={`text-blue text-lg max-lg:text-sm ${props.headerdisplay?'visible':'hidden'}`}>About</span></div>
        
        
        </div>
       

        </div>
    )
}