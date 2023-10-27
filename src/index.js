import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const TOKEN_KEY = 'jwt';

// export const login = () => {
//     localStorage.setItem(TOKEN_KEY, 'TestLogin');
// }

// export const logout = () => {
//     localStorage.removeItem(TOKEN_KEY);
// }

// export const isLogin = () => {
//     if (localStorage.getItem(TOKEN_KEY)) {
//         return true;
//     }

//     return false;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

