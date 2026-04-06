import Link from 'next/link';
import { ArrowRight, CheckCircle, Play, ClipboardList, Leaf, Zap, Heart, ShieldCheck, FlaskConical } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.22)',
          }}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(9,14,12,0.95) 0%, rgba(9,14,12,0.6) 60%, rgba(34,197,94,0.05) 100%)',
          }}
        />
        {/* Green edge accent */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, transparent, var(--color-green), transparent)',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '6rem 1.5rem 4rem',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '760px' }}>
            <div className="section-tag">The 90 for Life Philosophy</div>
            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                lineHeight: 1.0,
              }}
            >
              Your Body Is a{' '}
              <span style={{ color: 'var(--color-green)' }}>Healing Machine.</span>
              <br />
              Give It the{' '}
              <span
                style={{
                  WebkitTextStroke: '2px var(--color-gold)',
                  color: 'transparent',
                }}
              >
                Raw Materials.
              </span>
            </h1>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '600px',
              }}
            >
              If your body is falling apart — fatigue, pain, disease — it&apos;s not bad luck or bad genes.
              It&apos;s a <strong style={{ color: 'var(--color-text)' }}>nutrient deficiency</strong>.
              Coach Ed shows you exactly how to fix the root, not the fruit.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://calendly.com/edl298965/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '1.05rem' }}
              >
                Get Your Free Consultation
                <ArrowRight size={18} />
              </a>
              <Link href="/health-eval" className="btn-outline" style={{ fontSize: '1.05rem' }}>
                Take the Health Evaluation
              </Link>
            </div>

            {/* Social proof bar */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                { val: '90', label: 'Essential Nutrients' },
                { val: '900+', label: 'Disease States Addressed' },
                { val: '90', label: 'Day Transformation' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: '2rem',
                      color: 'var(--color-green)',
                      lineHeight: 1,
                    }}
                  >
                    {s.val}
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--color-text-muted)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <span>Discover</span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(180deg, var(--color-green), transparent)',
              animation: 'pulse-glow 2s ease infinite',
            }}
          />
        </div>
      </section>

      {/* ── DISCOVERY STRIP ──────────────────────────────────── */}
      <section
        style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: '1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            { icon: '🧬', text: 'Disease is a nutrient deficiency — not genetics' },
            { icon: '🌿', text: 'Fix the root cause, not the symptoms' },
            { icon: '⚗️', text: '90 nutrients your body CANNOT make itself' },
            { icon: '📅', text: 'See results in 90 days or less' },
            { icon: '💊', text: 'Work toward reducing medications naturally' },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.5rem',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.4 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ───────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag">Do you recognize this?</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              Does Your Body Feel Like It&apos;s{' '}
              <span className="gold-text">Falling Apart?</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Welcome to <strong style={{ color: 'var(--color-text)' }}>MBFA Disease</strong> — &quot;My Body is Falling Apart.&quot;
              If you&apos;re tired, in pain, on meds, or told it&apos;s &quot;just your genes&quot; — we have the answer.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Problem */}
            <div
              style={{
                background: 'rgba(220,38,38,0.06)',
                border: '1px solid rgba(220,38,38,0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🍎</div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#ef4444',
                  marginBottom: '0.5rem',
                }}
              >
                The Fruit (What Medicine Sees)
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                Symptoms &amp; Medication
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Conventional medicine treats what it can see — pain, fatigue, high blood sugar —
                and manages symptoms with drugs. The underlying cause is never addressed.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Symptom management', 'Drugs with side effects', 'Endless doctor visits', 'Never gets better'].map(i => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    <span style={{ color: '#ef4444', fontSize: '1.1rem' }}>✗</span> {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div
              className="glass-card"
              style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
                }}
              />
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌳</div>
              <div className="section-tag" style={{ marginBottom: '0.5rem' }}>The Root (What We Fix)</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                Root Cause &amp; Real Healing
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We go upstream. By flooding your body with the 90 essential nutrients and cleaning
                up your diet, your body&apos;s built-in healing system turns <em>back on</em>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Address the true root cause', 'Work toward reducing medications', 'Body heals itself', 'Results in 90 days'].map(i => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    <CheckCircle size={16} style={{ color: 'var(--color-green)', flexShrink: 0 }} /> {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div
              style={{
                background: 'rgba(212,160,23,0.06)',
                border: '1px solid rgba(212,160,23,0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <div className="section-tag-gold" style={{ marginBottom: '0.5rem' }}>The Strategy</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                A Complete Lifestyle
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                This isn&apos;t about selling supplements. It&apos;s a complete strategy — optimal eating,
                precision supplementation, and monthly coaching adjustments for your specific body.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Personalized protocol', 'Monthly check-ins', 'Diet + supplement strategy', 'Avoid surgery &amp; meds'].map(i => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>◆</span> <span dangerouslySetInnerHTML={{ __html: i }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROOT NOT FRUIT IMAGE ──────────────────────────────── */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag" style={{ marginBottom: '1.5rem' }}>The Core Principle</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>
            Root,{' '}
            <span className="gold-text">Not</span>{' '}
            Fruit.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Where you see the problem is <strong style={{ color: 'var(--color-text)' }}>not</strong> where the problem begins.
            Stop treating the fruit (symptoms). Start fixing the root (soil, nutrients, terrain).
          </p>

          {/* Root-Not-Fruit visual */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                background: 'var(--bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?w=800&q=80"
                alt="Tree roots and fruit — Root Not Fruit principle"
                style={{ width: '100%', display: 'block', opacity: 0.7, maxHeight: '380px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent, var(--bg-card))',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: '0 2rem',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#ef4444', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>🍎 Fruit</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Symptoms Medicine Treats</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--color-green)', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>🌱 Root</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Nutrients We Fix</div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/dr-wallach" className="btn-primary">
            Learn the Foundational Truths
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── THE MIGHTY 90 ─────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag-gold">Non-Negotiable Foundation</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              The Mighty <span className="gold-text">90</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              60 minerals · 16 vitamins · 12 amino acids · 2–3 essential fatty acids.
              These are the raw ingredients your body <em>cannot manufacture</em> — and they are not in your food.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              {
                icon: <Zap size={24} />,
                name: '60 Essential Minerals',
                desc: 'Mined from prehistoric plant matter, not rocks. These colloidal minerals are up to 98% bioavailable — unlike mineral salts your body struggles to absorb.',
                color: 'var(--color-gold)',
                img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=70',
              },
              {
                icon: <Leaf size={24} />,
                name: '16 Essential Vitamins',
                desc: 'Including fat-soluble vitamins A, D, E, K and the full B-complex spectrum at correct synergistic dosages.',
                color: 'var(--color-green)',
                img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=70',
              },
              {
                icon: <FlaskConical size={24} />,
                name: '12 Amino Acids',
                desc: 'The essential protein building blocks. Without them, your body cannot complete repair and regeneration cycles — it borrows from muscle and organ tissue.',
                color: '#a78bfa',
                img: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=70',
              },
              {
                icon: <Heart size={24} />,
                name: '2–3 Essential Fatty Acids',
                desc: 'Omega-3 and Omega-6 in proper ratio. Critical for brain function, inflammation control, and cellular membrane integrity.',
                color: '#f472b6',
                img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=70',
              },
              {
                icon: <ShieldCheck size={24} />,
                name: 'Dosed by Body Weight',
                desc: 'Unlike one-size-fits-all vitamins, the Mighty 90 is dosed precisely — 1 serving per 100 lbs of body weight — for perfect biochemical nutrition.',
                color: 'var(--color-gold)',
                img: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=70',
              },
              {
                icon: <ShieldCheck size={24} />,
                name: 'Without These, You Break Down',
                desc: 'Your body will "borrow" from organs and bones to complete essential processes — until they drain. That depletion process is what we call disease. Or aging.',
                color: '#ef4444',
                img: 'https://images.unsplash.com/photo-1530026186672-2173dba999ef?w=400&q=70',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="glass-card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, var(--bg-card))' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ color: item.color, marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--color-text)' }}>{item.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/shop" className="btn-gold" style={{ fontSize: '1.05rem' }}>
              Get the Healthy Body Start Pack
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO SNIPPETS ────────────────────────────────────── */}
      <section
        style={{
          padding: '6rem 1.5rem',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">2-Minute Principle Videos</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>
              Learn the <span className="green-text">Core Principles</span> Quickly
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto' }}>
              Short videos that inform you of something you want to know — in 2 minutes or less.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Why You\'re Nutrient Deficient', thumb: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=70', duration: '2:14' },
              { title: 'The Triangle of Disease Explained', thumb: 'https://images.unsplash.com/photo-1530026186672-2173dba999ef?w=600&q=70', duration: '1:58' },
              { title: 'What Are the 90 Essential Nutrients?', thumb: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=70', duration: '2:02' },
              { title: 'Epigenetics: Turn Off Disease Switches', thumb: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=70', duration: '1:47' },
            ].map((v) => (
              <div
                key={v.title}
                className="glass-card"
                style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
              >
                <div style={{ position: 'relative', height: '180px' }}>
                  <img
                    src={v.thumb}
                    alt={v.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        background: 'rgba(34,197,94,0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 30px rgba(34,197,94,0.4)',
                      }}
                    >
                      <Play size={22} fill="#000" color="#000" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.5rem',
                      right: '0.75rem',
                      background: 'rgba(0,0,0,0.75)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      padding: '0.15rem 0.4rem',
                      borderRadius: '4px',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {v.duration}
                  </div>
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.3 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALTH EVAL CTA ───────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(212,160,23,0.04) 100%)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <ClipboardList size={48} style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }} />
          <div className="section-tag-gold" style={{ marginBottom: '1rem' }}>Free Assessment</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
            Start With a <span className="gold-text">Health Evaluation</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            Not sure where to begin? Complete a short health evaluation and Coach Ed will build
            your personalized nutritional starting point — no obligation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/health-eval" className="btn-gold" style={{ fontSize: '1.05rem' }}>
              Take the Health Evaluation
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://calendly.com/edl298965/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: '1.05rem' }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
