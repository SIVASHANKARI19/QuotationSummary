import { Box, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import house from '../../assets/house.jpg'; // Adjust the image path as necessary
import HotelIcon from '@mui/icons-material/Hotel';
import BedIcon from '@mui/icons-material/Bed';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import Dropdown from '../Dropdown/Dropdown';
import Amenities from '../Amenities/Amenities';
import PricingComponent from '../PricingComponent/PricingComponent';
import Utilities from '../Utilities/Utilities';
import Discount2 from '../Discount/RemoveComponent';
import { GoHome } from "react-icons/go";
import { LuBath } from "react-icons/lu";
import { FaBed } from "react-icons/fa";

import { FaBath } from "react-icons/fa6";
const unitsData = [
  {
    id: 1,
    name: 'Jumeirah Estate',
    price: '$900.00',
    description: 'Golf Estate',
    sqrFt: 2000,
    img: house, // You can replace this with different images if needed
    hotelCount: 3,
    bedCount: 3,
    homeCount: '2BHK',
  },
  {
    id: 2,
    name: 'Burj Khalifa',
    price: '$1,200.00',
    description: 'Downtown Dubai',
    sqrFt: 2500,
    img: house,
    hotelCount: 2,
    bedCount: 2,
    homeCount: '2BHK',
  },
  {
    id: 3,
    name: 'Palm Jumeirah',
    price: '$1,800.00',
    description: 'Palm Island',
    sqrFt: 2500,
    img: house,
    hotelCount: 4,
    bedCount: 3,
    homeCount: '2BHK',
  },
  {
    id: 4,
    name: 'Dubai Marina',
    price: '$1,500.00',
    description: 'Dubai Marina',
    sqrFt: 2500,
    img: house,
    hotelCount: 3,
    bedCount: 3,
    homeCount: '2BHK',
  },
  {
    id: 5,
    name: 'Dubai Marina',
    price: '$1,500.00',
    description: 'Dubai Marina',
    sqrFt: 2500,
    img: house,
    hotelCount: 3,
    bedCount: 3,
    homeCount: '2BHK',
  },
];
const UnitDetails = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const dropdownOptions = ["Add Pricing Component", "Add Amenities", "Add Utilities", "Add Discount", "Remove Component"];

  const handleDropdownToggle = (event) => {
    setShowDropDown((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDialog = () => {
    if(selectedOption === "Add Amenities"){
      console.log("hello");
    }
    setDialogOpen(false);
    setSelectedOption(null); // Reset selected option when dialog closes
};


  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Update the selected option
    console.log('Option selected in UnitDetails:', option);
    
    // Open the dialog if the selected option is "Add Pricing Component"
    if (option === "Add Pricing Component" || option === "Add Amenities" || option ==="Add Utilities" || option === "Add Discount") {
        setDialogOpen(true);
    }
};


  return (
    <Box  sx ={{display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Exactly 2 columns
    gap: '10px', // Spacing between the grid items
    padding: '10px', // Some padding around the grid for better layout
    overflowY: 'auto', 
    scrollbarWidth: 'none', // Enable scrolling if the content exceeds height
    maxHeight: '58vh',
  }}>
      {unitsData.map((unit) => (
        <Card key={unit.id} sx={{ width: "92%", display: 'flex', flexDirection: 'column', height: "100%" }}>
          <Box sx={{ padding: 1, paddingBottom: 0 }}>
            <CardMedia
              sx={{ height: 105, borderRadius: 1 ,alignSelf: 'center',justifyContent: 'center'}}
              image={unit.img}
              title={unit.name}
            />
          </Box>
          <CardContent sx={{ paddingBottom: 0, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              
              <Typography fontSize={14} fontWeight={600}>
                {unit.name}
              </Typography>
              <Typography fontSize={14} fontWeight={600} >
                {unit.price}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex',flexDirection: 'row',alignItems: 'center', justifyContent: 'center',justifyContent: 'space-around',alignItems: 'center',paddingBottom: 1.5}}>
              <Typography variant="body2" sx={{ color: 'rgb(194,199,205)', fontSize: 13 }}>
                {unit.description}

              </Typography>
              <Typography color='rgb(194,199,205)'>
              • 
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgb(194,199,205)', fontSize: 13 }}>
                {unit.sqrFt} sqft
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: 'rgb(194,199,205)', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <HotelIcon fontSize="small" sx={{ mr: 0.5 }} /> {unit.hotelCount}
                <Typography sx={{ mr: 1 }}>•</Typography>
                <LuBath  fontSize="medium" sx={{ mr: 0.5 }} /> {unit.bedCount}
                <Typography sx={{ mx: 1 }}>•</Typography>
                <GoHome  fontSize="medium" sx={{ mr: 0.1 }} /> {unit.homeCount}
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={handleDropdownToggle}
              size="small"
              sx={{ display: 'flex', alignItems: 'center',textTransform: 'none', fontSize: 12,padding: 0,}}
            >
              <AddIcon sx={{fontSize: 12,mr: 1}} />
              Custamize
            </Button>
          </CardActions>
        </Card>
      ))}
      
      {showDropDown && (
        <Dropdown
          setShowDropDown={() => setShowDropDown(false)}
          options={dropdownOptions}
          anchorEl={anchorEl}
          onOptionSelect={handleOptionSelect} // Pass the callback to handle the selected option
        />
      )}
      
      {/* Render the selected option */}
      {selectedOption==="Add Pricing Component" && (
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
       
        <DialogContent>
           <PricingComponent />
        </DialogContent>
      
      </Dialog>
      )}
        {selectedOption==="Add Amenities" && (
        
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
       
        <DialogContent>
           <Amenities close ={handleCloseDialog}/>
        </DialogContent>
      
      </Dialog>
      )}
      {selectedOption==="Add Utilities" && (
        
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
       
        <DialogContent>
           <Utilities close={handleCloseDialog} />
        </DialogContent>
      
      </Dialog>
      )}
      {selectedOption==="Remove Component" && (
        
        <Dialog open={dialogOpen} onClose={handleCloseDialog}   maxWidth="1000px"  >
           <Discount2 close={handleCloseDialog} />
       </Dialog>
      )}
    </Box>
  );
};

export default UnitDetails;
