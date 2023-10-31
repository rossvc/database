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

const cards = [
  {
    id: 1,
    heading: 'Renaissance Era',
    description: 'The Renaissance Era remains a pivotal period in the history of art, marked by a resurgence of creative energy, a profound appreciation for the human experience, and the exploration of new techniques and ideas that have left an enduring legacy in the world of art and culture.',
    imageUrl: 'https://cdn.thecollector.com/wp-content/uploads/2023/08/when-was-the-early-high-late-renaissance-art-period.jpg?width=1080&quality=70',
  },
  {
    id: 2,
    heading: 'Eastern Asia',
    description: 'Each region within Eastern Asia has its unique artistic expressions, techniques, and cultural influences, making it a rich and continually evolving part of global artistic heritage.',
    imageUrl: 'http://img1.xixik.com/cimg/099/xixik_b4e0f49cd4b606dd.jpg',
  },
  {
    id: 3,
    heading: 'Middle Eastern',
    description: 'Middle Eastern art is a testament to the diverse cultures, histories, and influences found in the region. It continues to evolve, preserving its rich traditions while embracing contemporary perspectives and themes.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSql2NbY3Ltg9WqkBrP8QHvORCZ-SYZLbrZ355msPMMyw&s',
  },
  {
    id: 4,
    heading: 'American Civil War',
    description: 'Art from the Civil War era captures the profound social, political, and emotional turmoil of this period in American history. It provides a valuable visual record of the events, individuals, and issues that shaped the nation during this pivotal time.',
    imageUrl: 'https://www.artst.org/wp-content/uploads/2021/06/Guerrilla-Warfare-Alfred-Bierstadt.jpg.webp',
  },
  {
    id: 5,
    heading: 'Medieval Age',
    description: 'Medieval art reflects the religious devotion, craftsmanship, and cultural expressions of the era. It serves as a window into the deeply spiritual and symbolic world of the Middle Ages, capturing the essence of a society where faith, craftsmanship, and community played central roles in artistic creation.',
    imageUrl: 'https://blog.singulart.com/wp-content/uploads/2019/09/The_Garden_of_Earthly_Delights_by_Bosch_center.jpg',
  },
  {
    id: 6,
    heading: 'Primal Age',
    description: 'Primal age art offers a fascinating glimpse into the creative and spiritual world of our ancient ancestors. It reflects their connection to the natural world, their reliance on hunting and gathering, and their efforts to convey their experiences, beliefs, and cultural traditions through visual expression. These artworks continue to intrigue and inspire modern viewers, serving as a link to our shared human heritage.',
    imageUrl: 'https://www.touropia.com/gfx/b/2010/04/altamira_cave-2.jpg',
  },
];

export default function Exhibition() {
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
            Welcome to Museum of Fine Arts Houston
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Welcome to the Museum of Fine Arts, Houston. I hope you find mfah.org an inspiring guide 
            to the wonderful experiences in store for you at the Museum, and I invite you to explore 
            all of the exceptional exhibitions, installations, and virtual programming.
          </Typography>
        </Container>
      </Box>

      {/* Exhibitions */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Exhibitions
        </Typography>
        <Grid container spacing={4}>
          {cards.slice(0, 3).map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={card.imageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Upcoming exhibitions */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Upcoming Exhibitions
        </Typography>
        <Grid container spacing={4}>
          {cards.slice(3).map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={card.imageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

