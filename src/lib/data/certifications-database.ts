// ============================================================================
// PSEO ENGINE - CERTIFICATIONS DATABASE
// Data for /certified/[certification]/[service] pages
// 10x SEO Expansion - Strategy 6
// ============================================================================

export interface Certification {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  issuingBody: string;
  requirements: string[];
  benefits: string[];
  relevantServices: string[];
  trustIndicators: string[];
  verificationUrl?: string;
}

export const certifications: Certification[] = [
  {
    slug: 'gas-safe',
    name: 'Gas Safe Registered',
    fullName: 'Gas Safe Register Certification',
    description: 'The only official gas registration body for the United Kingdom, legally required for all gas work.',
    issuingBody: 'Gas Safe Register',
    requirements: [
      'ACS (Accredited Certification Scheme) qualifications',
      'Annual competence assessment',
      'Criminal background check',
      'Professional indemnity insurance',
      'Ongoing training updates',
    ],
    benefits: [
      'Legally compliant gas work',
      'Safety-certified installations',
      'Insurance-recognized work',
      'Proper certification provided',
      'Emergency support access',
    ],
    relevantServices: ['boiler-installation', 'gas-repairs', 'heating-systems', 'gas-safety-certificates'],
    trustIndicators: [
      'Unique Gas Safe ID number',
      'Photo ID card verification',
      'Online register check',
      'Work notification system',
    ],
    verificationUrl: 'https://www.gassaferegister.co.uk',
  },
  {
    slug: 'niceic',
    name: 'NICEIC Approved',
    fullName: 'NICEIC Approved Contractor',
    description: 'The UK\'s leading electrical safety regulatory body, ensuring the highest standards of electrical work.',
    issuingBody: 'NICEIC',
    requirements: [
      'Qualified electricians (Level 3 minimum)',
      'Principal Duty Holder designation',
      'Regular technical assessments',
      'Public liability insurance (minimum £2m)',
      'Complaints procedure compliance',
    ],
    benefits: [
      'Part P Building Regulations compliance',
      'Self-certification ability',
      'Platinum Promise guarantee',
      'Free resolution service',
      'Work quality assurance',
    ],
    relevantServices: ['electrical-rewire', 'consumer-unit-upgrade', 'lighting-installation', 'ev-charger-installation'],
    trustIndicators: [
      'NICEIC registration number',
      'Annual assessment passed',
      'Platinum Promise coverage',
      'Online verification available',
    ],
    verificationUrl: 'https://www.niceic.com',
  },
  {
    slug: 'checkatrade',
    name: 'Checkatrade Verified',
    fullName: 'Checkatrade Verified Member',
    description: 'The UK\'s leading trade verification service with genuine customer reviews and vetting.',
    issuingBody: 'Checkatrade',
    requirements: [
      'Identity verification',
      'Address verification',
      'Insurance documentation',
      'Qualification verification',
      'Reference checks',
    ],
    benefits: [
      'Verified genuine reviews',
      'Background-checked tradespeople',
      'Insurance confirmed',
      'Qualifications validated',
      'Customer protection',
    ],
    relevantServices: ['all-renovation-services', 'building-work', 'plumbing', 'electrical', 'carpentry'],
    trustIndicators: [
      'Checkatrade member ID',
      'Average rating displayed',
      'Review count visible',
      'Vetting date shown',
    ],
    verificationUrl: 'https://www.checkatrade.com',
  },
  {
    slug: 'trustmark',
    name: 'TrustMark Registered',
    fullName: 'TrustMark Government Endorsed Quality',
    description: 'The only Government Endorsed Quality scheme for home improvement and energy efficiency.',
    issuingBody: 'TrustMark',
    requirements: [
      'Technical competence assessment',
      'Financial checks',
      'Insurance requirements',
      'Customer care commitment',
      'Code of conduct agreement',
    ],
    benefits: [
      'Government endorsement',
      'Access to ECO funding',
      'Green Deal approved',
      'Dispute resolution service',
      'Consumer protection',
    ],
    relevantServices: ['insulation', 'energy-efficiency', 'heating-upgrades', 'renewable-energy', 'home-improvements'],
    trustIndicators: [
      'TrustMark licence number',
      'Government-backed scheme',
      'Annual renewal required',
      'Verified member status',
    ],
    verificationUrl: 'https://www.trustmark.org.uk',
  },
  {
    slug: 'fmb',
    name: 'FMB Member',
    fullName: 'Federation of Master Builders Member',
    description: 'The UK\'s largest trade association for builders and construction companies.',
    issuingBody: 'Federation of Master Builders',
    requirements: [
      'Minimum 12 months trading',
      'Financial references',
      'Customer references',
      'Site inspection passed',
      'Insurance verification',
    ],
    benefits: [
      'Master Builder warranty',
      'Free dispute resolution',
      'Insurance-backed guarantees',
      'Vetted membership',
      'Industry recognition',
    ],
    relevantServices: ['extensions', 'new-builds', 'renovations', 'structural-work', 'conversions'],
    trustIndicators: [
      'FMB membership number',
      'Master Builder certificate',
      'Warranty availability',
      'Complaints process access',
    ],
    verificationUrl: 'https://www.fmb.org.uk',
  },
  {
    slug: 'which-trusted',
    name: 'Which? Trusted Trader',
    fullName: 'Which? Trusted Traders Endorsed',
    description: 'Consumer champion Which? endorsement through rigorous assessment and customer feedback.',
    issuingBody: 'Which?',
    requirements: [
      'Trading standards assessment',
      'Credit check completion',
      'Customer satisfaction monitoring',
      'Code of conduct compliance',
      'Ongoing quality checks',
    ],
    benefits: [
      'Which? reputation backing',
      'Consumer trust',
      'Trading standards endorsement',
      'Alternative dispute resolution',
      'Quality commitment',
    ],
    relevantServices: ['all-home-services', 'major-renovations', 'kitchen-fitting', 'bathroom-fitting', 'building-work'],
    trustIndicators: [
      'Which? endorsement badge',
      'Trading standards checked',
      'Customer review average',
      'Endorsement date',
    ],
    verificationUrl: 'https://trustedtraders.which.co.uk',
  },
  {
    slug: 'chas',
    name: 'CHAS Accredited',
    fullName: 'Contractors Health & Safety Assessment Scheme',
    description: 'UK\'s leading health and safety pre-qualification scheme for contractors.',
    issuingBody: 'CHAS',
    requirements: [
      'Health and safety policy',
      'Risk assessment procedures',
      'Training records',
      'Accident reporting system',
      'Environmental policy',
    ],
    benefits: [
      'H&S pre-qualification',
      'Risk management verified',
      'Professional credibility',
      'Public sector compliance',
      'Insurance validation',
    ],
    relevantServices: ['commercial-projects', 'large-renovations', 'construction', 'industrial-work', 'public-contracts'],
    trustIndicators: [
      'CHAS certificate',
      'Annual renewal date',
      'Accreditation level',
      'Verification available',
    ],
    verificationUrl: 'https://www.chas.co.uk',
  },
  {
    slug: 'oftec',
    name: 'OFTEC Registered',
    fullName: 'Oil Firing Technical Association Registration',
    description: 'The registration body for technicians working with oil heating systems.',
    issuingBody: 'OFTEC',
    requirements: [
      'Oil heating qualifications',
      'Technical competence assessment',
      'Insurance requirements',
      'Equipment standards',
      'Ongoing CPD',
    ],
    benefits: [
      'Oil heating expertise',
      'Building control notification',
      'Self-certification ability',
      'Manufacturer partnerships',
      'Technical support',
    ],
    relevantServices: ['oil-boiler-installation', 'oil-tank-installation', 'oil-heating-service', 'oil-to-alternative'],
    trustIndicators: [
      'OFTEC registration number',
      'Technician ID card',
      'Online verification',
      'Competence levels',
    ],
    verificationUrl: 'https://www.oftec.org',
  },
];

// Service mapping for certification pages
export const certificationServices: { slug: string; name: string }[] = [
  { slug: 'boiler-installation', name: 'Boiler Installation' },
  { slug: 'gas-repairs', name: 'Gas Repairs' },
  { slug: 'electrical-rewire', name: 'Electrical Rewire' },
  { slug: 'heating-systems', name: 'Heating Systems' },
  { slug: 'plumbing', name: 'Plumbing Services' },
  { slug: 'extensions', name: 'House Extensions' },
  { slug: 'renovations', name: 'Full Renovations' },
  { slug: 'kitchen-fitting', name: 'Kitchen Fitting' },
  { slug: 'bathroom-fitting', name: 'Bathroom Fitting' },
  { slug: 'loft-conversion', name: 'Loft Conversion' },
];

// Helper functions
export function getCertification(slug: string): Certification | undefined {
  return certifications.find(c => c.slug === slug);
}

export function getCertificationService(slug: string): { slug: string; name: string } | undefined {
  return certificationServices.find(s => s.slug === slug);
}

export function generateCertificationParams(): { certification: string; service: string }[] {
  const params: { certification: string; service: string }[] = [];
  
  for (const cert of certifications) {
    for (const service of certificationServices) {
      params.push({
        certification: cert.slug,
        service: service.slug,
      });
    }
  }
  
  return params;
}

export function countCertificationPages(): number {
  return certifications.length * certificationServices.length;
}
