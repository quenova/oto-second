import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const CarCard = ({ car }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardMedia
        component="img"
        height="140"
        image={car.image}
        alt={car.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car.description}
        </Typography>
        <Typography variant="h6" component="div">
          {car.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sell</Button>
        <Button size="small">Description</Button>
      </CardActions>
    </Card>
  );
};

export default CarCard;
