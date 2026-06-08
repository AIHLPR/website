# NL translation glossary — AIHLPR

Living document. Update as decisions get made.

## Brand voice (Dutch)

- Tone: calm, specific, low-pressure. Match the English brand voice — never hype, no charity language ("voor hun welzijn"), no overclaim.
- Pronoun: **je/jij** (informal modern Dutch business voice). Not "u" — too stiff for the brand.
- Direct verbs over noun-heavy constructions.
- Short, concrete sentences. If a sentence runs over 25 words in NL, break it.

## Terms KEPT IN ENGLISH (do not translate)

These match how Dutch business audiences read and write them daily. Keeping them English also avoids term drift between EN ↔ NL pages.

- **workflow** (not "werkstroom")
- **audit** (not "controle" or "doorlichting" in this context)
- **workflow audit / workflow check** (compound — both halves stay English)
- **AI workflow / AI-workflow**
- **pilot**
- **production-readiness** / **production-ready** (when referring to the AIHLPR concept)
- **Legal & compliance** (Dutch corporate term stays English)
- **Operations** (as a department label — Dutch uses both "Operations" and "Bedrijfsvoering", we use the English one)
- **Marketing & e-commerce**
- **IT & product**
- **Finance / HR**
- **CRM**, **ERP**, **PDP**, **A+**, **SKU**, **API**
- **Slack**, **Teams**, **Drive**, **SharePoint** (product names)
- **Excel**, **Sheets** (product names)
- **AI**, **LLM** (when used)

## Terms TRANSLATED

| English | Dutch |
|---|---|
| Back to site | Terug naar site |
| Readiness snapshot | Workflow-snapshot |
| Get a first readiness snapshot | Krijg een eerste workflow-snapshot |
| Around 5 minutes · one workflow · meaningful next step | Ongeveer 5 minuten · één workflow · zinvolle volgende stap |
| Next | Volgende |
| Back | Terug |
| Generate my readiness snapshot | Maak mijn workflow-snapshot |
| Start another check | Nog een check starten |
| Done | Klaar |
| Customer support | Klantenservice |
| Continuously / every day | Continu / elke dag |
| Weekly | Wekelijks |
| Monthly | Maandelijks |
| Only during projects or launches | Alleen bij projecten of launches |
| Email inbox | E-mailinbox |
| Online form | Online formulier |
| Internal document uploads | Interne documenten-uploads |
| Too much manual data entry / typing | Te veel handmatige data-invoer / typen |
| Work sits waiting in backlogs / queues | Werk blijft liggen in backlogs / wachtrijen |
| Delays waiting for approvals | Vertraging door wachten op goedkeuringen |
| Repeated copy-and-paste across tools | Herhaald kopiëren-en-plakken tussen tools |
| Information is scattered / hard to find | Informatie is verspreid / moeilijk te vinden |
| Inconsistent quality / frequent errors | Inconsistente kwaliteit / vaak fouten |
| Shared drives (Drive / SharePoint) | Gedeelde schijven (Drive / SharePoint) |
| Internal databases | Interne databases |
| Helpdesk / ticketing tools | Helpdesk / ticket-tools |
| Wikis / knowledge bases | Wikis / kennisbanken |
| Structured & reliable | Gestructureerd & betrouwbaar |
| Usable but messy | Bruikbaar maar rommelig |
| Scattered across too many places | Verspreid over te veel plekken |
| Final approval (AI drafts, human signs off) | Eindgoedkeuring (AI schrijft voor, mens tekent af) |
| Customer-facing messages | Klantgerichte berichten |
| Compliance / legal checks | Compliance / juridische checks |
| Exception handling | Uitzonderingen afhandelen |
| Brand & creative review | Merk & creatieve review |
| Financial decisions | Financiële beslissingen |
| Personal info (names, IDs, emails) | Persoonsgegevens (namen, IDs, e-mails) |
| Customer / client data | Klant- of opdrachtgeverdata |
| Financial / payment records | Financiële / betaalgegevens |
| Confidential legal documents | Vertrouwelijke juridische documenten |
| Product / pricing IP | Product- / prijs-IP |
| No sensitive data is used | Geen gevoelige data |
| Time saved on repetitive manual work | Tijdwinst op repetitief handwerk |
| Faster turnaround / quicker responses | Snellere doorlooptijd / snellere reacties |
| Lower operational costs | Lagere operationele kosten |
| Fewer errors and data mistakes | Minder fouten en datavergissingen |
| Better customer experience | Betere klantbeleving |
| More consistent quality / brand | Consistentere kwaliteit / merk |
| Full name | Volledige naam |
| Work email | Werk-e-mail |
| Company | Bedrijf |
| Company name | Bedrijfsnaam |

## CTA strings (cross-page)

| English | Dutch |
|---|---|
| Talk to us → | Praat met ons → |
| Book a workflow call → | Plan een workflow-gesprek → |
| Submit your asset workflow → | Stuur je asset-workflow in → |
| Map your AI opportunity → | Verken je AI-kans → |
| Start the workflow audit → | Start de workflow audit → |
| Take the workflow audit → | Doe de workflow audit → |
| Or book a call with us → | Of plan een gesprek met ons → |
| Does this look familiar? | Klinkt dit bekend? |
| Read case study | Lees case study |
| Explore [thing] → | Bekijk [thing] → |

## Internal-link fallback policy (during Phase 1)

While only `Home.html`, `audit.html`, and `work/asset-workflow-engine.html` exist under `/nl/`, all other internal links from NL pages fall back to the **EN sibling**. A visitor clicking a capability link from `nl/Home.html` will land on the EN capability page until Phase 2 ships those translations.

This is acceptable for Phase 1 sample but should be flagged in the NL nav with a small "(EN)" suffix on links to untranslated pages — *deferred decision, mark in PR description for Phase 2.*

## Open questions for the editor

1. **"workflow-snapshot"** vs **"workflow snapshot"** vs **"snapshot"** alone — currently using hyphenated compound. Confirm idiomatic.
2. **"e-mail"** vs **"email"** — Dutch grammar prefers "e-mail" (hyphen). Used consistently.
3. **"je/jij"** — confirm appropriate for AIHLPR's audience (operational AI buyers in NL). Default assumption: yes, modern Dutch B2B trends informal.
4. **Microsoft Bookings** booking URL is English-only. Decision deferred: do we set up a Dutch booking page, or accept that a visitor clicking "Plan een workflow-gesprek" lands on an English calendar?

## Files this glossary covers

- `/nl/audit.html` — Phase 1 ✓ (sample for tone validation)
- `/nl/Home.html` — Phase 1 (pending)
- `/nl/work/asset-workflow-engine.html` — Phase 1 (pending)
- `/nl/capabilities/*.html` — Phase 2
- `/nl/about.html`, `/nl/work/translation-workflow.html` — Phase 3
