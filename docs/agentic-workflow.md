# Allerihe Agentic Development Protocol

## Operating principle

When a request has no clear objective or reliable source material, the system may still improve structure, accessibility, resilience, performance, and validation. It must not turn missing editorial intent into invented public facts.

## Work states

1. `brief`: capture the user's request and acceptance criteria.
2. `verified`: separate known facts, sourced claims, editorial positions, and open decisions.
3. `planned`: define a bounded change, owner, risk, and check.
4. `implemented`: make the smallest complete change, keeping content in the data layer.
5. `audited`: run content validation, production build, route checks, accessibility review, and source review where relevant.
6. `approved`: obtain human approval for factual interpretation, sensitive topics, and production release.

Work can move forward on technical tasks while editorial decisions remain open. It cannot move an unsourced factual claim or unapproved research into `approved`.

## Roles

- **Allerihe Coordinator** owns scope, acceptance criteria, risk and integration. It assigns independent work and preserves the verified brief.
- **Allerihe Researcher** verifies claims against primary evidence when possible and returns citation metadata, limitations, and uncertainty. It does not publish.
- **Allerihe Frontend** implements routes, interaction, glass tokens, responsive behavior and accessibility. It does not invent article copy or progress figures.
- **Allerihe Auditor** independently runs checks and reports release blockers. It does not edit the feature it is auditing.

## Content contract

Brand, chronology, topics, social destinations, and academy URL live in `src/data/brand.js`. Initiative status and progress live in `src/data/projects.js`. Each manifesto chapter declares `contentType` and a `sources` array in `src/data/manifesto.js`. A citation contains an id, title, publisher, HTTPS URL, and optional publication date. Empty sources are valid for explicitly editorial positions; they are not valid evidence for factual claims.

## Release gate

Run `npm run check`. Verify direct loads for `/`, `/manifiesto`, `/mision`, `/iniciativas`, `/comunidad`, and `/academia`. For interactive changes, test keyboard access and `prefers-reduced-motion`. Before claiming a release, confirm the served Vercel bundle matches the commit; a successful local build does not prove a production deployment.