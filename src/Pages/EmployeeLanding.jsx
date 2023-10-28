import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ShopIcon from '@mui/icons-material/Shop';


//this is the page where the employees can access the different functions that they are allowed to modify the database with

export default function EmployeeLanding() {

    const [state, setState] = useState("employeelanding"); // handles what view we have, employeeLanding, employeeInfo, employeeArtworks, employeeArtcollections, employeeExhibitions, employeeGiftShop

    const onClickEmployeeInfo = async () => {
        setState("employeeInfo");
    };

    const onClickEmployeeArtworks = async () => {
        setState("employeeArtworks");
    };

    const OnClickEmployeeArtcollections = async () => {
        setState("employeeArtcollections");
    };

    const OnClickEmployeeExhibitions = async () => {
        setState("employeeExhibitions");
    };

    const OnClickEmployeeGiftShop = async () => {
        setState("employeeGiftShop");
    };

    if (state === "employeelanding") {
    return (
        <main>
        <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%"}}>
        <Box sx={{ width: '15%', height: '100%', paddingTop: 8, bgcolor: 'background.paper', float: 'left', borderBottom: 1, borderColor: "primary"}}>
          <nav aria-label="Employee Functions">
            <List sx={{width: "100%", height: "100%", bgcolor: 'background.paper'}}>
              <ListItem disablePadding alignItems="flex-start">
                <ListItemIcon>
                    <AccountCircleIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemButton onClick={onClickEmployeeInfo} sx={{ borderRadius: "6px" }}>
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
                <ListItemButton onClick={onClickEmployeeArtworks} sx={{ borderRadius: "6px" }}>
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
                    <ArtTrackIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemButton onClick={OnClickEmployeeArtcollections} sx={{ borderRadius: "6px"}}>
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
                    <ArtTrackIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemButton onClick={OnClickEmployeeExhibitions} sx={{ borderRadius: "6px"}}>
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
                <ListItemButton onClick={OnClickEmployeeGiftShop} sx={{ borderRadius: "6px"}}>
                  <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>

        <Box sx={{ width: '85%', height: "100%", minHeight: 429, marginBottom: 30, paddingTop: 10, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary'}}>
        </Box>

        </Box>
        </main>
        );
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (state === "employeeInfo") {
        return (
            <main>
            <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%", borderBottom: 1 }}>
            <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0"}}>
              <nav aria-label="Employee Functions">
                <List sx={{width: "100%", height: "100%", bgcolor: 'background.paper'}}>
                  <ListItem disablePadding alignItems="flex-start">
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={onClickEmployeeInfo} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={onClickEmployeeArtworks} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeArtcollections} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeExhibitions} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={OnClickEmployeeGiftShop} sx={{ borderRadius: "6px" }}>
                      <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
            
            <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 14, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary'}}>
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
          
            </Box>
            </Box>
            </main>
        );
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (state === "employeeArtworks") {
        return (
            <main>
            <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%", borderBottom: 1 }}>
            <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0"}}>
              <nav aria-label="Employee Functions">
                <List sx={{width: "100%", height: "100%", bgcolor: 'background.paper'}}>
                  <ListItem disablePadding alignItems="flex-start">
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={onClickEmployeeInfo} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={onClickEmployeeArtworks} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeArtcollections} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeExhibitions} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={OnClickEmployeeGiftShop} sx={{ borderRadius: "6px" }}>
                      <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
            
            <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 14, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary'}}>
            <Typography
            component="h1"
            variant="h2"
            align="center"
            color="salmon"
            gutterBottom
            overflow={false}
          >
            Artworks
            </Typography>
          
            </Box>
            </Box>
            </main>
        );
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (state === "employeeArtcollections") {
        return (
            <main>
            <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%", borderBottom: 1 }}>
            <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0"}}>
              <nav aria-label="Employee Functions">
                <List sx={{width: "100%", height: "100%", bgcolor: 'background.paper'}}>
                  <ListItem disablePadding alignItems="flex-start">
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={onClickEmployeeInfo} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={onClickEmployeeArtworks} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeArtcollections} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeExhibitions} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={OnClickEmployeeGiftShop} sx={{ borderRadius: "6px" }}>
                      <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
            
            <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 14, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary'}}>
            <Typography
            component="h1"
            variant="h2"
            align="center"
            color="salmon"
            gutterBottom
            overflow={false}
          >
            Artwork Collections
            </Typography>
          
            </Box>
            </Box>
            </main>
        );
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (state === "employeeExhibitions") {
        return (
            <main>
            <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%", borderBottom: 1 }}>
            <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0"}}>
              <nav aria-label="Employee Functions">
                <List sx={{width: "100%", height: "100%", bgcolor: 'background.paper'}}>
                  <ListItem disablePadding alignItems="flex-start">
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={onClickEmployeeInfo} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={onClickEmployeeArtworks} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeArtcollections} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeExhibitions} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={OnClickEmployeeGiftShop} sx={{ borderRadius: "6px" }}>
                      <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
            
            <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 14, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary'}}>
            <Typography
            component="h1"
            variant="h2"
            align="center"
            color="salmon"
            gutterBottom
            overflow={false}
          >
            Exhibitions
            </Typography>
          
            </Box>
            </Box>
            </main>
        );
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (state === "employeeGiftShop") {
        return (
            <main>
            <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%", borderBottom: 1 }}>
            <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0"}}>
              <nav aria-label="Employee Functions">
                <List sx={{width: "100%", height: "100%", bgcolor: 'background.paper'}}>
                  <ListItem disablePadding alignItems="flex-start">
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={onClickEmployeeInfo} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={onClickEmployeeArtworks} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeArtcollections} sx={{ borderRadius: "6px" }}>
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
                        <ArtTrackIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemButton onClick={OnClickEmployeeExhibitions} sx={{ borderRadius: "6px" }}>
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
                    <ListItemButton onClick={OnClickEmployeeGiftShop} sx={{ borderRadius: "6px" }}>
                      <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
            
            <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 14, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary'}}>
            <Typography
            component="h1"
            variant="h2"
            align="center"
            color="salmon"
            gutterBottom
            overflow={false}
          >
            Gift Shop Inventory
            </Typography>
          
            </Box>
            </Box>
            </main>
        );
    }


}