export type PopHelpType = 'intro-vision' | 'system-design';

export type ProgramPhaseFilter = 'all' | 'foundations' | 'toolchain' | 'build';

export interface ToolBadgeItem {
  id: string;
  name: string;
  subtitle: string;
  iconPath: string;
  accent?: string;
}

export interface SubStepItem {
  code: string;
  title: string;
  description: string;
  tag?: string;
}

export interface ArchitectureMappingItem {
  layer: string;
  tool: string;
  role: string;
}

export interface NextStepFocusItem {
  title: string;
  description: string;
}

export interface ProgramStepItem {
  step: string;
  number: number;
  category: string;
  filterGroup: Exclude<ProgramPhaseFilter, 'all'>;
  title: string;
  subtitle: string;
  description: string;
  badgeColor: string;
  accentDotColor: string;
  highlights?: string[];
  popHelp?: {
    type: PopHelpType;
    buttonLabel: string;
    badgeLabel: string;
    hintText: string;
  };
  tools?: ToolBadgeItem[];
  architectureMap?: ArchitectureMappingItem[];
  checkpoint?: SubStepItem;
  subSteps?: SubStepItem[];
  nextStepPillars?: NextStepFocusItem[];
  featured?: boolean;
}

export const PROGRAM_FILTERS: { id: ProgramPhaseFilter; label: string; range: string }[] = [
  { id: 'all', label: 'Full Program', range: '01 – 07' },
  { id: 'foundations', label: 'Vision & Architecture', range: '01 – 03' },
  { id: 'toolchain', label: 'Tools & Roles', range: '04 – 05' },
  { id: 'build', label: 'Real Build & Next Step', range: '06 – 07' },
];

export const PROGRAM_STEPS: ProgramStepItem[] = [
  {
    step: '01',
    number: 1,
    category: 'Workshop Vision',
    filterGroup: 'foundations',
    title: 'Introduction: Beyond the Code',
    subtitle: 'Stepping outside syntax memorization into real-world AI engineering',
    description:
      'Discover the core mission of Beyond the Code: moving from isolated classroom coding exercises to using AI intentionally to build real applications and enter the tech market.',
    badgeColor: 'bg-blue-50 text-gdgc-blue border-gdgc-blue/30',
    accentDotColor: 'bg-gdgc-blue',
    highlights: [
      'Breaking out of tutorial & syntax-only learning',
      'Shipping real-world apps for market & freelance readiness',
      'Vibe Coder vs. Programmer Who Uses AI',
    ],
    popHelp: {
      type: 'intro-vision',
      buttonLabel: 'Open Pop-Help: Vibe Coder vs. AI Programmer',
      badgeLabel: 'Pop-Comment',
      hintText: 'Click to explore the workshop mission & compare Vibe Coding vs. real AI engineering',
    },
  },
  {
    step: '02',
    number: 2,
    category: 'Architecture',
    filterGroup: 'foundations',
    title: 'System Design of a Web Application',
    subtitle: 'How the Frontend, APIs, Server & Database actually work together',
    description:
      'A clear, beginner-friendly blueprint of what happens behind the scenes in any modern web app—connecting user interfaces with APIs, backend logic, and persistent databases.',
    badgeColor: 'bg-green-50 text-gdgc-green border-gdgc-green/30',
    accentDotColor: 'bg-gdgc-green',
    highlights: [
      'Frontend UI (What users see & interact with)',
      'APIs (The HTTP / JSON bridge connecting everything)',
      'Server & Database (Auth rules & persistent storage)',
    ],
    popHelp: {
      type: 'system-design',
      buttonLabel: 'Open Pop-Help: Interactive System Design Diagram',
      badgeLabel: 'Pop-Diagram',
      hintText: 'Interactive diagram explaining UI, APIs, Server & DB in plain terms',
    },
  },
  {
    step: '03',
    number: 3,
    category: 'Reality Check',
    filterGroup: 'foundations',
    title: 'Challenges of Launching an App in Algeria (and as a Beginner)',
    subtitle: 'Turning local constraints & beginner hurdles into an advantage',
    description:
      'Honest breakdown of the real obstacles beginners and Algerian student builders face when trying to launch—and practical strategies to ship anyway without paid cards or bloated setups.',
    badgeColor: 'bg-amber-50 text-amber-700 border-gdgc-yellow/40',
    accentDotColor: 'bg-gdgc-yellow',
    highlights: [
      'Payment & card barriers → leveraging 100% free cloud tiers',
      'The university gap → connecting C/Python theory to live URLs',
      'Leaving localhost → shipping products real users can actually open',
    ],
  },
  {
    step: '04',
    number: 4,
    category: 'Toolchain',
    filterGroup: 'toolchain',
    title: 'Introduction to the Core Tools',
    subtitle: 'Meeting the real-world stack powering our build from editor to production',
    description:
      'A guided tour of every modern tool we will work with during the workshop—understanding what each one does before combining them into a single workflow.',
    badgeColor: 'bg-red-50 text-gdgc-red border-gdgc-red/30',
    accentDotColor: 'bg-gdgc-red',
    tools: [
      {
        id: 'opencode',
        name: 'OpenCode',
        subtitle: 'AI Coding Agent',
        iconPath: '/assets/stickers/opencode.svg',
      },
      {
        id: 'vscode',
        name: 'VS Code + Live Server',
        subtitle: 'IDE & Instant Preview',
        iconPath: '/assets/stickers/vscode.svg',
      },
      {
        id: 'git',
        name: 'Git',
        subtitle: 'Version Control',
        iconPath: '/assets/stickers/git.svg',
      },
      {
        id: 'github',
        name: 'GitHub',
        subtitle: 'Cloud Code Repo',
        iconPath: '/assets/stickers/github.svg',
      },
      {
        id: 'supabase',
        name: 'Supabase',
        subtitle: 'Backend & Database',
        iconPath: '/assets/stickers/supabase.svg',
      },
      {
        id: 'netlify',
        name: 'Netlify',
        subtitle: 'Cloud Deployment',
        iconPath: '/assets/stickers/netlify.svg',
      },
    ],
  },
  {
    step: '05',
    number: 5,
    category: 'Workflow & Setup',
    filterGroup: 'toolchain',
    title: 'Role of Tools in Our System Design',
    subtitle: 'Mapping every tool to its layer and connecting the development loop',
    description:
      'How all six tools fit directly onto the System Design diagram from Step 02—so you always know which tool owns the UI, the database, version tracking, AI generation, and deployment.',
    badgeColor: 'bg-blue-50 text-gdgc-blue border-gdgc-blue/30',
    accentDotColor: 'bg-gdgc-blue',
    architectureMap: [
      {
        layer: 'Interface & Prompting',
        tool: 'OpenCode + VS Code Live Server',
        role: 'Build, edit & preview UI immediately in the browser',
      },
      {
        layer: 'Backend & Data',
        tool: 'Supabase (BaaS)',
        role: 'Auto-generated APIs, Authentication & PostgreSQL database',
      },
      {
        layer: 'Versioning & Ship',
        tool: 'Git + GitHub + Netlify',
        role: 'Save checkpoints, sync repo, and publish live on HTTPS',
      },
    ],
    checkpoint: {
      code: '5.1',
      title: 'Verify Everyone Has the Tools Ready',
      description:
        'Live setup checkpoint before building: confirm VS Code with Live Server, Git, OpenCode, and free GitHub, Supabase, and Netlify accounts are working on every laptop.',
      tag: 'Pre-Build Readiness Check',
    },
  },
  {
    step: '06',
    number: 6,
    category: 'Hands-On Build',
    filterGroup: 'build',
    title: 'Start Working on a Real Project',
    subtitle: 'End-to-end live application build from idea selection to testing',
    description:
      'Hands-on execution phase where we take a practical application idea all the way through frontend design prompting, Supabase BaaS backend wiring, and real-world testing.',
    badgeColor: 'bg-neon text-forest-darkest border-forest',
    accentDotColor: 'bg-neon',
    featured: true,
    subSteps: [
      {
        code: '6.1',
        title: 'Pick a Real Application Idea',
        description:
          'Define a useful, scoped product solving a concrete user need with clear core features.',
        tag: 'Product Scope',
      },
      {
        code: '6.2',
        title: 'Build Frontend (Intro to Design Prompting)',
        description:
          'Craft clear layout & UI prompts to generate clean components, typography, and responsive views.',
        tag: 'Design Prompting',
      },
      {
        code: '6.3',
        title: 'Build Backend with BaaS',
        description:
          'Create tables, connect API keys, handle auth & CRUD operations seamlessly using Supabase.',
        tag: 'Supabase BaaS',
      },
      {
        code: '6.4',
        title: 'Test Applications',
        description:
          'Verify end-to-end flows, catch broken states & edge cases, and validate live deployment.',
        tag: 'QA & Debugging',
      },
    ],
  },
  {
    step: '07',
    number: 7,
    category: 'Next Step',
    filterGroup: 'build',
    title: 'Next Step: What to Focus On After This Workshop',
    subtitle: 'Clear post-workshop direction to keep leveling up & enter the market',
    description:
      'A focused roadmap guiding students on exactly what skills and habits to double down on after the workshop so you keep building real products with confidence.',
    badgeColor: 'bg-green-50 text-gdgc-green border-gdgc-green/30',
    accentDotColor: 'bg-gdgc-green',
    nextStepPillars: [
      {
        title: 'Master Architecture Over Syntax',
        description:
          'Focus on understanding data models, API contracts, and debugging—not memorizing boilerplate.',
      },
      {
        title: 'Build & Deploy Real Projects',
        description:
          'Launch 2–3 complete, live applications solving real local or student problems on GitHub & Netlify.',
      },
      {
        title: 'Become Market-Ready with AI',
        description:
          'Combine solid CS fundamentals with structured AI prompting and Git workflows to stand out.',
      },
    ],
  },
];

export interface SystemDesignNode {
  id: 'ui' | 'api' | 'server' | 'db';
  label: string;
  shortRole: string;
  analogy: string;
  details: string;
  examples: string[];
  accentBg: string;
}

export const SYSTEM_DESIGN_NODES: SystemDesignNode[] = [
  {
    id: 'ui',
    label: 'Frontend (UI)',
    shortRole: 'Browser & Screen',
    analogy: 'Like the restaurant menu & dining table — everything the user sees, reads, and clicks.',
    details:
      'Runs in the user browser. Responsible for layout, buttons, forms, validation feedback, and sending requests when the user acts.',
    examples: ['React / HTML / CSS', 'VS Code + Live Server', 'Netlify CDN'],
    accentBg: 'bg-blue-50 border-gdgc-blue text-gdgc-blue',
  },
  {
    id: 'api',
    label: 'APIs (HTTP / JSON)',
    shortRole: 'The Bridge',
    analogy: 'Like the waiter carrying your order to the kitchen and bringing the food back.',
    details:
      'APIs carry structured JSON messages over HTTP (GET, POST, PUT, DELETE) so the Frontend and Backend speak a common, predictable language.',
    examples: ['REST / Fetch', 'JSON Payloads', 'Status Codes (200, 401, 404)'],
    accentBg: 'bg-amber-50 border-gdgc-yellow text-amber-700',
  },
  {
    id: 'server',
    label: 'Backend Server / Logic',
    shortRole: 'Security & Rules',
    analogy: 'Like the kitchen & security check — verifies who you are and prepares the right response.',
    details:
      'Authenticates users, enforces permissions (who can read/edit what), runs business logic, and keeps secret keys safe away from the browser.',
    examples: ['Authentication', 'Row-Level Security', 'Supabase Edge / BaaS'],
    accentBg: 'bg-green-50 border-gdgc-green text-gdgc-green',
  },
  {
    id: 'db',
    label: 'Database (DB)',
    shortRole: 'Permanent Memory',
    analogy: 'Like the organized storage room where every record is saved permanently.',
    details:
      'Stores users, posts, orders, and relationships in structured tables so nothing disappears when the user refreshes the page.',
    examples: ['PostgreSQL Tables', 'Primary & Foreign Keys', 'Supabase DB'],
    accentBg: 'bg-red-50 border-gdgc-red text-gdgc-red',
  },
];
