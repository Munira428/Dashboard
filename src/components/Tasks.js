import React from 'react';
import { Typography, Container, List, ListItem, ListItemText, Button, Grid } from '@mui/material';

const tasks = [
  { task: 'Login', description: 'Login Page for users to login through the WebApp' },
  { task: 'Sign up', description: 'Signup Page to Register thereself' },
  { task: 'DashBoard', description: 'Dashboard where they can find ' },
  { task: 'Profile', description: 'Description of task 4' },
  { task: 'Project Members', description: 'Description of task 5' },
  { task: 'Tasks', description: 'Description of task 6' }
];

function Tasks() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={8}>
                <ListItemText primary={task.task} secondary={task.description} />
              </Grid>
              <Grid item xs={4}>
                {['Login', 'Sign up', 'DashBoard'].includes(task.task) ? (
                  <Button variant="contained" color="primary">
                    Complete
                  </Button>
                ) : (
                  <Button variant="contained" color="secondary">
                    Incomplete
                  </Button>
                )}
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Tasks;
