# Abandoned But Not Forgotten

A bilingual-ready educational website about 17 NASA machines left on the Moon, Mars and beyond.

## Run
Open `index.html` in a browser, or use VS Code Live Server. No build step or package installation is required.

## Structure
- `index.html`: home page, explorer and quiz
- `pages/`: Moon, Mars, Beyond, machine details, timeline and About
- `css/`: base styles and responsive layout
- `js/data.js`: artifact and quiz data
- `js/app.js`: rendering, filtering, navigation helpers and interactions
- `js/i18n.js`: English and Arabic UI strings

## Important content note
This is a functional student-project starter. The 17 entries are concise educational summaries and must be checked against primary NASA/JPL sources before public submission. Add a source URL for each factual claim and verify mission status wording carefully. The contact form is front-end demo only.


## Scientific review and references
See `data/SCIENCE_AUDIT.md` for the NASA-source register, date corrections, status terminology guidance, and the outstanding issue about how the project counts its 17 machines. The `year` shown in cards is a key end/deployment year, not necessarily the launch year. Each artifact should eventually display its own source links on its details page.

## Language switching
The language button switches the complete interface between English and Arabic, including the home-page sections, filters, mission cards, quiz, catalog detail pages, timeline, About page, and contact form messages. The selected language is saved in the browser with `localStorage`, so it remains selected while navigating between pages. The document direction changes automatically between LTR (English) and RTL (Arabic), with additional RTL layout rules in `css/style.css`.

- `js/i18n.js`: all shared UI strings plus Arabic translations for the 17 catalog records and 7 quiz questions.
- `js/app.js`: applies static translations and redraws dynamic content after a language change.
