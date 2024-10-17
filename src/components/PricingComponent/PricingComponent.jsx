import { Typography, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import React, { useState } from 'react';
import Primary from './Primary/Primary';
import CloseIcon from '@mui/icons-material/Close';


const PricingComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const PricingTable = [
    { id: "01", bgColor: "#FEEAEA80", title: "Primary", arrowColor: "rgb(179,119,109)", component: Primary },
    { id: "02", bgColor: "#EDE4FE80", title: "Secondary", arrowColor: "rgb(140,113,181)", component: Primary },
    { id: "03", bgColor: "#DBF0F180", title: "One Time Changes", arrowColor: "rgb(126,184,187)", component: Primary},
    { id: "04", bgColor: "#E4EDFF80", title: "Refundables", arrowColor: "rgb(109,128,179)", component: Primary },
    { id: "05", bgColor: "#FFFAD880", title: "Inventory Item", arrowColor: "rgb(179,161,109)", component: Primary },
    { id: "06", bgColor: "#FEEAEA80", title: "Parking Slot", arrowColor: "rgb(179,119,109)", component: Primary },
  ];

  const handleIconClick = (item) => {
    setCurrentItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCurrentItem(null);
  };

  // Function to render the selected component with props
  const renderSelectedComponent = () => {
    if (currentItem) {
      const SelectedComponent = currentItem.component;
      return (
        <SelectedComponent
          bgColor={currentItem.bgColor}
          color={currentItem.arrowColor}
          title={currentItem.title}
          onClose={handleCloseDialog}
        />
      );
    }
    return null;
  };

  return (
    <Box sx={{ width: "30vw",height:"65vh"}}>
      <Typography sx={{ fontSize: "16px", margin: "10px" }}>Pricing Table</Typography>

      {PricingTable.map((item) => (
        <Box
          key={item.id}
          sx={{
            backgroundColor: item.bgColor,
            margin: "10px",
           

            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => handleIconClick(item)}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                backgroundColor: item.arrowColor,
                padding: "5px",
                borderRadius: "50%",
                fontSize: "12px",
              }}
            >
              {item.id}
            </Typography>
            <Typography sx={{ marginLeft: "10px", fontSize: "12px" }}>{item.title}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Base rent or monthly rental amount.You can have only one primary component per property." arrow   componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: 'white',
            color: 'gray',
            padding:"10px",
            paddingLeft: '10px',
            paddingRight:'10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          },
        },
        arrow: {
          sx: {
            color: 'white',
          },
        },
      }}>
            <InfoOutlinedIcon sx={{ color: "gray", fontSize: "16px" }} />
            </Tooltip>
           
            <IconButton>
              <ChevronRightOutlinedIcon sx={{ color: item.arrowColor, marginLeft: "10px" }} />
            </IconButton>
          </Box>
        </Box>
      ))}

      {/* Dialog Component */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle sx={{display:"flex",justifyContent:"space-between"}}><Typography>{currentItem?.title}</Typography>
        <IconButton onClick={handleCloseDialog} sx={{position:"absolute",right:"10px"}}><CloseIcon/></IconButton>
        </DialogTitle>
        <DialogContent>
          {renderSelectedComponent()} {/* Render the corresponding component with props */}
        </DialogContent>
      
      </Dialog>
    </Box>
  );
};

export default PricingComponent;
