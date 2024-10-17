import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';

export default function ExampleStrapiSwitch({ initialChecked, onToggle }) {
  const [isChecked, setIsChecked] = React.useState(initialChecked);

  const handleChange = (event) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    if (onToggle) {
      onToggle(newChecked); // Call the parent callback if provided
    }
  };

  return (
    <Switch
      color={isChecked ? 'success' : 'danger'}
      checked={isChecked}
      onChange={handleChange}
      sx={{
        '--Switch-thumbSize': '12px',
        '--Switch-trackWidth': '27px',
        '--Switch-trackHeight': '14px',
        '--Switch-trackBackground': '#eadcda',
        '&:hover': {
          '--Switch-trackBackground': '#d4c3c2',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#00b7a8',
          '&:hover': {
            '--Switch-trackBackground': '#00b7a8',
          },
        },
      }}
    />
  );
}
