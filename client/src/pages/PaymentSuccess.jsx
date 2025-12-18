import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CircularProgress from '@mui/material/CircularProgress';
import firstImage from '../assets/first.png';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at center bottom, #2A3C5A 0%, #1F2F4C 50%, #182236 100%)',
    backgroundColor: '#182236',
    color: '#ffffff',
    padding: { xs: 2, md: 4 },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '700px',
    padding: { xs: 3, md: 5 },
    borderRadius: 4,
    background: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    gap: 3,
    textAlign: 'center',
  },
  logoImage: {
    width: { xs: '200px', md: '250px' },
    height: 'auto',
    marginBottom: 2,
    objectFit: 'contain',
  },
  successIcon: {
    fontSize: { xs: '5rem', md: '6rem' },
    color: '#4caf50',
    marginBottom: 2,
  },
  title: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    fontWeight: 800,
    color: '#182236',
    marginBottom: 1,
  },
  message: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: '#333333',
    lineHeight: 1.8,
    marginBottom: 2,
  },
  redirectMessage: {
    fontSize: { xs: '0.9rem', md: '1rem' },
    color: '#666666',
    fontStyle: 'italic',
    marginTop: 2,
  },
  sessionId: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    fontFamily: 'monospace',
    backgroundColor: 'var(--bg-secondary)',
    padding: 1,
    borderRadius: 2,
    marginTop: 1,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 2,
    width: '100%',
    maxWidth: '400px',
    marginTop: 2,
  },
  button: {
    flex: 1,
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: 3,
    textTransform: 'none',
    '&.primary': {
      backgroundColor: '#4caf50',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#388e3c',
      },
    },
    '&.secondary': {
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      border: '2px solid var(--border-color)',
      '&:hover': {
        backgroundColor: 'var(--bg-tertiary)',
        borderColor: 'var(--text-tertiary)',
      },
    },
  },
  bottomImage: {
    width: { xs: '200px', md: '250px' },
    height: 'auto',
    marginTop: 3,
    objectFit: 'contain',
  },
};

function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://www.rightintellectual.com';
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={styles.pageContainer}>
      <Fade in timeout={500}>
        <Paper elevation={8} sx={styles.contentContainer}>
          <CheckCircleIcon sx={styles.successIcon} />
          
          <Typography variant="h2" sx={styles.title}>
            Payment Successful!
          </Typography>
          
          <Typography sx={styles.message}>
            Thank you for your investment in RISE. Your payment has been processed successfully.
            We will be getting back to you within 48 hours with complete formalities.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
            <TrendingUpIcon sx={{ color: '#4caf50', fontSize: '2rem' }} />
            <Typography variant="h6" sx={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              Your investment is confirmed
            </Typography>
          </Box>

          {sessionId && (
            <Box sx={styles.sessionId}>
              Transaction ID: {sessionId}
            </Box>
          )}

          <Box sx={styles.buttonContainer}>
            <Button
              onClick={() => navigate('/investors')}
              sx={styles.button}
              className="secondary"
            >
              View More Tiers
            </Button>
            <Button
              onClick={() => navigate('/')}
              sx={styles.button}
              className="primary"
              startIcon={<HomeIcon />}
            >
              Back to Home
            </Button>
          </Box>

          <Box sx={styles.bottomImage}>
            <img src={firstImage} alt="Success" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </Box>
        </Paper>
      </Fade>
    </Box>
  );
}

export default PaymentSuccess;
