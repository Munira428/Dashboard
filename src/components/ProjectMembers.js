import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const members = [
  { name: 'Munira', email: 'munira@example.com', phone: '7802041819' },
  { name: 'mahima', email: 'mahima@example.com', phone: '7802041819' }
];

function ProjectMembers() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Project Members
      </Typography>
      <List>
        {members.map((member, index) => (
          <ListItem key={index}>
            <ListItemText primary={member.name} secondary={`Email: ${member.email} | Phone: ${member.phone}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ProjectMembers;
