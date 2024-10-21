import React from 'react'
import Grid2 from '@mui/material/Grid2';
import LeadDetails from '../LeadDetails/LeadDetails';
import UnitDetails from '../LeadDetails/UnitDetails';
import QuotationSummary from '../LeadDetails/QuotationSummary';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Typography,Box, Button} from '@mui/material';
import QuotationDetails from '../LeadDetails/QuotationDetails/QuotationDetails';
import four from '../../assets/4.png';

const MainContent = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="rgba(80,120,225)" href="/" fontFamily={"Nunito Sans, sans-serif"}  fontSize={"14px"} onClick={handleClick}>
      Add Contact
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="rgba(80,120,225)"
    fontFamily={"Nunito Sans, sans-serif"}
    fontSize={"14px"}
      onClick={handleClick}
    >
      Lead Details
    </Link>,
    <Typography key="3" sx={{ color: 'rgb(80,120,225)' }} fontFamily={"Nunito Sans, sans-serif"} fontSize={"14px"}>
     Preview and create Lead
    </Typography>,
    <Typography key="3" sx={{ color: 'rgb(80,120,225)' }} fontFamily={"Nunito Sans, sans-serif"} fontSize={"14px"}>
    Preview and create Lead
   
   </Typography>,  <Box key="5" sx={{ display: 'flex', alignItems: 'center', color: 'rgb(80,120,225)' }}fontFamily={"Nunito Sans, sans-serif"} fontSize={"14px"}>
    <img src={four} alt="four" width="20px" height="20px" style={{ marginRight: '8px' }} />
    <Typography fontFamily={"Nunito Sans, sans-serif"}>
      Preview and create Lead
    </Typography>
  </Box>
  ];
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const leaseStartDate = "30 Jan 22";
  const leaseEndDate = "30 Jan 23";
  const rentStartDate = "01 Feb 22";
  const gracePeriod = "90 Days";
  return (
    <Box  sx={{ height: '78vh', width: '90vw',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:"5px" }}>
      <div style={{backgroundColor:"white",borderTopLeftRadius:"5px" ,borderTopRightRadius:"5px",padding:"10px",borderBottom:"1px solid #d8d8d8"}}>   <Breadcrumbs
        separator={<NavigateNextIcon  sx={{color:"rgb(80,120,225)",fontWeight:"bold"}} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs></div>
    <Grid2 container spacing={0} sx={{flexGrow: 1,           // Allow this box to take remaining space
        display: 'flex',paddingTop:"0",height:"65vh",width:"89.9vw" }}>
      <Grid2 size={4} padding={2} sx={{flexGrow: 1,            // Allow this box to take remaining space
        display: 'flex', backgroundColor:"white",flexDirection:"column"}}>
           <Typography padding={1} sx={{color:"#4E5A6B",fontSize:"14px",position:"relative",top:"-16px",fontWeight:"bold"}}>Lead Details  </Typography>
      <LeadDetails />
      <QuotationDetails   leaseStartDate={leaseStartDate} 
        leaseEndDate={leaseEndDate} 
        rentStartDate={rentStartDate} 
        gracePeriod={gracePeriod} />
      </Grid2>
      <Grid2 size={4.5}  sx={{flexGrow: 1,            // Allow this box to take remaining space
        display: 'flex' ,alignSelf :"flex-start",flexDirection:"column",}}>
          <Typography padding={1} sx={{color:"#4E5A6B",fontSize:"14px",fontWeight:"bold"}}>Unit Details  </Typography>
      <UnitDetails />
      </Grid2>
      <Grid2 size={3.5}  sx={{flexGrow: 1,            // Allow this box to take remaining space
        display: 'flex' ,backgroundColor:"white",flexDirection:"column",   height: "65vh",alignItems: "center",justifyContent: "center"}} >
           <Typography padding={1} backgroundColor="white"   sx={{color:"#4E5A6B",fontSize:"14px",width:"88.5%",fontWeight:"bold"}}>Quotation Details  </Typography>
      <QuotationSummary />
      </Grid2>
     
    </Grid2>
    <div>
    <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"white",width:"88.66vw",paddingBottom:"2px"}}>
            <Box>
              <Button sx={{backgroundColor:"white",color:"black",border:"1px solid #d8d8d8",textTransform:"none",marginLeft:"20px"}} contained>Previous</Button>
            </Box>
            <Box >
    <Button sx={{backgroundColor:"white",color:"black",border:"1px solid #d8d8d8",textTransform:"none",marginLeft:"20px"}}>
      Cancel</Button>
      <Button sx={{backgroundColor:"rgb(80,120,225)",color:"white",marginLeft:"20px",textTransform:"none"}}>Save Quotation</Button></Box>
        </Box>
    </div>
   
    </Box>
  )
}

export default MainContent
