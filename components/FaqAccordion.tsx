'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Why does my body feel like it's falling apart?",
    a: 'Welcome to MBFA ("My Body is Falling Apart") Disease. Your body is reacting to inputs — specifically, a long-term deficiency in one or more of the 90 essential nutrients. Pharmacist Ben\'s "First Principle": where you see the problem is not where the problem begins. Pain, fatigue, high blood sugar — these are the fruit. The root is always upstream in the digestive system, blood sugar regulation, or adrenal/thyroid function.',
  },
  {
    q: 'What causes muscle cramps, twitches, and spasms?',
    a: 'Muscle cramps, twitches, and spasms are primary indicators of a Calcium deficiency. Resolving this often requires supplementation with highly absorbable liquid colloidal calcium — such as Beyond Osteo-FX™ — rather than treating the symptom with muscle relaxers. Standard calcium tablets are poorly absorbed; liquid colloidal calcium is up to 98% bioavailable.',
  },
  {
    q: 'What is "Dirty Blood" and why does it matter?',
    a: '"Dirty Blood" refers to hypercoagulable, sludgy blood. It is caused by toxins, undigested food particles, and inflammatory markers leaking from a permeable digestive tract ("leaky gut") directly into the bloodstream. All cell disease is preceded by dirty blood. Until you seal the gut and stop the leaking, nothing upstream can heal.',
  },
  {
    q: 'Can I still take my medications while supplementing?',
    a: "Yes — and importantly, nutrients actually make drugs more potent and powerful because they optimize the body's internal chemistry. As your body heals using raw materials, you can work closely with your prescribing doctor to safely taper or reduce long-term medications. This is done gradually and medically supervised.",
  },
  {
    q: "Why can't I just eat healthy and skip supplements?",
    a: "Even perfectly grown organic food is critically deficient in minerals. U.S. Senate Document 264 (1936) documents that North American agricultural soils are depleted. Plants can synthesize certain vitamins — but they cannot manufacture minerals. If the mineral isn't in the soil, it's not in the plant, and won't be in your body. This is why the 60 colloidal minerals in the Mighty 90 are non-negotiable.",
  },
  {
    q: 'Where do I even start?',
    a: "The first step is Health Forensics — a Food Diary combined with a short 24–48 hour fast. This \"stops the bleeding\" of toxicity into the bloodstream and helps identify which specific foods are triggering your inflammatory response. Then, the Healthy Body Start Pack establishes the foundational Mighty 90. From there, Coach Ed's assessment determines any targeted FX Packs needed.",
  },
  {
    q: 'What is epigenetics and why does it matter?',
    a: "Epigenetics is the science of gene expression — how your environment and nutrition control whether genetic predispositions activate or stay dormant. You may carry a gene variant for diabetes, heart disease, or arthritis — but your nutritional status determines whether that \"disease switch\" flips ON or OFF. By flooding your body with the 90 essential nutrients, you are actively unlocking your body's genetic potential and turning off disease expression at the cellular level.",
  },
  {
    q: 'How long before I see results?',
    a: 'Coach Ed can help most people begin to see meaningful results within 90 days — if they follow the protocol and change their eating habits. Results vary based on your current body state, how quickly you eliminate the 10 Bad Foods, and how consistently you take the Mighty 90. Some see changes in 2–4 weeks; others take longer depending on the depth of deficiency.',
  },
  {
    q: 'Is this about selling products or a lifestyle?',
    a: "This is not primarily about selling supplements. It is a complete strategy — a lifestyle of optimal eating and precision supplementation to reach a goal (get off meds, avoid surgery, achieve optimal health of body and mind). The products are at the core because they deliver exact nutrients at correct dosage levels per body weight, based on multimillion-dollar private proprietary studies.",
  },
  {
    q: "What is Coach Ed's certification?",
    a: "Coach Ed holds a Certified Wholistic Health Coach certification — a formal credential for guiding individuals through nutritional protocols based on Dr. Joel Wallach's 90 for Life philosophy. This certification also includes training on adjusting nutrients based on specific health tests and monitoring progress on a monthly basis.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '1.5rem 0',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: open === i ? 'var(--color-green)' : 'var(--color-text)',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1.15rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              transition: 'color 300ms',
              gap: '1rem',
            }}
          >
            <span>{faq.q}</span>
            <span style={{ flexShrink: 0, color: open === i ? 'var(--color-green)' : 'var(--color-text-muted)' }}>
              {open === i ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </button>
          <div
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              lineHeight: 1.75,
              paddingBottom: open === i ? '1.5rem' : 0,
              maxHeight: open === i ? '600px' : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s ease, padding-bottom 0.3s ease',
            }}
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
