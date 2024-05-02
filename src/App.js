import './App.css';
import React from 'react';
import Home from './Home';
import File from './File';
import Navbar from './Navbar';
import Page404 from './Page404';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// Remember Switch OR exact Keyword in react-Route
function App() {
  return (
    <div className="App">
      <h1>Routes</h1>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/file' element={<File />} />
          <Route path='/' element={<Navbar />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
