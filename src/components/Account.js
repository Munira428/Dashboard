import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Munira');
  const [email, setEmail] = useState('munira@gmail.com');
  const [accountId, setAccountId] = useState('munira42');
  const auth = useAuth();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can implement logic to update the user's information, like making an API call.
  };

  const handleLogout = () => {
    auth.logout();
    // Redirect to the App component
    window.location.href = '/';
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="navy">
        Account
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {isEditing ? (
          <>
            <TextField
              required
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              label="Account ID"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Typography variant="subtitle1" gutterBottom color="navy">
              Name: {name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="navy">
              Email: {email}
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="navy">
              Account ID: {accountId}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Edit
            </Button>
          </>
        )}
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Account;
