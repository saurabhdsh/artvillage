import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navigation = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Shop', path: '/shop' },
    { label: 'Artists', path: '/artists' },
    { label: 'Exhibitions', path: '/exhibitions' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2, md: 3 },
          flexGrow: 1 
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginRight: '2rem' }}
          >
            <Logo />
          </motion.div>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 2, md: 3 },
            flexGrow: 1,
            justifyContent: 'center'
          }}>
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: '#333',
                    textTransform: 'none',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    fontFamily: 'Playfair Display, serif',
                    '&:hover': {
                      color: '#4ECDC4',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 2 },
            ml: 'auto'
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#4ECDC4',
                  color: '#4ECDC4',
                  '&:hover': {
                    borderColor: '#3DBEB6',
                    color: '#3DBEB6'
                  }
                }}
              >
                Sign In
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#4ECDC4',
                  '&:hover': { bgcolor: '#3DBEB6' }
                }}
              >
                Register
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 