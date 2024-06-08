import React, { useState } from 'react';
import { Typography, Container, List, ListItem, ListItemText, TextField, Button, Grid } from '@mui/material';

const initialMember = {
  name: '',
  email: '',
  phone: ''
};

function ProjectMembers() {
  const [members, setMembers] = useState([
    { name: 'Munira', email: 'munira@gmail.com', phone: '7802222819' },
    { name: 'Mahima', email: 'mahima@gmail.com', phone: '7802222819' },
    { name: 'Diya', email: 'mahima@gmail.com', phone: '7802222819' }
  ]);

  const [newMember, setNewMember] = useState({ ...initialMember });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = () => {
    setMembers([...members, { ...newMember }]);
    setNewMember({ ...initialMember });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="navy">
        Project Members
      </Typography>
      <List>
        {members.map((member, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={<Typography variant="body1" style={{ color: 'navy' }}>{`${index + 1}. ${member.name}`}</Typography>}
              secondary={<Typography variant="body2" style={{ color: 'navy' }}>{`Email: ${member.email} | Phone: ${member.phone}`}</Typography>}
            />
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Name"
            name="name"
            value={newMember.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Email"
            name="email"
            value={newMember.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Phone"
            name="phone"
            value={newMember.phone}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddMember}>
            Add Member
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProjectMembers;
