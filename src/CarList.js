import React from 'react';
import CarCard from './CarCard';
import { Box, Typography } from '@mui/material';
import mobilImage from './images/mobil.jpg';

const carData = [
  {
    image: mobilImage,
    name: 'Mobil 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 'Rp. 200.000,-',
  },
  {
    image: mobilImage,
    name: 'Mobil 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 'Rp. 200.000,-',
  },
  {
    image: mobilImage,
    name: 'Mobil 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 'Rp. 200.000,-',
  },
];

const CarList = () => {
  return (
    <Box className="car-list" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        New Car {/* Ganti judul di sini */}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {carData.map((car, index) => (
          <Box key={index} sx={{ maxWidth: '300px', margin: '10px' }}>
            <CarCard car={car} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarList;
