import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const cards = [//organize by style
  {
    ArtworkID: 'AW000001',
    ArtistID: 'AR12345',
    Title: 'Mona Lisa',
    ArtworkLocation: 'XXXXX',
    Description: 'The "Mona Lisa" is one of the most iconic and renowned artworks in the world, created by the Italian Renaissance master, Leonardo da Vinci. Painted between 1503 and 1506, it is also known as "La Gioconda" in Italian. The painting is celebrated for several notable features:',
    CollectionID: 'COL001',
    ExhibitionID: 'EXH001',
    Medium: 'Oil on Canvas',
    Dimensions: '30.3" x 20.9"',
    Style: 'Renaissance Era',
    SuppliedBy: 'SUP001',
    AcquisitionDate: '2023-10-25',
    imageUrl: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa0734f6e-14e3-11e9-94cd-1357d20693b3.jpg?crop=2240%2C2240%2C610%2C274',
  },
  {
    ArtworkID: 'AW000002',
    ArtistID: 'AR12345',
    Title: 'The Birth of Venus',
    ArtworkLocation: 'XXXXX',
    Description: '"The Birth of Venus" is a quintessential example of classical themes, emphasis on humanism, and mastery of artistic techniques. It remains a beloved and influential work in the history of art.',
    CollectionID: 'COL001',
    ExhibitionID: 'EXH001',
    Medium: 'Oil on Canvas',
    Dimensions: '24" x 36"',
    Style: 'Renaissance Era',
    SuppliedBy: 'SUP001',
    AcquisitionDate: '2023-10-25',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
  },
  {
    ArtworkID: 'AW000003',
    ArtistID: 'AR12345',
    Title: 'Along the River During Qingming Festival',
    ArtworkLocation: 'XXXXX',
    Description: '"Along the River During Qingming Festival" is a remarkable example of Chinese scroll painting, renowned for its rich historical and cultural significance, attention to detail, and the way it provides a window into the daily life of ancient China during the Song Dynasty.',
    CollectionID: 'COL001',
    ExhibitionID: 'EXH001',
    Medium: 'Oil on Canvas',
    Dimensions: '24" x 36"',
    Style: 'Eastern Asia',
    SuppliedBy: 'SUP001',
    AcquisitionDate: '2023-10-25',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%BE.jpg',
  },
  {
    ArtworkID: 'AW000004',
    ArtistID: 'AR54321',
    Title: 'The Great Wave off Kanagawa',
    ArtworkLocation: 'XXXXX',
    Description: 'This woodblock print is celebrated for its dramatic portrayal of the forces of nature, the enduring appeal of Mount Fuji, and its status as a symbol of Japanese artistic achievement. It continues to be admired and appreciated by art enthusiasts and the general public worldwide.',
    CollectionID: 'COL002',
    ExhibitionID: 'EXH002',
    Medium: 'Sculpture',
    Dimensions: '12" x 12" x 24"',
    Style: 'Eastern Asia',
    SuppliedBy: 'SUP002',
    AcquisitionDate: '2023-09-15',
    imageUrl: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/45434/134438/main-image',
  },
  {
    ArtworkID: 'AW000005',
    ArtistID: 'AR54321',
    Title: 'The Young Emir Studying',
    ArtworkLocation: 'XXXXX',
    Description: 'painted by the prominent Ottoman artist Osman Hamdi Bey in the late 19th century, is a masterpiece of Orientalist art. The painting depicts a young and educated emir, dressed in traditional Ottoman attire, who is deeply engrossed in studying a manuscript or a book. The setting is a beautifully adorned room with rich fabrics and intricate Islamic geometric patterns.',
    CollectionID: 'COL002',
    ExhibitionID: 'EXH002',
    Medium: 'Sculpture',
    Dimensions: '12" x 12" x 24"',
    Style: 'Middle East',
    SuppliedBy: 'SUP002',
    AcquisitionDate: '2023-09-15',
    imageUrl: 'https://islamicartsmagazine.com/images/uploads/blog/Osman_Hamdi_Bey_940.jpg',
  },
  {
    ArtworkID: 'AW000006',
    ArtistID: 'AR54321',
    Title: 'The Blue Window',
    ArtworkLocation: 'XXXXX',
    Description: 'is a renowned painting by the Egyptian artist Mahmoud Said. Created in 1929, it is considered a masterpiece of Egyptian modernist art. The painting depicts an Arab woman in a traditional setting, standing by a window with blue wooden shutters. ',
    CollectionID: 'COL002',
    ExhibitionID: 'EXH002',
    Medium: 'Sculpture',
    Dimensions: '12" x 12" x 24"',
    Style: 'Middle East',
    SuppliedBy: 'SUP002',
    AcquisitionDate: '2023-09-15',
    imageUrl: 'https://www.moma.org/d/assets/W1siZiIsIjIwMjIvMDQvMjcvMWpwMWRob3RkaV8yNzNfMTkzOV9DQ0NSX0Z1bGxfc2l6ZV9KUEVHLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/273_1939_CCCR-Full%20size%20JPEG.jpg?sha=be4f32aa324600d9',
  },
  {
    ArtworkID: 'AW000007',
    ArtistID: 'AR67890',
    Title: 'The Garden of Earthly Delights',
    ArtworkLocation: 'XXXXX',
    Description: ' "The Garden of Earthly Delights" is a triptych painting created by the Netherlandish artist Hieronymus Bosch during the late 15th century. This complex and enigmatic work is known for its surreal and imaginative depiction of heaven, Earth, and hell.',
    CollectionID: 'COL003',
    ExhibitionID: 'EXH003',
    Medium: 'Watercolor on Paper',
    Dimensions: '18" x 24"',
    Style: 'Upcoming',
    SuppliedBy: 'SUP003',
    AcquisitionDate: '2023-11-05',
    imageUrl: 'https://blog.singulart.com/wp-content/uploads/2019/09/The_Garden_of_Earthly_Delights_by_Bosch_center.jpg',
  },
  {
    ArtworkID: 'AW000008',
    ArtistID: 'AR67890',
    Title: 'Lascaux Cave Paintings',
    ArtworkLocation: 'XXXXX',
    Description: ' The Lascaux Cave Paintings are a series of prehistoric paintings found in the Lascaux Cave complex in southwestern France. These paintings date back to the Upper Paleolithic period, approximately 17,000 years ago, and are considered one of the most significant examples of ancient cave art.',
    CollectionID: 'COL003',
    ExhibitionID: 'EXH003',
    Medium: 'Watercolor on Paper',
    Dimensions: '18" x 24"',
    Style: 'Upcoming',
    SuppliedBy: 'SUP003',
    AcquisitionDate: '2023-11-05',
    imageUrl: 'https://www.bradshawfoundation.com/lascaux/gallery/lascaux3b.jpg',
  },
  {
    ArtworkID: 'AW000009',
    ArtistID: 'AR67890',
    Title: 'Guerrilla Warfare',
    ArtworkLocation: 'XXXXX',
    Description: '"Guerrilla Warfare" art from the Civil War era provides valuable insights into the artistic response to a turbulent period in American history. It captures the heroism, the tragedy, and the broader social and political implications of a conflict that left an indelible mark on the nation.',
    CollectionID: 'COL003',
    ExhibitionID: 'EXH003',
    Medium: 'Canvas painting',
    Dimensions: '18" x 24"',
    Style: 'Upcoming',
    SuppliedBy: 'SUP003',
    AcquisitionDate: '2023-11-05',
    imageUrl: 'https://www.artst.org/wp-content/uploads/2021/06/Guerrilla-Warfare-Alfred-Bierstadt.jpg.webp',
  },
  // Add more cards here as needed
];

export default function Artworks() {
  const [filter, setFilter] = useState('All');

  const filteredCards = cards.filter((card) => {
    return filter === 'All' || card.Style === filter;
  });

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

      {/* Filter Buttons */}
      <Container sx={{ py: 4 }} maxWidth="md">
        <div>
          <Button onClick={() => setFilter('All')}>All</Button>
          <Button onClick={() => setFilter('Renaissance Era')}>Renaissance Era</Button>
          <Button onClick={() => setFilter('Eastern Asia')}>Eastern Asia</Button>
          <Button onClick={() => setFilter('Middle East')}>Middle East</Button>
          <Button onClick={() => setFilter('Upcoming')}>Upcoming Artworks</Button>
        </div>
      </Container>

      {/* Exhibitions */}
      <Container sx={{ py: 4 }} maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Exhibitions
        </Typography>
        <Grid container spacing={4}>
          {filteredCards.map((card) => (
            <Grid item key={card.ArtworkID} xs={12} sm={6} md={4}>
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
                    {card.Title}
                  </Typography>
                  <Typography>
                    {card.Description}
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
