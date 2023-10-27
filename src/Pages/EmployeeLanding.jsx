import * as React from 'react';
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
    return (
        <Box sx={{ width: '100%', height: '100%', paddingTop: '3.5%', maxWidth: 250, minHeight: 650, bgcolor: 'background.paper' }}>
          <nav aria-label="Employee Functions">
            <List>
              <ListItem disablePadding alignItems="flex-start">
                <ListItemIcon>
                    <AccountCircleIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemButton>
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
                    <ArtTrackIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemButton>
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
                <ListItemButton>
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
                <ListItemButton>
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
                <ListItemButton>
                  <ListItemText primary="Gift Shop Inventory" secondary="view, edit, add" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
        </Box>
      );
}