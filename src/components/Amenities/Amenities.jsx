import { Dialog, DialogContent, Typography, Box, DialogActions, Button } from '@mui/material';
import LeadProfile from '../../assets/interior.jpg';
import ExampleStrapiSwitch from '../Toggle';
import React, { useState } from 'react';

const amenitiesData = [
  {
    id: 1,
    name: 'Tom Cruise',
    price: '$20.00',
    validity: 'Valid Feb-12 - Feb-27 23',
    image: LeadProfile,
    checked: false,
  },
  {
    id: 2,
    name: 'Jane Doe',
    price: '$25.00',
    validity: 'Valid Mar-01 - Mar-15 23',
    image: LeadProfile,
    checked: false,
  },
  {
    id: 2,
    name: 'Jane Doe',
    price: '$25.00',
    validity: 'Valid Mar-01 - Mar-15 23',
    image: LeadProfile,
    checked: false,
  },  {
    id: 2,
    name: 'Jane Doe',
    price: '$25.00',
    validity: 'Valid Mar-01 - Mar-15 23',
    image: LeadProfile,
    checked: false,
  },  {
    id: 2,
    name: 'Jane Doe',
    price: '$25.00',
    validity: 'Valid Mar-01 - Mar-15 23',
    image: LeadProfile,
    checked: false,
  },  {
    id: 2,
    name: 'Jane Doe',
    price: '$25.00',
    validity: 'Valid Mar-01 - Mar-15 23',
    image: LeadProfile,
    checked: false,
  },  {
    id: 2,
    name: 'Jane Doe',
    price: '$25.00',
    validity: 'Valid Mar-01 - Mar-15 23',
    image: LeadProfile,
    checked: false,
  },
  // Add more amenities as needed
];

const Amenities = () => {
  const [amenities, setAmenities] = useState(amenitiesData);

  const handleToggleChange = (id, newChecked) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id ? { ...amenity, checked: newChecked } : amenity
      )
    );
  };

  // Check if at least one amenity is checked
  const isAnyChecked = amenities.some(amenity => amenity.checked);

  return (
    <Dialog open={true}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant="h6" padding={1} marginLeft={4} marginTop={2}>Amenities</Typography>
      </Box>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        {amenities.map((amenity) => (
          <Box
            key={amenity.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingRight: '10px',
              border: '1px solid #d8d8d8',
              borderRadius: '5px',
              width: '28vw',
              flexWrap: 'wrap',
              overflow: 'hidden',
              alignItems: 'center',
              transition: '0.3s ease', // Apply transition for smooth effect
              backgroundColor: amenity.checked ? '#e0f7fa' : 'white', // Change background color on toggle
            }}
          >
            {/* Image aligned to the left */}
            <Box
              component="img"
              src={amenity.image}
              alt={`${amenity.name} Icon`}
              sx={{
                height: 70,
                padding: 1,
                width: 70,
                borderRadius: '20%',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            />
            {/* Text next to the image */}
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ marginRight: 2, fontSize: { xs: '12px', md: '14px' }, fontWeight: 'bold' }}>
                  {amenity.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                  wordSpacing: 2,
                  color: 'gray',
                  paddingRight: 1,
                }}
              >
                <Typography sx={{ fontSize: { xs: '14px', md: '14px' }, marginRight: 2, paddingTop: 0.4 }}>
                  {amenity.price}
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', md: '14px' }, paddingTop: 0.4 }}>
                  • {amenity.validity}
                </Typography>
              </Box>
            </Box>
            <ExampleStrapiSwitch 
              checked={amenity.checked} 
              onChange={() => handleToggleChange(amenity.id, !amenity.checked)} 
            />
          </Box>
        ))}

        {/* New Box to append below the amenities list only if any amenity is checked */}
        {isAnyChecked && (
          <Box
            sx={{
              marginTop: 2,
              padding: 2,
              border: '1px solid #d8d8d8',
              borderRadius: '5px',
              width: '28vw',
              textAlign: 'center',
            }}
          >
            <Typography variant="body1">
              Additional Information or Actions
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          backgroundColor="blue"
          onClick={() => console.log('Save button clicked')}
          disabled={!isAnyChecked}
          sx={{width:"100%",height:"50px",backgroundColor:"blue",padding:"10px"}}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Amenities;
