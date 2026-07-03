export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  note?: string;
}

export const profile = {
  name: "Tarek Zaki",
  title: "Junior Front-End Developer (Angular)",
  tagline:
    "I build and maintain enterprise Angular applications — from Angular Signals and RxJS to Nx monorepos and Jest — with a focus on maintainable code and thoughtful architecture.",
  about:
    "Junior Front-End Developer with hands-on experience building and maintaining enterprise Angular applications in production. Experienced with Angular Signals, RxJS, Nx monorepos, and Jest, within Agile/Scrum workflows. Focused on writing maintainable code and improving application architecture through refactoring and code review.",
  email: "zakitarek20@gmail.com",
  phone: "+20 121 277 1975",
  phoneHref: "+201212771975",
  location: "Egypt",
  cvPath: "/Tarek_Zaki_CV.pdf",
  links: {
    github: "https://github.com/TarikZaki",
    linkedin: "https://www.linkedin.com/in/tarek-zaki/",
  },
  experience: [
    {
      company: "GAMP",
      role: "Junior Front-End Developer",
      period: "Oct 2025 — Present",
      location: "Poland · IT Services & Software Development · Remote",
      highlights: [
        "Delivered features and bug fixes across GapMap (Portal) and PayStation, a new kiosk-machine application added to the team's Nx Angular monorepo, working under senior review in an Agile/Scrum workflow with Jira.",
        "Built the Exhibitors feature end-to-end — a listing page with search and filters, a details page, and a reusable fullscreen Lightbox component now reused elsewhere in the portal.",
        "Diagnosed and fixed a state-management bug causing the partition map to get stuck in infinite loading when switching selling types, tracing it to an incorrect service-reset order.",
        "Refactored existing components to use Signals and native control flow (@if/@for), and resolved responsive-design issues across multiple views to improve layout consistency across screen sizes.",
        "Refactored route-access logic across Auth and Portal guards into a single config-driven service, replacing duplicated, hard-to-maintain checks.",
        "Wrote unit tests with Jest to validate component behavior and support the team's test coverage goals.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: "E-Commerce Front-End",
      description:
        "Personal front-end e-commerce application built with Angular, covering product listing, cart, and checkout flows. Unit tests with Jest cover core components and logic.",
      tags: ["Angular", "TypeScript", "Jest"],
      note: "GitHub link coming soon",
    },
    {
      name: "GapMap Portal & PayStation",
      description:
        "Enterprise Angular applications within an Nx monorepo — portal features including Exhibitors, partition maps, and a new kiosk-machine app. Professional work at GAMP.",
      tags: ["Angular", "Nx", "RxJS", "Signals"],
      note: "Proprietary",
    },
  ] satisfies Project[],
  skills: [
    {
      group: "Frontend",
      items: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SCSS",
        "Angular Material",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {
      group: "Angular",
      items: [
        "Signals",
        "RxJS",
        "Standalone Components",
        "Routing",
        "Route Guards",
      ],
    },
    {
      group: "Testing",
      items: ["Jest (unit testing)"],
    },
    {
      group: "Tools",
      items: ["Nx Monorepo", "REST API integration", "Git", "GitHub", "GitLab"],
    },
    {
      group: "Practices",
      items: ["Agile/Scrum", "Jira", "Code Review"],
    },
  ],
  education: {
    degree: "B.Sc. Computer and Data Science",
    school: "Faculty of Computer and Data Science, Alexandria University",
    year: "2025",
    grade: "GPA 3.3 / 4.0",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" },
  ],
  certifications: [],
};
