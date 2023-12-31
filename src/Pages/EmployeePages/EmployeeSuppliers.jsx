import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import ShopIcon from "@mui/icons-material/Shop";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import "../../styles/EmployeePageStyles.css";
import {
  addSupplier,
  getAllSuppliers,
  updateSupplier,
  deleteSupplier,
} from "../../backend/Suppliers.api";

var supplierrow = await getAllSuppliers();

export default function EmployeeSuppliers() {
  var employeedata = [];
  const currentUserData = sessionStorage.getItem("currentUser");

  if (currentUserData) {
    try {
      employeedata = Object.values(JSON.parse(currentUserData));
      var is_admin = employeedata[employeedata.length - 1] === 1;
    } catch (error) {
      // Handle JSON parsing error
      console.error("Error parsing currentUser data:", error);
    }
  }

  // State for delete functionality
  const [deleteSupplierID, setDeleteSupplierID] = useState("");

  const handleDeleteSupplierID = (event) => {
    setDeleteSupplierID(event.target.value);
  };

  const [showAlert1, setShowAlert1] = React.useState(false);
  const [errorMessage1, setErrorMessage1] = React.useState("");
  const [showAlert2, setShowAlert2] = React.useState(false);
  const [errorMessage2, setErrorMessage2] = React.useState("");
  const [showAlert3, setShowAlert3] = React.useState(false);
  const [errorMessage3, setErrorMessage3] = React.useState("");

  const [SupplierAddName, setSupplierAddName] = useState("");
  const [SupplierAddContact, setSupplierAddContact] = useState("");

  const handleSupplierAddName = (event) => {
    setSupplierAddName(event.target.value);
  };

  const handleSupplierAddContact = (event) => {
    setSupplierAddContact(event.target.value);
  };

  const onClickDeleteSupplier = async () => {
    var supplierID; if (deleteSupplierID === "") {supplierID = null} else {supplierID = Number(deleteSupplierID)}
    try {
      await deleteSupplier(supplierID);
      setShowAlert3(false);
      setErrorMessage3("");
    } catch (error) {
      setErrorMessage3("Input error, please fix!");
      setShowAlert3(true);
    }
  };

  const onClickAddSupplier = async () => {
    var truth1, truth2;

    if (
      SupplierAddName === "NULL" ||
      SupplierAddName === "null" ||
      SupplierAddName === ""
    ) {
      truth1 = null;
    } else {
      truth1 = SupplierAddName;
    }
    if (
      SupplierAddContact === "NULL" ||
      SupplierAddContact === "null" ||
      SupplierAddContact === ""
    ) {
      truth2 = null;
    } else {
      truth2 = SupplierAddContact;
    }

    try {
      const newSupplier = {
        Name: truth1,
        ContactInfo: truth2,
        PiecesSupplied: null,
      };
      await addSupplier(newSupplier);
      setShowAlert1(false);
      setErrorMessage1("");
    } catch (error) {
      setErrorMessage1("Input error, please fix!");
      setShowAlert1(true);
    }
  };

  const [SupplierUpdateID, setSupplierUpdateID] = useState("");
  const [SupplierUpdateName, setSupplierUpdateName] = useState("");
  const [SupplierUpdateContact, setSupplierUpdateContact] = useState("");

  const handleSupplierUpdateID = (event) => {
    setSupplierUpdateID(event.target.value);
  };

  const handleSupplierUpdateName = (event) => {
    setSupplierUpdateName(event.target.value);
  };

  const handleSupplierUpdateContact = (event) => {
    setSupplierUpdateContact(event.target.value);
  };

  const onClickUpdateSupplier = async () => {
    var truth1, truth2;
    var ID;
    if (SupplierUpdateID === "") {
      ID = null;
    } else {
      ID = Number(SupplierUpdateID);
    }

    if (
      SupplierUpdateName === "NULL" ||
      SupplierUpdateName === "null" ||
      SupplierUpdateName === ""
    ) {
      truth1 = null;
    } else {
      truth1 = SupplierUpdateName;
    }
    if (
      SupplierUpdateContact === "NULL" ||
      SupplierUpdateContact === "null" ||
      SupplierUpdateContact === ""
    ) {
      truth2 = null;
    } else {
      truth2 = SupplierUpdateContact;
    }

    try {
      const updatedSupplier = {
        ...(truth1!=null? {Name: truth1}:{}),
        ...(truth2!=null? {ContactInfo: truth2}:{}),
      };
      await updateSupplier(ID, updatedSupplier);
      setShowAlert2(false);
      setErrorMessage2("");
    } catch (error) {
      setErrorMessage2("Input error, please fix!");
      setShowAlert2(true);
    }
  };

  const suppliercolumns = [
    { field: "SupplierID", headerName: "Supplier ID", width: 200 },
    {
      field: "Name",
      headerName: "Supplier Name",
      flex: 1,
      editable: false,
    },
    {
      field: "ContactInfo",
      headerName: "Email",
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
                  Supplier Information
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
                    Add Supplier
                  </Typography>
                  <TextField
                required
                id="SupplierName"  
                label="Supplier Name"
                onChange={handleSupplierAddName}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <TextField
                required
                id="SupplierContact"
                label="Supplier Email"
                onChange={handleSupplierAddContact}
                variant='outlined'
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
    
                  
                  <br />
                  <Button onClick={onClickAddSupplier} id='AddItemBtn' variant="outlined" color="primary" sx={{ marginTop: 1, marginBottom: 2, maxWidth: '80px', maxHeight: '50px', minWidth: '80px', minHeight: '50px' }}>
                    Add
                  </Button>

            {showAlert1 && (
              <Alert
                severity="error"
                onClose={() => setShowAlert1(false)}
                sx={{ marginTop: 0, marginBottom: 0 }}
              >
                {errorMessage1}
              </Alert>
            )}
          </Box>

          <Box
            sx={{
              width: "90%",
              minHeight: "100px",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderTop: 5,
              paddingTop: 2,
            }}
          >
            <Typography
              component="h2"
              variant="h4"
              align="left"
              color="Black"
              gutterBottom
              overflow={false}
            >
              Update Supplier
            </Typography>
            <TextField
              required
              id="SupplierID"
              label="Supplier ID"
              onChange={handleSupplierUpdateID}
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
            />
            <br />
            <TextField
              required
              id="SupplierName"
              label="Supplier Name"
              onChange={handleSupplierUpdateName}
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
            />
            <TextField
              required
              id="SupplierContact"
              label="Supplier Email"
              onChange={handleSupplierUpdateContact}
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
            />

            <br />
            <Button
              onClick={onClickUpdateSupplier}
              variant="outlined"
              color="primary"
              sx={{
                marginTop: 1,
                marginBottom: 2,
                maxWidth: "80px",
                maxHeight: "50px",
                minWidth: "80px",
                minHeight: "50px",
              }}
            >
              Update
            </Button>
            {showAlert2 && (
              <Alert
                severity="error"
                onClose={() => setShowAlert2(false)}
                sx={{ marginTop: 0, marginBottom: 0 }}
              >
                {errorMessage2}
              </Alert>
            )}
          </Box>

          {is_admin && (
            <Box
              sx={{
                width: "90%",
                minHeight: "100px",
                paddingLeft: "5%",
                paddingRight: "5%",
                borderTop: 5,
                paddingTop: 2,
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="Black"
                gutterBottom
                overflow={false}
              >
                Delete Supplier
              </Typography>
              <TextField
                required
                id="DeleteSupplierID"
                label="Supplier ID to Delete"
                onChange={handleDeleteSupplierID}
                variant="outlined"
                sx={{ paddingRight: 1, paddingBottom: 1 }}
              />
              <br />
              <Button
                onClick={onClickDeleteSupplier}
                variant="outlined"
                color="primary"
                sx={{
                  marginTop: 1,
                  marginBottom: 2,
                  maxWidth: "80px",
                  maxHeight: "50px",
                  minWidth: "80px",
                  minHeight: "50px",
                }}
              >
                Delete
              </Button>
              {showAlert3 && (
                <Alert severity="error" onClose={() => setShowAlert3(false)} sx={{ marginTop: 0, marginBottom: 0 }}>
                {errorMessage3}
                </Alert>
              )}
            </Box>
          )}

          <Box
            sx={{
              width: "90%",
              minHeight: "100px",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderTop: 5,
              paddingTop: 2,
            }}
          >
            <Typography
              component="h2"
              variant="h4"
              align="left"
              color="Black"
              gutterBottom
              overflow={false}
            >
              View All Suppliers
            </Typography>
            <DataGrid
              rows={supplierrow}
              getRowId={(supplierrow) => supplierrow.SupplierID}
              columns={suppliercolumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              disableRowSelectionOnClick
              getRowHeight={() => "auto"}
              sx={{
                [`& .${gridClasses.cell}`]: {
                  py: 1,
                },
              }}
            ></DataGrid>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
