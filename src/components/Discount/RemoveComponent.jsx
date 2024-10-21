import { 
    Box, 
    Divider, 
    Grid, 
    IconButton, 
    List, 
    ListItem, 
    ListItemSecondaryAction, 
    ListItemText, 
    Typography, 
    Button
  } from '@mui/material';
  import PropertyDetails from './Discount';
  import { CloseOutlined, DeleteOutline } from '@mui/icons-material';
  import { useState } from 'react';
  
  const RemoveComponent = ({}) => {
    const [open, setOpen] = useState(true); // State to control visibility
    
    const handleClose = () => {
      setOpen(false); // Control component visibility on close
    };
  
    return (
      open && ( // Render component conditionally based on open state
        <Box sx={{ scrollbarWidth: 'none', msScrollbarWidth: 'none', fontFamily: 'Nunito Sans', padding: '10px 20px'}}>
          {/* Header Section */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
            <Typography variant="h6">Remove Property</Typography>
            <IconButton onClick={handleClose}>
              <CloseOutlined />
            </IconButton>
          </Box>
          <Divider sx={{ mt: -2, mb: -1 }} />
          
          {/* Content Section */}
          <Box sx={{ overflowY: 'auto', scrollbarWidth: 'none', msScrollbarWidth: 'none', fontFamily: 'Nunito Sans', padding: '10px 20px' ,width:"55vw"}}>
            <Box display={'flex'}>
              <PropertyDetails />
              <Box sx={{ paddingLeft: 2, flexGrow: 1, backgroundColor: '#F8F9FB', pt: '1rem' }}>
                <Typography fontSize={'14px'} gutterBottom>
                  Unit Price Detail
                </Typography>
                
                {/* List of Items */}
                <List sx={{}}>
                  {["Bill Name Here", "Bill Name Here", "Bill Name Here", "Bill Name Here", "Amenity Name Here", "Amenity Name Here","Bill Name Here", "Bill Name Here", "Bill Name Here"].map(
                    (item, index) => (
                      <ListItem key={index} divider>
                      <Typography fontSize={'0.9rem'} sx={{ color:"gray" }}>{item}</Typography>
                        <ListItemText primary="$1,000" sx={{ textAlign: 'right' }} />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <DeleteOutline style={{ color: 'red', fontSize: '1.2rem',borderRadius: '50%',backgroundColor: 'ffecec',padding: '2px' }} />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                  )}
                </List>
                
                {/* Final Total Section */}
                <Grid container justifyContent="space-between" sx={{ padding: '10px 0', marginLeft: '0rem', backgroundColor: '#E4E8EE', paddingLeft: '2rem', borderRadius: '5px', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{fontWeight:"600"}}>Final Total</Typography>
                  <Typography variant="body2" sx={{ mr: '3rem', fontWeight:"600" }}>$1,200</Typography>
                </Grid>
                
                <Divider sx={{ margin: '10px 0' }} />
                
                {/* Update Button */}
                <Button variant="contained" color="primary" sx={{ width: '100%' }}>
                  Update & Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )
    );
  };
  
  export default RemoveComponent;
  