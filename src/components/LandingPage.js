import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { featuredArtworks, heroBackground, ctaBackground } from './ArtData';

const LandingPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h1" 
            sx={{ 
              fontFamily: 'Playfair Display, serif', 
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Discover Extraordinary Art
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.5rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Explore our curated collection of unique artworks from talented artists worldwide
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#FF6B6B',
              '&:hover': { bgcolor: '#FF5252' },
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            Explore Collection
          </Button>
        </motion.div>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ 
        py: 8, 
        bgcolor: '#f8f8f8',
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)',
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              mb: 6,
              fontFamily: 'Playfair Display, serif',
              color: '#333',
              fontSize: { xs: '2rem', md: '3rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -15,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
              }
            }}
          >
            Our Gallery
          </Typography>

          <motion.div
            variants={galleryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid container spacing={3}>
              {featuredArtworks.map((artwork) => (
                <Grid item xs={12} sm={6} md={4} key={artwork.id}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
                          '& .artwork-info': {
                            transform: 'translateY(0)',
                            opacity: 1,
                          }
                        }
                      }}
                    >
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        style={{
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <Box
                        className="artwork-info"
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          bgcolor: 'rgba(0,0,0,0.8)',
                          color: 'white',
                          p: 3,
                          transform: 'translateY(100%)',
                          opacity: 0,
                          transition: 'all 0.4s ease',
                          backdropFilter: 'blur(5px)',
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontFamily: 'Playfair Display, serif',
                            mb: 1 
                          }}
                        >
                          {artwork.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          by {artwork.artist}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#4ECDC4',
                            fontWeight: 'bold' 
                          }}
                        >
                          {artwork.price}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 6, 
            fontFamily: 'Playfair Display, serif',
            color: '#333',
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Featured Artworks
        </Typography>
        <Slider {...sliderSettings}>
          {featuredArtworks.map((artwork) => (
            <Box key={artwork.id} sx={{ px: 2 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    '&:hover': {
                      '& .artwork-overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    style={{
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="artwork-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      p: 3,
                      opacity: 0.9,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {artwork.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {artwork.artist}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {artwork.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {artwork.price}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: '#f5f5f5',
          py: 8,
          textAlign: 'center',
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 3, 
              fontFamily: 'Playfair Display, serif',
              fontSize: { xs: '2rem', md: '3rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Start Your Art Collection Today
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Join our community of art enthusiasts and discover unique pieces that speak to your soul
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#4ECDC4',
              '&:hover': { bgcolor: '#3DBEB6' },
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            Join Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 