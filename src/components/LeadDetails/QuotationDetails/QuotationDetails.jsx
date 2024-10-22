import { Typography, Box } from "@mui/material";
import React from "react";

const QuotationDetails = ({ 
  leaseStartDate, 
  leaseEndDate, 
  rentStartDate, 
  gracePeriod 
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography sx={{  fontWeight: "bold", fontSize: "12px", color: "#4E5A6B", ml: "8px",fontFamily: 'Nunito Sans' }}>
        Quotation Details
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(120px, 1fr))",
          margin: "10px",
          gap: "20px",
          marginTop: "20px",
       
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography sx={{ fontSize: "8px", color: "gray", marginBottom: "5px",fontFamily: 'Nunito Sans'}}>
            LEASE START DATE
          </Typography>
          <Typography sx={{ fontSize: "10px",  fontWeight: "bold",fontFamily: 'Nunito Sans' }}>
            {leaseStartDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography sx={{ fontSize: "8px", color: "gray", marginBottom: "5px",fontFamily: 'Nunito Sans'}}>
            LEASE END DATE
          </Typography>
          <Typography sx={{ fontSize: "10px",  fontWeight: "bold"   ,fontFamily: 'Nunito Sans'}}>
            {leaseEndDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography sx={{ fontSize: "8px", color: "gray", marginBottom: "5px",fontFamily: 'Nunito Sans' }}>
            RENT START DATE
          </Typography>
          <Typography sx={{ fontSize: "10px",  fontWeight: "bold" }}>
            {rentStartDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography sx={{ fontSize: "8px", color: "gray", marginBottom: "5px",fontFamily: 'Nunito Sans'  }}>
            GRACE PERIOD
          </Typography>
          <Typography sx={{ fontSize: "10px", fontWeight: "bold" ,fontFamily: 'Nunito Sans'}}>
            {gracePeriod} <span style={{ color: "gray",fontFamily: 'Nunito Sans',fontWeight: "500" }}>(Beginning)</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default QuotationDetails;
