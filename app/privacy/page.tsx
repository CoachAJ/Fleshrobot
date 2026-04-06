export const metadata = {
  title: 'The Flesh Robot | Privacy Policy',
  description: 'Privacy Policy for The Flesh Robot website.',
};

export default function PrivacyPage() {
  return (
    <section style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-tag" style={{ marginBottom: '1rem' }}>Legal</div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '0.9rem' }}>
          Last updated: January 1, 2026
        </p>

        {[
          {
            title: '1. Introduction',
            body: 'The Flesh Robot ("we," "us," or "our") operates thefleshrobot.com (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or submit a health evaluation. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.',
          },
          {
            title: '2. Information We Collect',
            body: 'We may collect personal information that you voluntarily provide when you: complete the Health Evaluation form (name, email, phone number, age, weight, health symptoms, medications, diet information); contact us via email or phone; schedule a consultation through Calendly. We do not collect payment information directly — all purchases are handled through Youngevity\'s secure platform.',
          },
          {
            title: '3. How We Use Your Information',
            body: 'We use the information we collect to: respond to your health evaluation and provide personalized nutritional coaching guidance; contact you to schedule consultations; send follow-up educational content about nutritional health (with your consent); improve our website and services. We will never sell your personal information to third parties.',
          },
          {
            title: '4. Disclosure of Your Information',
            body: 'We may share your information in limited circumstances: with service providers who assist in operating our website (e.g., email platforms, scheduling services like Calendly); if required by law or to protect our legal rights; in connection with a business transfer or merger. All third-party service providers are contractually required to protect your information.',
          },
          {
            title: '5. Cookies and Tracking',
            body: 'Our Site may use cookies and similar tracking technologies to improve your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of the Site may not function properly.',
          },
          {
            title: '6. Third-Party Links',
            body: 'Our Site contains links to third-party websites, including Youngevity.com and Calendly.com. We are not responsible for the privacy practices of these sites and encourage you to read their respective privacy policies.',
          },
          {
            title: '7. Security of Your Information',
            body: 'We use reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.',
          },
          {
            title: '8. Children\'s Privacy',
            body: 'Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.',
          },
          {
            title: '9. Your Rights',
            body: 'You have the right to: access the personal information we hold about you; request correction of inaccurate data; request deletion of your data; opt out of marketing communications at any time. To exercise these rights, contact us at coachedwinoptimalhealth@gmail.com.',
          },
          {
            title: '10. Changes to This Policy',
            body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. Continued use of the Site after changes constitutes acceptance of the revised policy.',
          },
          {
            title: '11. Contact Us',
            body: 'If you have questions about this Privacy Policy, please contact us at: coachedwinoptimalhealth@gmail.com | (312) 859-7209 | The Flesh Robot, Chicago, IL',
          },
        ].map((section) => (
          <div
            key={section.title}
            style={{
              marginBottom: '2.5rem',
              paddingBottom: '2.5rem',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--color-green)',
                marginBottom: '0.75rem',
              }}
            >
              {section.title}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              {section.body}
            </p>
          </div>
        ))}

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontStyle: 'italic' }}>
          This Privacy Policy is provided for informational purposes. For legal compliance specific
          to your jurisdiction, consult a qualified attorney.
        </p>
      </div>
    </section>
  );
}
