import './App.css';
import React from 'react'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Feed from "./Pages/Feed"
import Privateroute from './Components/Privateroute'
import PublicRoute from './Components/PublicRoute'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  //const isAuthenticated = localStorage.getItem('authToken') ? true : false
 
  

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
            path="/login"
            element={<PublicRoute element={<Login />}   />}
          />
          <Route
            path="/signup"
            element={<PublicRoute element={<Signup />}   />}
          /> 
        <Route
            path="/"
            element={<Privateroute element={<Feed />}  />}

          />
          <Route
            path="/home"
            element={<Privateroute element={<Home />}  />}
            
          />
           </Routes>
      </Router>
    </div>
  );
}
export default App;


