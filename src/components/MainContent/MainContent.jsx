import React, { useEffect } from "react";
import Grid2 from "@mui/material/Grid2";
import LeadDetails from "../LeadDetails/LeadDetails";
import UnitDetails from "../LeadDetails/UnitDetails";
import QuotationSummary from "../LeadDetails/QuotationSummary";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Typography, Box, Button } from "@mui/material";
import QuotationDetails from "../LeadDetails/QuotationDetails/QuotationDetails";
import four from "../../assets/4.png";
import house from "../../assets/house.jpg";
import { useDispatch } from "react-redux";
import { setUnits } from "../../redux/PricingSlice";

const MainContent = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="rgba(80,120,225)"
      href="/"
      fontFamily={"Nunito Sans"}
      fontSize={"14px"}
      fontWeight={"bold"}
      onClick={handleClick}
    >
      Add Contact
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="rgba(80,120,225)"
      fontFamily={"Nunito Sans"}
      fontSize={"14px"}
      onClick={handleClick}
      fontWeight={"bold"}
    >
      Lead Details
    </Link>,
    <Typography
      key="3"
      sx={{ color: "rgb(80,120,225)" }}
      fontFamily={"Nunito Sans"}
      fontSize={"14px"}
      fontWeight={"bold"}
    >
      Preview and create Lead
    </Typography>,
    <Typography
      key="3"
      sx={{ color: "rgb(80,120,225)" }}
      fontFamily={"Nunito Sans"}
      fontSize={"14px"}
      fontWeight={"bold"}
    >
      Preview and create Lead
    </Typography>,
    <Box
      key="5"
      sx={{ display: "flex", alignItems: "center", color: "rgb(80,120,225)" }}
      fontFamily={"Nunito Sans"}
      fontSize={"14px"}
    >
      <img
        src={four}
        alt="four"
        width="15px"
        height="15px"
        style={{ marginRight: "8px" }}
      />
      <Typography
        key="3"
        sx={{ color: "rgb(80,120,225)" }}
        fontFamily={"Nunito Sans"}
        fontSize={"14px"}
        fontWeight={"bold"}
      >
        Preview and create Lead
      </Typography>
    </Box>,
  ];
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const leaseStartDate = "30 Jan 22";
  const leaseEndDate = "30 Jan 23";
  const rentStartDate = "01 Feb 22";
  const gracePeriod = "90 Days";
  const unitsData = [
    {
      id: 1,
      name: "Jumeirah Estate",
      price: "$500.00",
      description: "Golf Estate",
      sqrFt: 2000,
      img: house,
      hotelCount: 3,
      bedCount: 3,
      homeCount: "2BHK",
    },
    {
      id: 2,
      name: "Jumeirah Estate",
      price: "$250.00",
      description: "Downtown Dubai",
      sqrFt: 2500,
      img: house,
      hotelCount: 2,
      bedCount: 2,
      homeCount: "2BHK",
    },
    {
      id: 3,
      name: "Jumeirah Estate",
      price: "$250.00",
      description: "Downtown Dubai",
      sqrFt: 2500,
      img: house,
      hotelCount: 2,
      bedCount: 2,
      homeCount: "2BHK",
    },
    {
      id: 4,
      name: "Jumeirah Estate",
      price: "$150.00",
      description: "Downtown Dubai",
      sqrFt: 2500,
      img: house,
      hotelCount: 2,
      bedCount: 2,
      homeCount: "2BHK",
    },

    // Add other unit data here
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDialogOpen(true);
  };
  const dropdownOptions = [
    "Add Pricing Component",
    "Add Amenities",
    "Add Utilities",
    "Add Discount",
    "Remove Component",
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUnits(unitsData));
  }, []);

  return (
    <Box
      sx={{
        
        width: "93vw",
        alignItems: "center",
         boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          padding: "10px",
          paddingLeft: "20px",
          borderBottom: "1px solid #e1e1e1",
        }}
      >
        {" "}
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              sx={{ color: "rgb(80,120,225)", fontWeight: "bold" }}
            />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <Grid2
        container
        spacing={0}
        sx={{
          flexGrow: 1, 
          display: "flex",
          paddingTop: "0",
          height: "65vh",
          width: "93vw",
        }}
      >
        <Grid2
          size={4}
          padding={2}
          sx={{
            flexGrow: 1, 
            display: "flex",
            backgroundColor: "white",
            flexDirection: "column",
          }}
        >
          <Typography
            padding={1}
            sx={{
              color: "#4E5A6B",
              fontSize: "14px",
              position: "relative",
              top: "-15px",
              fontWeight: "bold",
            
              
            }}
          >
            Lead Details{" "}
          </Typography>
          <LeadDetails />
          <QuotationDetails
            leaseStartDate={leaseStartDate}
            leaseEndDate={leaseEndDate}
            rentStartDate={rentStartDate}
            gracePeriod={gracePeriod}
          />
        </Grid2>
        <Grid2
          size={4.5}
          sx={{
            flexGrow: 1,
            display: "flex",
            alignSelf: "flex-start",

            flexDirection: "column",
          }}
        >
          <Typography
            padding={1}
            sx={{
              color: "#4E5A6B",
              fontSize: "14px",
              fontWeight: "bold",
              position: "relative",
              paddingTop: "10px",
              paddingLeft: "20px",
            }}
          >
            Unit Details
          </Typography>
          <Box ml={2}>
            <UnitDetails
              unitsData={unitsData}
              dropdownOptions={dropdownOptions}
              onOptionSelect={handleOptionSelect}
            />
          </Box>
        </Grid2>
        <Grid2
          size={3.5}
          sx={{
            flexGrow: 1, 
            display: "flex",
            backgroundColor: "white",
            flexDirection: "column",
            height: "65vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            padding={2}
            backgroundColor="white"
            sx={{
              color: "#4E5A6B",
              fontSize: "14px",
              width: "88.5%",
              fontWeight: "bold",
              position: "relative",
              paddingTop: "10px",
              paddingLeft: "0px",
              
              
            }}
          >
            Quotation Details
          </Typography>
          <QuotationSummary />
        </Grid2>
      </Grid2>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            width: "93vw",
            paddingBottom: "2px",
            padding: 2,
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        >
          <Box>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #d8d8d8",
                textTransform: "none",
              
                fontWeight: "bold",
                fontFamily: "Nunito Sans",
              }}
              contained
            >
              Previous
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #d8d8d8",
                textTransform: "none",
                marginLeft: "20px",
                fontWeight: "bold",
                fontFamily: "Nunito Sans",
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "rgb(80,120,225)",
                color: "white",
                marginLeft: "20px",
                textTransform: "none",

                fontFamily: "Nunito Sans",
              }}
            >
              Create Quotation
            </Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default MainContent;

