import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LeadProfile from "../../assets/image.png"; 

function LeadDetails() {
  return (
    <Box maxHeight={"50vh"}>
    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          border: "1px solid #d8d8d8",
          borderRadius: "5px",
          width: "28vw",
          flexWrap: "wrap", 
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={LeadProfile}
          alt="Action Icon"
          sx={{
            height: 70,
            padding: 1,
            width: 70,
            borderRadius: "20%",

            objectFit: "contain",
            flexShrink: 0,
          }}
        />

        {/* Text next to the image */}
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <Typography
              sx={{
                marginRight: 2,
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: "bold",
                fontFamily: "Nunito Sans",
              }}
            >
              Tom Cruise
            </Typography>
            <Button
              sx={{
                color: "#4E5A6B",

                backgroundColor: "rgb(234,239,251)",
                padding: "2px 7px",
                fontSize: { xs: "10px", md: "10px" }, 
                minWidth: "unset",
                fontWeight: "bolder",
                textTransform: "none",
                fontFamily: "Nunito Sans",
              }}
            >
              Prospect
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              wordSpacing: 2,
              color: "gray",
              paddingRight: 1,
              paddingTop: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "12px" },
                marginRight: 2,
                paddingTop: 0.4,
                fontFamily: "Nunito Sans",
              }}
            >
              +91 999999999
            </Typography>
            <Typography mr={2}> • </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "12px" },
                paddingTop: 0.4,
                fontFamily: "Nunito Sans",
                wordSpacing: 2,
              }}
            >
              tomcruise1234678@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LeadDetails;
