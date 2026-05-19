const projects = [
  {
    title: "OpenShelf",

    tagline:
      "A full-stack book management platform that allows users to discover books, manage a personal digital library, track reading progress, and create rich text notes.",

    screenshots: 
      "/openshelf-dashboard.png",
    
    gitHubUrl: "https://github.com/saipran23/OpenShelf",

    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "EJS",
      "Axios",
      "Quill Editor",
    ],

    keyFeatures: [
      {
        title: "Book Discovery System",
        description:
          "Integrated Open Library REST API to allow users to search books by title or author and fetch real-time book information including cover images, descriptions, and author details.",
      },

      {
        title: "Personal Digital Library",
        description:
          "Users can build and manage their own digital book collection with reading status management, ratings, and searchable book storage.",
      },

      {
        title: "Reading Progress Tracking",
        description:
          "Implemented reading workflow states such as Planned, Currently Reading, and Completed with automatic dashboard updates.",
      },

      {
        title: "Rich Text Notes Editor",
        description:
          "Integrated Quill rich text editor allowing users to create formatted notes with headings, lists, bold text, links, and media embedding.",
      },

      {
        title: "Analytics Dashboard",
        description:
          "Developed a dashboard showing reading statistics including completed books count, currently reading books, recently added books, and average ratings using optimized PostgreSQL queries.",
      },

      {
        title: "Advanced Search Functionality",
        description:
          "Implemented fast and case-insensitive search using PostgreSQL ILIKE queries for smooth book discovery within the personal library.",
      },

      {
        title: "Backend Architecture",
        description:
          "Designed a scalable MVC-inspired backend architecture with Express.js routing, database abstraction, API integration, and server-side rendering using EJS.",
      },

      {
        title: "Error Handling & Validation",
        description:
          "Handled API failures, invalid book requests, empty search states, and database errors with user-friendly feedback and safe redirects.",
      },
    ],
  },

  {
    title: "AUTOBANK-PRO",

    tagline:
      "A modern full-stack banking platform with real-time money transfer, loan management, EMI tracking, secure authentication, and live financial updates.",

    screenshots: [
      "/autobank-dashboard.png",
    ],

    gitHubUrl: "https://github.com/saipran23/AUTOBANK-PRO",

    techStack: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "React Router",
      "Axios",
      "Vite",
    ],

    keyFeatures: [
      {
        title: "Real-Time Money Transfer",
        description:
          "Built a secure money transfer system with instant balance updates, transaction validation, atomic database operations, and real-time synchronization across all connected clients.",
      },

      {
        title: "Loan Management System",
        description:
          "Implemented complete loan workflows including loan applications, approval tracking, EMI scheduling, repayment management, and remaining balance calculations.",
      },

      {
        title: "EMI Repayment Workflow",
        description:
          "Created a multi-step EMI repayment process with automatic EMI calculation, loan selection, balance deduction, and real-time repayment tracking.",
      },

      {
        title: "Firebase Authentication",
        description:
          "Integrated Firebase Authentication for secure user registration, login, session handling, and protected banking routes.",
      },

      {
        title: "Real-Time Firestore Synchronization",
        description:
          "Used Firestore real-time listeners to instantly reflect account balance updates, transaction history, and loan status changes without page refresh.",
      },

      {
        title: "Role-Based Dashboard",
        description:
          "Designed responsive dashboards displaying account summaries, transaction history, active loans, EMI alerts, and quick banking actions.",
      },

      {
        title: "Atomic Transaction Processing",
        description:
          "Implemented atomic batch operations to ensure transaction consistency during balance transfers, preventing partial updates and maintaining database integrity.",
      },

      {
        title: "Responsive Banking UI",
        description:
          "Developed a modern mobile-first user interface using Tailwind CSS with optimized layouts for desktop, tablet, and mobile devices.",
      },

      {
        title: "Validation & Error Handling",
        description:
          "Added comprehensive validation for transactions, account balances, form inputs, and loan operations with meaningful error notifications and secure handling.",
      },
    ],
  },
];


export default projects;
