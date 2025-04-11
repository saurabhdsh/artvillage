import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const artists = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop&q=80',
    bio: 'Contemporary abstract artist known for vibrant color palettes and emotional depth.',
    style: 'Abstract Expressionism',
    location: 'Barcelona, Spain',
    social: {
      instagram: '@mariarodriguezart',
      twitter: '@mariarodriguez',
      linkedin: 'maria-rodriguez-art'
    },
    featuredWorks: [
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&h=400&fit=crop&q=80'
    ]
  },
  {
    id: 2,
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80',
    bio: 'Urban artist capturing the essence of city life through mixed media and street art influences.',
    style: 'Urban Contemporary',
    location: 'New York, USA',
    social: {
      instagram: '@jameswilsonart',
      twitter: '@jameswilson',
      linkedin: 'james-wilson-art'
    },
    featuredWorks: [
      'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop&q=80'
    ]
  },
  {
    id: 3,
    name: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&q=80',
    bio: 'Traditional painter specializing in landscape and nature-inspired works with a modern twist.',
    style: 'Contemporary Landscape',
    location: 'Shanghai, China',
    social: {
      instagram: '@sarahchenart',
      twitter: '@sarahchen',
      linkedin: 'sarah-chen-art'
    },
    featuredWorks: [
      'https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&h=400&fit=crop&q=80'
    ]
  }
];

const ArtistsPage = () => {
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
            Featured Artists
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {artists.map((artist) => (
            <Grid item xs={12} md={4} key={artist.id}>
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
                    height="400"
                    image={artist.image}
                    alt={artist.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {artist.name}
                    </Typography>
                    <Chip
                      label={artist.style}
                      color="primary"
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {artist.location}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {artist.bio}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <Button
                        startIcon={<InstagramIcon />}
                        href={`https://instagram.com/${artist.social.instagram}`}
                        target="_blank"
                      >
                        Instagram
                      </Button>
                      <Button
                        startIcon={<TwitterIcon />}
                        href={`https://twitter.com/${artist.social.twitter}`}
                        target="_blank"
                      >
                        Twitter
                      </Button>
                      <Button
                        startIcon={<LinkedInIcon />}
                        href={`https://linkedin.com/in/${artist.social.linkedin}`}
                        target="_blank"
                      >
                        LinkedIn
                      </Button>
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Featured Works
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {artist.featuredWorks.map((work, index) => (
                        <Avatar
                          key={index}
                          src={work}
                          variant="rounded"
                          sx={{ width: 100, height: 100 }}
                        />
                      ))}
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

export default ArtistsPage; 