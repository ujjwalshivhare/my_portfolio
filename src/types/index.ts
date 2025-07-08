export interface UserInfo {
  name: string;
  role: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  githubUrl: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Education {
  degree: string;
  college: string;
  cgpa: string;
  passout: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface ContactForm {
  name: string;
  subject: string;
  message: string;
}

export interface OrbitTool {
  name: string;
  icon: string;
  angle: number;
  speed: number;
}