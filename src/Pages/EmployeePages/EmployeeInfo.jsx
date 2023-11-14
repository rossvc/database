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
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { getAllEmployeeInfo, getOneEmployeeInfo } from '../../backend/Employee.api';
import '../../styles/EmployeePageStyles.css'


export default function EmployeeInfo() {

var employeedata = Object.values(JSON.parse(sessionStorage.getItem("currentUser")));
    
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
            <Divider />
            <nav aria-label="Employee Functions">
              <List>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <LocalShippingIcon fontSize='large' />
                  </ListItemIcon>
                  <ListItemButton href='/employeesuppliers' sx={{ borderRadius: "6px" }}>
                    <ListItemText primary="Suppliers" secondary="view, edit, add" />
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

              <Box sx={{ float:'left', minWidth: "13%", maxWidth: "13%"}}>
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Employee ID:</Typography> <br />
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>First Name:</Typography> <br />
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Last Name:</Typography> <br />   
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Phone Number:</Typography> <br />   
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Wage:</Typography> <br />     
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Date Hired:</Typography> <br />       
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Position:</Typography> <br />       
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Email:</Typography> <br />       
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Username:</Typography> <br />       
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Password:</Typography> <br />       
                <Typography lineHeight={2.9} sx={{display:"inline", paddingBottom: "2px", fontSize:"20px"}}>Admin Status:</Typography> <br />          
              </Box>

              <Box sx={{ float:'right', minWidth: "87%", maxWidth: "87%", marginRight: "0px"}}>
              <TextField
                defaultValue={employeedata[0]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }, fontSize: "40px"}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[1]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[2]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[3]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[4]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[5]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[6]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[7]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[8]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[9]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
              />
              <TextField
                defaultValue={employeedata[10]}
                sx={{ paddingLeft:"10pt", paddingBottom: "2px", "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }, "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "black" }}}
                fullWidth
                disabled
                variant='standard'
                inputProps={{style: {fontSize: "20px", height: "47px", marginBottom: "-15px", paddingBottom: "20px"}}} // font size of input text
                
              />
               </Box>

               
              
            </Box>

          </Box>
        </Box>
      </main>
    )

}