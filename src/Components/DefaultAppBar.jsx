import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// This is the app/nav bar the public can view, for all customers

export default function DefaultAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
        <Button
        href="/"
        sx={{
          '&:hover': {
            backgroundColor: 'inherit',
          },
          'color': "white",
        }}>
          <Typography variant="h6" component="div" sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Museum of Fine Arts Houston
          </Typography></Button>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{
            flexGrow: 0,
          }}>
            <Button href="/admission" color="inherit">Admission</Button>
            <Button href="/giftshop" color="inherit">Gift Shop</Button>
            <Button color="inherit">Link 3</Button>
            <Button color="inherit">Link 4</Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={props.onLogin} // TODO: add login logic
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 191, 255, 0.3)',
                },
              }}
            >
              Employee Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}