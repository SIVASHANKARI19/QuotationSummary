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
  const [chargable, setChargable] = useState("yes");
  const [PricingBasedOn, setPricingBasedOn] = useState("monthly");
  const [componentBasedOn, setComponentBasedOn] = useState("amount");
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
    <Box sx={{ height: "60vh", width: "100%" }}>
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
          gridTemplateColumns: "repeat(2, 1fr)", // Default to two columns
          gap: "10px",
        }}
      >
        <Box
          sx={{
            gridColumn:
              title === "Secondary" ||
              title === "One Time Charges" ||
              title === "Refundables" ||
              title === "Inventory Item"
                ? "1/span 2"
                : title === "Parking Slot"
                ? "1 / span 2"
                : "auto",
          }}
        >
          <Typography sx={{ margin: "10px", fontSize: "12px", color: "gray" }}>
            Revenue Type
          </Typography>
          <Box sx={{ display: "flex" }}>
            {(title !== "Primary"
              ? ["Lease", "Sales", "Manage", "Stay"]
              : ["Lease", "Sales", "Manage"]
            ).map((revenueType) => (
              <Button
                key={revenueType}
                sx={{
                  backgroundColor:
                    selectedRevenueType === revenueType
                      ? "rgb(80,120,225)"
                      : "white",
                  color:
                    selectedRevenueType === revenueType ? "white" : "black",
                  marginLeft: "7px",
                  border:
                    selectedRevenueType === revenueType
                      ? "none"
                      : "1px solid #d8d8d8",
                  fontSize: "10px",
                  width: "auto", // Full width for buttons in Secondary
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
        {title === "Inventory Item" ? (
          <Box>
            <Typography
              sx={{ margin: "10px", fontSize: "12px", color: "gray" }}
            >
              Pricing Based on
            </Typography>
            <Button
              sx={{
                backgroundColor:
                  PricingBasedOn === "monthly" ? "rgb(80,120,225)" : "white",
                color: PricingBasedOn === "monthly" ? "white" : "black",
                border:
                  PricingBasedOn === "monthly"
                    ? "transparent"
                    : "1px solid #d8d8d8",
                fontSize: "10px",
                marginLeft: "12px",
                marginRight: "7px",
              }}
              onClick={() => setPricingBasedOn("monthly")}
            >
              Monthly
            </Button>

            <Button
              sx={{
                backgroundColor:
                  PricingBasedOn === "total" ? "rgb(80,120,225)" : "white",
                color: PricingBasedOn === "total" ? "white" : "black",
                border:
                  PricingBasedOn === "total"
                    ? "transparent"
                    : "1px solid #d8d8d8",
                fontSize: "10px",
              }}
              onClick={() => setPricingBasedOn("total")}
            >
              Total
            </Button>
          </Box>
        ) : null}
        {title === "Secondary" ||
        title === "One Time Charges" ||
        title === "Parking Slot" ? (
          <Box>
            <Typography
              sx={{ margin: "10px", fontSize: "12px", color: "gray" }}
            >
              Chargable
            </Typography>
            <Button
              sx={{
                backgroundColor:
                  chargable === "yes" ? "rgb(80,120,225)" : "white",
                color: chargable === "yes" ? "white" : "black",
                border:
                  chargable === "yes" ? "transparent" : "1px solid #d8d8d8",
                fontSize: "10px",
                marginRight: "7px",
                marginLeft: "12px",
              }}
              onClick={() => setChargable("yes")}
            >
              Yes
            </Button>
            <Button
              sx={{
                backgroundColor:
                  chargable === "no" ? "rgb(80,120,225)" : "white",
                color: chargable === "no" ? "white" : "black",
                border:
                  chargable === "no" ? "transparent" : "1px solid #d8d8d8",
                fontSize: "10px",
              }}
              onClick={() => setChargable("no")}
            >
              No
            </Button>
          </Box>
        ) : null}
        {title === "Refundables" ? (
          <Box>
            <Typography
              sx={{ margin: "10px", fontSize: "12px", color: "gray" }}
            >
              Refundable
            </Typography>
            <Button
              sx={{
                backgroundColor:
                  componentBasedOn === "amount" ? "rgb(80,120,225)" : "white",
                color: componentBasedOn === "amount" ? "white" : "black",
                border:
                  componentBasedOn === "amount"
                    ? "transparent"
                    : "1px solid #d8d8d8",
                fontSize: "10px",
                marginRight: "7px",
                marginLeft: "12px",
              }}
              onClick={() => setComponentBasedOn("amount")}
            >
              Amount
            </Button>
            <Button
              sx={{
                backgroundColor:
                  componentBasedOn === "rental" ? "rgb(80,120,225)" : "white",
                color: componentBasedOn === "rental" ? "white" : "black",
                border:
                  componentBasedOn === "rental"
                    ? "transparent"
                    : "1px solid #d8d8d8",
                fontSize: "10px",
              }}
              onClick={() => setComponentBasedOn("rental")}
            >
              rental value
            </Button>
            <Button
              sx={{
                backgroundColor:
                  componentBasedOn === "%" ? "rgb(80,120,225)" : "white",
                color: componentBasedOn === "%" ? "white" : "black",
                border:
                  componentBasedOn === "%"
                    ? "transparent"
                    : "1px solid #d8d8d8",
                fontSize: "10px",
              }}
              onClick={() => setComponentBasedOn("%")}
            >
              %
            </Button>
          </Box>
        ) : null}
        {title === "Secondary" ||
        title === "One Time Charges" ||
        title === "Parking Slot" ? (
          <Box>
            <Typography
              sx={{ margin: "10px", fontSize: "12px", color: "gray" }}
            >
              Component Based On
            </Typography>
            <Box>
              {}
              {title !== "Inventory Item" &&
                (title === "Primary"
                  ? ["amount", "UOM"]
                  : ["amount", "UOM", "%"]
                ).map((component) => (
                  <Button
                    key={component}
                    sx={{
                      backgroundColor:
                        selectedComponent === component
                          ? "rgb(80,120,225)"
                          : "white",
                      color:
                        selectedComponent === component ? "white" : "black",
                      marginLeft: "7px",
                      border:
                        selectedComponent === component
                          ? "none"
                          : "1px solid #d8d8d8",
                      fontSize: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedComponent(component)}
                  >
                    {component.charAt(0).toUpperCase() + component.slice(1)}
                  </Button>
                ))}
            </Box>
          </Box>
        ) : null}
        {title === "Inventory Item" ? (
          <Box marginTop={0.5}>
            <Box>
              <Typography
                sx={{
                  margin: "6px",
                  fontSize: "12px",
                  color: "gray",
                  marginLeft: "12px",
                }}
              >
                Item Unit Price
              </Typography>
              <FormControl
                sx={{
                  width: "85%",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  marginLeft: "10px",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end" fontSize={10}>
                      {title === "Primary" ? "SAR/Total" : "$/Monthly"}{" "}
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  sx={{
                    borderRadius: "0.2rem",
                    fontSize: "10px",
                    height: "34px",
                  }}
                />
              </FormControl>
            </Box>
          </Box>
        ) : null}
        {title === "Inventory Item" ? (
          <Box>
            <Box>
              <Typography
                sx={{
                  margin: "6px",
                  fontSize: "12px",
                  color: "gray",
                  marginLeft: "12px",
                }}
              >
                Quantity
              </Typography>
              <FormControl
                sx={{
                  width: "85%",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  marginLeft: "10px",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end" fontSize={10}>
                      {title === "Primary" ? "SAR/Total" : "Qty"}{" "}
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  sx={{
                    borderRadius: "0.2rem",
                    fontSize: "10px",
                    height: "34px",
                  }}
                />
              </FormControl>
            </Box>
          </Box>
        ) : null}
      </form>
      {title !== "Inventory Item" ? (
        <Box sx={{ }}>
          <Typography sx={{ margin: "10px",marginBottom:"0", fontSize: "12px", color: "gray" }}>
            UOM Value
          </Typography>
          <FormControl
            sx={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              height: "40px",
          
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment fontSize={10} position="end">
                  {title === "Primary" ? "SAR/Total" : "$/Monthly"}
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              sx={{
                borderRadius: "0.2rem",
                height: "38px",
                margin: "10px",
                fontSize: "8px",
              }}
            />
          </FormControl>
        </Box>
      ) : null}
      {title === "Primary" ? (
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Typography
              sx={{ marginTop: "10px", fontSize: "12px", color: "gray" }}
            >
              Maximum
            </Typography>
            <SliderComponent color="red" value={95} />
            <Box
              sx={{
                border: "1px solid #d8d8d8",
                borderRadius: "5px",
                padding: "5px",
                alignItems: "left",
                paddingLeft: "10px",
                top: "-4px",
                position: "relative",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>$190</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "8px",
                color: "gray",
                padding: "6px",
                top: "-6px",
                position: "relative",
              }}
            >
              Sq .Yard/Monthly
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ marginTop: "10px", fontSize: "12px", color: "gray" }}
            >
              Minimum
            </Typography>
            <SliderComponent color="green" value={75} />
            <Box
              sx={{
                border: "1px solid #d8d8d8",
                borderRadius: "5px",
                padding: "5px",
                alignItems: "left",
                paddingLeft: "10px",
                top: "-4px",
                position: "relative",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>$190</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "8px",
                color: "gray",
                padding: "6px",
                top: "-6px",
                position: "relative",
              }}
            >
              Sq .Yard/Monthly
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ marginTop: "10px", fontSize: "12px", color: "gray" }}
            >
              Step
            </Typography>
            <SliderComponent color="orange" value={40} />
            <Box
              sx={{
                border: "1px solid #d8d8d8",
                borderRadius: "5px",
                padding: "5px",
                alignItems: "left",
                paddingLeft: "10px",
                top: "-4px",
                position: "relative",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>$190</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "8px",
                color: "gray",
                padding: "6px",
                top: "-6px",
                position: "relative",
              }}
            >
              Sq .Yard/Monthly
            </Typography>
          </Box>
        </Box>
      ) : null}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "white",
          position: "relative",
          bottom: title === "Primary" ? "0px" : "-25px",
          width: "100%",
        }}
      >
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            marginLeft: "20px",
            textTransform: "none",
          }}
          onClick={() => onClose()}
        >
          Back
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(80,120,225)",
            color: "white",
            marginLeft: "20px",
            textTransform: "none",
          }}
          onClick={() => onClose()}
        >
          Create Pricing Component
        </Button>
      </Box>
    </Box>
  );
};

export default Primary;
