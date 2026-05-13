/* global React, Reveal */
const { useState: useState_cli } = React;

/* -------------------------------------------------------------
   02 / Working with — placeholder client logo strip.
   Auto-scrolling marquee, pauses on hover. Decorative arrow + dot
   accents echo the reference layout. Replace SVG logos with real
   client marks when available.
   ------------------------------------------------------------- */

/* Placeholder brand marks — varied styles so the layout reads
   like a real logo wall. None of these are real brands. */
const PLACEHOLDER_LOGOS = [
  // 1. Monogram on a circle
  () => (
    <svg viewBox="0 0 120 60" preserveAspectRatio="xMidYMid meet">
      <circle cx="30" cy="30" r="20" fill="var(--ink)"/>
      <text x="30" y="38" textAnchor="middle" fontSize="22" fontWeight="600"
            fontFamily="Poppins, serif" fill="var(--white)">S</text>
      <text x="58" y="35" fontSize="13" fontWeight="500"
            fontFamily="Poppins, sans-serif" fill="var(--ink)" letterSpacing="0.08em">STRIDE</text>
    </svg>
  ),
  // 2. Wordmark with subtle accent
  () => (
    <svg viewBox="0 0 140 60" preserveAspectRatio="xMidYMid meet">
      <text x="0" y="38" fontSize="22" fontWeight="700"
            fontFamily="Poppins, sans-serif" fill="var(--ink)" letterSpacing="-0.02em">AXION</text>
      <circle cx="106" cy="30" r="3" fill="var(--ink)"/>
    </svg>
  ),
  // 3. Two-letter monogram with degree mark
  () => (
    <svg viewBox="0 0 120 60" preserveAspectRatio="xMidYMid meet">
      <text x="60" y="40" textAnchor="middle" fontSize="26" fontWeight="600"
            fontFamily="Poppins, serif" fill="var(--ink)" letterSpacing="-0.02em">K°</text>
      <line x1="40" y1="48" x2="80" y2="48" stroke="var(--ink)" strokeWidth="1"/>
    </svg>
  ),
  // 4. Geometric mark + serif text
  () => (
    <svg viewBox="0 0 140 60" preserveAspectRatio="xMidYMid meet">
      <rect x="10" y="18" width="22" height="22" fill="none" stroke="var(--ink)" strokeWidth="2"/>
      <rect x="16" y="24" width="10" height="10" fill="var(--ink)"/>
      <text x="42" y="36" fontSize="20" fontWeight="500"
            fontFamily="Poppins, serif" fontStyle="italic" fill="var(--ink)">Lumen</text>
    </svg>
  ),
  // 5. All-caps acronym
  () => (
    <svg viewBox="0 0 120 60" preserveAspectRatio="xMidYMid meet">
      <text x="60" y="34" textAnchor="middle" fontSize="20" fontWeight="700"
            fontFamily="Poppins, sans-serif" fill="var(--ink)" letterSpacing="0.16em">MTRX</text>
      <text x="60" y="48" textAnchor="middle" fontSize="8"
            fontFamily="Roboto Mono, monospace" fill="var(--ink-muted)" letterSpacing="0.16em">SYSTEMS</text>
    </svg>
  ),
  // 6. Icon + text (penguin-style)
  () => (
    <svg viewBox="0 0 140 60" preserveAspectRatio="xMidYMid meet">
      <ellipse cx="22" cy="30" rx="11" ry="15" fill="none" stroke="var(--ink)" strokeWidth="1.5"/>
      <circle cx="22" cy="22" r="2" fill="var(--ink)"/>
      <path d="M22 30 L 22 38" stroke="var(--ink)" strokeWidth="1.5"/>
      <text x="42" y="35" fontSize="13" fontWeight="500"
            fontFamily="Poppins, sans-serif" fill="var(--ink)" letterSpacing="0.05em">NORTHWING</text>
    </svg>
  ),
  // 7. Script-style placeholder
  () => (
    <svg viewBox="0 0 160 60" preserveAspectRatio="xMidYMid meet">
      <text x="80" y="32" textAnchor="middle" fontSize="22" fontWeight="500"
            fontFamily="Poppins, serif" fontStyle="italic" fill="var(--ink)" letterSpacing="-0.01em">Polaris</text>
      <text x="80" y="48" textAnchor="middle" fontSize="9" fontWeight="600"
            fontFamily="Poppins, sans-serif" fill="var(--ink)" letterSpacing="0.18em">RESEARCH GROUP</text>
    </svg>
  ),
  // 8. Bracketed sans-serif
  () => (
    <svg viewBox="0 0 140 60" preserveAspectRatio="xMidYMid meet">
      <text x="14" y="38" fontSize="22" fontWeight="600"
            fontFamily="Poppins, sans-serif" fill="var(--ink)" letterSpacing="-0.01em">⟨ HORIZON ⟩</text>
    </svg>
  ),
];

function ClientLogos() {
  return (
    <section id="trust" className="section section--tight client-section" data-screen-label="02 Working with">
      <div className="container">
        <Reveal className="client-head">
          <span className="eyebrow"><span className="dot"></span>Working with</span>
          <span className="client-note">
            <span className="client-note-mark"/>
            Logos shown are placeholders
          </span>
        </Reveal>

        {/* Marquee with subtle fade edges */}
        <div className="client-marquee-wrap">
          <button className="client-arrow client-arrow-left" aria-label="Previous">
            <svg viewBox="0 0 14 14" width="12" height="12" fill="none">
              <path d="M9 2 L3 7 L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="client-marquee">
            <div className="client-track">
              {/* duplicated twice for seamless loop */}
              {[...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS].map((Logo, i) => (
                <div key={i} className="client-cell" aria-hidden={i >= PLACEHOLDER_LOGOS.length}>
                  <Logo />
                </div>
              ))}
            </div>
          </div>

          <button className="client-arrow client-arrow-right" aria-label="Next">
            <svg viewBox="0 0 14 14" width="12" height="12" fill="none">
              <path d="M5 2 L11 7 L5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot row echoes the AIHLPR motif */}
        <div className="client-dots">
          <span className="cd c1"/>
          <span className="cd c2"/>
          <span className="cd c3"/>
          <span className="cd c4"/>
          <span className="cd c5"/>
        </div>
      </div>

      <style>{`
        .client-section {
          padding-top: clamp(56px, 7vw, 88px);
          padding-bottom: clamp(56px, 7vw, 88px);
          border-bottom: 1px solid var(--hairline);
          position: relative;
        }
        .client-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(32px, 4vw, 48px);
          gap: 16px;
          flex-wrap: wrap;
        }
        .client-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }
        .client-note-mark {
          width: 5px; height: 5px;
          border-radius: 999px;
          background: var(--ink-muted);
          opacity: 0.6;
        }

        .client-marquee-wrap {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .client-arrow {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid var(--hairline-strong);
          background: var(--white);
          color: var(--ink-soft);
          display: grid;
          place-items: center;
          cursor: default;
          transition: color 200ms var(--ease), border-color 200ms var(--ease),
                      transform 240ms var(--ease);
        }
        .client-arrow:hover {
          color: var(--ink);
          border-color: var(--ink);
        }
        .client-arrow-left:hover { transform: translateX(-2px); }
        .client-arrow-right:hover { transform: translateX(2px); }

        .client-marquee {
          flex: 1;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .client-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: client-scroll 42s linear infinite;
        }
        .client-marquee:hover .client-track {
          animation-play-state: paused;
        }
        @keyframes client-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .client-cell {
          width: 200px;
          height: 80px;
          padding: 0 12px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          filter: grayscale(1);
          opacity: 0.55;
          transition: opacity 240ms var(--ease), filter 240ms var(--ease);
        }
        .client-cell:hover {
          opacity: 1;
          filter: grayscale(0);
        }
        .client-cell svg {
          max-width: 100%;
          max-height: 100%;
          display: block;
        }

        .client-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding-top: 8px;
        }
        .cd {
          width: 6px; height: 6px;
          border-radius: 999px;
          opacity: 0.4;
        }
        .cd.c1 { background: var(--pink-warm); opacity: 1; }
        .cd.c2 { background: var(--magenta-bridge); opacity: 0.8; }
        .cd.c3 { background: var(--purple-friendly); opacity: 0.6; }
        .cd.c4 { background: var(--blue-sky); opacity: 0.4; }
        .cd.c5 { background: var(--blue-trust); opacity: 0.3; }

        @media (prefers-reduced-motion: reduce) {
          .client-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

window.ClientLogos = ClientLogos;
