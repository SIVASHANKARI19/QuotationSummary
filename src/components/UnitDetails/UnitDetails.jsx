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
  IconButton,
} from "@mui/material";
import PropertyDetails from "../Discount/Discount";
import { CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconBase } from "react-icons/lib";

const Unit = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const units = useSelector((state) => state.units.selectedAmenities);
  const total = useSelector((state) => state.units.totalAmenitiesPrice);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <DialogTitle padding={0} fontFamily={"Nunito Sans"} fontSize={"0.9rem"} fontWeight={"600"}sx={{  }} >Unit Details</DialogTitle>
        <IconButton  onClick={handleClose}>   <CloseOutlined sx={{fontsize:"14px"  }}/></IconButton>
     
      </Box>
      <Divider />
      <DialogContent>
        <Box display={"flex"}>
          <PropertyDetails />
          <Box
            sx={{
              paddingLeft: 2,
              flexGrow: 1,
              backgroundColor: "#F8F9FB",
              pt: "1rem",
              borderRadius: "5px",
            }}
          >            <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem",fontWeight:"600" }}>
              UNIT PRICING DETAILS
            </Typography>
            <List  sx={{ overflowY: "scroll", scrollbarWidth: "none", height: "250px" }}>
              {units.map((unit, index) => (
                <ListItem key={index} divider>
            <ListItemText 
  primary={unit.name} 
  primaryTypographyProps={{ style: { fontSize: '12px' } }} 
/>

<Typography fontSize={'0.7rem'} sx={{ color: "#4E5A6B", fontWeight: "600", fontFamily: 'Nunito Sans', mr: '2rem' }}>
                          ${unit.price}
                        </Typography>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                height: "9rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
         <Grid container justifyContent="space-between" sx={{ padding: '10px 0', backgroundColor: '#E4E8EE', paddingLeft: '2rem', borderRadius: '5px', alignItems: 'center', marginTop: 'auto',marginBottom: '1rem' }}>
                  <Typography variant="body2" sx={{ fontWeight: "600",fontFamily: 'Nunito Sans' }}>Final Total</Typography>
                  <Typography variant="body2" sx={{ mr: '3rem', fontWeight: "600",fontFamily: 'Nunito Sans' }}>$ {total}</Typography>
                </Grid>
            
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Unit;
