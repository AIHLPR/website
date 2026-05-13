/* global React, Reveal */

/* -------------------------------------------------------------
   02 / Working with — client logo strip.
   Auto-scrolling marquee, pauses on hover.
   ------------------------------------------------------------- */

const CLIENT_LOGOS = [
  { src: "assets/clients/penguin.png", alt: "Penguin" },
  { src: "assets/clients/sphere.png", alt: "Sphere" },
  { src: "assets/clients/erasmus-sport.png", alt: "Erasmus Sport" },
  { src: "assets/clients/undp.png", alt: "UNDP" },
  { src: "assets/clients/ambis.png", alt: "AMBIS" },
  { src: "assets/clients/loreal.png", alt: "L'Oréal Professionnel" },
];

function ClientLogos() {
  return (
    <section id="trust" className="section section--tight client-section" data-screen-label="02 Working with">
      <div className="container">
        <Reveal className="client-head">
          <span className="eyebrow"><span className="dot"></span>Working with</span>
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
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                <div key={i} className="client-cell" aria-hidden={i >= CLIENT_LOGOS.length}>
                  <img src={logo.src} alt={logo.alt} />
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
          mask-image: linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
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
          width: 220px;
          height: 110px;
          padding: 0 28px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          filter: grayscale(1);
          opacity: 0.6;
          transition: opacity 240ms var(--ease), filter 240ms var(--ease);
        }
        .client-cell:hover {
          opacity: 1;
          filter: grayscale(0);
        }
        .client-cell svg,
        .client-cell img {
          max-width: 100%;
          max-height: 64px;
          width: auto;
          height: auto;
          object-fit: contain;
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
