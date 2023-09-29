
//import './App.css';
import React from 'react'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Boxs from './Components/Boxs'
import Logo from './Components/Logo'
 import Logo2 from './Components/Logo2'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import{useState} from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<div> <Login/> <Boxs/> <Logo/> <Logo2/></div> }/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// import React from 'react';
// import Login from './Pages/Login';
// import Boxs from './Components/Boxs';
// import Logo from './Components/Logo';
// import Logo2 from './Components/Logo2';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import {useState } from 'react';
// const App = () => {
//   return (
//     <div className="App">
//       <Login/>
//       <Boxs/>
//       <Logo/>
//       <Logo2/>
//       </div>
//   )
// }

// export default App;
