import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PropertyDetails from "./../Discount/Discount";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { MenuItem, Select, InputBase } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
const AddDiscount = () => {
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClose = () => {
    setOpen(false);
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

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
            fontSize: "0.8rem",
            color: "black",
            fontFamily: "Nunito Sans",
            fontWeight: "600",
          }}
        >
          Add Discount to unit
        </DialogTitle>
        <CloseOutlined onClick={handleClose} />
      </Box>
      <Divider sx={{ mt: -2, mb: -1 }} />
      <DialogContent
        sx={{
          overflowY: "auto",
          scrollbarWidth: "none",
          msScrollbarWidth: "none",
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
            <Typography variant="h6" gutterBottom sx={{ fontSize: "0.8rem" }}>
              UNIT PRICE DETAIL
            </Typography>
            <List style={{ mb: 19, fontSize: "8px" }}>
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
                  style={{
                    padding: "4px 16px",
                    fontSize: "8px",
                    display: "block",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ListItemText
                      primary={
                        <Typography style={{ fontSize: "10px" }}>
                          {item}
                        </Typography>
                      }
                    />
                    <ListItemText
                      primary={
                        <Typography
                          style={{ fontSize: "10px", textAlign: "right" }}
                        >
                          $10,000
                        </Typography>
                      }
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "4px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "12px",
                        fontFamily: "Nunito Sans",
                        color: "grey",
                      }}
                    >
                      Discount
                    </Typography>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        style={{
                          fontSize: "10px",
                          fontFamily: "Nunito Sans",
                          color: "grey",
                          backgroundColor: "white",
                          border: "1px solid lightgrey",
                          borderRadius: "5px",
                          padding: "2px 8px",
                        }}
                      >
                        100,000
                      </button>
                      <Select
                        labelId="custom-select-label"
                        value={selectedValue}
                        onChange={handleChange}
                        displayEmpty
                        IconComponent={null}
                        input={<CustomInput />}
                        renderValue={(value) => (
                          <span style={{ fontWeight: "bold", color: "black" }}>
                            {value ? value : "AED"}
                          </span>
                        )}
                        sx={{
                          height: "1.5rem", // Adjusted height
                          width: "5 rem",
                          // Removed padding
                          fontSize: "1rem", // Adjusted font size
                          // Custom padding for selected value
                          // Minimum height adjustment
                        }}
                        onOpen={handleOpen}
                        onClose={handleClose}
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
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>

            <Grid
              container
              justifyContent="space-between"
              style={{
                padding: "5px 10px",
                marginLeft: "0rem",
                backgroundColor: "#E4E8EE",
                paddingLeft: "2rem",
                borderRadius: "5px",
                alignItems: "center",
                mt: "5rem",
              }}
            >
              <Typography variant="body1">Final Total</Typography>
              <Typography variant="h6" sx={{ mr: "0.3rem" }}>
                $1,200
              </Typography>
            </Grid>

            <Divider style={{ margin: "10px 0" }} />

            <Button variant="contained" color="primary" sx={{ width: "100%" }}>
              Update & Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Box>
  );
};

export default AddDiscount;
