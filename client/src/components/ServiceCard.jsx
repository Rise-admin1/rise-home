import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Paper, Divider } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BrushIcon from '@mui/icons-material/Brush';
import CloudIcon from '@mui/icons-material/Cloud';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const styles = {
  wrapper: {
    backgroundColor: '#1a1a1a',
    padding: { xs: 2, sm: 4, md: 6 },

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: { xs: 2, sm: 4 },
    backgroundColor: '#212121',
    color: '#ffffff',
    textAlign: 'center',
    gap: 6,
    borderRadius: 2,
    position: 'relative',
    overflow: 'hidden',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    marginBottom: 2,
  },
  title: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    fontWeight: 800,
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
    borderRadius: '2px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gap: 3,
    width: '100%',
    maxWidth: '1400px',
    padding: { xs: 2, sm: 3 },
  },
  card: {
    backgroundColor: '#333333',
    borderRadius: 2,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    color: '#ffffff',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
    },
  },
  cardMedia: {
    width: 450, // Set a fixed width
    height: 300, // Set a fixed height, same as width
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto', // Center horizontally
    display: 'flex', // Enable flexbox centering
    justifyContent: 'center', // Center image horizontally
    alignItems: 'center', // Center image vertically
    '& img': {
      objectFit: 'contain', // Ensures the image covers the circle without distorting
      width: '100%', // Ensure the image takes up the full width of the container
      height: '100%', // Ensure the image takes up the full height of the container
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '40%',
      background: 'linear-gradient(to top, #333333, transparent)',
    },
  },
  
  
  cardContent: {
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: '1.4rem',
    marginBottom: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },
  cardText: {
    fontSize: '1rem',
    color: '#d1d1d1',
    lineHeight: 1.6,
    letterSpacing: '0.3px',
    textAlign:'left'
  },
  icon: {
    color: '#d1d1d1',
    fontSize: '2rem',
    marginBottom: 2,
  },
  serviceIcon: {
    color: '#d1d1d1',
    fontSize: '1.5rem',
  },
  swiperContainer: {
    width: '100%',
    padding: { xs: '20px 0', md: '40px 0' },
    position: 'relative',
    '& .swiper': {
      paddingBottom: '50px',
      overflow: 'visible',
    },
    '& .swiper-wrapper': {
      transitionTimingFunction: 'linear !important',
    },
    '& .swiper-slide': {
      height: 'auto',
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: '#d1d1d1',
      '&:after': {
        fontSize: '20px',
      },
      '&:hover': {
        color: '#ffffff',
      },
    },
    '& .swiper-pagination-bullet': {
      backgroundColor: '#d1d1d1',
      opacity: 0.5,
      '&.swiper-pagination-bullet-active': {
        backgroundColor: '#ffffff',
        opacity: 1,
      },
    },
  },
  swiperCard: {
    height: '100%',
    cursor: 'pointer',
  },
};

// Updated services data with icons
const services = [
  {
    title: 'CoachAcadem',

    image: 'https://i.postimg.cc/RVsynkV8/Whats-App-Image-2024-11-25-at-2-23-59-PM-2.jpg',
    description: `CoachAcadem revolutionizes student-tutor interaction through its innovative app, connecting learners with skilled educators in an intuitive, dynamic environment. Students can easily find tutors for various subjects, schedule sessions, and access personalized learning plans. Tutors benefit from tools that simplify lesson management and enhance communication. Designed to promote effective learning outcomes, CoachAcadem fosters collaboration and makes quality education accessible anytime, anywhere. Whether mastering a challenging topic or preparing for exams, users gain the guidance and support needed for academic success. CoachAcadem bridges the gap between education and technology for a seamless learning experience.`,
    link:'https://coachacadem.ae/'
  },
  {
    title: 'CorpInk',

    image: 'https://i.postimg.cc/NjXQQ615/Whats-App-Image-2024-11-25-at-2-56-12-PM.jpg',
    description: `Corpink is a premier branding and digital marketing agency committed to transforming businesses into standout brands. By combining creative ingenuity with data-driven strategies, Corpink helps clients build memorable brand identities, enhance online visibility, and drive measurable growth. Services include brand development, social media management, SEO optimization, content marketing, and innovative digital campaigns tailored to target audiences. Whether launching a startup or scaling an established business, Corpink delivers impactful solutions that resonate in competitive markets. With a focus on creativity and results, Corpink empowers businesses to connect, engage, and thrive in the digital landscape.`,
    link:'https://www.corpink.ae/'
  },
  {
    title: 'Dubai Analytica',

    image: 'https://i.postimg.cc/1XqzkGtc/Whats-App-Image-2024-11-25-at-2-23-59-PM.jpg',
    description: `Dubai Analytica revolutionizes data collection with its cutting-edge online survey software, designed to empower organizations with actionable insights. The platform simplifies the survey creation process, offering customizable templates, advanced analytics, and seamless integration with existing systems. Businesses, researchers, and institutions can harness Dubai Analytica’s tools to gather, analyze, and visualize data efficiently. By focusing on user-friendly interfaces and robust security, the software ensures accuracy and confidentiality in every project. Ideal for market research, customer feedback, employee engagement, or academic studies, Dubai Analytica provides the data-driven edge needed to make informed decisions and drive impactful outcomes.`,
    link:'https://www.dubaianalytica.com/'
  },
  {
    title: 'PhD Success AE',

    image: 'https://i.postimg.cc/dVQtjkd1/Whats-App-Image-2024-11-25-at-2-56-12-PM-2.jpg',
    description: `PhD Success specializes in guiding doctoral candidates through their academic journey, ensuring they achieve their research aspirations with confidence. From proposal development to thesis writing and defense preparation, the platform offers expert insights, tools, and resources tailored to the UAE's academic standards. By addressing common challenges like time management, research methodology, and publication strategies, PhD Success equips scholars to excel. The platform's personalized support empowers candidates to overcome obstacles, complete their programs efficiently, and make meaningful contributions to their fields, creating a significant impact on their academic and professional careers.`,
    link:'https://www.phdsuccess.ae/'
  },
  {
    title: 'Safari Books',

    image: 'https://i.postimg.cc/25xTWt4M/Whats-App-Image-2024-11-25-at-2-56-10-PM.jpg',
    description: `SafariBooks brings stories and knowledge to life with its extensive library of audiobooks, catering to diverse tastes and interests. From gripping fiction and timeless classics to insightful self-help and business guides, SafariBooks ensures there’s something for everyone. Ideal for busy professionals, avid learners, and casual readers, the platform allows users to enjoy immersive storytelling and educational content on the go. With top-notch narrators and user-friendly features, SafariBooks transforms time spent commuting or relaxing into enriching experiences. Explore, listen, and discover a world of knowledge and entertainment, all at your fingertips with SafariBooks.`,
    link:'https://safbooks.com/'
  },
  {
    title: 'Scientific Journals Portal',

    image: 'https://i.postimg.cc/Ss3Sfg47/logo-removebg-preview.jpg',
    description: `Scientific Journals Portal is a comprehensive platform dedicated to simplifying access to academic publications. Researchers, academics, and students can explore a vast database of peer-reviewed journals spanning diverse disciplines. The portal streamlines the research process by providing a user-friendly interface, advanced search tools, and organized categorization. This resource is invaluable for staying informed on the latest discoveries, fostering collaboration, and advancing scholarly pursuits. Whether for groundbreaking studies or detailed literature reviews, Scientific Journals Portal empowers its audience with reliable information to achieve their academic and professional goals.`,
    link:'https://www.scientificjournalsportal.com/'
  },
  {
    title: 'Velo',

    image: 'https://i.postimg.cc/5y675mgJ/Whats-App-Image-2024-11-25-at-2-38-41-PM.jpg',
    description: `Velo is a global leader in shipping and logistics, specializing in seamless transportation solutions for businesses of all sizes. With an extensive network spanning continents, Velo ensures reliable delivery across air, sea, and land, meeting the demands of modern commerce. The company offers tailored services, including freight forwarding, supply chain management, and customs clearance, designed to optimize efficiency and reduce costs. By leveraging advanced tracking systems and a commitment to sustainability, Velo provides clients with transparency, speed, and eco-friendly options. From local deliveries to international shipments, Velo empowers businesses to connect markets and drive global growth effortlessly.`,
    link:'https://velointl.com/'
  },
  {
    title: 'Right Writing Dubai (AE)',

    image: 'https://i.postimg.cc/NG5N5B0r/Whats-App-Image-2024-11-25-at-3-27-25-PM.jpg',
    description: `Write Right is your trusted partner for professional writing solutions tailored to academic, business, and creative needs. From refining essays and reports to crafting compelling content for websites and publications, the platform ensures precision, clarity, and originality in every piece. Write Right caters to students, researchers, and professionals seeking impeccable language and structure in their work. With a team of expert editors and writers, the platform delivers customized, high-quality outputs that save time and enhance credibility. Write Right simplifies the writing process, enabling clients to focus on their core objectives while achieving exceptional results.`,
    link:'https://www.writeright.ae/'
  },
 
];

function ServiceCard() {
  // Duplicate services multiple times for seamless infinite scroll
  const duplicatedServices = [...services, ...services, ...services];
  
  return (
    <Paper elevation={8} sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.titleSection}>
          <AutoAwesomeIcon sx={styles.icon} />
          <Typography variant="h2" sx={styles.title}>
            Our Brands
          </Typography>
          <Divider sx={styles.divider} />
        </Box>
        
        <Box sx={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            loopedSlides={services.length * 2}
            loopAdditionalSlides={services.length * 2}
            speed={19000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
            }}
            effect="slide"
            cssMode={false}
            allowTouchMove={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            style={{
              '--swiper-navigation-size': '24px',
            }}
          >
            {duplicatedServices.map((service, index) => (
              <SwiperSlide key={`${service.title}-${index}`}>
                <Card
                  sx={{ ...styles.card, ...styles.swiperCard }}
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <CardMedia
                    component="img"
                    alt={service.title}
                    image={service.image}
                    sx={styles.cardMedia}
                  />
                  <CardContent sx={styles.cardContent}>
                    <Typography variant="h6" sx={styles.cardTitle}>
                      {service.icon}
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.cardText}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Paper>
  );
}

export default ServiceCard;
