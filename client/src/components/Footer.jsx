import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { Facebook, LinkedIn } from '@mui/icons-material';
import Logo from '../assets/logo.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const styles = {
  footerContainer: {
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '20px 40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.3)',
  },
  footerTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2,
    textAlign: 'left',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    gap: 1,
    fontSize: '0.9rem',
    color: '#d1d1d1',
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 1,
  },
  socialIcon: {
    color: '#ffffff',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#1877F2',
    },
  },
  footerBottom: {
    marginTop: 2,
    fontSize: '0.8rem',
    color: '#b3b3b3',
  },
  addressSection: {
    marginTop: '20px',
    fontSize: '0.85rem',
    color: '#d1d1d1',
    textAlign: 'center',
    lineHeight: 1.6,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  addressItem: {
    color: '#d1d1d1',
    fontSize: '0.9rem',
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%', // Circular container to match the image
    padding: '10px', // Space between the image and the container
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for visual depth
    transition: 'transform 0.3s ease', // Smooth scaling transition on hover
    '&:hover': {
      transform: 'scale(1.05)', // Slightly scale up the container when hovered
    },
  },
  logo: {
    width: '100%', // Ensure the logo scales within the container
    height: '100%', // Ensure the logo scales proportionally
    maxWidth: '100px', // Set a max size for the image
    maxHeight: '100px',
    objectFit: 'contain', // Ensure image doesn't get distorted
    fontWeight: 600,
    fontSize: { xs: '1.25rem', md: '1.5rem' },
    letterSpacing: '0.5px',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease, transform 0.3s ease', // Smooth transition for hover effect
    '&:hover': {
      opacity: 0.8, // Adjust opacity on hover
      transform: 'scale(1.1)', // Optionally add a scale effect for logo on hover
    },
  },
};

function Footer() {
  return (
    <Box sx={styles.footerContainer}>
      {/* Top Section */}
      <Box sx={styles.footerTop}>
        {/* Logo */}
        <Box sx={styles.imageContainer}>
          <img sx={styles.logo} src={Logo} alt="Logo" width={100} height={30} />
        </Box>

        {/* Links */}
        <Box sx={styles.links}>
          <HashLink smooth to="/#about">About Us</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
          <Link to="/careers">Careers</Link>
        </Box>

        {/* Social Media Icons */}
        <Box sx={styles.socialMedia}>
          {/* <IconButton sx={styles.socialIcon}>
            <Facebook />
          </IconButton> */}
          <Link to={{ pathname: "https://ae.linkedin.com/company/right-intellectual-services-rise-portal-ltd" }} target="_blank">
            <IconButton sx={styles.socialIcon}>
              <LinkedIn />
            </IconButton>
          </Link>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ backgroundColor: '#444', marginY: 2 }} />

      {/* Address, Phone, and Email Section */}
      <Box sx={styles.addressSection}>
        <Typography sx={styles.addressItem}>
          Address: Gate Avenue, Zone D, Level 1, 201, Al Mustaqbal St, Dubai, UAE.
        </Typography>
        <Typography sx={styles.addressItem}>
          Phone: +971 5677 91074
        </Typography>
        <Typography sx={styles.addressItem}>
          Email: <a href="mailto:info@rightintellectual.ae" style={{ color: '#d1d1d1', textDecoration: 'none' }}>info@rightintellectual.ae</a>
        </Typography>
      </Box>

      {/* Bottom Section */}
      <Typography sx={styles.footerBottom}>
        © {new Date().getFullYear()} RISE Ltd.
      </Typography>
    </Box>
  );
}

export default Footer;
