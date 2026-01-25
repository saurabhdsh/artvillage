import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from '../context/CartContext';

const GalleryPage = () => {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState([]);

  const artworks = [
    {
      id: 1,
      title: 'Abstract Expressionism',
      artist: 'Maria Rodriguez',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1200&h=800&fit=crop&q=80',
      description: 'A vibrant exploration of color and form',
      medium: 'Acrylic on Canvas',
      size: '36" x 48"'
    },
    {
      id: 2,
      title: 'Urban Reflections',
      artist: 'James Wilson',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1200&h=800&fit=crop&q=80',
      description: 'Contemporary cityscape in oil',
      medium: 'Oil on Canvas',
      size: '40" x 30"'
    },
    {
      id: 3,
      title: 'Nature\'s Symphony',
      artist: 'Sarah Chen',
      price: 4800,
      image: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=1200&h=800&fit=crop&q=80',
      description: 'Impressionist landscape masterpiece',
      medium: 'Oil on Canvas',
      size: '48" x 36"'
    },
    {
      id: 4,
      title: 'Digital Dreams',
      artist: 'Elena Martinez',
      price: 3800,
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&h=800&fit=crop&q=80',
      description: 'Digital art exploring virtual reality',
      medium: 'Digital Print',
      size: '24" x 36"'
    },
    {
      id: 5,
      title: 'Neon Nights',
      artist: 'Sophie Black',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=800&fit=crop&q=80',
      description: 'Urban nightlife captured in neon',
      medium: 'Mixed Media',
      size: '30" x 40"'
    }
  ];

  const toggleFavorite = (artworkId) => {
    setFavorites((prev) =>
      prev.includes(artworkId)
        ? prev.filter((id) => id !== artworkId)
        : [...prev, artworkId]
    );
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
            Art Gallery
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {artworks.map((artwork) => (
              <Grid item xs={12} sm={6} md={4} key={artwork.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={artwork.image}
                      alt={artwork.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {artwork.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        by {artwork.artist}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {artwork.medium} • {artwork.size}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {artwork.description}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                        ${artwork.price.toLocaleString()}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          startIcon={<ShoppingCartIcon />}
                          onClick={() => addToCart(artwork)}
                          sx={{
                            bgcolor: '#4ECDC4',
                            '&:hover': { bgcolor: '#3DBEB6' }
                          }}
                        >
                          Add to Cart
                        </Button>
                        <IconButton
                          onClick={() => toggleFavorite(artwork.id)}
                          sx={{
                            color: favorites.includes(artwork.id) ? '#FF6B6B' : 'inherit',
                            '&:hover': {
                              color: '#FF6B6B'
                            }
                          }}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GalleryPage; 