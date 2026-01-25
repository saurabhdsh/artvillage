import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import CottageIcon from '@mui/icons-material/Cottage';
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';

const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
        position: 'relative',
        padding: '0.5rem',
        borderRadius: '12px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        '&:hover': {
          '& .gradient-border': {
            opacity: 1,
          }
        }
      }}
    >
      <motion.div
        className="gradient-border"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '12px',
          padding: '2px',
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #FFD166)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <motion.div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          width: '60px',
          height: '60px',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [-15, 15, -15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <CottageIcon sx={{ 
            fontSize: 35, 
            color: '#FF6B6B',
            filter: 'drop-shadow(0 0 3px rgba(255,107,107,0.7))'
          }} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [15, -15, 15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PaletteIcon sx={{ 
            fontSize: 35, 
            color: '#4ECDC4',
            filter: 'drop-shadow(0 0 3px rgba(78,205,196,0.7))'
          }} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BrushIcon sx={{ 
            fontSize: 25, 
            color: '#FFD166',
            filter: 'drop-shadow(0 0 3px rgba(255,209,102,0.7))'
          }} />
        </motion.div>
      </motion.div>
      <Typography
        variant="h4"
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #FFD166)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          fontSize: '2.5rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -5,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FF6B6B, #4ECDC4, #FFD166, transparent)',
            animation: 'shimmer 3s infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -5,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FFD166, #4ECDC4, #FF6B6B, transparent)',
            animation: 'shimmer 3s infinite reverse',
          },
          '@keyframes shimmer': {
            '0%': {
              backgroundPosition: '-200% 0',
            },
            '100%': {
              backgroundPosition: '200% 0',
            },
          },
        }}
      >
        Art Village
      </Typography>
    </Box>
  );
};

export default Logo; 