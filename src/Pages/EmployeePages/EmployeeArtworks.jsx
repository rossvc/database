import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import ShopIcon from "@mui/icons-material/Shop";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import "../../styles/EmployeePageStyles.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";

import {
  addArtwork,
  addArtworkToCollection,
  addArtworkToExhibition,
  getAllArtworks,
  updateArtwork,
  deleteArtwork,
} from "../../backend/Artworks.api";

var artworkrow = await getAllArtworks();

export default function EmployeeArtworks() {
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
  const [showAlert5, setShowAlert5] = React.useState(false);
  const [errorMessage5, setErrorMessage5] = React.useState("");
  const [showAlert1, setShowAlert1] = React.useState(false);
  const [errorMessage1, setErrorMessage1] = React.useState("");
  const [showAlert2, setShowAlert2] = React.useState(false);
  const [errorMessage2, setErrorMessage2] = React.useState("");
  const [showAlert3, setShowAlert3] = React.useState(false);
  const [errorMessage3, setErrorMessage3] = React.useState("");
  const [showAlert4, setShowAlert4] = React.useState(false);
  const [errorMessage4, setErrorMessage4] = React.useState("");
  //hooks for adding art collections
  const [AAddTitle, setAAddTitle] = useState("");
  const [AAddArtistID, setAAddID] = useState("");
  const [AAddLocation, setAAddLocation] = useState("");
  const [AAddMedium, setAAddMedium] = useState("");
  const [AAddDimensions, setAAddDimensions] = useState("");
  const [AAddStyle, setAAddStyle] = useState("");
  const [AAddSupplier, setAAddSupplier] = useState("");
  const [AAddDateAcquired, setAAddDateAcquired] = useState("");
  const [AAddDescription, setAAddDescription] = useState("");
  const [AAddImageURL, setAAddImageURL] = useState("");

  const handleSetAAddID = (event) => {
    setAAddID(event.target.value);
  };
  const handleSetAAddTitle = (event) => {
    setAAddTitle(event.target.value);
  };
  const handleSetAAddLocation = (event) => {
    setAAddLocation(event.target.value);
  };
  const handleSetAAddMedium = (event) => {
    setAAddMedium(event.target.value);
  };
  const handleSetAAddDimensions = (event) => {
    setAAddDimensions(event.target.value);
  };
  const handleSetAAddStyle = (event) => {
    setAAddStyle(event.target.value);
  };
  const handleSetAAddSupplier = (event) => {
    setAAddSupplier(event.target.value);
  };
  const handleSetAAddDateAcquired = (event) => {
    setAAddDateAcquired(event.target.value);
  };
  const handleSetAAddDescription = (event) => {
    setAAddDescription(event.target.value);
  };
  const handleSetAAddImageURL = (event) => {
    setAAddImageURL(event.target.value);
  };

  const onClickAddArtwork = async () => {
    var truth1,
      truth2,
      truth3,
      truth4,
      truth5,
      truth6,
      truth7,
      truth8,
      truth9,
      truth10;

    if (
      AAddArtistID === "NULL" ||
      AAddArtistID === "null" ||
      AAddArtistID === ""
    ) {
      truth1 = null;
    } else {
      truth1 = AAddArtistID;
    }
    if (AAddTitle === "NULL" || AAddTitle === "null" || AAddTitle === "") {
      truth2 = null;
    } else {
      truth2 = AAddTitle;
    }
    if (
      AAddLocation === "NULL" ||
      AAddLocation === "null" ||
      AAddLocation === ""
    ) {
      truth3 = null;
    } else {
      truth3 = AAddLocation;
    }
    if (
      AAddDescription === "NULL" ||
      AAddDescription === "null" ||
      AAddDescription === ""
    ) {
      truth4 = null;
    } else {
      truth4 = AAddDescription;
    }
    if (AAddMedium === "NULL" || AAddMedium === "null" || AAddMedium === "") {
      truth5 = null;
    } else {
      truth5 = AAddMedium;
    }
    if (
      AAddDimensions === "NULL" ||
      AAddDimensions === "null" ||
      AAddDimensions === ""
    ) {
      truth6 = null;
    } else {
      truth6 = AAddDimensions;
    }
    if (AAddStyle === "NULL" || AAddStyle === "null" || AAddStyle === "") {
      truth7 = null;
    } else {
      truth7 = AAddStyle;
    }
    if (
      AAddSupplier === "NULL" ||
      AAddSupplier === "null" ||
      AAddSupplier === ""
    ) {
      truth8 = null;
    } else {
      truth8 = Number(AAddSupplier);
    }
    if (
      AAddDateAcquired === "NULL" ||
      AAddDateAcquired === "null" ||
      AAddDateAcquired === ""
    ) {
      truth9 = null;
    } else {
      truth9 = AAddDateAcquired;
    }
    if (
      AAddImageURL === "NULL" ||
      AAddImageURL === "null" ||
      AAddImageURL === ""
    ) {
      truth10 = null;
    } else {
      truth10 = AAddImageURL;
    }
    console.log(AAddArtistID);
    try {
      const newArtwork = {
        ArtistName: truth1,
        Title: truth2,
        ArtworkLocation: truth3,
        Description: truth4,
        CollectionID: null,
        ExhibitionID: null,
        Medium: truth5,
        Dimensions: truth6,
        Style: truth7,
        SuppliedBy: truth8,
        AcquisitionDate: truth9.toISOString().slice(0, 10),
        Image: truth10,
      };
      await addArtwork(newArtwork);
      setShowAlert1(false);
      setErrorMessage1("");
    } catch (error) {
      setErrorMessage1("Input error, please fix!");
      setShowAlert1(true);
    }
  };
  //hooks for updating artwork
  const [AUpdateArtworkID, setAUpdateArtworkID] = useState("");
  const [AUpdateTitle, setAUpdateTitle] = useState("");
  const [AUpdateArtistID, setAUpdateID] = useState("");
  const [AUpdateLocation, setAUpdateLocation] = useState("");
  const [AUpdateMedium, setAUpdateMedium] = useState("");
  const [AUpdateDimensions, setAUpdateDimensions] = useState("");
  const [AUpdateStyle, setAUpdateStyle] = useState("");
  const [AUpdateSupplier, setAUpdateSupplier] = useState("");
  const [AUpdateDateAcquired, setAUpdateDateAcquired] = useState("");
  const [AUpdateDescription, setAUpdateDescription] = useState("");
  const [AUpdateImageURL, setAUpdateImageURL] = useState("");

  const handleSetAUpdateArtworkID = (event) => {
    setAUpdateArtworkID(event.target.value);
  };
  const handleSetAUpdateID = (event) => {
    setAUpdateID(event.target.value);
  };
  const handleSetAUpdateTitle = (event) => {
    setAUpdateTitle(event.target.value);
  };
  const handleSetAUpdateLocation = (event) => {
    setAUpdateLocation(event.target.value);
  };
  const handleSetAUpdateMedium = (event) => {
    setAUpdateMedium(event.target.value);
  };
  const handleSetAUpdateDimensions = (event) => {
    setAUpdateDimensions(event.target.value);
  };
  const handleSetAUpdateStyle = (event) => {
    setAUpdateStyle(event.target.value);
  };
  const handleSetAUpdateSupplier = (event) => {
    setAUpdateSupplier(event.target.value);
  };
  const handleSetAUpdateDateAcquired = (event) => {
    setAUpdateDateAcquired(event.target.value);
  };
  const handleSetAUpdateDescription = (event) => {
    setAUpdateDescription(event.target.value);
  };
  const handleSetAUpdateImageURL = (event) => {
    setAUpdateImageURL(event.target.value);
  };

  const onClickUpdateArtwork = async () => {
    var ID;
    if (AUpdateArtworkID === "") {
      ID = null;
    } else {
      ID = Number(AUpdateArtworkID);
    }
    console.log(ID);
    var truth1,
      truth2,
      truth3,
      truth4,
      truth5,
      truth6,
      truth7,
      truth8,
      truth9,
      truth10;

      if (AUpdateArtistID === 'NULL' || AUpdateArtistID === 'null' || AUpdateArtistID === "") {truth1 = null} else {truth1 = AUpdateArtistID}
      if (AUpdateTitle === 'NULL' || AUpdateTitle === 'null' || AUpdateTitle === "") {truth2 = null} else {truth2 = AUpdateTitle}
      if (AUpdateLocation === 'NULL' || AUpdateLocation === 'null' || AUpdateLocation === "") {truth3 = null} else {truth3 = AUpdateLocation}
      if (AUpdateDescription === 'NULL' || AUpdateDescription === 'null' || AUpdateDescription === "") {truth4 = null} else {truth4 = AUpdateDescription}
      if (AUpdateMedium === 'NULL' || AUpdateMedium === 'null' || AUpdateMedium === "") {truth5 = null} else {truth5 = AUpdateMedium}
      if (AUpdateDimensions === 'NULL' || AUpdateDimensions === 'null' || AUpdateDimensions === "") {truth6 = null} else {truth6 = AUpdateDimensions}
      if (AUpdateStyle === 'NULL' || AUpdateStyle === 'null' || AUpdateStyle === "") {truth7 = null} else {truth7 = AUpdateStyle}
      if (AUpdateSupplier === 'NULL' || AUpdateSupplier === 'null' || AUpdateSupplier === "") {truth8 = null} else {truth8 = Number(AUpdateSupplier)}
      if (AUpdateDateAcquired === 'NULL' || AUpdateDateAcquired === 'null' || AUpdateDateAcquired === "") {truth9 = null} else {truth9 = AUpdateDateAcquired}
      if (AUpdateImageURL === 'NULL' || AUpdateImageURL === 'null' || AUpdateImageURL === "") {truth10 = null} else {truth10 = AUpdateImageURL}
      
      try {
        const updatedArtwork = {
          
          ...(truth1!=null? {ArtistName: truth1}: {}),
          ...(truth2!=null? {Title: truth2}: {}),
          ...(truth3!=null? {ArtworkLocation: truth3}: {}),
          ...(truth4!=null? {Description: truth4}:{}),
          ...(truth5!=null? {Medium: truth5}:{}),
          ...(truth6!=null? {Dimensions: truth6}:{}),
          ...(truth7!=null? {Style: truth7}:{}),
          ...(truth8!=null? {SuppliedBy: truth8}:{}),
          ...(truth9!=null? {AcquisitionDate: truth9.toISOString().slice(0, 10)}:{}),
          ...(truth10!=null? {Image: truth10}:{})
        }
        await updateArtwork(ID, updatedArtwork);
        setShowAlert2(false);
        setErrorMessage2('');
      } catch (error) {
        setErrorMessage2("Input error, please fix!");
        setShowAlert2(true);
      }

    }
    //hooks for adding to art collection
    const [AAddToAArtworkID, setAAddToAArtworkID] = useState('');
    const [AAddToACollectionID, setAAddToACollectionID] = useState('');

  const handleSetAAddToAArtworkID = (event) => {
    setAAddToAArtworkID(event.target.value);
  };
  const handleSetAAddToACollectionID = (event) => {
    setAAddToACollectionID(event.target.value);
  };

  const onClickAddToArtCollection = async () => {
    var artID;
    if (AAddToAArtworkID === "") {
      artID = null;
    } else {
      artID = Number(AAddToAArtworkID);
    }
    var collectionID;
    if (AAddToACollectionID === "") {
      collectionID = null;
    } else {
      collectionID = Number(AAddToACollectionID);
    }
    try {
      const body = {
        CollectionID: collectionID,
        ArtworkID: artID,
      };
      await addArtworkToCollection(body);
      setShowAlert3(false);
      setErrorMessage3("");
    } catch (error) {
      setErrorMessage3("Input error, please fix!");
      setShowAlert3(true);
    }
  };

  const [AAddToEArtworkID, setAAddToEArtworkID] = useState("");
  const [AAddToEExhibitionID, setAAddToEExhibitionID] = useState("");

  const handleSetAAddToEArtworkID = (event) => {
    setAAddToEArtworkID(event.target.value);
  };
  const handleSetAAddToEExhibitionID = (event) => {
    setAAddToEExhibitionID(event.target.value);
  };

  const onClickAddToExhibition = async () => {
    var artID;
    if (AAddToEArtworkID === "") {
      artID = null;
    } else {
      artID = Number(AAddToEArtworkID);
    }
    var exhibitionID;
    if (AAddToEExhibitionID === "") {
      exhibitionID = null;
    } else {
      exhibitionID = Number(AAddToEExhibitionID);
    }
    try {
      const body = {
        ExhibitionID: exhibitionID,
        ArtworkID: artID,
      };
      await addArtworkToExhibition(body);
      setShowAlert4(false);
      setErrorMessage4("");
    } catch (error) {
      setErrorMessage4("Input error, please fix!");
      setShowAlert4(true);
    }
  };

  const artworkcolumns = [
    { field: "ArtworkID", headerName: "Artwork ID", width: 200 },
    {
      field: "ArtistName",
      headerName: "Artist Name",
      flex: 1,
      editable: false,
    },
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
      editable: false,
    },
    {
      field: "ArtworkLocation",
      headerName: "ArtworkLocation",
      type: "number",
      flex: 1,
      editable: false,
    },
    {
      field: "Description",
      headerName: "Description",
      flex: 1,
      editable: false,
    },

    {
      field: "Medium",
      headerName: "Medium",
      flex: 1,
      editable: false,
    },
    {
      field: "Dimensions",
      headerName: "Dimensions",
      flex: 1,
      editable: false,
    },
    {
      field: "Style",
      headerName: "Style",
      flex: 1,
      editable: false,
    },
    {
      field: "SuppliedBy",
      headerName: "Supplied By",
      flex: 1,
      editable: false,
    },
    {
      field: "AcquisitionDate",
      headerName: "Acquisition Date",
      flex: 1,
      editable: false,
    },
  ];
  const [ADeleteArtworkID, setADeleteArtworkID] = useState("");

  const handleSetADeleteArtworkID = (event) => {
    setADeleteArtworkID(event.target.value);
  };

  const onClickDeleteArtwork = async () => {
    var ID;
    if (ADeleteArtworkID === "") {
      ID = null;
    } else {
      ID = Number(ADeleteArtworkID);
    }
    console.log(ID);

    try {
      // Call the deleteArtwork function with the ID to delete the artwork
      const response = await deleteArtwork(ID);

      // Check if the response indicates a successful deletion
      if (response.success) {
        // Display a success message
        setErrorMessage5("Artwork deleted successfully.");
        setShowAlert5(true);

        // Reset state and clear error messages after a short delay
        setTimeout(() => {
          setShowAlert5(false);
          setErrorMessage5("");
        }, 1000); // Wait for 1 second before resetting

        // Reload the page after 1 second
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        // Handle other error cases, if any
        setErrorMessage5(
          "Cannot delete because it exists in an active exhibition! Please remove from exhibition first."
        );
        setShowAlert5(true);
      }
    } catch (error) {
      // Handle errors and display error message
      setErrorMessage5(
        "Error deleting artwork, please try again or check if it's in an active exhibition."
      );
      setShowAlert5(true);
    }
  };

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
                    <ListItemText primary="Employee Information"  />
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
                    <ListItemText primary="Artworks"  />
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
                    <ListItemText primary="Art Collections"  />
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
                    <ListItemText primary="Exhibitions"  />
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
                    <ListItemText primary="Gift Shop Inventory"  />
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
                  onChange={handleSetAAddTitle}
                />
                <TextField
                  id="Artist"
                  label="Artist Name"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                  onChange={handleSetAAddID}
                />
                <TextField
                  required
                  id="artLocation"
                  label="Artwork Location"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                  onChange={handleSetAAddLocation}
                />
                <TextField
                  id="artMedium"
                  label="Artwork Medium"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                  onChange={handleSetAAddMedium}
                />
                <TextField
                  id="artDimensions"
                  label="Artwork Dimensions (L,W,H)"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                  onChange={handleSetAAddDimensions}
                />
                <TextField
                  id="artStyle"
                  label="Artwork Style"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                  onChange={handleSetAAddStyle}
                />
                <TextField
                  id="artSupplier"
                  label="Artwork Supplier"
                  variant='outlined'
                  sx={{ paddingRight: 1, paddingBottom: 1 }}
                  onChange={handleSetAAddSupplier}
                />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                required
                format="YYYY-MM-DD"
                label="Date Acquired"
                sx={{ paddingRight: 1, paddingBottom: 1 }}
                onChange={(date) => setAAddDateAcquired(date)}
              />
            </LocalizationProvider>

            <TextField
              id="image"
              label="Image URL"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAAddImageURL}
            />
            <TextField
              id="artDescription"
              label="Artwork Description"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              fullWidth
              onChange={handleSetAAddDescription}
            />

            <Button
              onClick={onClickAddArtwork}
              variant="outlined"
              color="primary"
              sx={{
                marginTop: 1,
                maxWidth: "80px",
                maxHeight: "50px",
                minWidth: "80px",
                minHeight: "50px",
              }}
            >
              Add
            </Button>

            {showAlert1 && (
              <Alert
                severity="error"
                onClose={() => setShowAlert1(false)}
                sx={{ marginTop: 2, marginBottom: -2 }}
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
              Update Artwork
            </Typography>

            <TextField
              required
              id="artUpdateID"
              label="Artwork ID to Update"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 3 }}
              onChange={handleSetAUpdateArtworkID}
            />
            <br />
            <TextField
              id="artUpdateTitle"
              label="Artwork Title"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateTitle}
            />
            <TextField
              id="artUpdateArtist"
              label="Artist Name"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateID}
            />
            <TextField
              required
              id="artUpdateLocation"
              label="Artwork Location"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateLocation}
            />
            <TextField
              id="artUpdateMedium"
              label="Artwork Medium"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateMedium}
            />
            <TextField
              id="artUpdateDimensions"
              label="Artwork Dimensions (L,W,H)"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateDimensions}
            />
            <TextField
              id="artUpdateStyle"
              label="Artwork Style"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateStyle}
            />
            <TextField
              id="artUpdateSupplier"
              label="Artwork Supplier"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateSupplier}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                required
                format="YYYY-MM-DD"
                label="Date Acquired"
                sx={{ paddingRight: 1, paddingBottom: 1 }}
                onChange={(date) => setAUpdateDateAcquired(date)}
              />
            </LocalizationProvider>

            <TextField
              id="image"
              label="Image URL"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateImageURL}
            />
            <TextField
              fullWidth
              id="artUpdateDescription"
              label="Artwork Description"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAUpdateDescription}
            />

            <Button
              onClick={onClickUpdateArtwork}
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
                Delete Artwork
              </Typography>

              <TextField
                required
                id="artDeleteID"
                label="Artwork ID to Delete"
                variant="outlined"
                sx={{ paddingRight: 1, paddingBottom: 1 }}
                onChange={handleSetADeleteArtworkID}
              />
              <br />
              <Button
                onClick={onClickDeleteArtwork}
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
              {showAlert5 && (
                <Alert
                  severity="error"
                  onClose={() => setShowAlert5(false)}
                  sx={{ marginTop: 0, marginBottom: 0 }}
                >
                  {errorMessage5}
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
              Add Artwork to Art Collection
            </Typography>

            <TextField
              required
              id="artAddToCollectionID"
              label="Artwork ID"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAAddToAArtworkID}
            />
            <TextField
              required
              id="collectionAddToID"
              label="Art Collection ID"
              variant="outlined"
              sx={{ paddingRight: 1, paddingBottom: 1 }}
              onChange={handleSetAAddToACollectionID}
            />
            <br />
            <Button
              onClick={onClickAddToArtCollection}
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
              Add
            </Button>
            {showAlert3 && (
              <Alert
                severity="error"
                onClose={() => setShowAlert3(false)}
                sx={{ marginTop: 0, marginBottom: 0 }}
              >
                {errorMessage3}
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
              Add Artwork to Exhibition
            </Typography>

            <TextField
              required
              id="artAddToExhibitionID"
              label="Artwork ID"
              variant="outlined"
              onChange={handleSetAAddToEArtworkID}
              sx={{ paddingRight: 1, paddingBottom: 1 }}
            />
            <TextField
              required
              id="exhibitionAddToID"
              label="Exhibition ID"
              variant="outlined"
              onChange={handleSetAAddToEExhibitionID}
              sx={{ paddingRight: 1, paddingBottom: 1 }}
            />
            <br />
            <Button
              onClick={onClickAddToExhibition}
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
              Add
            </Button>
            {showAlert4 && (
              <Alert
                severity="error"
                onClose={() => setShowAlert4(false)}
                sx={{ marginTop: 0, marginBottom: 0 }}
              >
                {errorMessage4}
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
              View All Artworks
            </Typography>

            <DataGrid
              rows={artworkrow}
              getRowId={(artworkrow) => artworkrow.ArtworkID}
              columns={artworkcolumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 25,
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
