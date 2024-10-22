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
import { useDispatch, useSelector } from 'react-redux';
import { deleteUnit } from '../../redux/PricingSlice'; // Adjust the import path

const RemoveComponent = () => {
  const dispatch = useDispatch();

  // Get the list of properties from Redux store
  const units = useSelector(state => state.units.units);
  const total = useSelector(state => state.units.totalAmt); // Adjust based on your slice structure
  const [items, setItems] = useState(units); // Local state to manage items

  const handleClose = () => {
      // Logic to handle closing the component
  };

  const handleDelete = (itemId) => {
      // Dispatch action to delete the unit from Redux
      dispatch(deleteUnit(itemId));

      // Update local state to remove the deleted item
      setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
      <Box sx={{ scrollbarWidth: 'none', msScrollbarWidth: 'none', padding: '10px 20px' }}>
          {/* Header Section */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', width: "100%", marginLeft: "10px" }}>
              <Typography variant="h7">Remove Property</Typography>
              <IconButton onClick={handleClose}>
                  <CloseOutlined />
              </IconButton>
          </Box>
          <Divider sx={{ mt: -2, mb: -1 }} />
          
          {/* Content Section */}
          <Box sx={{ padding: '10px 20px', width: "55vw" }}>
              <Box display={'flex'}>
                  <PropertyDetails />
                  <Box sx={{ paddingLeft: 2, flexGrow: 1, backgroundColor: '#F8F9FB', pt: '1rem' }}>
                      <Typography fontSize={'14px'} gutterBottom>
                          Unit Price Detail
                      </Typography>
                      
                      {/* List of Items */}
                      <List sx={{ overflowY: "scroll", scrollbarWidth: "none" }}>
                          {items.map((item, index) => (
                              <ListItem key={item.id} divider>
                                  <Typography fontSize={'0.9rem'} sx={{ color: "gray" }}>{item.name}</Typography> {/* Adjust based on item structure */}
                                  <ListItemText primary={`${item.price}`} sx={{ textAlign: 'right' }} /> {/* Adjust price access */}
                                  <ListItemSecondaryAction>
                                      <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                                          <DeleteOutline style={{ color: 'red', fontSize: '1.2rem', borderRadius: '50%', backgroundColor: 'ffecec', padding: '2px' }} />
                                      </IconButton>
                                  </ListItemSecondaryAction>
                              </ListItem>
                          ))}
                      </List>
                      
                      {/* Final Total Section */}
                      <Grid container justifyContent="space-between" sx={{ padding: '10px 0', marginLeft: '0rem', backgroundColor: '#E4E8EE', paddingLeft: '2rem', borderRadius: '5px', alignItems: 'center' }}>
                          <Typography variant="body2" sx={{ fontWeight: "600" }}>Final Total</Typography>
                          <Typography variant="body2" sx={{ mr: '3rem', fontWeight: "600" }}>{total}</Typography>
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
  );
};

export default RemoveComponent;
