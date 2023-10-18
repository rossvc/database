import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function DefaultAppBar() {
  let theme = createTheme({  });
  theme = createTheme(theme, {
    palette: {
      salmon: theme.palette.augmentColor({
        color: {
          main: '#FF5733',
        },
        name: 'salmon',
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color='salmon'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              Houston Museum of Fine Arts
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button href="/admission" color="inherit">Admission</Button>
              <Button color="inherit">Link 2</Button>
              <Button color="inherit">Link 3</Button>
              <Button color="inherit">Link 4</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}