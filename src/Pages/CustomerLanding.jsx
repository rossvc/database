import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import { getCustomerRecepits } from '../backend/Customer.api';

//Receipt page

// Here customers can use their email address to get a list of all of their purchases, including ticket sales and giftshop sales
// They will be grouped by order



const ticketColumns = [
  { field: 'SaleType', headerName: 'Purchase Made', width: 200, },
  { field: 'PurchaseDate', headerName: 'Sale Date', width: 250, },
  { field: 'PurchaseAmount', headerName: 'Sale Amount', width: 300, },
  { field: 'TicketPaymentMethod', headerName: 'Payment Method', width: 300, }
];

var user = JSON.parse(sessionStorage.getItem("currentUser")) || { 'Email': "" };

if (user && user.Email) {
  var recipts = await getCustomerRecepits(user.Email);

  var increment = 1;
  for (let r of recipts) {
    r.id = increment;
    r.PurchaseDate = r.PurchaseDate.substr(0, 10);
    increment += 1;
  }
} else {
  var recipts = [];
}

export default function CustomerLanding(props) {
  if(props.isLoggedIn){
    return(
      <>
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
            Welcome Back {user["FirstName"]}!
          </Typography>
        </Container>
        <Container maxWidth="md" align='center'>
          <Typography variant="h6" align="center" color="salmon" paragraph>
            Recent Purchases
          </Typography>
          <DataGrid
              rows={recipts}
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
        </Container>
      </Box>
  
      </main>
      </>
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
              Please try again.
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