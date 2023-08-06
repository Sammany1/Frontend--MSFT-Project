import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChartExample from "./chart.js"

import App from './App';


import Login from "./login.js"
import Card from "./card.js"
import Market from "./MM.js"
import Timer2 from "./MM.js"
import Leaderboard from "./MM.js"
import Card2 from "./MM.js"

import {BrowserRouter,  Routes ,Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    {/* <App/> */}
    <Route path='/' element={<App /> }></Route>
    <Route path='/games' element={<Card/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
