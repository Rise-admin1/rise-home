import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const legalStyles = {
  page: {
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    padding: { xs: 3, md: 6 },
    paddingBottom: { xs: 6, md: 10 },
  },
  inner: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  eyebrow: {
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#f50057',
    marginBottom: 1,
  },
  title: {
    fontWeight: 800,
    fontSize: { xs: '1.75rem', md: '2.5rem' },
    lineHeight: 1.2,
    letterSpacing: '0.02em',
    color: 'var(--text-primary)',
    marginBottom: 1.5,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.15rem' },
    lineHeight: 1.7,
    color: 'var(--text-tertiary)',
    marginBottom: 2,
  },
  updated: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginBottom: 3,
  },
  divider: {
    width: '80px',
    height: '4px',
    backgroundColor: '#f50057',
    marginBottom: 5,
    borderRadius: '2px',
  },
  section: {
    marginBottom: 5,
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 1.5,
    fontWeight: 700,
    fontSize: { xs: '1.15rem', md: '1.35rem' },
    color: 'var(--text-primary)',
    marginBottom: 1.5,
  },
  sectionNumber: {
    color: '#f50057',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    flexShrink: 0,
  },
  body: {
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    lineHeight: 1.8,
    color: 'var(--text-tertiary)',
    marginBottom: 1.5,
  },
  list: {
    margin: 0,
    paddingLeft: '1.25rem',
    '& li': {
      fontSize: { xs: '0.95rem', md: '1.05rem' },
      lineHeight: 1.8,
      color: 'var(--text-tertiary)',
      marginBottom: 1,
    },
  },
  reasonTitle: {
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
  closing: {
    fontSize: '0.9rem',
    lineHeight: 1.7,
    color: 'var(--text-muted)',
    fontStyle: 'italic',
    marginTop: 4,
  },
};

export function LegalSection({ number, title, children }) {
  return (
    <Box component="section" sx={legalStyles.section}>
      <Typography component="h2" sx={legalStyles.sectionTitle}>
        <Box component="span" sx={legalStyles.sectionNumber}>{number}</Box>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function LegalPage({ title, subtitle, updated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box component="article" sx={legalStyles.page}>
      <Box sx={legalStyles.inner}>
        <Typography sx={legalStyles.eyebrow}>Right Intellectual</Typography>
        <Typography component="h1" sx={legalStyles.title}>{title}</Typography>
        <Typography sx={legalStyles.subtitle}>{subtitle}</Typography>
        <Typography sx={legalStyles.updated}>Last updated: {updated}</Typography>
        <Divider sx={legalStyles.divider} />
        {children}
        <Typography sx={legalStyles.closing}>
          RISE Ltd, trading as Right Intellectual. Registered in the Dubai International
          Financial Centre, United Arab Emirates.
        </Typography>
      </Box>
    </Box>
  );
}

export default LegalPage;
