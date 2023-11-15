import React, { useState, useEffect } from 'react';
import { getAllExhibitions } from '../backend/Exhibition.api'; // Updated import for the API file
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Exhibition() {
  const [exhibitions, setExhibitions] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Fetch exhibition data when the component mounts
    getAllExhibitions()
      .then((data) => setExhibitions(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredExhibitions = exhibitions.filter((exhibition) => {
    return filter === 'All' || exhibition.ExhibitionName === filter;
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
          <Button onClick={() => setFilter('Exhibition 1')}>Exhibition 1</Button>
          <Button onClick={() => setFilter('Exhibition 2')}>Exhibition 2</Button>
          {/* Add more filter buttons for different exhibition names */}
        </div>
      </Container>

      {/* Exhibitions */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Exhibitions
        </Typography>
        <Grid container spacing={4}>
          {filteredExhibitions.map((exhibition) => (
            <Grid item key={exhibition.ExhibitionID} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={exhibition.imageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {exhibition.ExhibitionName}
                  </Typography>
                  <Typography>
                    {exhibition.Description}
                  </Typography>
                  <Typography>
                    Start Date: {exhibition.StartDate}
                  </Typography>
                  <Typography>
                    End Date: {exhibition.EndDate}
                  </Typography>
                  <Typography>
                    Location: {exhibition.Location}
                  </Typography>
                  <Typography>
                    Artworks Included: {exhibition.ArtworksIncluded}
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


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// export default function Exhibition() {
//   const [exhibitions, setExhibitions] = useState([]);

//   useEffect(() => {
//     const fetchExhibitions = async () => {
//       try {
//         const response = await axios.get('https://ross.fail:3001/exhibitions');
//         setExhibitions(response.data);
//       } catch (error) {
//         console.error('Error fetching exhibitions:', error);
//       }
//     };

//     fetchExhibitions();
//   }, []);

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

//       <Container sx={{ py: 8 }} maxWidth="md">
//         <Typography variant="h5" color="salmon" paragraph>
//           Exhibitions
//         </Typography>
//         <Grid container spacing={4}>
//           {exhibitions.map((exhibition) => (
//             <Grid item key={exhibition.ExhibitionID} xs={12} sm={6} md={4}>
//               <Card
//                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//               >
//                 <CardMedia
//                   component="div"
//                   sx={{
//                     pt: '56.25%',
//                   }}
//                   image={exhibition.imageUrl}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {exhibition.ExhibitionName}
//                   </Typography>
//                   <Typography>
//                     {exhibition.Description}
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
