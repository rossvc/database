import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getAllArtworks } from '../backend/Artworks.api';
import { getAllExhibits } from '../backend/Exhibit.api';

// Front page should show general information of our musuem 

const cards = [1, 2, 3];
const artworks = await getAllArtworks();
const artCardContent = {}
var increment = 1; // so objects have a key
for (let i = artworks.length - 1; i >= 0 && increment <= 3; i--) { //last 3 items from call
  artCardContent[increment] = artworks[i];
  increment += 1;
}

const exhibits = await getAllExhibits();
const exhibitCardContent = {}
increment = 1; // so objects have a key
for (let i = exhibits.length - 1; i >= 0 && increment <= 3; i--) { //last 3 items from call
  exhibitCardContent[increment] = exhibits[i];
  increment += 1;
}

export default function FrontPage() {
  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 12,
          pb: 6,
          backgroundImage: 'url("https://a.travel-assets.com/findyours-php/viewfinder/images/res70/23000/23692-Houston-Museum-Of-Fine-Arts.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
          >
            Welcome to Museum of Fine Arts Houston
          </Typography>
          <Typography variant="h5" align="center" color="white" paragraph>
            Welcome to the Museum of Fine Arts, Houston. I hope you find mfah.org an inspiring guide 
            to the wonderful experiences in store for you at the Museum, and I invite you to explore 
            all of the exceptional exhibitions, installations, and virtual programming.
          </Typography>
        </Container>
      </Box>
        <br/><br/>
      {/*Upcoming events*/}
      <Container maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Upcoming Events
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {exhibitCardContent[card]["ExhibitionName"]}
                  </Typography>
                  <Typography>
                    {exhibitCardContent[card]["Description"]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/*Recent Additions*/}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Recent Additions
        </Typography>
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
                  image={artCardContent[card]["Image"]}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {artCardContent[card]["Title"]}
                  </Typography>
                  <Typography>
                    {artCardContent[card]["Description"]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </main>
  );
}