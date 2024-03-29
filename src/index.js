import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Appnew from './Components/Appnew';
// import Appme from './Components/Appme';
import Appweather from './Components/Appweather';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
// axios.defaults.baseURL ="https://jsonplaceholder.typicode.com/";
// axios.defaults.headers.common["AUTHORIZATION"] ="AUTH_TOKEN";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Appnew /> */}
   {/* <Appme />  */}
   <BrowserRouter>
        {/* <Appme/> */}
        <Appweather />
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
