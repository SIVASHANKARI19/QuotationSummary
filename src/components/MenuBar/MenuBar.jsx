import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Dropdown from "../PricingComponent/Dropdown/Dropdown";
const MenuBar = () => {
  const WorkOptions = [{ value: 1, label: "Casagaurd" }];
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "95.66vw",
        display: "flex",
        alignItems: "center",
       
      }}
    >
      <ArrowBackIosNewIcon
        sx={{
          marginLeft: "10px",
          backgroundColor: "#d8d8d8",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          padding: "7px",
          marginLeft: "30px",
        }}
      ></ArrowBackIosNewIcon>
      <Typography p={2} fontWeight={600} fontFamily={"Nunito Sans"}>
        Create Quotations to Existing Lead
      </Typography>
      <Box sx={{ marginLeft: "auto", marginRight: "10px", padding: "13px" }}>
        <Dropdown WorkOptions={WorkOptions} />
      </Box>
    </Box>
  );
};

export default MenuBar;
