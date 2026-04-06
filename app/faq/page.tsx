import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardList } from 'lucide-react';
import { FAQSchema, BreadcrumbSchema } from '@/components/JsonLd';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ & Ask the Coach',
  description:
    'Direct answers about nutrient deficiency, the Triangle of Disease, dirty blood, epigenetics, and how to start healing — from Certified Wholistic Health Coach Ed.',
  alternates: { canonical: 'https://thefleshrobot.com/faq' },
  openGraph: {
    title: 'FAQ & Ask Coach Ed | The Flesh Robot',
    description:
      'Answers to your most urgent health questions — why your body is falling apart, what dirty blood means, and how the Mighty 90 fixes the root cause.',
    url: 'https://thefleshrobot.com/faq',
  },
};

export default function FaqPage() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thefleshrobot.com' },
          { name: 'FAQ', url: 'https://thefleshrobot.com/faq' },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '45vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(9,14,12,0.97) 0%, rgba(9,14,12,0.65) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, transparent, var(--color-green), transparent)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 3rem', width: '100%' }}>
          <div className="section-tag">Direct Answers from Coach Ed</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.0 }}>
            FAQ / <span className="green-text">Ask the Coach</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '560px' }}>
            Direct answers to the most common questions about the Triangle of Disease, supplementation,
            epigenetics, and systemic healing.
          </p>
        </div>
      </section>

      {/* ── HEALTH EVAL PROMINENT BANNER ─────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(212,160,23,0.12) 0%, rgba(34,197,94,0.06) 100%)',
          borderTop: '1px solid rgba(212,160,23,0.25)',
          borderBottom: '1px solid rgba(212,160,23,0.25)',
          padding: '2rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ClipboardList size={36} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  color: 'var(--color-text)',
                  marginBottom: '0.2rem',
                }}
              >
                Not sure where to start? Take the FREE Health Evaluation.
              </div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                Coach Ed reviews your answers and builds your personalized starting protocol — no obligation.
              </div>
            </div>
          </div>
          <Link href="/health-eval" className="btn-gold" style={{ flexShrink: 0 }}>
            Take the Health Evaluation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ACCORDION ────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <FaqAccordion />
      </section>

      {/* ── STILL HAVE QUESTIONS ─────────────────────────────── */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--color-border)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Still Have Questions?</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Talk to <span className="green-text">Coach Ed</span> Directly
          </h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Schedule a free 30-minute consultation to discuss your specific health challenges
            and determine exactly where to start.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://calendly.com/edl298965/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Free Consultation
              <ArrowRight size={16} />
            </a>
            <Link href="/health-eval" className="btn-outline">
              Health Evaluation First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
