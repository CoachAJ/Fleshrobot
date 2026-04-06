export const metadata = {
  title: 'The Flesh Robot | Terms & Conditions',
  description: 'Terms and Conditions for The Flesh Robot website.',
};

export default function TermsPage() {
  return (
    <section style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-tag" style={{ marginBottom: '1rem' }}>Legal</div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '0.9rem' }}>
          Last updated: January 1, 2026
        </p>

        {/* Disclaimer banner */}
        <div
          style={{
            background: 'rgba(212,160,23,0.08)',
            border: '1px solid rgba(212,160,23,0.25)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--color-gold)',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            ⚠ Important Disclaimer
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            The information on this website is for <strong style={{ color: 'var(--color-text)' }}>educational and nutritional coaching purposes only</strong>.
            It is not intended to diagnose, treat, cure, or prevent any disease. Nothing on this website constitutes medical advice.
            Always consult a licensed healthcare provider before making changes to your diet, supplements, or medications.
          </p>
        </div>

        {[
          {
            title: '1. Acceptance of Terms',
            body: 'By accessing and using thefleshrobot.com (the "Site"), you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use the Site.',
          },
          {
            title: '2. Nature of Services',
            body: 'The Flesh Robot and Coach Ed provide wholistic nutritional coaching and educational content based on Dr. Joel Wallach\'s 90 for Life philosophy. Our services constitute nutritional lifestyle coaching — not the practice of medicine, psychiatry, psychology, or any other licensed health profession. Coach Ed is a Certified Wholistic Health Coach, not a licensed medical doctor, pharmacist, or dietitian.',
          },
          {
            title: '3. No Medical Advice',
            body: 'Nothing on this Site, in any consultation, health evaluation, or communication from Coach Ed constitutes medical advice, diagnosis, or treatment. Nutritional coaching is complementary to — not a replacement for — professional medical care. Never disregard professional medical advice or delay seeking it because of something you have read on this Site. Always work with your prescribing physician before tapering or discontinuing any medication.',
          },
          {
            title: '4. Nutritional Supplement Statements',
            body: 'Statements about nutritional products on this Site have not been evaluated by the Food and Drug Administration (FDA). Youngevity products featured on this Site are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary and are not guaranteed. References to "900+ disease states" addressed by nutrition are based on Dr. Wallach\'s published research and educational materials and represent potential nutritional support, not medical claims.',
          },
          {
            title: '5. Epigenetics & Genetic Language',
            body: 'References on this Site to "unlocking genetic potential," "turning off disease switches," or "epigenetic expression" are based on the science of epigenetics as described by Dr. Joel Wallach and Dr. Ma Lan. These statements are educational in nature and refer to how nutritional status may influence gene expression as documented in peer-reviewed epigenetics research. They do not constitute claims to cure genetic conditions.',
          },
          {
            title: '6. Affiliate & Product Relationships',
            body: 'Coach Ed is an authorized distributor of Youngevity products. Links to Youngevity.com may result in commissions or compensation. This does not affect the integrity of the nutritional information provided. All product recommendations are made based on Coach Ed\'s professional assessment of your health needs.',
          },
          {
            title: '7. Intellectual Property',
            body: 'All content on this Site — including text, graphics, images, and design — is the property of The Flesh Robot or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.',
          },
          {
            title: '8. User Conduct',
            body: 'You agree not to use this Site for any unlawful purpose; to transmit any unsolicited or unauthorized advertising; to impersonate any person or entity; or to interfere with or disrupt the integrity of the Site.',
          },
          {
            title: '9. Limitation of Liability',
            body: 'To the fullest extent permitted by law, The Flesh Robot and Coach Ed shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services. Our total liability to you for any claims arising under these Terms shall not exceed the amount you paid for coaching services in the 12 months preceding the claim.',
          },
          {
            title: '10. Indemnification',
            body: 'You agree to indemnify and hold harmless The Flesh Robot, Coach Ed, and their respective affiliates from any claims, damages, losses, and expenses (including legal fees) arising from your use of the Site, your violation of these Terms, or your violation of any third-party rights.',
          },
          {
            title: '11. Governing Law',
            body: 'These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Cook County, Illinois.',
          },
          {
            title: '12. Changes to Terms',
            body: 'We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting. Continued use of the Site after any changes constitutes your acceptance of the revised Terms.',
          },
          {
            title: '13. Contact',
            body: 'For questions about these Terms, contact us at: coachedwinoptimalhealth@gmail.com | (312) 859-7209',
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
          These Terms &amp; Conditions were prepared for general informational purposes. For legal advice
          specific to your situation, consult a qualified attorney licensed in your jurisdiction.
        </p>
      </div>
    </section>
  );
}
