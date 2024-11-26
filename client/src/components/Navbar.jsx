import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../assets/logo.png'; // Assuming this is the logo image
import { useNavigate } from 'react-router-dom';

const styles = {
  appBar: {
    backgroundColor: '#121212',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: { xs: '0.5rem 1rem', md: '0.5rem 2rem' },
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%', // Circular container to match the image
    padding: '6px', // Space between the image and the container
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
    maxWidth: '100px', // Set a max size for the image on larger screens
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
    // Responsive adjustments
    '@media (max-width: 600px)': {
      maxWidth: '80px',  // Reduce the size on mobile devices
      maxHeight: '80px',
    },
  },
  navContainer: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: '1rem',
  },
  navButton: {
    color: '#fff',
    fontSize: '0.95rem',
    textTransform: 'none',
    padding: '6px 16px',
    borderRadius: 1,
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      transform: 'translateY(-1px)',
    },
    '&.active': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
  },
  menuButton: {
    display: { xs: 'flex', md: 'none' },
    color: '#fff',
    padding: '8px',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  drawer: {
    '& .MuiDrawer-paper': {
      width: 240,
      backgroundColor: '#1a1a1a',
      borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  drawerList: {
    padding: '1rem 0',
  },
  drawerItem: {
    padding: '0.5rem 1.5rem',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },
  drawerItemText: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#fff',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#f0f0f0',
    },
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  
  const navItems = ['About', 'Careers', 'Contact'];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setDrawerOpen(false);

    if (item === 'Careers') {
      // Use navigate to go to the Careers page
      navigate('/careers');
    } else {
      // Scroll to section relative to the base URL
      const baseUrl = `${window.location.origin}/`;
      window.location.href = `${baseUrl}#${item.toLowerCase()}`;
    }
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.imageContainer}>
            <img sx={styles.logo} src={Logo} alt="Logo" width={100} height={30} />
          </Box>

          <Box sx={styles.navContainer}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  ...styles.navButton,
                  ...(activeItem === item && styles.navButton.active),
                }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>

          <IconButton
            onClick={handleDrawerToggle}
            sx={styles.menuButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={styles.drawer}
      >
        <Box sx={styles.drawerHeader}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: '#fff' }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={styles.drawerList}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={styles.drawerItem}
                onClick={() => handleNavClick(item)}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: styles.drawerItemText,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
