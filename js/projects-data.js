// projects-data.js - Portfolio Project Catalog & In-Depth Details
const projectsData = [
  {
    id: 'devpulse',
    title: 'DevPulse — Real-Time Telemetry & APM Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    summary: 'High-throughput developer analytics and infrastructure monitoring platform with sub-second WebSocket streaming.',
    description: 'DevPulse aggregates server health metrics, container diagnostics, and application error traces into intuitive real-time dashboards. Designed for microservice architectures requiring minimal latency overhead.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'WebSockets', 'Tailwind CSS'],
    liveUrl: 'https://example.com/demo/devpulse',
    repoUrl: 'https://github.com/sanjai/devpulse',
    features: [
      'Sub-second live streaming of server metrics via resilient WebSockets with automatic reconnection',
      'Configurable alert channels for Discord, Slack, and PagerDuty triggered by spike thresholds',
      'High-performance time-series data aggregation reducing query response times by 65%',
      'Role-based access control (RBAC) with audit trail logs and multi-tenant organization workspaces'
    ],
    architecture: 'Built with a React/Tailwind frontend communicating with a modular Node.js/Express backend, backed by Redis for pub/sub messaging and PostgreSQL for long-term historical time-series storage.',
    accentColor: '#6366f1'
  },
  {
    id: 'omniflow',
    title: 'OmniFlow — AI Workflow & Pipeline Orchestrator',
    category: 'fullstack',
    categoryLabel: 'Full-Stack / AI',
    summary: 'Visual node-based canvas enabling teams to chain LLM intelligence, custom webhooks, and data pipelines without code.',
    description: 'OmniFlow features an interactive infinite canvas where developers and non-technical teams can design resilient automation workflows that execute parallel background tasks and AI transformations.',
    tech: ['TypeScript', 'Python', 'FastAPI', 'React Flow', 'MongoDB', 'Docker', 'Gemini API'],
    liveUrl: 'https://example.com/demo/omniflow',
    repoUrl: 'https://github.com/sanjai/omniflow',
    features: [
      'Interactive drag-and-drop canvas with dynamic validation and execution step previews',
      'Native integration with Gemini & LLM APIs for automated text extraction, summarization, and reasoning',
      'Asynchronous task queuing with background retries, rate-limiting guards, and webhook triggers',
      'Encrypted secrets management for zero-trust API credential storage'
    ],
    architecture: 'Frontend powered by React Flow with custom nodes; asynchronous backend orchestration executed by FastAPI and Celery worker pools connected to MongoDB.',
    accentColor: '#8b5cf6'
  },
  {
    id: 'cloudvault',
    title: 'CloudVault — End-to-End Encrypted Cloud Storage',
    category: 'backend',
    categoryLabel: 'Backend / Security',
    summary: 'Zero-knowledge client-side encrypted cloud storage service with fast chunked uploads and granular file sharing permissions.',
    description: 'CloudVault guarantees complete data privacy through browser-side cryptography before payloads ever touch the wire, delivering enterprise cloud file storage without trusting intermediate infrastructure.',
    tech: ['Node.js', 'Express', 'AWS S3', 'PostgreSQL', 'Redis', 'WebCrypto API', 'Docker'],
    liveUrl: 'https://example.com/demo/cloudvault',
    repoUrl: 'https://github.com/sanjai/cloudvault',
    features: [
      'Zero-knowledge AES-256-GCM client-side encryption ensuring only the user holds cryptographic keys',
      'Resumable multi-part upload engine handling files up to 10GB directly to AWS S3 via signed URLs',
      'Expiring share links with optional password protection, download quotas, and revocation',
      'Comprehensive audit logs capturing file access, sharing events, and security violations'
    ],
    architecture: 'Stateless Node.js microservice architecture with AWS S3 for object storage, PostgreSQL for metadata and access policies, and Redis for distributed session caching.',
    accentColor: '#10b981'
  },
  {
    id: 'paysphere',
    title: 'PaySphere — Global Billing & Subscription Engine',
    category: 'fullstack',
    categoryLabel: 'Fintech / Full-Stack',
    summary: 'Turnkey recurring billing infrastructure supporting multi-currency pricing, tiered subscriptions, and tax reconciliation.',
    description: 'PaySphere abstracts complex payment mechanics for modern SaaS businesses, featuring robust webhooks processing, customer portals, automated dunning management, and multi-tier subscription plans.',
    tech: ['Next.js', 'TypeScript', 'Stripe API', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com/demo/paysphere',
    repoUrl: 'https://github.com/sanjai/paysphere',
    features: [
      'Dual-gateway support with Stripe and PayPal for international multi-currency checkouts',
      'Idempotent webhook pipeline guaranteeing zero double-charges during network failures',
      'Self-service customer portal for subscription tier upgrades, downgrades, and billing history',
      'Automated invoice generation and payment failure recovery emails'
    ],
    architecture: 'Built on Next.js App Router with Prisma ORM and PostgreSQL; leverages robust database transaction locks and cryptographically verified webhook handlers.',
    accentColor: '#ec4899'
  },
  {
    id: 'hyperui',
    title: 'HyperUI — Modern Headless Component System',
    category: 'frontend',
    categoryLabel: 'Frontend / UI/UX',
    summary: 'Accessible, themeable component library and design system crafted with 40+ production-grade interactive elements.',
    description: 'HyperUI solves accessibility and consistency challenges across web teams with unstyled primitives, fluid responsive tokens, and keyboard-first navigation patterns.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Framer Motion', 'Vite'],
    liveUrl: 'https://example.com/demo/hyperui',
    repoUrl: 'https://github.com/sanjai/hyperui',
    features: [
      '100% WCAG 2.1 AA compliant keyboard navigation and full screen-reader accessibility',
      'Fully customizable color-token engine supporting multiple themes and light/dark modes',
      'Comprehensive Storybook playground with live prop controls and responsive viewport testing',
      'Zero-bloat tree-shakable package with zero unnecessary runtime dependencies'
    ],
    architecture: 'Engineered in TypeScript with React and Tailwind CSS, bundled with modern Vite tooling and documented in Storybook.',
    accentColor: '#38bdf8'
  },
  {
    id: 'datamesh',
    title: 'DataMesh — High-Throughput API Gateway & Proxy',
    category: 'backend',
    categoryLabel: 'Backend / Cloud',
    summary: 'Distributed reverse proxy and edge rate limiter capable of sustaining 15,000+ RPS with token-bucket algorithms.',
    description: 'DataMesh serves as a lightweight, dependable API front door providing dynamic load balancing, JWT authentication validation, IP throttling, and detailed request tracing.',
    tech: ['Node.js', 'Go', 'Redis', 'Docker', 'Prometheus', 'Grafana', 'Nginx'],
    liveUrl: 'https://example.com/demo/datamesh',
    repoUrl: 'https://github.com/sanjai/datamesh',
    features: [
      'Sliding window and token-bucket rate limiting backed by distributed Redis clusters',
      'Automatic circuit breaker mechanism to prevent cascading upstream server downtime',
      'Real-time metrics export compatible with Prometheus and Grafana dashboards',
      'Sub-5ms overhead on request proxying with asynchronous streaming pipelines'
    ],
    architecture: 'High-speed edge proxy architecture combining Go and Node.js with distributed Redis instances for atomic count synchronization across nodes.',
    accentColor: '#f59e0b'
  }
];

// SVG Illustrations for Project Cards
const projectSvgThumbnails = {
  devpulse: `
    <svg class="thumb-bg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" rx="12" fill="#131d33"/>
      <circle cx="60" cy="50" r="18" fill="#6366f1" fill-opacity="0.25"/>
      <path d="M40 140 L90 90 L140 120 L210 60 L270 95 L320 40" stroke="#6366f1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M40 155 L100 125 L160 145 L220 100 L280 120 L320 85" stroke="#a5b4fc" stroke-width="2" stroke-dasharray="4 4" stroke-opacity="0.5"/>
      <circle cx="210" cy="60" r="5" fill="#6366f1"/>
      <circle cx="320" cy="40" r="5" fill="#ec4899"/>
      <rect x="230" y="30" width="70" height="24" rx="4" fill="#1e293b" stroke="#334155"/>
      <text x="242" y="46" fill="#10b981" font-size="10" font-family="monospace">99.98% UP</text>
    </svg>`,
  omniflow: `
    <svg class="thumb-bg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" rx="12" fill="#18132b"/>
      <rect x="40" y="55" width="75" height="50" rx="8" fill="#241b40" stroke="#8b5cf6" stroke-width="1.5"/>
      <rect x="150" y="35" width="85" height="50" rx="8" fill="#241b40" stroke="#ec4899" stroke-width="1.5"/>
      <rect x="150" y="105" width="85" height="50" rx="8" fill="#241b40" stroke="#6366f1" stroke-width="1.5"/>
      <rect x="270" y="75" width="65" height="50" rx="8" fill="#241b40" stroke="#10b981" stroke-width="1.5"/>
      <path d="M115 80 C 130 80, 135 60, 150 60" stroke="#8b5cf6" stroke-width="2" fill="none"/>
      <path d="M115 80 C 130 80, 135 130, 150 130" stroke="#6366f1" stroke-width="2" fill="none"/>
      <path d="M235 60 C 250 60, 255 100, 270 100" stroke="#ec4899" stroke-width="2" fill="none"/>
      <path d="M235 130 C 250 130, 255 100, 270 100" stroke="#10b981" stroke-width="2" fill="none"/>
      <circle cx="55" cy="72" r="4" fill="#a78bfa"/>
      <circle cx="165" cy="52" r="4" fill="#f472b6"/>
      <circle cx="285" cy="92" r="4" fill="#34d399"/>
    </svg>`,
  cloudvault: `
    <svg class="thumb-bg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" rx="12" fill="#0d231e"/>
      <circle cx="180" cy="95" r="50" stroke="#10b981" stroke-width="2" stroke-opacity="0.3"/>
      <circle cx="180" cy="95" r="32" fill="#133d32" stroke="#10b981" stroke-width="1.5"/>
      <path d="M174 95 L174 88 C174 84.7 176.7 82 180 82 C183.3 82 186 84.7 186 88 L186 95" stroke="#34d399" stroke-width="2" stroke-linecap="round"/>
      <rect x="171" y="94" width="18" height="15" rx="3" fill="#10b981"/>
      <circle cx="180" cy="101" r="2" fill="#0d231e"/>
      <path d="M80 60 L120 60 M80 80 L140 80 M80 100 L110 100" stroke="#10b981" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
      <path d="M240 100 L280 100 M250 120 L290 120" stroke="#10b981" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  paysphere: `
    <svg class="thumb-bg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" rx="12" fill="#24101e"/>
      <rect x="70" y="45" width="220" height="110" rx="10" fill="#38152b" stroke="#ec4899" stroke-width="1.5"/>
      <rect x="70" y="70" width="220" height="22" fill="#1f0a17"/>
      <rect x="95" y="115" width="40" height="14" rx="3" fill="#ec4899" fill-opacity="0.4"/>
      <circle cx="250" cy="120" r="12" fill="#f43f5e" fill-opacity="0.6"/>
      <circle cx="265" cy="120" r="12" fill="#fb923c" fill-opacity="0.6"/>
      <path d="M95 100 L125 100" stroke="#f472b6" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  hyperui: `
    <svg class="thumb-bg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" rx="12" fill="#0c1e2e"/>
      <rect x="50" y="40" width="110" height="36" rx="6" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="75" y="63" fill="#38bdf8" font-size="12" font-family="sans-serif" font-weight="600">Button</text>
      <rect x="180" y="40" width="130" height="36" rx="6" fill="#162c40" stroke="#334155" stroke-width="1"/>
      <rect x="50" y="95" width="260" height="60" rx="8" fill="#162c40" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
      <circle cx="75" cy="125" r="14" fill="#38bdf8" fill-opacity="0.3"/>
      <rect x="102" y="115" width="120" height="8" rx="4" fill="#64748b"/>
      <rect x="102" y="129" width="80" height="6" rx="3" fill="#475569"/>
    </svg>`,
  datamesh: `
    <svg class="thumb-bg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" rx="12" fill="#241a0d"/>
      <circle cx="180" cy="100" r="38" fill="#38250f" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="80" cy="50" r="16" fill="#38250f" stroke="#f59e0b" stroke-opacity="0.5"/>
      <circle cx="80" cy="150" r="16" fill="#38250f" stroke="#f59e0b" stroke-opacity="0.5"/>
      <circle cx="280" cy="50" r="16" fill="#38250f" stroke="#f59e0b" stroke-opacity="0.5"/>
      <circle cx="280" cy="150" r="16" fill="#38250f" stroke="#f59e0b" stroke-opacity="0.5"/>
      <line x1="96" y1="58" x2="146" y2="85" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="96" y1="142" x2="146" y2="115" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="214" y1="85" x2="264" y2="58" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="214" y1="115" x2="264" y2="142" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="160" y="104" fill="#fbbf24" font-size="11" font-family="monospace" font-weight="700">15k RPS</text>
    </svg>`
};

