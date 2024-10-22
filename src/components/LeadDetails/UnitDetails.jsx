import {
  Box,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import house from "../../assets/house.jpg"; // Adjust the image path as necessary
import HotelIcon from "@mui/icons-material/Hotel";
import BedIcon from "@mui/icons-material/Bed";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import Dropdown from "../Dropdown/Dropdown";
import Amenities from "../Amenities/Amenities";
import PricingComponent from "../PricingComponent/PricingComponent";
import Utilities from "../Utilities/Utilities";
import Discount2 from "../Discount/RemoveComponent";
import { GoHome } from "react-icons/go";
import { LuBath } from "react-icons/lu";
import { FaBed } from "react-icons/fa";
import { DeleteOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { deleteUnit } from "../../redux/PricingSlice";
import Unit from "../UnitDetails/UnitDetails"; // Adjust the import path as necessary
import AddDiscount from "../RemoveComponent/AddDiscount";

const UnitDetails = (
  {
    // unitsData,
    // showDropDown,
    // handleDropdownToggle,
    // anchorEl,
    // handleOptionSelect,
    // selectedOption,
    // dialogOpen,
    // handleCloseDialog,
    // PricingComponent,
    // Amenities,
    // Utilities,
    // Discount2,
  }
) => {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units.units);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showUnitData, setShowUnitData] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleDropdownToggle = (event) => {
    setShowDropDown((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };
  const dropdownOptions = [
    "Add Pricing Component",
    "Add Amenities",
    "Add Utilities",
    "Add Discount",
    "Remove Component",
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Update the selected option
    console.log("Option selected in UnitDetails:", option);

    // Open the dialog if the selected option is "Add Pricing Component"
    if (
      option === "Add Pricing Component" ||
      option === "Add Amenities" ||
      option === "Add Utilities" ||
      option === "Add Discount" ||
      option === "Remove Component"
    ) {
      setDialogOpen(true);
    }
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedOption(null); // Reset selected option when dialog closes
    setShowUnitData(false); // Reset showUnitData when closing the unit details
  };

  const handleImageClick = (unit) => {
    setSelectedUnit(unit); // Set the selected unit to be passed to the Unit component
    setShowUnitData(true); // Show the unit data
  };

  useEffect(() => {
    console.log("Updated units:", units); // Log updated units
  }, [units]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        padding: "10px",
        overflowY: "scroll",
        scrollbarWidth: "none",
        maxHeight: "58vh",
        position: "relative",
      }}
    >
      {units.map((unit) => (
        <Card
          key={unit.id}
          sx={{
            width: "92%",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box sx={{ padding: 1, paddingBottom: 0, position: "relative" }}>
            <CardMedia
              // Updated image click handler
              sx={{
                height: 105,
                borderRadius: 1,
                alignSelf: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              image={unit.img}
              title={unit.name}
              onClick={() => handleImageClick(unit)}
            />

            <DeleteOutline
              sx={{
                cursor: "pointer",
                color: "red",
                fontSize: "1.2rem",
                borderRadius: "50%",
                backgroundColor: "white",
                padding: "2px",
                position: "absolute",
                top: "15px",
                right: "16px",
              }}
              onClick={() => {
                dispatch(deleteUnit(unit.id));
              }}
            />
          </Box>
          <CardContent
            sx={{
              paddingBottom: 0,
              display: "flex",
              flexDirection: "column",
              fontFamily: "Nunito Sans",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                fontSize={13}
                fontWeight={600}
                fontFamily={"Nunito Sans"}
              >
                {unit.name}
              </Typography>
              <Typography
                fontSize={13}
                fontWeight={600}
                fontFamily={"Nunito Sans"}
              >
                {unit.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "SPACE-BETWEEN",
                paddingBottom: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(194,199,205)",
                  fontSize: 13,
                  fontFamily: "Nunito Sans",
                }}
              >
                {unit.description}
              </Typography>
              <Typography color="rgb(194,199,205)">•</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(194,199,205)",
                  fontSize: 13,
                  fontFamily: "Nunito Sans",
                }}
              >
                {unit.sqrFt} sqft
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(194,199,205)",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-BETWEEN",
                }}
              >
                <HotelIcon fontSize="small" sx={{ mr: 0.5 }} />{" "}
                {unit.hotelCount}
                <Typography sx={{ mr: 1 }}>•</Typography>
                <LuBath fontSize="medium" sx={{ mr: 0.5 }} /> {unit.bedCount}
                <Typography sx={{ mr: 1 }}>•</Typography>
                <GoHome fontSize="medium" sx={{ mr: 0.1 }} /> {unit.homeCount}
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              onClick={handleDropdownToggle}
              size="small"
              sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                fontSize: 12,
                padding: 0.2,
                fontFamily: "Nunito Sans",
              }}
            >
              <AddIcon sx={{ fontSize: 12, mr: 1 }} />
              Customize
            </Button>
          </CardActions>
        </Card>
      ))}

      {showDropDown && (
        <Dropdown
          setShowDropDown={() => setShowDropDown(false)}
          options={dropdownOptions}
          anchorEl={anchorEl}
          onOptionSelect={handleOptionSelect}
        />
      )}

      {/* Render the selected option */}
      {selectedOption === "Add Pricing Component" && (
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <PricingComponent />
          </DialogContent>
        </Dialog>
      )}
      {selectedOption === "Add Amenities" && (
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <Amenities close={handleCloseDialog} />
          </DialogContent>
        </Dialog>
      )}
      {selectedOption === "Add Utilities" && (
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <Utilities close={handleCloseDialog} />
          </DialogContent>
        </Dialog>
      )}
      {selectedOption === "Remove Component" && (
        <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md">
          <DialogContent>
            <Discount2 close={handleCloseDialog} />
          </DialogContent>
        </Dialog>
      )}
      {selectedOption === "Add Discount" && (
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          sx={{
            scrollbarWidth: "none",
            msScrollbarWidth: "none",
            fontFamily: "Nunito Sans",
            height: "100vh",
          }}
        >
          <DialogContent>
            <AddDiscount close={handleCloseDialog} />
          </DialogContent>
        </Dialog>
      )}
      {showUnitData && <Unit onClose={handleCloseDialog} />}
    </Box>
  );
};

export default UnitDetails;
