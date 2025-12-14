import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Divider from '@mui/material/Divider';
import MichaelImg from '../assets/founders-image.webp';

const styles = {
  wrapper: {
    backgroundColor: '#1a1a1a',
    padding: { xs: 2, md: 6 },
  },
  container: {
    display: 'flex',
    flexDirection: 'column', // Set the entire container to column for mobile devices
    gap: { xs: 4, md: 6 },
    backgroundColor: '#212121',
    color: '#ffffff',
    padding: { xs: 3, md: 6 },
    margin: 'auto',
    borderRadius: 2,
    position: 'relative',
    overflow: 'hidden',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },
  heading: {
    fontWeight: 800,
    fontSize: { xs: '2rem', md: '2.5rem' },
    lineHeight: 1.4,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    background: 'linear-gradient(45deg, #ffffff 30%, #d1d1d1 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  divider: {
    width: '80px',
    height: '4px',
    backgroundColor: '#d1d1d1',
    margin: '16px auto',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // Row for larger screens, column for smaller
    gap: { xs: 2, md: 6 },
  },
  imageContainer: {
    display: 'none', // Hidden - image now used as watermark
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  watermarkImage: {
    position: 'absolute',
    top: '50%',
    right: '0%',
    transform: 'translateY(-50%)',
    width: { xs: '400px', md: '600px' },
    height: 'auto',
    maxHeight: '100%',
    opacity: 0.35,
    zIndex: 0,
    pointerEvents: 'none',
    objectFit: 'contain',
  },
  avatar: {
    width: { xs: 120, md: 200 },
    height: { xs: 120, md: 280 },
    border: '4px solid #333333',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  quoteIcon: {
    position: 'absolute',
    fontSize: '140px',
    opacity: 0.1,
    color: '#ffffff',
    top: -20,
    left: -20,
    transform: 'rotate(180deg)',
  },
  content: {
    fontStyle: 'italic',
    fontSize: { xs: '1rem', md: '1.1rem' },
    lineHeight: 1.8,
    letterSpacing: '0.3px',
    marginBottom: 2,
    position: 'relative',
    zIndex: 2,
    '& .MuiTypography-root': {
      marginBottom: 2,
    },
  },
  signatureContainer: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-end' },
    gap: 0.5,
    position: 'relative',
    zIndex: 2,
  },
  signature: {
    fontWeight: 600,
    color: '#f5f5f5',
  },
  title: {
    color: '#a0a0a0',
    fontSize: '0.9rem',
    letterSpacing: 1,
  },
  companyName: {
    color: '#f5f5f5',
    fontWeight: 700,
    fontSize: '1.1rem',
    letterSpacing: 2,
  },
};

function FoundersNote() {
  return (
    <Paper elevation={8} sx={styles.wrapper}>
      <Box sx={styles.container}>
        {/* Heading Section */}
        <Box sx={styles.headingContainer}>
          <Typography variant="h2" sx={styles.heading}>
            Founder's Note
          </Typography>
          <Divider sx={styles.divider} />
        </Box>

        {/* Content Section */}
        <Box sx={styles.contentWrapper}>
          {/* Image Section */}
          <Box sx={styles.imageContainer}>
            <Avatar
              alt="Michael Harun Mugenya"
              src={MichaelImg}
              sx={styles.avatar}
            />
          </Box>

          {/* Text Section */}
          <Box sx={styles.contentContainer}>
            {/* Watermark Image */}
            <Box
              component="img"
              src={MichaelImg}
              alt="Michael Harun Mugenya"
              sx={styles.watermarkImage}
            />
            <Box sx={styles.content}>
              <Typography paragraph>
                RISE Ltd.'s journey has been one defined by unwavering dedication, strategic foresight, and a relentless passion for innovation. Through years of premium, accessible and dedicated service, we continually realize that the path to creating meaningful change and impact lies in contributing to others' success and building a legacy. A legacy of empowering organizations, individuals, and entire industries.
              </Typography>
              
              <Typography paragraph>
                This vision scaffold's RISE's operations in Dubai, UAE — a global hub for innovation and progress. With a diverse range of verticals, we are driven by a shared purpose: to help businesses and individuals harness the power of information, technology, and creativity.
              </Typography>
              
              <Typography paragraph>
                At the heart of our company lies a commitment to excellence across all our sectors—content creation, research and development, data intelligence and analysis, education technology, logistics technology, and audiobooks. These verticals, while distinct, are united by our core belief that transformative ideas can come to life when combined with advanced technology and insightful research.
              </Typography>
              
              <Typography paragraph>
                Our academic and corporate writing content creation services aim to tell stories that resonate, inspire and accelerate audience reception and appreciation. Through research and development, we focus on creating scalable solutions that push the boundaries of what's possible in education and business. With data intelligence, we seek to collect, analyse and turn raw information into actionable insights, empowering businesses to make informed decisions. In education technology, we envision a world where learning is accessible, engaging, and personalized for all. Our work in logistics technology strives to bring efficiency and innovation to global supply chains, while our audiobooks serve as a bridge between knowledge and the listener's ear, expanding horizons one story at a time.
              </Typography>
              
              <Typography paragraph>
                As we move forward, our company stands as a testament to the power of vision, hard work, and strategic planning. Rooted in Kenya's resilient spirit and founded in the heart of Dubai, our mission remains clear: to create opportunities, drive growth, and ultimately, make a lasting impact on the world.
                Together with our dedicated team, we are excited to shape the future of technology, innovation, business and education, continuously pushing the boundaries of what's possible, intellectually.
              </Typography>
            </Box>

            {/* Signature Section */}
            <Box sx={styles.signatureContainer}>
              <Typography variant="h6" sx={styles.signature}>
                Michael Harun Mugenya
              </Typography>
              <Typography sx={styles.title}>
                Founder & CEO
              </Typography>
              <Typography sx={styles.companyName}>
                RISE Ltd.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default FoundersNote;
