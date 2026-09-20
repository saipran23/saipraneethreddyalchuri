// Technologies listed in saipran23/saipran23 README, reviewed 2026-09-20.
// Cloud platforms are intentionally excluded at the owner's request.
export interface Skill {
  name: string;
  slug?: string;
}
export interface SkillGroup {
  title: string;
  note: string;
  items: Skill[];
}
export const skillGroups: SkillGroup[] = [
  {
    title: "FRONTEND",
    note: "Building the part people see, touch, and use.",
    items: [
      { name: "React", slug: "react" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Bootstrap", slug: "bootstrap" },
    ],
  },
  {
    title: "BACKEND",
    note: "Connecting interfaces to application logic and APIs.",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
    ],
  },
  {
    title: "DATABASES",
    note: "Modelling, querying, and working with persistent data.",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
    ],
  },
  {
    title: "LANGUAGES",
    note: "The languages I use to turn problems into programs.",
    items: [
      { name: "Java", slug: "openjdk" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Python", slug: "python" },
      { name: "C", slug: "c" },
    ],
  },
  {
    title: "TOOLS",
    note: "The everyday toolkit behind my development workflow.",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
      { name: "Postman", slug: "postman" },
      { name: "VS Code" },
      { name: "Linux", slug: "linux" },
    ],
  },
];
