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
import { getAllGiftShopItems, addGiftShopItem, updateGiftShopItem } from '../backend/Giftshop.api';
import { getAllEmployeeInfo, getOneEmployeeInfo } from '../backend/Employee.api';
import '../styles/EmployeeLandingStyles.css'
import { getAllArtCollections, addArtCollection } from '../backend/ArtCollections.api';

//rows for displaying giftshop table
var giftshoprow = await getAllGiftShopItems();
var artcollectionrow = await getAllArtCollections();
//var employeeinforow = await getOneEmployeeInfo();

//this is the page where the employees can access the different functions that they are allowed to modify the database with
export default function EmployeeLanding() {
  //state loading different employee pages
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
setACAddName(event.target.value);
}
const handleSetACAddStart = (event) => {
setACAddName(event.target.value);
}
const handleSetACAddEnd= (event) => {
setACAddName(event.target.value);
}
const handleSetACAddIncluded = (event) => {
setACAddName(event.target.value);
}
const handleSetACAddSupplier = (event) => {
setACAddName(event.target.value);
}
const handleSetACAddArchived = (event) => {
setACAddName(event.target.value);
}
//add art collection button click
const onClickAddArtCollection = () => {
  const newArtCollection = {
    CollectionName: ACAddName,
    Location: ACAddLocation,
    StartDate: ACAddStart,
    EndDate: ACAddEnd,
    ArtworksIncluded: ACAddIncluded,
    SuppliedBy: ACAddSupplier,
    isArchived: ACAddArchived
  }
  //addArtCollection(newArtCollection); server api needs to be fixed
}

//hooks for adding giftshop item
const [itemAddGSName, setItemAddGSName] = useState('');
const [itemAddGSPrice, setItemAddGSPrice] = useState('');
const [itemAddGSStock, setItemAddGSStock] = useState('');
const [itemAddGSImageURL, setItemAddGSImageURL] = useState('');

const handleAddGSNameChange = (event) => {
setItemAddGSName(event.target.value);
};
 
const handleAddGSPriceChange = (event) => {
setItemAddGSPrice(event.target.value);
};

const handleAddGSStockChange = (event) => {
setItemAddGSStock(event.target.value);
};

const handleAddGSImageURLChange = (event) => {
setItemAddGSImageURL(event.target.value);
};
//add giftshop item button click
const onClickAddGiftShopItem = () => {
  const newGSItem = {
    ItemName: itemAddGSName,
    Price: itemAddGSPrice,
    Stock: itemAddGSStock,
    Image: itemAddGSImageURL,
  }
addGiftShopItem(newGSItem);
};
//hooks for updating giftshop item
const [itemUpdateGSID, setItemUpdateGSID] = useState('');
const [itemUpdateGSName, setItemUpdateGSName] = useState('');
const [itemUpdateGSPrice, setItemUpdateGSPrice] = useState('');
const [itemUpdateGSStock, setItemUpdateGSStock] = useState('');

const handleUpdateGSNameChange = (event) => {
setItemUpdateGSName(event.target.value);
};
 
const handleUpdateGSPriceChange = (event) => {
setItemUpdateGSPrice(event.target.value);
};

const handleUpdateGSStockChange = (event) => {
setItemUpdateGSStock(event.target.value);
};

const handleUpdateGSIDChange = (event) => {
setItemUpdateGSID(event.target.value);
};
//Update giftshop item button click
const onClickUpdateGiftShopItem = () => {
  const ItemID = itemUpdateGSID;
  const updatedGSItem = {
    ItemName: itemUpdateGSName,
    Price: itemUpdateGSPrice,
    Stock: itemUpdateGSStock,
  }
  updateGiftShopItem(ItemID, updatedGSItem);
  console.log('updated');
};

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

  const giftshopcolumns = [
    { field: 'ItemID', headerName: 'Item ID', width: 200 },
    {
      field: 'ItemName',
      headerName: 'Item Name',
      flex: 1,
      editable: false,
    },
    {
      field: 'Price',
      headerName: 'Price',
      flex: 1,
      editable: false,
    },
    {
      field: 'Stock',
      headerName: 'Stock',
      type: 'number',
      flex: 1,
      editable: false,
    }
  ];

  if (state === "employeelanding") {
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
                    <ArtTrackIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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
          </Box>

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, marginBottom: 30, paddingTop: 10, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary' }}>
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
          <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0" }}>
            <nav aria-label="Employee Functions">
              <List sx={{ width: "100%", height: "100%", bgcolor: 'background.paper' }}>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <AccountCircleIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary' }}>
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
    );
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (state === "employeeArtworks") {
    return (
      <main>
        <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%", borderBottom: 1 }}>
          <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0" }}>
            <nav aria-label="Employee Functions">
              <List sx={{ width: "100%", height: "100%", bgcolor: 'background.paper' }}>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <AccountCircleIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary' }}>
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
                disabled
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

            </Box>

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
          <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0" }}>
            <nav aria-label="Employee Functions">
              <List sx={{ width: "100%", height: "100%", bgcolor: 'background.paper' }}>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <AccountCircleIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary' }}>
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
                onChange={ handleSetACAddName}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddLocation"
                label="Collection Location"
                variant='outlined'
                onChange={ handleSetACAddLocation}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddStartDate"
                label="Start Date"
                variant='outlined'
                onChange={ handleSetACAddStart}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddEndDate"
                label="End Date"
                variant='outlined'
                onChange={ handleSetACAddEnd}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddArtsIncluded"
                label="Artworks Included"
                variant='outlined'
                onChange={ handleSetACAddIncluded}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddSupplier"
                label="Supplied By"
                variant='outlined'
                onChange={ handleSetACAddSupplier}
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="collectionAddIsArchived"
                label="Archived?"
                variant='outlined'
                onChange={ handleSetACAddArchived }
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <Button onClick={ onClickAddArtCollection } variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
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
                View All Art Collections
              </Typography>

              <DataGrid
              rows={artcollectionrow}
              getRowId={(artcollectionrow) => artcollectionrow.ArtCollectionID}
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
    );
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (state === "employeeExhibitions") {
    return (
      <main>
        <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%", borderBottom: 1 }}>
          <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0" }}>
            <nav aria-label="Employee Functions">
              <List sx={{ width: "100%", height: "100%", bgcolor: 'background.paper' }}>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <AccountCircleIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary' }}>
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
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="exhibitionAddLocation"
                label="Exhibition Location"
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="exhibitionAddSupplier"
                label="Supplied By"
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
                View All Exhibitions
              </Typography>
            </Box>

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
          <Box sx={{ width: '15%', height: "100%", paddingTop: 8, bgcolor: 'background.paper', float: 'left', position: "sticky", top: "0" }}>
            <nav aria-label="Employee Functions">
              <List sx={{ width: "100%", height: "100%", bgcolor: 'background.paper' }}>
                <ListItem disablePadding alignItems="flex-start">
                  <ListItemIcon>
                    <AccountCircleIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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
                    <ArtTrackIcon fontSize='large' />
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

          <Box sx={{ width: '85%', height: "100%", minHeight: 429, paddingBottom: 7, paddingTop: 11, bgcolor: 'background.paper', float: 'right', borderLeft: 1, borderColor: 'primary' }}>
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

            <Box sx={{ width: "90%", minHeight: "100px", paddingLeft: "5%", paddingRight: "5%", borderTop: 5, paddingTop: 2 }}>
              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="Black"
                gutterBottom
                overflow={false}
              >
                Add Item
              </Typography>

              <TextField
                required
                id="itemAddName"  
                label="Item Name"
                onChange={handleAddGSNameChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="itemAddPrice"
                label="Item Price"
                onChange={handleAddGSPriceChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="itemAddStock"
                label="Current Stock"
                onChange={handleAddGSStockChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="itemAddImage"
                label="Image URL"
                onChange={handleAddGSImageURLChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <Button id='AddItemBtn' onClick={onClickAddGiftShopItem} variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
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
                Update Item
              </Typography>

              <TextField
                required
                id="itemUpdateID"
                label="Item ID"
                onChange={handleUpdateGSIDChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <TextField
                required
                id="itemUpdateName"
                label="Item Name"
                onChange={handleUpdateGSNameChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="itemUpdatePrice"
                label="Item Price"
                onChange={handleUpdateGSPriceChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="itemUpdateStock"
                label="Current Stock"
                onChange={handleUpdateGSStockChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <Button onClick={onClickUpdateGiftShopItem} variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
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
                View All Items
              </Typography>
              
              <DataGrid
              rows={giftshoprow}
              getRowId={(giftshoprow) => giftshoprow.ItemID}
              columns={giftshopcolumns}
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


}