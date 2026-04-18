'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart';

const links = [
  { href: '/', label: 'Home' },
  { href: '/dr-wallach', label: 'Foundational Truths' },
  { href: '/protocols', label: 'Protocols' },
  { href: '/shop', label: 'Shop' },
  { href: '/faq', label: 'FAQ' },
  { href: '/health-eval', label: 'Health Eval' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(9, 14, 12, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(34, 197, 94, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: '1.35rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-green)',
              }}
            >
              The Flesh Robot
            </span>
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}
            >
              Coach Ed · Wholistic Health
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              style={
                pathname === l.href
                  ? { color: 'var(--color-green)' }
                  : {}
              }
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={openCart}
            aria-label="Open cart"
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              padding: '0.45rem 0.65rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              position: 'relative',
              transition: 'border-color 300ms ease, color 300ms ease',
            }}
          >
            <ShoppingCart size={17} />
            {totalItems > 0 && (
              <span
                style={{
                  background: 'var(--color-gold)',
                  color: '#000',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  position: 'absolute',
                  top: '-7px',
                  right: '-7px',
                }}
              >
                {totalItems}
              </span>
            )}
          </button>
          <a
            href="https://calendly.com/edl298965/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
          >
            <Phone size={14} />
            Free Consult
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--color-border)',
            padding: '1rem 1.5rem 1.5rem',
          }}
          className="md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--color-border)',
                color: pathname === l.href ? 'var(--color-green)' : 'var(--color-text)',
                textDecoration: 'none',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/edl298965/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
          >
            <Phone size={14} />
            Schedule Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
