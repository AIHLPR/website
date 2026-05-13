/* global React, Reveal */

/* -------------------------------------------------------------
   08 — Tools & technology
   Security row first, no automation row. Model-agnostic message.
   ------------------------------------------------------------- */

function ToolsTech() {
  const rows = [
    {
      label: "Security posture",
      note: "What the data and the regulation demand.",
      badges: ["Access control", "Audit logs", "Data boundaries", "Encryption", "Human review", "Approval flows"],
      lead: true,
    },
    {
      label: "Reasoning layer",
      note: "Closed, open, or fine-tuned. Based on data sensitivity and the precision required.",
      badges: ["Frontier models", "Open-source LLMs", "Fine-tuned variants", "Hybrid approaches"],
    },
    {
      label: "Vision & ML",
      note: "Custom models when precision matters more than speed of deployment.",
      badges: ["Detection", "Classification", "Segmentation", "Custom architectures"],
    },
    {
      label: "Data & retrieval",
      note: "Where knowledge lives shapes how agents reach it.",
      badges: ["Relational databases", "Vector stores", "Embedding pipelines", "Retrieval design"],
    },
    {
      label: "Deployment",
      note: "Cloud-flexible. We build for where your systems already live.",
      badges: ["AWS", "Azure", "GCP", "On-prem", "Hybrid"],
    },
    {
      label: "Integration",
      note: "The system has to live inside your operating reality.",
      badges: ["ERP", "CRM", "Workspace tools", "Custom APIs", "Internal systems"],
    },
  ];

  return (
    <section id="tools" className="section section--tight" data-screen-label="08 Tools & technology">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>How we choose the stack</span>
          <span className="eyebrow" style={{ color: "var(--ink-soft)" }}>
            The stack follows the use case. Here's how we decide.
          </span>
        </Reveal>

        <div className="tools-table">
          {rows.map((r, i) => (
            <Reveal key={r.label} delay={i * 40} className={`tools-row ${r.lead ? "is-lead" : ""}`}>
              <div className="tools-row-label">
                {r.lead && <span className="tools-row-mark"/>}
                <span>{r.label}</span>
              </div>
              <div className="tools-row-body">
                <p className="tools-row-note">{r.note}</p>
                <div className="tools-row-badges">
                  {r.badges.map((b) => (
                    <span key={b} className="badge">{b}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .tools-table {
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
        }
        .tools-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 32px;
          padding: 24px 0;
          border-top: 1px solid var(--hairline);
          align-items: flex-start;
        }
        .tools-row:first-child { border-top: 0; }
        @media (max-width: 720px) {
          .tools-row { grid-template-columns: 1fr; gap: 12px; }
        }
        .tools-row-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 15px;
          letter-spacing: -0.005em;
          color: var(--ink);
          padding-top: 2px;
        }
        .tools-row.is-lead .tools-row-label { color: var(--ink); }
        .tools-row-mark {
          width: 7px; height: 7px;
          border-radius: 999px;
          background: var(--accent);
        }
        .tools-row-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .tools-row-note {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 64ch;
          margin: 0;
        }
        .tools-row-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          height: 30px;
          padding: 0 12px;
          border: 1px solid var(--hairline-strong);
          border-radius: 999px;
          font-size: 13px;
          color: var(--ink);
          background: var(--white);
          transition: border-color 200ms var(--ease), background 200ms var(--ease);
        }
        .tools-row.is-lead .badge {
          background: var(--surface);
          border-color: var(--hairline);
        }
        .badge:hover { border-color: var(--ink); }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
   09 — Team
   Brinda + 2 placeholders. Portrait cards.
   ------------------------------------------------------------- */

function PortraitPlaceholder({ initials, tone }) {
  // A styled placeholder portrait — soft pattern + initials.
  const palette = {
    pink: { bg: "#F6E8EE", dot: "var(--pink-warm)" },
    blue: { bg: "#E8F0F9", dot: "var(--blue-trust)" },
    purple: { bg: "#EFE8F4", dot: "var(--purple-friendly)" },
  }[tone] || { bg: "var(--surface)", dot: "var(--ink)" };

  return (
    <div className="portrait-ph">
      <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
        <rect width="200" height="240" fill={palette.bg}/>
        {/* Subtle dot pattern */}
        {[...Array(8)].map((_, i) => (
          <circle key={i}
                  cx={20 + (i * 24) % 200}
                  cy={30 + Math.floor((i * 24) / 200) * 40}
                  r="1"
                  fill="var(--ink)"
                  opacity="0.08"/>
        ))}
        {/* Soft circular form suggesting a portrait silhouette */}
        <circle cx="100" cy="170" r="80" fill="none" stroke="var(--ink)" strokeWidth="0.6" opacity="0.12"/>
        <circle cx="100" cy="100" r="36" fill="none" stroke="var(--ink)" strokeWidth="0.6" opacity="0.18"/>
        {/* Single accent dot — references the logo motif */}
        <circle cx="160" cy="40" r="5" fill={palette.dot}/>
        {/* Initials */}
        <text x="100" y="178" textAnchor="middle"
              fontFamily="Poppins, system-ui" fontSize="56" fontWeight="600"
              fill="var(--ink)" opacity="0.85"
              letterSpacing="-0.02em">
          {initials}
        </text>
      </svg>
      <span className="portrait-ph-note">Photo placeholder</span>
    </div>
  );
}

function Team() {
  const team = [
    {
      initials: "BR",
      tone: "pink",
      name: "Brinda",
      role: "Founder · AI engineering & operations",
      bio: "Builds vision models and operational systems. Background across product, design, and applied ML.",
    },
    {
      initials: "\u00b7",
      tone: "blue",
      name: "Open seat",
      role: "ML engineer",
      bio: "Joining the practice. Focus on training, evaluation, and model deployment.",
      placeholder: true,
    },
    {
      initials: "\u00b7",
      tone: "purple",
      name: "Open seat",
      role: "Governance & adoption",
      bio: "Joining the practice. Focus on policy, review design, and adoption frameworks.",
      placeholder: true,
    },
  ];

  return (
    <section id="team" className="section" data-screen-label="09 Team">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>Team</span>
          <span className="eyebrow" style={{ color: "var(--ink-soft)" }}>A small practice. Named, accountable, present in every engagement.</span>
        </Reveal>

        <div className="team-grid">
          {team.map((p, i) => (
            <Reveal key={i} delay={i * 100} className={`team-card ${p.placeholder ? "is-placeholder" : ""}`}>
              <div className="team-card-portrait">
                <PortraitPlaceholder initials={p.initials} tone={p.tone}/>
              </div>
              <div className="team-card-meta">
                <h3>{p.name}</h3>
                <span className="team-card-role">{p.role}</span>
                <p>{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="team-network">
          <p>
            AIHLPR works with a network of specialised collaborators on data engineering,
            infrastructure, and domain-specific build work. Composition depends on the engagement.
          </p>
        </Reveal>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) { .team-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .team-grid { grid-template-columns: 1fr; } }

        .team-card {
          border: 1px solid var(--hairline);
          border-radius: 12px;
          overflow: hidden;
          background: var(--white);
          display: flex;
          flex-direction: column;
        }
        .team-card-portrait {
          aspect-ratio: 5 / 6;
          background: var(--surface);
          position: relative;
        }
        .portrait-ph {
          position: relative;
          width: 100%; height: 100%;
        }
        .portrait-ph-note {
          position: absolute;
          left: 14px; bottom: 12px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
          padding: 4px 8px;
          background: rgba(255,255,255,0.8);
          border-radius: 4px;
        }

        .team-card-meta {
          padding: 24px 24px 28px;
        }
        .team-card h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }
        .team-card-role {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 12px;
        }
        .team-card p {
          color: var(--ink-soft);
          font-size: 14px;
          line-height: 1.6;
          max-width: 36ch;
        }
        .team-card.is-placeholder .team-card-meta {
          opacity: 0.78;
        }

        .team-network {
          margin-top: clamp(32px, 4vw, 48px);
          padding-top: 24px;
          border-top: 1px solid var(--hairline);
          max-width: 60ch;
        }
        .team-network p {
          color: var(--ink-soft);
          font-size: 15px;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
   10 — Insights
   Three article cards. Placeholders for now.
   ------------------------------------------------------------- */

/* Illustration concepts per note */

/* 01 — Agent chain with a question mark overlay */
function NoteIllustration01() {
  return (
    <svg viewBox="0 0 280 150" className="insight-illust" preserveAspectRatio="xMidYMid meet">
      {/* Chain of agent circles connected */}
      <g>
        <circle cx="40" cy="95" r="12" fill="var(--white)" stroke="var(--ink)" strokeWidth="1"/>
        <text x="40" y="99" textAnchor="middle" fontSize="9" fontFamily="Roboto Mono"
              letterSpacing="0.04em" fill="var(--ink)" fontWeight="500">A1</text>
        <circle cx="95" cy="95" r="12" fill="var(--white)" stroke="var(--ink)" strokeWidth="1"/>
        <text x="95" y="99" textAnchor="middle" fontSize="9" fontFamily="Roboto Mono"
              letterSpacing="0.04em" fill="var(--ink)" fontWeight="500">A2</text>
        <circle cx="150" cy="95" r="12" fill="var(--white)" stroke="var(--ink)" strokeWidth="1"/>
        <text x="150" y="99" textAnchor="middle" fontSize="9" fontFamily="Roboto Mono"
              letterSpacing="0.04em" fill="var(--ink)" fontWeight="500">A3</text>
        <circle cx="205" cy="95" r="12" fill="var(--white)" stroke="var(--ink)" strokeWidth="1"/>
        <text x="205" y="99" textAnchor="middle" fontSize="9" fontFamily="Roboto Mono"
              letterSpacing="0.04em" fill="var(--ink)" fontWeight="500">A4</text>
      </g>
      <g stroke="var(--hairline-strong)" strokeWidth="1" fill="none">
        <line x1="52" y1="95" x2="83" y2="95"/>
        <line x1="107" y1="95" x2="138" y2="95"/>
        <line x1="162" y1="95" x2="193" y2="95"/>
      </g>

      {/* Large question mark overlay — the strategic uncertainty */}
      <text x="230" y="58" fontSize="64" fontFamily="Poppins, serif"
            fill="var(--accent)" fontWeight="600" opacity="0.85">?</text>
      <circle cx="245" cy="35" r="22" fill="none" stroke="var(--accent)"
              strokeWidth="1" strokeDasharray="3 4" opacity="0.45"/>
    </svg>
  );
}

/* 02 — Review-loop diamond: ACCESS / AUDIT / REVIEW / OVERRIDE */
function NoteIllustration02() {
  return (
    <svg viewBox="0 0 280 150" className="insight-illust" preserveAspectRatio="xMidYMid meet">
      {/* Connecting diamond lines */}
      <g stroke="var(--hairline-strong)" strokeWidth="1" fill="none">
        <path d="M140 30 L 220 75 L 140 120 L 60 75 Z"/>
      </g>

      {/* Nodes at each corner */}
      <g>
        {/* Top — ACCESS */}
        <circle cx="140" cy="30" r="5" fill="var(--ink)"/>
        <text x="140" y="18" textAnchor="middle" fontSize="8.5" fontFamily="Roboto Mono"
              letterSpacing="0.1em" fill="var(--ink-muted)" fontWeight="500">ACCESS</text>

        {/* Right — AUDIT */}
        <circle cx="220" cy="75" r="5" fill="var(--ink)"/>
        <text x="232" y="78" fontSize="8.5" fontFamily="Roboto Mono"
              letterSpacing="0.1em" fill="var(--ink-muted)" fontWeight="500">AUDIT</text>

        {/* Bottom — OVERRIDE */}
        <circle cx="140" cy="120" r="5" fill="var(--ink)"/>
        <text x="140" y="139" textAnchor="middle" fontSize="8.5" fontFamily="Roboto Mono"
              letterSpacing="0.1em" fill="var(--ink-muted)" fontWeight="500">OVERRIDE</text>

        {/* Left — REVIEW (highlighted) */}
        <circle cx="60" cy="75" r="7" fill="var(--accent)"/>
        <circle cx="60" cy="75" r="13" fill="none" stroke="var(--accent)"
                strokeWidth="1" opacity="0.35"/>
        <text x="48" y="78" textAnchor="end" fontSize="8.5" fontFamily="Roboto Mono"
              letterSpacing="0.1em" fill="var(--ink)" fontWeight="500">REVIEW</text>
      </g>

      {/* Center marker */}
      <circle cx="140" cy="75" r="2" fill="var(--hairline-strong)"/>
    </svg>
  );
}

/* 03 — Scattered dots → structured grid */
function NoteIllustration03() {
  return (
    <svg viewBox="0 0 280 150" className="insight-illust" preserveAspectRatio="xMidYMid meet">
      {/* LEFT side — scattered chaos */}
      <g>
        {[
          [22, 30], [48, 52], [38, 88], [60, 30], [80, 70],
          [25, 110], [75, 110], [62, 95], [95, 45], [40, 70],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="var(--ink)" opacity="0.65"/>
        ))}
        {/* A few stray fragments */}
        <g stroke="var(--ink-muted)" strokeWidth="0.8" fill="none" opacity="0.4">
          <line x1="22" y1="30" x2="48" y2="52"/>
          <line x1="80" y1="70" x2="62" y2="95"/>
          <line x1="40" y1="70" x2="75" y2="110"/>
        </g>
        <text x="55" y="140" textAnchor="middle" fontSize="8.5" fontFamily="Roboto Mono"
              letterSpacing="0.1em" fill="var(--ink-muted)" fontWeight="500">EXPERIMENT</text>
      </g>

      {/* Arrow */}
      <g stroke="var(--ink)" strokeWidth="1.2" fill="none">
        <line x1="120" y1="75" x2="160" y2="75"/>
        <polyline points="154,69 160,75 154,81"/>
      </g>

      {/* RIGHT side — ordered grid */}
      <g transform="translate(180, 0)">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <circle key={`${row}-${col}`}
                    cx={12 + col * 30} cy={36 + row * 30}
                    r="3" fill="var(--ink)"/>
          ))
        )}
        {/* Grid connections — only some lit in accent */}
        <g stroke="var(--accent)" strokeWidth="1.2" fill="none">
          <line x1="12" y1="36" x2="42" y2="36"/>
          <line x1="42" y1="36" x2="72" y2="36"/>
          <line x1="42" y1="36" x2="42" y2="66"/>
          <line x1="42" y1="66" x2="42" y2="96"/>
          <line x1="42" y1="96" x2="72" y2="96"/>
        </g>
        <text x="42" y="140" textAnchor="middle" fontSize="8.5" fontFamily="Roboto Mono"
              letterSpacing="0.1em" fill="var(--ink)" fontWeight="500">OPERATING MODEL</text>
      </g>
    </svg>
  );
}

function Insights() {
  const notes = [
    {
      n: "01",
      tag: "Manifesto",
      title: "AI agents are not the strategy",
      excerpt: "Why organisations need workflow design, governance, and adoption planning before deploying agents.",
      Illust: NoteIllustration01,
      status: "coming",
    },
    {
      n: "02",
      tag: "Practice",
      title: "Human-in-the-loop is not a compromise",
      excerpt: "How review points, approvals, and escalation paths make AI systems usable in real teams.",
      Illust: NoteIllustration02,
      status: "coming",
    },
    {
      n: "03",
      tag: "Framework",
      title: "From AI experiment to operating system",
      excerpt: "A practical framework for moving from scattered AI tools to governed AI workflows.",
      Illust: NoteIllustration03,
      status: "coming",
    },
  ];

  return (
    <section id="thinking" className="section" data-screen-label="10 Insights">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>Insights</span>
          <a className="thinking-all" href="#" onClick={(e) => e.preventDefault()}>
            All notes <span>→</span>
          </a>
        </Reveal>

        <div className="insights-grid">
          {notes.map((n, i) => (
            <Reveal key={n.title} delay={i * 80}>
              <a className="insight-card" href="#" onClick={(e) => e.preventDefault()}>
                <div className="insight-illust-frame">
                  <n.Illust/>
                </div>
                <div className="insight-card-head">
                  <span className="insight-num">{n.n}</span>
                  <span className="insight-tag">{n.tag}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                {n.status === "coming" ? (
                  <span className="insight-cta is-coming">
                    <span className="insight-cta-dot"/> Coming soon
                  </span>
                ) : (
                  <span className="insight-cta">Read note <span>→</span></span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--hairline);
          border: 1px solid var(--hairline);
          border-radius: 12px;
          overflow: hidden;
        }
        @media (max-width: 900px) { .insights-grid { grid-template-columns: 1fr; } }

        .insight-card {
          background: var(--white);
          padding: clamp(20px, 2.4vw, 28px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-height: 360px;
          transition: background 240ms var(--ease);
          color: var(--ink);
        }
        .insight-card:hover { background: var(--surface-2); }
        .insight-illust-frame {
          height: 130px;
          background: var(--surface-2);
          border: 1px solid var(--hairline);
          border-radius: 6px;
          padding: 10px;
          display: grid;
          place-items: center;
          margin-bottom: 4px;
          transition: background 240ms var(--ease);
        }
        .insight-card:hover .insight-illust-frame { background: var(--white); }
        .insight-illust { width: 100%; height: 100%; display: block; }
        .insight-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .insight-num, .insight-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }
        .insight-tag { color: var(--ink-soft); }
        .insight-card h3 {
          font-size: 20px;
          line-height: 1.3;
          max-width: 22ch;
          transition: color 200ms var(--ease);
        }
        .insight-card:hover h3 { color: var(--accent); }
        .insight-card p {
          color: var(--ink-soft);
          font-size: 14.5px;
          line-height: 1.6;
          flex: 1;
        }
        .insight-cta {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .insight-card:hover .insight-cta { color: var(--accent); }
        .insight-cta.is-coming {
          color: var(--ink-muted);
          opacity: 0.85;
        }
        .insight-card:hover .insight-cta.is-coming { color: var(--ink-muted); }
        .insight-cta-dot {
          width: 6px; height: 6px;
          border-radius: 999px;
          background: var(--hairline-strong);
        }
      `}</style>
    </section>
  );
}

window.ToolsTech = ToolsTech;
window.Team = Team;
window.Insights = Insights;
