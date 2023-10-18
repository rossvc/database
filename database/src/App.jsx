import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import FrontPage from './Pages/FrontPage';
import Admission from './Pages/Admission';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
