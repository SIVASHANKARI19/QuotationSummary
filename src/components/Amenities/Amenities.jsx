import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Checkbox,FormControlLabel,Radio, RadioGroup } from "@mui/material";
import amenityImage from "../../assets/amenities.png";
import ExampleStrapiSwitch from "../Toggle";
import { useDispatch, useSelector } from "react-redux";
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
      <Typography
        variant="h6"
        padding={1}
        marginTop={2}
        fontSize={18}
        color="gray"
      >
        Amenities
      </Typography>
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
            src={amenityImage}
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
        {amenities.map((amenity) => (
          <Box key={amenity.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                border: "1px solid #d8d8d8",
                borderRadius: "5px",
                width: "25vw",
                flexWrap: "wrap",
                overflow: "hidden",
                transition: "0.3s ease",
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
                  }}
                >
                  {amenity.name}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "14px", md: "12px" }, color: "gray" }}
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
      height: "4vh",
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
              color: "#6e86d0",
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
        fontSize: "0.5rem",
        "& .MuiFormControlLabel-label": {
          color: "lightgray",
          fontSize: "0.9rem", // Set your preferred font size
        },
      }}
    />
  </Box>
)}

          </Box>
        ))}

        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "50px",
            backgroundColor: "rgb(80,120,225)",
            padding: "20px",
            textTransform: "none",
            marginTop: "20px",
            marginBottom: "20px",
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
