import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper, Divider, Fade } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GroupImg from '../assets/group.jpeg';

const styles = {
  wrapper: {
    backgroundColor: '#1a1a1a',
    padding: { xs: 3, md: 6 },
  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // Row on large screens, column on small screens
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
    color: '#ffffff',
    padding: { xs: 4, md: 6 },
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    flex: 1, // Ensures text container takes up available space
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
  paragraphContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    maxWidth: '800px',
    margin: '0 auto',
  },
  paragraph: {
    fontSize: { xs: '0.8rem', md: '1.0rem' },
    textAlign: 'left',
    lineHeight: 1.8,
    color: '#d1d1d1',
    margin: '0 auto',
    letterSpacing: '0.3px',
    fontWeight: 300,
    '&:first-of-type': {
      marginTop: 2,
    },
  },
  icon: {
    color: '#d1d1d1',
    fontSize: '2rem',
    marginBottom: 2,
  },
  decorativeLine: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '2px solid rgba(255,255,255,0.05)',
    borderRadius: '50%',
    top: -100,
    right: -100,
  },
  imageContainer: {
    flex: 1, // Ensure image takes available space next to content
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: { xs: 0, md: 4 }, // Add space between image and text on larger screens
    paddingTop: { xs: 3, md: 0 },
  },
  image: {
    width: '100%',
    maxWidth: '400px', // Limit the width on larger screens
    borderRadius: '8px',
  },
};

function About() {
  return (
    <section id="about">
      <Fade in timeout={1000}>
        <Paper elevation={8} sx={styles.wrapper}>
          <Box sx={styles.container}>
            {/* Content Section */}
            <Box sx={styles.contentContainer}>
              <Box sx={styles.headingContainer}>
                <Typography variant="h2" sx={styles.heading}>
                  About Us
                </Typography>
                <Divider sx={styles.divider} />
              </Box>

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

            {/* Image Section */}
            <Box sx={styles.imageContainer}>
              <img
                src={GroupImg} // Adjust path as needed if assets is in public folder
                alt="Group of people"
                sx={styles.image}
              />
            </Box>
          </Box>
        </Paper>
      </Fade>
    </section>
  );
}

export default About;
