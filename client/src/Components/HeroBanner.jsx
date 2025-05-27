import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function HeroBanner() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        color: '#fff'
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 'md',
          color: 'white',
          pl: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Typography variant="h2" fontWeight={800} mb={2}>
          Discover Your Next
        </Typography>
        <Typography variant="h2" fontWeight={700} mb={3}>
          Adventure
        </Typography>
        <Typography variant="subtitle1" fontWeight={900} mb={4}>
          Choose from our curated experiences, customized for every <br/> kind of traveler.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#FFD600',
            color: '#000',
            borderRadius : '50px',
            fontWeight: 900,
            padding : '14px 40px',
            '&:hover': {
              backgroundColor: '#FFC400'
            }
          }}
        >
          BOOK NOW
        </Button>
      </Container>
    </Box>
  );
}
