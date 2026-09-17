/**
 * Every piece of copy and every link on the site lives here.
 * Nothing else should hardcode content. Edit this file, not the components.
 * `href: null` renders the label as a muted, non-clickable tag.
 */

export const site = {
  name: "Jaishnav Prasad",
  initials: "JP",
  role: "Software Engineer",
  location: "Toronto, ON",
  email: "prasadjaishnav@gmail.com",
  github: "CyberJalagam",
  githubUrl: "https://github.com/CyberJalagam",
  linkedinUrl: "https://www.linkedin.com/in/jaishnav-p",
  resumeHref: "/Jaishnav_Prasad_Resume.pdf",
  available: "Open to Summer 2027 internships",
  url: "https://jaishnav.dev",
} as const;

export const hero = {
  greeting: "Hi, I'm Jaishnav",
  body: "I build backends, automate the boring parts of shipping software, and spend a lot of time inside Linux. Four years of open-source systems work: a custom Android OS, a kernel, and the pipelines that build them.",
  serif: "systems, not screenshots",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Open Source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Link = { label: string; href: string | null };

export type Project = {
  title: string;
  year: string;
  kind: string;
  blurb: string;
  detail: string[];
  stack: string[];
  links: Link[];
};

export const projects: Project[] = [
  {
    title: "Patient Management System",
    year: "2026",
    kind: "Backend · Production",
    blurb:
      "A clinical records system running in production at an alternative medicine clinic, managing 1,000+ patient records.",
    detail: [
      "Patient registration with generated ID cards, program enrollment, payments, and consultation logs.",
      "Relational schema spanning patients, practitioners, programs, enrollments, sessions and payments, with an append-only audit log.",
      "Role-based access separating the front-desk view from the clinical view.",
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Python", "Docker"],
    links: [{ label: "Private client system", href: null }],
  },
  {
    title: "Android Build & Release Automation",
    year: "2021 - 2026",
    kind: "Infrastructure · CI/CD",
    blurb:
      "A pipeline that turns a multi-hour manual AOSP setup into a single command, and ships every push to beta testers automatically.",
    detail: [
      "GitHub Actions workflow that compiles a custom Android kernel on every push and publishes the build to a Telegram channel for testers.",
      "Provisioning tooling that stands up a clean AOSP build environment, applies device patches, and runs unattended ROM builds on a remote server.",
    ],
    stack: ["Python", "Bash", "Linux", "GitHub Actions", "Make"],
    links: [
      {
        label: "aosp_rom_automation",
        href: "https://github.com/CyberJalagam/aosp_rom_automation",
      },
    ],
  },
  {
    title: "Book Discovery Platform",
    year: "2026",
    kind: "Full-stack",
    blurb:
      "A full-stack reading app with a React front end and a separate Express API, deployed as two services.",
    detail: [
      "JWT auth over bcrypt-hashed credentials, route guards on protected pages, and per-user saved collections in MongoDB.",
      "Public catalog API integrated with client-side caching and paginated search.",
    ],
    stack: ["Next.js", "Express", "MongoDB", "JWT", "Vercel"],
    links: [{ label: "Repository", href: null }],
  },
  {
    title: "LearnPath",
    year: "2025",
    kind: "Full-stack · Team of 4",
    blurb:
      "A learning platform built with three other developers, containerised for a reproducible environment across machines.",
    detail: [
      "Contributed backend models and application logic; produced the relational schema and architecture diagrams the team worked from.",
      "Containerised with Docker behind Nginx.",
    ],
    stack: ["Django", "PostgreSQL", "Docker", "Nginx"],
    links: [{ label: "Repository", href: null }],
  },
];

export type OpenSourceEntry = {
  title: string;
  role: string;
  period: string;
  blurb: string;
  stack: string[];
  href: string | null;
};

export const openSource: OpenSourceEntry[] = [
  {
    title: "CipherOS",
    role: "Co-founder & Core Developer",
    period: "Dec 2020 - Dec 2022",
    blurb:
      "Co-founded V1 of a custom Android OS distribution and maintained official device builds for a public user community: releases, triage, and contributor review. Booted the first working build by adapting the base architecture to unsupported hardware, resolving the boot-level failures that blocked the initial release.",
    stack: ["AOSP", "C/C++", "Java", "Python", "Bash"],
    href: "https://github.com/CipherOS",
  },
  {
    title: "Alien Kernel",
    role: "Lead Developer",
    period: "Dec 2020 - Oct 2021",
    blurb:
      "Led development of a custom Linux kernel for Android, working in C on systems-level performance and stability patches. Recruited and onboarded contributors as the project grew.",
    stack: ["Linux kernel", "C", "Make", "GitHub Actions"],
    href: "https://github.com/CyberJalagam/kernel_oppo_mt6771",
  },
  {
    title: "Project Sakura",
    role: "Device Maintainer",
    period: "Jul 2020 - Jun 2021",
    blurb:
      "Maintained device tree sources for a second AOSP project: device testing, debugging, and regular updates keeping builds current with upstream security patches.",
    stack: ["AOSP", "Device trees", "Bash"],
    href: null,
  },
];

export type Job = {
  role: string;
  org: string;
  period: string;
  points: string[];
  href: string | null;
};

export const experience: Job[] = [
  {
    role: "Co-Founder & Lead Developer",
    org: "Dravix Studios",
    period: "Aug 2026 - Present",
    points: [
      "Co-founded a web development and AI solutions studio serving businesses in Toronto and India.",
      "Ship live client sites in Next.js on Vercel, owning requirements through to hosting and maintenance.",
    ],
    href: null,
  },
  {
    role: "Vice-Chair, Board of Directors",
    org: "Seneca Student Federation",
    period: "May 2026 - Present",
    points: [
      "Elected by students to help govern a student organization with a $13.7M annual operating budget, holding fiduciary responsibility for budget approval and organizational oversight.",
      "Ran a technical gap analysis of the organization's Drupal 8 website, identified end-of-life security exposure, and raised structured accountability questions to leadership.",
    ],
    href: null,
  },
  {
    role: "Vice President",
    org: "Google Developer Group on Campus, Seneca",
    period: "Jan 2026 - May 2026",
    points: [
      "Rebuilt a campus developer chapter that had been inactive for several semesters.",
      "Coordinated AI workshops and ran the tech booth at International Days across two campuses.",
    ],
    href: null,
  },
  {
    role: "Senior Student Office Assistant",
    org: "Seneca Polytechnic",
    period: "Oct 2024 - Present",
    points: [
      "Lead front-line student services operations, resolving inquiries in person, by phone and online, and escalating complex cases.",
      "Administrator and Lead Mentor for the peer mentoring program, onboarding mentors and overseeing matching on the Chronus platform.",
    ],
    href: null,
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C++", "Bash"],
  },
  {
    group: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Node.js",
      "Express",
      "Next.js",
      "REST APIs",
    ],
  },
  {
    group: "Data",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Oracle SQL",
      "MySQL",
      "Schema design",
      "Query optimization",
    ],
  },
  {
    group: "Infrastructure",
    items: [
      "Linux",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
      "AWS",
      "GCP",
      "Vercel",
    ],
  },
];

export const about = {
  paragraphs: [
    "I'm a software development student at Seneca Polytechnic in Toronto, currently in the Honours Bachelor of Technology program after finishing a Computer Programming diploma at a 3.7 GPA.",
    "I started out in the Android custom-ROM scene, co-founding an OS, leading a kernel, and learning build systems the hard way, on hardware nobody officially supported. That is still how I like to work: close to the metal, with the boring parts automated.",
    "Outside of code I sit on the board of a student federation with a $13.7M budget, which has taught me more about writing a clear argument than any class has.",
  ],
  facts: [
    { k: "Based in", v: "Toronto, ON" },
    { k: "Studying", v: "HBTech, Software Development" },
    { k: "GPA", v: "3.7" },
    { k: "Graduating", v: "Summer 2028" },
    { k: "Languages", v: "English, Hindi, Tamil, Malayalam" },
  ],
  education: [
    {
      school: "Seneca Polytechnic",
      program: "Honours Bachelor of Technology, Software Development",
      period: "2026 - 2028 (expected)",
    },
    {
      school: "Seneca Polytechnic",
      program: "Ontario College Diploma, Computer Programming · GPA 3.7",
      period: "2024 - 2026",
    },
  ],
  awards: [
    "International Student Achievement Award, Summer 2026",
    "Student Ambassador Award, Winter 2026",
    "PMI Project Management Ready",
    "Certified Blockchain Associate",
  ],
};
