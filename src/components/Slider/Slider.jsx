import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({ value, color }) => {
  return (
    <div>
      <Slider
        value={value}
        disabled
        sx={{
          width: 130,
          height: 4,
          position: "relative",
          top: "-7px",
          color: color,
          padding: 0, 
        

       

          "& .MuiSlider-root": {
            padding: 0, 
          },
          "& .MuiSlider-track": {
            color: color,
            padding: 0, 
          },
          "& .MuiSlider-thumb": {
            display: "none", 
          },
        }}
      />
    </div>
  );
};

export default SliderComponent;
