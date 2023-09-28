
import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText]= useState("yha likho tetxt")
    const upperC=()=>{
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const lowerC=()=>{
        let newtext= text.toLowerCase();
        setText(newtext)
    }
    const cleart=()=>{
        let newtext= ' ';
        setText(newtext)
    }
    const spaces=()=>{
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "))

    }
    // const initC=(text)=>{
    //     const a= text.split(" ")
    //     let newtext= a.map(a=>{
    //         return a.charAt(0).toUpperCase()+ a.slice(1)})
    //         return newtext.join(" ")
    //     setText(newtext)
    // }
    const handleOnChange=(event)=>{
        setText(event.target.value)
       
    }
  return (
    <>
    <div>
      
      <div className="container" >
        <div className="container">
            <h1>{props.head}</h1>
        </div>
<div className="mb-3" >
<label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
</div>   
    </div>
    <div className="container">
    <button className="btn btn-primary" onClick={upperC} >Convert into uppercase</button>
   <button className="btn btn-primary mx-3" onClick={lowerC} >Convert into lowercase</button>
   <button className="btn btn-primary mx-3" onClick={cleart} >Clear text</button>
   <button className="btn btn-primary mx-3" onClick={spaces} >Delete extra spaces</button>

   {/* <button className="btn btn-primary mx-3" onClick={initC} >Initials capital</button> */}
    </div>
    <div className="container">
        <div className="summary my-3"> <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2> Preveiw</h2>
        <p>{text}</p>
        </div>
        
    </div>
    </>
  )
}
{/* <BrowserRouter>
    <Routes>
      <Route exact path="/TextForm" element={<TextForm/>}/>
      <Route exact path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter> */}
    // import { BrowserRouter,Route, Routes } from 'react-router-dom';