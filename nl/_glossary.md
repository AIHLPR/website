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
| Get a first readiness snapshot | Van workflow naar concrete vervolgstap *(was: "Krijg een eerste workflow-snapshot" — too imperative-first / English-leaning; the "Van X naar Y" frame is the native B2B opener)* |
| Around 5 minutes · one workflow · meaningful next step | Ongeveer 5 minuten · één workflow · concrete vervolgstap *(was: "zinvolle volgende stap" — "vervolgstap" is the native compound)* |
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
| Delays waiting for approvals | Te lang wachten op goedkeuringen *(was: "Vertraging door wachten op…" — flat/passive)* |
| Repeated copy-and-paste across tools | Voortdurend kopiëren en plakken tussen systemen *(was: "tussen tools" — anglicism; Dutch B2B says "tussen systemen")* |
| Information is scattered / hard to find | Informatie is verspreid / moeilijk te vinden |
| Inconsistent quality / frequent errors | Inconsistente kwaliteit / vaak fouten |
| Shared drives (Drive / SharePoint) | Gedeelde schijven (Drive / SharePoint) |
| Internal databases | Interne databases |
| Helpdesk / ticketing tools | Helpdesk- of ticketsystemen *(was: "ticket-tools" — anglicism)* |
| Wikis / knowledge bases | Wikis / kennisbanken |
| Structured & reliable | Gestructureerd & betrouwbaar |
| Usable but messy | Bruikbaar maar rommelig |
| Scattered across too many places | Verspreid over te veel plekken |
| Final approval (AI drafts, human signs off) | Eindgoedkeuring (AI doet een voorstel, mens tekent af) *(was: "AI schrijft voor" — "schrijft voor" means "prescribes" in Dutch; misreads)* |
| Customer-facing messages | Klantgerichte berichten |
| Compliance / legal checks | Compliance / juridische checks |
| Exception handling | Uitzonderingen afhandelen |
| Brand & creative review | Merk & creatieve review |
| Financial decisions | Financiële beslissingen |
| Personal info (names, IDs, emails) | Persoonsgegevens (namen, IDs, e-mails) |
| Customer / client data | Klant- of opdrachtgeversgegevens *(was: "opdrachtgeverdata" — unwieldy compound; Dutch business uses "-gegevens")* |
| Financial / payment records | Financiële / betaalgegevens |
| Confidential legal documents | Vertrouwelijke juridische documenten |
| Product / pricing IP | Product- / prijs-IP |
| No sensitive data is used | Geen gevoelige data |
| Time saved on repetitive manual work | Minder tijd kwijt aan repetitief handwerk *(was: "Tijdwinst op…" — clinical)* |
| Faster turnaround / quicker responses | Snellere doorlooptijd / snellere reacties |
| Lower operational costs | Lagere operationele kosten |
| Fewer errors and data mistakes | Minder fouten in de data *(was: "Minder fouten en datavergissingen" — "datavergissingen" is barely used in Dutch)* |
| Better customer experience | Betere klantbeleving |
| More consistent quality / brand | Meer consistente kwaliteit / merk *(was: "Consistentere kwaliteit" — grammatically possible but clunky)* |
| Full name | Volledige naam |
| Work email | Zakelijk e-mailadres *(was: "Werk-e-mail" — Dutch business says "zakelijk")* |
| Company | Bedrijf |
| Company name | Bedrijfsnaam |

## Sentence-level rewrites (English calque → native Dutch)

After the first audit pass we found several lines reading as "translated English" — grammatically valid but obviously not how a Dutch native would phrase it. Native B2B patterns we picked up from the Growteq / Boldcaster reference set:

- **"Van X naar Y"** as the title frame (*"Van data naar stuurinformatie"*).
- **Question-as-section-header** (*"Wat krijg je?"*, *"Herkenbaar?"*).
- **"Het begint bij ..."** to anchor what comes first.
- **"Denk aan ..."** for examples (not "zoals").
- **"in kaart brengen"** / **"richting geven aan"**.
- **"Zit"** not "is" for problems (*"Het probleem zit niet in de techniek, maar in …"*).
- Compound nouns: *vervolgstap, doorlooptijd, stuurinformatie, kennismaking, vrijblijvend, datafundament*.

The structural fixes already applied to `nl/audit.html`:

| Where | Was (calque) | Now (native) | Pattern fixed |
|---|---|---|---|
| H1 + intro | "Krijg een eerste workflow-snapshot." + "We komen terug met …" | "Van workflow naar concrete vervolgstap." + "Een paar korte vragen over één workflow, en je krijgt een snapshot terug — met …" | English imperative-first → "Van X naar Y" + "Je krijgt … terug" |
| Step 1 question | "Vertel ons over de workflow die je wilt evalueren" | "Om welke workflow gaat het?" | "Tell us about" calque → short native question |
| Step 1 help | "Een paar details nu zorgen voor een bruikbare, specifieke snapshot — geen generieke." | "Met een paar details maken we de snapshot specifiek — geen generieke." | English subject-first → "Met X kunnen we Y" |
| Step 1 ownership | "Welk team of welke afdeling is eigenaar?" | "Wie is intern verantwoordelijk voor deze workflow?" | "is eigenaar" = "is owner" (anglicism) |
| Step 1 frequency | "Hoe vaak draait het?" | "Hoe vaak loopt deze workflow?" | Register-matched to "loopt vast" in step 2 |
| Step 1 step-by-step | "Wat doet het team vandaag, stap voor stap?" | "Hoe gaat dit nu, stap voor stap?" | "vandaag" = "today specifically"; meant "currently" |
| Step 2 help | "Dat vertelt ons welke handmatige stappen AI moet aanpakken." | "Op basis daarvan weten we waar AI handmatige stappen kan overnemen." | "Dat vertelt ons" = direct "That tells us" calque |
| Step 2 question | "Waar begint het werk eigenlijk?" | "Waar start het werk?" | "eigenlijk" reads as filler |
| Step 3 question + help | "Waar staat je data, en hoe schoon is die?" / "zonder eerst grote dataschoonmaak" | "Waar staat je data, en hoe op orde is die?" / "zonder dat we de data eerst hoeven op te schonen" | "schoon" = physically clean; data is **"op orde"** in Dutch |
| Step 3 cleanliness | "Hoe schoon en georganiseerd is de data nu?" | "Hoe op orde is de data nu?" | Same fix |
| Step 3 limits | "Specifieke data-formaten of software-beperkingen die we moeten weten?" | "Zijn er specifieke data-formaten of software-beperkingen waar we rekening mee moeten houden?" | Missing preposition; rephrased fully |
| Step 4 question + help | "Waar moeten mensen de controle houden?" / "Dit vormt de menselijke controlepunten die we in het systeem inbouwen." | "Waar moet de controle bij mensen blijven?" / "Op basis hiervan bouwen we de controlepunten in." | English "shapes the … we build in" → Dutch action-first |
| Step 4 sensitive | "Welk soort gevoelige data is erbij betrokken?" | "Welke gevoelige data komt erbij kijken?" | "komt erbij kijken" is the native idiom |
| Step 5 question (x2) | **"Hoe ziet succes eruit"** | "Wat is voor jullie het gewenste resultaat" / "Wat betekent succes voor dit project?" | The textbook English calque of "What does X look like" — both occurrences killed |
| Step 5 placeholder | "kopiëren de regels naar een spreadsheet" | "zetten de regels over naar een spreadsheet" | "overzetten" is more native for "transfer between systems" |
| Success p | "We bekijken de workflow … en komen binnen één werkdag terug — met waar AI past, …" | "Binnen één werkdag laten we weten waar AI past, …" | "met waar AI past" is impossible word order in native Dutch |

## Recap labels (JS-rendered on the success screen)

| Was | Now |
|---|---|
| "Data-locatie" | "Waar de data zit" |
| "Data-staat" | "Datakwaliteit" |
| "Succes ziet eruit als" | "Gewenst resultaat" |

## "Our thinking" / Insights — stays English on the NL Home

The Insights section on `nl/Home.html` is **kept in English**, including:
- The nav link ("Our thinking", not "Onze visie")
- The mobile-menu link
- The section eyebrow + heading + intro ("Our thinking" / "Writing about what works." / "Articles, not posts. Fewer, sharper.")
- All three insight card meta lines ("Technical AI" / "Business AI" + "X min read")
- All three card titles + bodies (verbatim from EN)
- The view-all link at the bottom ("View all our thinking - technical AI, business AI, plain talk, and AI in production")
- The footer "Our thinking" column link

The card hrefs still point to `../insights/...` so they land on the EN articles. The signal to a Dutch reader is consistent: *this whole section is English-only content*, no fake-Dutch summary that promises a Dutch read.

Editorial reason: the insight articles themselves are out of NL scope. If the cards were Dutch-summarised and the linked page was English, the reader gets a tonal jolt on click. Keeping the whole section EN avoids the jolt.

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
