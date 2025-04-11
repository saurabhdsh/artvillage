import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CartProvider } from './context/CartContext';
import LandingPage from './components/LandingPage';
import GalleryPage from './components/GalleryPage';
import ShopPage from './components/ShopPage';
import Navigation from './components/Navigation';
import ArtistsPage from './components/ArtistsPage';
import ExhibitionsPage from './components/ExhibitionsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4ECDC4',
    },
    secondary: {
      main: '#FF6B6B',
    },
  },
  typography: {
    fontFamily: [
      'Playfair Display',
      'serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Box sx={{ minHeight: '100vh' }}>
            <Navigation />
            <Box sx={{ pt: 8 }}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/artists" element={<ArtistsPage />} />
                <Route path="/exhibitions" element={<ExhibitionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
