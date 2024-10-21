import React from 'react';
import { AppBar, Box, Toolbar, Typography,IconButton,Badge, Divider } from '@mui/material';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SuperAdmin from '../SuperAdmin/SuperAdmin';

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  border-radius: 5px;
  padding: 5px 10px;
  height:600px;
`;

const StyledInput = styled.input`
  border: none;
  padding: 10px 10px 10px 40px; /* Add padding to the left to make space for the icon */
  width: 100%;
  outline: none;
  border-radius: 5px;
  background-color: rgb(93,93,93);
  color: white;
  font-size: 16px;

  ::placeholder {
    color: white;
    font-size: 16px;
    font-style: italic;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 10px;
  color: gray;
`;

const TopNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          '& .MuiToolbar-root': { justifyContent: 'space-between',alignItems:"center" }, 
          backgroundColor: '#1c1c1c' ,height:"3.5rem"
        }}
      >
        <Toolbar>
          {/* Logo and Title */}
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: '180px',
                height: '20px',
                borderRight: '1px solid #d8d8d8',
                paddingRight: '15px',
              }}
            />
            <span style={{ color: '#d8d8d8', paddingLeft: '15px', fontSize: '10px' }}>
              PROPERTY MANAGEMENT SOLUTION
            </span>
          </Typography>

          {/* Centered Search Bar */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: "center", height: "30px",marginBottom:"5px" }}>
      <SearchContainer>
        <StyledSearchIcon sx={{ marginLeft: "10px", color: "white" }} />
        <StyledInput placeholder="Search" />
      </SearchContainer>
    </Box>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
             sx={{marginTop:"5px",marginRight:"10px"}}
            >
 <Box >
      <Badge color="primary" variant="dot">
      <NotificationsIcon />
      </Badge>
    </Box>
              
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ height: 26, bgcolor: 'gray' ,marginTop:"20px",marginRight:"10px"}} />
          <SuperAdmin />

          {/* Profile Icon on the right */}
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavBar;
