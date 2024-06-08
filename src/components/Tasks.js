import React, { useState } from 'react';
import { Typography, Container, List, ListItem, ListItemText, Button, Grid, TextField } from '@mui/material';

const initialTasks = [
  { task: 'Login', description: 'Login Page for users to login through the WebApp', completed: false },
  { task: 'Sign up', description: 'Signup Page to Register themselves', completed: false },
  { task: 'DashBoard', description: 'Dashboard where they can find', completed: false },
  { task: 'Profile', description: 'Description of task 4', completed: false },
  { task: 'Project Members', description: 'Description of task 5', completed: false },
  { task: 'Tasks', description: 'Description of task 6', completed: false }
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '' && newDescription.trim() !== '') {
      setTasks([...tasks, { task: newTask, description: newDescription, completed: false }]);
      setNewTask('');
      setNewDescription('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="navy">
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
                <Button
                  variant="contained"
                  color={task.completed ? 'secondary' : 'primary'}
                  onClick={() => toggleComplete(index)}
                >
                  {task.completed ? 'Incomplete' : 'Complete'}
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom color="navy">
        Add New Task
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Task"
            variant="outlined"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tasks;
