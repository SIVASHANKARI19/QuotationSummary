import { Typography, Box } from "@mui/material";
import React from "react";

const QuotationDetails = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography sx={{fontFamily:"poppins"}}>Quotation Details</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(120px, 1fr))",
          margin: "10px",
          gap: "20px",
          marginTop: "20px",
          fontFamily: "poppins",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography
            sx={{ fontSize: "10px", color: "gray", marginBottom: "5px" ,fontFamily:"poppins"}}
          >
            LEASE START DATE
          </Typography>
          <Typography sx={{ fontSize: "10px",fontFamily:"poppins" }}>30 Jan 22</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography
            sx={{ fontSize: "10px", color: "gray", marginBottom: "5px",fontFamily:"poppins" }}
          >
            LEASE END DATE
          </Typography>
          <Typography sx={{ fontSize: "10px" ,fontFamily:"poppins"}}>30 Jan 22</Typography>
        </Box>{" "}
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography
            sx={{ fontSize: "10px", color: "gray", marginBottom: "5px" ,fontFamily:"poppins"}}
          >
            RENT START DATE
          </Typography>
          <Typography sx={{ fontSize: "10px" ,fontFamily:"poppins"}}>30 Jan 22</Typography>
        </Box>{" "}
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography
            sx={{ fontSize: "10px", color: "gray", marginBottom: "5px",fontFamily:"poppins" }}
          >
            GRACE PERIOD
          </Typography>
          <Typography sx={{ fontSize: "10px" ,fontFamily:"poppins"}}>90 Days <span style={{color:"gray"}}>(Beginning) </span></Typography>
        </Box>
      </Box>
    </div>
  );
};

export default QuotationDetails;
