
import { FaInstagramSquare,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";
export default function Footer(){

    return(
        <div  className='min-h-28 bg-slate-400 border-t-2 border-slate-400 shadow-md pt-6 pb-6'>
          <span className="break-words">© Copyright rks. All Rights Reserved
          <br />
          Designed by Rahul Saini
          </span>
          <div className="flex items-center space-x-7  mr-5 w-fit p-5 justify-between relative left-[50%] -translate-x-[50%]">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare color="red" size={20} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook color="green" size={20}/></a>
            <a href="https://www.linkedin.com/in/rahul-saini-440745270/" target="_blank" rel="noopener noreferrer"><FaLinkedin color="black" size={20}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaTwitter color="blue" size={20} /></a>
            </div>
       
        </div>
    )
}