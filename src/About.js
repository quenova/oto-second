import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import aboutImage from './images/gambar.jpg'; // Import gambar

const About = () => {
  return (
    <Box className="about" sx={{ margin: '20px 0' }}>
      <Grid container spacing={2}>
        {/* Bagian Teks */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ paddingRight: { xs: 0, sm: 2 } }}>
            <Typography variant="h4" component="div" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" component="div">
              RentCar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              RentCar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Grid>
        {/* Bagian Gambar */}
        <Grid item xs={12} sm={6}>
          <img src={aboutImage} alt="Gambar" style={{ width: '100%', height: 'auto' }} /> {/* Menampilkan gambar */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
