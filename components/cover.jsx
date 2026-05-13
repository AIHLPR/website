/* global React, Reveal */

/* -------------------------------------------------------------
   04 / What we cover
   Six tiles. Each tile has a developed, brand-styled visual that
   reads at a glance and animates in on viewport entry.

   Visuals share: hairline strokes, mono labels, accent color
   used sparingly, no emoji, no photos, no slop.
   ------------------------------------------------------------- */

/* Shared style for label text inside visuals */
const LBL = {
  fontFamily: "Roboto Mono, ui-monospace, monospace",
  letterSpacing: "0.08em",
};

/* 01 — Strategy
   Decision tree: one root, three branches. Only "Build" lit.
*/
function StrategyVis() {
  return (
    <svg viewBox="0 0 280 180" className="tile-vis" preserveAspectRatio="xMidYMid meet">
      {/* Root */}
      <g className="strategy-root">
        <text x="140" y="22" textAnchor="middle"
              fontSize="9" fill="var(--ink-muted)" {...LBL}>USE CASE</text>
        <circle cx="140" cy="38" r="5" fill="var(--ink)"/>
      </g>

      {/* Branch lines */}
      <g className="strategy-branches" stroke="var(--hairline-strong)" strokeWidth="1" fill="none">
        <path d="M140 44 L 60 110"/>
        <path d="M140 44 L 140 110"/>
        <path d="M140 44 L 220 110"/>
      </g>

      {/* The active path overlay */}
      <path d="M140 44 L 140 110"
            stroke="var(--accent)" strokeWidth="1.5" fill="none"
            className="strategy-active-path"/>

      {/* Leaves */}
      <g>
        {/* Skip */}
        <circle cx="60" cy="118" r="4" fill="var(--white)" stroke="var(--hairline-strong)" strokeWidth="1"/>
        <text x="60" y="145" textAnchor="middle" fontSize="10"
              fill="var(--ink-muted)" {...LBL}>SKIP</text>

        {/* Build (active) */}
        <circle cx="140" cy="118" r="5" fill="var(--accent)" className="strategy-active-leaf"/>
        <text x="140" y="145" textAnchor="middle" fontSize="10"
              fill="var(--ink)" fontWeight="600" {...LBL}>BUILD</text>

        {/* Buy */}
        <circle cx="220" cy="118" r="4" fill="var(--white)" stroke="var(--hairline-strong)" strokeWidth="1"/>
        <text x="220" y="145" textAnchor="middle" fontSize="10"
              fill="var(--ink-muted)" {...LBL}>BUY</text>
      </g>

      {/* Mini confidence row */}
      <g>
        <line x1="50" y1="160" x2="230" y2="160" stroke="var(--hairline)" strokeWidth="1"/>
        <text x="50" y="172" fontSize="9" fill="var(--ink-muted)" {...LBL}>CONFIDENCE</text>
        <line x1="160" y1="167" x2="230" y2="167" stroke="var(--hairline-strong)" strokeWidth="2"/>
        <line x1="160" y1="167" x2="210" y2="167" stroke="var(--accent)" strokeWidth="2"
              className="strategy-confidence"/>
      </g>
    </svg>
  );
}

/* 02 — Vision AI
   Detection-style boxes on abstract scene shapes. Brand accent.
*/
function VisionVis() {
  return (
    <svg viewBox="0 0 280 180" className="tile-vis" preserveAspectRatio="xMidYMid meet">
      {/* Frame */}
      <rect x="8" y="8" width="264" height="164" fill="var(--surface-2)"
            stroke="var(--hairline)" strokeWidth="1" rx="2"/>

      {/* Abstract scene shapes (suggesting products/objects in an image) */}
      <g opacity="0.9">
        {/* Object 1 — squarish */}
        <rect x="36" y="44" width="72" height="68" rx="2"
              fill="var(--ink)" opacity="0.12"/>
        <rect x="42" y="60" width="22" height="44" rx="1" fill="var(--ink)" opacity="0.22"/>
        <circle cx="86" cy="76" r="10" fill="var(--ink)" opacity="0.2"/>

        {/* Object 2 — taller */}
        <rect x="138" y="32" width="56" height="98" rx="2"
              fill="var(--ink)" opacity="0.12"/>
        <rect x="146" y="40" width="40" height="6" fill="var(--ink)" opacity="0.22"/>
        <rect x="146" y="58" width="40" height="6" fill="var(--ink)" opacity="0.18"/>
        <rect x="146" y="76" width="40" height="6" fill="var(--ink)" opacity="0.18"/>

        {/* Object 3 — small */}
        <circle cx="232" cy="76" r="22" fill="var(--ink)" opacity="0.15"/>
      </g>

      {/* Detection boxes */}
      <g fill="none" stroke="var(--accent)" strokeWidth="1.4" className="vision-boxes">
        <rect x="32" y="40" width="80" height="76" className="vbox vbox-1"/>
        <rect x="134" y="28" width="64" height="106" className="vbox vbox-2"/>
        <rect x="210" y="54" width="44" height="44" className="vbox vbox-3"/>
      </g>

      {/* Detection labels */}
      <g className="vision-labels">
        <g className="vlabel vlabel-1">
          <rect x="32" y="28" width="56" height="14" fill="var(--accent)" rx="1"/>
          <text x="36" y="38" fontSize="8.5" fill="var(--white)" {...LBL} fontWeight="500">
            ASSET · 0.94
          </text>
        </g>
        <g className="vlabel vlabel-2">
          <rect x="134" y="16" width="48" height="14" fill="var(--accent)" rx="1"/>
          <text x="138" y="26" fontSize="8.5" fill="var(--white)" {...LBL} fontWeight="500">
            PROD · 0.91
          </text>
        </g>
        <g className="vlabel vlabel-3">
          <rect x="210" y="42" width="40" height="14" fill="var(--accent)" rx="1"/>
          <text x="214" y="52" fontSize="8.5" fill="var(--white)" {...LBL} fontWeight="500">
            ICON · 0.88
          </text>
        </g>
      </g>

      {/* Mono caption */}
      <text x="14" y="166" fontSize="8" fill="var(--ink-muted)" {...LBL}>
        DETECTION · 3 OBJECTS
      </text>
    </svg>
  );
}

/* 03 — Architecture & System Design
   Before / after: tangled spaghetti vs clean horizontal flow.
*/
function ArchitectureVis() {
  return (
    <svg viewBox="0 0 280 180" className="tile-vis" preserveAspectRatio="xMidYMid meet">
      {/* Divider down the middle */}
      <line x1="140" y1="14" x2="140" y2="166" stroke="var(--hairline)" strokeWidth="1" strokeDasharray="2 3"/>

      {/* ----- LEFT: BEFORE (tangled) ----- */}
      <g className="arch-before">
        {/* 6 boxes — scattered positions to suggest disarray */}
        {[
          [28, 30], [80, 26], [50, 64], [98, 76], [30, 110], [82, 116],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="22" height="14" rx="2"
                fill="var(--white)" stroke="var(--hairline-strong)" strokeWidth="1"/>
        ))}

        {/* 8 tangled, crossing lines */}
        <g stroke="var(--ink-muted)" strokeWidth="0.9" fill="none" opacity="0.7">
          <path d="M50 37 C 70 30, 90 60, 110 76"/>
          <path d="M102 33 C 80 50, 90 90, 60 117"/>
          <path d="M72 71 C 90 50, 50 50, 30 37"/>
          <path d="M120 83 C 90 90, 60 100, 30 117"/>
          <path d="M40 117 C 70 90, 100 50, 102 33"/>
          <path d="M92 123 C 60 100, 80 60, 110 33"/>
          <path d="M28 37 C 30 70, 80 80, 102 83"/>
          <path d="M61 71 C 80 90, 90 110, 102 123"/>
        </g>

        {/* Label */}
        <text x="70" y="158" textAnchor="middle" fontSize="9"
              fill="var(--ink-muted)" {...LBL}>BEFORE</text>
      </g>

      {/* ----- RIGHT: AFTER (clean) ----- */}
      <g className="arch-after" transform="translate(160, 0)">
        {/* 6 boxes — aligned in two columns of three */}
        {[
          [12, 24], [70, 24],
          [12, 64], [70, 64],
          [12, 104], [70, 104],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="22" height="14" rx="2"
                fill="var(--white)" stroke="var(--ink)" strokeWidth="1"/>
        ))}

        {/* 5 clean horizontal-ish lines */}
        <g fill="none" stroke="var(--accent)" strokeWidth="1.4" className="arch-after-lines">
          <line x1="34" y1="31" x2="70" y2="31" className="al al-1"/>
          <line x1="34" y1="71" x2="70" y2="71" className="al al-2"/>
          <line x1="34" y1="111" x2="70" y2="111" className="al al-3"/>
          <line x1="23" y1="38" x2="23" y2="64" className="al al-4"/>
          <line x1="81" y1="78" x2="81" y2="104" className="al al-5"/>
        </g>

        {/* Label */}
        <text x="55" y="158" textAnchor="middle" fontSize="9"
              fill="var(--ink)" {...LBL} fontWeight="500">AFTER</text>
      </g>

      {/* Bottom caption */}
      <text x="140" y="176" textAnchor="middle" fontSize="8"
            fill="var(--ink-muted)" {...LBL}>UNTANGLING, THEN BUILDING</text>
    </svg>
  );
}

/* 04 — Agents & Workflow Coordination
   Three agent nodes + human review. Active route to human.
*/
function AgentsVis() {
  return (
    <svg viewBox="0 0 280 180" className="tile-vis" preserveAspectRatio="xMidYMid meet">
      {/* Three agents arranged */}
      <g className="agents-nodes">
        {/* Agent 1 */}
        <g transform="translate(34, 50)">
          <circle r="18" fill="var(--white)" stroke="var(--hairline-strong)" strokeWidth="1"/>
          <text textAnchor="middle" y="3" fontSize="10" fontWeight="600"
                fill="var(--ink)" {...LBL}>A1</text>
          <text textAnchor="middle" y="32" fontSize="8.5"
                fill="var(--ink-muted)" {...LBL}>ROUTE</text>
        </g>

        {/* Agent 2 */}
        <g transform="translate(110, 50)">
          <circle r="18" fill="var(--white)" stroke="var(--hairline-strong)" strokeWidth="1"/>
          <text textAnchor="middle" y="3" fontSize="10" fontWeight="600"
                fill="var(--ink)" {...LBL}>A2</text>
          <text textAnchor="middle" y="32" fontSize="8.5"
                fill="var(--ink-muted)" {...LBL}>ANALYSE</text>
        </g>

        {/* Agent 3 */}
        <g transform="translate(186, 50)">
          <circle r="18" fill="var(--white)" stroke="var(--hairline-strong)" strokeWidth="1"/>
          <text textAnchor="middle" y="3" fontSize="10" fontWeight="600"
                fill="var(--ink)" {...LBL}>A3</text>
          <text textAnchor="middle" y="32" fontSize="8.5"
                fill="var(--ink-muted)" {...LBL}>DRAFT</text>
        </g>

        {/* Human review */}
        <g transform="translate(248, 50)" className="agents-human">
          <circle r="18" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1"/>
          <text textAnchor="middle" y="3" fontSize="10" fontWeight="600"
                fill="var(--white)" {...LBL}>H</text>
          <text textAnchor="middle" y="32" fontSize="8.5"
                fill="var(--ink)" {...LBL} fontWeight="500">REVIEW</text>
        </g>
      </g>

      {/* Connectors */}
      <g stroke="var(--hairline-strong)" strokeWidth="1" fill="none">
        <line x1="52" y1="50" x2="92" y2="50"/>
        <line x1="128" y1="50" x2="168" y2="50"/>
        <line x1="204" y1="50" x2="230" y2="50"/>
      </g>

      {/* Active route to human — accent dashed line */}
      <path d="M204 50 L 230 50"
            stroke="var(--accent)" strokeWidth="1.6" fill="none"
            className="agents-active-route"/>

      {/* Boundary frame at bottom */}
      <g>
        <rect x="14" y="118" width="252" height="48" rx="4" fill="var(--surface-2)"
              stroke="var(--hairline)" strokeWidth="1"/>
        <text x="22" y="134" fontSize="8.5" fill="var(--ink-muted)" {...LBL}>POLICY</text>
        <g fontSize="9" fill="var(--ink)" {...LBL}>
          <text x="22" y="152">Escalate · Approve · Override</text>
        </g>
      </g>
    </svg>
  );
}

/* 05 — LLM Integration & Knowledge Systems
   Knowledge graph fragment with traced retrieval path.
*/
function LLMVis() {
  return (
    <svg viewBox="0 0 280 180" className="tile-vis" preserveAspectRatio="xMidYMid meet">
      {/* Background dots — knowledge cloud */}
      <g opacity="0.4">
        {[
          [40, 30], [70, 60], [60, 110], [100, 130], [140, 45],
          [180, 35], [220, 80], [240, 130], [200, 130], [30, 90],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.6" fill="var(--ink)"/>
        ))}
      </g>

      {/* Connecting lines (background graph) */}
      <g stroke="var(--hairline)" strokeWidth="1" fill="none">
        <line x1="40" y1="30" x2="70" y2="60"/>
        <line x1="70" y1="60" x2="60" y2="110"/>
        <line x1="60" y1="110" x2="100" y2="130"/>
        <line x1="140" y1="45" x2="180" y2="35"/>
        <line x1="180" y1="35" x2="220" y2="80"/>
        <line x1="220" y1="80" x2="240" y2="130"/>
        <line x1="200" y1="130" x2="240" y2="130"/>
      </g>

      {/* Query node */}
      <g transform="translate(22, 90)" className="llm-q">
        <rect x="-22" y="-12" width="44" height="24" rx="4"
              fill="var(--ink)" stroke="var(--ink)"/>
        <text textAnchor="middle" y="3" fontSize="10" fontWeight="600"
              fill="var(--white)" {...LBL}>Q</text>
      </g>

      {/* Retrieve node */}
      <g transform="translate(115, 78)" className="llm-retrieve">
        <circle r="14" fill="var(--white)" stroke="var(--accent)" strokeWidth="1.4"/>
        <text textAnchor="middle" y="3" fontSize="9" fontWeight="500"
              fill="var(--ink)" {...LBL}>RTRV</text>
      </g>

      {/* Doc nodes */}
      <g className="llm-docs">
        <g transform="translate(170, 50)">
          <rect x="-16" y="-12" width="32" height="24" rx="3" fill="var(--white)"
                stroke="var(--hairline-strong)" strokeWidth="1"/>
          <line x1="-10" y1="-4" x2="6" y2="-4" stroke="var(--hairline-strong)" strokeWidth="1"/>
          <line x1="-10" y1="0" x2="4" y2="0" stroke="var(--hairline-strong)" strokeWidth="1"/>
          <line x1="-10" y1="4" x2="8" y2="4" stroke="var(--hairline-strong)" strokeWidth="1"/>
        </g>
        <g transform="translate(185, 100)">
          <rect x="-16" y="-12" width="32" height="24" rx="3" fill="var(--white)"
                stroke="var(--hairline-strong)" strokeWidth="1"/>
          <line x1="-10" y1="-4" x2="6" y2="-4" stroke="var(--hairline-strong)" strokeWidth="1"/>
          <line x1="-10" y1="0" x2="4" y2="0" stroke="var(--hairline-strong)" strokeWidth="1"/>
          <line x1="-10" y1="4" x2="8" y2="4" stroke="var(--hairline-strong)" strokeWidth="1"/>
        </g>
      </g>

      {/* Answer node */}
      <g transform="translate(248, 80)" className="llm-answer">
        <rect x="-22" y="-12" width="44" height="24" rx="4"
              fill="var(--accent)" stroke="var(--accent)"/>
        <text textAnchor="middle" y="3" fontSize="9" fontWeight="600"
              fill="var(--white)" {...LBL}>ANS</text>
      </g>

      {/* Active retrieval path */}
      <path d="M44 90 C 70 90, 90 80, 101 78"
            stroke="var(--accent)" strokeWidth="1.4" fill="none"
            className="llm-path llm-path-1"/>
      <path d="M129 78 C 150 70, 158 56, 170 56"
            stroke="var(--accent)" strokeWidth="1.4" fill="none"
            className="llm-path llm-path-2"/>
      <path d="M129 78 C 150 90, 168 100, 178 102"
            stroke="var(--accent)" strokeWidth="1.4" fill="none"
            className="llm-path llm-path-3"/>
      <path d="M186 50 C 210 60, 220 76, 226 80"
            stroke="var(--accent)" strokeWidth="1.4" fill="none"
            className="llm-path llm-path-4"/>
      <path d="M198 100 C 215 95, 222 84, 226 82"
            stroke="var(--accent)" strokeWidth="1.4" fill="none"
            className="llm-path llm-path-5"/>

      {/* Caption */}
      <text x="14" y="170" fontSize="8" fill="var(--ink-muted)" {...LBL}>
        RETRIEVAL · GROUNDED
      </text>
    </svg>
  );
}

/* 06 — Governance & Human-in-the-Loop
   Bracketed system frame, internal nodes, audit strip at bottom.
*/
function GovernanceVis() {
  return (
    <svg viewBox="0 0 280 180" className="tile-vis" preserveAspectRatio="xMidYMid meet">
      {/* Bracket corners */}
      <g stroke="var(--ink)" strokeWidth="1.2" fill="none" className="gov-brackets">
        <path d="M14 28 L 14 14 L 30 14"/>
        <path d="M250 14 L 266 14 L 266 28"/>
        <path d="M14 120 L 14 134 L 30 134"/>
        <path d="M250 134 L 266 134 L 266 120"/>
      </g>

      {/* Title accent */}
      <g transform="translate(140, 14)" textAnchor="middle">
        <circle cy="0" r="3" fill="var(--accent)" className="gov-accent-dot"/>
      </g>

      {/* Internal system network */}
      <g className="gov-nodes">
        <circle cx="60" cy="60" r="4" fill="var(--ink)"/>
        <circle cx="105" cy="40" r="4" fill="var(--ink)"/>
        <circle cx="140" cy="70" r="6" fill="var(--white)" stroke="var(--ink)" strokeWidth="1.4"/>
        <circle cx="180" cy="40" r="4" fill="var(--ink)"/>
        <circle cx="225" cy="65" r="4" fill="var(--ink)"/>
        <circle cx="90" cy="105" r="4" fill="var(--ink)"/>
        <circle cx="170" cy="105" r="4" fill="var(--ink)"/>
      </g>

      {/* Connections */}
      <g stroke="var(--hairline-strong)" strokeWidth="1" fill="none">
        <line x1="60" y1="60" x2="105" y2="40"/>
        <line x1="105" y1="40" x2="140" y2="70"/>
        <line x1="140" y1="70" x2="180" y2="40"/>
        <line x1="180" y1="40" x2="225" y2="65"/>
        <line x1="60" y1="60" x2="90" y2="105"/>
        <line x1="140" y1="70" x2="90" y2="105"/>
        <line x1="140" y1="70" x2="170" y2="105"/>
        <line x1="225" y1="65" x2="170" y2="105"/>
      </g>

      {/* Review highlight on center node */}
      <circle cx="140" cy="70" r="11" fill="none" stroke="var(--accent)" strokeWidth="1.2"
              className="gov-review-ring"/>
      <text x="140" y="92" textAnchor="middle" fontSize="8"
            fill="var(--accent)" {...LBL} fontWeight="500">REVIEW</text>

      {/* Audit strip */}
      <g transform="translate(0, 146)">
        <line x1="14" y1="0" x2="266" y2="0" stroke="var(--hairline)" strokeWidth="1"/>
        <text x="22" y="14" fontSize="8.5" fill="var(--ink-muted)" {...LBL}>
          ACCESS
        </text>
        <circle cx="58" cy="11" r="1.5" fill="var(--ink-muted)"/>
        <text x="70" y="14" fontSize="8.5" fill="var(--ink-muted)" {...LBL}>
          AUDIT
        </text>
        <circle cx="100" cy="11" r="1.5" fill="var(--ink-muted)"/>
        <text x="112" y="14" fontSize="8.5" fill="var(--ink-muted)" {...LBL}>
          REVIEW
        </text>
        <circle cx="155" cy="11" r="1.5" fill="var(--ink-muted)"/>
        <text x="167" y="14" fontSize="8.5" fill="var(--ink-muted)" {...LBL}>
          OVERRIDE
        </text>
      </g>
    </svg>
  );
}

function WhatWeCover() {
  const tiles = [
    {
      n: "01",
      audience: "For leadership teams deciding where AI fits",
      title: "AI Strategy & Use Case Mapping",
      copy: "We figure out where AI actually fits in your work, what's worth building first, and how you'll know it's working.",
      Vis: StrategyVis,
      tone: "var(--blue-trust)",
    },
    {
      n: "02",
      audience: "For product and operations teams",
      title: "Vision AI & Custom Models",
      copy: "Custom-trained models for the precision off-the-shelf can't reach. Detection, classification, segmentation.",
      Vis: VisionVis,
      tone: "var(--pink-warm)",
    },
    {
      n: "03",
      audience: "For teams with fragmented tools and workflows",
      title: "Architecture & System Design",
      copy: "Some problems don't need a model. They need clean architecture, clear ownership, and structure. We do that work too.",
      Vis: ArchitectureVis,
      tone: "var(--purple-friendly)",
    },
    {
      n: "04",
      audience: "For operations teams running work at scale",
      title: "AI Agents & Workflow Coordination",
      copy: "Coordinated agents for real operational work, with review points, escalation paths, and clear boundaries.",
      Vis: AgentsVis,
      tone: "var(--blue-sky)",
    },
    {
      n: "05",
      audience: "For knowledge-heavy teams: legal, support, research",
      title: "LLM Integration & Knowledge Systems",
      copy: "Grounded in your data, not the open internet. Retrieval, reasoning, document intelligence.",
      Vis: LLMVis,
      tone: "var(--magenta-bridge)",
    },
    {
      n: "06",
      audience: "For compliance, risk, and IT leaders",
      title: "Governance & Human-in-the-Loop",
      copy: "The access control, review points, approval flows, and access boundaries that keep humans in charge of the system.",
      Vis: GovernanceVis,
      tone: "var(--blue-trust)",
    },
  ];

  return (
    <section id="cover" className="section" data-screen-label="04 What we cover">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>What we cover</span>
        </Reveal>

        <div className="cover-grid">
          {tiles.map((t, i) => (
            <Reveal key={t.n} delay={(i % 3) * 100}
                    className="cover-tile"
                    style={{ "--accent": t.tone }}>
              <div className="cover-tile-vis"><t.Vis/></div>
              <div className="cover-tile-meta">
                <span className="cover-tile-num" style={{ color: t.tone }}>{t.n}</span>
                <span className="cover-tile-audience">{t.audience}</span>
                <h3>{t.title}</h3>
                <p>{t.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .cover-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--hairline);
          border: 1px solid var(--hairline);
          border-radius: 12px;
          overflow: hidden;
        }
        @media (max-width: 1000px) { .cover-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .cover-grid { grid-template-columns: 1fr; } }

        .cover-tile {
          background: var(--white);
          padding: clamp(20px, 2.2vw, 28px);
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 380px;
          transition: background 240ms var(--ease);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .cover-tile:hover { background: var(--surface-2); }
        .cover-tile::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 480ms var(--ease);
        }
        .cover-tile:hover::after { transform: scaleX(1); }

        .cover-tile-vis {
          height: 180px;
          padding: 4px;
          border-radius: 6px;
          background: var(--surface-2);
          border: 1px solid var(--hairline);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink);
          overflow: hidden;
        }
        .cover-tile:hover .cover-tile-vis {
          background: var(--white);
        }
        .tile-vis { width: 100%; height: 100%; display: block; }

        .cover-tile-num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          display: block;
        }
        .cover-tile-audience {
          display: block;
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin: 8px 0 2px;
          max-width: 30ch;
          line-height: 1.45;
        }
        .cover-tile h3 {
          font-size: 17px;
          line-height: 1.3;
          margin: 6px 0 8px;
          max-width: 22ch;
        }
        .cover-tile p {
          color: var(--ink-soft);
          font-size: 14px;
          line-height: 1.6;
          max-width: 40ch;
        }

        /* ---- Self-animating elements on tile reveal ---- */

        /* Strategy — active branch slides in */
        .strategy-active-path {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          transition: stroke-dashoffset 900ms var(--ease) 200ms;
        }
        .cover-tile.is-in .strategy-active-path { stroke-dashoffset: 0; }
        .strategy-active-leaf {
          opacity: 0;
          transform: scale(0.4);
          transform-origin: center;
          transform-box: fill-box;
          transition: opacity 420ms var(--ease) 1000ms, transform 420ms var(--ease) 1000ms;
        }
        .cover-tile.is-in .strategy-active-leaf {
          opacity: 1;
          transform: scale(1);
        }
        .strategy-confidence {
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 700ms var(--ease) 1100ms;
        }
        .cover-tile.is-in .strategy-confidence { transform: scaleX(1); }

        /* Vision — boxes draw in sequence, labels fade in */
        .vbox {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 700ms var(--ease);
        }
        .cover-tile.is-in .vbox-1 { transition-delay: 300ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .vbox-2 { transition-delay: 600ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .vbox-3 { transition-delay: 900ms; stroke-dashoffset: 0; }
        .vlabel {
          opacity: 0;
          transition: opacity 320ms var(--ease);
        }
        .cover-tile.is-in .vlabel-1 { transition-delay: 700ms; opacity: 1; }
        .cover-tile.is-in .vlabel-2 { transition-delay: 1000ms; opacity: 1; }
        .cover-tile.is-in .vlabel-3 { transition-delay: 1300ms; opacity: 1; }

        /* Architecture before/after */
        .arch-after-lines .al {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          transition: stroke-dashoffset 600ms var(--ease);
        }
        .cover-tile.is-in .al-1 { transition-delay: 400ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .al-2 { transition-delay: 580ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .al-3 { transition-delay: 760ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .al-4 { transition-delay: 940ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .al-5 { transition-delay: 1120ms; stroke-dashoffset: 0; }

        /* Agents — active route to human draws in */
        .agents-active-route {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          transition: stroke-dashoffset 700ms var(--ease) 600ms;
        }
        .cover-tile.is-in .agents-active-route { stroke-dashoffset: 0; }
        .agents-human circle:first-child {
          transform: scale(0.6);
          transform-origin: center;
          transform-box: fill-box;
          opacity: 0;
          transition: transform 420ms var(--ease) 1100ms, opacity 420ms var(--ease) 1100ms;
        }
        .cover-tile.is-in .agents-human circle:first-child {
          transform: scale(1);
          opacity: 1;
        }

        /* LLM — paths draw in staggered */
        .llm-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          opacity: 0.85;
          transition: stroke-dashoffset 700ms var(--ease);
        }
        .cover-tile.is-in .llm-path-1 { transition-delay: 300ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .llm-path-2 { transition-delay: 600ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .llm-path-3 { transition-delay: 600ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .llm-path-4 { transition-delay: 900ms; stroke-dashoffset: 0; }
        .cover-tile.is-in .llm-path-5 { transition-delay: 900ms; stroke-dashoffset: 0; }
        .llm-answer rect {
          transition: opacity 400ms var(--ease) 1200ms;
          opacity: 0;
        }
        .cover-tile.is-in .llm-answer rect { opacity: 1; }

        /* Governance — bracket corners draw in, review ring pulses */
        .gov-brackets path {
          stroke-dasharray: 32;
          stroke-dashoffset: 32;
          transition: stroke-dashoffset 600ms var(--ease) 200ms;
        }
        .cover-tile.is-in .gov-brackets path { stroke-dashoffset: 0; }
        .gov-review-ring {
          transform: scale(0.5);
          transform-origin: center;
          transform-box: fill-box;
          opacity: 0;
          transition: transform 480ms var(--ease) 900ms, opacity 480ms var(--ease) 900ms;
        }
        .cover-tile.is-in .gov-review-ring {
          transform: scale(1);
          opacity: 1;
        }
        .gov-accent-dot {
          transform: scale(0);
          transform-origin: center;
          transform-box: fill-box;
          transition: transform 320ms var(--ease) 1100ms;
        }
        .cover-tile.is-in .gov-accent-dot { transform: scale(1); }

        @media (prefers-reduced-motion: reduce) {
          .cover-tile * {
            transition-duration: 0ms !important;
            transition-delay: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}

window.WhatWeCover = WhatWeCover;
