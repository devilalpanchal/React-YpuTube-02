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
import PreviousState from './PreviousState';
import PreviousProps from './PreviousProps';
import StateWithObject from './StateWithObject';
import HelloContext from './ContextAPIComponent/helloContext';
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
    <PreviousState/>
    <PreviousProps/>
    <StateWithObject/>
    <HelloContext/>
  </React.StrictMode>
);

reportWebVitals();
