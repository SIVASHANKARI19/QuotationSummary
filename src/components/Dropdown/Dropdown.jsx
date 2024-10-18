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
          sx={{ borderBottom: "1px solid gray", fontSize: "10px" }}
        >
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Dropdown;
