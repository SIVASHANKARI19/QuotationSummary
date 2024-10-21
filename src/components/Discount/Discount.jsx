import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Button
} from '@mui/material';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import interior from '../../assets/interior.jpg';
import { GoHome } from "react-icons/go";
import { LuBath } from "react-icons/lu";
import HotelIcon from '@mui/icons-material/Hotel';

const PropertyImage = ({ alt, image }) => (
  <Grid item xs={6}>
    <CardMedia
      component="img"
      alt={alt}
      height="70"
      image={image}
      sx={{
        borderRadius: 1,
        width: '100%', // Set width to 100% to keep it responsive
        objectFit: 'cover', // Ensures the image covers the area without distorting
      }}
    />
  </Grid>
);

const Discount = () => {
  return (
    <Card
      sx={{
        maxWidth: 365,
        borderRadius: 2,
        boxShadow: 'none',
        height: '60vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          p: 2,
          alignItems: 'center',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          alt="Main Property Image"
          height="150"
          image={interior}
          sx={{
            flex: 1,
            marginRight: 1,
            borderRadius: 1,
            width: '50%', // Set width to 100% to keep it responsive
            objectFit: 'cover', // Ensure the main image fits without distortion
          }}
        />
        <Box display="flex" flexDirection="column" sx={{paddingBottom:0 }}>
          <Grid container spacing={1}>
            {[1, 2, 3, 4].map((_, index) => (
              <PropertyImage
                key={index}
                alt={`Property Image ${index + 1}`}
                image={interior}
              />
            ))}
          </Grid>
        </Box>
      </Box>
      <CardContent >
        <Box display="flex" alignItems="center"  mt={-2} >
          <Typography gutterBottom fontSize={{ xs: '10px', md: '12px' }} color="black" fontWeight="bold">
            Jumeirah Estate
          </Typography>
          <Button
              sx={{
                color: '#4E5A6B',
          
            
                backgroundColor: 'rgb(234,239,251)',
                padding: '0px 5px 0px 5px',
                fontSize: { xs: '10px', md: '7px' }, // Responsive font size
                minWidth: 'unset',
                fontWeight: 'bold',
                ml: 1, // Prevents button from being too wide
              }}
            >
              UNIT-1234
            </Button>
        </Box>
        <Typography fontSize={{ xs: '10px', md: '10px' }} padding={0.5}  color="text.secondary">
          Rubix Apartment, K Tower, Floor 1
        </Typography>
        <Typography fontSize={{ xs: '10px', md: '10px' }}padding={0.5}  color="text.secondary">
          2 BHK • 2000 Sq Ft
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgb(194,199,205)', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between',width: '85%' }}>
                <HotelIcon fontSize="small" sx={{ mr: 0.5 }} /> 2
                <Typography sx={{ mr: 1 }}>•</Typography>
                <LuBath  fontSize="medium" sx={{ mr: 0.5 }} /> 2
                <Typography sx={{ mx: 1 }}>•</Typography>
                <GoHome  fontSize="medium" sx={{ mr: 0.1 }} /> 2BHK
                <Typography sx={{ mx: 1 }}>•</Typography>
                <GoHome  fontSize="medium" sx={{ mr: 0.1 }} /> 2000 sq. ft
              </Typography>
      </CardContent>
      <Box
        mt={-1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: 2 }}
      width={'90%'}
      
      >
        <Box display="flex" alignItems="center"gap={1}>
          <TabletAndroidIcon
            sx={{ fontSize: '1rem', color: 'grey'}}
          />
          <Typography fontSize={{ xs: '10px', md: '13px' }} component="span">
            Handbook
          </Typography>
        </Box>
        <Typography
          variant="body2"
          component="a"
          href="#"
          fontSize={{ xs: '10px', md: '13px' }}
          sx={{
            marginLeft: '10px',
            textDecoration: 'underline',
            color: 'primary.main',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          View / Download
        </Typography>
      </Box>
    </Card>
  );
};

export default Discount;
