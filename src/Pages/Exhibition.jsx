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
          >
            Exhibitions at Museum of Fine Arts Houston
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 4 }} maxWidth="md" align='center'> 
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Select the date you would like to visit and find active exhibits
        </Typography>
        <TextField
          id="select-date"
          label="Select Date"
          type="date"
          value={startDateFilter}
          onChange={(e) => handleDateFilter(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button disabled/>
        <Button variant="outlined" onClick={handleResetFilter}>
          Reset
        </Button>
      </Container>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {filteredExhibitions.map((exhibition) => (
            <Grid item key={exhibition._id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {exhibition.ExhibitionName}
                  </Typography>
                  <Typography>
                    Start Date: {exhibition.StartDate.substr(0, 10)}
                  </Typography>
                  <Typography>
                    End Date: {exhibition.EndDate.substr(0, 10)}
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

