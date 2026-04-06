export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Flesh Robot',
    url: 'https://thefleshrobot.com',
    logo: 'https://thefleshrobot.com/logo.png',
    description:
      'Certified Wholistic Health Coach Ed teaches the 90 for Life philosophy — unlocking your body\'s epigenetic potential through precision nutrition and the Mighty 90 essential nutrients.',
    founder: {
      '@type': 'Person',
      name: 'Coach Ed',
      jobTitle: 'Certified Wholistic Health Coach',
      telephone: '+13128597209',
      email: 'coachedwinoptimalhealth@gmail.com',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+13128597209',
      email: 'coachedwinoptimalhealth@gmail.com',
      contactType: 'customer support',
      availableLanguage: 'English',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Flesh Robot',
    url: 'https://thefleshrobot.com',
    description:
      'Unlock your epigenetic potential. The 90 for Life philosophy — 90 essential nutrients for optimal health and longevity.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://thefleshrobot.com/faq?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Coach Ed',
    jobTitle: 'Certified Wholistic Health Coach',
    description:
      'Certified Wholistic Health Coach specializing in Dr. Joel Wallach\'s 90 for Life philosophy, epigenetic nutrition, and the Mighty 90 essential nutrients.',
    url: 'https://thefleshrobot.com',
    telephone: '+13128597209',
    email: 'coachedwinoptimalhealth@gmail.com',
    knowsAbout: [
      'Epigenetics',
      'Wholistic Nutrition',
      'Youngevity Products',
      'The Mighty 90 Essential Nutrients',
      '90 for Life Philosophy',
      'Dr. Joel Wallach',
      'Triangle of Disease',
      'Leaky Gut',
      'Nutritional Deficiency',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Certified Wholistic Health Coach',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does my body feel like it\'s falling apart?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is called MBFA ("My Body is Falling Apart") Disease. It is caused by long-term deficiency in one or more of the 90 essential nutrients. Conventional medicine treats the "fruit" (symptoms) with medication, but never addresses the "root" — the upstream nutritional deficiency in the digestive system, blood sugar regulation, or adrenal function.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 90 essential nutrients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Mighty 90 are 90 essential nutrients the human body cannot manufacture on its own: 60 minerals, 16 vitamins, 12 amino acids, and 2-3 essential fatty acids. These are the raw materials required for optimal health. Without them, the body breaks down — borrowing from organs and bones until they are depleted, which is what we call disease or "aging."',
        },
      },
      {
        '@type': 'Question',
        name: 'What is epigenetics and how does it relate to disease?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Epigenetics is the science of gene expression. While genetics may load the gun, environment and nutrition pull the trigger. Your nutritional status determines whether disease "switches" get turned ON or OFF. By providing the body with the 90 essential nutrients, you can actively turn off disease expression at the cellular level — unlocking your body\'s genetic potential for health.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is dirty blood and why does it cause disease?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dirty blood refers to hypercoagulable, sludgy blood caused by toxins and undigested food particles leaking from a permeable gut (leaky gut) into the bloodstream. All cell disease is preceded by dirty blood. Sealing the gut mucosal barrier is the first step to restoring health.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why can\'t I get enough nutrients from food alone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'U.S. Senate Document 264 (1936) documented that North American farm soils are severely depleted of essential minerals. Plants cannot manufacture minerals — if the mineral is not in the soil, it is not in the food. Even organically grown food is mineral-deficient. This is why supplementing the 60 colloidal minerals found in the Mighty 90 is non-negotiable for human longevity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I reduce my medications with nutritional coaching?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nutrients make existing medications more effective by optimizing the body\'s internal chemistry. As the body heals using raw materials, you can work with your prescribing doctor to safely taper medications over time. This is done gradually and always in coordination with your medical care provider. Never stop medications without physician supervision.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Triangle of Disease?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Triangle of Disease is a framework from Pharmacist Ben identifying three interconnected body systems that drive all chronic illness: (1) The Digestive System — leaky gut causes dirty blood; (2) The Blood Sugar System — insulin resistance causes inflammation and glycation; (3) The Adrenal & Thyroid Complex — the regulatory hub that burns out when the first two are compromised. Fix these three systems and the body heals itself.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see results with the Mighty 90?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most people begin to see meaningful results within 90 days of following the protocol — eliminating the 10 Bad Foods and consistently taking the Mighty 90 dosed by body weight. Some see changes in 2-4 weeks depending on their current body state and how quickly they improve their diet.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
