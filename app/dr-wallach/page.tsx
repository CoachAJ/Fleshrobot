import Link from 'next/link';
import { ArrowRight, BookOpen, Microscope, TriangleAlert } from 'lucide-react';

export const metadata = {
  title: 'The Flesh Robot | Foundational Truths',
  description:
    'Learn why soil depletion, epigenetics, and the Triangle of Disease explain chronic illness — and what to do about it.',
};

export default function DrWallachPage() {
  return (
    <>
      {/* ── HERO — deep navy/blue palette ─────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '72vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#06101f',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530026186672-2173dba999ef?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.15) saturate(0.4)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(6,16,31,0.97) 0%, rgba(6,16,31,0.7) 70%, rgba(30,58,138,0.2) 100%)',
          }}
        />
        {/* Blue accent stripe */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, transparent, #3b82f6, transparent)',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '5rem 1.5rem 3rem',
            width: '100%',
          }}
        >
          {/* Blue section tag */}
          <div
            style={{
              display: 'inline-block',
              padding: '0.3rem 0.85rem',
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.35)',
              borderRadius: '50px',
              color: '#60a5fa',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Dr. Joel Wallach · Dead Doctors Don&apos;t Lie
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              color: '#f0f8ff',
              marginBottom: '1.5rem',
              lineHeight: 1.0,
            }}
          >
            The{' '}
            <span style={{ color: '#60a5fa' }}>Foundational</span>
            <br />
            Truths
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '600px',
              marginBottom: '2.5rem',
            }}
          >
            Chronic disease is not a drug deficiency. It is not &quot;bad genetics.&quot;
            It is a <strong style={{ color: '#f0f8ff' }}>predictable, preventable nutrient deficiency</strong>.
            Dr. Wallach proved this. Here is how.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/shop" className="btn-primary">
              Apply the Knowledge
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/protocols"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: '#cbd5e1',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(148,163,184,0.25)',
                textDecoration: 'none',
                transition: 'border-color 300ms',
              }}
            >
              View Protocols
            </Link>
          </div>
        </div>
      </section>

      {/* ── THREE CORE TRUTHS STRIP ───────────────────────────── */}
      <section
        style={{
          background: '#0a1628',
          borderTop: '1px solid rgba(59,130,246,0.15)',
          borderBottom: '1px solid rgba(59,130,246,0.15)',
          padding: '2rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            { icon: '🌍', title: 'Soils Are Depleted', text: 'U.S. Senate Doc. 264 (1936) proved our farmlands are mineral-deficient. Plants can\'t make what isn\'t there.' },
            { icon: '🧬', title: 'Epigenetics Beats Genetics', text: 'You carry gene variants — not sentences. Nutrition determines whether disease switches flip ON or OFF.' },
            { icon: '🔺', title: 'Disease Has a System', text: 'The Triangle of Disease: Digestive → Blood Sugar → Adrenal. Fix these three and the body heals itself.' },
          ].map((t) => (
            <div
              key={t.title}
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(59,130,246,0.04)',
                border: '1px solid rgba(59,130,246,0.1)',
              }}
            >
              <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{t.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#e2e8f0',
                    marginBottom: '0.3rem',
                  }}
                >
                  {t.title}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>{t.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUTH 1: SOIL DEPLETION ───────────────────────────── */}
      <section
        style={{
          background: '#07111f',
          padding: '6rem 1.5rem',
          borderBottom: '1px solid rgba(59,130,246,0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.3rem 0.85rem',
                  background: 'rgba(234,179,8,0.1)',
                  border: '1px solid rgba(234,179,8,0.25)',
                  borderRadius: '50px',
                  color: '#fbbf24',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                <BookOpen size={13} />
                Truth #1 · The Soil Crisis
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#f0f8ff',
                  marginBottom: '1.25rem',
                }}
              >
                The Food On Your Plate Is{' '}
                <span style={{ color: '#fbbf24' }}>Mineral-Empty</span>
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                We are told a &quot;balanced diet&quot; gives us everything we need. This is a myth — one documented
                by the U.S. government since <strong style={{ color: '#cbd5e1' }}>1936</strong>.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                U.S. Senate Document 264 confirmed that North American farm soils are severely depleted of
                essential minerals. Plants absorb what&apos;s in the soil. If the minerals aren&apos;t in the soil,
                they aren&apos;t in the food. If they aren&apos;t in the food — they aren&apos;t in <em>you</em>.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                Plants can manufacture vitamins, amino acids, and fatty acids. But plants{' '}
                <strong style={{ color: '#f0f8ff' }}>cannot manufacture minerals</strong>. This is why
                supplementing the 60 colloidal minerals is non-negotiable for human longevity.
              </p>
            </div>

            {/* Stats visual */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              {[
                { val: '1936', label: 'U.S. Senate warned us', sub: 'Document 264', color: '#fbbf24' },
                { val: '80%+', label: 'Mineral depletion', sub: 'In modern farmsoils', color: '#60a5fa' },
                { val: '60', label: 'Essential minerals', sub: 'Your body requires', color: '#34d399' },
                { val: '0', label: 'In your multivitamin', sub: 'Colloidal minerals', color: '#f87171' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: 'rgba(59,130,246,0.05)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: '2.2rem',
                      color: s.color,
                      lineHeight: 1,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {s.val}
                  </div>
                  <div style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    {s.label}
                  </div>
                  <div style={{ color: '#475569', fontSize: '0.75rem' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUTH 2: EPIGENETICS ──────────────────────────────── */}
      <section
        style={{
          background: '#090e1c',
          padding: '6rem 1.5rem',
          borderBottom: '1px solid rgba(59,130,246,0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Visual first on this one */}
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', order: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80"
                alt="Epigenetics and DNA"
                style={{ width: '100%', display: 'block', opacity: 0.55 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(9,14,28,0.4) 0%, rgba(30,58,138,0.2) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(6,10,20,0.85)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: '1px solid rgba(59,130,246,0.2)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    color: '#60a5fa',
                    fontSize: '1rem',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  The Epigenetic Switch
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ color: '#e2e8f0' }}>Genetics loads the gun.</strong>{' '}
                  Environment and nutrition pull the trigger. You choose which way it fires.
                </p>
              </div>
            </div>

            <div style={{ order: 1 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.3rem 0.85rem',
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  borderRadius: '50px',
                  color: '#a78bfa',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                <Microscope size={13} />
                Truth #2 · Epigenetics
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#f0f8ff',
                  marginBottom: '1.25rem',
                }}
              >
                It&apos;s{' '}
                <span
                  style={{
                    WebkitTextStroke: '2px #ef4444',
                    color: 'transparent',
                  }}
                >
                  NOT
                </span>{' '}
                &quot;Just Your Genes.&quot;
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Have you been told your high blood pressure, diabetes, or arthritis is just
                &quot;in your genes?&quot; Dr. Wallach&apos;s pioneering work proves otherwise.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                <strong style={{ color: '#cbd5e1' }}>Epigenetics</strong> — the science of gene
                expression — shows that behavior and environment control how your genes activate.
                You may carry a predisposition, but your nutritional status determines whether that
                &quot;disease switch&quot; gets flipped <strong style={{ color: '#f87171' }}>ON</strong>{' '}
                or <strong style={{ color: '#34d399' }}>OFF</strong>.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                By flooding your body with the 90 essential nutrients, you are actively turning off disease
                expression at the cellular level. This is the <em>unlocking of your body&apos;s genetic potential</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUTH 3: TRIANGLE OF DISEASE ─────────────────────── */}
      <section
        style={{
          background: '#06101f',
          padding: '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.3rem 0.85rem',
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.25)',
                borderRadius: '50px',
                color: '#f87171',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              <TriangleAlert size={13} />
              Truth #3 · The Triangle of Disease
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#f0f8ff',
                marginBottom: '1rem',
              }}
            >
              How Your Body{' '}
              <span style={{ color: '#f87171' }}>Falls Apart</span>
              <br />— And How to Put It Back Together
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Pharmacist Ben&apos;s Triangle of Disease is the master framework.
              Rather than treating isolated symptoms, we look at the <em>systemic foundation</em>.
            </p>
          </div>

          {/* Triangle visual */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {[
              {
                num: '01',
                title: 'The Digestive System',
                subtitle: 'The Foundation — Dirty Blood',
                color: '#34d399',
                borderColor: 'rgba(52,211,153,0.2)',
                bgColor: 'rgba(52,211,153,0.04)',
                body: 'All disease is cell disease, and all cell disease is preceded by dirty blood. "Leaky gut" allows undigested food and toxins to flood the bloodstream, triggering systemic inflammation. Until this is sealed, nothing else heals.',
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=70',
              },
              {
                num: '02',
                title: 'Blood Sugar System',
                subtitle: 'The Inflammator — Glycation',
                color: '#fbbf24',
                borderColor: 'rgba(251,191,36,0.2)',
                bgColor: 'rgba(251,191,36,0.04)',
                body: 'Treat yourself like a diabetic. Metabolic syndrome and insulin resistance drive inflammation and glycation — the same process that destroys blood vessels, connective tissue, and ages the body rapidly. Stabilizing blood sugar is non-negotiable.',
                img: 'https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?w=500&q=70',
              },
              {
                num: '03',
                title: 'Adrenal & Thyroid Complex',
                subtitle: 'The Tip — The Regulatory Hub',
                color: '#a78bfa',
                borderColor: 'rgba(167,139,250,0.2)',
                bgColor: 'rgba(167,139,250,0.04)',
                body: 'When the gut is leaking and blood sugar is spiking, the adrenal system burns out managing the crisis. This hub controls energy distribution, stress response, and hormonal regulation. Collapse here means full system failure.',
                img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=70',
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: item.bgColor,
                  border: `1px solid ${item.borderColor}`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1.5rem',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: '4rem',
                      color: item.color,
                      opacity: 0.5,
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </div>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div
                    style={{
                      color: item.color,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#f0f8ff', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/shop" className="btn-primary">
              Shop the Mighty 90
              <ArrowRight size={16} />
            </Link>
            <Link href="/protocols" className="btn-outline">
              View Nutritional Protocols
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
