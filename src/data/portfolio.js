export const personal = {
  name: 'Konstantinos Manolis',
  title: 'Software Engineer',
  tagline: 'Building enterprise software, SaaS platforms, and scalable systems that power real business outcomes.',
  email: 'konstantinos.manolis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manolis-konstantinos/',
  github: 'https://github.com/kostaspm',
  fiverr: 'https://www.fiverr.com/kostaspm97',
  location: 'Greece',
  available: true,
};

export const expertise = [
  {
    title: 'Enterprise Applications',
    description: 'Architecting and maintaining large-scale enterprise systems with complex business logic, multi-tenant structures, and high reliability requirements.',
    icon: 'Building2',
  },
  {
    title: 'Financial Software',
    description: 'Core banking solutions, payment integrations, and financial data processing. Deep understanding of compliance, accuracy, and security in fintech domains.',
    icon: 'BarChart3',
  },
  {
    title: 'SaaS Platforms',
    description: 'Full lifecycle development of multi-tenant SaaS products — from architecture and data modeling to feature delivery and operational monitoring.',
    icon: 'Layers',
  },
  {
    title: 'AI Integrations',
    description: 'Building AI-assisted tools including natural language to SQL translation and LLM-powered workflows integrated into enterprise applications.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Data & Analytics',
    description: 'Designing BI dashboards, analytics pipelines, and reporting infrastructure using Jaspersoft, SQL, and modern data tooling.',
    icon: 'LineChart',
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud-native development on Azure including Active Directory integration, CosmosDB, and scalable microservice deployments.',
    icon: 'Cloud',
  },
];

export const experience = [
  {
    company: 'PROFILE SOFTWARE S.A.',
    role: 'Software Engineer',
    period: 'Jan 2026 – Present',
    current: true,
    description: [
      'Maintaining and producing code for Core Banking Solutions used by financial institutions across the region.',
      'Working with legacy codebases in Visual Basic and modern Angular applications, ensuring reliability and correctness in critical financial systems.',
      'Collaborating with cross-functional teams to deliver new features, fix bugs, and ensure compliance with banking standards.',
    ],
    tech: ['Angular', '.NET', 'SQL Server', 'Visual Basic'],
    domain: 'Fintech / Core Banking',
  },
  {
    company: 'TERRACOM S.A.',
    role: 'Fullstack Developer',
    period: 'Aug 2022 – Feb 2025',
    current: false,
    description: [
      'Built and maintained QR Patrol, a multi-tenant SaaS platform for security operations management.',
      'Developed an AI assistant that translates natural language queries into SQL using OpenAI APIs.',
      'Contributed to a major platform migration from XOJO to Angular, modernising a legacy codebase.',
      'Developed a Time & Attendance module serving enterprise clients.',
      'Created BI dashboards and reporting infrastructure using Jaspersoft.',
    ],
    tech: ['Angular', 'React', 'Node.js', 'MariaDB', 'MySQL', 'OpenAI APIs'],
    domain: 'SaaS / AI',
  },
  {
    company: 'VERUS+',
    role: 'Fullstack Developer',
    period: 'Jan 2021 – Aug 2022',
    current: false,
    description: [
      'Developed interactive map applications with real-time data visualisation using Leaflet.js.',
      'Built a reusable dynamic form builder reducing frontend development time significantly.',
      'Integrated Azure Active Directory for enterprise identity and access management.',
      'Developed payment integrations with Piraeus Bank APIs for e-commerce workflows.',
    ],
    tech: ['JavaScript', '.NET Core MVC', 'CosmosDB', 'Azure', 'Leaflet.js'],
    domain: 'Web Development / Cloud',
  },
];

export const projects = [
  {
    title: 'QR Patrol SaaS Platform',
    description: 'Multi-tenant security operations platform serving enterprise clients. Handles real-time patrol tracking, incident reporting, and client management at scale.',
    tech: ['Angular', 'Node.js', 'MariaDB', 'MySQL'],
    metrics: ['Multi-tenant architecture', 'Enterprise client base', 'Real-time operations'],
    category: 'SaaS Platform',
  },
  {
    title: 'AI SQL Assistant',
    description: 'Natural language to SQL translation engine powered by OpenAI APIs. Enables non-technical users to query complex databases using plain language.',
    tech: ['OpenAI APIs', 'Node.js', 'SQL'],
    metrics: ['NL-to-SQL translation', 'OpenAI integration', 'Enterprise deployment'],
    category: 'AI / ML',
  },
  {
    title: 'Time & Attendance System',
    description: 'Enterprise-grade workforce management module tracking employee attendance, schedules, and compliance across multiple client organisations.',
    tech: ['Angular', 'Node.js', 'MySQL'],
    metrics: ['Multi-org support', 'Compliance tracking', 'Reporting dashboards'],
    category: 'Enterprise',
  },
  {
    title: 'Dynamic Form Builder',
    description: 'Reusable low-code form builder enabling rapid UI construction from JSON schema definitions. Reduced frontend development effort significantly.',
    tech: ['HTML','JavaScript', '.NET Core', 'SQL Server'],
    metrics: ['Schema-driven', 'Reusable components', 'Azure hosted'],
    category: 'Internal Tool',
  },
  {
    title: 'EcoTime Machine (Interactive Map)',
    description: 'Interactive map application visualising real-time environmental data. Built with Leaflet.js and integrated with various data sources for dynamic content.',
    tech: ['JavaScript', 'Leaflet.js', 'CosmosDB'],
    metrics: ['Real-time data', 'Interactive maps', 'Environmental focus'],
    category: 'Web Application',
  },
  {
    title: 'Core Banking Systems',
    description: 'Maintaining and extending Core Banking Solutions for financial institutions, focusing on reliability, correctness, and compliance with banking standards.',
    tech: ['Angular', '.NET', 'SQL Server'],
    metrics: ['Banking compliance', 'High reliability', 'Enterprise scale'],
    category: 'Fintech',
  },
];

export const education = [
  {
    institution: 'University of Ioannina',
    degree: 'MSc in Data & Computer Science',
    type: 'Postgraduate',
    icon: 'GraduationCap',
  },
  {
    institution: 'University of Macedonia',
    degree: 'BSc in Applied Informatics',
    department: 'Department of Applied Informatics',
    type: 'Undergraduate',
    icon: 'BookOpen',
  },
];

export const publication = {
  title: 'Modularity-Based Fairness in Community Detection',
  publisher: 'ACM',
  url: 'https://dl.acm.org/doi/10.1145/3625007.3627518',
  description: 'Research on algorithmic fairness in graph community detection using modularity-based approaches.',
};

export const techStack = {
  Frontend: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
  Backend: ['.NET', '.NET Core', 'Node.js', 'REST APIs'],
  Databases: ['SQL Server', 'MariaDB', 'MySQL', 'CosmosDB', 'PostgreSQL'],
  Cloud: ['Azure', 'Azure AD', 'AWS', 'CI/CD'],
  'Data & AI': ['OpenAI APIs', 'Jaspersoft', 'Power BI'],
};
