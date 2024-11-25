// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';

// // Styles configuration
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#212121',
//     color: '#ffffff',
//     padding: 4,
//     margin: 'auto',
//     textAlign: 'center',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
//     // Responsive adjustments
//     [theme => theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//       padding: 3,
//       textAlign: 'center',
//     },
//   },
//   imageContainer: {
//     flex: '0 0 40%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // Responsive adjustments
//     [theme => theme.breakpoints.down('sm')]: {
//       flex: '0 0 auto',
//       marginBottom: 2,
//     },
//   },
//   contentContainer: {
//     flex: '1 1 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     paddingLeft: 3,
//     paddingRight: 3,
//     // Responsive adjustments
//     [theme => theme.breakpoints.down('sm')]: {
//       paddingLeft: 0,
//       paddingRight: 0,
//     },
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
//     // Responsive adjustments
//     [theme => theme.breakpoints.down('sm')]: {
//       width: 100,
//       height: 100,
//     },
//   },
//   content: {
//     fontStyle: 'italic',
//     fontSize: '1.2rem',
//     textAlign: 'left',
//     lineHeight: 1.6,
//     marginBottom: 2,
//     // Responsive adjustments
//     [theme => theme.breakpoints.down('sm')]: {
//       fontSize: '1rem',
//     },
//   },
//   signature: {
//     marginTop: 2,
//     fontWeight: 'bold',
//     color: '#f5f5f5',
//     fontSize: '1rem',
//     // Responsive adjustments
//     [theme => theme.breakpoints.down('sm')]: {
//       fontSize: '0.9rem',
//     },
//   },
// };

// function FoundersNote() {
//   return (
//     <Box sx={styles.container}>
//       {/* Image Section */}
//       <Box sx={styles.imageContainer}>
//         <Avatar
//           alt="Founder"
//           src="https://via.placeholder.com/150" // Replace with the founder's image URL
//           sx={styles.avatar}
//         />
//       </Box>

//       {/* Content Section */}
//       <Box sx={styles.contentContainer}>
//         <Typography variant="h6" sx={styles.content}>
//           "As a Kenyan entrepreneur, my journey has been one defined by unwavering dedication, strategic foresight, and a relentless passion for innovation. After years of dedicated service, I realized that the path to creating meaningful change and impact lies not just in contributing to others’ success but in creating my own legacy—one that empowers organizations, individuals, and entire industries.
//         </Typography>
// <Typography variant="h6" sx={styles.content}>
// This vision led to the establishment of my company in Dubai, UAE—a global hub for innovation and progress. With a diverse range of verticals, we are
// driven by a shared purpose: to help businesses and individuals harness the power of information, technology, and creativity.
// At the heart of our company lies a commitment to excellence across all our sectors—content creation, research and development, data intelligence and analysis, education technology, logistics technology, and audiobooks. These verticals, while distinct, are united by our core belief that transformative ideas can come to life when combined with advanced technology and insightful research.
//         </Typography>
// <Typography variant="h6" sx={styles.content}>
// Our academic and corporate writing content creation services aim to tell stories that resonate, inspire and accelerate audience reception and appreciation. Through research and development, we focus on creating scalable solutions that push the boundaries of what’s possible in education and business. With data intelligence, we seek to collect, analyse and turn raw information into actionable insights, empowering businesses to make informed decisions. In education technology, we envision a world where learning is accessible, engaging, and personalized for all. Our work in logistics technology strives to bring efficiency and innovation to global supply chains, while our audiobooks serve as a bridge between knowledge and the listener’s ear, expanding horizons one story at a time.
//         </Typography>
// <Typography variant="h6" sx={styles.content}>
// As we move forward, our company stands as a testament to the power of vision, hard work, and strategic planning. From my roots in Kenya to the heart of Dubai, our mission remains clear: to create opportunities, drive growth, and ultimately, make a lasting impact on the world.
// Together with our dedicated team, we are excited to shape the future of technology, innovation, and education, while continuously pushing the boundaries of what’s possible."
//         </Typography>

//         <Typography variant="body2" sx={styles.signature}>
//           ~ Michael Harun Mugenya
//         </Typography>
//         <Typography variant="body2" sx={styles.signature}>
//         Founder & CEO
//         </Typography>
//         <Typography variant="body2" sx={styles.signature}>
//           ~ RISE Ltd
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default FoundersNote;



import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const styles = {
  wrapper: {
    backgroundColor: '#1a1a1a',
    padding: { xs: 2, md: 6 },

  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 6 },
    backgroundColor: '#212121',
    color: '#ffffff',
    padding: { xs: 3, md: 6 },
    margin: 'auto',
    borderRadius: 2,
    position: 'relative',
    overflow: 'hidden',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    flex: { xs: '1', md: '0 0 250px' },
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  avatar: {
    width: { xs: 120, md: 200 },
    height: { xs: 120, md: 240 },
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
        
        <Box sx={styles.imageContainer}>
          <Avatar
            alt="Michael Harun Mugenya"
            src="https://i.postimg.cc/dVJmRB4y/Whats-App-Image-2024-11-25-at-2-56-15-PM.jpg"
            sx={styles.avatar}
          />
        </Box>

        <Box sx={styles.contentContainer}>
          <Box sx={styles.content}>
            <Typography paragraph>
              "As a Kenyan entrepreneur, my journey has been one defined by unwavering dedication, strategic foresight, and a relentless passion for innovation. After years of dedicated service, I realized that the path to creating meaningful change and impact lies not just in contributing to others' success but in creating my own legacy—one that empowers organizations, individuals, and entire industries.
            </Typography>
            
            <Typography paragraph>
              This vision led to the establishment of my company in Dubai, UAE—a global hub for innovation and progress. With a diverse range of verticals, we are driven by a shared purpose: to help businesses and individuals harness the power of information, technology, and creativity.
              At the heart of our company lies a commitment to excellence across all our sectors—content creation, research and development, data intelligence and analysis, education technology, logistics technology, and audiobooks. These verticals, while distinct, are united by our core belief that transformative ideas can come to life when combined with advanced technology and insightful research.
            </Typography>
            
            <Typography paragraph>
              Our academic and corporate writing content creation services aim to tell stories that resonate, inspire and accelerate audience reception and appreciation. Through research and development, we focus on creating scalable solutions that push the boundaries of what's possible in education and business. With data intelligence, we seek to collect, analyse and turn raw information into actionable insights, empowering businesses to make informed decisions. In education technology, we envision a world where learning is accessible, engaging, and personalized for all. Our work in logistics technology strives to bring efficiency and innovation to global supply chains, while our audiobooks serve as a bridge between knowledge and the listener's ear, expanding horizons one story at a time.
            </Typography>
            
            <Typography>
              As we move forward, our company stands as a testament to the power of vision, hard work, and strategic planning. From my roots in Kenya to the heart of Dubai, our mission remains clear: to create opportunities, drive growth, and ultimately, make a lasting impact on the world.
              Together with our dedicated team, we are excited to shape the future of technology, innovation, and education, while continuously pushing the boundaries of what's possible."
            </Typography>
          </Box>

          <Box sx={styles.signatureContainer}>
            <Typography variant="h6" sx={styles.signature}>
              Michael Harun Mugenya
            </Typography>
            <Typography sx={styles.title}>
              Founder & CEO
            </Typography>
            <Typography sx={styles.companyName}>
              RISE Ltd
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default FoundersNote;
