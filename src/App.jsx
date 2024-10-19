import React, { useState } from 'react';
import './App.css';
import  Grid2  from '@mui/material/Grid2';
import Ownership from './pages/Ownership/Ownership';
import LeadDetails from './components/LeadDetails/LeadDetails';
import Sidebar from './components/Sidebar/Sidebar'; // Import your Sidebar component
import Box from '@mui/material/Box';
import TopNavBar from './components/TopNavBar/TopNavBar';
import MenuBar from './components/MenuBar/MenuBar';
import MainContent from './components/MainContent/MainContent';
import Dropdown from './components/Dropdown/Dropdown';
import PricingComponent from './components/PricingComponent/PricingComponent';
import Amenities from './components/Amenities/Amenities';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme instance with Poppins font
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins"'
  },
});

// Wrap your application with ThemeProvider
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Ownership />
    </ThemeProvider>
  );
}

export default App;



