# SafetyOf.AI — The Security Layer for CSOAI

Multi-AI consensus security platform. Real-time threat detection, Byzantine Council verification, and AI safety compliance — the security layer powering the Council for the Safety of AI.

## Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel (optimized)
- **AI Models**: OpenAI GPT-4, Anthropic Claude 3.5, Google Gemini 2.0, Deepseek V3
- **Threat Intel**: PhishTank, URLhaus, OpenPhish, AlienVault OTX

## Features

- **Multi-AI Consensus Engine** — Queries 4-33 AI models simultaneously with Byzantine voting
- **URL Security Scanner** — Real-time scanning against 4 threat intelligence databases
- **Byzantine Council Dashboard** — 33 agents across 3 architecture families, 6 continents
- **Threat Intelligence Feed** — Live aggregated threat data with auto-refresh
- **Security Dashboard** — Scans, scores, history, and threat monitoring
- **Stripe Billing** — Free (3/day), Pro ($9/mo), Expert ($29/mo), Enterprise tiers

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your API keys to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel (vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy

The `vercel.json` is already configured with security headers and multi-region deployment.

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/consensus` | POST | Multi-AI consensus verification |
| `/api/scan` | POST | URL security scanning |
| `/api/threats` | GET | Threat intelligence feed |
| `/api/threats` | POST | Report a new threat |
| `/api/auth` | POST | Authentication (login/signup) |
| `/api/webhook` | POST | Stripe webhook handler |
| `/api/health` | GET | System health check |

## Environment Variables

See `.env.example` for all required variables. At minimum:

- `OPENAI_API_KEY` — GPT-4 access
- `ANTHROPIC_API_KEY` — Claude access
- `GOOGLE_GEMINI_API_KEY` — Gemini access
- `STRIPE_SECRET_KEY` — Payment processing

The app works with graceful fallbacks when API keys aren't configured.

## Testing

Full E2E coverage with both **Playwright** (multi-browser) and **Cypress**.

```bash
# Playwright — all browsers
npx playwright install --with-deps
npm run test:pw

# Playwright — headed mode (visible browser)
npm run test:pw:headed

# Cypress — headless
npm run test:cy

# Cypress — interactive GUI
npm run test:cy:open

# Run both suites
npm run test:e2e

# CI build + test (used by GitHub Actions)
npm run test:ci
```

**Playwright specs** (9 files, ~100 tests): landing, navigation, dashboard, scanner, threat-intel, byzantine, pricing, about, API routes — runs across Chromium, Firefox, WebKit, and mobile viewports.

**Cypress specs** (6 files, ~60 tests): pages, dashboard, scanner, byzantine, API routes, pricing — with custom commands for scan workflows.

**GitHub Actions** CI runs automatically on push/PR to `main` with Playwright, Cypress, lint, type-check, and build steps.

## CSOAI Stack Position

```
CSOAI Platform ─── Governance, Licensing, Compliance
    │
    ├── SafetyOf.AI ◀── YOU ARE HERE
    │   └── Multi-AI Consensus + Threat Intel + Byzantine Verification
    │
    ├── CEASAI Training ─── 20-Week Analyst Certification
    │
    ├── Byzantine Council ─── 33 AI Agents, 6 Continents
    │
    ├── Prosperity Fund ─── AI Wealth-Sharing
    │
    └── Watchdog System ─── Public Oversight
```

## License

Proprietary — Council for the Safety of AI Ltd.
