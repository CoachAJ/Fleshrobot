import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Order Confirmed | The Flesh Robot',
  description: 'Your Youngevity order has been placed. Thank you for investing in your health.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem',
        background: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          maxWidth: '580px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Icon */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '50%',
            marginBottom: '1.75rem',
          }}
        >
          <CheckCircle size={40} style={{ color: 'var(--color-green)' }} />
        </div>

        {/* Heading */}
        <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
          Order Confirmed
        </div>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            color: 'var(--color-text)',
            marginBottom: '1.25rem',
            lineHeight: 1.05,
          }}
        >
          Your Order Is{' '}
          <span className="green-text">On Its Way</span>
        </h1>

        {/* Body */}
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '1rem',
            lineHeight: 1.75,
            marginBottom: '1rem',
          }}
        >
          Thank you for investing in your health. Your Youngevity order has been placed
          and will ship directly to your door. You should receive a confirmation email
          from Youngevity shortly.
        </p>
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Questions about your order? Call Youngevity at{' '}
          <a
            href="tel:18007827107"
            style={{ color: 'var(--color-green)', textDecoration: 'none', fontWeight: 600 }}
          >
            1-800-982-3197
          </a>{' '}
          or reach out to Coach Ed directly.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/protocols" className="btn-primary">
            View Your Protocols
            <ArrowRight size={16} />
          </Link>
          <Link href="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
