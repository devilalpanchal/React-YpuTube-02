import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DyanamicRoute from './DyanamicRouting/DyanamicRoute';
import APICall from './APICall';
import TextGenerator from './TextGenerator';
import PostMethodAPI from './PostMethodAPI';
import MapFucn from './DeleteMethodAPI';
import PreFilledForm from './PreFilledForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DyanamicRoute/>
    <APICall/>
    <TextGenerator/>
    <PostMethodAPI/>
    <MapFucn/>
    <PreFilledForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
