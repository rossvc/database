import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FrontPage from './Pages/FrontPage';
import Admission from './Pages/Admission';
import GiftShop from './Pages/GiftShop';
import Login from './Components/Login';
import Footer from './Components/Footer';
import DefaultAppBar from './Components/DefaultAppBar';
import NotFound from './Pages/NotFound';

//This is app, this shows the website, in order for the website to be viewed you must include it in this file

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FF5733', // Set your desired orange color
      },
    },
    overrides: {
      MuiButton: {
        contained: {
          color: '#FF5733', // Text color
          backgroundColor: '#FFFFFF', // Button background color
          '&:hover': {
            backgroundColor: '#FF5733', // Button background color on hover
            '@media (hover: none)': {
              backgroundColor: '#FFFFFF', // Reset on touch devices
            },
          },
        },
      },
    },
  });

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleLogin = async (username, password) => {
    // Add login in logic
  };
  

  //Here we store user info, handle log in and log out logic
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DefaultAppBar
          onLogin={openLoginModal}
        />
        <Login
          open={isLoginModalOpen}
          onClose={closeLoginModal}
          onLogin={handleLogin}
        />
          <Router>
            <Routes> {/*TODO: Add user auth in element sections*/}
              <Route path="/" element={<FrontPage />} /> 
              <Route path="/admission" element={<Admission />} />
              <Route path="/giftshop" element={<GiftShop />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
