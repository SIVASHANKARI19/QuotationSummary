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
    DialogTitle 
  } from '@mui/material';
  import PropertyDetails from '../Discount/Discount';
  import { CloseOutlined } from '@mui/icons-material';
  import { useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  
  const Unit = ({ onClose }) => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();
  
    const handleClose = () => {
      setOpen(false);
      onClose();
    };
  
    const units = useSelector((state) => state.units.selectedAmenities);
  
    return (
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
          <DialogTitle>Unit Details</DialogTitle>
          <CloseOutlined onClick={handleClose} />
        </Box>
        <Divider />
        <DialogContent>
          <Box display={'flex'}>
            <PropertyDetails />
            <Box sx={{ paddingLeft: 2, flexGrow: 1, backgroundColor: '#F8F9FB', pt: '1rem' }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: '0.8rem' }}>
                UNIT PRICING DETAILS
              </Typography>
              <List>
                {units.map((unit, index) => (
                  <ListItem key={index} divider>
                    <ListItemText primary={unit.name} />
                    <ListItemText primary={`${unit.price}`} style={{ textAlign: "right" }} />
                  </ListItem>
                ))}
              </List>
              <Box sx={{ height: '9rem', width: '100%' ,display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', }} />
              <Grid container justifyContent="space-between" sx={{ padding: "5px 10px", backgroundColor: '#E4E8EE', borderRadius: '5px', mt: "5rem" }}>
                <Typography variant="body1">Final Total</Typography>
                <Typography variant="h6" sx={{ mr: '0.3rem' }}>$1,200</Typography>
              </Grid>
              <Divider />
              <Button variant="contained" color="primary" sx={{ width: '100%' }} onClick={() => {handleClose()}}>
                Update & Save
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default Unit;
  