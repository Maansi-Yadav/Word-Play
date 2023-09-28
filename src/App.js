
import logo from './logo.svg';
import Navbar from './componentss/Navbar';
import About from './componentss/About';
import './App.css';
import TextForm from './componentss/TextForm';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Alert from  './componentss/Alert'; 
import { useState } from 'react';
// const name= "mansi"
function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route exact path="/TextForm" element={<TextForm/>}/>
      <Route exact path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter> */}
    
     <Navbar title="Word play" homee="Home"  />
    <TextForm head="Enter your Text"/>
    <About/>
    
    </>
  );
}

export default App;
