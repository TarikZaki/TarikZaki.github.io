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
  title: "Angular Front-End Developer",
  tagline:
    "I deliver production Angular features in enterprise B2B environments — from Nx monorepo applications to critical state-management fixes and guard architecture — with maintainable, well-tested code.",
  about:
    "Angular Front-End Developer based in Alexandria, Egypt, with hands-on experience delivering production features in enterprise B2B environments — from building full Nx monorepo Angular applications to resolving critical state-management bugs and restructuring guard architecture. Experienced with Angular Signals, RxJS, Standalone Components, Jest, and Agile/Scrum workflows. Known for writing maintainable, well-tested code and taking features end-to-end from implementation to production.",
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
      period: "Oct 2025 — Jul 2026",
      location: "Poland · IT Services & Software Development · Remote",
      highlights: [
        "Shipped 20+ features across GapMap Portal and PayStation (new kiosk application) using TypeScript and Angular within an Nx monorepo, collaborating with the Poland-based team via Jira and GitLab in an Agile/Scrum workflow.",
        "Built the Exhibitors feature end-to-end with Angular Material and Tailwind CSS — a listing page with search and filters, a details page, and a reusable Lightbox component now used in 3+ features across the Portal.",
        "Resolved 20+ bugs reported by QA across GapMap Portal, including a critical RxJS state-management issue causing infinite loading in the partition map — traced to an incorrect service-reset order and eliminated as a production blocker.",
        "Refactored 15+ components to Angular Signals, Standalone Components, and native control flow (@if/@for), adding Reactive Forms validation, Route Guards for access control, OnPush change detection to cut unnecessary re-renders, and route-level Lazy Loading to shrink the initial bundle.",
        "Consolidated duplicated Auth/Portal guard logic into a single config-driven TypeScript service, eliminating 8+ duplicate checks and simplifying future maintenance.",
        "Fixed responsive-design issues across 5 views using CSS3 and Tailwind CSS with BEM naming conventions, ensuring consistent layouts across mobile, tablet, and desktop viewports.",
        "Wrote Jest unit tests across components, services, guards, and HTTP Interceptors, helping the team consistently hit its sprint coverage targets.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: "Angular E-Commerce Platform (Nx Monorepo)",
      highlights: [
        "Built a full-featured e-commerce application structured as an Nx monorepo across 16 feature and shared libraries, implementing authentication (JWT, functional Route Guards), product browsing with URL-synced search/sort/pagination/filters, cart, checkout, and order history.",
        "Achieved 84% statement coverage with Jest across 38 test suites (93 tests), covering components, services, guards, validators, and HTTP Interceptors.",
        "Integrated the REST API using typed TypeScript services and HTTP Interceptors, and structured the app with Angular Signals, Standalone Components, Reactive Forms, and Lazy Loading.",
      ],
      tags: [
        "Angular",
        "Nx",
        "Signals",
        "Standalone Components",
        "Reactive Forms",
        "JWT",
        "Route Guards",
        "HTTP Interceptors",
        "Lazy Loading",
        "RxJS",
        "Jest",
        "TypeScript",
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
        "Signals",
        "Standalone Components",
        "Reactive Forms",
        "Route Guards",
        "HTTP Interceptors",
        "Change Detection (OnPush)",
        "Lazy Loading",
        "RxJS",
      ],
    },
    {
      group: "Personal Projects",
      items: ["JWT Authentication", "REST API Integration"],
    },
    {
      group: "Testing",
      items: ["Jest", "Unit Testing"],
    },
    {
      group: "Tools",
      items: ["Nx Monorepo", "Git", "GitHub", "GitLab"],
    },
    {
      group: "Practices",
      items: ["Responsive Design", "Agile/Scrum", "Jira"],
    },
  ],
  education: {
    degree: "B.Sc. Computer and Data Science",
    school: "Faculty of Computer and Data Science, Alexandria University",
    year: "Graduated 2025",
    grade: "GPA 3.3 / 4.0",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" },
  ],
  certifications: [],
};
