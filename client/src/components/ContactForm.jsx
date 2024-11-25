import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'

// Styles configuration
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    backgroundColor: '#212121', // Blend with the dark theme
    color: '#ffffff',
    textAlign: 'center',
    gap: 4,
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '500px', // Ideal width for a clean UI
    padding: 3,
    borderRadius: 4,
    background: 'linear-gradient(to right, #333333, #212121)', // Blended background
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    gap: 3,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#f5f5f5',
  },
  textField: {
    width: '100%',
    '& .MuiInputBase-root': {
      color: '#ffffff',
    },
    '& .MuiInputLabel-root': {
      color: '#d1d1d1',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#444444',
      },
      '&:hover fieldset': {
        borderColor: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f50057',
      },
    },
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
  footerText: {
    marginTop: 2,
    color: '#d1d1d1',
    fontSize: '0.9rem',
  },
};

function ContactForm() {
  return (
      <section id="contact">
    <Box sx={styles.container} id >

      {/* Title */}
      <Typography variant="h4" sx={styles.title}>
        Get in Touch
      </Typography>

      {/* Form */}
      <Paper elevation={3} sx={styles.formContainer}>
        <TextField
          label="Name"
          variant="outlined"
          sx={styles.textField}
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          sx={styles.textField}
          required
        />
        <TextField
          label="Phone Number"
          type="tel"
          variant="outlined"
          sx={styles.textField}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={styles.textField}
          required
        />
        <Button type="submit" sx={styles.button}>
          Submit
        </Button>
      </Paper>

      {/* Footer Text */}
    </Box>
      </section>
  );
}

export default ContactForm;
