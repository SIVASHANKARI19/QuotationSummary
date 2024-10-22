import React from 'react';
import { Menu, MenuItem } from '@mui/material';

const Dropdown = ({ options, anchorEl, setShowDropDown, onOptionSelect }) => {
  const handleClose = () => {
    setShowDropDown(false); // Close the dropdown when an option is selected or clicked outside
  };

  const handleOptionClick = (option) => {
    onOptionSelect(option); // Pass selected option back to UnitDetails
    handleClose(); // Close dropdown after selecting an option
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'customized-button',
      }}
      // Align the dropdown to the right of the anchor
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}

    >
      {options.map((option, index) => (
        <MenuItem
          key={index}
          onClick={() => handleOptionClick(option)}
          sx={{ borderBottom: "0.2px solid rgb(243,245,248)", fontSize: "10px", color: "#4E5A6B" ,fontFamily: 'Nunito Sans'}}
        >
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Dropdown;
