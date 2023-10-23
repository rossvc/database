import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Admissions page, should show ticket info and other stuff

// We will hard code admission ticket details into code, add it to database, can add database logic on another file

// At the top of the page, there should be a button for users to checkout, taking them to the checkout page
// When go to checkout is click, Checkout page is shown, user must input valid data then 
// After checkout, go to confirmation page
// Users can edit the items in their cart when they checkout

//TODO LATER: Once database logic is in. Fix this to include database data

const cards = [1, 2, 3, 4]; 
const cardContent = {
  1:{"title": "General Admission", "description":"Get access to select pieces housed at MFAH", "adult":12, "child":8, 
    "image":"https://www.gallerysystems.com/wp-content/uploads/MFAH.Beck-View-S-Interior.jpg" },
  2:{"title": "Christmas Exhibit", "description":"Get access to general admission and the Christmas Exhibit", "adult":16, "child":11, 
    "image":"https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/1576587435737-35YCMHJC3F16V823WDX8/DSvh004915-JPG-Powerpoint-1500px-300dpi.jpg?format=2500w"},
  3:{"title": "Bayou Bend Exhibit", "description":"Get access to general admission and the Bayou Bend Exhibit", "adult":16, "child":11, 
    "image":"https://static.mfah.com/images/bayou-bend.13352912055242948009.jpg?width=1024"},
  4:{"title": "All Exhibits", "description":"Get access to general admission and all exhibits at MFAH", "adult":25, "child":18, 
    "image":"https://assets.simpleviewinc.com/simpleview/image/upload/crm/houston/Audrey-Jones-Beck-Building-interior-Photo-by-Jenny-Antill-0d329b5e9dae462_0d329dda-95cb-6317-c3eb33fa87f570b0.jpg"}
};

export default function Admission() {
  console.log('render');
  const [cart, setCart] = useState([]); // Stores items in cart
  const [state, setState] = useState("default"); // handles what view we have, default, checkout, confirmation
  
  const onClickButton = async (card, type) => {
    // Store each ticket in cart, be lazy, just store each one and price, add up price at checkout 
    //console.log(card, type);
    setCart([...cart, {key:cart.length, title:cardContent[card]["title"], type:type, price:cardContent[card][type]}]);
    console.log(cart);
  };

  const onClickCheckout = async () => {
    if(cart.length !== 0){
      setState("checkout");
      //console.log(state);
    }
  };

  const onClickConfirmation = async () => {
    if(cart.length !== 0){
      setState("confirmation");
      //console.log(state);
    }
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
              component="h1"
              variant="h2"
              align="center"
              color="salmon"
              gutterBottom
            >
              Admissions
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Explore the main campus of the Museum of Fine Arts, Houston, housing permanent 
              collections of art from every era of history and all seven continents, plus special exhibitions.
            </Typography>
            <br/>
            <Typography variant="h6" align="center" color="text.secondary">
              Click either Adult or Child to add a ticket to your cart, you can edit your selections at checkout
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Items in cart: {cart.length}
              </Typography>
              <Button onClick={() => { onClickCheckout() }} variant="contained">Proceed to Checkout</Button>
            </Stack>
            
          </Container>
        </Box>
        <Container maxWidth="md">
          {/* Here we map all of the avaliable tickets, hard code it into App */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={cardContent[card]["image"]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cardContent[card]["title"]}
                    </Typography>
                    <Typography>
                      {cardContent[card]["description"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => { onClickButton(card, "adult") }} size="small">Adult</Button>
                    <Button onClick={() => { onClickButton(card, "child") }} size="small">Child</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    );
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(state === "checkout"){ //Add email input
    return(
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 12,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h6" align='center'gutterBottom>
              Order summary
            </Typography>
            <List>
              {cart.map((item) => (
                <ListItem key={item.key} sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={item.title} secondary={item.type}/>
                  <Typography variant="body2">{item.price}</Typography>
                </ListItem>
              ))}
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {cart.reduce((n, {price}) => n + price, 0)}
                </Typography>
              </ListItem>
            </List>
            <Button onClick={() => { onClickConfirmation() }} variant="contained">Confirm</Button>
          </Container>
        </Box>
      </main>
    );
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(state === "confirmation"){
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
              Success!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Checkout your email inbox for ticket receipt. See you soon!
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
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
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