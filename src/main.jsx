// import { StrictMode } from 'react'
// import { ReactDOM } from 'react-dom/client'
// import {BrowserRouter} from 'react-router-dom';
// import './index.css'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//   </StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);