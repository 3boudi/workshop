export interface StickerItem {
  id: string;
  name: string;
  title: string;
  borderType: 'white' | 'neon';
  tiltDeg: number;
  hoverTiltDeg: number;
  floatDelay: string;
  floatAnimation: 'float-a' | 'float-b';
  category: string;
  role: string;
  description: string;
  tagline: string;
  iconPath: string;
}

export const WORKSHOP_STICKERS: StickerItem[] = [
  {
    id: 'opencode',
    name: 'OPENCODE',
    title: 'OpenCode Agent',
    borderType: 'white',
    tiltDeg: -12,
    hoverTiltDeg: -4,
    floatDelay: '0s',
    floatAnimation: 'float-a',
    category: 'AI Coding Agent',
    role: 'Works directly with project files, analyzes code, and executes development tasks.',
    description: 'Autonomous AI terminal agent that reads codebases, writes multi-file features, and automates full-stack development directly in your workspace.',
    tagline: 'AI coding agent working with project files',
    iconPath: '/assets/stickers/opencode.svg',
  },
  {
    id: 'vscode',
    name: 'VSCODE',
    title: 'Visual Studio Code',
    borderType: 'neon',
    tiltDeg: 8,
    hoverTiltDeg: 2,
    floatDelay: '0.8s',
    floatAnimation: 'float-b',
    category: 'IDE / Editor',
    role: 'Primary code editor and development environment.',
    description: 'The industry-standard code editor equipped with language servers, Git integration, terminal, and AI assistant extensions.',
    tagline: 'Code editor & dev environment',
    iconPath: '/assets/stickers/vscode.svg',
  },
  {
    id: 'claude',
    name: 'CLAUDE',
    title: 'Claude 3.5 / 3.7',
    borderType: 'neon',
    tiltDeg: -10,
    hoverTiltDeg: -3,
    floatDelay: '1.2s',
    floatAnimation: 'float-a',
    category: 'AI Frontier Model',
    role: 'AI reasoning, code generation, debugging, and architecture design.',
    description: 'State-of-the-art AI model that translates plain-English requirements into robust code, solves algorithmic challenges, and guides full-stack architecture.',
    tagline: 'AI model for reasoning & coding',
    iconPath: '/assets/stickers/claude.svg',
  },
  {
    id: 'react',
    name: 'REACT',
    title: 'React 18 / 19',
    borderType: 'white',
    tiltDeg: 7,
    hoverTiltDeg: 1,
    floatDelay: '1.8s',
    floatAnimation: 'float-b',
    category: 'Frontend Framework',
    role: 'Building modern, interactive reactive user interfaces.',
    description: 'Component-driven UI library powering responsive frontends with declarative state management, reusable components, and instant user feedback.',
    tagline: 'Building interactive user interfaces',
    iconPath: '/assets/stickers/react.svg',
  },
  {
    id: 'supabase',
    name: 'SUPABASE',
    title: 'Supabase Cloud',
    borderType: 'neon',
    tiltDeg: -14,
    hoverTiltDeg: -6,
    floatDelay: '0.5s',
    floatAnimation: 'float-a',
    category: 'Backend & DB',
    role: 'PostgreSQL database, authentication, storage, and real-time APIs.',
    description: 'The open-source Firebase alternative offering instant Postgres databases, user authentication, row-level security, and serverless backends in minutes.',
    tagline: 'Database, auth & backend services',
    iconPath: '/assets/stickers/supabase.svg',
  },
  {
    id: 'git',
    name: 'GIT',
    title: 'Git Version Control',
    borderType: 'neon',
    tiltDeg: -15,
    hoverTiltDeg: -6,
    floatDelay: '1.4s',
    floatAnimation: 'float-a',
    category: 'Version Control',
    role: 'Tracking code changes, commits, branches, and versions.',
    description: 'Distributed version control system to safely manage code history, experiment with branches, and roll back changes seamlessly.',
    tagline: 'Distributed version control',
    iconPath: '/assets/stickers/git.svg',
  },
  {
    id: 'github',
    name: 'GITHUB',
    title: 'GitHub Cloud',
    borderType: 'white',
    tiltDeg: 3,
    hoverTiltDeg: 0,
    floatDelay: '2.1s',
    floatAnimation: 'float-b',
    category: 'Collaboration',
    role: 'Cloud repository hosting, CI/CD, and collaboration.',
    description: 'The global home for software projects, connecting Git repositories to cloud deployments and enabling team reviews.',
    tagline: 'Code hosting & collaboration',
    iconPath: '/assets/stickers/github.svg',
  },
  {
    id: 'netlify',
    name: 'NETLIFY',
    title: 'Netlify Cloud',
    borderType: 'neon',
    tiltDeg: 6,
    hoverTiltDeg: 1,
    floatDelay: '1.6s',
    floatAnimation: 'float-b',
    category: 'Cloud Deployment',
    role: 'Automated hosting, serverless functions, and global CDN delivery.',
    description: 'Modern deployment platform that pulls code from GitHub, builds your web application, and provides a public live URL instantly.',
    tagline: 'Website deployment & hosting',
    iconPath: '/assets/stickers/netlify.svg',
  },
];

export const STICKERS = WORKSHOP_STICKERS;
