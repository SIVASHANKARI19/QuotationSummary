import React from 'react';
import interior from '../../assets/interior.jpg';
import { Grid2, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ExampleLayout = () => {
  return (
    <Grid2 container spacing={2}>
      {/* Main Image Card */}
      <Grid2 item xs={8}>
        <Card>
          <CardMedia
            component="img"
            alt="Main House"
            height="400"
            image="path_to_main_image.jpg" // Replace with your image path
          />
        </Card>
      </Grid2>

      {/* Thumbnail Cards */}
      <Grid2 item xs={4} container spacing={2}>
        {[1, 2, 3, 4].map((item) => (
          <Grid2 item xs={12} key={item}>
            <Card>
              <CardMedia
                component="img"
                alt={`Thumbnail ${item}`}
                height="200"
                image={interior} // Replace with your image paths
              />
              <CardContent>
                <Typography variant="h6">Thumbnail {item}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default ExampleLayout;
