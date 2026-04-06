export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'FleetJustice',
  description: 'Professional commercial trucking insurance and legal recovery services',
  url: 'https://fleetjustice.com',
  logo: 'https://fleetjustice.com/logo.png',
  telephone: '1-800-FLEET-LAW',
  email: 'info@fleetjustice.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  serviceType: [
    'Commercial Trucking Insurance',
    'Hazmat Liability Insurance',
    '18-Wheeler Accident Legal Services',
    'Cargo Insurance',
    'Fleet Insurance'
  ]
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum insurance required for commercial trucking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FMCSA requires a minimum of $750,000 liability coverage for general freight and $1,000,000 for hazmat transportation. FleetJustice can help you meet these requirements with competitive quotes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can I get insurance for new authority?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most new authority insurance applications are approved within 48-72 hours. In urgent situations, FleetJustice can often provide same-day coverage with expedited FMCSA filing.'
      }
    },
    {
      '@type': 'Question',
      name: 'What should I do immediately after an 18-wheeler accident?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ensure safety first, call emergency services, document the scene, exchange information, and contact FleetJustice immediately at 1-800-FLEET-LAW for 24/7 legal support.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need special insurance for hazmat transportation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, hazmat transportation requires specialized liability coverage that meets DOT and EPA requirements. FleetJustice specializes in hazmat insurance with comprehensive protection and compliance support.'
      }
    }
  ]
};
