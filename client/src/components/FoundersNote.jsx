import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import MichaelImg from '../assets/founders-image.webp';

const styles = {
  wrapper: {
    backgroundColor: 'var(--bg-primary)',
    padding: { xs: 2, md: 4 },
  },
  container: {
    position: 'relative',
    minHeight: { xs: '600px', md: '800px' },
    borderRadius: 2,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: { xs: 'center', md: 'flex-end' },
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center', // Show the top part of the image
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 1000%, rgba(0, 0, 0, 0.2) 100%)',
    zIndex: 1,
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    width: { xs: '100%', md: '50%' },
    padding: { xs: 3, md: 6 },
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 3, md: 4 },
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    gap: 2,
  },
  heading: {
    fontWeight: 800,
    fontSize: { xs: '1.75rem', md: '2.5rem' },
    lineHeight: 1.4,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
  divider: {
    width: '80px',
    height: '4px',
    backgroundColor: 'var(--divider-color)',
    margin: { xs: '8px auto', md: '8px 0' },
    borderRadius: '2px',
  },
  content: {
    fontSize: { xs: '0.95rem', md: '1.1rem' },
    lineHeight: 1.8,
    letterSpacing: '0.3px',
    color: '#ffffff',
    '& .MuiTypography-root': {
      marginBottom: 2,
      color: '#ffffff',
    },
  },
  signatureContainer: {
    marginTop: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    gap: 0.5,
  },
  signature: {
    fontWeight: 600,
    color: '#ffffff',
    fontSize: { xs: '1.1rem', md: '1.3rem' },
  },
  title: {
    color: '#ffffff',
    fontSize: { xs: '0.85rem', md: '0.9rem' },
    letterSpacing: 1,
  },
  companyName: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: { xs: '1rem', md: '1.1rem' },
    letterSpacing: 2,
  },
};

function FoundersNote() {
  return (
    <Paper elevation={8} sx={styles.wrapper}>
      <Box sx={styles.container}>
        {/* Background Image */}
        <Box
          component="img"
          src={MichaelImg}
          alt="Michael Harun Mugenya"
          sx={styles.backgroundImage}
        />
        
        {/* Dark Overlay for Text Readability */}
        <Box sx={styles.overlay} />

        {/* Content Overlay */}
        <Box sx={styles.contentWrapper}>
          {/* Heading Section */}
          <Box sx={styles.headingContainer}>
            <Typography variant="h2" sx={styles.heading}>
              Founder's Note
            </Typography>
            <Divider sx={styles.divider} />
          </Box>

          {/* Content Text */}
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
    </Paper>
  );
}

export default FoundersNote;
