import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { loginRequest } from '../backend/Login.api';

// This function takes in props and updates them based on user input

const LoginModal = ({ open, onClose, setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    const logininfo = {
      Username: username,
      Password: password
    };
  
    try {
      const response = await loginRequest(logininfo);
      //console.log(response);
  
      if (response != null) {
        sessionStorage.setItem("currentUser", JSON.stringify(response[0]));
        //console.log(Object.values(JSON.parse(sessionStorage.getItem("currentUser"))));
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

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Login
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
        <Button  variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
