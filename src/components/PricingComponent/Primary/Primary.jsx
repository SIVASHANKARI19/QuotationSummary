import { Typography, Box, Tooltip, Button } from "@mui/material";
import React, { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Dropdown from "../Dropdown/Dropdown";
import { FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SliderComponent from "../../Slider/Slider";

const Primary = ({ bgColor, color, title, onClose }) => {
  const [selectedRevenueType, setSelectedRevenueType] = useState("Lease");
  const [selectedComponent, setSelectedComponent] = useState("amount");

  const WorkOptions = [
    { value: 1, label: "Pricing Component" },
    { value: 2, label: "In Development" },
    { value: 3, label: "Deployed to Staging" },
    { value: 4, label: "Verified in Staging" },
    { value: 5, label: "Approved for Production" },
    { value: 6, label: "Deployed to Production" },
    { value: 7, label: "Verified in Production" },
    { value: 8, label: "Closed" },
  ];

  const pricingComponentOptions = [
    { value: 1, label: "GST" },
    { value: 2, label: "SGST" },
    { value: 3, label: "CGST" },
    { value: 4, label: "TDS" },
    { value: 5, label: "GST" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: bgColor,
          padding: "4px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        <Typography sx={{ fontSize: "16px", margin: "10px", color: color }}>
          {title}
        </Typography>
        <Tooltip
          title="Base rent or monthly rental amount. You can have only one primary component per property."
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: "white",
                color: "gray",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
            },
            arrow: {
              sx: {
                color: "white",
              },
            },
          }}
        >
          <InfoOutlinedIcon
            sx={{ color: "gray", fontSize: "16px", marginRight: "8px" }}
          />
        </Tooltip>
      </Box>

      {/* Form */}
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        <Box>
          <Typography sx={{ margin: "10px", fontSize: "12px", color: "gray" }}>
            Revenue Type
          </Typography>
          <Box>
            {["Lease", "Sales", "Manage"].map((revenueType) => (
              <Button
                key={revenueType}
                sx={{
                  backgroundColor:
                    selectedRevenueType === revenueType
                      ? "rgb(80,120,225)"
                      : "white",
                  color: selectedRevenueType === revenueType ? "white" : "black",
                  marginLeft: "7px",
                  border:
                    selectedRevenueType === revenueType
                      ? "none"
                      : "1px solid #d8d8d8",
                  fontSize: "10px",
                }}
                onClick={() => setSelectedRevenueType(revenueType)}
              >
                {revenueType}
              </Button>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography sx={{ margin: "10px", fontSize: "12px", color: "gray" }}>
            Pricing Component
          </Typography>
          <Dropdown WorkOptions={WorkOptions} />
        </Box>

        <Box>
          <Typography sx={{ margin: "10px", fontSize: "12px", color: "gray" }}>
            Tax Group For Pricing Component
          </Typography>
          <Dropdown WorkOptions={pricingComponentOptions} />
        </Box>

        <Box>
          <Typography sx={{ margin: "10px", fontSize: "12px", color: "gray" }}>
            Component Based On
          </Typography>
          <Box>
            {["amount", "UOM"].map((component) => (
              <Button
                key={component}
                sx={{
                  backgroundColor:
                    selectedComponent === component
                      ? "rgb(80,120,225)"
                      : "white",
                  color: selectedComponent === component ? "white" : "black",
                  marginLeft: "7px",
                  border:
                    selectedComponent === component
                      ? "none"
                      : "1px solid #d8d8d8",
                  fontSize: "10px",
                }}
                onClick={() => setSelectedComponent(component)}
              >
                {component.charAt(0).toUpperCase() + component.slice(1)}
              </Button>
            ))}
          </Box>
        </Box>
      </form>

      {/* UOM Value Input */}
      <Box sx={{ marginTop: "10px" }}>
        <Typography sx={{ margin: "10px", fontSize: "12px", color: "gray" }}>
          UOM Value
        </Typography>
        <FormControl
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: "0.5rem",
            height: "40px",
            padding: "2px",
          }}
          variant="outlined"
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">SAR/Total</InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            sx={{ borderRadius: "0.5rem" }}
          />
        </FormControl>
      </Box>

      {(title === "Primary") ? (
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
          <Box>
            <Typography sx={{ marginTop: "10px", fontSize: "12px", color: "gray" }}>
              Maximum
            </Typography>
            <SliderComponent color="red" value={95} />
            <Box sx={{ border: "1px solid #d8d8d8", borderRadius: "5px", padding: "5px", alignItems: "left", paddingLeft: "10px", top: "-4px", position: "relative" }}>
              <Typography sx={{ fontSize: "12px" }}>
                $190
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "8px", color: "gray", padding: "6px", top: "-6px", position: "relative" }}>
              Sq .Yard/Monthly
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ marginTop: "10px", fontSize: "12px", color: "gray" }}>
              Minimum
            </Typography>
            <SliderComponent color="green" value={75} />
            <Box sx={{ border: "1px solid #d8d8d8", borderRadius: "5px", padding: "5px", alignItems: "left", paddingLeft: "10px", top: "-4px", position: "relative" }}>
              <Typography sx={{ fontSize: "12px" }}>
                $190
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "8px", color: "gray", padding: "6px", top: "-6px", position: "relative" }}>
              Sq .Yard/Monthly
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ marginTop: "10px", fontSize: "12px", color: "gray" }}>
              Step
            </Typography>
            <SliderComponent color="orange" value={40} />
            <Box sx={{ border: "1px solid #d8d8d8", borderRadius: "5px", padding: "5px", alignItems: "left", paddingLeft: "10px", top: "-4px", position: "relative" }}>
              <Typography sx={{ fontSize: "12px" }}>
                $190
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "8px", color: "gray", padding: "6px", top: "-6px", position: "relative" }}>
              Sq .Yard/Monthly
            </Typography>
          </Box>
        </Box>
      ) : null}

      

            <Box sx={{display:"flex",justifyContent:"space-between",padding:"10px",backgroundColor:"white",position:"relative",bottom:title === "Primary" ? "0px" : "-25px"}}>
            
              <Button sx={{backgroundColor:"white",color:"black",border:"1px solid black",marginLeft:"20px",textTransform:"none"}} onClick={() => navigate("/pricingComponents")}>Back</Button>
           

      <Button sx={{backgroundColor:"rgb(80,120,225)",color:"white",marginLeft:"20px",textTransform:"none"}}>Create Pricing Component</Button>
        </Box>
        


    </Box>
  );
};

export default Primary;
