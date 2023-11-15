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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { getAllTickets } from '../backend/TicketTypes.api';
import { addTicketSale } from '../backend/TicketSales.api';

// Admissions page, should show ticket info and other stuff
// 3 stages:
// Store front: users can buy different tickets, add them to cart
// Checkout: Users can delete items the no longer want, must input email to recieve recipt
// Confirmation: If all goes well, user will see a confirmation page that will redirect them to the front page, else, they will get an error page

const data = await getAllTickets();
// console.log(data);

var increment = 1; 
var cardContent = {} // "AdultTicketPrice", "ChildTicketPrice", "TicketImage", "TicketName", "TicketTypeID", "Description"
for(let d of data){
  //console.log(increment,d);
  cardContent[increment] = d;
  increment+=1;
}

const cards = Array(increment-1).fill(1).map((n, i) => n + i);

export default function Admission(props) {
  //console.log('render');
  const [cart, setCart] = useState([]); // Stores items in cart
  const [state, setState] = useState("default"); // handles what view we have, default, checkout, confirmation
  const [error, setError] = useState(false);
  const [payment, setPayment] = useState('');

  const onClickButton = async (card, type) => {
    // Store each ticket in cart, be lazy, just store each one and price, add up price at checkout 
    setCart([...cart, {key:cart.length, title:cardContent[card]["TicketName"], type:type, price:cardContent[card][type], item: cardContent[card]}]);
    // console.log(cart);
  };

  const onClickCheckout = async () => {
    if(cart.length !== 0){
      setState("checkout");
    }
    console.log(cart[0].item);
    console.log(cart.reduce((n, {price}) => n + price, 0));
  };

  const onClickConfirmation = async () => {
    // check if user is logged in
    setError(false);
    if(props.isLoggedIn === true && payment != ''){
      //check out their order
      let today = new Date().toISOString().split('T')[0];

      const orderSummary = { // fix later
        CustomerID: props.user.CustomerID,
        EmployeeID: 12,
        PurchaseDate: today,
        TicketDate: cart[0].item.TicketDate.substr(0, 10),
        PurchaseAmount: cart.reduce((n, {price}) => n + price, 0),
        TicketPaymentMethod: payment,
        TicketTypeID: cart[0].item.TicketTypeID
      };
      //console.log(orderSummary);
      const response = await addTicketSale(orderSummary);
      //console.log(response);

      if (response === true) {
        setState("confirmation");
      } else {
        setState("error");
      }
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
                    image={cardContent[card]["TicketImage"]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cardContent[card]["TicketName"]}
                    </Typography>
                    <Typography>
                      {cardContent[card]["Description"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => { onClickButton(card, "AdultTicketPrice") }} size="small">Adult - ${cardContent[card]["AdultTicketPrice"]}</Button>
                    <Button onClick={() => { onClickButton(card, "ChildTicketPrice") }} size="small">Child - ${cardContent[card]["ChildTicketPrice"]}</Button>
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
                  <ListItemText primary={item.title} secondary={ item.type === 'AdultTicketPrice' ? 'Adult': 'Child'}/>
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
                {props.isLoggedIn === true ? (
                  <>
                  <ListItemText primary="Payment Type" />
                  <ToggleButtonGroup
                    value={payment}
                    exclusive
                    aria-label="text alignment"
                  >
                    <ToggleButton onClick={() => setPayment('Cash')} value="Cash" aria-label="left aligned">
                      Cash
                    </ToggleButton>
                    <ToggleButton onClick={() => setPayment('Credit Card')} value="Credit Card" aria-label="centered">
                      Credit Card
                    </ToggleButton>
                  </ToggleButtonGroup>
                  </>
                ) : (
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Please login before proceeding
                  </Typography>
                )}
              </ListItem>
            </List>
            <br/>
            <Button onClick={() => { setState('default') }} variant="contained">Go back</Button>
            <Button disabled/>
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
              Check your account to see your recent purchase. See you soon!
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