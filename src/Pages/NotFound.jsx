import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

//Not Found page

export default function NotFound() {
  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 12,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="salmon"
            gutterBottom
          >
            Not Found
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            The page you are looking for does not exist, sorry!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
          </Stack>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            <Button href='/'>Go Home</Button>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}