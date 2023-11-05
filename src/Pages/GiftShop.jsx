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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { getAllGiftShopItems } from '../backend/GiftShop.api';

// Gift shop page, users can buy gifts
// 3 stages:
// Store front: users can buy different items, add them to cart
// Checkout: Users can delete items the no longer want, must input email to recieve recipt
// Confirmation: If all goes well, user will see a confirmation page that will redirect them to the front page, else, they will get an error page

// TODO: Add feature to change stock when items are purchased, add page to allow users to view their orders, Add email confirmation function

const data = await getAllGiftShopItems();

var increment = 1; 
var cardContent = {} // "Price", "Image", "ItemName"
for(let d of data){
  //console.log(increment,d);
  cardContent[increment] = d;
  increment+=1;
}

const cards = Array(increment-1).fill(1).map((n, i) => n + i);

export default function GiftShop() {
  //console.log('render');
  const [cart, setCart] = useState([]); // Stores items in cart
  const [state, setState] = useState("default"); // handles what view we have, default, checkout, confirmation
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [giftShopItems, setGiftShopItems] = useState([]);
  
  const onClickButton = async (card, price) => {
    // Store each ticket in cart, be lazy, just store each one and price, add up price at checkout 
    //console.log(card, type);
    setCart([...cart, {key:cart.length, title:cardContent[card]["ItemName"], price:price }]);
    //console.log(cart);
  };

  const onClickCheckout = async () => {
    if(cart.length !== 0){
      setState("checkout");
      //console.log(state);
    }
  };

  const onClickConfirmation = async () => {
    setError(false);
    var validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(email !== "" && validRegex.test(email)){
      // console.log(cart);
      setState("confirmation");
      //console.log(state);
    }
    else{ setError(true); }
  };

  const deleteItem = async (key) => {
    console.log(cart.key = key);
    const updatedCart = cart.filter(item => item.key !== key);
    setCart(updatedCart);
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
            Gift Shop 
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Take a piece of the Museum of Fine Arts, Houston home with you!
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
                    image={cardContent[card]["Image"]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cardContent[card]["ItemName"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => { onClickButton(card, cardContent[card]["Price"]) }} size="small">${cardContent[card]["Price"]} - Add to Cart</Button>
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
                  <IconButton onClick={() => {deleteItem(item.key)}}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  ${cart.reduce((n, {price}) => n + price, 0)}
                </Typography>
              </ListItem>
              <br/><br/>
              <ListItem sx={{ py: 1, px: 0 }}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={3}>
                  <ListItemText primary="Email" secondary={error === true? "Please input a valid email":""}/>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                  <TextField required id="outlined-basic" label="Email" variant="outlined" type="email" fullWidth
                              error={error === true? true:false} placeholder={error === true? "Please input a valid email":""} 
                              value={email} onChange={(event)=>{setEmail(event.target.value)}} />
                </Grid>
                </Grid>
              </ListItem>
            </List>
            <br/>
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
              Checkout your email inbox for ticket receipt. Come back soon!
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