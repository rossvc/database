import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

//Not Authorized page

export default function NotAuthorized() {
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
            Not Authorized
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            You do not have the right credentials to access this page, please log in or use a differnet login.
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