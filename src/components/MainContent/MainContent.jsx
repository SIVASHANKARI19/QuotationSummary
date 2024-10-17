import React from 'react'
import Grid2 from '@mui/material/Grid2';
import LeadDetails from '../LeadDetails/LeadDetails';
import UnitDetails from '../LeadDetails/UnitDetails';
import QuotationSummary from '../LeadDetails/QuotationSummary';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Typography,Box, Button} from '@mui/material';
import QuotationDetails from '../LeadDetails/QuotationDetails/QuotationDetails';

const MainContent = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="rgba(80,120,225)" href="/" onClick={handleClick}>
      Add Contact
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="rgba(80,120,225)"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Lead Details
    </Link>,
    <Typography key="3" sx={{ color: 'rgb(80,120,225)' }}>
     Preview and create Lead
    </Typography>,
    <Typography key="3" sx={{ color: 'rgb(80,120,225)' }}>
    Preview and create Lead
   </Typography>,<Typography key="3" sx={{ color: 'rgb(80,120,225)' }}>
     Preview and create Lead
    </Typography>,
  ];
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <Box  sx={{  }}>
      <div style={{backgroundColor:"white",borderTopLeftRadius:"5px" ,borderTopRightRadius:"5px",padding:"10px"}}>   <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs></div>
    <Grid2 container spacing={0} sx={{flexGrow: 1,            // Allow this box to take remaining space
        display: 'flex',paddingTop:"0",height:"71vh",width:"92vw" }}>
      <Grid2 size={4} padding={2} sx={{flexGrow: 1,            // Allow this box to take remaining space
        display: 'flex', backgroundColor:"white",flexDirection:"column"}}>
        
      <LeadDetails />
      <QuotationDetails />
      </Grid2>
      <Grid2 size={4}  sx={{flexGrow: 1,            // Allow this box to take remaining space
        display: 'flex' ,alignSelf :"flex-start",flexDirection:"column"}}>
          <Typography padding={1} sx={{color:"GRAY",fontSize:"14px"}}>Unit Details  </Typography>
      <UnitDetails />
      </Grid2>
      <Grid2 size={4}  sx={{flexGrow: 1,            // Allow this box to take remaining space
        display: 'flex' ,backgroundColor:"white",flexDirection:"column"}} >
           <Typography padding={1} backgroundColor="white"  marginLeft={2} sx={{color:"GRAY",fontSize:"14px"}}>Quotation Details  </Typography>
      <QuotationSummary />
      </Grid2>
     
    </Grid2>
   
    </Box>
  )
}

export default MainContent
