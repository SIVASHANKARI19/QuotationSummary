import { Box, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import interior from '../../assets/interior.jpg'; // Adjust the image path as necessary
import HotelIcon from '@mui/icons-material/Hotel';
import BedIcon from '@mui/icons-material/Bed';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import Dropdown from '../Dropdown/Dropdown';
import Amenities from '../Amenities/Amenities';
import PricingComponent from '../PricingComponent/PricingComponent';
import Utilities from '../Utilities/Utilities';

const unitsData = [
  {
    id: 1,
    name: 'Jumeirah Estate',
    price: '$900.00',
    description: 'Jumeirah Golf Estate • 2000 sq.Ft',
    img: interior, // You can replace this with different images if needed
    hotelCount: 3,
    bedCount: 3,
    homeCount: 1,
  },
  {
    id: 2,
    name: 'Burj Khalifa',
    price: '$1,200.00',
    description: 'Downtown Dubai • 1500 sq.Ft',
    img: interior,
    hotelCount: 2,
    bedCount: 2,
    homeCount: 1,
  },
  {
    id: 3,
    name: 'Palm Jumeirah',
    price: '$1,800.00',
    description: 'Palm Island • 2500 sq.Ft',
    img: interior,
    hotelCount: 4,
    bedCount: 3,
    homeCount: 2,
  },
  {
    id: 4,
    name: 'Dubai Marina',
    price: '$1,500.00',
    description: 'Dubai Marina • 1800 sq.Ft',
    img: interior,
    hotelCount: 3,
    bedCount: 3,
    homeCount: 1,
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
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(210px, 1fr))', width: "100%", overflowY: "scroll",scrollbarWidth:"none", height: "65vh", gap: "10px", marginLeft: "3px" }}>
      {unitsData.map((unit) => (
        <Card key={unit.id} sx={{ width: "90%", margin: 1, display: 'flex', flexDirection: 'column', height: "fit-content" }}>
          <Box sx={{ padding: 1, paddingBottom: 0 }}>
            <CardMedia
              sx={{ height: 100, width: 200, borderRadius: 1 }}
              image={unit.img}
              title={unit.name}
            />
          </Box>
          <CardContent sx={{ paddingBottom: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontSize={12} fontWeight={600}>
                {unit.name}
              </Typography>
              <Typography fontSize={12} fontWeight={600}>
                {unit.price}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '0.4rem' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 10 }}>
                {unit.description}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <HotelIcon fontSize="small" /> {unit.hotelCount}
                <Typography sx={{ mx: 1 }}>•</Typography>
                <BedIcon fontSize="small" /> {unit.bedCount}
                <Typography sx={{ mx: 1 }}>•</Typography>
                <HomeIcon fontSize="small" /> {unit.homeCount}
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={handleDropdownToggle}
              size="small"
              sx={{ display: 'flex', alignItems: 'flex-start', fontSize: 12 }}
            >
              <AddIcon fontSize='small' />
              CUSTAMIZE
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
    </Box>
  );
};

export default UnitDetails;
