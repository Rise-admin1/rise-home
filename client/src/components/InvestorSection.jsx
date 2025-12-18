import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const styles = {
  wrapper: {
    backgroundColor: 'var(--bg-primary)',
    padding: { xs: 2, md: 4 },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: { xs: 3, md: 6 },
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    textAlign: 'center',
    gap: { xs: 3, md: 4 },
    borderRadius: 2,
  },
  title: {
    fontSize: { xs: '1.75rem', md: '2.5rem' },
    fontWeight: 800,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    background: 'linear-gradient(45deg, var(--text-primary) 30%, var(--text-tertiary) 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    fontSize: { xs: '0.95rem', md: '1.1rem' },
    color: 'var(--text-tertiary)',
    lineHeight: 1.8,
    letterSpacing: '0.3px',
    maxWidth: '800px',
  },
  button: {
    backgroundColor: '#f50057',
    color: '#ffffff',
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: 4,
    textTransform: 'uppercase',
    boxShadow: '0 3px 10px rgba(245, 0, 87, 0.4)',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#c51162',
    },
  },
};

function InvestorSection() {
  const navigate = useNavigate();

  const handleInvestorClick = () => {
    navigate('/investors');
  };

  return (
    <Paper elevation={8} sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>
          Investment Opportunities
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          Explore our investment tiers and become part of RISE's growth story. 
          From 1,000 AED to 1,000,000 AED, find the investment level that works for you.
        </Typography>
        <Button onClick={handleInvestorClick} sx={styles.button}>
          View Investment Tiers
        </Button>
      </Box>
    </Paper>
  );
}

export default InvestorSection;
