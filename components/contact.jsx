/* global React */
const { useEffect, useRef, useState } = React;

/* -------------------------------------------------------------
   Contact modal — direct and calm. No fake automation.
   ------------------------------------------------------------- */
function ContactModal({ open, onClose, inquiryKind }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });
  const [sent, setSent] = useState(false);
  const firstField = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    setTimeout(() => firstField.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      // Reset after close animation
      const t = setTimeout(() => { setSent(false); setForm({ name: "", email: "", company: "", role: "", message: "" }); }, 320);
      return () => clearTimeout(t);
    }
  }, [open]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className={`modal ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="modal-overlay" onClick={onClose}/>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-head">
          <span className="eyebrow">
            <span className="dot-row"><span className="c1"/><span className="c3"/><span className="c5"/></span>
            {inquiryKind === "readiness_check" ? "Readiness check" : "Get in touch"}
          </span>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
              <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {!sent ? (
          <form className="modal-body" onSubmit={onSubmit}>
            <h2 id="modal-title">
              {inquiryKind === "readiness_check"
                ? "Book a 60-minute readiness check."
                : "Tell us what you are working on."}
            </h2>
            <p className="lead" style={{ maxWidth: "48ch" }}>
              {inquiryKind === "readiness_check"
                ? "One focused conversation. We'll tell you if AI is the right move, or what to fix first."
                : "A few short fields. We read everything and reply within a few working days."}
            </p>

            {inquiryKind === "readiness_check" && (
              <input type="hidden" name="inquiry_type" value="readiness_check"/>
            )}

            <div className="form-grid">
              <label className="field">
                <span>Name</span>
                <input ref={firstField} name="name" value={form.name} onChange={onChange} required autoComplete="name"/>
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email"/>
              </label>
              <label className="field">
                <span>Company</span>
                <input name="company" value={form.company} onChange={onChange} autoComplete="organization"/>
              </label>
              <label className="field">
                <span>Role</span>
                <input name="role" value={form.role} onChange={onChange} autoComplete="organization-title"/>
              </label>
              <label className="field field-wide">
                <span>What workflow, challenge, or product idea are you exploring?</span>
                <textarea name="message" rows="5" value={form.message} onChange={onChange} required/>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn">Send <span className="arrow">→</span></button>
              <span className="form-note">We read everything. No automation in the loop.</span>
            </div>
          </form>
        ) : (
          <div className="modal-body modal-sent">
            <div className="sent-mark">
              <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                <path d="M8 16.5 L14 22 L24 11" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>Thanks.</h2>
            <p className="lead">We will review this and get back to you.</p>
            <button className="btn btn-ghost" onClick={onClose}>Close</button>
          </div>
        )}
      </div>

      <style>{`
        .modal {
          position: fixed; inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 280ms var(--ease);
          padding: 24px;
        }
        .modal.is-open { opacity: 1; pointer-events: auto; }
        .modal-overlay {
          position: absolute; inset: 0;
          background: rgba(12, 12, 12, 0.36);
          backdrop-filter: blur(4px);
        }
        .modal-panel {
          position: relative;
          width: min(640px, 100%);
          max-height: calc(100vh - 48px);
          overflow: auto;
          background: var(--white);
          border-radius: 14px;
          border: 1px solid var(--hairline);
          box-shadow: 0 30px 80px -20px rgba(12, 12, 12, 0.25);
          transform: translateY(12px) scale(0.985);
          opacity: 0;
          transition: transform 320ms var(--ease), opacity 320ms var(--ease);
        }
        .modal.is-open .modal-panel { transform: none; opacity: 1; }
        .modal-head {
          padding: 22px 28px;
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid var(--hairline);
        }
        .modal-head .eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
        }
        .modal-head .dot-row span { width: 6px; height: 6px; }
        .modal-close {
          background: transparent;
          border: 1px solid var(--hairline);
          border-radius: 999px;
          width: 32px; height: 32px;
          display: grid; place-items: center;
          color: var(--ink-soft);
          transition: color 200ms var(--ease), border-color 200ms var(--ease);
        }
        .modal-close:hover { color: var(--ink); border-color: var(--ink); }

        .modal-body {
          padding: 32px 28px;
          display: flex; flex-direction: column;
          gap: 18px;
        }
        .modal-body h2 { font-size: 26px; }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 8px;
        }
        .field-wide { grid-column: 1 / -1; }
        @media (max-width: 520px) { .form-grid { grid-template-columns: 1fr; } }

        .field { display: flex; flex-direction: column; gap: 8px; }
        .field span {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }
        .field input, .field textarea {
          border: 1px solid var(--hairline-strong);
          background: var(--white);
          border-radius: 8px;
          padding: 12px 14px;
          font: inherit;
          font-size: 15px;
          color: var(--ink);
          resize: vertical;
          transition: border-color 200ms var(--ease), background 200ms var(--ease);
        }
        .field input:focus, .field textarea:focus {
          outline: none;
          border-color: var(--ink);
          background: var(--surface-2);
        }

        .form-actions {
          display: flex; align-items: center; gap: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
        }
        .form-note {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--ink-muted);
        }

        .modal-sent { align-items: flex-start; }
        .sent-mark {
          width: 48px; height: 48px;
          border-radius: 999px;
          border: 1px solid var(--hairline-strong);
          display: grid; place-items: center;
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
}

window.ContactModal = ContactModal;
