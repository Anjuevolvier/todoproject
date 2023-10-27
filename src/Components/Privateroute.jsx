//PrivateRoute.js
import React from 'react';
import {  Navigate } from 'react-router-dom';

const Privateroute = ({ element, }) => {
  const isAuthenticated = localStorage.getItem('authToken') ? true : false
  

  console.log('auth:',isAuthenticated);
  return isAuthenticated  ? (
   element
  ) : (
    <Navigate to = "/login" replace />
  );
};

export default Privateroute;

