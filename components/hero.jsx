/* global React */
const { useEffect, useRef, useState } = React;

/* -------------------------------------------------------------
   Hero animation — operational systems forming.
   Plays once on mount over ~2.6s, then settles to a near-static
   state. No looping. Respects prefers-reduced-motion.
   ------------------------------------------------------------- */

function HeroSystem({ density = "calm" }) {
  const wrapRef = useRef(null);
  const [played, setPlayed] = useState(false);
  const [key, setKey] = useState(0); // bump to replay

  // Deterministic node layout — sparse, arranged as a clear constellation
  // sized for a roughly-square column on the right.
  // Coordinates are in a 600x600 viewbox.
  const nodes = React.useMemo(() => {
    const baseCount = density === "still" ? 9 : density === "subtle" ? 11 : 13;
    const seed = [
      [120, 140], [240, 90],  [360, 160],
      [180, 240], [320, 260], [460, 220],
      [120, 360], [260, 380], [400, 360],
      [200, 470], [340, 470], [480, 430],
      [500, 320], [80, 230],  [380, 90],
    ];
    return seed.slice(0, baseCount).map((p, i) => ({
      id: i, x: p[0], y: p[1],
      delay: 180 + i * 100,
      tone: i === 1 ? "pink"
        : i === 4 ? "magenta"
        : i === 7 ? "purple"
        : i === 9 ? "sky"
        : i === 11 ? "blue"
        : "ink",
    }));
  }, [density]);

  // Edges connecting nodes — handcrafted to suggest workflow, not a mesh.
  const edges = React.useMemo(() => ([
    [0, 1], [1, 2], [1, 3], [2, 4],
    [3, 4], [4, 5], [2, 5], [0, 6],
    [3, 6], [6, 7], [7, 8], [4, 7],
    [5, 8], [6, 9], [7, 10], [8, 11],
    [9, 10], [10, 11], [8, 12], [5, 12],
  ].filter(([a, b]) => a < nodes.length && b < nodes.length)
   .map(([a, b], i) => ({ a, b, delay: 700 + i * 70 }))), [nodes.length]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setPlayed(true); return; }
    setPlayed(false);
    const t = setTimeout(() => setPlayed(true), 3200);
    return () => clearTimeout(t);
  }, [key]);

  const replay = () => setKey((k) => k + 1);

  const toneColor = (t) => ({
    ink: "var(--ink)",
    pink: "var(--pink-warm)",
    magenta: "var(--magenta-bridge)",
    purple: "var(--purple-friendly)",
    sky: "var(--blue-sky)",
    blue: "var(--blue-trust)",
  }[t]);

  return (
    <div className="hero-system" ref={wrapRef}>
      <svg key={key} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet"
           style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}
           aria-hidden="true">
        {/* Soft horizontal guide lines — fade in early as the structural background */}
        <g className={`hero-guides ${played ? "is-settled" : ""}`}
           stroke="currentColor" strokeWidth="1" opacity="0.08">
          {[160, 300, 440].map((y, i) => (
            <line key={i} x1="40" x2="560" y1={y} y2={y}
                  style={{ animationDelay: `${100 + i * 80}ms` }}
                  className="guide-line" />
          ))}
        </g>

        {/* Edges */}
        <g className="hero-edges">
          {edges.map((e, i) => {
            const a = nodes[e.a], b = nodes[e.b];
            return (
              <line key={i}
                    x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke="var(--ink)" strokeWidth="1"
                    className="edge"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000,
                      animation: `edge-draw 1000ms var(--ease) forwards`,
                      animationDelay: `${e.delay}ms`,
                      opacity: 0.32,
                    }} />
            );
          })}
        </g>

        {/* Nodes */}
        <g className="hero-nodes">
          {nodes.map((n) => (
            <g key={n.id} style={{
              transform: `translate(${n.x}px, ${n.y}px)`,
            }}>
              {/* Subtle ring */}
              <circle r="18" fill="none" stroke="var(--ink)" strokeWidth="1"
                      className="node-ring"
                      style={{
                        opacity: 0,
                        animation: `ring-in 800ms var(--ease) forwards`,
                        animationDelay: `${n.delay + 200}ms`,
                      }} />
              {/* Core dot */}
              <circle r={n.tone === "ink" ? 4.5 : 6.5}
                      fill={toneColor(n.tone)}
                      className="node-core"
                      style={{
                        opacity: 0,
                        transform: "scale(0)",
                        transformOrigin: "0 0",
                        animation: `node-in 600ms var(--ease) forwards`,
                        animationDelay: `${n.delay}ms`,
                      }} />
            </g>
          ))}
        </g>
      </svg>

      {/* Replay affordance — appears once settled */}
      <button className={`hero-replay ${played ? "is-visible" : ""}`}
              onClick={replay}
              aria-label="Replay system animation">
        <svg viewBox="0 0 14 14" width="11" height="11" fill="none">
          <path d="M11 4.5 A4 4 0 1 0 12 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M11 2 L11 5 L8 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Replay</span>
      </button>

      <style>{`
        .hero-system {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          color: var(--ink);
        }
        .guide-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: edge-draw 1400ms var(--ease) forwards;
        }
        @keyframes edge-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes node-in {
          0% { opacity: 0; transform: scale(0); }
          60% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ring-in {
          0% { opacity: 0; transform: scale(0.6); transform-origin: center; }
          100% { opacity: 0.22; transform: scale(1); }
        }
        .hero-replay {
          position: absolute;
          right: 8px;
          bottom: 8px;
          height: 30px;
          padding: 0 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--hairline-strong);
          border-radius: 999px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(4px);
          color: var(--ink-soft);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 400ms var(--ease) 200ms, transform 400ms var(--ease) 200ms,
                      color 200ms var(--ease), border-color 200ms var(--ease);
        }
        .hero-replay.is-visible { opacity: 1; transform: none; }
        .hero-replay:hover { color: var(--ink); border-color: var(--ink); }
        @media (prefers-reduced-motion: reduce) {
          .hero-system * { animation: none !important; opacity: 1 !important; stroke-dashoffset: 0 !important; }
          .node-core { opacity: 1 !important; transform: scale(1) !important; }
          .node-ring { opacity: 0.22 !important; }
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------------------
   Hero section — two-column: text left, system right.
   ------------------------------------------------------------- */
function Hero({ tweaks, onOpenContact }) {
  return (
    <section id="top" className="hero" data-screen-label="01 Hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow">Operational AI partner</span>
            <span className="eyebrow-sep" />
            <span className="eyebrow">Amsterdam</span>
          </div>

          <h1 className="hero-title">
            AI that's built<br/>to last in production.
          </h1>

          <p className="lead hero-lead">
            Consulting, building, and integrating AI, under one roof.
          </p>

          <div className="hero-trust-row">
            <span>Strategy</span>
            <span className="sep"/>
            <span>Build</span>
            <span className="sep"/>
            <span>Governance</span>
            <span className="sep"/>
            <span className="trust-accent">Security-first</span>
          </div>

          <div className="hero-actions">
            <button className="btn" onClick={onOpenContact}>
              Discuss your AI use case <span className="arrow">→</span>
            </button>
            <a className="btn btn-ghost" href="#how">
              See how we work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <HeroSystem density={tweaks.heroDensity} />
          <p className="hero-visual-caption">
            AI doesn't live alone. Every system we build connects to your data,
            your workflows, your people. Each dot is a connection point.
          </p>
        </div>
      </div>

      <div className="container hero-floor">
        <span className="eyebrow">AIHLPR</span>
        <a href="#cover" className="hero-scroll-cue" aria-label="Scroll to next section">
          <span>What we cover</span>
          <svg viewBox="0 0 14 14" width="11" height="11" fill="none">
            <path d="M7 2 L7 12 M3 8 L7 12 L11 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding-top: clamp(120px, 16vh, 180px);
          padding-bottom: clamp(72px, 9vh, 120px);
          overflow: hidden;
          border-bottom: 1px solid var(--hairline);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: center;
        }
        @media (max-width: 880px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
        }
        .eyebrow-sep {
          width: 24px;
          height: 1px;
          background: var(--ink-muted);
          opacity: 0.5;
        }
        .hero-title {
          max-width: 14ch;
          margin-bottom: 32px;
        }
        .hero-lead {
          max-width: 48ch;
          margin-bottom: 32px;
        }
        .hero-trust-row {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 12px 18px;
          margin-bottom: 36px;
          border: 1px solid var(--hairline);
          border-radius: 999px;
          background: var(--surface-2);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-soft);
          flex-wrap: wrap;
        }
        .hero-trust-row .sep {
          width: 3px; height: 3px;
          border-radius: 999px;
          background: var(--ink-muted);
          opacity: 0.5;
        }
        .hero-trust-row .trust-accent {
          color: var(--ink);
          position: relative;
          padding-left: 14px;
        }
        .hero-trust-row .trust-accent::before {
          content: "";
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 6px; height: 6px;
          border-radius: 999px;
          background: var(--accent);
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-visual {
          position: relative;
          width: 100%;
          max-width: 540px;
          justify-self: end;
        }
        .hero-visual-caption {
          margin-top: 18px;
          padding: 0 4px;
          font-size: 13px;
          line-height: 1.55;
          color: var(--ink-muted);
          text-align: center;
          max-width: 44ch;
          margin-left: auto;
          margin-right: auto;
          font-style: italic;
        }
        @media (max-width: 880px) {
          .hero-visual { justify-self: center; max-width: 460px; }
        }

        .hero-floor {
          margin-top: clamp(56px, 8vh, 88px);
          padding-top: 24px;
          border-top: 1px solid var(--hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .hero-floor .eyebrow { color: var(--ink-muted); }
        .hero-scroll-cue {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-soft);
          transition: color 200ms var(--ease);
        }
        .hero-scroll-cue:hover { color: var(--ink); }
        .hero-scroll-cue svg {
          transition: transform 240ms var(--ease);
        }
        .hero-scroll-cue:hover svg { transform: translateY(2px); }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
