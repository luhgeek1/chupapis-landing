export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  link: string;
  tags: string[];
  imagePlaceholderColor: string;
  imageSrc?: string;
  techHighlights?: string[];
  type: string;
  timeline:string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  techStack: string[];
  experience: string;
  projectsCount: number;
  imagePlaceholderColor: string;
  imageSrc?: string;
}

export interface TeamStats {
  totalProjects: number;
  yearsCombined: number;
  coffeesConsumed: number;
}
