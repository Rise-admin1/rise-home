import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import axios from 'axios';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    padding: { xs: 2, md: 4 },
    paddingTop: { xs: 4, md: 6 },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    maxWidth: '800px',
    padding: { xs: 2, md: 4 },
    gap: 3,
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: 2,
    background: 'linear-gradient(45deg, var(--text-primary) 30%, #f50057 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    color: 'var(--text-tertiary)',
    lineHeight: 1.8,
    marginBottom: 3,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '600px',
    padding: { xs: 3, md: 4 },
    borderRadius: 4,
    background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    gap: 3,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #f50057 0%, #c51162 50%, #f50057 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 3s ease-in-out infinite',
    },
  },
  formTitle: {
    fontSize: { xs: '1.75rem', md: '2.25rem' },
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: 1,
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    '& .MuiInputBase-root': {
      color: 'var(--text-primary)',
      backgroundColor: 'var(--bg-card)',
      borderRadius: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'var(--bg-secondary)',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'var(--text-tertiary)',
      fontWeight: 500,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--border-color)',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: '#f50057',
        borderWidth: 2,
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f50057',
        borderWidth: 2,
      },
      '&.Mui-error fieldset': {
        borderColor: '#d32f2f',
      },
    },
  },
  button: {
    backgroundColor: '#f50057',
    color: '#ffffff',
    padding: '14px 40px',
    fontSize: { xs: '0.875rem', md: '1rem' },
    fontWeight: 700,
    borderRadius: 3,
    textTransform: 'uppercase',
    boxShadow: '0 4px 15px rgba(245, 0, 87, 0.4)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    letterSpacing: '0.05em',
    width: '100%',
    maxWidth: '400px',
    '&:hover': {
      backgroundColor: '#c51162',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(245, 0, 87, 0.5)',
    },
    '&:disabled': {
      backgroundColor: 'var(--text-tertiary)',
      color: '#ffffff',
    },
  },
  otpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    width: '100%',
  },
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  if (!phone || phone.trim() === '') {
    return { valid: true, message: '' };
  }
  
  const cleanedPhone = phone.replace(/[\s\-\(\)\.\/]/g, '');
  
  if (cleanedPhone.startsWith('+')) {
    const internationalRegex = /^\+[1-9]\d{1,3}\d{4,14}$/;
    if (internationalRegex.test(cleanedPhone) && cleanedPhone.length >= 8 && cleanedPhone.length <= 16) {
      return { valid: true, message: '' };
    }
  }
  
  if (/^\d+$/.test(cleanedPhone)) {
    if (cleanedPhone.length >= 7 && cleanedPhone.length <= 15) {
      if (cleanedPhone.startsWith('0')) {
        if (cleanedPhone.length >= 8) {
          return { valid: true, message: '' };
        }
      } else {
        return { valid: true, message: '' };
      }
    }
  }
  
  return { 
    valid: false, 
    message: 'Please enter a valid phone number (e.g., +1234567890 or 1234567890)' 
  };
};

const downloadPDF = (pdfUrl, filename) => {
  const a = document.createElement('a');
  a.href = pdfUrl;
  a.download = filename;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

function Reports() {
  const [showForm, setShowForm] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const API_BASE_URL = 'https://react-journal1.onrender.com';
  // const API_BASE_URL = 'http://localhost:3001';

  const handleGetReport = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async () => {
    let hasError = false;

    if (!name || name.trim() === '') {
      setNameError('Name is required');
      hasError = true;
    } else if (name.trim().length < 2) {
      setNameError('Name must be at least 2 characters');
      hasError = true;
    } else {
      setNameError('');
    }

    if (!email || email.trim() === '') {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (phone && phone.trim() !== '') {
      const phoneValidation = validatePhone(phone);
      if (!phoneValidation.valid) {
        setPhoneError(phoneValidation.message);
        hasError = true;
      } else {
        setPhoneError('');
      }
    } else {
      setPhoneError('');
    }

    if (!hasError) {
      setLoading(true);
      setSubmitError('');
      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/rise/submit-report-request`,
          { name, email, phone }
        );
        
        if (response.data.success) {
          setShowForm(false);
          setShowOTP(true);
        } else {
          setSubmitError(response.data.message || 'Failed to submit request');
        }
      } catch (error) {
        console.error('Error submitting report request:', error);
        setSubmitError(error.response?.data?.message || 'Failed to submit request. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setOtp(value);
    if (otpError) setOtpError('');
  };

  const handleOtpVerify = async () => {
    if (!otp || otp.length !== 4) {
      setOtpError('Please enter a valid 4-digit OTP');
      return;
    }

    setLoading(true);
    setOtpError('');
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/rise/verify-otp`,
        { email, otp }
      );
      
      if (response.data.success && response.data.pdfUrl) {
        downloadPDF(response.data.pdfUrl, 'report.pdf');
        setShowOTP(false);
        setShowForm(false);
        setName('');
        setEmail('');
        setPhone('');
        setOtp('');
      } else {
        setOtpError(response.data.message || 'Failed to verify OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setOtpError(error.response?.data?.message || 'Invalid OTP. Please check and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={styles.pageContainer}>
      {showOTP && (
        <Fade in={showOTP} timeout={500}>
          <Paper elevation={8} sx={styles.formContainer}>
            <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" sx={styles.formTitle}>
                Verify OTP
              </Typography>
              <Typography sx={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', mt: 1 }}>
                Please enter the 4-digit OTP sent to your email
              </Typography>
            </Box>
            
            <Divider sx={{ width: '100%', my: 1 }} />

            <Box sx={styles.otpContainer}>
              <TextField
                label="OTP"
                variant="outlined"
                sx={styles.textField}
                required
                value={otp}
                onChange={handleOtpChange}
                error={!!otpError}
                helperText={otpError || 'Enter 4-digit OTP'}
                placeholder="1234"
                inputProps={{
                  maxLength: 4,
                  style: { textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.5em' }
                }}
              />

              <Button 
                onClick={handleOtpVerify} 
                sx={styles.button}
                disabled={loading || otp.length !== 4}
                endIcon={!loading && <VerifiedIcon />}
              >
                {loading ? <CircularProgress size={24} sx={{ color: '#ffffff' }} /> : 'Verify OTP'}
              </Button>
            </Box>
          </Paper>
        </Fade>
      )}

      {showForm && !showOTP && (
        <Fade in={showForm} timeout={500}>
          <Paper elevation={8} sx={styles.formContainer}>
            <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" sx={styles.formTitle}>
                Request Report
              </Typography>
              <Typography sx={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', mt: 1 }}>
                Fill in your details to receive your report
              </Typography>
            </Box>
            
            <Divider sx={{ width: '100%', my: 1 }} />

            <TextField
              label="Name"
              variant="outlined"
              sx={styles.textField}
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError('');
              }}
              error={!!nameError}
              helperText={nameError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: nameError ? '#d32f2f' : 'var(--text-tertiary)' }} />
                  </InputAdornment>
                ),
              }}
              placeholder="John Doe"
            />

            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              sx={styles.textField}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError('');
              }}
              error={!!emailError}
              helperText={emailError || 'An OTP verification will be sent to your email'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: emailError ? '#d32f2f' : 'var(--text-tertiary)' }} />
                  </InputAdornment>
                ),
              }}
              placeholder="john.doe@example.com"
            />

            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              sx={styles.textField}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (phoneError) setPhoneError('');
              }}
              error={!!phoneError}
              helperText={phoneError || 'Optional - Include country code (e.g., +1234567890)'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: phoneError ? '#d32f2f' : 'var(--text-tertiary)' }} />
                  </InputAdornment>
                ),
              }}
              placeholder="+971 50 123 4567"
            />

            {submitError && (
              <Typography sx={{ color: '#d32f2f', fontSize: '0.875rem', textAlign: 'center' }}>
                {submitError}
              </Typography>
            )}
            <Button 
              onClick={handleFormSubmit} 
              sx={styles.button}
              disabled={loading}
              endIcon={!loading && <ArrowForwardIcon />}
            >
              {loading ? <CircularProgress size={24} sx={{ color: '#ffffff' }} /> : 'Submit'}
            </Button>
          </Paper>
        </Fade>
      )}

      <Fade in={!showForm && !showOTP} timeout={500}>
        <Box sx={styles.contentContainer}>
          <Typography variant="h1" sx={styles.title}>
            Reports
          </Typography>
          <Typography sx={styles.description}>
            Our comprehensive reports provide detailed analysis and insights across various domains. 
            These reports include market analysis, financial summaries, performance metrics, and 
            strategic recommendations. Whether you need business intelligence, research data, or 
            analytical insights, our report service delivers accurate and actionable information 
            to support your decision-making process.
          </Typography>
          <Button 
            onClick={handleGetReport} 
            sx={styles.button}
            endIcon={<ArrowForwardIcon />}
          >
            Get Report
          </Button>
        </Box>
      </Fade>
    </Box>
  );
}

export default Reports;
