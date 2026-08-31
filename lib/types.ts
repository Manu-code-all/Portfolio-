export type Project = {
  slug: "student-management" | "medicity" | "job-portal";
  title: string;
  oneLiner: string;
  problem: string;
  architectureSummary: string;
  implementationChoices: string[];
  stack: string[];
  outcome: string;
  repoUrl: string;
  liveUrl?: string;
  order: number;
};

export type SkillGroup = {
  groupName: string;
  skills: string[];
};

export type Achievement = {
  title: string;
  date: string;
  description: string;
  link?: string;
};

export type ProfileLinks = {
  github: string;
  linkedin: string;
  leetcode: string;
  geeksforgeeks: string;
  email: string;
  resumePdfPath: "/resume.pdf";
};

export type SitePerson = {
  name: string;
  headline: string;
  bio: string;
  education: {
    institution: string;
    degree: string;
    dates: string;
    cgpa: string;
  };
};
