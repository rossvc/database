import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ShopIcon from '@mui/icons-material/Shop';
import TextField from '@mui/material/TextField'
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { getAllEmployeeInfo, getOneEmployeeInfo } from '../../backend/Employee.api';
import '../../styles/EmployeePageStyles.css'

export default function EmployeeInfo() {

    const employeecolumns = [
        { field: 'EmployeeID', headerName: 'ID', flex: 1 },
        {
          field: 'FirstName',
          headerName: 'First Name',
          flex: 1,
          editable: false,
        },
        {
          field: 'LastName',
          headerName: 'Last Name',
          flex: 1,
          editable: false,
        },
        {
          field: 'PhoneNumber',
          headerName: 'Phone Number',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'Wage',
          headerName: 'Wage',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'DateHired',
          headerName: 'Date Hired',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'Position',
          headerName: 'Position',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'Email',
          headerName: 'Email',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'Username',
          headerName: 'Username',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'Password',
          headerName: 'Password',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'isAdmin',
          headerName: 'Admin?',
          flex: 1,
          type: 'number',
          editable: false,
        }
    ];

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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderBottom: 1 ,borderLeft: 1, borderColor: 'primary' }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="salmon"
              gutterBottom
              overflow={false}
            >
              Employee Information
            </Typography>

            <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="Black"
                gutterBottom
                overflow={false}
              >
                View Employee Information
              </Typography>

              
            </Box>

          </Box>
        </Box>
      </main>
    )

}