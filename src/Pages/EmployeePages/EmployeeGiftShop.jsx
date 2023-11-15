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
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ShopIcon from '@mui/icons-material/Shop';
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { getAllGiftShopItems, addGiftShopItem, updateGiftShopItem } from '../../backend/Giftshop.api';
import '../../styles/EmployeePageStyles.css'

//rows for displaying giftshop table
var giftshoprow = await getAllGiftShopItems();

export default function EmployeeGiftShop() {

const [showAlert1, setShowAlert1] = React.useState(false);
const [errorMessage1, setErrorMessage1] = React.useState("");
const [showAlert2, setShowAlert2] = React.useState(false);
const [errorMessage2, setErrorMessage2] = React.useState("");
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
const onClickAddGiftShopItem = async () => {
  var truth1, truth2, truth3, truth4;

  if (itemAddGSName === 'NULL' || itemAddGSName === 'null' || itemAddGSName === "") {truth1 = null} else {truth1 = itemAddGSName}
  if (itemAddGSPrice === 'NULL' || itemAddGSPrice === 'null' || itemAddGSPrice === "") {truth2 = null} else {truth2 = Number(itemAddGSPrice)}
  if (itemAddGSStock === 'NULL' || itemAddGSStock === 'null' || itemAddGSStock === "") {truth3 = null} else {truth3 = Number(itemAddGSStock)}
  if (itemAddGSImageURL === 'NULL' || itemAddGSImageURL === 'null' || itemAddGSImageURL === "") {truth4 = null} else {truth4 = itemAddGSImageURL}
  try {
    const newItem = {
      ItemName: truth1,
      Price: truth2,
      Stock: truth3,
      Image: truth4,
    }
    await addGiftShopItem(newItem);
    setShowAlert1(false);
    setErrorMessage1('');
  } catch (error) {
    setErrorMessage1("Input error, please fix!");
    setShowAlert1(true);
  }

}
//hooks for updating giftshop item
const [itemUpdateGSID, setItemUpdateGSID] = useState('');
const [itemUpdateGSName, setItemUpdateGSName] = useState('');
const [itemUpdateGSPrice, setItemUpdateGSPrice] = useState('');
const [itemUpdateGSStock, setItemUpdateGSStock] = useState('');
const [itemUpdateGSImageURL, setItemUpdateGSImageURL] = useState('');

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

const handleUpdateGSImageURLChange = (event) => {
  setItemUpdateGSImageURL(event.target.value);
};
//Update giftshop item button click
const onClickUpdateGiftShopItem = async () => {
  var truth1, truth2, truth3, truth4;
  var ID; if (itemUpdateGSID === "") { ID = null} else { ID = Number(itemUpdateGSID)}

  if (itemUpdateGSName === 'NULL' || itemUpdateGSName === 'null' || itemUpdateGSName === "") {truth1 = null} else {truth1 = itemUpdateGSName}
  if (itemUpdateGSPrice === 'NULL' || itemUpdateGSPrice === 'null' || itemUpdateGSPrice === "") {truth2 = null} else {truth2 = Number(itemUpdateGSPrice)}
  if (itemUpdateGSStock === 'NULL' || itemUpdateGSStock === 'null' || itemUpdateGSStock === "") {truth3 = null} else {truth3 = Number(itemUpdateGSStock)}
  if (itemUpdateGSImageURL === 'NULL' || itemUpdateGSImageURL === 'null' || itemUpdateGSImageURL === "") {truth4 = null} else {truth4 = itemUpdateGSImageURL}
  try {
    const updatedItem = {
      ItemName: truth1,
      Price: truth2,
      Stock: truth3,
      Image: truth4,
    }
    await updateGiftShopItem(ID, updatedItem);
    setShowAlert2(false);
    setErrorMessage2('');
  } catch (error) {
    setErrorMessage2("Input error, please fix!");
    setShowAlert2(true);
  }
};

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
                    <ListItemText primary="Employee Information" />
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
                    <ListItemText primary="Artworks" />
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
                    <ListItemText primary="Art Collections" />
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
                    <ListItemText primary="Exhibitions" />
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
                    <ListItemText primary="Gift Shop Inventory" />
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
                    <ListItemText primary="Suppliers" />
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
              <TextField
                id="itemUpdateStock"
                label="Image URL"
                onChange={handleUpdateGSImageURLChange}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <Button onClick={onClickUpdateGiftShopItem} variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
                Update
              </Button>
              {showAlert2 && (
                <Alert severity="error" onClose={() => setShowAlert2(false)} sx={{ marginTop: 0, marginBottom: 0 }}>
                {errorMessage2}
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
)
    
}