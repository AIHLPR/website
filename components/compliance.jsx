/* global React, Reveal */

/* -------------------------------------------------------------
   Compliance
   Replaces the old "What we don't do" section.
   Four items in a horizontal row with hand-styled line-art icons
   matching Section 04's visual language.
   Placed between Selected Work and How We Work.
   ------------------------------------------------------------- */

const ICON_STROKE = "1.4";

function IconShield() {
  return (
    <svg viewBox="0 0 64 64" className="comp-icon" preserveAspectRatio="xMidYMid meet">
      <path d="M32 8 L 52 16 L 52 32 C 52 44, 42 52, 32 56 C 22 52, 12 44, 12 32 L 12 16 Z"
            fill="none" stroke="currentColor" strokeWidth={ICON_STROKE}
            strokeLinejoin="round"/>
      {/* Inner checkmark */}
      <path d="M22 32 L 29 39 L 42 25"
            fill="none" stroke="var(--accent)" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"/>
      {/* Top tick */}
      <line x1="32" y1="8" x2="32" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

function IconRegion() {
  return (
    <svg viewBox="0 0 64 64" className="comp-icon" preserveAspectRatio="xMidYMid meet">
      {/* Globe-ish frame */}
      <circle cx="32" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth={ICON_STROKE}/>
      <ellipse cx="32" cy="30" rx="9" ry="18" fill="none" stroke="currentColor"
               strokeWidth="1" opacity="0.55"/>
      <line x1="14" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      {/* Map pin */}
      <path d="M32 18 C 38 18, 42 22, 42 28 C 42 34, 32 46, 32 46 C 32 46, 22 34, 22 28 C 22 22, 26 18, 32 18 Z"
            fill="var(--white)" stroke="currentColor" strokeWidth={ICON_STROKE}
            strokeLinejoin="round"/>
      <circle cx="32" cy="28" r="3.5" fill="var(--accent)"/>
      {/* Ground line */}
      <line x1="22" y1="54" x2="42" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

function IconAudit() {
  return (
    <svg viewBox="0 0 64 64" className="comp-icon" preserveAspectRatio="xMidYMid meet">
      {/* Document */}
      <path d="M16 10 L 44 10 L 50 16 L 50 54 L 16 54 Z"
            fill="none" stroke="currentColor" strokeWidth={ICON_STROKE}
            strokeLinejoin="round"/>
      {/* Folded corner */}
      <path d="M44 10 L 44 16 L 50 16"
            fill="none" stroke="currentColor" strokeWidth={ICON_STROKE}
            strokeLinejoin="round"/>
      {/* Log lines */}
      <line x1="22" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <line x1="22" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <line x1="22" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <line x1="22" y1="42" x2="38" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      <line x1="22" y1="48" x2="44" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      {/* Accent check on one log entry */}
      <circle cx="18" cy="36" r="1.6" fill="var(--accent)"/>
    </svg>
  );
}

function IconKey() {
  return (
    <svg viewBox="0 0 64 64" className="comp-icon" preserveAspectRatio="xMidYMid meet">
      {/* Key bow */}
      <circle cx="22" cy="32" r="11" fill="none" stroke="currentColor" strokeWidth={ICON_STROKE}/>
      <circle cx="22" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
      {/* Shaft */}
      <line x1="33" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth={ICON_STROKE}/>
      {/* Teeth */}
      <line x1="46" y1="32" x2="46" y2="40" stroke="currentColor" strokeWidth={ICON_STROKE}/>
      <line x1="50" y1="32" x2="50" y2="38" stroke="currentColor" strokeWidth={ICON_STROKE}/>
      {/* Accent privacy dot */}
      <circle cx="22" cy="22" r="2" fill="var(--accent)"/>
    </svg>
  );
}

function Compliance() {
  const items = [
    {
      Icon: IconShield,
      label: "EU AI Act ready",
      body: "Risk-classified from day one. Documentation, transparency, and human oversight built in, not added later.",
    },
    {
      Icon: IconRegion,
      label: "Data stays in your region",
      body: "EU-hosted by default. We can deploy inside your cloud tenancy (AWS, Azure, GCP) or on-prem. Nothing leaves your environment.",
    },
    {
      Icon: IconAudit,
      label: "Audit trail, end to end",
      body: "Every model decision, every human override, every data access. Logged, reviewable, and exportable.",
    },
    {
      Icon: IconKey,
      label: "GDPR-ready when it applies",
      body: "We minimise data collection by default. When personal data is involved, we work with your DPO and run DPIAs as needed.",
    },
  ];

  return (
    <section id="compliance" className="section section--editorial compliance" data-screen-label="Compliance">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>Compliance</span>
          <span className="eyebrow comp-substrap">The questions IT and legal ask first.</span>
        </Reveal>

        <div className="comp-grid">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100} className="comp-item">
              <div className="comp-icon-frame">
                <it.Icon/>
              </div>
              <h3>{it.label}</h3>
              <p>{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .compliance .comp-substrap {
          color: var(--ink-soft);
          font-style: italic;
        }

        .comp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--hairline);
          border: 1px solid var(--hairline);
          border-radius: 12px;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .comp-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .comp-grid { grid-template-columns: 1fr; }
        }

        .comp-item {
          background: var(--white);
          padding: clamp(28px, 3vw, 36px) clamp(22px, 2.5vw, 28px);
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-height: 280px;
          transition: background 240ms var(--ease);
          color: var(--ink);
        }
        .comp-item:hover { background: var(--surface-2); }

        .comp-icon-frame {
          width: 72px;
          height: 72px;
          color: var(--ink);
          margin-bottom: 4px;
        }
        .comp-icon {
          width: 100%;
          height: 100%;
          display: block;
        }

        .comp-item h3 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(17px, 1.5vw, 19px);
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0;
          max-width: 22ch;
        }
        .comp-item p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 40ch;
          margin: 0;
          flex: 1;
        }
      `}</style>
    </section>
  );
}

window.Compliance = Compliance;
