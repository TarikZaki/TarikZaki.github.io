export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  name: string;
  highlights: string[];
  tags: string[];
  github?: string;
  demo?: string;
  note?: string;
}

export const profile = {
  name: "Tarek Zaki",
  title: "Front-End Developer (Angular)",
  tagline:
    "I build and maintain enterprise Angular applications — from Reactive Forms and RxJS to Nx monorepos and Jest — with a focus on maintainable code and thoughtful architecture.",
  about:
    "Front-End Developer based in Alexandria, Egypt, with hands-on experience building and maintaining enterprise Angular SPAs in production. Experienced with Reactive Forms, RxJS, state management, component-level Signals, control flow (@if/@for), and Nx monorepos, with unit testing using Jest within Agile/Scrum workflows. Focused on writing maintainable code, responsive design, and improving application architecture through refactoring and code review.",
  email: "zakitarek20@gmail.com",
  phone: "+20 121 277 1975",
  phoneHref: "+201212771975",
  location: "Alexandria, Egypt",
  cvPath: "/Tarek_Zaki_CV.pdf",
  links: {
    github: "https://github.com/TarikZaki",
    linkedin: "https://www.linkedin.com/in/tarek-zaki/",
    website: "https://tarikzaki.github.io",
  },
  experience: [
    {
      company: "GAMP",
      role: "Front-End Developer",
      period: "Oct 2025 — Present",
      location: "Poland · IT Services & Software Development · Remote",
      highlights: [
        "Delivered features and bug fixes across GapMap (Portal) and PayStation, a new kiosk-machine application added to the team's Nx Angular monorepo, working under senior review in an Agile/Scrum workflow with Jira.",
        "Built the Exhibitors feature end-to-end — a listing page with search and filters, a details page, and a reusable fullscreen Lightbox component now reused elsewhere in the portal.",
        "Diagnosed and fixed a state-management bug causing the partition map to get stuck in infinite loading when switching selling types, tracing it to an incorrect service-reset order.",
        "Refactored existing components to use component-level Signals and native control flow (@if/@for), and resolved responsive-design issues across multiple views to improve layout consistency across screen sizes.",
        "Refactored route-access logic across Auth and Portal guards into a single config-driven service, replacing duplicated, hard-to-maintain checks.",
        "Wrote unit tests with Jest to validate component behavior and support the team's test coverage goals.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: "Angular E-Commerce (Nx Monorepo)",
      highlights: [
        "Built a full-featured e-commerce app with Angular 20 (standalone components, Signals, lazy-loaded routes, @if/@for control flow), structured as an Nx monorepo across 16 feature and shared libraries.",
        "Implemented authentication (JWT, functional route guards), product browsing with search/sort/pagination/filters synced to URL query params, cart, checkout, and order history — integrated with a REST API via typed services and HTTP interceptors.",
        "Reached 84% statement coverage with Jest across 38 test suites and 93 tests, covering components, services, guards, validators, and interceptors.",
      ],
      tags: [
        "Angular 20",
        "Nx",
        "Signals",
        "Reactive Forms",
        "JWT",
        "HTTP Interceptors",
        "RxJS",
        "Jest",
        "TypeScript",
        "SCSS",
      ],
      demo: "https://tarikzaki.github.io/angular-ecommerce/",
      github: "https://github.com/TarikZaki/angular-ecommerce",
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
        "Reactive Forms",
        "RxJS",
        "Standalone Components",
        "Routing",
        "Route Guards",
        "State Management",
        "Signals",
        "Control Flow (@if / @for)",
      ],
    },
    {
      group: "Personal Projects",
      items: [
        "JWT Authentication",
        "HTTP Interceptors",
        "Lazy Loading",
      ],
    },
    {
      group: "Testing",
      items: ["Unit Testing (Jest)"],
    },
    {
      group: "Tools",
      items: ["Nx Monorepo", "REST API Integration", "Git", "GitHub", "GitLab"],
    },
    {
      group: "Practices",
      items: ["Agile/Scrum", "Remote Collaboration", "Responsive Design", "Jira", "Code Review"],
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
