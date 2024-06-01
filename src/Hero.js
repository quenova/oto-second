import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from './images/off.png'; // Import gambar

const Hero = () => {
  return (
    <Box className="hero" sx={{ 
      backgroundImage: `url(${backgroundImage})`, // Menggunakan gambar sebagai background
      height: '300px', 
      backgroundSize: 'cover', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'white', 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' 
    }}>
      <Box sx={{ textAlign: 'center' }}> {/* Mengatur teks dan tombol menjadi terpusat */}
        <Typography variant="h2" component="div" gutterBottom style={{ color: 'white' }}> {/* Mengatur warna teks menjadi putih */}
          WELCOME TO OTOSECOND
        </Typography>
        <Typography variant="h5" component="div" gutterBottom style={{ color: 'white' }}> {/* Mengatur warna teks menjadi putih */}
          Ease of Driving with Quality Vehicles!
        </Typography>
        <Typography variant="h9" component="div" gutterBottom style={{ color: 'white' }}> {/* Mengatur warna teks menjadi putih */}
          RentCar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Typography>
        <Button variant="contained" color="primary">BOOK NOW</Button>
      </Box>
    </Box>
  );
};

export default Hero;
