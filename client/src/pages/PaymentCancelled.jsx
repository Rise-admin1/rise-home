import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    padding: { xs: 2, md: 4 },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '600px',
    padding: { xs: 3, md: 5 },
    borderRadius: 4,
    background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    gap: 3,
    textAlign: 'center',
  },
  cancelIcon: {
    fontSize: { xs: '5rem', md: '6rem' },
    color: '#ff9800',
    marginBottom: 2,
  },
  title: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: 1,
    background: 'linear-gradient(45deg, #ff9800 30%, #fb8c00 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  message: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: 'var(--text-tertiary)',
    lineHeight: 1.8,
    marginBottom: 2,
  },
  infoBox: {
    backgroundColor: 'var(--bg-secondary)',
    padding: 2,
    borderRadius: 2,
    marginTop: 2,
    width: '100%',
  },
  infoText: {
    fontSize: '0.9rem',
    color: 'var(--text-tertiary)',
    fontStyle: 'italic',
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
      backgroundColor: '#f50057',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#c51162',
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
};

function PaymentCancelled() {
  const navigate = useNavigate();

  return (
    <Box sx={styles.pageContainer}>
      <Fade in timeout={500}>
        <Paper elevation={8} sx={styles.contentContainer}>
          <CancelIcon sx={styles.cancelIcon} />
          
          <Typography variant="h2" sx={styles.title}>
            Payment Cancelled
          </Typography>
          
          <Typography sx={styles.message}>
            Your payment was cancelled. No charges have been made to your account.
            You can return to explore our investment tiers and try again when you're ready.
          </Typography>

          <Box sx={styles.infoBox}>
            <Typography sx={styles.infoText}>
              If you experienced any issues during checkout, please contact our support team for assistance.
            </Typography>
          </Box>

          <Box sx={styles.buttonContainer}>
            <Button
              onClick={() => navigate('/investors')}
              sx={styles.button}
              className="primary"
              startIcon={<ArrowBackIcon />}
            >
              Back to Investment Tiers
            </Button>
            <Button
              onClick={() => navigate('/')}
              sx={styles.button}
              className="secondary"
              startIcon={<HomeIcon />}
            >
              Back to Home
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Box>
  );
}

export default PaymentCancelled;
