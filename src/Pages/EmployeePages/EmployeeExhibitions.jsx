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
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ShopIcon from '@mui/icons-material/Shop';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
import '../../styles/EmployeePageStyles.css'
import { addExhibition, getAllExhibitions } from '../../backend/Exhibition.api';

//rows for displaying giftshop table

var exhibitionrow = await getAllExhibitions();

export default function EmployeeExhibitions() {
const [showAlert1, setShowAlert1] = React.useState(false);
const [errorMessage1, setErrorMessage1] = React.useState("");
//hooks for adding exhibitions
const [ExAddName, setExAddName] = useState('');
const [ExAddDescription, setExAddDescription] = useState('');
const [ExAddStart, setExAddStart] = useState('');
const [ExAddEnd, setExAddEnd] = useState('');
const [ExAddLocation, setExAddLocation] = useState('');
const [ExAddIncluded, setExAddIncluded] = useState('');
const [ExAddArchived, setExAddArchived] = useState('');

const handleSetExAddName = (event) => {
setExAddName(event.target.value);
}
const handleSetExAddDescription = (event) => {
setExAddDescription(event.target.value);
}
const handleSetExAddStart = (event) => {
setExAddStart(event.target.value);
}
const handleSetExAddEnd= (event) => {
setExAddEnd(event.target.value);
}
const handleSetExAddLocation = (event) => {
setExAddLocation(event.target.value);
}
const handleSetExAddIncluded = (event) => {
setExAddIncluded(event.target.value);
}
const handleSetExAddArchived = (event) => {
setExAddArchived(event.target.value);
}

const onClickAddExhibition = async () => {
  var truth1, truth2, truth3, truth4, truth5, truth6, truth7;

  if (ExAddName === 'NULL' || ExAddName === 'null' || ExAddName === "") {truth1 = null} else {truth1 = ExAddName}
  if (ExAddDescription === 'NULL' || ExAddDescription === 'null' || ExAddDescription === "") {truth2 = null} else {truth2 =ExAddDescription}
  if (ExAddStart === 'NULL' || ExAddStart === 'null' || ExAddStart === "") {truth3 = null} else {truth3 = ExAddStart}
  if (ExAddEnd === 'NULL' || ExAddEnd === 'null' || ExAddEnd === "") {truth4 = null} else {truth4 = ExAddEnd}
  if (ExAddLocation === 'NULL' || ExAddLocation === 'null' || ExAddLocation === "") {truth5 = null} else {truth5 = ExAddLocation }
  if (ExAddIncluded === 'NULL' || ExAddIncluded === 'null' || ExAddIncluded === "") {truth6 = null} else {truth6 = Number(ExAddIncluded)}
  if (ExAddArchived === 'No' || ExAddArchived === 'no' || ExAddArchived === "") {truth7 = false} else if (ExAddArchived === 'Yes' || ExAddArchived === 'yes') {truth7 = true}
  try {
    const newExhibition = {
      ExhibitionName: truth1,
      Description: truth2,
      StartDate: truth3.toISOString().slice(0, 10),
      EndDate: truth4.toISOString().slice(0, 10),
      Location: truth5,
      InitialArtwork: truth6,
      isArchived: truth7
    }
    await addExhibition(newExhibition);
    setShowAlert1(false);
    setErrorMessage1('');
  } catch (error) {
    setErrorMessage1("Input error, please fix!");
    setShowAlert1(true);
  }

}

const exhibitioncolumns = [
  { field: 'ExhibitionID', headerName: 'Exhibition ID', flex: 1 },
  {
    field: 'ExhibitionName',
    headerName: 'Exhibition Name',
    flex: 1,
    editable: false,
  },
  {
    field: 'ArtworkID',
    headerName: 'Artwork ID',
    flex: 1,
    editable: false,
  },
  {
    field: 'Title',
    headerName: 'Artwork Title',
    flex: 1,
    type: 'number',
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
    field: 'Location',
    headerName: 'Location',
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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderBottom: 1,borderLeft: 1, borderColor: 'primary' }}>
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

            <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="Black"
                gutterBottom
                overflow={false}
              >
                Add Exhibition
              </Typography>

              <TextField
                required
                id="exhibitionAddName"
                label="Exhibition Name"
                variant='outlined'
                onChange={ handleSetExAddName }
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                id="exhibitionAddDescription"
                label="Description"
                variant='outlined'
                onChange={ handleSetExAddDescription }
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateField required format="YYYY-MM-DD" label="Start Date" sx={{ paddingRight: 1, paddingBottom: 1 }} onChange={ (date) => setExAddStart(date)}/>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateField required format='YYYY-MM-DD' label="End Date" sx={{ paddingRight: 1, paddingBottom: 1 }}  onChange={ (date) => setExAddEnd(date)}/>
              </LocalizationProvider>
              <TextField 
                required
                id="exhibitionAddLocation"
                label="Location"
                variant='outlined'
                onChange={ handleSetExAddLocation } 
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="exhibitionAddArtworksIncluded"
                label="Initial Artwork ID"
                variant='outlined'
                onChange={ handleSetExAddIncluded }
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="exhibitionAddIsArchived"
                label="Archived? (Yes/No)"
                variant='outlined'
                onChange={ handleSetExAddArchived }
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <Button onClick={ onClickAddExhibition } variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
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
                View All Exhibitions
              </Typography>
              <DataGrid
              rows={exhibitionrow}
              getRowId={(exhibitionrow) => exhibitionrow.ArtworkID}
              columns={exhibitioncolumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 25,
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