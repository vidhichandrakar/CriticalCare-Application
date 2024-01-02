import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from './Components/DashboardComponents/DashboardRouter/history';
import DashboardRouter from './Components/DashboardComponents/DashboardRouter/DashboardRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <DashboardRouter history={history}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

