import React, { useState, useEffect } from 'react';
import { getAllArtworks2, searchArtworks } from '../backend/Artworks.api';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function Artworks() {
  const [artworks, setArtworks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArtworks, setExpandedArtworks] = useState([]);

  useEffect(() => {
    fetchAllArtworks();
  }, []);

  const fetchAllArtworks = () => {
    getAllArtworks2()
      .then((data) => setArtworks(data))
      .catch((error) => console.error(error));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() !== '') {
      searchArtworks(query)
        .then((data) => setArtworks(data))
        .catch((error) => console.error(error));
    } else {
      fetchAllArtworks();
    }
  };

  const handleToggleExpand = (artworkId) => {
    setExpandedArtworks((prev) => {
      if (prev.includes(artworkId)) {
        return prev.filter((id) => id !== artworkId);
      } else {
        return [...prev, artworkId];
      }
    });
  };

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
            Art at Museum of Fine Arts Houston
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Embark on an exhilarating exploration through our extensive art inventory, where each stroke and hue unveils captivating stories of unparalleled beauty and creativity.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 4 }} maxWidth="md">
        <TextField
          label="Search Artworks"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Container>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Artworks
        </Typography>
        <Grid container spacing={4}>
          {artworks.map((artwork) => (
            <Grid item key={artwork.ArtworkID} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={artwork.Image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {artwork.Title}
                  </Typography>
                  <Button
                    onClick={() => handleToggleExpand(artwork.ArtworkID)}
                    size="small"
                  >
                    {expandedArtworks.includes(artwork.ArtworkID)
                      ? 'Hide Details'
                      : 'Show Details'}
                  </Button>
                  {expandedArtworks.includes(artwork.ArtworkID) && (
                    <div>
                      <Typography>{artwork.Description}</Typography>
                      <Typography>Artist: {artwork.ArtistName}</Typography>
                      <Typography>Medium: {artwork.Medium}</Typography>
                      <Typography>Dimensions: {artwork.Dimensions}</Typography>
                      <Typography>Style: {artwork.Style}</Typography>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
