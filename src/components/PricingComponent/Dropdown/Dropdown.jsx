import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Dropdown = ({WorkOptions}) => {
    const value = 0;
    const [option, setOption] = React.useState('1');
  
   
  
    const handleChange = (event) => {
      setOption(event.target.value);
    };
  
  return (
    <div><FormControl>
                      <Select
                  id="demo-simple-select"
                  value={option}
                  onChange={handleChange}
                  sx={{ height: 30,width:"13.4vw", fontSize: '0.8rem', fontWeight: '410', color: 'black',fontFamily:'poppins' ,marginLeft:'10px',padding:'7px' }}
                >
                  {WorkOptions.map((option) => (
                    <MenuItem
                      style={{
                        padding: '0.5rem', 
                        fontSize: '1rem',
                        width: 'fit-content',    
                        scrollbarWidth: 'none',
                        overflowY: 'scroll',
                        backgroundColor: 'transparent',
                        color: 'black',
                        fontFamily:'poppins'
                      }}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
    </div>
  )
}

export default Dropdown
