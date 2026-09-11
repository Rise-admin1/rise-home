import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LegalPage, { LegalSection, legalStyles } from '../components/LegalPage';

const collectionRows = [
  {
    category: 'Contact details',
    examples: 'Name, email, phone number, company name',
    when: 'When you fill in a form, email us, or request a call',
  },
  {
    category: 'Engagement information',
    examples: 'Matter details, documents you share, correspondence',
    when: 'Once you become a client and we take on a piece of work',
  },
  {
    category: 'Billing information',
    examples: 'Invoicing details, payment method references',
    when: 'For paid engagements',
  },
  {
    category: 'Usage data',
    examples: 'Pages viewed, browser type, approximate location, device information',
    when: 'Automatically, whenever you visit the site',
  },
  {
    category: 'Cookies',
    examples: 'Session identifiers, analytics identifiers',
    when: 'Through your browser, as described below',
  },
];

const cell = {
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  lineHeight: 1.6,
  color: 'var(--text-tertiary)',
  borderColor: 'var(--border-color)',
  verticalAlign: 'top',
};

const headerCell = {
  ...cell,
  fontWeight: 700,
  color: 'var(--text-primary)',
  backgroundColor: 'var(--bg-secondary)',
};

const card = {
  padding: 2,
  border: '1px solid var(--border-color)',
  borderRadius: 2,
  backgroundColor: 'var(--bg-card)',
};

function CollectionTable() {
  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          display: { xs: 'none', md: 'block' },
          marginBottom: 2,
          border: '1px solid var(--border-color)',
          boxShadow: 'none',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={headerCell}>Category</TableCell>
              <TableCell sx={headerCell}>Examples</TableCell>
              <TableCell sx={headerCell}>When</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collectionRows.map((row) => (
              <TableRow key={row.category}>
                <TableCell sx={{ ...cell, fontWeight: 600, color: 'var(--text-primary)' }}>
                  {row.category}
                </TableCell>
                <TableCell sx={cell}>{row.examples}</TableCell>
                <TableCell sx={cell}>{row.when}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          gap: 2,
          marginBottom: 2,
        }}
      >
        {collectionRows.map((row) => (
          <Box key={row.category} sx={card}>
            <Typography sx={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 1 }}>
              {row.category}
            </Typography>
            <Typography sx={{ ...legalStyles.body, marginBottom: 0.5 }}>
              {row.examples}
            </Typography>
            <Typography sx={{ ...legalStyles.body, marginBottom: 0, color: 'var(--text-muted)' }}>
              {row.when}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="A plain account of what we collect when you visit or work with us, why we collect it, and what say you have over it."
      updated="11 September 2026"
    >
      <LegalSection number="01" title="Who is responsible for your data">
        <Typography sx={legalStyles.body}>
          This policy covers rightintellectual.com and any personal information you share
          with us when you get in touch, request a proposal, or engage us for advisory work.
          The entity responsible for that information is RISE Ltd, trading as Right Intellectual,
          registered in the Dubai International Financial Centre, United Arab Emirates. We handle
          personal data in line with the DIFC Data Protection Law, DIFC Law No. 5 of 2020, and
          its regulations.
        </Typography>
      </LegalSection>

      <LegalSection number="02" title="What we actually collect">
        <Typography sx={legalStyles.body}>
          We try to keep this to what we genuinely need. Depending on how you interact with us,
          that can include:
        </Typography>
        <CollectionTable />
        <Typography sx={legalStyles.body}>
          We don&apos;t ask for anything beyond what&apos;s needed to respond to you, run a
          matter properly, or understand how the site is being used.
        </Typography>
      </LegalSection>

      <LegalSection number="03" title="Why we collect it">
        <Box component="ul" sx={legalStyles.list}>
          <li>
            <Box component="span" sx={legalStyles.reasonTitle}>To respond to you. </Box>
            If you contact us or ask for a proposal, we need your details to reply.
          </li>
          <li>
            <Box component="span" sx={legalStyles.reasonTitle}>To deliver an engagement. </Box>
            Advisory work on intellectual property matters requires the documents and information
            relevant to that matter.
          </li>
          <li>
            <Box component="span" sx={legalStyles.reasonTitle}>To bill correctly. </Box>
            Where we&apos;ve agreed paid work, we need enough billing information to invoice you
            accurately.
          </li>
          <li>
            <Box component="span" sx={legalStyles.reasonTitle}>To understand and improve the site. </Box>
            Usage data tells us which pages are useful and where visitors get stuck.
          </li>
          <li>
            <Box component="span" sx={legalStyles.reasonTitle}>To meet our legal obligations. </Box>
            Some records, particularly billing and engagement records, need to be kept for
            regulatory or tax reasons.
          </li>
        </Box>
      </LegalSection>

      <LegalSection number="04" title="Cookies and similar tools">
        <Typography sx={legalStyles.body}>
          The site uses a small number of cookies. Some are strictly necessary, they let the site
          function and can&apos;t be switched off. Others are analytics cookies that help us
          understand traffic patterns, page by page, in aggregate. We don&apos;t use cookies to
          build advertising profiles of visitors or to sell data to advertisers. You can control
          or clear cookies through your browser settings at any time, though doing so may affect
          how parts of the site behave.
        </Typography>
      </LegalSection>

      <LegalSection number="05" title="Who we share it with">
        <Typography sx={legalStyles.body}>
          We don&apos;t sell personal data, full stop. We do share it with a short list of parties
          who help us run the firm and the site:
        </Typography>
        <Box component="ul" sx={legalStyles.list}>
          <li>
            Cloud hosting and email providers who store or transmit data on our behalf, under
            confidentiality obligations.
          </li>
          <li>Payment processors, for handling invoicing and billing where relevant.</li>
          <li>
            Analytics providers, for aggregated, non identifying insight into site usage.
          </li>
          <li>
            Regulators, courts, or other authorities, where we&apos;re legally required to disclose
            information.
          </li>
          <li>
            Professional partners you&apos;ve explicitly asked us to coordinate with on your matter.
          </li>
        </Box>
        <Typography sx={legalStyles.body}>
          Anyone we share data with is bound to protect it and use it only for the purpose we&apos;ve
          engaged them for.
        </Typography>
      </LegalSection>

      <LegalSection number="06" title="Where your data is stored">
        <Typography sx={legalStyles.body}>
          Our service providers may store or process data outside the DIFC or the United Arab
          Emirates. Where that happens, we take reasonable steps to make sure the provider offers
          a comparable standard of protection, whether through contractual safeguards or their own
          recognized certifications.
        </Typography>
      </LegalSection>

      <LegalSection number="07" title="How long we keep it">
        <Typography sx={legalStyles.body}>
          General enquiry details are kept only as long as needed to respond to you, typically no
          more than a couple of years if nothing further develops. Engagement and billing records
          are kept for as long as required under applicable regulatory and tax rules, which is
          often several years after a matter closes. When there&apos;s no remaining legal or
          business reason to keep something, we delete it.
        </Typography>
      </LegalSection>

      <LegalSection number="08" title="Keeping it secure">
        <Typography sx={legalStyles.body}>
          We restrict access to personal data to the people who actually need it to do their work,
          use encryption for data in transit, and rely on reputable providers for hosting and
          storage. No system is perfectly secure, and if something ever goes wrong in a way that
          affects you, we&apos;ll tell you directly and promptly rather than let you find out some
          other way.
        </Typography>
      </LegalSection>

      <LegalSection number="09" title="Your rights">
        <Typography sx={legalStyles.body}>
          Under the DIFC Data Protection Law, you can ask us to:
        </Typography>
        <Box component="ul" sx={legalStyles.list}>
          <li>Confirm what personal data we hold about you and give you a copy of it.</li>
          <li>Correct anything that&apos;s inaccurate or out of date.</li>
          <li>Delete data we no longer have a valid reason to keep.</li>
          <li>Restrict or object to certain uses of your data.</li>
          <li>Provide your data in a portable format, where that&apos;s technically feasible.</li>
        </Box>
        <Typography sx={legalStyles.body}>
          To exercise any of these, just email us using the contact details below. We&apos;ll
          respond within the timeframe the law requires, and if we can&apos;t action a request for
          a specific reason, we&apos;ll explain why rather than simply decline.
        </Typography>
      </LegalSection>

      <LegalSection number="10" title="Children">
        <Typography sx={legalStyles.body}>
          Our services are aimed at businesses and professionals, not children. We don&apos;t
          knowingly collect personal data from anyone under 18, and if we become aware that we
          have, we&apos;ll delete it.
        </Typography>
      </LegalSection>

      <LegalSection number="11" title="Changes to this policy">
        <Typography sx={legalStyles.body}>
          We may update this policy from time to time, most often to reflect a new tool we&apos;re
          using or a change in the law. The date at the top of this page always reflects the latest
          version, and for anything significant, we&apos;ll flag the change rather than let it pass
          quietly.
        </Typography>
      </LegalSection>

      <LegalSection number="12" title="Contact us">
        <Typography sx={legalStyles.body}>
          If you have a question about this policy or want to exercise any of your rights, reach us
          through the contact details published on rightintellectual.com. We handle privacy
          questions personally, not through an automated queue.
        </Typography>
      </LegalSection>
    </LegalPage>
  );
}

export default PrivacyPolicy;
