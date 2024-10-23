import React from 'react';
import { Box ,Button} from '@mui/material';
import LeadDetails from '../../components/LeadDetails/LeadDetails';
import UnitDetails from '../../components/LeadDetails/UnitDetails';
import Sidebar from '../../components/Sidebar/Sidebar';
import QuotationSummary from '../../components/LeadDetails/QuotationSummary';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import MenuBar from '../../components/MenuBar/MenuBar'; // Make sure to import your MenuBar component
import MainContent from '../../components/MainContent/MainContent';

function Ownership() {
  return (
    <Box>
      <TopNavBar />
      <Box sx={{ display: 'flex',backgroundColor:"rgb(246,248,250)" }}>
        <Sidebar /> {/* Render the Sidebar on the left */}
        
        <Box
          sx={{
            flexGrow: 1, 
            display: 'flex',       
            flexDirection: 'column', 
            
          }}
        >
          <MenuBar /> 
          <Box
            sx={{
              flexGrow: 1,     
              display: 'flex',
               alignItems:"center",
               justifyContent:"center",
                
                  
            }}
          >
           <MainContent />
          </Box>
         
        </Box>
      </Box>
    </Box>
  );
}

export default Ownership;
