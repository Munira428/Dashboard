import React, { useState } from 'react';
import { Typography, Container, TextField, Box, Button, Grid, Card, CardContent } from '@mui/material';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Munira Momin',
    gender: 'Female',
    fatherName: 'Sajid Momin',
    mobile: '7892041819',
    email: 'mominmunira@gmail.com',
    occupation: 'Software Engineer',
    company: 'abc.pvt.ltd',
    category: 'General',
    address: 'Anand',
    state: 'Gujarat',
    department: 'IT',
  });

  const [projects, setProjects] = useState([
    {
      name: 'MindFul Heaven',
      description: 'This platform offers personalized assessments for stress, depression, and anxiety levels, along with detailed analysis. We provide therapy services, an awareness portal, and seamless appointment scheduling with our dedicated therapists.',
      sourceCode: 'https://github.com/example/project-one',
      figmaLink: 'https://www.figma.com/file/example/project-one',
      image: 'project1.jpeg',  // only the filename
    },
    {
      name: 'Smart Plant Watering System',
      description: 'Smart Plant Watering System using ESP8266 NodeMCU which is an Iot based application with Blynk app integration for user friendly ui/ux user experience which can measure the moisture level in plants and as per the moisture level it waters the plant..',
      sourceCode: 'https://github.com/Munira428/MindfulHeaven',
      figmaLink: 'https://www.figma.com/file/example/project-two',
      image: 'project-two.png',  // only the filename
    },
    {
      name: 'Hrtc-Tracker(UI/UX)',
      description: 'Smart Plant Watering System using ESP8266 NodeMCU which is an Iot based application with Blynk app integration for user friendly ui/ux user experience which can measure the moisture level in plants and as per the moisture level it waters the plant..',
      sourceCode: 'https://github.com/Munira428/MindfulHeaven',
      figmaLink: 'https://www.figma.com/file/example/project-two',
      image: 'project-two.png',  // only the filename
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optionally, add save logic here, such as an API call to update the profile on the server.
  };

  return (
    <Container>
      <Typography variant="h4" style={{ color: 'navy' }} gutterBottom>
        Profile
      </Typography>
      <Box sx={{ '& > :not(style) + :not(style)': { mt: 2 } }}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={profile.name}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Gender"
          variant="outlined"
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Father's Name"
          variant="outlined"
          name="fatherName"
          value={profile.fatherName}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Mobile No"
          variant="outlined"
          name="mobile"
          value={profile.mobile}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Email ID"
          variant="outlined"
          name="email"
          value={profile.email}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="You'r Occupation"
          variant="outlined"
          name="occupation"
          value={profile.occupation}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Current Company"
          variant="outlined"
          name="company"
          value={profile.company}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Category"
          variant="outlined"
          name="category"
          value={profile.category}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Address"
          variant="outlined"
          name="address"
          value={profile.address}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="State"
          variant="outlined"
          name="state"
          value={profile.state}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Department"
          variant="outlined"
          name="department"
          value={profile.department}
          onChange={handleChange}
          fullWidth
          disabled={!isEditing}
        />
      </Box>
      <Box mt={2}>
        {isEditing ? (
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </Box>

      <Typography variant="h4" style={{ color: 'navy', marginTop: '40px' }} gutterBottom>
        Past Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ border: '2px solid navy', backgroundColor: '#f0f0f0' }}>
              <CardContent>
                <Typography variant="h6" style={{ color: 'navy' }}>
                  {project.name}
                </Typography>
                <Typography variant="body1">
                  {project.description}
                </Typography>
                <Typography variant="body2" style={{ color: 'blue', marginTop: '8px' }}>
                  <strong>Source Code:</strong> <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Typography>
                <Typography variant="body2" style={{ color: 'blue' }}>
                  <strong>Figma Link:</strong> <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">Figma</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Profile;
