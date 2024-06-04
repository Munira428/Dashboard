import React from 'react';
import { Typography, Container, TextField, Box } from '@mui/material';

function Profile() {
  return (
    <Container>
      <Typography variant="h4" style={{ color: 'navy' }} gutterBottom>
        Profile
      </Typography>
      <Box sx={{ '& > :not(style) + :not(style)': { mt: 2 } }}>
        <TextField
          label="Name"
          variant="outlined"
          defaultValue="Munira Momin"
          fullWidth
          disabled
        />
        <TextField
          label="Gender"
          variant="outlined"
          defaultValue="Female"
          fullWidth
          disabled
        />
        <TextField
          label="Father's Name"
          variant="outlined"
          defaultValue="Sajid Momin"
          fullWidth
          disabled
        />
        <TextField
          label="Mobile No"
          variant="outlined"
          defaultValue="7892041819"
          fullWidth
          disabled
        />
        <TextField
          label="Email ID"
          variant="outlined"
          defaultValue="mominmunira@gmail.com"
          fullWidth
          disabled
        />
        <TextField
          label="You'r Occupation"
          variant="outlined"
          defaultValue="Software Engineer"
          fullWidth
          disabled
        />
        <TextField
          label="Current Company"
          variant="outlined"
          defaultValue="abc.pvt.ltd"
          fullWidth
          disabled
        />
        <TextField
          label="Category"
          variant="outlined"
          defaultValue="General"
          fullWidth
          disabled
        />
        <TextField
          label="Address"
          variant="outlined"
          defaultValue="Anand"
          fullWidth
          disabled
        />
        <TextField
          label="State"
          variant="outlined"
          defaultValue="Gujarat"
          fullWidth
          disabled
        />
        <TextField
          label="Department"
          variant="outlined"
          defaultValue="IT"
          fullWidth
          disabled
        />
      </Box>
    </Container>
  );
}

export default Profile;
