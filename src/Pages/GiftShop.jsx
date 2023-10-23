import * as React from 'react';
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

// Gift shop page, users can buy gifts

// When a user clicks add to cart, their cart will update to the number of items 
// At the top of the page, there should be a button for users to checkout, taking them to the checkout page
// When go to checkout is click, Checkout page is shown, user must input valid data then 
// After checkout, go to confirmation page
// Users can edit the items in their cart when they checkout

const cards = [1, 2, 3];

export default function GiftShop() {
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
							Items in cart: 0
						</Typography>
						<Button variant="contained">Proceed to Checkout</Button>
					</Stack>
        </Container>
      </Box>
      <Container maxWidth="md">
        {/* Here we map all of the avaliable Items */}
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
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item name
                  </Typography>
                  <Typography>
                    Description of Item
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}