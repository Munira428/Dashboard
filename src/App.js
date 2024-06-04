import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const projectMembers = [
  { name: 'Munira Momin', skills: 'React Developer' },
  { name: 'Mahima', skills: 'React Developer' },
  { name: 'Diya', skills: 'HTML, CSS, JS' }
];

const timelineData = [
  { name: 'Mahima', taskCompleted: 'Login Page', skills: 'React' },
  { name: 'Munira', taskCompleted: 'DashBoard Page', skills: 'React' },
  { name: 'Diya', taskCompleted: 'Login Page', skills: 'CSS' },
  { name: 'Mahima', taskCompleted: 'Sign up Page', skills: 'React' },
  { name: 'Munira', taskCompleted: 'Profile', skills: 'React' },
  { name: 'Mahima', taskCompleted: 'Forget Password', skills: 'React' },
  { name: 'Munira', taskCompleted: 'Account', skills: 'React' },
];

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'left' }}>
            Summer Training Project
          </Typography>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/account">Account</Button>
          <Button color="inherit" component={Link} to="/project-members">Project Members</Button>
          <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
        </Toolbar>
      </AppBar>
      <main style={{ backgroundColor: '#f0f0f0', color: 'navy', padding: '20px' }}>
        <Container>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>
            Welcome to the Dashboard
          </Typography>
          <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'left' }}>
            Project Members
          </Typography>
          <Grid container spacing={2}>
            {projectMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} style={{ padding: '16px', textAlign: 'center', borderRadius: '15px', background: '#e0e0e0', color: '#333', border: '2px solid navy' }}>
                  <Typography variant="h6" style={{ color: 'navy' }}>{member.name}</Typography>
                  <Typography variant="body1">{member.skills}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h5" style={{ marginTop: '20px', textAlign: 'left' }}>
            Project Name: DashBoard for Project Manager
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" style={{ marginBottom: '20px', textAlign: 'left' }}>
                Project Description:
              </Typography>
              <Typography style={{ marginBottom: '20px', textAlign: 'left', fontSize: '16px' }}>
                This dashboard provides project managers with a comprehensive and intuitive view of their team's progress on various tasks and projects.
                It is designed to streamline project management by offering real-time insights, promoting accountability, and facilitating better decision-making.
                This dashboard is a powerful tool for project managers to efficiently oversee project progress, ensure timely completion, and maintain team productivity.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src="d.png" alt="Project" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
            </Grid>
          </Grid>
          <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'left' }}>
            Timeline
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="timeline table" style={{ borderCollapse: 'collapse', border: '2px solid navy' }}>
              <TableHead>
                <TableRow style={{ backgroundColor: '#f0f0f0' }}>
                  <TableCell style={{ color: 'navy', fontWeight: 'bold', borderRight: '2px solid navy', padding: '8px' }}>Name</TableCell>
                  <TableCell style={{ color: 'navy', fontWeight: 'bold', borderRight: '2px solid navy', padding: '8px' }}>Task Completed</TableCell>
                  <TableCell style={{ color: 'navy', fontWeight: 'bold', padding: '8px' }}>Skills</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {timelineData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ color: 'white', backgroundColor: '#5072A7', padding: '8px' }}>{item.name}</TableCell>
                    <TableCell style={{ color: 'white', backgroundColor: '#5072A7', padding: '8px' }}>{item.taskCompleted}</TableCell>
                    <TableCell style={{ color: 'white', backgroundColor: '#5072A7', padding: '8px' }}>{item.skills}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer><br></br>
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={4}>
              <img src="e.png" alt="Additional Information" style={{ width: '90 %', height: '90%', borderRadius: '15px' }} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} style={{ width: '80%',padding: '16px', float: 'right', borderRadius: '15px', backgroundColor: '#20B2AA', color: 'white' }}>
                <Typography variant="h5" style={{ textAlign: 'left' ,marginBottom: '10px' }}>
                  Key Features
                </Typography>
                <ul style={{ textAlign: 'left', fontSize: '20px' ,listStyleType: 'none', paddingLeft: '0' }}>
                  <li>Login</li>
                  <li>Signup</li>
                  <li>Dashboard</li>
                  <li>Profile</li>
                  <li>Account</li>
                  <li>Tasks</li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
