import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import PropertyDetails from "./../Discount/Discount";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { MenuItem, Select, InputBase } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addDiscount } from '../../redux/PricingSlice'; // Import the action

const AddDiscount = ({ close }) => {
  const [open, setOpen] = useState(true);
  const [selectedValues, setSelectedValues] = useState(Array(5).fill("")); // Array to store selected values for each item
  const [discountValues, setDiscountValues] = useState(Array(5).fill("")); // State to store discount input values
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleClose = () => {
    setOpen(false);
    close();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const CustomInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      fontSize: "0.5rem",
      fontWeight: "600",
      fontFamily: "Nunito Sans",
      backgroundColor: "white",
      color: "black",
    },
  }));

  const handleChange = (event, index) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = event.target.value;
    setSelectedValues(newSelectedValues);

    // Update discount values state
    const newDiscountValues = [...discountValues];
    newDiscountValues[index] = event.target.value; // Assuming event.target.value is the discount value
    setDiscountValues(newDiscountValues);

    // Dispatch the addDiscount action
    dispatch(addDiscount(event.target.value)); // Dispatch the discount value to the Redux store
  };

  return (
    <Box open={open} onClose={handleClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "0.9rem",
            color: "black",
            fontFamily: "Nunito Sans",
            fontWeight: "600",
            position: "relative",
            top: "-10px",
          }}
        >
          Add Discount to Unit
        </DialogTitle>
        <IconButton> <CloseOutlined
          onClick={handleClose}
          sx={{ cursor: "pointer", position: "relative", top: "-10px" }}
        /></IconButton>
       
      </Box>
      <Divider sx={{ mt: -2, mb: -1 }} />
      <DialogContent
        sx={{
          overflowY: "auto",
          fontFamily: "Nunito Sans",
        }}
      >
        <Box display={"flex"}>
          <PropertyDetails />
          <Box
            sx={{
              paddingLeft: 2,
              flexGrow: 1,
              backgroundColor: "#F8F9FB",
              pt: "1rem",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "0.8rem", fontWeight: "bold", fontFamily: "Nunito Sans" }}
            >
              UNIT PRICE DETAIL
            </Typography>
            <List sx={{ fontSize: "10px",
                    fontFamily: "Nunito Sans",
                    fontWeight: "bold", }}>
              {[
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
                "Bill Name Here",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  divider
                  sx={{
                    padding: "4px 16px",
                    fontSize: "10px",
                    fontFamily: "Nunito Sans",
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ListItemText
                      primary={
                        <Typography sx={{fontSize: "12px",
                          fontFamily: "Nunito Sans",
                          fontWeight: "bold", }}>
                          {item}
                        </Typography>
                      }
                    />
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: "10px",
                            textAlign: "right",
                            fontFamily: "Nunito Sans",
                            fontWeight: "bold",
                          }}
                        >
                          $10,000
                        </Typography>
                      }
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "4px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontFamily: "Nunito Sans",
                        color: "grey",
                      }}
                    >
                      Discount
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <input
                        type="text"
                        style={{
                          fontSize: "10px",
                          width: "4rem",
                          fontFamily: "Nunito Sans",
                          color: "grey",
                          backgroundColor: "white",
                          border: "1px solid lightgrey",
                          borderRadius: "2px",
                          padding: "2px 8px",
                        }}
                        onChange={(e) => {
                          const newDiscountValues = [...discountValues];
                          newDiscountValues[index] = e.target.value; // Update discount value
                          setDiscountValues(newDiscountValues);
                          dispatch(addDiscount(e.target.value)); // Dispatch the updated value
                        }}
                      />

                      <Select
                        labelId="custom-select-label"
                        value={selectedValues[index]}
                        onChange={(event) => handleChange(event, index)}
                        displayEmpty
                        IconComponent={null}
                        input={<CustomInput />}
                        renderValue={(value) => (
                          <span style={{ fontWeight: "bold", color: "black" }}>
                            {value ? value : "AED"}
                          </span>
                        )}
                        sx={{
                          height: "1.5rem",
                          width: "5rem",
                          border: "1px solid lightgrey",
                          fontSize: "1rem",
                          boxSizing: "border-box",
                          "&:hover": {
                            borderColor: "gray",
                          },
                          "& .MuiSelect-select": {
                            padding: "0 8px",
                          },
                        }}
                        onOpen={handleOpen}
                        endAdornment={
                          open ? (
                            <KeyboardArrowUpIcon
                              sx={{
                                position: "absolute",
                                right: 0,
                                fontSize: "0.5rem",
                              }}
                            />
                          ) : (
                            <KeyboardArrowDownIcon
                              sx={{
                                position: "absolute",
                                right: 0,
                                fontSize: "0.5rem",
                              }}
                            />
                          )
                        }
                      >
                        <MenuItem
                          value="AED"
                          sx={{ fontWeight: "bold", fontSize: "0.6rem" }}
                        >
                          AED
                        </MenuItem>

                        <MenuItem
                          value="$100,000"
                          sx={{ fontWeight: "bold", fontSize: "0.6rem" }}
                        >
                          $100,000
                        </MenuItem>
                      </Select>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>

            <Grid
              container
              justifyContent="space-between"
              sx={{
                padding: "10px 10px",
                backgroundColor: "#E4E8EE",
                paddingLeft: "2rem",
                borderRadius: "5px",
                alignItems: "center",
                mt: "5rem",
              }}
            >
              <Typography variant="body1" sx={{ mr: "0.3rem",fontSize:"0.8rem",fontWeight:"bold" }}>Final Total</Typography>
              <Typography  sx={{ mr: "0.3rem",fontSize:"0.8rem",fontWeight:"bold" }}>
                $1,200
              </Typography>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: "1rem",width:"100%" ,textTransform:"capitalize" }}
              onClick={() => {
                console.log(discountValues); // Log the discount values on button click
              }}
            >
              Save Discount
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Box>
  );
};

export default AddDiscount;
