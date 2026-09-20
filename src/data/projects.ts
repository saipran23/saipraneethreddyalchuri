export interface ProjectChapter {
  title: string;
  text: string;
}
export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  color: string;
  coverText: string;
  year?: number;
  verified: boolean;
  chapters: ProjectChapter[];
  screenshots: { src: string; alt: string; caption: string }[];
  video?: string;
}
// Verified against public READMEs, source trees, and implementation files.
// See docs/CONTENT-SOURCES.md for evidence and known limitations.
export const projects: Project[] = [
  {
    id: "01",
    slug: "openshelf",
    title: "OpenShelf",
    tagline: "A personal reading companion",
    description:
      "Discover books, track reading progress, and keep ratings and rich-text notes in a personal library. Built with Express, EJS, PostgreSQL, and the Open Library API.",
    image: "/projects/openshelf/hero.webp",
    imageAlt: "Typographic cover for OpenShelf; not an application screenshot",
    technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "Quill"],
    github: "https://github.com/saipran23/OpenShelf",
    featured: true,
    color: "#c2c7b4",
    coverText: "OPEN\nSHELF",
    verified: true,
    chapters: [
      {
        title: "THE IDEA",
        text: "A place to keep the books I discover and the things I learn from them. OpenShelf brings discovery, a personal library, reading status, ratings, and notes into one server-rendered application.",
      },
      {
        title: "THE EXPERIENCE",
        text: "Search Open Library by title or author, add a book to the library, and move it from planned to currently reading to completed. The dashboard summarizes reading activity; individual book pages keep ratings and formatted notes together.",
      },
      {
        title: "THE ENGINEERING",
        text: "Express routes fetch external book metadata with Axios, query PostgreSQL, and render EJS templates. Parameterized SQL handles library search, reading-status updates, and note editing. Dashboard queries calculate counts and average ratings.",
      },
      {
        title: "THE DETAILS",
        text: "Books retain an Open Library work key to check duplicates. Notes belong to book records, and Quill provides the editing interface. The current implementation is a personal-library project; login and multi-user access are future work.",
      },
    ],
    screenshots: [],
  },
  {
    id: "02",
    slug: "autobank-pro",
    title: "AUTOBANK-PRO",
    tagline: "Banking workflows, explored",
    description:
      "A banking application project with account dashboards, transfer workflows, loan applications, and EMI tracking. React and Tailwind power the interface and its multi-step workflows.",
    image: "/projects/autobank-pro/hero.webp",
    imageAlt:
      "Typographic cover for AUTOBANK-PRO; not an application screenshot",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/saipran23/AUTOBANK-PRO",
    featured: true,
    color: "#bac1c7",
    coverText: "AUTO\nBANK",
    verified: true,
    chapters: [
      {
        title: "THE IDEA",
        text: "Explore how account, transfer, and loan workflows fit together in a banking interface. AUTOBANK-PRO is a development project, with customer and employee screens for working through those flows.",
      },
      {
        title: "THE EXPERIENCE",
        text: "The interface separates account details, transaction history, money transfers, loan applications, and profile settings. Multi-step forms break longer actions into smaller decisions and confirmation screens.",
      },
      {
        title: "THE ENGINEERING",
        text: "React Router organizes the screens, with separate services for account, transfer, and loan logic. The transfer service coordinates sender and recipient balance updates with transaction records.",
      },
      {
        title: "THE DETAILS",
        text: "The source separates transfer and loan services from page components. Transfer processing checks available balance and returns structured success or error results. This is a project implementation, not a connection to a real banking payment network.",
      },
    ],
    screenshots: [],
  },
  {
    id: "03",
    slug: "code-review",
    title: "codeReview",
    tagline: "A foundation for review workflows",
    description:
      "A React and Express code-review project with GitHub OAuth, JWT-protected review creation, and PostgreSQL persistence through Sequelize.",
    image: "/projects/code-review/hero.webp",
    imageAlt: "Typographic cover for codeReview; not an application screenshot",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
    ],
    github: "https://github.com/saipran23/codeReview",
    featured: true,
    color: "#d0bdad",
    coverText: "CODE\nREVIEW",
    verified: true,
    chapters: [
      {
        title: "THE IDEA",
        text: "Build the account and persistence foundation for a code-review workflow. The current project connects a GitHub identity to stored review records without claiming automated AI review functionality.",
      },
      {
        title: "THE EXPERIENCE",
        text: "Sign in with GitHub, view reviews, and submit a review record containing a pull-request URL, diff text, and status. A protected endpoint retrieves the signed-in user’s own reviews.",
      },
      {
        title: "THE ENGINEERING",
        text: "The React client talks to an Express backend. GitHub OAuth establishes identity, JWT bearer tokens protect writes, and Sequelize models store users and reviews in PostgreSQL.",
      },
      {
        title: "THE DETAILS",
        text: "Review endpoints validate required fields and the token’s user identifier. Protected routes include rate limiting. The repository is an evolving foundation; planned capabilities are not presented as completed features.",
      },
    ],
    screenshots: [],
  },
  {
    id: "04",
    slug: "socialmedis",
    title: "socialMedis",
    tagline: "Behind a social application",
    description:
      "A social-media backend split into identity, post, media, and search services behind an API gateway. It explores MongoDB persistence, Redis caching, and RabbitMQ events.",
    image: "/projects/socialmedis/hero.webp",
    imageAlt:
      "Typographic cover for socialMedis; not an application screenshot",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Docker",
    ],
    github: "https://github.com/saipran23/socialMedis",
    featured: true,
    color: "#c6c0d0",
    coverText: "SOCIAL\nMEDIS",
    verified: true,
    chapters: [
      {
        title: "THE IDEA",
        text: "Explore the boundaries of a service-based social application: identity, posts, uploaded media, and search. This repository focuses on backend APIs rather than a finished social-network interface.",
      },
      {
        title: "THE EXPERIENCE",
        text: "Clients use gateway routes for authentication, posts, media, and search. The gateway validates access tokens and forwards authenticated requests to the corresponding service.",
      },
      {
        title: "THE ENGINEERING",
        text: "Each service has its own Express application and package manifest. MongoDB stores records, Redis caches post reads, and RabbitMQ carries post lifecycle events to the search and media services.",
      },
      {
        title: "THE DETAILS",
        text: "Creating a post publishes a post.created event; deleting one publishes post.deleted and invalidates cached post data. This learning project explores event-driven coordination and service boundaries without claiming production-scale reliability.",
      },
    ],
    screenshots: [],
  },
  {
    id: "05",
    slug: "keeper",
    title: "Keeper",
    tagline: "A focused development project",
    description:
      "A React note-taking learning project with an Express API and PostgreSQL storage.",
    image: "/projects/code-review/hero.webp",
    imageAlt: "Typographic code project cover",
    technologies: ["React", "Express", "PostgreSQL"],
    github: "https://github.com/saipran23/keeper",
    featured: false,
    color: "#c2c7b4",
    coverText: "Keeper",
    verified: true,
    chapters: [
      {
        title: "THE IDEA",
        text: "A React note-taking learning project with an Express API and PostgreSQL storage.",
      },
    ],
    screenshots: [],
  },
  {
    id: "06",
    slug: "socket-chat",
    title: "Real-time chat",
    tagline: "A focused development project",
    description:
      "A Socket.IO chat project with broadcast messages, join and leave notifications, and an online-users list.",
    image: "/projects/code-review/hero.webp",
    imageAlt: "Typographic code project cover",
    technologies: ["Node.js", "Express", "Socket.IO"],
    github: "https://github.com/saipran23/chatappWithSockect.io",
    featured: false,
    color: "#c2c7b4",
    coverText: "Real-time chat",
    verified: true,
    chapters: [
      {
        title: "THE IDEA",
        text: "A Socket.IO chat project with broadcast messages, join and leave notifications, and an online-users list.",
      },
    ],
    screenshots: [],
  },
  {
    id: "07",
    slug: "media-uploads",
    title: "Media uploads",
    tagline: "A focused development project",
    description:
      "An image-upload API using Multer, with PostgreSQL image records and paginated retrieval.",
    image: "/projects/code-review/hero.webp",
    imageAlt: "Typographic code project cover",
    technologies: ["Node.js", "Multer", "PostgreSQL"],
    github: "https://github.com/saipran23/File-Uploads-with-Multer-Cloudinary",
    featured: false,
    color: "#c2c7b4",
    coverText: "Media uploads",
    verified: true,
    chapters: [
      {
        title: "THE IDEA",
        text: "An image-upload API using Multer, with PostgreSQL image records and paginated retrieval.",
      },
    ],
    screenshots: [],
  },
];
export const featuredProjects = projects.filter((p) => p.featured);
export const additionalProjects = projects.filter((p) => !p.featured);
