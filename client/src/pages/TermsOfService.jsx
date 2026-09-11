import Typography from '@mui/material/Typography';
import LegalPage, { LegalSection, legalStyles } from '../components/LegalPage';

function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="These terms explain what you can expect from us, what we expect from you, and how any engagement between us actually works."
      updated="11 September 2026"
    >
      <LegalSection number="01" title="Who this agreement is between">
        <Typography sx={legalStyles.body}>
          These terms are between you, whether you&apos;re browsing our site or engaged us for
          advisory work, and RISE Ltd, trading as Right Intellectual, a company registered in the
          Dubai International Financial Centre, United Arab Emirates. Wherever you see &quot;we,&quot;
          &quot;us,&quot; or &quot;the firm,&quot; that&apos;s who we mean. Wherever you see
          &quot;you,&quot; we mean anyone using rightintellectual.com or working with us on a matter.
        </Typography>
        <Typography sx={legalStyles.body}>
          By visiting the site or asking us to take on a piece of work, you&apos;re agreeing to
          what&apos;s written here. If something in here doesn&apos;t sit right with you, tell us
          before you engage us. We&apos;d rather sort it out in conversation than in fine print.
        </Typography>
      </LegalSection>

      <LegalSection number="02" title="What we do">
        <Typography sx={legalStyles.body}>
          Right Intellectual provides consulting and advisory services related to intellectual
          property strategy, protection, and commercial use. That might mean guidance on a
          portfolio, support during a dispute, advice ahead of a transaction, or ongoing counsel
          as your work evolves. The specifics of any engagement, including scope, deliverables,
          timeline, and fees, are set out separately in a proposal, statement of work, or signed
          agreement between us. These general terms sit alongside that document and don&apos;t
          replace it. Where the two disagree, the signed agreement wins.
        </Typography>
      </LegalSection>

      <LegalSection number="03" title="Using the website">
        <Typography sx={legalStyles.body}>
          You&apos;re welcome to browse the site, read what we publish, and get in touch. In
          return, we ask that you don&apos;t try to break it, scrape it at scale, misrepresent who
          you are when contacting us, or use anything on the site to build a competing service.
          Nothing on the site should be treated as legal advice specific to your situation. General
          commentary and published material are exactly that, general, and they&apos;re no
          substitute for a proper conversation about your circumstances.
        </Typography>
      </LegalSection>

      <LegalSection number="04" title="Intellectual property in our content">
        <Typography sx={legalStyles.body}>
          Everything published on rightintellectual.com, the writing, the layout, the firm&apos;s
          name and marks, belongs to us or to whoever we&apos;ve licensed it from. You can read it,
          share a link to it, and quote a short passage with credit. What you can&apos;t do is
          republish it wholesale, pass it off as your own, or use our name or marks to suggest an
          endorsement that doesn&apos;t exist.
        </Typography>
        <Typography sx={legalStyles.body}>
          Anything you send us in the course of an engagement, and anything we produce specifically
          for you under a signed agreement, is governed by the ownership terms in that agreement,
          not by this clause.
        </Typography>
      </LegalSection>

      <LegalSection number="05" title="Fees and payment">
        <Typography sx={legalStyles.body}>
          Where we&apos;ve agreed to take on paid work, the fee structure, invoicing schedule, and
          payment terms will be set out in the relevant proposal or agreement. Unless we&apos;ve
          agreed otherwise in writing, invoices are due within thirty days of the date issued, and
          we reserve the right to pause work on a matter if payment falls significantly behind
          schedule. We&apos;ll always tell you before that happens rather than let it come as a
          surprise.
        </Typography>
      </LegalSection>

      <LegalSection number="06" title="Confidentiality">
        <Typography sx={legalStyles.body}>
          Intellectual property work often means handling sensitive material, unpublished
          inventions, commercial strategy, draft filings, things that matter to your business
          staying yours. We treat anything you share with us as confidential, and we expect the
          same courtesy in reverse regarding any non public methods, templates, or advice we share
          with you. Where an engagement calls for something more formal, we&apos;re happy to sign a
          dedicated confidentiality agreement alongside these terms.
        </Typography>
      </LegalSection>

      <LegalSection number="07" title="No guarantee of outcome">
        <Typography sx={legalStyles.body}>
          We bring judgment, experience, and care to every matter we take on, but intellectual
          property outcomes, whether that&apos;s a registration, a negotiation, or a dispute, depend
          on facts, timing, and decisions outside our control, including those made by courts,
          registries, and other parties. We don&apos;t promise a particular result, and nothing in
          our advice should be read as a guarantee of one. What we do promise is that we&apos;ll
          tell you plainly what we think your chances are and why.
        </Typography>
      </LegalSection>

      <LegalSection number="08" title="Limits on our liability">
        <Typography sx={legalStyles.body}>
          To the extent permitted under DIFC law, our liability to you arising out of an engagement
          is limited to the fees paid to us for the specific matter giving rise to the claim, except
          where liability cannot lawfully be limited, such as in cases of fraud or willful
          misconduct. We&apos;re not liable for indirect or consequential losses, including lost
          profits or lost opportunities, unless we&apos;ve specifically agreed otherwise in writing
          for a particular engagement.
        </Typography>
      </LegalSection>

      <LegalSection number="09" title="Ending an engagement">
        <Typography sx={legalStyles.body}>
          Either of us can end an engagement in the way described in the relevant signed agreement,
          typically with reasonable written notice. If no such term was agreed, either party may
          end the relationship with thirty days&apos; written notice. You remain responsible for
          fees earned for work completed up to the point the engagement ends.
        </Typography>
      </LegalSection>

      <LegalSection number="10" title="Governing law and disputes">
        <Typography sx={legalStyles.body}>
          These terms, and any dispute arising from them or from an engagement with us, are
          governed by the laws applicable in the Dubai International Financial Centre. Any dispute
          that can&apos;t be resolved through direct conversation will be subject to the exclusive
          jurisdiction of the DIFC Courts.
        </Typography>
      </LegalSection>

      <LegalSection number="11" title="Changes to these terms">
        <Typography sx={legalStyles.body}>
          We may update these terms occasionally to reflect how we work or changes in the law. When
          we do, we&apos;ll update the date at the top of this page. If a change materially affects
          an active engagement, we&apos;ll let you know directly rather than leave you to find it
          here.
        </Typography>
      </LegalSection>

      <LegalSection number="12" title="Get in touch">
        <Typography sx={legalStyles.body}>
          Questions about any of this are genuinely welcome. Reach us through the contact details
          published on rightintellectual.com, and we&apos;ll get back to you personally rather than
          through a form letter.
        </Typography>
      </LegalSection>
    </LegalPage>
  );
}

export default TermsOfService;
