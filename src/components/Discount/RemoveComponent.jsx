import { 
    Box, 
    Divider, 
    Grid, 
    IconButton, 
    Dialog, 
    DialogContent, 
    DialogTitle,
    List, 
    ListItem, 
    ListItemSecondaryAction, 
    Typography, 
    Button
  } from '@mui/material';
  import PropertyDetails from './Discount';
  import { CloseOutlined, DeleteOutline } from '@mui/icons-material';
  import { useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { deleteUnit } from '../../redux/PricingSlice'; // Adjust the import path
  
  const RemoveComponent = ({ onClose }) => {
    const dispatch = useDispatch();
  
    // Get the list of properties from Redux store
    const units = useSelector(state => state.units.units);
    const total = useSelector(state => state.units.totalAmt); // Adjust based on your slice structure
    const [items, setItems] = useState(units); // Local state to manage items
  
    const handleClose = () => {
      onClose(); // Call the passed function to close the dialog
    };
  
    const handleDelete = (itemId) => {
      // Dispatch action to delete the unit from Redux
      dispatch(deleteUnit(itemId));
  
      // Update local state to remove the deleted item
      setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };
  
    return (
      <Dialog open={true} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent padding={0}>
          {/* Header Section */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 20px' }}>
            <DialogTitle
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontFamily: "Nunito Sans",
                fontWeight: "600",
                padding: "",
              }}
            >
              Remove Property
            </DialogTitle>
            <IconButton onClick={handleClose}>
              <CloseOutlined />
            </IconButton>
          </Box>
          <Divider sx={{ mt: -2, mb: -1 }} />
  
          {/* Content Section */}
          <Box sx={{ padding: '10px 10px' }}>
            <Box display={'flex'}>
              <PropertyDetails />
              <Box sx={{ paddingLeft: 2, flexGrow: 1, backgroundColor: '#F8F9FB', pt: '1rem', fontFamily: 'Nunito Sans' }}>
                <Typography fontSize={'14px'} fontWeight={600} color={'#4E5A6B'} fontFamily={'Nunito Sans'} gutterBottom>
                  Unit Price Detail
                </Typography>
  
                {/* List of Items */}
                <List sx={{ overflowY: "scroll", scrollbarWidth: "none", height: "400px" }}>
                  {items.map((item) => (
                    <ListItem key={item.id} divider>
                      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0' }}>
                        {/* Name of the item */}
                        <Typography fontSize={'0.7rem'} sx={{ color: "#4E5A6B", fontWeight: "600", fontFamily: 'Nunito Sans' }}>
                          {item.name}
                        </Typography>
  
                        {/* Price of the item, aligned to the right */}
                        <Typography fontSize={'0.7rem'} sx={{ color: "#4E5A6B", fontWeight: "600", fontFamily: 'Nunito Sans', mr: '2rem' }}>
                          {item.price}
                        </Typography>
  
                        {/* Delete button */}
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                            <DeleteOutline style={{ color: 'red', fontSize: '1.2rem', borderRadius: '50%', backgroundColor: '#ffecec', padding: '2px' }} />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </Box>
                    </ListItem>
                  ))}
                </List>
  
                {/* Final Total Section */}
                <Grid container justifyContent="space-between" sx={{ padding: '10px 0', backgroundColor: '#E4E8EE', paddingLeft: '2rem', borderRadius: '5px', alignItems: 'center', marginTop: 'auto' }}>
                  <Typography variant="body2" sx={{ fontWeight: "600" }}>Final Total</Typography>
                  <Typography variant="body2" sx={{ mr: '3rem', fontWeight: "600" }}>${total}</Typography>
                </Grid>
                <Button variant="contained" color="primary" sx={{ width: '100%', fontFamily: 'Nunito Sans', marginTop: '10px', textTransform: 'none' }}>
                  Update & Save
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default RemoveComponent;
  