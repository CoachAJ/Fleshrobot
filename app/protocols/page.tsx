import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'The Flesh Robot | Health Protocols',
  description:
    'Stop the bleeding. Establish the foundation. Rebuild the body. The 10 Bad Foods list, Good Foods guide, Health Forensics, and targeted nutritional protocols.',
};

const badFoods = [
  { name: 'Wheat / Gluten', reason: 'Shreds the intestinal lining, triggers leaky gut and systemic inflammation.' },
  { name: 'Barley, Rye & Oats', reason: 'Cross-reactive gluten sources — damage the gut mucosal barrier the same way wheat does.' },
  { name: 'Fried Foods', reason: 'Trans fats and oxidized oils destroy cell membranes and accelerate free radical damage.' },
  { name: 'Processed Oils (Canola, Corn, Soy)', reason: 'Highly inflammatory omega-6 excess. Disrupts the omega-3/6 ratio your body needs.' },
  { name: 'Carbonated Beverages', reason: 'Leaches calcium and minerals from bones. Even "zero sugar" versions are acidic and destructive.' },
  { name: 'Processed Sugar & HFCS', reason: 'Spikes insulin, feeds pathogenic bacteria, and glycates connective tissue — accelerating aging.' },
  { name: 'Alcohol', reason: 'Strips the body of B vitamins, damages gut flora, and burdens the liver constantly.' },
  { name: 'Well-Done Red Meat', reason: 'Charred meats produce heterocyclic amines — carcinogenic compounds formed at high heat.' },
  { name: 'Skin of Baked Potatoes & Potato Chips', reason: 'Solanine (a glycoalkaloid toxin in potato skin) is a joint irritant and inflammation trigger.' },
  { name: 'Processed / Packaged Foods', reason: 'Loaded with preservatives, dyes, and synthetic additives that the body cannot process cleanly.' },
];

const goodFoods = [
  { name: 'Eggs (Soft-cooked)', reason: 'Complete protein with all essential amino acids plus choline for brain and liver health.' },
  { name: 'Wild-Caught Fish & Seafood', reason: 'Rich in omega-3s, selenium, and iodine. Essential for heart, brain, and thyroid function.' },
  { name: 'Free-Range Poultry', reason: 'Lean, complete protein without the hormone and antibiotic load of factory farming.' },
  { name: 'Grass-Fed Red Meat (rare/med-rare)', reason: 'High in CLA, omega-3s, and B12. Cook low-and-slow — never charred.' },
  { name: 'Raw or Lightly Cooked Vegetables', reason: 'Phytonutrients, fiber, and enzymes. Especially leafy greens, broccoli, and cruciferous vegetables.' },
  { name: 'Avocados', reason: 'Healthy monounsaturated fats, potassium, and magnesium. Nature\'s perfect food.' },
  { name: 'Nuts & Seeds (raw)', reason: 'Selenium in Brazil nuts, magnesium in pumpkin seeds, omega-3s in walnuts.' },
  { name: 'Bone Broth', reason: 'Collagen, glycine, and gelatin — directly repairs the gut lining and joint cartilage.' },
  { name: 'Berries (low-sugar fruits)', reason: 'High ORAC antioxidant value. Blueberries, raspberries, and blackberries are ideal.' },
  { name: 'Sweet Potatoes (no skin)', reason: 'Complex carbohydrates with beta-carotene. A safe starch that won\'t spike blood sugar like white potato.' },
];

const protocols = [
  {
    id: 'bone-joint',
    title: 'Healthy Body Bone & Joint FX Pack',
    subtitle: 'Osteoporosis · Arthritis · Connective Tissue',
    color: '#60a5fa',
    borderColor: 'rgba(96,165,250,0.2)',
    bgColor: 'rgba(96,165,250,0.04)',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70',
    desc: 'Avoid stepping on the landmines of osteoporosis and arthritis by rebuilding your body\'s scaffolding and connective tissue matrix.',
    products: [
      { name: 'Healthy Body Start Pack', note: 'Essential 90 foundation' },
      { name: 'Beyond Osteo-FX™', note: 'Liquid colloidal calcium, magnesium & D3' },
      { name: 'MSM Ultra', note: 'Sulfur for cartilage, ligament & tendon repair' },
    ],
  },
  {
    id: 'blood-sugar',
    title: 'Healthy Body Blood Sugar FX Pack',
    subtitle: 'Metabolic Syndrome · Insulin Resistance · Inflammation',
    color: '#fbbf24',
    borderColor: 'rgba(251,191,36,0.2)',
    bgColor: 'rgba(251,191,36,0.04)',
    img: 'https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?w=600&q=70',
    desc: 'Treats the body to repair glycation damage and restore healthy insulin response for individuals dealing with metabolic syndrome.',
    products: [
      { name: 'Healthy Body Blood Sugar Pack', note: 'Mighty 90 + targeted minerals' },
      { name: 'SweetEZE', note: 'Botanical & mineral blood glucose support' },
    ],
  },
  {
    id: 'cardio',
    title: 'Healthy Body Cardio FX Pack',
    subtitle: 'Heart Health · Circulation · Blood Purification',
    color: '#f87171',
    borderColor: 'rgba(248,113,113,0.2)',
    bgColor: 'rgba(248,113,113,0.04)',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=70',
    desc: 'Supports robust blood flow, defends against cardiomyopathy, and protects vascular tissue from free radical damage.',
    products: [
      { name: 'Ultimate Selenium', note: 'High-potency antioxidant for heart health' },
      { name: 'Ultimate Daily Classic™', note: 'Healthy blood flow & kidney filtration support' },
      { name: 'Fucoid Z', note: 'Nature\'s heparin — blood purification' },
    ],
  },
  {
    id: 'digestion',
    title: 'Healthy Body Digestion FX Pack',
    subtitle: 'Leaky Gut · Dirty Blood · Microbiome Repair',
    color: '#34d399',
    borderColor: 'rgba(52,211,153,0.2)',
    bgColor: 'rgba(52,211,153,0.04)',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=70',
    desc: 'Address dirty blood by healing the mucosal barriers of the digestive tract and re-establishing a healthy microbiome terrain.',
    products: [
      { name: 'Healthy Body Digestion Pack', note: 'Foundation plus enzymes and flora' },
      { name: 'Ultimate Microbiome', note: 'Pre, pro, and post-biotics' },
    ],
  },
];

export default function ProtocolsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '55vh',
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
              "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.18)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(9,14,12,0.97) 0%, rgba(9,14,12,0.6) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, transparent, var(--color-gold), transparent)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 3rem', width: '100%' }}>
          <div className="section-tag-gold">Stop the Bleeding. Build the Foundation. Rebuild the Body.</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.0 }}>
            Nutritional <span className="gold-text">Protocols</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '580px' }}>
            You cannot supplement your way out of a toxic diet. Start here: eliminate the poisons,
            learn what to eat, then apply the targeted protocol for your body.
          </p>
        </div>
      </section>

      {/* ── STEP PROCESS STRIP ───────────────────────────────── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { step: '01', label: 'Stop the Bleeding', desc: 'Remove the 10 Bad Foods' },
            { step: '02', label: 'Health Forensics', desc: 'Food diary + short fast' },
            { step: '03', label: 'Build the Foundation', desc: 'The Mighty 90 daily' },
            { step: '04', label: 'Targeted Protocol', desc: 'Your specific FX Pack' },
          ].map((s) => (
            <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2rem', color: 'var(--color-gold)', opacity: 0.5, minWidth: '2.5rem' }}>{s.step}</div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem' }}>{s.label}</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BAD FOODS + GOOD FOODS ────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag-gold">Step 1 — The Diet</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              What to <span style={{ color: '#ef4444' }}>Avoid</span> &amp; What to{' '}
              <span className="green-text">Eat</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
              There is only one correct diet for the human body — give it what it needs to carry out DNA instructions of growth and repair.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {/* BAD FOODS */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <XCircle size={24} style={{ color: '#ef4444' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', margin: 0 }}>The 10 Bad Foods</h3>
                <span
                  style={{
                    padding: '0.2rem 0.6rem',
                    background: 'rgba(239,68,68,0.12)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    borderRadius: '50px',
                    color: '#ef4444',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Eliminate Completely
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {badFoods.map((f, i) => (
                  <div
                    key={f.name}
                    style={{
                      background: 'rgba(239,68,68,0.04)',
                      border: '1px solid rgba(239,68,68,0.12)',
                      borderRadius: '12px',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        color: '#ef4444',
                        opacity: 0.5,
                        minWidth: '1.5rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem', marginBottom: '0.2rem' }}>
                        {f.name}
                      </div>
                      <div style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>{f.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GOOD FOODS */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <CheckCircle size={24} style={{ color: 'var(--color-green)' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', margin: 0 }}>Good Foods to Eat</h3>
                <span
                  style={{
                    padding: '0.2rem 0.6rem',
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: '50px',
                    color: 'var(--color-green)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Eat These Instead
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {goodFoods.map((f, i) => (
                  <div
                    key={f.name}
                    style={{
                      background: 'rgba(34,197,94,0.04)',
                      border: '1px solid rgba(34,197,94,0.12)',
                      borderRadius: '12px',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        color: 'var(--color-green)',
                        opacity: 0.5,
                        minWidth: '1.5rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem', marginBottom: '0.2rem' }}>
                        {f.name}
                      </div>
                      <div style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>{f.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALTH FORENSICS ─────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Step 2 — Health Forensics</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>
              Before We Rebuild, We Must{' '}
              <span className="green-text">Stop the Bleeding</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              If you are suffering from chronic symptoms, your body is reacting to inputs.
              We use a Food Diary to find the culprits causing dirty blood and leaky gut.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                step: '1',
                title: 'The Short Fast',
                desc: 'Begin with a 24–48 hour water or bone broth fast. This gives your digestive system a critical break and stops the immediate influx of toxins through the gut mucosal barrier.',
                color: 'var(--color-gold)',
              },
              {
                step: '2',
                title: 'Meticulous Tracking',
                desc: 'Write down absolutely everything that enters your mouth — food, supplements, drinks, snacks. This is the Elimination Diet phase. Precision matters.',
                color: 'var(--color-green)',
              },
              {
                step: '3',
                title: 'Symptom Correlation',
                desc: 'Track how your body responds mentally, digestively, and physically over the next 24–48 hours after each food. A rash, brain fog, or joint pain is your body flagging a sensitivity.',
                color: '#a78bfa',
              },
              {
                step: '4',
                title: 'Consult Coach Ed',
                desc: 'Share your food diary with Coach Ed. He will identify the patterns, confirm your sensitivities, and build your personalized nutritional starting protocol.',
                color: '#60a5fa',
              },
            ].map((item) => (
              <div key={item.step} className="glass-card" style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: '3rem',
                    color: item.color,
                    opacity: 0.3,
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARGETED PROTOCOLS ───────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag-gold">Step 4 — Targeted FX Packs</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              Your Specific{' '}
              <span className="gold-text">FX Protocol</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              On top of the foundational Mighty 90, these targeted FX Packs address specific system breakdowns.
              Coach Ed determines which ones you need based on your health evaluation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {protocols.map((p) => (
              <div
                key={p.id}
                style={{
                  background: p.bgColor,
                  border: `1px solid ${p.borderColor}`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 30%, var(--bg-card) 100%)` }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ color: p.color, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    {p.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {p.products.map((prod) => (
                      <div key={prod.name} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: p.color, fontSize: '0.9rem', marginTop: '0.1rem', flexShrink: 0 }}>▸</span>
                        <div>
                          <span style={{ color: 'var(--color-text)', fontSize: '0.88rem', fontWeight: 600 }}>{prod.name}</span>
                          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}> — {prod.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/health-eval" className="btn-gold" style={{ fontSize: '1.05rem', marginRight: '1rem' }}>
              Take the Health Evaluation
              <ArrowRight size={18} />
            </Link>
            <Link href="/shop" className="btn-outline" style={{ fontSize: '1.05rem' }}>
              Shop All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
