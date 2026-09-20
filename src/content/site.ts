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
  { label: "Impact", href: "#impact" },
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
      "Led development of a custom Linux kernel for Android, working in C on systems-level performance and stability patches. Ported the IMS service to Android 10 on the MediaTek mt6771 platform, and recruited and onboarded contributors as the project grew.",
    stack: ["Linux kernel", "C", "IMS", "Make", "GitHub Actions"],
    href: "https://github.com/CyberJalagam/kernel_oppo_mt6771",
  },
  {
    title: "DotOS",
    role: "Device Maintainer",
    period: "2020 - 2021",
    blurb:
      "Maintained device tree sources and official builds for DotOS, keeping supported hardware current through platform releases and shipping regular updates to users.",
    stack: ["AOSP", "Device trees", "C/C++", "Bash"],
    href: null,
  },
  {
    title: "Resurrection Remix",
    role: "Device Maintainer",
    period: "2020 - 2021",
    blurb:
      "Maintained device support for one of the longest-running Android custom ROM projects, handling build bring-up, testing and debugging across releases.",
    stack: ["AOSP", "Device trees", "C/C++", "Bash"],
    href: null,
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

/** One posting. Several can sit under a single employer. */
export type Role = {
  title: string;
  period: string;
  /** Employment type and arrangement, e.g. "Contract Part-time · Hybrid". */
  meta?: string;
  points: string[];
};

export type Job = {
  org: string;
  /** Combined tenure, shown only when an employer has more than one role. */
  span?: string;
  location?: string;
  href: string | null;
  roles: Role[];
};

export const experience: Job[] = [
  {
    org: "Dravix Studios",
    location: "Toronto, ON",
    href: "https://dravixstudios.com",
    roles: [
      {
        title: "Co-Founder & Lead Developer",
        period: "Aug 2026 - Present",
        points: [
          "Co-founded a web solutions, AI and IT consulting company serving clients in Toronto and India, shipping 9 production sites and holding 3 recurring paying clients.",
          "Build and deploy client systems in Next.js on Vercel, including alomcare.com, orisdentistry.com and wamiqadesigns.com, an automated ordering flow with payment gateway checkout, and a patient management system.",
          "Own each engagement end to end: requirements, build, hosting, automation and ongoing maintenance.",
        ],
      },
    ],
  },
  {
    org: "Seneca Student Federation",
    location: "Toronto, ON · Hybrid",
    href: "https://ssfinc.ca",
    roles: [
      {
        title: "Vice-Chair, Board of Directors",
        period: "May 2026 - Present",
        points: [
          "Elected by students to help govern a student organization with a $13.7M annual operating budget, holding fiduciary responsibility for budget approval and organizational oversight.",
          "Ran a gap analysis of the federation website (ssfinc.ca), identifying functionality and accessibility shortfalls and presenting recommendations to the board.",
          "Work directly with the Executive Director and operational managers to align board decisions with day-to-day operations.",
          "Prepare board materials and accountability questions supporting oversight of the Executive Director and senior staff, and review governance and policy documents for compliance and equity concerns.",
        ],
      },
    ],
  },
  {
    org: "Seneca Polytechnic",
    span: "2 yrs 2 mos",
    location: "Toronto, ON",
    href: null,
    roles: [
      {
        title: "Senior Student Office Assistant",
        period: "Apr 2025 - Present",
        meta: "Contract Part-time · Hybrid",
        points: [
          "Lead student services operations and host orientation events for incoming students, coordinating presenters across departments.",
          "Administrator and Lead Mentor for the peer mentoring program: onboard and train mentors, and oversee mentor-mentee matching on the Chronus platform for 300+ students.",
          "Host and facilitate Peer2Peer Lounges, Campus Welcome Day, campus tours and virtual orientations, and drive digital engagement promoting student services online.",
        ],
      },
      {
        title: "Student Help Desk Representative",
        period: "Apr 2026 - Aug 2026",
        meta: "Contract Part-time · On-site",
        points: [
          "First point of contact for students seeking academic and campus service support, triaging and routing cases to the right department.",
          "Provided technical assistance to students navigating Seneca systems and platforms, and documented interactions to maintain service continuity.",
        ],
      },
      {
        title: "Open House Ambassador",
        period: "Oct 2024 - Jul 2025",
        meta: "Contract Part-time · On-site",
        points: [
          "Student representative at open houses: led campus tours showcasing key facilities, greeted guests and provided wayfinding.",
          "Shared insights on the student campus experience with prospective students and families.",
        ],
      },
      {
        title: "Peer Mentor",
        period: "Aug 2024 - Aug 2025",
        points: [
          "Helped new students with academic and off-campus transition, directing them to the right campus resources and following up to keep them on track.",
        ],
      },
    ],
  },
  {
    org: "Google Developer Group",
    location: "Toronto, ON",
    href: null,
    roles: [
      {
        title: "Vice President, Seneca Polytechnic",
        period: "Jan 2026 - May 2026",
        points: [
          "Rebuilt a campus developer chapter that had been inactive for several semesters.",
          "Coordinated AI workshops and ran the tech booth at International Days across two campuses.",
        ],
      },
    ],
  },
  {
    org: "Shake Shack Canada",
    span: "1 yr 11 mos",
    location: "Toronto, ON · On-site",
    href: null,
    roles: [
      {
        title: "Certified Trainer",
        period: "Nov 2025 - Present",
        meta: "Permanent Part-time",
        points: [
          "Onboard and certify new team members on point-of-sale systems, operational tools and service standards.",
          "Primary escalation point for complex guest issues during high-volume shifts.",
        ],
      },
      {
        title: "Team Member",
        period: "Nov 2024 - Nov 2025",
        meta: "Permanent Part-time",
        points: [],
      },
    ],
  },
  {
    org: "LCBO",
    location: "Toronto, ON · On-site",
    href: null,
    roles: [
      {
        title: "Customer Service Representative",
        period: "Nov 2024 - Jan 2025",
        meta: "Seasonal",
        points: [
          "Front-line service and point-of-sale support through a high-volume seasonal retail period.",
        ],
      },
    ],
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
    { k: "Based in", v: site.location },
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
};

/**
 * Quantified outcomes from the student-services and governance work.
 * Figures come from the involvement write-up; keep them defensible.
 * `**double asterisks**` mark the words the Impact section emphasises.
 */
export const impact = {
  stats: [
    { value: "900+", label: "Mentees in the program I run" },
    { value: "100+", label: "Mentors onboarded and matched" },
    { value: "150+", label: "Students through pre-arrival support" },
    { value: "10+", label: "Campus tours across four open houses" },
  ],
  highlights: [
    "Advanced from Peer Mentor to **Lead Mentor** in Fall 2025, taking over the whole peer mentoring program: **mentor** and **mentee** matching, platform inquiries, and drop-in sessions for mentors hitting problems.",
    "Hosted the **International Virtual Orientation** and **Virtual Orientation for All Students** for the **Fall 2026** term, managing attendees and running the flow on the day.",
    "Kept the program running through a **full-time staff strike**, absorbing administrative duties so that **no student was left without support**.",
    "Personally mentored **25+ mentees**, including a reassignment after a student's poor experience with a previous **mentor**.",
    "Ran **10+ campus tours** across four open house cycles, reaching **30+ prospective students** and their families.",
    "Hosted **meet-and-greet lounges** for international virtual orientation and in-person events, and sat on the **student experience panel**.",
    "Escalated **platform usability** problems students were hitting to program coordinators, feeding into program improvements.",
    "Wrote **exam-preparation posts** on MySeneca and contributed content to **Seneca Student Life's Instagram**.",
    "Volunteered at the **Taiwanese Student Association's** inaugural King campus event, and supported locker programming and clearances.",
  ],
  awards: [
    "International Student Achievement Award, Summer 2026",
    "Student Ambassador Award, Winter 2026",
    "PMI Project Management Ready",
    "Certified Blockchain Associate",
  ],
};
