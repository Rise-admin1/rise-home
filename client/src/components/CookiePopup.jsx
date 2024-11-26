import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, Divider, Fade } from '@mui/material';

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '8px',
    zIndex: 1000,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: { xs: 2, md: 3 },  // Adjust padding for different screen sizes
    width: { xs: '90%', sm: '80%', md: '400px' },  // Width is 90% on mobile, 80% on tablets, and fixed on desktop
  },
  heading: {
    fontWeight: 'bold',
    fontSize: { xs: '1rem', md: '1.2rem' },
    marginBottom: '12px',
    color: '#fff',
  },
  paragraph: {
    fontSize: { xs: '0.8rem', md: '0.9rem' },
    color: '#d1d1d1',
    marginBottom: '12px',
    lineHeight: 1.6,
    fontWeight: 300,
    marginLeft: { xs: '0', sm: '20px' },  // Adjust left margin for readability on smaller screens
    marginRight: { xs: '0', sm: '20px' },  // Adjust right margin for readability on smaller screens
  },
  button: {
    backgroundColor: '#f50057',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#f50057',
    },
    marginTop: '12px',
  },
    buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 2,
    marginBottom: '12px',
    },
  divider: {
    width: '60px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '16px auto',
  },
};

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setIsVisible(false);  // Hide the popup if the user has already accepted
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'false');  // Save consent in localStorage
    setIsVisible(false);  // Hide the popup after acceptance
  };

    const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'true');  // Save consent in localStorage
    setIsVisible(false);  // Hide the popup after acceptance
    }

  if (!isVisible) return null;  // Don't render anything if the popup is not visible

  return (
    <Fade in={isVisible} timeout={1000}>
      <Paper elevation={8} sx={styles.wrapper}>
        <Typography variant="h6" sx={styles.heading}>
          We Use Cookies
        </Typography>
        <Divider sx={styles.divider} />
        <Typography variant="body2" sx={styles.paragraph}>
          We use cookies to enhance your browsing experience. By continuing to browse this website, you agree to our use of cookies.
        </Typography>
        <Box sx={styles.buttonContainer}>
        <Button variant="contained" sx={styles.button} onClick={handleAccept}>
          Accept
        </Button>
        <Button variant="contained" sx={styles.button} onClick={handleReject}>
            Decline
        </Button>
        </Box>
      </Paper>
    </Fade>
  );
};

export default CookiePopup;
