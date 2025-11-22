import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
  icon?: LucideIcon;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
  level: number; // 1-100
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown Content
  tags: string[];
  readTime: string;
}