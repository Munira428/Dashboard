import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import Account from './components/Account';
import ProjectMembers from './components/ProjectMembers';
import Tasks from './components/Tasks';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/account" element={<Account />} />
      <Route path="/project-members" element={<ProjectMembers />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </Router>
);
