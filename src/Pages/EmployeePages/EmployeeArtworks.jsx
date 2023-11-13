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
import '../../styles/EmployeePageStyles.css'
import { getAllArtworks } from '../../backend/Artworks.api';

var artworkrow = await getAllArtworks();

export default function EmployeeArtworks() {



  const artworkcolumns = [
    { field: 'ArtworkID', headerName: 'Artwork ID', width: 200 },
    {
      field: 'ArtistID',
      headerName: 'Artist ID',
      flex: 1,
      editable: false,
    },
    {
      field: 'Title',
      headerName: 'Title',
      flex: 1,
      editable: false,
    },
    {
      field: 'ArtworkLocation',
      headerName: 'ArtworkLocation',
      type: 'number',
      flex: 1,
      editable: false,
    },
    {
      field: 'Description',
      headerName: 'Description',
      flex: 1,
      editable: false,
    },
    {
      field: 'CollectionID',
      headerName: 'Collection ID',
      flex: 1,
      editable: false,
    },
    {
      field: 'ExhibitionID',
      headerName: 'Exhibition ID',
      flex: 1,
      editable: false,
    },
    {
      field: 'Medium',
      headerName: 'Medium',
      flex: 1,
      editable: false,
    },
    {
      field: 'Dimensions',
      headerName: 'Dimensions',
      flex: 1,
      editable: false,
    },
    {
      field: 'Style',
      headerName: 'Style',
      flex: 1,
      editable: false,
    },
    {
      field: 'SuppliedBy',
      headerName: 'Supplied By',
      flex: 1,
      editable: false,
    },
    {
      field: 'AcquisitionDate',
      headerName: 'Acquisition Date',
      flex: 1,
      editable: false,
    },
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
  
            <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderBottom: 1, borderLeft: 1, borderColor: 'primary' }}>
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
  
              <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2, paddingBottom: 2 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  color="Black"
                  gutterBottom
                  overflow={false}
                >
                  Add Artwork
                </Typography>
                <TextField
                  id="artTitle"
                  label="Artwork Title"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="Artist"
                  label="Artist"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  required
                  id="artLocation"
                  label="Artwork Location"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artMedium"
                  label="Artwork Medium"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artDimensions"
                  label="Artwork Dimensions (L,W,H)"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artStyle"
                  label="Artwork Style"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  required
                  id="artSupplier"
                  label="Artwork Supplier"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  required
                  id="artDateAcquired"
                  label="Acquisition Date"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
  
                <TextField
                  required
                  id="artDescription"
                  label="Artwork Description"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                  fullWidth
                />
  
                <Button variant="outlined" color="primary" sx={{ marginTop: 1, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
                  Add
                </Button>
              </Box>
  
              <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  color="Black"
                  gutterBottom
                  overflow={false}
                >
                  Update Artwork
                </Typography>
  
                <TextField
                  required
                  id="artUpdateID"
                  label="Artwork ID"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 3 }}
                />
                <br />
                <TextField
                  id="artUpdateTitle"
                  label="Artwork Title"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artUpdateArtist"
                  label="Artist"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artUpdateLocation"
                  label="Artwork Location"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artUpdateMedium"
                  label="Artwork Medium"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artUpdateDimensions"
                  label="Artwork Dimensions (L,W,H)"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artUpdateStyle"
                  label="Artwork Style"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artUpdateSupplier"
                  label="Artwork Supplier"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  id="artUpdateDateAcquired"
                  label="Acquisition Date"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  fullWidth
                  id="artUpdateDescription"
                  label="Artwork Description"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
  
                <Button variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
                  Update
                </Button>
  
  
              </Box>
  
              <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  color="Black"
                  gutterBottom
                  overflow={false}
                >
                  Add Artwork to Art Collection
                </Typography>
  
                <TextField
                  required
                  id="artAddToCollectionID"
                  label="Artwork ID"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  required
                  id="collectionAddToID"
                  label="Art Collection ID"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <br />
                <Button variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
                  Add
                </Button>
  
              </Box>
  
              <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  color="Black"
                  gutterBottom
                  overflow={false}
                >
                  Add Artwork to Exhibition
                </Typography>
  
                <TextField
                  required
                  id="artAddToExhibitionID"
                  label="Artwork ID"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <TextField
                  required
                  id="exhibitionAddToID"
                  label="Exhibition ID"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                />
                <br />
                <Button variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
                  Add
                </Button>
  
              </Box>
  
              <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  align="left"
                  color="Black"
                  gutterBottom
                  overflow={false}
                >
                  View All Artworks
                </Typography>

                <DataGrid
              rows={artworkrow}
              getRowId={(artworkrow) => artworkrow.ArtworkID}
              columns={artworkcolumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              disableRowSelectionOnClick
              getRowHeight={() => 'auto'}
              sx={{
                [`& .${gridClasses.cell}`]: {
                  py: 1,
                },
              }}> 
              </DataGrid>

              </Box>
  
            </Box>
          </Box>
        </main>
      );
}