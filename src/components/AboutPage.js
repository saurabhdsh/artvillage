import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Emily Chen',
    role: 'Founder & Curator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop&q=80',
    bio: 'With over 20 years of experience in the art world, Dr. Chen has curated numerous successful exhibitions worldwide.'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Gallery Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80',
    bio: 'Specializing in contemporary art, Michael brings innovative exhibition concepts to life.'
  },
  {
    id: 3,
    name: 'Sarah Wilson',
    role: 'Art Consultant',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&q=80',
    bio: 'Sarah helps collectors build meaningful art collections with her extensive knowledge of the art market.'
  }
];

const storySections = [
  {
    id: 1,
    icon: <HistoryIcon sx={{ fontSize: 40, color: '#4ECDC4' }} />,
    title: "Our Beginnings",
    content: "Founded in 2010, Art Village began as a small gallery space with a big dream. Our founders envisioned a place where art could transcend boundaries and connect people from all walks of life.",
    color: "#FF6B6B"
  },
  {
    id: 2,
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#4ECDC4' }} />,
    title: "Community Growth",
    content: "What started as a local gallery quickly grew into a vibrant community of artists and art enthusiasts. We've fostered countless creative connections and supported emerging talents.",
    color: "#4ECDC4"
  },
  {
    id: 3,
    icon: <PublicIcon sx={{ fontSize: 40, color: '#4ECDC4' }} />,
    title: "Global Reach",
    content: "Today, with galleries in New York, London, and Tokyo, we bring art to communities worldwide, fostering cultural exchange and artistic dialogue.",
    color: "#FFD166"
  }
];

const AboutPage = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
            About Art Village
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {storySections.map((section) => (
              <Grid item xs={12} md={4} key={section.id}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
                      backdropFilter: 'blur(10px)',
                      borderTop: `4px solid ${section.color}`,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {section.icon}
                    </motion.div>
                    <Typography
                      variant="h5"
                      sx={{
                        mt: 2,
                        mb: 2,
                        fontFamily: 'Playfair Display, serif',
                        color: section.color
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {section.content}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Paper
            elevation={3}
            sx={{
              mt: 6,
              p: 4,
              background: 'linear-gradient(45deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
              backdropFilter: 'blur(10px)',
              borderLeft: '4px solid #4ECDC4'
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#4ECDC4' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              We believe in the transformative power of art and its ability to inspire, challenge, and connect people across cultures and generations. Our carefully curated exhibitions showcase both established and emerging artists, offering a diverse range of perspectives and styles.
            </Typography>
          </Paper>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Visit Us
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    123 Art Street, New York, NY 10001
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    info@artvillage.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTimeIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="body1">
                    Tuesday - Sunday: 10:00 AM - 6:00 PM
                  </Typography>
                </Box>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography variant="body1" color="primary">
                    Instagram
                  </Typography>
                  <Typography variant="body1" color="primary">
                    Twitter
                  </Typography>
                  <Typography variant="body1" color="primary">
                    Facebook
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mt: 8,
            mb: 4,
            fontFamily: 'Playfair Display, serif',
            color: 'primary.main'
          }}
        >
          Our Team
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} md={4} key={member.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Avatar
                    src={member.image}
                    sx={{
                      width: 150,
                      height: 150,
                      mx: 'auto',
                      mb: 2,
                      border: '4px solid #4ECDC4'
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body1">
                    {member.bio}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage; 