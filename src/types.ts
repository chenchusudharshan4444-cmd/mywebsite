export interface Project {
  id: string;
  num: string;
  category: string;
  categoryType: 'all' | 'web' | 'systems' | 'design';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  isCaseStudy?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  architectureHighlights?: string[];
  metrics?: { label: string; value: string }[];
  overview?: string;
}

export interface SkillItem {
  name: string;
  detail: string;
  status: 'Proficient' | 'Learning';
}

export interface SkillCategory {
  title: string;
  badge: string;
  badgeType: 'Core' | 'Frontend' | 'Design' | 'DevOps';
  footerText: string;
  skills: SkillItem[];
}

export interface Coursework {
  title: string;
  description: string;
  iconName: string;
}

export interface TrajectorySemester {
  semester: string;
  term: string;
  courses: string;
  description: string;
  isCurrent?: boolean;
}

export interface JourneyPhase {
  phase: string;
  year: string;
  tag: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export interface Milestone {
  id: string;
  title: string;
  provider: string;
  status: string;
  statusColor?: string;
  description: string;
  metaLeft: string;
  metaRight?: string;
  hasExternalLink?: boolean;
}
