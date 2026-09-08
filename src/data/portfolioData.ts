import { Project, SkillCategory, Coursework, TrajectorySemester, JourneyPhase, Milestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Alex Rivera',
  navHandle: 'dev.cs.sem3()',
  shortTitle: '3rd Semester Student • Developer • UI/UX Enthusiast',
  statusBadge: 'OPEN TO SUMMER 2025 INTERNSHIPS & COLLABS',
  introTag: '<INTRO> —— SEMESTER_03.INIT()',
  bio: "I'm a passionate Computer Science student turning early curiosities into clean, functional, and visually deliberate software. Bridging systems logic with empathetic interface design.",
  university: 'University Institute of Technology',
  location: 'Austin, TX • Open to Remote',
  email: 'alex.rivera.dev@example.edu',
  linkedin: 'linkedin.com/in/alex-rivera-student',
  github: 'github.com/alexrivera-dev',
  discord: '@alex_codes_dev',
  degree: 'Bachelor of Science in Computer Science',
  gpa: '3.8 / 4.0',
  currentSemester: '3rd Sem',
  semesterProgress: 'Semester 3 / 8',
  expectedGraduation: 'May 2027',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
};

export const HIGHLIGHT_STATS = [
  {
    id: 'sem',
    value: '3rd Sem',
    label: 'B.S. Computer Science',
    sub: 'Sophomore standing',
    icon: 'GraduationCap',
  },
  {
    id: 'done',
    value: '5+ Done',
    label: 'Built & Deployed',
    sub: 'Full web & system tools',
    icon: 'FolderGit2',
  },
  {
    id: 'tools',
    value: '10+ Tools',
    label: 'Tech & Languages',
    sub: 'C++, JS, React, Figma',
    icon: 'TerminalSquare',
  },
  {
    id: 'days',
    value: '100+ Days',
    label: 'Always Learning',
    sub: 'Daily coding streak',
    icon: 'Flame',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    badge: 'Core',
    badgeType: 'Core',
    footerText: '4 Active Languages',
    skills: [
      { name: 'C++', detail: 'OOP & Data Structures', status: 'Proficient' },
      { name: 'C Language', detail: 'Pointers & Memory Basics', status: 'Proficient' },
      { name: 'Python', detail: 'Scripting, Automation & OOP', status: 'Proficient' },
      { name: 'Java', detail: 'Application Fundamentals', status: 'Learning' },
    ],
  },
  {
    title: 'Web Dev',
    badge: 'Frontend',
    badgeType: 'Frontend',
    footerText: 'Modern Web Ecosystem',
    skills: [
      { name: 'React.js', detail: 'Hooks, Components, SPA', status: 'Proficient' },
      { name: 'JavaScript (ES6+)', detail: 'Async/Await, DOM, Fetch', status: 'Proficient' },
      { name: 'Tailwind CSS', detail: 'Fluid Grids & Dark Theme', status: 'Proficient' },
      { name: 'HTML5 & CSS3', detail: 'Semantic & Responsive', status: 'Proficient' },
    ],
  },
  {
    title: 'UI/UX Design',
    badge: 'Design',
    badgeType: 'Design',
    footerText: 'Human-Centered',
    skills: [
      { name: 'Figma', detail: 'Components & Auto-Layout', status: 'Proficient' },
      { name: 'Prototyping', detail: 'Interactive Wireframing', status: 'Proficient' },
      { name: 'Design Systems', detail: 'Typography & Spacing Tokens', status: 'Learning' },
      { name: 'User Research', detail: 'Usability Heuristics', status: 'Learning' },
    ],
  },
  {
    title: 'Tools & Env',
    badge: 'DevOps',
    badgeType: 'DevOps',
    footerText: 'Everyday Workflow',
    skills: [
      { name: 'Git & GitHub', detail: 'Branches, PRs, Versioning', status: 'Proficient' },
      { name: 'VS Code', detail: 'Extensions, Debugger setup', status: 'Proficient' },
      { name: 'Linux / Bash', detail: 'Shell scripts & CLI nav', status: 'Proficient' },
      { name: 'Vercel / Firebase', detail: 'Deployments & Firestore', status: 'Learning' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'campus-pulse',
    num: '01',
    category: 'Campus Web App',
    categoryType: 'web',
    title: 'CampusPulse',
    subtitle: 'College Event & Club Hub',
    description:
      'A responsive portal built for university student clubs. Features real-time event RSVP sync, schedule timetable filters, and notification alerts via Firebase.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    overview:
      'Engineered to solve the fragmented communication between 40+ campus clubs and student bodies. CampusPulse replaces outdated bulletin boards with an active, real-time platform where student leaders publish events and attendees RSVP seamlessly.',
    architectureHighlights: [
      'Firestore realtime listeners synchronization with optimistic UI updates for instant attendance feedback',
      'Multi-factor filtering engine (by major, club category, venue, and date range) with sub-10ms query times',
      'Granular role-based permissions separating verified Club Leads from regular attendee accounts',
      'Automated email calendar invites with standard iCal file integration',
    ],
    metrics: [
      { label: 'Active Users', value: '450+ Students' },
      { label: 'Latency', value: '< 65ms' },
      { label: 'Events Hosted', value: '85+ Gatherings' },
    ],
    liveUrl: 'https://campuspulse.demo',
    githubUrl: 'https://github.com/alexrivera-dev/campuspulse',
  },
  {
    id: 'fintrack',
    num: '02',
    category: 'Fintech / Analytics',
    categoryType: 'web',
    title: 'FinTrack',
    subtitle: 'Personal Expense & Budget Tracker',
    description:
      'A personal finance dashboard for college students to track dining, textbook expenses, and weekly budgets. Features SVG spending charts and local storage persistence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript', 'Chart.js', 'Tailwind CSS'],
    overview:
      'Designed specifically around the student cash-flow lifecycle, FinTrack breaks down semester allowances into manageable daily burns, category donut visualizations, and threshold warnings for food and supplies.',
    architectureHighlights: [
      'Interactive SVG charts with zero-dependency rendering for high-performance mobile viewport responsiveness',
      'Structured schema in browser LocalStorage with automatic JSON export and import backups',
      'Category budgeting algorithm calculating daily remaining velocity based on month progress',
      'Dark ambient financial color scheme engineered with accessible WCAG AAA contrast',
    ],
    metrics: [
      { label: 'Expense Categories', value: '12 Default' },
      { label: 'Bundle Size', value: '18 KB' },
      { label: 'Render Time', value: '60 FPS' },
    ],
    liveUrl: 'https://fintrack.demo',
    githubUrl: 'https://github.com/alexrivera-dev/fintrack',
  },
  {
    id: 'unigrade',
    num: '03',
    category: 'Systems & Database',
    categoryType: 'systems',
    title: 'UniGrade',
    subtitle: 'Student Records Management System',
    description:
      'Desktop and lightweight web records system for calculating GPA, managing credit loads, parsing syllabi, and storing academic records with relational database integrity.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'SQLite', 'Flask / Tkinter'],
    overview:
      'Created to address the clunky legacy portal of our university. UniGrade provides students with an offline-first system to track cumulative GPA, compute required final exam scores to reach targets, and inspect historical transcripts.',
    architectureHighlights: [
      'Normalized 3NF SQLite schema maintaining strict referential integrity across terms, courses, and grade scales',
      'Weighted GPA calculator engine supporting letter-grade variances, credit hours, and pass/fail thresholds',
      'Dual interface architecture sharing the exact same Python business logic via CLI and lightweight Flask UI',
      'Comprehensive parameterized queries eliminating SQL injection risks entirely',
    ],
    metrics: [
      { label: 'DB Schema', value: '3NF Relational' },
      { label: 'Execution', value: 'Native Python 3' },
      { label: 'Query Speed', value: '0.4ms avg' },
    ],
    liveUrl: 'https://unigrade.demo',
    githubUrl: 'https://github.com/alexrivera-dev/unigrade',
  },
  {
    id: 'skycast',
    num: '04',
    category: 'API Integration',
    categoryType: 'web',
    title: 'SkyCast',
    subtitle: 'Modern Geolocation Weather App',
    description:
      'A sleek weather application with geolocation detection, hourly rain forecasts, air quality index, and dynamic atmospheric theme changes responding to time of day.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'OpenWeather API', 'Tailwind'],
    overview:
      'Built as an exploration of asynchronous state machines and external API reliability. SkyCast blends precise meteorological coordinates with subtle CSS animations that reflect outdoor weather conditions in real-time.',
    architectureHighlights: [
      'Custom React hook abstraction for browser Navigator Geolocation API with graceful fallback to IP lookup',
      'Local caching layer with 15-minute TTL to prevent rate limits and ensure instant subsequent reloads',
      'Atmospheric color transitions adapting the background gradient smoothly between sunrise, noon, golden hour, and dusk',
      '24-hour horizontal forecast scrub bar with hourly precipitations, humidity, and UV Index ratings',
    ],
    metrics: [
      { label: 'API Uptime', value: '99.9%' },
      { label: 'Forecast Range', value: '7 Days / 48h' },
      { label: 'Data Refresh', value: 'Adaptive' },
    ],
    liveUrl: 'https://skycast.demo',
    githubUrl: 'https://github.com/alexrivera-dev/skycast',
  },
  {
    id: 'taskflow',
    num: '05',
    category: 'Productivity Tool',
    categoryType: 'web',
    title: 'TaskFlow',
    subtitle: 'Minimalist Productivity & Pomodoro',
    description:
      'A clean Kanban-inspired productivity planner built for student study workflows, featuring drag-and-drop state, integrated Pomodoro timer, and markdown notes.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'CSS Modules'],
    overview:
      'Conceived during midterms to tackle assignment fragmentation. TaskFlow unites coursework checklists, customizable 25/5 study timers with ambient audio cues, and markdown assignment notes into a single focused view.',
    architectureHighlights: [
      'Immutable state management for Kanban columns (Backlog, In Flight, Review, Finished) with optimistic drag-reordering',
      'Dedicated Web Worker timer loop ensuring Pomodoro countdown precision even when the browser tab is in background',
      'Markdown parsing engine with syntax highlighting for code blocks in study notes',
      'Keyboard shortcut palette (Cmd/Ctrl + K) for rapid task entry without lifting fingers from the keys',
    ],
    metrics: [
      { label: 'Typescript Strict', value: '100% Typed' },
      { label: 'Audio Engine', value: 'Web Audio API' },
      { label: 'State Sync', value: 'Instant' },
    ],
    liveUrl: 'https://taskflow.demo',
    githubUrl: 'https://github.com/alexrivera-dev/taskflow',
  },
  {
    id: 'mindease',
    num: '06',
    category: 'Figma Case Study',
    categoryType: 'design',
    title: 'MindEase',
    subtitle: 'Student Mental Wellness App Concept',
    description:
      'A high-fidelity Figma case study addressing college exam anxiety and peer check-ins. Complete with user journey maps, interactive prototype flows, and design iterations.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    isCaseStudy: true,
    overview:
      'A comprehensive UX research initiative inspired by student mental health surveys conducted across 120+ undergraduates. MindEase emphasizes low-friction daily mood logging, anonymous peer affirmation boards, and guided decompression exercises.',
    architectureHighlights: [
      'Atomic Design System containing 80+ component variants, auto-layout 5.0 tokens, and dark/light color variables',
      'User journey mapping covering pre-exam stress spikes, intervention notifications, and calming micro-interactions',
      'Interactive Figma prototypes with smart-animate spring easing, micro-haptics simulation, and voice prompts',
      'Comprehensive heuristic evaluation and WCAG AA accessibility compliance audit across all text hierarchies',
    ],
    metrics: [
      { label: 'Interviews', value: '24 Students' },
      { label: 'Tokens & Variants', value: '80+ Assets' },
      { label: 'Figma Screens', value: '32 Frames' },
    ],
    liveUrl: 'https://figma.com/@alexrivera/mindease',
    githubUrl: 'https://github.com/alexrivera-dev/mindease-design-specs',
  },
];

export const COURSEWORK: Coursework[] = [
  {
    title: 'Data Structures & Algorithms',
    description: 'Trees, Graphs, Sorting, Big-O Complexity',
    iconName: 'Binary',
  },
  {
    title: 'Object-Oriented Programming (C++)',
    description: 'Inheritance, Polymorphism, Memory Allocation',
    iconName: 'Cpu',
  },
  {
    title: 'Database Management Systems',
    description: 'Relational Schema, SQL, Normalization',
    iconName: 'Database',
  },
  {
    title: 'Discrete Mathematics',
    description: 'Set Theory, Logic, Combinatorics, Graph Theory',
    iconName: 'Layers',
  },
  {
    title: 'Web Technologies',
    description: 'Client-Server Architecture, DOM, HTTP Protocols',
    iconName: 'Globe',
  },
  {
    title: 'Computer Systems Architecture',
    description: 'Instruction Sets, ALU, Cache & Pipeline basics',
    iconName: 'Server',
  },
];

export const TRAJECTORY: TrajectorySemester[] = [
  {
    semester: 'Semester 1',
    term: 'Fall 2023',
    courses: 'Calculus I, C Programming & Logic',
    description: "Built first terminal apps; Dean's List.",
  },
  {
    semester: 'Semester 2',
    term: 'Spring 2024',
    courses: 'C++ OOP & Discrete Math',
    description: 'Learned classes, pointers, memory models.',
  },
  {
    semester: 'Semester 3',
    term: 'Current Fall',
    courses: 'DSA, Web Stack & DBMS',
    description: 'Focusing on LeetCode patterns and React full-stack.',
    isCurrent: true,
  },
  {
    semester: 'Semester 4',
    term: 'Spring 2025',
    courses: 'OS, Software Engineering & Networks',
    description: 'Preparation for Summer 2025 internship.',
  },
];

export const JOURNEY_PHASES: JourneyPhase[] = [
  {
    phase: 'Phase 1',
    year: '2022',
    tag: 'CS Foundations',
    title: 'The Spark of Curiosity',
    description:
      'Wrote my first "Hello World" in C. Spent weeks understanding loops, arrays, pointers, and memory blocks. Realized the thrill of commanding a machine through structured algorithmic code.',
  },
  {
    phase: 'Phase 2',
    year: 'Early 2023',
    tag: 'Terminal Utilities',
    title: 'First Projects Built',
    description:
      'Transitioned from textbook drills to creating small tools: a CLI grade tracker, text-based adventure puzzles, and basic file parsers in Python. Discovered how empowering it is to solve personal pain points with self-written software.',
  },
  {
    phase: 'Phase 3',
    year: 'Late 2023',
    tag: 'Design & HCI',
    title: 'Discovering UI/UX',
    description:
      "Realized that powerful code is wasted if users can't navigate it effortlessly. Dove into Figma, learned color contrast, typographic hierarchies, and interactive wireframing. Empathy became a core part of my engineering approach.",
  },
  {
    phase: 'Phase 4',
    year: 'Mid 2024',
    tag: 'Web Apps',
    title: 'Full-Stack Exploration',
    description:
      'Mastered React and modern Tailwind CSS. Connected client interfaces with RESTful APIs, managed asynchronous application states, integrated authentication, and deployed projects live to Vercel and Netlify.',
  },
  {
    phase: 'Phase 5',
    year: 'Fall 2024 — Present',
    tag: 'Active Focus',
    title: 'Current Horizon (3rd Semester CS)',
    description:
      'Deepening knowledge in Data Structures, algorithmic problem-solving on LeetCode, contributing to college club open-source repositories, and actively preparing applications for Summer 2025 engineering internships.',
    isActive: true,
  },
];

export const MILESTONES: Milestone[] = [
  {
    id: 'meta-cert',
    title: 'Meta Front-End Developer Specialization',
    provider: 'Coursera • Meta Certification',
    status: 'In Progress',
    statusColor: 'cyan',
    description:
      'Comprehensive deep-dive into advanced React, UX testing principles, version control workflows, and accessibility standards.',
    metaLeft: 'Expected Nov 2024',
    hasExternalLink: true,
  },
  {
    id: 'hack-campus',
    title: 'HackCampus 2024 - Top 10 Finalist',
    provider: 'Annual Inter-College Hackathon',
    status: 'Finalist',
    statusColor: 'violet',
    description:
      'Architected and built the initial prototype of CampusPulse in 36 continuous hours alongside a team of three fellow sophomores.',
    metaLeft: 'Spring 2024',
    metaRight: '360+ Participants',
  },
  {
    id: 'leetcode',
    title: '200+ LeetCode & HackerRank Solved',
    provider: 'DSA Problem Solving',
    status: 'Consistent',
    statusColor: 'cyan',
    description:
      'Continuous focus on Two-Pointer methods, Hash Tables, Binary Search, Linked Lists, Trees, and dynamic programming foundations.',
    metaLeft: 'Arrays, Strings & Trees',
    metaRight: '📈 Solved',
  },
  {
    id: 'gdsc',
    title: 'Modern React & State Architecture',
    provider: 'Google Developer Student Club (GDSC)',
    status: 'Completed',
    statusColor: 'emerald',
    description:
      'Attended intensive 4-week technical workshop covering custom hooks, Context API patterns, reducer architecture, and Vite toolchains.',
    metaLeft: 'Winter 2023',
    metaRight: 'GDSC Certified',
  },
  {
    id: 'coding-club',
    title: 'Technical Committee Member • University Coding Club',
    provider: 'College of Engineering Student Chapter',
    status: 'Leadership',
    statusColor: 'violet',
    description:
      'Organizing bi-weekly introductory coding seminars for 1st-year students on Git fundamentals and algorithmic thinking. Maintained club website templates and managed student hackathon submission pipelines.',
    metaLeft: 'Aug 2024 - Present',
    metaRight: '120+ Active Club Members',
  },
];
