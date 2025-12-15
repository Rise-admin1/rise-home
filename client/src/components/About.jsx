import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper, Divider, Fade } from '@mui/material';
import GroupImg from '../assets/group.jpeg';

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
  paragraphContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  paragraph: {
    fontSize: { xs: '0.95rem', md: '1.1rem' },
    textAlign: { xs: 'center', md: 'left' },
    lineHeight: 1.8,
    color: '#ffffff',
    letterSpacing: '0.3px',
    '& .MuiTypography-root': {
      color: '#ffffff',
    },
  },
};

function About() {
  return (
    <section id="about">
      <Fade in timeout={1000}>
        <Paper elevation={8} sx={styles.wrapper}>
          <Box sx={styles.container}>
            {/* Background Image */}
            <Box
              component="img"
              src={GroupImg}
              alt="Group of people"
              sx={styles.backgroundImage}
            />
            
            {/* Dark Overlay for Text Readability */}
            <Box sx={styles.overlay} />

            {/* Content Overlay */}
            <Box sx={styles.contentWrapper}>
              {/* Heading Section */}
              <Box sx={styles.headingContainer}>
                <Typography variant="h2" sx={styles.heading}>
                  About Us
                </Typography>
                <Divider sx={styles.divider} />
              </Box>

              {/* Content Text */}
              <Box sx={styles.paragraphContainer}>
                <Typography variant="body1" sx={styles.paragraph}>
                  Right Intellectual Services Enterprise (RISE) Portal Ltd. is a
                  knowledge sharing and management company serving as a portal to
                  a myriad of demand-driven services. The company conducts
                  intertwined operations at the intersections of Academic Research,
                  Corporate Writing and Branding (Copywriting), Data Intelligence,
                  Media, IT and Web Content Development as well as Education, Research
                  Publishing, Logistics and Audiobooks Innovation.
                </Typography>

                <Typography variant="body1" sx={styles.paragraph}>
                  The Company's mission is to 'enhance accessibility to data-centric
                  branding and knowledge sharing and management solutions for all'. The
                  vision is 'to be a one-stop shop and conduit for all knowledge sharing
                  and management needs for companies and individuals of all sizes and
                  stature'.
                </Typography>

                <Typography variant="body1" sx={styles.paragraph}>
                  The Company boasts of a team of energized and motivated upstarts who are
                  committed to deploying their skills to improve themselves while building
                  a legacy.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </section>
  );
}

export default About;
