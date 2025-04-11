import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab, Paper, Button, Rating } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const shopCategories = [
  {
    id: 'featured',
    title: 'Featured Artworks',
    description: 'Curated selection of our most popular pieces',
    items: [
      {
        id: 1,
        title: 'Abstract Expressionism',
        artist: 'Maria Rodriguez',
        price: '$2,500',
        image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1200&h=800&fit=crop&q=80',
        description: 'A vibrant exploration of color and form',
        rating: 4.8,
        reviews: 24,
        medium: 'Acrylic on Canvas',
        size: '36" x 48"'
      },
      {
        id: 2,
        title: 'Urban Reflections',
        artist: 'James Wilson',
        price: '$3,200',
        image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1200&h=800&fit=crop&q=80',
        description: 'Contemporary cityscape in oil',
        rating: 4.9,
        reviews: 18,
        medium: 'Oil on Canvas',
        size: '40" x 30"'
      },
      {
        id: 3,
        title: 'Nature\'s Symphony',
        artist: 'Sarah Chen',
        price: '$4,800',
        image: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=1200&h=800&fit=crop&q=80',
        description: 'Impressionist landscape masterpiece',
        rating: 5.0,
        reviews: 32,
        medium: 'Oil on Canvas',
        size: '48" x 36"'
      }
    ]
  },
  {
    id: 'contemporary',
    title: 'Contemporary Collection',
    description: 'Modern artworks pushing creative boundaries',
    items: [
      {
        id: 4,
        title: 'Digital Dreams',
        artist: 'Elena Martinez',
        price: '$3,800',
        image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&h=800&fit=crop&q=80',
        description: 'Digital art exploring virtual reality',
        rating: 4.7,
        reviews: 15,
        medium: 'Digital Print',
        size: '24" x 36"'
      },
      {
        id: 5,
        title: 'Neon Nights',
        artist: 'Sophie Black',
        price: '$3,500',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=800&fit=crop&q=80',
        description: 'Urban nightlife captured in neon',
        rating: 4.6,
        reviews: 21,
        medium: 'Mixed Media',
        size: '30" x 40"'
      }
    ]
  },
  {
    id: 'traditional',
    title: 'Traditional Masterpieces',
    description: 'Classical techniques and timeless beauty',
    items: [
      {
        id: 6,
        title: 'Golden Hour',
        artist: 'Thomas Wright',
        price: '$5,600',
        image: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=1200&h=800&fit=crop&q=80',
        description: 'Oil painting capturing the magic hour',
        rating: 4.9,
        reviews: 28,
        medium: 'Oil on Canvas',
        size: '36" x 48"'
      },
      {
        id: 7,
        title: 'Autumn Whispers',
        artist: 'Maria Garcia',
        price: '$4,800',
        image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=800&fit=crop&q=80',
        description: 'Watercolor landscape of fall colors',
        rating: 4.8,
        reviews: 19,
        medium: 'Watercolor',
        size: '22" x 30"'
      }
    ]
  }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Art Shop
          </Typography>
        </motion.div>

        <Box sx={{ mb: 6 }}>
          <Paper 
            elevation={3}
            sx={{ 
              borderRadius: '15px',
              overflow: 'hidden',
              bgcolor: 'rgba(255,255,255,0.9)'
            }}
          >
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              sx={{
                '& .MuiTab-root': {
                  fontSize: '1.1rem',
                  fontFamily: 'Playfair Display, serif',
                  py: 2
                }
              }}
            >
              {shopCategories.map((category) => (
                <Tab 
                  key={category.id} 
                  label={category.title}
                  sx={{
                    '&.Mui-selected': {
                      color: '#4ECDC4'
                    }
                  }}
                />
              ))}
            </Tabs>
          </Paper>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontStyle: 'italic',
                color: '#666',
                textAlign: 'center'
              }}
            >
              {shopCategories[selectedCategory].description}
            </Typography>

            <Grid container spacing={4}>
              {shopCategories[selectedCategory].items.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={4}
                      sx={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                          '& .artwork-info': {
                            transform: 'translateY(0)'
                          }
                        }
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                        <Box
                          className="artwork-info"
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            bgcolor: 'rgba(0,0,0,0.85)',
                            color: 'white',
                            p: 3,
                            transform: 'translateY(100%)',
                            transition: 'transform 0.3s ease',
                            backdropFilter: 'blur(5px)'
                          }}
                        >
                          <Typography variant="h6" sx={{ mb: 1, fontFamily: 'Playfair Display, serif' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            by {item.artist}
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            {item.medium} • {item.size}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating value={item.rating} precision={0.1} readOnly sx={{ mr: 1 }} />
                            <Typography variant="body2">
                              ({item.reviews} reviews)
                            </Typography>
                          </Box>
                          <Typography variant="h6" sx={{ color: '#4ECDC4', mb: 2 }}>
                            {item.price}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                              variant="contained"
                              startIcon={<ShoppingCartIcon />}
                              sx={{
                                bgcolor: '#4ECDC4',
                                '&:hover': { bgcolor: '#3DBEB6' }
                              }}
                            >
                              Add to Cart
                            </Button>
                            <Button
                              variant="outlined"
                              startIcon={<FavoriteIcon />}
                              sx={{
                                borderColor: '#4ECDC4',
                                color: '#4ECDC4',
                                '&:hover': {
                                  borderColor: '#3DBEB6',
                                  color: '#3DBEB6'
                                }
                              }}
                            >
                              Wishlist
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ShopPage; 