import { Typography, Box } from "@mui/material";
import React from "react";

const QuotationDetails = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography>Quotation Details</Typography>
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
          <Typography sx={{ fontSize: "10px" }}>30 Jan 22</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography
            sx={{ fontSize: "10px", color: "gray", marginBottom: "5px" }}
          >
            LEASE END DATE
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>30 Jan 22</Typography>
        </Box>{" "}
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography
            sx={{ fontSize: "10px", color: "gray", marginBottom: "5px" }}
          >
            RENT START DATE
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>30 Jan 22</Typography>
        </Box>{" "}
        <Box sx={{ display: "flex", flexDirection: "column", fontSize: "8px" }}>
          <Typography
            sx={{ fontSize: "10px", color: "gray", marginBottom: "5px" }}
          >
            GRACE PERIOD
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>90 Days <span style={{color:"gray"}}>(Beginning) </span></Typography>
        </Box>
      </Box>
    </div>
  );
};

export default QuotationDetails;
