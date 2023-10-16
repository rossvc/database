import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import FrontPage from './Pages/FrontPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
