import './App.css';
import React from 'react';
import Home from './Home';
import File from './File';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <h1>Routes</h1>
     <Router>
      <Routes>
        <Route path='/home' element={<Home/>}  />
        <Route path='/file' element={<File/>}  />
        <Route path='/' element={ <Navbar/>}  />
       
      </Routes>
     </Router>
    </div>
  );
}

export default App;
