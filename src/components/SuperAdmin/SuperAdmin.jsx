import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Typography, Tooltip } from '@mui/material';

const SuperAdmin = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tooltip
      title={
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '20px' }}
          />
          <Box>
            <Typography sx={{ color: '#000', fontSize: '14px', marginTop: '10px',fontWeight:"bold" }}>Bala Ganesh</Typography>
            <Typography sx={{ color: '#000', fontSize: '12px' }}>bala.ganesh@gmail.com</Typography>
          </Box>
        </Box>
      }
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: 'white',
            color: 'black',
            paddingLeft: '10px',
            paddingRight:'10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          },
        },
        arrow: {
          sx: {
            color: 'white',
          },
        },
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Profile"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '10px', marginLeft: '10px',fontWeight:"bold" }}>Bala Ganesh</Typography>
          <Typography sx={{ marginLeft: '10px', color: '#d8d8d8', fontSize: '10px' }}>Super Admin</Typography>
        </Box>
        <Box>
          {hovered ? (
            <KeyboardArrowUpIcon sx={{ color: '#d8d8d8', marginLeft: '10px' }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ color: '#d8d8d8', marginLeft: '10px' }} />
          )}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default SuperAdmin;
