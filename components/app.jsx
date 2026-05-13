/* global React, ReactDOM,
   Hero, Nav, ClientLogos, WhatWeCover, AIReadiness,
   SelectedWork, Compliance, HowWeWork, ToolsTech, Insights, FinalCTA, Footer,
   ContactModal,
   TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio, TweakToggle */
const { useEffect, useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#3478E5",
  "heroDensity": "calm",
  "scale": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactKind, setContactKind] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--container", t.scale === "compact" ? "1120px" : "1200px");
  }, [t.accent, t.scale]);

  useEffect(() => {
    const boot = document.getElementById("boot");
    if (boot) {
      requestAnimationFrame(() => {
        boot.classList.add("hidden");
        setTimeout(() => boot.remove(), 400);
      });
    }
  }, []);

  // Contact modal — accepts a kind so the form can prefill an inquiry_type
  const openContact = (kind) => {
    setContactKind(typeof kind === "string" ? kind : null);
    setContactOpen(true);
  };
  const closeContact = () => setContactOpen(false);

  return (
    <React.Fragment>
      <Nav onOpenContact={openContact}/>

      <main>
        <Hero tweaks={t} onOpenContact={openContact}/>
        <ClientLogos/>
        <WhatWeCover/>
        <AIReadiness onOpenContact={openContact}/>
        <SelectedWork/>
        <Compliance/>
        <HowWeWork/>
        <ToolsTech/>
        <Insights/>
        <FinalCTA onOpenContact={openContact}/>
      </main>

      <Footer/>

      <ContactModal open={contactOpen} onClose={closeContact} inquiryKind={contactKind}/>

      <TweaksPanel>
        <TweakSection label="Accent" />
        <TweakColor
          label="Primary"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={["#3478E5", "#9B59B6", "#CC418C", "#E91E63"]}
        />

        <TweakSection label="Hero" />
        <TweakRadio
          label="Animation"
          value={t.heroDensity}
          onChange={(v) => setTweak("heroDensity", v)}
          options={[
            { value: "still", label: "Still" },
            { value: "subtle", label: "Subtle" },
            { value: "calm", label: "Calm" },
          ]}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Width"
          value={t.scale}
          onChange={(v) => setTweak("scale", v)}
          options={[
            { value: "compact", label: "Compact" },
            { value: "comfortable", label: "Comfy" },
          ]}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App/>);
