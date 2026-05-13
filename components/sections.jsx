/* global React, Diagram */
const { useEffect, useRef, useState } = React;

/* -------------------------------------------------------------
   Reveal-on-scroll wrapper
   ------------------------------------------------------------- */
function Reveal({ children, delay = 0, as: As = "div", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add("is-in"), delay);
        io.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <As ref={ref} className={`reveal ${rest.className || ""}`} {...rest}>{children}</As>;
}

/* -------------------------------------------------------------
   Nav
   ------------------------------------------------------------- */
function Nav({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="nav-logo" href="#top" aria-label="AIHLPR home">
          <img src="assets/aihlpr-logo-transparent.png" alt="AIHLPR" />
        </a>
        <div className="nav-links">
          <a href="#cover">What we cover</a>
          <a href="#work">Work</a>
          <a href="#how">How we work</a>
          <a className="nav-cta" onClick={(e) => { e.preventDefault(); onOpenContact(); }} href="#contact">
            Discuss your use case <span>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------
   02 — Trust anchors (qualitative, replace with metrics later)
   ------------------------------------------------------------- */
function TrustAnchors() {
  const anchors = [
    { eyebrow: "Methodology", value: "Security-first", note: "By design, not retrofit" },
    { eyebrow: "Range", value: "Three layers", note: "Architecture · Model · LLM" },
    { eyebrow: "Depth", value: "Vision AI", note: "Trained for precision per task" },
    { eyebrow: "Posture", value: "Human in the loop", note: "Review, approve, override" },
  ];

  return (
    <section id="trust" className="section section--tight trust-anchors" data-screen-label="02 Trust anchors">
      <div className="container">
        <div className="trust-grid">
          {anchors.map((a, i) => (
            <Reveal key={i} delay={i * 60} className="trust-tile">
              <span className="trust-eyebrow">{a.eyebrow}</span>
              <span className="trust-value">{a.value}</span>
              <span className="trust-note">{a.note}</span>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .trust-anchors {
          padding-top: clamp(48px, 6vw, 80px);
          padding-bottom: clamp(48px, 6vw, 80px);
          border-bottom: 1px solid var(--hairline);
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
        }
        @media (max-width: 900px) { .trust-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .trust-grid { grid-template-columns: 1fr; } }
        .trust-tile {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-right: 1px solid var(--hairline);
        }
        .trust-tile:last-child { border-right: 0; }
        @media (max-width: 900px) {
          .trust-tile:nth-child(2n) { border-right: 0; }
          .trust-tile:nth-child(1), .trust-tile:nth-child(2) { border-bottom: 1px solid var(--hairline); }
        }
        @media (max-width: 520px) {
          .trust-tile { border-right: 0 !important; border-bottom: 1px solid var(--hairline); }
          .trust-tile:last-child { border-bottom: 0; }
        }
        .trust-eyebrow {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }
        .trust-value {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(22px, 2.4vw, 28px);
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--ink);
        }
        .trust-note {
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
   03 — The ladder
   Explore → Design → Build → Govern → Scale
   Scroll-triggered horizontal flow.
   ------------------------------------------------------------- */
function TheLadder() {
  const steps = [
    { n: "01", title: "Explore", text: "Understand the work, the data, and where AI might fit. Or where it shouldn't." },
    { n: "02", title: "Design", text: "Choose the right layer and design the system, the review points, and the security frame around it." },
    { n: "03", title: "Build", text: "Train, integrate, and deploy. Vision models, agents, interfaces, governance hooks." },
    { n: "04", title: "Govern", text: "Approval flows, access boundaries, audit logs, and human review baked into the operating model." },
    { n: "05", title: "Scale", text: "Roll out across teams, monitor in production, and refine as the work and the data evolve." },
  ];

  const [active, setActive] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-step]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.getAttribute("data-step"), 10);
          setActive((prev) => Math.max(prev, idx));
        }
      });
    }, { threshold: 0.5, rootMargin: "0px 0px -20% 0px" });
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section id="ladder" className="section" data-screen-label="03 The ladder">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>Where AIHLPR fits</span>
          <span className="eyebrow" style={{ color: "var(--ink-soft)" }}>Come in at any stage.</span>
        </Reveal>

        <Reveal className="ladder-intro">
          <h2>
            From exploration to scale.<br/>
            <span className="ladder-intro-soft">We plug into the moment your team needs us.</span>
          </h2>
        </Reveal>

        <div className="ladder-flow" ref={ref}>
          <div className="ladder-line">
            <div className="ladder-line-fill" style={{
              width: `${Math.min(100, Math.max(0, ((active + 1) / steps.length) * 100))}%`
            }}/>
          </div>

          <div className="ladder-steps">
            {steps.map((s, i) => (
              <div key={s.n} className={`ladder-step ${i <= active ? "is-on" : ""}`} data-step={i}>
                <div className="ladder-step-node">
                  <span className="ladder-step-dot"/>
                </div>
                <div className="ladder-step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ladder-intro { margin-bottom: clamp(56px, 8vw, 88px); max-width: 720px; }
        .ladder-intro h2 { line-height: 1.15; }
        .ladder-intro-soft { color: var(--ink-soft); font-weight: 500; }

        .ladder-flow { position: relative; }
        .ladder-line {
          position: absolute;
          left: 0; right: 0;
          top: 9px;
          height: 1px;
          background: var(--hairline);
        }
        .ladder-line-fill {
          height: 1px;
          background: var(--ink);
          transition: width 900ms var(--ease);
        }
        .ladder-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }
        @media (max-width: 1000px) {
          .ladder-steps { grid-template-columns: repeat(3, 1fr); row-gap: 40px; }
          .ladder-line { display: none; }
        }
        @media (max-width: 600px) {
          .ladder-steps { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 420px) {
          .ladder-steps { grid-template-columns: 1fr; }
        }
        .ladder-step {
          padding-top: 28px;
          position: relative;
        }
        .ladder-step-node {
          position: absolute;
          top: 0; left: 0;
          width: 19px; height: 19px;
          border-radius: 999px;
          background: var(--white);
          border: 1px solid var(--hairline-strong);
          display: grid;
          place-items: center;
          transition: border-color 320ms var(--ease);
        }
        .ladder-step-dot {
          width: 7px; height: 7px;
          border-radius: 999px;
          background: var(--hairline-strong);
          transition: background 320ms var(--ease);
        }
        .ladder-step.is-on .ladder-step-node { border-color: var(--ink); }
        .ladder-step.is-on .ladder-step-dot { background: var(--accent); }
        .ladder-step-num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          margin: 16px 0 10px;
        }
        .ladder-step h3 { font-size: 18px; margin-bottom: 8px; }
        .ladder-step p {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.55;
          max-width: 28ch;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
   06 — Selected work
   Three named cards with engagement details and technical layer.
   Diagrams self-animate when each card enters the viewport.
   ------------------------------------------------------------- */

/* Per-card observer: when card enters view, after a staggered
   delay, set active=true. Animation is one-shot (accent path draws,
   pulse rings ping a few times, then settle). Hover gives a small
   replay nudge. */
function WorkCard({ card, index }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setRevealed(true), index * 280);
        if (!reduce) {
          setTimeout(() => setActive(true), index * 280 + 240);
        } else {
          setActive(true);
        }
        io.disconnect();
      }
    }, { threshold: 0.3, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <div ref={ref}
         className={`work-card ${revealed ? "is-revealed" : ""} ${active ? "is-active" : ""}`}
         onMouseEnter={() => setActive(true)}>
      <div className="work-card-head">
        <span className={`status-pill status-${card.status.tone}`}>
          <span className="status-dot"/>
          {card.status.label}
        </span>
      </div>
      <div className="work-card-visual">
        <Diagram kind={card.kind} active={active}/>
      </div>
      <div className="work-card-meta">
        <h3>{card.name}</h3>
        <span className="work-card-client">{card.client}</span>
        <p className="work-outcome">{card.outcome}</p>
        <div className="work-tags">
          {card.tags.map((t) => <span key={t} className="work-tag">{t}</span>)}
        </div>
        <p className="work-meta">{card.meta}</p>
        <p className="work-copy">{card.copy}</p>
      </div>
    </div>
  );
}

function SelectedWork() {
  const cards = [
    {
      id: "asset",
      name: "Asset Workflow Engine",
      client: "Confidential · juvenile products sector",
      status: { label: "Active build", tone: "active" },
      outcome: "From days to hours per asset batch.",
      tags: ["Vision AI", "Asset operations", "Human review", "Brand consistency"],
      meta: "Multi-month engagement · Product + brand teams · Vision-based asset routing + AI-assisted review workflow",
      copy: "A layered system: a vision model classified marketing assets, a workflow layer routed them for review, and humans approved before publishing. Choosing where the model ended and the workflow began was the design.",
      kind: "dorel",
    },
    {
      id: "spatial",
      name: "Spatial Design Workflow",
      client: "Confidential · architecture sector",
      status: { label: "Delivered", tone: "delivered" },
      outcome: "Replaced 3 disconnected tools with one workflow.",
      tags: ["Domain logic", "Rhino integration", "Custom build", "Architecture"],
      meta: "Domain-specific platform · Architectural design team · Bridging design model and application logic",
      copy: "A workflow platform connecting architectural work with parametric design logic and application flow. The architecture pillar at work. System design solved problems before any model was introduced.",
      kind: "architecture",
    },
    {
      id: "career",
      name: "Career Decision Platform",
      client: "Confidential · workforce sector",
      status: { label: "Delivered", tone: "delivered" },
      outcome: "From generic LLM output to grounded, structured recommendations.",
      tags: ["Decision support", "Knowledge systems", "Role alignment", "LLM integration"],
      meta: "Decision support build · End-user clarity · Role and skill alignment graph",
      copy: "A decision support system around role alignment, skill gaps, and professional direction. LLM-powered, but grounded in a structured knowledge layer. Not generic generation.",
      kind: "career",
    },
  ];

  return (
    <section id="work" className="section section--editorial" data-screen-label="06 Selected work">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>Selected work</span>
          <span className="eyebrow" style={{ color: "var(--ink-soft)" }}>
            Working names. Confidential by default. NDAs as standard.
          </span>
        </Reveal>

        <div className="work-grid">
          {cards.map((c, i) => (
            <WorkCard key={c.id} card={c} index={i}/>
          ))}
        </div>

        <Reveal className="work-confidentiality">
          <span className="eyebrow">Confidentiality</span>
          <p>
            We do not reproduce client material, train on it, or reference it in subsequent
            engagements without permission. NDAs by default. Diagrams describe the shape of
            the work, not client data.
          </p>
        </Reveal>
      </div>

      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--hairline);
          border: 1px solid var(--hairline);
          border-radius: 12px;
          overflow: hidden;
        }
        @media (max-width: 900px) { .work-grid { grid-template-columns: 1fr; } }
        .work-card {
          background: var(--white);
          padding: clamp(24px, 2.8vw, 32px);
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 460px;
          transition: background 240ms var(--ease), transform 600ms var(--ease), opacity 600ms var(--ease);
          opacity: 0;
          transform: translateY(14px);
        }
        .work-card.is-revealed {
          opacity: 1;
          transform: none;
        }
        .work-card.is-active { background: var(--surface-2); }

        .work-card-head {
          display: flex;
          justify-content: flex-end;
          margin-bottom: -4px;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 10px 5px 9px;
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
        }
        .status-pill .status-dot {
          width: 6px; height: 6px;
          border-radius: 999px;
        }
        .status-active {
          background: rgba(233, 30, 99, 0.08);
          color: var(--pink-warm);
        }
        .status-active .status-dot {
          background: var(--pink-warm);
          animation: status-pulse 2.4s ease-out infinite;
        }
        .status-delivered {
          background: var(--surface);
          color: var(--ink-muted);
        }
        .status-delivered .status-dot {
          background: var(--ink-muted);
        }
        @keyframes status-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .work-outcome {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(17px, 1.7vw, 20px);
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 4px 0 14px;
          max-width: 26ch;
        }

        .work-card-visual {
          height: 180px;
          background: var(--white);
          border: 1px solid var(--hairline);
          border-radius: 8px;
          display: grid;
          place-items: center;
          padding: 12px;
        }
        .diagram { width: 100%; height: 100%; display: block; }

        .work-card-meta h3 {
          font-size: 19px;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }
        .work-card-client {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-muted);
          display: block;
          margin-bottom: 14px;
        }
        .work-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }
        .work-tag {
          font-size: 11px;
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid var(--hairline-strong);
          color: var(--ink);
          background: var(--white);
        }
        .work-meta {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--ink-soft);
          line-height: 1.5;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--hairline);
        }
        .work-copy {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        .work-confidentiality {
          margin-top: clamp(32px, 4vw, 48px);
          padding: 20px 24px;
          background: var(--white);
          border: 1px solid var(--hairline);
          border-radius: 8px;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        @media (max-width: 600px) {
          .work-confidentiality { flex-direction: column; gap: 8px; }
        }
        .work-confidentiality .eyebrow { white-space: nowrap; padding-top: 4px; }
        .work-confidentiality p {
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 80ch;
        }

        .accent-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          transition: stroke-dashoffset 800ms var(--ease);
          opacity: 0.85;
        }
        .accent-path.is-active { stroke-dashoffset: 0; }
        .pulse-ring {
          transition: opacity 400ms var(--ease);
          opacity: 0;
        }
        .pulse-ring.is-active {
          opacity: 1;
          animation: pulse 1.8s ease-out 3;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.9; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(0.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
   07 — How we work
   Frame · Prototype · Deploy · Control + AI Clarity pull-quote.
   ------------------------------------------------------------- */
function HowWeWork() {
  const steps = [
    { n: "01", title: "Frame", text: "We start by asking if AI is the right answer. Sometimes the fix is clean architecture. Sometimes a custom model. Sometimes existing AI is enough. We help you decide before recommending a build." },
    { n: "02", title: "Prototype", text: "We build the smallest version that proves the system, including its review points and human moments." },
    { n: "03", title: "Deploy", text: "Production rollout with monitoring, access boundaries, audit logs, and a clear adoption path." },
    { n: "04", title: "Control", text: "Approval flows, override paths, and accountability remain visible inside the operating system, not bolted on." },
  ];

  const [active, setActive] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-step]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.getAttribute("data-step"), 10);
          setActive((prev) => Math.max(prev, idx));
        }
      });
    }, { threshold: 0.5, rootMargin: "0px 0px -20% 0px" });
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how" className="section" data-screen-label="How we work">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow"><span className="dot"></span>How we work</span>
          <span className="eyebrow" style={{ color: "var(--ink-soft)" }}>
            Come in at any stage, from exploration to scale.
          </span>
        </Reveal>

        <Reveal className="how-intro">
          <h2>A method, not a methodology.</h2>
          <p className="lead">
            Every engagement looks slightly different. The underlying sequence is consistent.
            Reality first. Security throughout. Implementation last.
          </p>
        </Reveal>

        <div className="how-flow" ref={ref}>
          <div className="how-line">
            <div className="how-line-fill" style={{
              width: `${Math.min(100, Math.max(0, ((active + 1) / steps.length) * 100))}%`
            }}/>
          </div>

          <div className="how-steps">
            {steps.map((s, i) => (
              <div key={s.n} className={`how-step ${i <= active ? "is-on" : ""}`} data-step={i}>
                <div className="how-step-node">
                  <span className="how-step-dot"/>
                </div>
                <div className="how-step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <Reveal className="how-clarity" delay={120}>
          <p>
            <span className="how-clarity-mark">“</span>
            We start by asking if AI is needed at all. Then what security and governance the problem requires. Only then what to build.
          </p>
        </Reveal>
      </div>

      <style>{`
        .how-intro { margin-bottom: clamp(56px, 8vw, 88px); max-width: 720px; }
        .how-intro h2 { margin-bottom: 18px; }

        .how-flow { position: relative; margin-bottom: clamp(56px, 7vw, 88px); }
        .how-line {
          position: absolute;
          left: 0; right: 0;
          top: 9px;
          height: 1px;
          background: var(--hairline);
        }
        .how-line-fill {
          height: 1px;
          background: var(--ink);
          transition: width 800ms var(--ease);
        }
        .how-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) {
          .how-steps { grid-template-columns: 1fr 1fr; }
          .how-line { display: none; }
        }
        @media (max-width: 520px) {
          .how-steps { grid-template-columns: 1fr; }
        }
        .how-step { padding-top: 28px; position: relative; }
        .how-step-node {
          position: absolute;
          top: 0; left: 0;
          width: 19px; height: 19px;
          border-radius: 999px;
          background: var(--white);
          border: 1px solid var(--hairline-strong);
          display: grid;
          place-items: center;
          transition: border-color 320ms var(--ease);
        }
        .how-step-dot {
          width: 7px; height: 7px;
          border-radius: 999px;
          background: var(--hairline-strong);
          transition: background 320ms var(--ease);
        }
        .how-step.is-on .how-step-node { border-color: var(--ink); }
        .how-step.is-on .how-step-dot { background: var(--accent); }
        .how-step-num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--ink-muted);
          margin: 18px 0 12px;
        }
        .how-step h3 { font-size: 18px; margin-bottom: 10px; }
        .how-step p { font-size: 14.5px; color: var(--ink-soft); line-height: 1.6; max-width: 30ch; }

        .how-clarity {
          margin-top: clamp(56px, 7vw, 88px);
          padding-top: clamp(40px, 5vw, 56px);
          border-top: 1px solid var(--hairline);
          max-width: 760px;
        }
        .how-clarity > p:first-child {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(20px, 2.2vw, 26px);
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: var(--ink);
          margin: 0 0 14px;
          max-width: 24ch;
        }
        .how-clarity-mark {
          color: var(--accent);
          margin-right: 6px;
        }
        .how-clarity-sub {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-soft);
          margin: 0;
          max-width: 60ch;
        }

        .ai-clarity-quote {
          padding: 32px 36px;
          background: var(--surface-2);
          border-left: 2px solid var(--accent);
          border-radius: 0 12px 12px 0;
          margin-bottom: clamp(32px, 4vw, 48px);
          position: relative;
        }
        .ai-clarity-quote .eyebrow {
          display: block;
          margin-bottom: 14px;
          color: var(--ink-muted);
        }
        .ai-clarity-quote p {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(22px, 2.4vw, 28px);
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: var(--ink);
          max-width: 28ch;
        }
        .quote-mark {
          color: var(--accent);
          font-family: var(--font-display);
          margin-right: 6px;
        }
        .quote-sub {
          display: block;
          margin-top: 16px;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-soft);
          letter-spacing: 0;
          max-width: 56ch;
        }

        .how-not {
          padding: 24px 28px;
          border: 1px solid var(--hairline);
          border-radius: 12px;
          background: var(--white);
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        @media (max-width: 600px) {
          .how-not { flex-direction: column; gap: 8px; }
        }
        .how-not .eyebrow { white-space: nowrap; padding-top: 4px; }
        .how-not p {
          color: var(--ink-soft);
          font-size: 15px;
          line-height: 1.6;
          max-width: 70ch;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
   11 — Final CTA
   ------------------------------------------------------------- */
function FinalCTA({ onOpenContact }) {
  return (
    <section id="contact" className="section section--tight final-cta" data-screen-label="Close">
      <div className="container final-inner">
        <Reveal>
          <span className="eyebrow"><span className="dot-row"><span className="c1"/><span className="c3"/><span className="c5"/></span></span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="final-title">
            Tell us what you're trying to build.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="lead final-sub" style={{ margin: "0 auto", maxWidth: "52ch" }}>
            We'll tell you if AI is the right answer.
          </p>
        </Reveal>
        <Reveal delay={240} className="final-actions">
          <button className="btn final-btn" onClick={() => onOpenContact && onOpenContact()}>
            Discuss your AI use case <span className="arrow">→</span>
          </button>
          <button className="btn btn-ghost final-btn-secondary"
                  onClick={() => onOpenContact && onOpenContact("readiness_check")}>
            Or start with a 60-minute readiness check <span className="arrow">→</span>
          </button>
        </Reveal>
      </div>

      <style>{`
        .final-cta {
          border-top: 1px solid var(--hairline);
          background: var(--white);
        }
        .final-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .final-cta .eyebrow .dot-row { color: var(--ink); }
        .final-cta .eyebrow .dot-row span { width: 8px; height: 8px; }
        .final-title { max-width: 22ch; margin: 0 auto; }
        .final-sub { font-style: italic; }
        .final-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin-top: 12px;
        }
        .final-btn { height: 52px; padding: 0 28px; font-size: 15px; }
        .final-btn-secondary { height: 46px; padding: 0 22px; font-size: 14px; }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------
   Footer
   ------------------------------------------------------------- */
function Footer() {
  return (
    <footer data-screen-label="Footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="assets/aihlpr-logo-transparent.png" alt="AIHLPR"
                 style={{ height: 28, width: "auto", display: "block", marginBottom: 16 }} />
            <p style={{ color: "var(--ink-soft)", maxWidth: "36ch", fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>
              The operational AI partner. We design, train, and integrate AI systems with security and governance at the foundation.
            </p>
            <p style={{ color: "var(--ink-muted)", fontSize: 12.5, lineHeight: 1.6, fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
              AIHLPR is a practice of MoralityBytes.
            </p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:brinda@moralitybytes.eu">brinda@moralitybytes.eu</a>
            <p>Amsterdam, Netherlands</p>
          </div>
          <div className="footer-col">
            <h4>Site</h4>
            <a href="#cover">What we cover</a>
            <a href="#work">Selected work</a>
            <a href="#compliance">Compliance</a>
            <a href="#how">How we work</a>
            <a href="#thinking">Insights</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AIHLPR</span>
          <span>AI engineering, built to last.</span>
        </div>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.TrustAnchors = TrustAnchors;
window.TheLadder = TheLadder;
window.SelectedWork = SelectedWork;
window.HowWeWork = HowWeWork;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
window.Reveal = Reveal;
