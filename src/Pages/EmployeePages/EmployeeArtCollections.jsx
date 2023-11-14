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
import Alert from '@mui/material/Alert';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
import '../../styles/EmployeePageStyles.css'
import { getAllArtCollections, addArtCollection } from '../../backend/ArtCollections.api';

//rows for displaying giftshop table
var artcollectionrow = await getAllArtCollections();  

export default function EmployeeArtCollections() {
    const [showAlert1, setShowAlert1] = React.useState(false);
    const [errorMessage1, setErrorMessage1] = React.useState("");
    //hooks for adding art collections
    const [ACAddName, setACAddName] = useState('');
    const [ACAddLocation, setACAddLocation] = useState('');
    const [ACAddStart, setACAddStart] = useState('');
    const [ACAddEnd, setACAddEnd] = useState('');
    const [ACAddIncluded, setACAddIncluded] = useState('');
    const [ACAddSupplier, setACAddSupplier] = useState('');
    const [ACAddArchived, setACAddArchived] = useState('');
    
    const handleSetACAddName = (event) => {
    setACAddName(event.target.value);
    }
    const handleSetACAddLocation = (event) => {
    setACAddLocation(event.target.value);
    }
    const handleSetACAddStart = (event) => {
    setACAddStart(event.target.value);
    }
    const handleSetACAddEnd= (event) => {
    setACAddEnd(event.target.value);
    }
    const handleSetACAddIncluded = (event) => {
    setACAddIncluded(event.target.value);
    }
    const handleSetACAddSupplier = (event) => {
    setACAddSupplier(event.target.value);
    }
    const handleSetACAddArchived = (event) => {
    setACAddArchived(event.target.value);
    }
    //add art collection button click
    const onClickAddArtCollection = async () => {
      var truth1, truth2, truth3, truth4, truth5, truth6, truth7;
    
      if (ACAddName === 'NULL' || ACAddName === 'null' || ACAddName === "") {truth1 = null} else {truth1 = ACAddName}
      if (ACAddSupplier === 'NULL' || ACAddSupplier === 'null' || ACAddSupplier === "") {truth2 = null} else {truth2 =Number(ACAddSupplier)}
      if (ACAddStart === 'NULL' || ACAddStart === 'null' || ACAddStart === "") {truth3 = null} else {truth3 = ACAddStart}
      if (ACAddEnd === 'NULL' || ACAddEnd === 'null' || ACAddEnd === "") {truth4 = null} else {truth4 = ACAddEnd}
      if (ACAddLocation === 'NULL' || ACAddLocation === 'null' || ACAddLocation === "") {truth5 = null} else {truth5 = ACAddLocation }
      if (ACAddIncluded === 'NULL' || ACAddIncluded === 'null' || ACAddIncluded === "") {truth6 = null} else {truth6 = Number(ACAddIncluded)}
      if (ACAddArchived === 'false' || ACAddArchived === 'no' || ACAddArchived === "") {truth7 = false} else if (ACAddArchived === 'Yes' || ACAddArchived === 'yes') {truth7 = true}
      try {
        const newCollection = {
          CollectionName: truth1,
          Location: truth5,
          StartDate: truth3.toISOString().slice(0, 10),
          EndDate: truth4.toISOString().slice(0, 10),
          ArtworksIncluded: truth6,
          SuppliedBy: truth2,
          isArchived: truth7
        }
        await addArtCollection(newCollection);
        setShowAlert1(false);
        setErrorMessage1('');
      } catch (error) {
        setErrorMessage1("Input error, please fix!");
        setShowAlert1(true);
      }
    
    }

    const artcollectioncolumns = [
        { field: 'CollectionID', headerName: 'ID', flex: 1 },
        {
          field: 'CollectionName',
          headerName: 'Name',
          flex: 1,
          editable: false,
        },
        {
          field: 'Location',
          headerName: 'Location',
          flex: 1,
          editable: false,
        },
        {
          field: 'StartDate',
          headerName: 'Start Date',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'EndDate',
          headerName: 'End Date',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'ArtworksIncluded',
          headerName: 'Artworks Included',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'SuppliedBy',
          headerName: 'Supplier ID',
          flex: 1,
          type: 'number',
          editable: false,
        },
        {
          field: 'isArchived',
          headerName: 'Archived?',
          flex: 1,
          type: 'number',
          editable: false,
        },
      ];

return (
    <main>
                <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}>
          <Box sx={{ width: '15%', height: '100%', paddingTop: 8, bgcolor: 'background.paper', float: 'left', borderBottom: 1, borderColor: "primary", position: "sticky" }}>
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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderBottom: 1, borderLeft: 1, borderColor: 'primary', top: 0 }}>
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

            <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="Black"
                gutterBottom
                overflow={false}
              >
                Add Art Collection
              </Typography>

              <TextField
                required
                id="collectionAddName"
                label="Collection Name"
                variant='outlined'
                onChange={ handleSetACAddName }
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddLocation"
                label="Collection Location"
                variant='outlined'
                onChange={ handleSetACAddLocation } 
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateField required format="YYYY-MM-DD" label="Start Date" sx={{ paddingRight: 1, paddingBottom: 1 }} onChange={ (date) => setACAddStart(date)}/>
              </LocalizationProvider>
              <LocalizationProvider required dateAdapter={AdapterDayjs} >
                <DateField required format='YYYY-MM-DD' label="End Date" sx={{ paddingRight: 1, paddingBottom: 1 }}  onChange={ (date) => setACAddEnd(date)}/>
              </LocalizationProvider>
              <TextField
                id="collectionAddArtsIncluded"
                label="Artworks Included"
                variant='outlined'
                onChange={ handleSetACAddIncluded}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                id="collectionAddSupplier"
                label="Supplied By"
                variant='outlined'
                onChange={ handleSetACAddSupplier}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddIsArchived"
                label="Archived? (Yes/No)"
                variant='outlined'
                onChange={ handleSetACAddArchived }
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <Button onClick={ onClickAddArtCollection } variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
                Add
              </Button>
              {showAlert1 && (
                <Alert severity="error" onClose={() => setShowAlert1(false)} sx={{ marginTop: 0, marginBottom: 0 }}>
                {errorMessage1}
                </Alert>
              )}

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
                View All Art Collections
              </Typography>

              <DataGrid
              rows={artcollectionrow}
              getRowId={(artcollectionrow) => artcollectionrow.CollectionID}
              columns={artcollectioncolumns}
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
)
}