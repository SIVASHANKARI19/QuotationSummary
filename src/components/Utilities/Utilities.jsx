import React, { useState } from 'react';
import { Box, Typography, Button, Checkbox } from '@mui/material';
import amenity from '../../assets/utilities.png';
import ExampleStrapiSwitch from '../Toggle';

const amenitiesData = [
  { id: 1, name: 'Tom Cruise', price: '$20.00', validity: 'Valid Feb-12 - Feb-27 23', image: amenity, checked: false, additionalChecked: false },
  { id: 2, name: 'Jane Doe', price: '$25.00', validity: 'Valid Mar-01 - Mar-15 23', image: amenity, checked: false, additionalChecked: false },
  { id: 3, name: 'Tom Cruise', price: '$20.00', validity: 'Valid Feb-12 - Feb-27 23', image: amenity, checked: false, additionalChecked: false },
];

const Utilities = ({close}) => {
  const [amenities, setAmenities] = useState(amenitiesData);

  const handleToggleChange = (id, newChecked) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id ? { ...amenity, checked: newChecked } : amenity
      )
    );
  };

  const handleCheckboxChange = (id, newChecked) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id ? { ...amenity, checked: newChecked } : amenity
      )
    );
  };

  const handleAdditionalCheckboxChange = (id, newChecked) => {
    setAmenities((prev) =>
      prev.map((amenity) =>
        amenity.id === id ? { ...amenity, additionalChecked: newChecked } : amenity
      )
    );
  };

  return (
    <Box sx={{ overflow: 'hidden', width: '28vw' }}>
      <Typography variant="h6" padding={1} marginTop={2} fontSize={18} color="gray">
        Utilities
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px',width:"28vw" ,backgroundColor:"rgb(237,247,248)",padding:"10px",borderRadius:"5px"}}>
        <Box component="img" src={amenity} alt="Lead Profile" sx={{ height: 40, width: 40 }} >

        </Box>

        <Typography color='rgb(147,196,199)'><span style={{ fontWeight: 'bold',color:"rgb(147,196,199)" }}>03</span> Total Utilities</Typography>
<Box  ><Typography paddingLeft={"150px"} color='rgb(147,196,199)' fontWeight={"bold"}>$200.00</Typography></Box>
        </Box>
        
       
        {amenities.map((amenity) => (
          <Box key={amenity.id}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: '10px',
                border: '1px solid #d8d8d8',
                borderRadius: '5px',
                width: '28vw',
                flexWrap: 'wrap',
                overflow: 'hidden',
                transition: '0.3s ease',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
                
              
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
                <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, fontWeight: 'bold' }}>
                  {amenity.name}
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', md: '14px' }, color: 'gray' }}>
                  {amenity.price} • {amenity.validity}
                </Typography>
              </Box>
              <ExampleStrapiSwitch
                id={amenity.id}
                initialChecked={amenity.checked}
                onToggle={handleToggleChange}
              />
            </Box>

            {/* Render additional information below the toggle if checked */}
            {amenity.checked && (
              <Box
                key={`extra-info-${amenity.id}`}
                sx={{
                  border: '1px solid #d8d8d8',
                  borderTop: 'none',
                  width: '28vw',
                  height: 'fit-content',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  checked={amenity.additionalChecked}
                  size='small'
                  onChange={() => handleAdditionalCheckboxChange(amenity.id, !amenity.additionalChecked)}
                />
                <Typography variant="body1" fontSize={10} borderBottomLeftRadius="5px" borderBottomRightRadius="5px">
                  Free applicability
                </Typography>
              </Box>
            )}
          </Box>
        ))}

        <Button
          variant="contained"
          sx={{
            width: '100%',
            height: '50px',
            backgroundColor: 'rgb(80,120,225)',
            padding: '20px',
            textTransform: 'none',
            marginTop: '20px',
            marginBottom: '20px',
          }}
          onClick ={() => close()}

        >
          Update & Save
        </Button>
      </Box>
    </Box>
  );
};

export default Utilities;
