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

// Admissions page, should show ticket info and other stuff

// We will hard code admission ticket details into code, add it to database, can add database logic on another file

// User can click on ticket, get sent to checkout page, will only be able to pay for one exhbit at a time

const cards = [1, 2, 3];

export default function Admission() {
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
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
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
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Admission Name
                  </Typography>
                  <Typography>
                    Description of admissions
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Adult</Button>
                  <Button size="small">Child</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}