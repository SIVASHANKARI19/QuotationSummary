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
      <Typography sx={{  fontWeight: "bold", fontSize: "12px", color: "#4E5A6B", ml: "5px" }}>
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
          <Typography sx={{ fontSize: "10px", color: "gray", marginBottom: "5px",}}>
            Lease Start Date
          </Typography>
          <Typography sx={{ fontSize: "10px",  fontWeight: "bold" }}>
            {leaseStartDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography sx={{ fontSize: "10px", color: "gray", marginBottom: "5px"}}>
            Lease End Date
          </Typography>
          <Typography sx={{ fontSize: "10px",  fontWeight: "bold" }}>
            {leaseEndDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography sx={{ fontSize: "10px", color: "gray", marginBottom: "5px", }}>
            Rent Start Date
          </Typography>
          <Typography sx={{ fontSize: "10px",  fontWeight: "bold" }}>
            {rentStartDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography sx={{ fontSize: "10px", color: "gray", marginBottom: "5px",  }}>
            Grace Period
          </Typography>
          <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>
            {gracePeriod} <span style={{ color: "gray" }}>(Beginning)</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default QuotationDetails;
