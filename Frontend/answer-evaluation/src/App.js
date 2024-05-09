// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Main from './main'
import Headerdisplay from './components/headerdisplay'
import { useState } from 'react';
import { Routes,Route,Navigate,Link, useParams} from 'react-router-dom';
import CreatePaper from './components/Create_Paper';
// import LoginPage from './components/Loginpage';

function App() {
  
  const [usertype,setUsertype]=useState(null)
  
  return (

    <Routes>
       <Route path='/' element={<Navigate to="/loginpage" />}>
       </Route>
       <Route path='/loginpage' element={<LoginPage setUsertype={setUsertype}/>} > </Route>
       <Route path='/home' element={<MainDisplay usertype={usertype}/>}>
         <Route path='*' element={<CreatePaper />}></Route>
       </Route>
       <Route path='*' element={<LoginPage/>}></Route>
    </Routes>
      
  );
}

export default App;


function LoginPage(props){
  
  function setusers(e){
     localStorage.setItem('user',JSON.stringify(e.target.id))
  }

  return(
   <body>
    <main className='bg-slate-800 h-[80vh] p-16'>
      
      <div className="h-[60vh] w-[50vw] max-md:w-[90vw] ml-[50%] hover:shadow-md hover:shadow-lime-400 shadow-sm shadow-white  bg-slate-100 -translate-x-[50%]">
         <h1 style={{backgroundImage: "radial-gradient(circle at 30% 30%, #F5AF19, #F12711)"}} className='uppercase text-center text-2xl py-4 font-semibold font-serif'>answer sheet evaluation system</h1>
         <div className='border-2 border-blue-600'></div>
         <div className='flex mt-2 space-x-2 h-[70%]'>
          <div className=' w-[40%] max-lg:w-[50%] flex items-center justify-center'>
            <img src='images/logoimage1.png' className='h-64' alt='logoimage'></img>
          </div>
          <div className=' w-[60%] flex flex-col items-center justify-center space-y-7'>
          {/* <Link to='/home'> */}
           {/* <button className='bg-green-500 rounded-lg p-4 text-red-500 text-base'>home</button> */}
           <div>
           <Link to='/home'>
           <span  id='teacher' className='block p-2 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-black shadow-md shadow-black' onClick={setusers}>Teacher Login</span>
           </Link>
           </div>
           <div>
           <span className='block p-2 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-black shadow-md shadow-black' onClick={()=>props.setUsertype('student')}>Student Login</span>
           </div>
         </div>
         </div>
      </div>
        </main>
        <footer className='bg-slate-700 h-[20vh] items-center flex flex-col'>
          <div className=' w-96 space-x-4 mt-2 flex flex-col items-center'>
            <img src='images/logomnit.png' className='h-16' alt='logomnit'></img>
            <span className='text-base font-semibold text-white'>Major Project</span>
            </div>
        </footer>
      </body>
  )
}



function MainDisplay(props){

  const [headerdisplay,setdisplay] = useState(true)

  const [componentids,setcomponentids]= useState('Home')

  const paths=useParams()

  console.log(paths)
  
  return(
    
    <div className="App relative grid">
      <Header headerdisplay={headerdisplay} setdisplay={setdisplay} />
      <div className='mygrid'>
      {props.usertype==='teacher' && <Headerdisplay headerdisplay={headerdisplay} componentids={componentids} setcomponentids={setcomponentids} paths/> }
     
      <div>
      {props.usertype==='teacher' && <Main  componentids={componentids} />}
    
      <Footer />
      </div>
      </div>
    </div>
  )
   
}
