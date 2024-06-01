import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import CarList from './CarList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Container>
        <Box sx={{ padding: '20px' }}>
          <About />
          <CarList />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
