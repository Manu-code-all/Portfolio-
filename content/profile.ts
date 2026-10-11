import { SitePerson, ProfileLinks } from "@/lib/types";

export const profile: SitePerson = {
  name: "Manu Gupta",
  headline: "I like understanding how the pieces fit together.",
  bio: "I’m Manu Gupta, a third-year B.Tech Computer Science student at Galgotias University. I build full-stack and backend systems, from a concurrency-safe clinic booking platform to a constraint solver for railway maintenance planning, with a focus on correctness, security and behaviour I can measure.\n\nRight now, I’m deepening my foundations in data structures and algorithms and database systems while building projects that I verify with load tests, unit tests and real deployments.",
  education: {
    institution: "Galgotias University",
    degree: "B.Tech, Computer Science",
    dates: "September 2024–2028",
    cgpa: "7.7 / 10.0",
  },
};

export const profileLinks: ProfileLinks = {
  github: "https://github.com/Manu-code-all",
  linkedin: "https://www.linkedin.com/in/manu-gupta-176ba91b8/",
  leetcode: "https://leetcode.com/u/manug9868/",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/manug9868/",
  email: "manug9868@gmail.com",
  resumePdfPath: "/resume.pdf",
};
