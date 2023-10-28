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

// Admissions page, should show ticket info and other stuff
// 3 stages:
// Store front: users can buy different tickets, add them to cart
// Checkout: Users can delete items the no longer want, must input email to recieve recipt
// Confirmation: If all goes well, user will see a confirmation page that will redirect them to the front page, else, they will get an error page

// TODO LATER: Once database logic is in. Fix this to include database data, Add email confirmation function
// TODO: add database logic, add order getter page to allow users to get orders 

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
  //console.log('render');
  const [cart, setCart] = useState([]); // Stores items in cart
  const [state, setState] = useState("default"); // handles what view we have, default, checkout, confirmation
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  
  const onClickButton = async (card, type) => {
    // Store each ticket in cart, be lazy, just store each one and price, add up price at checkout 
    //console.log(card, type);
    setCart([...cart, {key:cart.length, title:cardContent[card]["title"], type:type, price:cardContent[card][type]}]);
    // console.log(cart);
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
              Check out your email inbox for your ticket receipt. See you soon!
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