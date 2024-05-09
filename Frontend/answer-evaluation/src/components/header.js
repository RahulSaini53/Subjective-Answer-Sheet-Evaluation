

export default function Header(props){

    return(
        <div className='h-16 max-sm:h-20 relative'>
         <header className='w-[100%] h-16  max-sm:h-20 z-50 bg-white shadow  justify-between px-5 flex items-center fixed border-b-2 border-slate-300'>
         <div className="w-10 py-1.5 h-10 flex justify-around items-center max-lg:flex flex-col transition ease-in-out delay-15 duration-30 active:scale-95 rounded-full" onClick={()=>props.setdisplay(prev=>!prev)}>
             <div className="w-7 h-1 bg-black"></div>
             <div className="w-7 h-1 bg-black"></div>
             <div className="w-7 h-1 bg-black"></div>
             
          </div>
            
           <h1 className='self-center justify-self-center text-2xl text-blue-500'>Answer Sheet Evaluation System</h1>
           <div></div>
          </header>
        </div>
    )
}