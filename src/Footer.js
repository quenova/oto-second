import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box className="footer" sx={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
      <Typography variant="body1">
        RentCar © 2024
      </Typography>
    </Box>
  );
};

export default Footer;
