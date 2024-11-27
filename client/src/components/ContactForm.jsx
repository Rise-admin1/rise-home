import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import axios from 'axios';

// Styles configuration (remains the same as you provided)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    backgroundColor: '#212121',
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
    maxWidth: '500px',
    padding: 3,
    borderRadius: 4,
    background: 'linear-gradient(to right, #333333, #212121)',
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
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSend = async () => {
    // Prepare data for submission
    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      // Sending data to backend
      const response = await axios.post('http://localhost:3001/api/rise/send-contact', formData);
      console.log(resp.data,'response');
      

      // Handle success response (e.g., show a success message)
      console.log('Form submitted successfully:', response.data);

      // Reset the form (optional)
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

      // You can also display a success message to the user here
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error sending contact form:', error);
    }
  };

  return (
    <section id="contact">
      <Box sx={styles.container}>
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
            value={name}
            onChange={(e) => setName(e.target.value)} // Capture name input
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            sx={styles.textField}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture email input
          />
          <TextField
            label="Phone Number"
            type="tel"
            variant="outlined"
            sx={styles.textField}
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // Capture phone input
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            sx={styles.textField}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Capture message input
          />
          <Button onClick={handleSend} sx={styles.button}>
            Submit
          </Button>
        </Paper>

        {/* Footer Text */}
      </Box>
    </section>
  );
}

export default ContactForm;
