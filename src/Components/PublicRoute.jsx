import React from 'react';
import {  Navigate } from 'react-router-dom';

const PublicRoute = ({ element,}) => {
  // console.log("AAAA", localStorage.getItem('authToken'))
  // console.log("isAuthenticated in PublicRoute:", isAuthenticated); // Debugging line
  const isAuthenticated = localStorage.getItem('authToken') ? true : false
 return isAuthenticated ? (
    <Navigate to = "/" replace/>
  ) : (
   element 
  );
};

export default PublicRoute;
