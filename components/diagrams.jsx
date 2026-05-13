/* global React */

/* -------------------------------------------------------------
   Abstract operational diagrams for case study cards.
   Quiet, line-based. One small color accent per diagram.
   Hover triggers a single state change (a node lights, a path routes).
   ------------------------------------------------------------- */

function Diagram({ kind, active }) {
  const C = {
    line: "var(--hairline-strong)",
    lineSoft: "var(--hairline)",
    node: "var(--ink)",
    label: "var(--ink-muted)",
    accent: "var(--accent)",
  };

  if (kind === "dorel") {
    // Asset movement + translation + review nodes
    return (
      <svg viewBox="0 0 360 220" className="diagram" preserveAspectRatio="xMidYMid meet">
        {/* Lanes */}
        <line x1="30" y1="55" x2="330" y2="55" stroke={C.lineSoft} strokeWidth="1" strokeDasharray="3 4"/>
        <line x1="30" y1="115" x2="330" y2="115" stroke={C.lineSoft} strokeWidth="1" strokeDasharray="3 4"/>
        <line x1="30" y1="175" x2="330" y2="175" stroke={C.lineSoft} strokeWidth="1" strokeDasharray="3 4"/>

        <text x="30" y="44" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">DESIGN</text>
        <text x="30" y="104" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">REVIEW</text>
        <text x="30" y="164" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">IMPLEMENT</text>

        {/* Nodes */}
        <g>
          <circle cx="60" cy="55" r="5" fill={C.node}/>
          <circle cx="130" cy="55" r="5" fill={C.node}/>
          <circle cx="200" cy="55" r="5" fill={C.node}/>

          <circle cx="95" cy="115" r="5" fill={C.node}/>
          <circle cx="200" cy="115" r="5" fill={C.node}/>
          <circle cx="270" cy="115" r="5" fill={C.node}/>

          <circle cx="160" cy="175" r="5" fill={C.node}/>
          <circle cx="270" cy="175" r="5" fill={C.node}/>
          <circle cx="320" cy="175" r="5" fill={C.node}/>
        </g>

        {/* Static connections */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <path d="M60 55 L130 55"/>
          <path d="M130 55 L200 55"/>
          <path d="M60 55 C 75 70, 80 100, 95 115"/>
          <path d="M130 55 C 145 70, 185 100, 200 115"/>
          <path d="M200 55 C 215 70, 255 100, 270 115"/>
          <path d="M95 115 C 110 130, 145 160, 160 175"/>
          <path d="M270 115 L320 175"/>
        </g>

        {/* Accent path — the "translation" route — animates on hover */}
        <path d="M200 115 C 220 130, 250 160, 270 175"
              stroke={C.accent} strokeWidth="1.5" fill="none"
              className={`accent-path ${active ? "is-active" : ""}`}/>
        <circle cx="200" cy="115" r="7" fill="none" stroke={C.accent} strokeWidth="1.5"
                className={`pulse-ring ${active ? "is-active" : ""}`}/>
      </svg>
    );
  }

  if (kind === "architecture") {
    // Parametric flow — Rhino + Lovable + application logic bridge
    return (
      <svg viewBox="0 0 360 220" className="diagram" preserveAspectRatio="xMidYMid meet">
        {/* Bracketed system regions */}
        <rect x="30" y="40" width="100" height="140" rx="6" fill="none" stroke={C.lineSoft} strokeWidth="1"/>
        <rect x="230" y="40" width="100" height="140" rx="6" fill="none" stroke={C.lineSoft} strokeWidth="1"/>

        <text x="30" y="30" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">DESIGN MODEL</text>
        <text x="230" y="30" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">APPLICATION</text>

        {/* Internal lattice — design side */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <path d="M50 70 L110 70 L110 110 L50 110 Z"/>
          <path d="M50 110 L80 90 L110 110"/>
          <path d="M80 90 L80 150"/>
          <path d="M50 150 L110 150"/>
        </g>
        <circle cx="50" cy="70" r="3" fill={C.node}/>
        <circle cx="110" cy="70" r="3" fill={C.node}/>
        <circle cx="80" cy="90" r="3" fill={C.node}/>
        <circle cx="110" cy="110" r="3" fill={C.node}/>
        <circle cx="50" cy="150" r="3" fill={C.node}/>
        <circle cx="110" cy="150" r="3" fill={C.node}/>

        {/* Application side — stacked rows */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <line x1="245" y1="70" x2="315" y2="70"/>
          <line x1="245" y1="100" x2="315" y2="100"/>
          <line x1="245" y1="130" x2="315" y2="130"/>
          <line x1="245" y1="160" x2="315" y2="160"/>
        </g>
        <circle cx="245" cy="70" r="3" fill={C.node}/>
        <circle cx="315" cy="70" r="3" fill={C.node}/>
        <circle cx="245" cy="100" r="3" fill={C.node}/>
        <circle cx="315" cy="100" r="3" fill={C.node}/>
        <circle cx="245" cy="130" r="3" fill={C.node}/>
        <circle cx="315" cy="130" r="3" fill={C.node}/>
        <circle cx="245" cy="160" r="3" fill={C.node}/>
        <circle cx="315" cy="160" r="3" fill={C.node}/>

        {/* Bridge */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <path d="M130 110 C 160 110, 200 110, 230 100"/>
          <path d="M130 110 C 160 110, 200 130, 230 130"/>
        </g>

        {/* Accent — active bridge node */}
        <circle cx="180" cy="110" r="5" fill="var(--white)" stroke={C.accent} strokeWidth="1.5"
                className={`pulse-ring ${active ? "is-active" : ""}`}/>
        <text x="172" y="135" fill={C.label} fontSize="8" fontFamily="Roboto Mono" letterSpacing="0.08em">BRIDGE</text>

        <path d="M130 110 L230 100"
              stroke={C.accent} strokeWidth="1.5" fill="none"
              className={`accent-path ${active ? "is-active" : ""}`}/>
      </svg>
    );
  }

  if (kind === "career") {
    // Role / skill alignment graph
    return (
      <svg viewBox="0 0 360 220" className="diagram" preserveAspectRatio="xMidYMid meet">
        <text x="30" y="30" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">SKILLS</text>
        <text x="290" y="30" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">ROLES</text>

        {/* Left column — skills */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`s${i}`}>
            <circle cx="50" cy={60 + i * 26} r="3.5" fill={C.node}/>
            <line x1="58" y1={60 + i * 26} x2="92" y2={60 + i * 26} stroke={C.lineSoft} strokeWidth="1"/>
          </g>
        ))}
        {/* Right column — roles */}
        {[0, 1, 2].map((i) => (
          <g key={`r${i}`}>
            <circle cx="310" cy={80 + i * 36} r="3.5" fill={C.node}/>
            <line x1="268" y1={80 + i * 36} x2="302" y2={80 + i * 36} stroke={C.lineSoft} strokeWidth="1"/>
          </g>
        ))}

        {/* Connecting graph */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <path d="M92 60 C 160 60, 200 80, 268 80"/>
          <path d="M92 86 C 160 86, 200 80, 268 80"/>
          <path d="M92 112 C 160 112, 200 116, 268 116"/>
          <path d="M92 138 C 160 138, 200 116, 268 116"/>
          <path d="M92 138 C 160 138, 200 152, 268 152"/>
          <path d="M92 164 C 160 164, 200 152, 268 152"/>
        </g>

        {/* Accent — clarity node */}
        <path d="M92 112 C 160 112, 200 116, 268 116"
              stroke={C.accent} strokeWidth="1.5" fill="none"
              className={`accent-path ${active ? "is-active" : ""}`}/>
        <circle cx="180" cy="114" r="5" fill="var(--white)" stroke={C.accent} strokeWidth="1.5"
                className={`pulse-ring ${active ? "is-active" : ""}`}/>
        <text x="166" y="138" fill={C.label} fontSize="8" fontFamily="Roboto Mono" letterSpacing="0.08em">ALIGNED</text>
      </svg>
    );
  }

  if (kind === "implementation") {
    // Workflow coordination — idea to implementation
    return (
      <svg viewBox="0 0 360 220" className="diagram" preserveAspectRatio="xMidYMid meet">
        <text x="30" y="30" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">IDEA</text>
        <text x="160" y="30" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">STRUCTURE</text>
        <text x="290" y="30" fill={C.label} fontSize="9" fontFamily="Roboto Mono" letterSpacing="0.08em">SYSTEM</text>

        {/* Three stages */}
        {/* Stage 1 — scattered */}
        <g>
          <circle cx="40" cy="60" r="3" fill={C.node}/>
          <circle cx="65" cy="90" r="3" fill={C.node}/>
          <circle cx="48" cy="120" r="3" fill={C.node}/>
          <circle cx="72" cy="150" r="3" fill={C.node}/>
          <circle cx="40" cy="180" r="3" fill={C.node}/>
        </g>

        {/* Stage 2 — organized */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <rect x="155" y="60" width="60" height="30" rx="3"/>
          <rect x="155" y="100" width="60" height="30" rx="3"/>
          <rect x="155" y="140" width="60" height="30" rx="3"/>
        </g>
        <circle cx="170" cy="75" r="2.5" fill={C.node}/>
        <circle cx="200" cy="75" r="2.5" fill={C.node}/>
        <circle cx="170" cy="115" r="2.5" fill={C.node}/>
        <circle cx="200" cy="115" r="2.5" fill={C.node}/>
        <circle cx="170" cy="155" r="2.5" fill={C.node}/>
        <circle cx="200" cy="155" r="2.5" fill={C.node}/>

        {/* Stage 3 — connected system */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <circle cx="295" cy="80" r="14"/>
          <circle cx="320" cy="130" r="14"/>
          <circle cx="280" cy="160" r="14"/>
          <path d="M295 94 L 310 117"/>
          <path d="M295 94 L 280 146"/>
          <path d="M280 146 L 308 142"/>
        </g>
        <circle cx="295" cy="80" r="3" fill={C.node}/>
        <circle cx="320" cy="130" r="3" fill={C.node}/>
        <circle cx="280" cy="160" r="3" fill={C.node}/>

        {/* Flow arrows between stages */}
        <g stroke={C.line} strokeWidth="1" fill="none">
          <path d="M85 120 L 150 120"/>
          <path d="M220 115 L 270 115"/>
        </g>

        {/* Accent — moving piece */}
        <circle r="4" fill={C.accent}
                className={`travel ${active ? "is-active" : ""}`}>
          <animateMotion dur="2s" begin="indefinite"
                         path="M65 90 C 110 90, 130 75, 170 75 C 220 75, 250 80, 295 80"
                         fill="freeze"/>
        </circle>
      </svg>
    );
  }

  return null;
}

window.Diagram = Diagram;
