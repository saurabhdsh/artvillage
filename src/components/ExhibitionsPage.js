import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const exhibitions = [
  {
    id: 1,
    title: 'Modern Perspectives',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=600&fit=crop&q=80',
    date: 'May 15 - June 30, 2024',
    time: '10:00 AM - 6:00 PM',
    location: 'Art Village Gallery, New York',
    description: 'A groundbreaking exhibition showcasing contemporary artists pushing the boundaries of modern art.',
    artists: ['Maria Rodriguez', 'James Wilson', 'Sarah Chen'],
    category: 'Contemporary Art',
    price: 'Free Entry'
  },
  {
    id: 2,
    title: 'Nature\'s Canvas',
    image: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=800&h=600&fit=crop&q=80',
    date: 'July 10 - August 25, 2024',
    time: '11:00 AM - 7:00 PM',
    location: 'Art Village Gallery, London',
    description: 'An immersive experience exploring the relationship between art and the natural world.',
    artists: ['Sarah Chen', 'David Kim', 'Elena Martinez'],
    category: 'Landscape Art',
    price: '£15'
  },
  {
    id: 3,
    title: 'Urban Expressions',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop&q=80',
    date: 'September 5 - October 20, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Art Village Gallery, Tokyo',
    description: 'A vibrant collection of urban art and street culture influences in contemporary works.',
    artists: ['James Wilson', 'Sophie Black', 'Marcus Chen'],
    category: 'Urban Art',
    price: '¥2000'
  }
];

const ExhibitionsPage = () => {
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
            Current & Upcoming Exhibitions
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {exhibitions.map((exhibition) => (
            <Grid item xs={12} md={4} key={exhibition.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
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
                    image={exhibition.image}
                    alt={exhibition.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {exhibition.title}
                    </Typography>
                    <Chip
                      label={exhibition.category}
                      color="primary"
                      sx={{ mb: 2 }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body1" color="text.secondary">
                        {exhibition.date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccessTimeIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body1" color="text.secondary">
                        {exhibition.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body1" color="text.secondary">
                        {exhibition.location}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {exhibition.description}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Featured Artists
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {exhibition.artists.map((artist) => (
                        <Chip
                          key={artist}
                          label={artist}
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" color="primary">
                        {exhibition.price}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: '#4ECDC4',
                          '&:hover': { bgcolor: '#3DBEB6' }
                        }}
                      >
                        Book Tickets
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExhibitionsPage; 