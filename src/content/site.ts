// All site copy and links. `href: null` renders a muted, non-clickable label.

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
    title: "Kernel Build & Release Pipeline",
    year: "2026",
    kind: "Infrastructure · CI/CD",
    blurb:
      "Push a commit and four flashable kernel builds come back. Two devices, two variants, nobody cutting a release by hand.",
    detail: [
      "Runs on every push and pull request, or on demand from the Actions tab with a variant picker, and cancels any run that a newer push supersedes.",
      "Produces four flashable AnyKernel3 zips a run: standard and fast-charge builds for two MediaTek MT6771 devices, cross-compiled with Clang and GCC toolchains the script fetches itself.",
      "Ships each build two ways, pushed to a Telegram channel over the Bot API and uploaded as a workflow artifact, so testers and the repo both end up with the zip.",
      "Credentials come from Actions secrets, and a run with none configured degrades to artifact-only rather than failing.",
    ],
    stack: [
      "GitHub Actions",
      "Bash",
      "Telegram Bot API",
      "Clang",
      "Linux kernel",
      "AnyKernel3",
    ],
    links: [
      {
        label: "Kernel-CI",
        href: "https://github.com/CyberJalagam/Kernel-CI",
      },
    ],
  },
  {
    title: "AOSP Build Automation",
    year: "2026",
    kind: "Infrastructure · Tooling",
    blurb:
      "Hand it device trees and it builds you a ROM. A shell suite that takes a bare machine to a finished build unattended.",
    detail: [
      "Provisions the whole AOSP build environment from scratch: dependencies, toolchain and source sync, turning a multi-hour manual setup into a single command.",
      "Applies device-specific patches before building, including SELinux and VoLTE fixes that otherwise have to be reapplied by hand every sync.",
      "Runs unattended ROM and kernel builds on a remote server and uploads the finished artifact when it is done.",
    ],
    stack: ["Bash", "Python", "Linux", "AOSP", "Make"],
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
    kind: "Full-stack · Two services",
    blurb:
      "A reading app for finding your next book and keeping a shelf of your own, split across a React client and a standalone API.",
    detail: [
      "Ships as two deployed services rather than one: a Next.js client and its own Express API, so the front end talks across a real HTTP boundary instead of reaching straight into the database.",
      "JWT sessions over bcrypt-hashed credentials, with route guards that keep protected pages shut until a session checks out.",
      "Per-user shelves persisted in MongoDB, so saved books survive logout and follow the account rather than the browser.",
      "Paginated search across a public book catalog, with client-side caching so repeat queries resolve from memory instead of hitting the API again.",
    ],
    stack: [
      "Next.js",
      "React",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Vercel",
    ],
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
    title: "BXtreme",
    role: "Lead Developer",
    period: "2021",
    blurb:
      "A battery-optimised build of Alien Kernel, tuned for power efficiency and endurance on the same devices while carrying over the base kernel's stability work.",
    stack: ["Linux kernel", "C", "Power management"],
    href: null,
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

export const impact = {
  // `lead` is the noun the tile is about and is coloured; `rest` trails it.
  stats: [
    { value: "900+", lead: "Mentees", rest: "in the program I run" },
    { value: "100+", lead: "Mentors", rest: "onboarded and matched" },
    { value: "150+", lead: "Students", rest: "through pre-arrival support" },
    { value: "10+", lead: "Campus tours", rest: "across four open houses" },
  ],
  // Grouped so the section scans as three themes instead of one long list.
  highlights: [
    {
      group: "Mentoring",
      items: [
        "Promoted from Peer Mentor to Lead Mentor in Fall 2025, and now run the program: matching, platform inquiries and mentor drop-in sessions.",
        "Kept it running through a full-time staff strike, absorbing the admin so that no student lost support.",
        "Mentored 25+ students directly, including one reassigned after a poor experience with a previous mentor.",
      ],
    },
    {
      group: "Orientation and tours",
      items: [
        "Hosted both Fall 2026 orientations, International and All Students, managing attendees and running the flow on the day.",
        "Ran 10+ campus tours across four open house cycles, reaching 30+ prospective students and their families.",
        "Hosted meet-and-greet lounges for virtual and in-person events, and sat on the student experience panel.",
      ],
    },
    {
      group: "Community and content",
      items: [
        "Escalated platform usability problems to program coordinators, feeding into improvements.",
        "Wrote exam-preparation posts for MySeneca and contributed to Seneca Student Life's Instagram.",
        "Volunteered at the Taiwanese Student Association's first King campus event, and supported locker programming.",
      ],
    },
  ],
  // Term is split out so the name can carry the weight and the date sits
  // under it. Certifications have no term.
  awards: [
    { name: "International Student Achievement Award", term: "Summer 2026" },
    { name: "Student Ambassador Award", term: "Winter 2026" },
    { name: "PMI Project Management Ready", term: null },
    { name: "Certified Blockchain Associate", term: null },
  ],
};
