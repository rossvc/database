import React, { useState, useEffect } from 'react';
import { getAllExhibitions2, resetAllValues } from '../backend/Exhibition.api';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function Exhibition() {
  const [exhibitions, setExhibitions] = useState([]);
  const [filteredExhibitions, setFilteredExhibitions] = useState([]);
  const [startDateFilter, setStartDateFilter] = useState('');

  useEffect(() => {
    handleResetFilter(); // Fetch data initially after mounting
  }, []);

  const fetchAllExhibitions = (startDate = '') => {
    getAllExhibitions2(startDate)
      .then((data) => {
        setExhibitions(data.data);
        setFilteredExhibitions(data.data);
      })
      .catch((error) => console.error(error));
  };

  const handleDateFilter = (date) => {
    setStartDateFilter(date);
    getAllExhibitions2(date)
      .then((data) => {
        setFilteredExhibitions(data.data);
      })
      .catch((error) => console.error(error));
  };

  const handleResetFilter = () => {
    setStartDateFilter('');
    resetAllValues()
      .then((data) => {
        setExhibitions(data.data);
        setFilteredExhibitions(data.data);
      })
      .catch((error) => console.error(error));
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
            Welcome to Museum of Fine Arts Houston
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Welcome to the Museum of Fine Arts, Houston. I hope you find mfah.org an inspiring guide 
            to the wonderful experiences in store for you at the Museum, and I invite you to explore 
            all of the exceptional exhibitions, installations, and virtual programming.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 4 }} maxWidth="md">
        <TextField
          id="start-date"
          label="Start Date"
          type="date"
          value={startDateFilter}
          onChange={(e) => handleDateFilter(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Container>

      <Container sx={{ py: 2 }} maxWidth="md">
        <Button variant="outlined" onClick={handleResetFilter}>
          Reset
        </Button>
      </Container>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h5" color="salmon" paragraph>
          Exhibitions
        </Typography>
        <Grid container spacing={4}>
          {filteredExhibitions.map((exhibition) => (
            <Grid item key={exhibition._id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={exhibition.imageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {exhibition.ExhibitionName}
                  </Typography>
                  <Typography>
                    Start Date: {exhibition.StartDate}
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

