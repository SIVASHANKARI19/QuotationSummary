import React, { useState } from 'react';
import { Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SellIcon from '@mui/icons-material/Sell';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
  
    setSelectedIcon(prevIcon => prevIcon === iconName ? null : iconName);
  };

  return (
    <Box p={2} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(51, 51, 51)', width: 'fit-content', height: '92.2vh' }}>
      <ChevronRightIcon  onClick={() => handleIconClick('arrow')}
        sx={{
          marginTop: '30px',
          color:'white',
          backgroundColor: selectedIcon === 'arrow' ? 'rgb(80,120,225)' : '',
          cursor: 'pointer',
          padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
        }} />
      <DashboardIcon
        onClick={() => handleIconClick('dashboard')}
        sx={{
          marginTop: '30px',
          color: 'white',
          backgroundColor: selectedIcon === 'dashboard' ? 'rgb(80,120,225)' : '',
          cursor: 'pointer',
          padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
        }}
      />
      <PeopleAltIcon
        onClick={() => handleIconClick('people')}
        sx={{
          marginTop: '30px',
          color: 'white',
          backgroundColor: selectedIcon === 'people' ? 'rgb(80,120,225)' : '',
          cursor: 'pointer',
          padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
        }}
      />
      <CorporateFareIcon
        onClick={() => handleIconClick('corporate')}
        sx={{
          marginTop: '30px',
          color: 'white',
          backgroundColor: selectedIcon === 'corporate' ? 'rgb(80,120,225)' : '',
          cursor: 'pointer',
          padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
        }}
      />
      <SellIcon
        onClick={() => handleIconClick('sell')}
        sx={{
          marginTop: '30px',
          padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
          color:'white',
          backgroundColor: selectedIcon === 'sell' ? 'rgb(80,120,225)' : '',
          cursor: 'pointer',
        }}
      />
      <FileCopyIcon
        onClick={() => handleIconClick('fileCopy')}
        sx={{
          marginTop: '30px',
          padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
          color: 'white',
          backgroundColor: selectedIcon === 'fileCopy' ? 'rgb(80,120,225)' : '',
          cursor: 'pointer',
        }}
      />
      <FolderCopyIcon
        onClick={() => handleIconClick('folderCopy')}
        sx={{
          marginTop: '30px',
          padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
          color:'white',
          backgroundColor: selectedIcon === 'folderCopy' ? 'rgb(80,120,225)' : '',
          cursor: 'pointer',
        }}
      />
      <InsertCommentIcon
        onClick={() => handleIconClick('comment')}
        sx={{
          marginTop: '30px',
           padding: '5px',
           borderRadius:"50%",
           fontSize:"34px",
          backgroundColor: selectedIcon === 'comment' ? 'rgb(80,120,225)' : '', // Background color changes when selected
          color:'white', // Text color inverts when selected
          cursor: 'pointer',
           // Optional, to give it a more button-like feel
        }}
      />
    </Box>
  );
};

export default Sidebar;
