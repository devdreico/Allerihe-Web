# Allerihe: project rules

## Product constraints
- Allerihe is a Spanish-language knowledge divulgator. Preserve its science, technique, history, geopolitics, politics, philosophy, and general-culture scope.
- Keep the required chronology: planned in February 2025; formal development began in October 2026.
- Quonceptory is the academy at `https://quonceptory.presentto.online`.
- Preserve the exact easter-egg message in `src/components/Footer.jsx`.
- Do not invent project progress, sources, social accounts, credentials, audience metrics, or claims presented as research.

## Engineering standards
- Use the existing Vite, React Router, and `IBM Plex Sans Variable` design system. Keep glass surfaces legible and avoid decorative card nesting.
- Keep routes deep-linkable; verify direct loads and refreshes when changing routing or `vercel.json`.
- Put brand facts in `src/data/brand.js`, projects in `src/data/projects.js`, and editorial chapters with their explicit source lists in `src/data/manifesto.js`.
- Honor keyboard navigation, visible focus, semantic headings, reduced motion, and the mobile menu's Escape behavior.
- Run `npm run check` before proposing a change as complete. It validates editorial data and builds the production bundle.

## Editorial integrity
- Treat unsourced writing as an editorial position, not as established fact.
- A published factual claim needs a source with a title, publisher, and HTTPS URL. Keep citations attached to the relevant chapter or article.
- When the brief or evidence is missing, improve structure, accessibility, performance, and test coverage; leave factual content as an explicit editorial decision instead of guessing.
- Never auto-publish research. Require a human review for evidence, sensitive interpretations, and release to production.

See `docs/agentic-workflow.md` for the project development protocol.