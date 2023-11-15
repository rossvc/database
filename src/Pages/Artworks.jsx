import React, { useState, useEffect } from 'react';
import { getAllArtworks } from '../backend/Artworks.api'; // Import API functions
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// Fetch artwork data when the component mounts
// Use API function to get artworks
export default function Artworks() {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchArtworksData(); 
  }, []);

  const fetchArtworksData = async () => {
    try {
      const data = await getAllArtworks(); 
      setArtworks(data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArtworks = artworks.filter((artwork) => {
    return (
      artwork.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.Description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <main>
      <Container sx={{ py: 4 }} maxWidth="md">
        <TextField
          label="Search Artworks"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
        />
      </Container>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={4}>
          {artworks.map((artwork) => (
            <Grid item key={artwork.ArtworkID} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={artwork.imageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <h2>{artwork.Title}</h2>
                  <p>{artwork.Description}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}



// import React, { useState, useEffect } from 'react';
// import { fetchArtworks } from '../backend/connection.Api'; // Import the API function
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// export default function Artworks() {
//   const [artworks, setArtworks] = useState([]);
//   const [filter, setFilter] = useState('All');

//   useEffect(() => {
//     // Fetch artwork data when the component mounts
//     fetchArtworks()
//       .then((data) => setArtworks(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const filteredArtworks = artworks.filter((artwork) => {
//     return filter === 'All' || artwork.Style === filter;
//   });

//   return (
//     <main>
//       <Box
//         sx={{
//           bgcolor: 'background.paper',
//           pt: 12,
//           pb: 6,
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography
//             component="h1"
//             variant="h2"
//             align="center"
//             color="salmon"
//             gutterBottom
//           >
//             Welcome to Museum of Fine Arts Houston
//           </Typography>
//           <Typography variant="h5" align="center" color="text.secondary" paragraph>
//             Welcome to the Museum of Fine Arts, Houston. I hope you find mfah.org an inspiring guide 
//             to the wonderful experiences in store for you at the Museum, and I invite you to explore 
//             all of the exceptional exhibitions, installations, and virtual programming.
//           </Typography>
//         </Container>
//       </Box>

//       {/* Filter Buttons */}
//       <Container sx={{ py: 4 }} maxWidth="md">
//         <div>
//           <Button onClick={() => setFilter('All')}>All</Button>
//           <Button onClick={() => setFilter('Renaissance Era')}>Renaissance Era</Button>
//           <Button onClick={() => setFilter('Eastern Asia')}>Eastern Asia</Button>
//           <Button onClick={() => setFilter('Middle East')}>Middle East</Button>
//           <Button onClick={() => setFilter('Upcoming')}>Upcoming Artworks</Button>
//         </div>
//       </Container>

//       {/* Artworks */}
//       <Container sx={{ py: 4 }} maxWidth="md">
//         <Typography variant="h5" color="salmon" paragraph>
//           Artworks
//         </Typography>
//         <Grid container spacing={4}>
//           {filteredArtworks.map((artwork) => (
//             <Grid item key={artwork.ArtworkID} xs={12} sm={6} md={4}>
//               <Card
//                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//               >
//                 <CardMedia
//                   component="div"
//                   sx={{
//                     // 16:9
//                     pt: '56.25%',
//                   }}
//                   image={artwork.imageUrl}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {artwork.Title}
//                   </Typography>
//                   <Typography>
//                     {artwork.Description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </main>
//   );
// }

