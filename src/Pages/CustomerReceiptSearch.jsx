import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

//Receipt page

// Here customers can use their email address to get a list of all of their purchases, including ticket sales and giftshop sales
// They will be grouped by order

const giftColumns = [
  { field: 'item', headerName: 'Item Purchased', width: 300, },
  { field: 'saleDate', headerName: 'Sale Date', width: 300, },
  { field: 'saleAmount', headerName: 'Sale Amount', width: 300, },
  { field: 'paymentMethod', headerName: 'Payment Method', width: 300, }
];
const ticketColumns = [
  { field: 'ticket', headerName: 'Ticket Purchased', width: 300, },
  { field: 'saleDate', headerName: 'Sale Date', width: 300, },
  { field: 'saleAmount', headerName: 'Sale Amount', width: 300, },
  { field: 'paymentMethod', headerName: 'Payment Method', width: 300, }
];

const giftRows = [
  {id:1, item:"toothbrush", saleDate:"today", saleAmount:"10", paymentMethod:"Cash"},
  {id:2, item:"biscut", saleDate:"yesterday", saleAmount:"15", paymentMethod:"Card"},
  {id:3, item:"hammer", saleDate:"yourmom", saleAmount:"60", paymentMethod:"Cash"},
];
const ticketRows = [
  {id:1, ticket:"paw patrol", saleDate:"today", saleAmount:"30", paymentMethod:"Cash"},
  {id:2, ticket:"paw patrol", saleDate:"today", saleAmount:"40", paymentMethod:"Cash"},
  {id:3, ticket:"paw patrol", saleDate:"today", saleAmount:"50", paymentMethod:"Card"},
];


export default function CustomerReceiptSearch() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [state, setState] = useState("default");

  const onClickConfirmation = async () => {
    setError(false);
    var validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(email !== "" && validRegex.test(email)){
      setState("view");
    }
    else{ setError(true); }
  };

  if(state === "default"){
    return (
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 12,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              align="center"
              color="salmon"
              gutterBottom
            >
              Enter your email address to view previous purchases
            </Typography>
            <br/><br/>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <ListItemText primary="Email" secondary={error === true? "Please input a valid email":""}/>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <TextField required id="outlined-basic" label="Email" variant="outlined" type="email" fullWidth
                            error={error === true? true:false} placeholder={error === true? "Please input a valid email":""} 
                            value={email} onChange={(event)=>{setEmail(event.target.value)}} />
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Button onClick={() => { onClickConfirmation() }} variant="contained">Confirm</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    );
  }
  else if(state === "view"){
    return(
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 12,
            pb: 6,
          }}
        >
          <Typography variant="h5" align="center" color="salmon" paragraph>
            Hello {email}!
          </Typography>
        </Box>
        <Typography variant="h6" align="center" color="salmon" paragraph>
          Ticket purchases
        </Typography>
        <Box sx={{ height: 400, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
          <DataGrid
            rows={ticketRows}
            columns={ticketColumns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
        <br/><br/>
        <Typography variant="h6" align="center" color="salmon" paragraph>
          Giftshop Purchases
        </Typography>
        <Box sx={{ height: 400, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
          <DataGrid
            rows={giftRows}
            columns={giftColumns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </main>
    );
  }
  else{
    return(
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 12,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="salmon"
              gutterBottom
            >
              Error
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              An error occured while handling your request, sorry!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              <Button href='/'>Go Home</Button>
            </Typography>
          </Container>
        </Box>
      </main>
    );
  }
}