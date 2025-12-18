import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at center bottom, #2A3C5A 0%, #1F2F4C 50%, #182236 100%)',
    backgroundColor: '#182236',
    color: '#ffffff',
    padding: { xs: 2, md: 4 },
    paddingTop: { xs: 4, md: 6 },
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
    background: 'linear-gradient(45deg, var(--text-primary) 30%, #f50057 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '0.02em',
  },
  formSubtitle: {
    fontSize: { xs: '0.9rem', md: '1rem' },
    color: 'var(--text-tertiary)',
    textAlign: 'center',
    marginBottom: 3,
    lineHeight: 1.6,
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
    '& .MuiInputAdornment-root': {
      color: 'var(--text-tertiary)',
      '&.Mui-focused': {
        color: '#f50057',
      },
    },
  },
  button: {
    backgroundColor: '#f50057',
    color: '#ffffff',
    padding: '14px 40px',
    fontSize: { xs: '0.58rem', sm: '0.75rem', md: '0.875rem' },
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
    '&:active': {
      transform: 'translateY(0)',
    },
    '&:disabled': {
      backgroundColor: 'var(--text-tertiary)',
      color: '#ffffff',
    },
  },
  tiersContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1400px',
    padding: { xs: 2, md: 4 },
    gap: 3,
  },
  tiersTitle: {
    fontSize: { xs: '1.75rem', md: '2.5rem' },
    fontWeight: 800,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 2,
  },
  tiersGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
    },
    gap: 2,
    width: '100%',
  },
  tierCard: {
    padding: { xs: 2.5, md: 3.5 },
    borderRadius: 3,
    background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
    boxShadow: '0 6px 20px var(--shadow-light)',
    border: '2px solid var(--border-color)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: { xs: '120px', md: '140px' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    cursor: 'pointer',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #f50057 0%, #c51162 100%)',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s ease',
    },
    '&:hover': {
      transform: 'translateY(-12px) scale(1.02)',
      boxShadow: '0 12px 32px rgba(245, 0, 87, 0.2)',
      borderColor: '#f50057',
      '&::before': {
        transform: 'scaleX(1)',
      },
    },
    '&:active': {
      transform: 'translateY(-8px) scale(0.98)',
    },
  },
  tierCardLoading: {
    opacity: 0.6,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  tierIcon: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    color: '#f50057',
    marginBottom: 0.5,
    opacity: 0.8,
  },
  tierAmount: {
    fontSize: { xs: '1.5rem', md: '1.75rem' },
    fontWeight: 800,
    background: 'linear-gradient(45deg, var(--text-primary) 30%, #f50057 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '0.02em',
    lineHeight: 1.2,
  },
  tierLabel: {
    fontSize: { xs: '0.75rem', md: '0.85rem' },
    color: 'var(--text-tertiary)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
    marginTop: 0.5,
  },
};

const generateInvestmentTiers = () => {
  // Predefined uniform tier amounts from 10 AED to 999k AED (Stripe limit)
  const tiers = [
    10, 1000, 2000, 3000, 5000, 7000, 10000, 13000, 15000, 18000, 20000,
    25000, 30000, 35000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
    120000, 150000, 180000, 200000, 250000, 300000, 350000, 400000, 450000, 500000,
    600000, 700000, 750000, 800000, 850000, 900000, 950000, 975000, 990000, 999000
  ];
  
  return tiers;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  if (!phone || phone.trim() === '') {
    return { valid: true, message: '' }; // Phone is optional
  }
  
  // Remove spaces, dashes, parentheses, dots, and other common separators for validation
  const cleanedPhone = phone.replace(/[\s\-\(\)\.\/]/g, '');
  
  // International phone number validation (E.164 format)
  // Accepts: +[country code][number] where country code is 1-3 digits and number is 4-14 digits
  // Total length should be between 7-15 digits (excluding the +)
  if (cleanedPhone.startsWith('+')) {
    // E.164 format: + followed by 1-3 digit country code, then 4-14 digit subscriber number
    const internationalRegex = /^\+[1-9]\d{1,3}\d{4,14}$/;
    if (internationalRegex.test(cleanedPhone) && cleanedPhone.length >= 8 && cleanedPhone.length <= 16) {
      return { valid: true, message: '' };
    }
  }
  
  // Numbers without + prefix (local or country code format)
  // Accepts: country code (1-3 digits) + number (4-14 digits)
  // Or just local number (7-15 digits)
  if (/^\d+$/.test(cleanedPhone)) {
    // Must be between 7-15 digits for a valid phone number
    if (cleanedPhone.length >= 7 && cleanedPhone.length <= 15) {
      // Check if it starts with 0 (common local format indicator)
      if (cleanedPhone.startsWith('0')) {
        // Local format with leading 0, should have at least 8 digits total
        if (cleanedPhone.length >= 8) {
          return { valid: true, message: '' };
        }
      } else {
        // Could be country code + number or just local number
        return { valid: true, message: '' };
      }
    }
  }
  
  return { 
    valid: false, 
    message: 'Please enter a valid phone number (e.g., +1234567890 or 1234567890)' 
  };
};

function Investors() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingTier, setLoadingTier] = useState(null);
  const [error, setError] = useState('');

  const investmentTiers = generateInvestmentTiers();
  
  const API_BASE_URL = 'https://react-journal1.onrender.com';
  // const API_BASE_URL = 'http://localhost:3001';

  const handleSubmit = () => {
    let hasError = false;

    // Validate name (optional but must be valid if provided)
    if (name && name.trim() !== '') {
      if (name.trim().length < 2) {
        setNameError('Name must be at least 2 characters');
        hasError = true;
      } else {
        setNameError('');
      }
    } else {
      setNameError('');
    }

    // Validate email (required)
    if (!email || email.trim() === '') {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    } else {
      setEmailError('');
    }

    // Validate phone (optional but must be valid if provided)
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
      setFormSubmitted(true);
    }
  };

  const formatAmount = (amount) => {
    if (amount >= 1000000) {
      const millions = amount / 1000000;
      return millions % 1 === 0 ? `${millions}M AED` : `${millions.toFixed(1)}M AED`;
    } else if (amount >= 1000) {
      const thousands = amount / 1000;
      return thousands % 1 === 0 ? `${thousands}K AED` : `${thousands.toFixed(1)}K AED`;
    }
    return `${amount} AED`;
  };

  const handleTierClick = async (tierAmount) => {
    if (!email) {
      setError('Please submit the contact form first');
      return;
    }

    setLoadingTier(tierAmount);
    setError('');

    try {
      // Create Stripe checkout session
      const response = await axios.post(
        `${API_BASE_URL}/api/rise/create-checkout-session`,
        {
          amount: tierAmount,
          name: name,
          email: email,
          phone: phone,
          tierAmount: formatAmount(tierAmount),
        }
      );

      if (response.data.url) {
        // Redirect to Stripe Checkout
        window.location.href = response.data.url;
      } else {
        setError('Failed to create checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Checkout session error:', error);
      setError(
        error.response?.data?.message || 
        'Failed to initiate payment. Please try again.'
      );
      setLoadingTier(null);
    }
  };

  return (
    <Box sx={styles.pageContainer}>
      {!formSubmitted && (
        <Fade in={!formSubmitted} timeout={500}>
          <Paper elevation={8} sx={styles.formContainer}>
            <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" sx={styles.formTitle}>
                Investor Contact Form
              </Typography>
              <Typography sx={styles.formSubtitle}>
                Fill in your details to explore our investment opportunities
              </Typography>
            </Box>
            
            <Divider sx={{ width: '100%', my: 1 }} />

            <TextField
              label="Full Name"
              variant="outlined"
              sx={styles.textField}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError('');
              }}
              error={!!nameError}
              helperText={nameError }
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
              helperText={emailError || 'We\'ll never share your email'}
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

            <Button 
              onClick={handleSubmit} 
              sx={styles.button}
              disabled={loading}
              endIcon={!loading && <ArrowForwardIcon />}
            >
              {loading ? <CircularProgress size={24} sx={{ color: '#ffffff' }} /> : 'Continue to Investment Tiers'}
            </Button>
          </Paper>
        </Fade>
      )}

      {formSubmitted && (
        <Fade in={formSubmitted} timeout={500}>
          <Box sx={styles.tiersContainer}>
            <Typography variant="h2" sx={styles.tiersTitle}>
              Investment Tiers
            </Typography>
            {error && (
              <Alert 
                icon={<CancelIcon />}
                severity="error"
                sx={{ width: '100%', maxWidth: '600px', marginBottom: 2 }}
                onClose={() => setError('')}
              >
                {error}
              </Alert>
            )}
            <Box sx={styles.tiersGrid}>
              {investmentTiers.map((tier, index) => (
                <Paper
                  key={tier}
                  elevation={3}
                  onClick={() => handleTierClick(tier)}
                  sx={{
                    ...styles.tierCard,
                    ...(loadingTier === tier && styles.tierCardLoading),
                    animation: `fadeIn 0.5s ease-in-out ${index * 0.05}s both`,
                  }}
                >
                  {loadingTier === tier ? (
                    <CircularProgress size={40} sx={{ color: '#f50057' }} />
                  ) : (
                    <>
                      <TrendingUpIcon sx={styles.tierIcon} />
                      <Typography variant="h5" sx={styles.tierAmount}>
                        {formatAmount(tier)}
                      </Typography>
                      <Typography sx={styles.tierLabel}>
                        Click to Invest
                      </Typography>
                    </>
                  )}
                </Paper>
              ))}
            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
}

export default Investors;
