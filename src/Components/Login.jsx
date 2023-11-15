import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { loginRequest } from '../backend/Login.api';
import { customerLogin, customerRegistration } from '../backend/Customer.api';

// This function takes in props and updates them based on user input

const LoginModal = ({ open, onClose, setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [loginState, setLoginState] = useState('employee'); // employee, customer

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');

  const handleCustomerRegistration = async () => {
    const registerInfo = {
      FirstName: first,
      LastName: last,
      Email: username,
      PhoneNumber: phone,
      Password: password
    };
    console.log(registerInfo);
    const response = await customerRegistration(registerInfo);
    console.log(response);

    if (response) {
      setLoginState('success');
      setLoginError(false);
    } else {
      setLoginError(true);
    }

  };

  const handleCustomerLogin = async () => {
    const logininfo = {
      Email: username,
      Password: password
    };
    try {
      const response = await customerLogin(logininfo);

      if (response != null) {
        sessionStorage.setItem("currentUser", JSON.stringify(response[0]));
        setLoginError(false);
        setLoggedIn();
        onClose();
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error('Login request error:', error);
      setLoginError(true);
    }
  };


  const handleEmployeeLogin = async () => {
    const logininfo = {
      Username: username,
      Password: password
    };
  
    try {
      const response = await loginRequest(logininfo);
      // console.log(response[0]);
  
      if (response != null) {
        sessionStorage.setItem("currentUser", JSON.stringify(response[0]));
        setLoginError(false);
        setLoggedIn();
        onClose();
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error('Login request error:', error);
      setLoginError(true);
    }
  };

  if(loginState === 'employee'){
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          Employee Login
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography style={{ display: loginError ? 'block' : 'none' }} component="h6" color="red">
            Invalid login credentials, try again
          </Typography>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button color="primary" onClick={() => setLoginState('customer')}>
            Click here for Customer login
          </Button> <br/><br/>
          <Button  variant="contained" color="primary" onClick={handleEmployeeLogin}>
            Login
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
  if (loginState === 'customer'){
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          Customer Login
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography style={{ display: loginError ? 'block' : 'none' }} component="h6" color="red">
            Invalid login credentials, try again
          </Typography>
          <TextField
            label="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button color="primary" onClick={() => setLoginState('employee')}>
            Click here for Employee login
          </Button> 
          <Button color="primary" onClick={() => setLoginState('registration')}>
            Click here to register
          </Button> <br/><br/>
          <Button  variant="contained" color="primary" onClick={handleCustomerLogin}>
            Login
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
  if (loginState === 'registration'){
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          Customer Registration
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography style={{ display: loginError ? 'block' : 'none' }} component="h6" color="red">
            Invalid credentials or user already exist, try again
          </Typography>
          <TextField
            label="First Name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button color="primary" onClick={() => setLoginState('customer')}>
            Click here for login
          </Button> <br/><br/>
          <Button  variant="contained" color="primary" onClick={handleCustomerRegistration}>
            Register
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
  if (loginState === 'success'){
    return(
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          You successfully registered!
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Button color="primary" onClick={() => setLoginState('customer')}>
            Click here to login
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
};

export default LoginModal;
