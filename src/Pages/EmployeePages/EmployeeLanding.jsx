import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ShopIcon from '@mui/icons-material/Shop';
import '../../styles/EmployeePageStyles.css'


//this is the page where the employees land and can access the different functions that they are allowed to modify the database with
export default function EmployeeLanding() {
    return (
      <main>
        <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}>
          <Box sx={{ width: '15%', height: '100%', paddingTop: 8, bgcolor: 'background.paper', float: 'left', borderBottom: 1, borderColor: "primary", position: "sticky", top: 0 }}>
            <nav aria-label="Employee Functions">
              <List sx={{ width: "100%", height: "100%", bgcolor: 'background.paper' }}>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <AccountCircleIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemButton href='/employeeinfo' sx={{ borderRadius: "6px" }}>
                    <ListItemText primary="Employee Information" secondary="view, edit" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="Employee Functions">
              <List>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <ArtTrackIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemButton href='/employeeartworks' sx={{ borderRadius: "6px" }}>
                    <ListItemText primary="Artworks" secondary="view, edit, add" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="Employee Functions">
              <List>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <ArtTrackIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemButton href='/employeeartcollections' sx={{ borderRadius: "6px" }}>
                    <ListItemText primary="Art Collections" secondary="view, edit" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="Employee Functions">
              <List>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <ArtTrackIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemButton href='/employeeexhibitions' sx={{ borderRadius: "6px" }}>
                    <ListItemText primary="Exhibitions" secondary="view, edit" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="Employee Functions">
              <List>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <ShopIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemButton href='/employeegiftshop' sx={{ borderRadius: "6px" }}>
                    <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, marginBottom: 30, paddingTop: 10, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary' }}>
          </Box>

        </Box>
      </main>
    );
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}