import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Checkbox,FormControlLabel,Radio, RadioGroup, Divider, IconButton } from "@mui/material";
import amenityImage from "../../assets/interior.jpg";
import ExampleStrapiSwitch from "../Toggle";
import { useDispatch, useSelector } from "react-redux";
import { CloseOutlined } from "@mui/icons-material";
import Amentity from '../../assets/amenities.png'
import {
  addSelectedAmenity,
  removeSelectedAmenity,
  setSelectedAmenities,
} from "../../redux/PricingSlice";

const amenitiesData = [
  {
    id: 1,
    name: "swimming pool",
    price: "$20.00",
    validity: "Valid Feb-12 - Feb-27 23",
    image: amenityImage,
    checked: false,
    additionalChecked: false,
  },
  {
    id: 2,
    name: "Gym",
    price: "$25.00",
    validity: "Valid Mar-01 - Mar-15 23",
    image: amenityImage,
    checked: false,
    additionalChecked: false,
  },
  {
    id: 3,
    name: "fireplace",
    price: "$20.00",
    validity: "Valid Feb-12 - Feb-27 23",
    image: amenityImage,
    checked: false,
    additionalChecked: false,
  },
  {
    id: 4,
    name: "Gym",
    price: "$25.00",
    validity: "Valid Mar-01 - Mar-15 23",
    image: amenityImage,
    checked: false,
    additionalChecked: false,
  },
  {
    id: 5,
    name: "fireplace",
    price: "$20.00",
    validity: "Valid Feb-12 - Feb-27 23",
    image: amenityImage,
    checked: false,
    additionalChecked: false,
  }, {
    id: 6,
    name: "Gym",
    price: "$25.00",
    validity: "Valid Mar-01 - Mar-15 23",
    image: amenityImage,
    checked: false,
    additionalChecked: false,
  },
  {
    id: 7,
    name: "fireplace",
    price: "$20.00",
    validity: "Valid Feb-12 - Feb-27 23",
    image: amenityImage,
    checked: false,
    additionalChecked: false,
  },
];

const Amenities = ({ close }) => {
  const [amenities, setAmenities] = useState(amenitiesData);
  const dispatch = useDispatch();

  useEffect(() => {
    const selected = amenities.filter((amenity) => amenity.checked);
    dispatch(setSelectedAmenities(selected));
  }, [amenities, dispatch]);

  const handleToggleChange = (id, newChecked) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id ? { ...amenity, checked: newChecked } : amenity
      )
    );

    const selectedAmenity = amenities.find((amenity) => amenity.id === id);
    if (newChecked) {
      dispatch(addSelectedAmenity(selectedAmenity));
    } else {
      dispatch(removeSelectedAmenity(id));
    }
  };

  const handleAdditionalCheckboxChange = (id, newChecked) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id
          ? { ...amenity, additionalChecked: newChecked }
          : amenity
      )
    );
  };

  const handleSave = () => {
    const selected = amenities.filter((amenity) => amenity.checked);
    dispatch(setSelectedAmenities(selected));
    close(); // Close the modal or popup
  };

  const totalAmenties = useSelector((state) => state.units.totalAmenities);
  const totalAmenitiesPrice = useSelector(
    (state) => state.units.totalAmenitiesPrice
  );

  return (
    <Box sx={{ overflow: "hidden", width: "25vw" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography
        variant="h6"
        padding={1}
    
        fontSize={14}
        fontWeight={"bold"}
        fontFamily={"Nunito Sans"}
      >
     Add   Amenities
      </Typography>
      <IconButton>
      <CloseOutlined
  onClick={() => close()}  // Call the close function when 'X' is clicked
  sx={{ cursor: "pointer", position: "relative", fontSize: "18px" }}
/></IconButton>

        </Box>
      <Divider sx={{ mb: "10px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "25vw",
            backgroundColor: "rgb(254,244,244)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Box
            component="img"
            src={Amentity}
            alt="Lead Profile"
            sx={{ height: 40, width: 40 }}
          />
          <Typography color="rgb(179,119,109)" fontSize={13}>
            <span
              style={{
                fontWeight: "bold",
                color: "rgb(179,119,109)",
                paddingRight: "5px",
                fontSize: "12px",
              }}
            >
              {totalAmenties}
            </span>{" "}
            Total Amenities
          </Typography>
          <Box>
            <Typography
              paddingLeft={"150px"}
              color="rgb(179,119,109)"
              fontWeight={"bold"}
              fontSize={13}
            >
              ${totalAmenitiesPrice.toFixed(2)}
            </Typography>
          </Box>
        </Box>
        <Typography color="gray" marginRight={"270px"} fontSize={12}>
          Available Amenities
        </Typography>
        <Box sx={{overflow:"scroll",height:"300px",width:"25vw",scrollbarWidth:"none",gap:"10px"}}>
        {amenities.map((amenity) => (
          <Box key={amenity.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                border: "1px solid #d8d8d8",
                borderRadius: "5px",
                marginBottom: "10px",
                width: "25vw",
                flexWrap: "wrap",
                overflow: "hidden",
                transition: amenity.checked
                  ? "all 2s ease-in-out"
                  : "all 2s ease-in-out",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            >
              <Box
                component="img"
                src={amenity.image}
                alt={`${amenity.name} Icon`}
                sx={{
                  height: 50,
                  padding: 1,
                  width: 50,
                  borderRadius: "20%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "12px" },
                    fontWeight: "bold",
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  {amenity.name}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "14px", md: "12px" }, color: "gray",fontFamily: 'Nunito Sans' }}
                >
                  {amenity.price} • {amenity.validity}
                </Typography>
              </Box>
              <ExampleStrapiSwitch
                id={amenity.id}
                initialChecked={amenity.checked}
                onToggle={handleToggleChange}
              />
            </Box>

            {amenity.checked && (
  <Box
    key={`extra-info-${amenity.id}`}
    sx={{
      borderTop: "none",
      width: "25vw",
      height: "1vh",
      marginBottom: "30px",
      transition: "0.3s ease",
      textAlign: "center",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
    }}
  >
    <FormControlLabel
      control={
        <Radio
          size="small"
          sx={{
            color: "grey",
            "&.Mui-checked": {
              color: "#5078E1",
            },
          }}
          checked={amenity.additionalChecked} // Manage checked state
          onClick={() =>
            handleAdditionalCheckboxChange(amenity.id, !amenity.additionalChecked)
          } // Toggle checked state
        />
      }
      label="Free applicability"
      sx={{
        ml: 0,
        mr: 0,
        border: "1px solid lightgrey",
        borderRadius: "5px",
        borderTop: "none",
        width: "25vw",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        fontSize: "0.2rem",
        
        "& .MuiFormControlLabel-label": {
          color: "black",
          fontSize: "0.6rem",
          fontFamily: "Nunito Sans", // Set your preferred font size
        },
      }}
    />
  </Box>
)}

          </Box>
        ))}
</Box>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "35px",
            backgroundColor: "rgb(80,120,225)",
            padding: "20px",
            textTransform: "none",
            marginTop: "20px",
           fontFamily: "Nunito Sans",
            fontSize: "14px",
          }}
          onClick={() => close()}
        >
          Update & Save
        </Button>
      </Box>
    </Box>
  );
};

export default Amenities;
