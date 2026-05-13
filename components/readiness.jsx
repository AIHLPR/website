/* global React, Reveal */

/* -------------------------------------------------------------
   The readiness check
   A slim horizontal band: eyebrow, body copy, CTA.
   ------------------------------------------------------------- */

function AIReadiness({ onOpenContact }) {
  return (
    <section id="readiness" className="section section--tight section--editorial ai-readiness" data-screen-label="The readiness check">
      <div className="container">
        <Reveal className="readiness-band">
          <div className="readiness-band-copy">
            <span className="eyebrow"><span className="dot"></span>The readiness check</span>
            <p className="readiness-band-body">
              Not sure if AI fits your work? Start with a 60-minute conversation. We'll look at your data, systems, and team — and tell you what to fix first, or if you're already there.
            </p>
          </div>
          <button className="btn btn-ghost readiness-band-btn"
                  onClick={() => onOpenContact && onOpenContact("readiness_check")}>
            Book a readiness check <span className="arrow">→</span>
          </button>
        </Reveal>
      </div>

      <style>{`
        .ai-readiness {
          padding-top: clamp(48px, 6vw, 80px);
          padding-bottom: clamp(48px, 6vw, 80px);
        }

        .readiness-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(24px, 4vw, 56px);
          flex-wrap: wrap;
        }
        .readiness-band-copy {
          flex: 1;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .readiness-band .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }
        .readiness-band .eyebrow .dot {
          width: 6px; height: 6px; border-radius: 999px; background: var(--accent);
          display: inline-block;
        }
        .readiness-band-body {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(18px, 1.8vw, 22px);
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0;
          max-width: 60ch;
        }
        .readiness-band-btn {
          flex-shrink: 0;
          background: var(--ink);
          color: var(--white);
          border-color: var(--ink);
        }
        .readiness-band-btn:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--white);
        }
      `}</style>
    </section>
  );
}

window.AIReadiness = AIReadiness;
