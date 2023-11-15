import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FrontPage from "./Pages/FrontPage";
import Reports from "./Pages/EmployeePages/Reports";
import Admission from "./Pages/Admission";
import GiftShop from "./Pages/GiftShop";
import Admin from "./Pages/Admin";
import Manageemployee from "./Pages/EmployeePages/Manageemployee";
import Exhibition from "./Pages/Exhibition";
import Artworks from "./Pages/Artworks";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import DefaultAppBar from "./Components/DefaultAppBar";
import NotFound from "./Pages/NotFound";
import NotAuthorized from "./Pages/NotAuthorized";
import EmployeeLanding from "./Pages/EmployeePages/EmployeeLanding";
import EmployeeInfo from "./Pages/EmployeePages/EmployeeInfo";
import EmployeeArtworks from "./Pages/EmployeePages/EmployeeArtworks";
import EmployeeArtCollections from "./Pages/EmployeePages/EmployeeArtCollections";
import EmployeeExhibitions from "./Pages/EmployeePages/EmployeeExhibitions";
import EmployeeGiftShop from "./Pages/EmployeePages/EmployeeGiftShop";
import EmployeeSuppliers from "./Pages/EmployeePages/EmployeeSuppliers";
import CustomerReciptSearch from './Pages/CustomerReceiptSearch';
//This is app, this shows the website, in order for the website to be viewed you must include it in this file

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF5733", // Set your desired orange color
      },
    },
    overrides: {
      MuiButton: {
        contained: {
          color: "#FF5733", // Text color
          backgroundColor: "#FFFFFF", // Button background color
          "&:hover": {
            backgroundColor: "#FF5733", // Button background color on hover
            "@media (hover: none)": {
              backgroundColor: "#FFFFFF", // Reset on touch devices
            },
          },
        },
      },
    },
  });

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("currentUser"))
  );
  const [loggedIn, setLoggedIn] = useState(user != null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      const employeeData = Object.values(user);
      setIsAdmin(employeeData[employeeData.length - 1] === 1);
    }
  }, [loggedIn, user]);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("currentUser");
    setUser({});
    setLoggedIn(false);
    setIsAdmin(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setUser(JSON.parse(sessionStorage.getItem("currentUser")));
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DefaultAppBar
          onLogin={openLoginModal}
          onLogOut={handleLogOut}
          isLoggedIn={loggedIn}
          isAdmin={isAdmin}
        />
        <Login
          open={isLoginModalOpen}
          onClose={closeLoginModal}
          setLoggedIn={handleLogin}
        />
        <Router>
          <Routes>
            {/* TODO: Add user auth in element sections */}
            <Route path="/" element={<FrontPage />} />
            <Route
              path="/reports"
              element={loggedIn && isAdmin ? <Reports /> : <NotAuthorized />}
            />
            <Route
              path="/manageemployee"
              element={
                loggedIn && isAdmin ? <Manageemployee /> : <NotAuthorized />
              }
            />
            <Route
              path="/admin"
              element={loggedIn && isAdmin ? <Admin /> : <NotAuthorized />}
            />
            <Route path="/admission" element={<Admission />} />
            <Route path="/giftshop" element={<GiftShop />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/receipts" element={<CustomerReciptSearch />} />
            <Route
              path="/employeelanding"
              element={loggedIn ? <EmployeeLanding /> : <NotAuthorized />}
            />
            <Route
              path="/employeeinfo"
              element={loggedIn ? <EmployeeInfo /> : <NotAuthorized />}
            ></Route>
            <Route
              path="/employeeartworks"
              element={loggedIn ? <EmployeeArtworks /> : <NotAuthorized />}
            ></Route>
            <Route
              path="/employeeartcollections"
              element={
                loggedIn ? <EmployeeArtCollections /> : <NotAuthorized />
              }
            ></Route>
            <Route
              path="/employeeexhibitions"
              element={loggedIn ? <EmployeeExhibitions /> : <NotAuthorized />}
            ></Route>
            <Route
              path="/employeegiftshop"
              element={loggedIn ? <EmployeeGiftShop /> : <NotAuthorized />}
            ></Route>
            <Route
              path="/employeesuppliers"
              element={loggedIn ? <EmployeeSuppliers /> : <NotAuthorized />}
            ></Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
