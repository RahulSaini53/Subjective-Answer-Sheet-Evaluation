import { useState } from "react"


export default function Main(){

    const [Solution,setSolution]=useState('')
    const [question,setQuestion]=useState('')
    const [answer,setAnswer]=useState('')
    const [warning,setWarning]=useState('')
    const [duplicatwarning,setDuplicateWarning]=useState(false)
    const [result,setResult]=useState('----')
    const [myfile,setMyFile]=useState(null)
    const [solutionfile,setSolutionFile]=useState(null)
    const [inputKey,setInputKey]=useState(1)
    const [inputKey2,setSolutionInputKey]=useState(1)
    const [animate,setAnimation]=useState(false)
    
    function handleSubmit(e){
        e.preventDefault()
        setResult('----')

        // if(!Solution)
        //  {
        //     if(!solutionfile){
        //         setDuplicateWarning(true)
        //         return
        //     }
        // }

        // else{
        //     if(!(!solutionfile)){
        //         setDuplicateWarning(true)
        //         return
        //     }

        //  }

        // if(!answer){
        //     if(!myfile){
        //         setDuplicateWarning(true)
        //         return
        //     }
        // }

        // else{
        //     if(!(!myfile)){
        //         setDuplicateWarning(true)
        //         return
        //     }
        // }



        setAnimation(true)
        const formdata=new FormData()
        formdata.append('solution',Solution)
        formdata.append('answer',answer)
        if(myfile)
            formdata.append('image',myfile)
        if(solutionfile){
            formdata.append('solutionimage',solutionfile)
        }

        const fetchData = async (formdata) => {
            const url='http://127.0.0.1:8000/ExtendedDataprocessapi/'
            const options={
                method:'POST',
                body:formdata
            }

            try {
                const response = await fetch(url, options);
                
                if (response.status!==201) {
                    // throw new Error('There was an error');
                    console.log(response.message)
                }
                else{
                let data= await response.json();
                console.log(data)
                setResult(data.output);
                setAnswer(data.answer);
                setSolution(data.solution)
                setAnimation(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setAnimation(false);
            }
         
        };


        fetchData(formdata)
    

    }
    
    function Cleardata(){
        setSolution('')
        setAnswer('')
        setQuestion('')
        setResult('----')
        setMyFile(null)
        setSolutionFile(null)
        setInputKey((prev)=>prev+1)
        setSolutionInputKey((prev)=>{
            if(prev>2)
                prev=prev-1
            else
                prev=prev+1

            return prev
    })
        setDuplicateWarning(false)
        setWarning(false)
        setAnimation(false)
    }


    return(
        <main className="flex justify-center">
            <div className="border-2 w-[50vw] mt-5 min-h-[80vh] shadow-md shadow-black bg-slate-700">

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center p-5 space-y-5">
                    <div className="flex items-center space-x-3">
                        <span className="text-lg text-white">result : </span>
                        <div className="w-20 h-20 border-2 rounded-full flex flex-col justify-center items-center">
                          <span className={`text-lg font-semibold text-white ${animate ? 'hidden':''}`}>{result}</span>
                          {animate && <div className="myanimate w-7 h-7 border-x-2 border-t-2 border-green-500 rounded-full mb-1"></div>}
                          <div className="border-b-2 w-10"></div>
                          <span className="text-lg text-white font-semibold">10</span>
                        </div>
                    </div>
                    {warning &&
                    <div>
                        <span className="bg-red-600 px-4 py-2 text-white">please enter solution and answer</span>
                    </div>
                     }

                    {duplicatwarning &&
                    <div>
                        <span className="bg-red-600 px-4 py-2 text-white">please enter only one of file and answer</span>
                    </div>
                     } 
                    <div className="flex justify-between space-x-3 w-[35vw]">
                      <label className="text-red-500 text-lg">Question: </label>
                      <textarea name="question" id="question" value={question} placeholder="enter question here" rows="5" cols={60} className="px-2 py-1 outline-orange-400 rounded-lg" onChange={(e)=>setQuestion(e.target.value)}></textarea>
                    </div>
                    <div className="flex justify-between space-x-3 w-[35vw]">
                      <label className="text-red-500 text-lg">Solution: </label>
                      <textarea name="solution" id="solution" value={Solution} placeholder="enter question here" rows="7" cols={60} className="px-2 py-1 outline-orange-400 rounded-lg" onChange={(e)=>setSolution(e.target.value)} onClick={()=>setWarning(false)}></textarea>
                    </div>

                    <div className="">
                        <span className="mb-5  text-lg text-emerald-400">OR</span>
                        <div className="border-2 flex justify-center items-center mt-4">
                            <input key={inputKey2} type="file" name="solutionimage"  className="text-white" onChange={(e)=>setSolutionFile(e.target.files[0])} onClick={()=>setDuplicateWarning(false)}></input>
                        </div>
                    </div>

                    <div className="flex justify-start space-x-3 w-[40vw]">
                      <label className="text-red-500 text-lg">Your Answer: </label>
                      <textarea name="answer" id="answer" value={answer} placeholder="enter question here" rows="8" cols={60} className="px-2 py-1 outline-orange-400 rounded-lg" onChange={(e)=>setAnswer(e.target.value)} onClick={()=>{setWarning(false);setDuplicateWarning(false)}} ></textarea>
                    </div>

                    <div>
                        <span className="mb-5 text-lg text-emerald-400">OR</span>
                        <div className="border-2 flex justify-center items-center mt-4">
                            <input key={inputKey} type="file" name="image"  className="text-white" onChange={(e)=>setMyFile(e.target.files[0])}onClick={()=>setDuplicateWarning(false)}></input>
                        </div>
                    </div>
                    
                    <div className="flex space-x-6 pt-9">
                        <button type="submit" className="text-lg text-white bg-orange-700 px-4 py-1 rounded-lg active:scale-95">submit</button>
                        <button type="button" className="text-lg text-white bg-red-700 px-4 py-1 rounded-lg active:scale-95" onClick={Cleardata}>clear</button>
                    </div>

                    
                </div>
              </form>
  
            </div>
        </main>
    )
}