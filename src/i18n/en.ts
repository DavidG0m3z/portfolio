import type { Translations } from './es';

export const en: Translations = {
  navbar: {
    links: [
      { label: "Home",           href: "#inicio" },
      { label: "About",          href: "#sobre-mi" },
      { label: "Stack",          href: "#stack" },
      { label: "Projects",       href: "#proyectos" },
      { label: "Certifications", href: "#certificaciones" },
      { label: "Contact",        href: "#contacto" },
    ],
    viewCV: "View CV",
    download: "Download",
    cvModalTitle: "David Gómez — CV",
    cvFile:"/resume-en.pdf"
  },

  hero: {
    eyebrow: "Software Engineer · Backend · Mobile · Cloud & Data",
    title1: "Software Engineer specialized in",
    title2: "backend, distributed architectures and cloud solutions.",
    description: "I build robust APIs and scalable backend services with Java and Node.js. Passionate about system design, automation and data analysis as my next career step.",
    btnProjects: "View projects",
    btnContact: "Contact",
    btnCV: "View CV",
    metrics: [
      { value: "2+", label: "years of experience" },
      { value: "5+", label: "completed projects" },
      { value: "3",  label: "production projects" },
    ],
    tags: {
      location: "Medellín, Colombia",
      available: "Available",
      remote: "Hybrid / Remote",
    },
    terminalTitle: "david@portfolio:~",
  },

  about: {
    eyebrow: "// about me",
    title: "About Me",
    tagline: "Junior software developer with a senior mindset.",
    facts: [
      "Systems Engineer from Universidad de Antioquia, focused on backend development, scalable architectures and distributed systems.",
      "I'm passionate about understanding how systems evolve and scale to meet business demands.",
      "I especially enjoy architecture design and technical planning of software solutions.",
      "I value collaborative work and the exchange of ideas, as the best solutions often emerge from collective building and technical discussion.",
      "I maintain a constant practice of problem solving and coding challenges to strengthen algorithmic thinking and analytical skills.",
      "I believe in the strategic value of data and I'm interested in Data Engineering and Machine Learning.",
    ],
  },

  stack: {
    eyebrow: "// tech stack",
    title: "Tech Ecosystem",
    specialtiesEyebrow: "// specialties",
    specialtiesTitle: "Specialties",
    groups: [
      { category: "Backend",        items: ["Spring Boot", "NestJS", "Express", ".NET"] },
      { category: "Mobile",         items: ["React Native", "Kotlin (Jetpack Compose)"] },
      { category: "Frontend",       items: ["React", "Astro"] },
      { category: "Cloud & DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Azure", "Linux"] },
      { category: "Databases",      items: ["PostgreSQL", "MariaDB / MySQL", "MongoDB", "Redis", "JPA / Hibernate", "TypeORM"] },
      { category: "Testing",        items: ["JUnit", "Mockito", "Jest", "Vitest", "SonarQube", "Postman"] },
      { category: "Data",           items: ["Pandas", "Matplotlib", "Seaborn", "Scikit-learn"] },
      { category: "AI",             items: ["Claude Code", "GitHub Copilot", "Open Code"] },
    ],
    languages: ["Java", "TypeScript", "JavaScript", "C#", "Kotlin", "Python", "SQL"],
    specialties: [
      { label: "REST APIs",       desc: "Design, versioning and documentation with Swagger" },
      { label: "Client-Server",   desc: "HTTP, stateless, separation of concerns" },
      { label: "Microservices",   desc: "Spring Cloud, Gateway, Eureka, inter-service communication" },
      { label: "Security",        desc: "JWT, AWS IAM, authentication and authorization, Top 10 OWASP" },
      { label: "DB Design",       desc: "Relational, NoSQL, indexes, master/slave" },
      { label: "Mobile Apps",     desc: "React Native, native Android with Jetpack Compose" },
      { label: "System Design",   desc: "Scalable system design, architecture and component diagrams" },
      { label: "Linux",           desc: "Administration, scripting and server environments" },
      { label: "CI/CD",           desc: "GitHub Actions, automated pipelines and continuous deployment" },
    ],
  },

  projects: {
    eyebrow: "// projects",
    title: "Featured Projects",
    tabs: ["All", "Backend", "Mobile"],
    wipBadge: "In progress",
    prodBadge: "Production",
    projects: [
      {
        name: "Recursos Educativos API",
        description: "REST API for managing educational resources on the Universidad de Antioquia virtual platform. Real project with Scrum methodology and production releases.",
        metrics: [
          { label: "Environment",  value: "Production" },
          { label: "Methodology", value: "Scrum" },
        ],
      },
      {
        name: "YouTube Manager API",
        description: "API that consumes the YouTube API to fetch and serve videos from university channels. Built for the Ude@ virtual platform at Universidad de Antioquia.",
        metrics: [
          { label: "Environment", value: "Production" },
          { label: "Client",      value: "Ude@" },
        ],
      },
      {
        name: "Bebio App",
        description: "Mobile app for tracking baby growth. Personal project with commercial vision, aimed at publishing on app stores.",
        metrics: [
          { label: "Platform", value: "iOS / Android" },
          { label: "Backend",  value: "Firebase" },
        ],
      },
      {
        name: "Task Manager API",
        description: "Task management API built with .NET using clean layered architecture, similar to hexagonal architecture.",
        metrics: [
          { label: "Architecture", value: "Clean" },
          { label: "Language",     value: ".NET / C#" },
        ],
      },
      {
        name: "PagosYa — Backend",
        description: "Virtual payments platform with microservices architecture. Auth, wallet, transactions and notifications with Spring Cloud Gateway and Eureka.",
        metrics: [
          { label: "Architecture", value: "Microservices" },
          { label: "Deploy",       value: "AWS EKS" },
        ],
      },
      {
        name: "PagosYa — Mobile",
        description: "Mobile frontend for the PagosYa platform. Virtual wallet with transaction history and real-time transfers.",
        metrics: [
          { label: "Platform", value: "iOS / Android" },
          { label: "Status",   value: "In progress" },
        ],
      },
    ],
  },

  certifications: {
    eyebrow: "// certifications",
    title: "Certifications",
    obtained: "Obtained",
    wip: "In progress",
    viewCert: "View certificate",
    learningEyebrow: "// continuous learning",
    learningTitle: "Continuous Learning",
    inProgress: "In progress",
    certModalDownload: "Download",
    certs: [
      {
        name: "Red Hat System Administration I (RH124) (RH124-8.2)",
        issuer: "Red Hat",
        status: "obtained",
        pdf: "/certifications/redhat-linux.pdf",
      },
      {
        name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        issuer: "Amazon Web Services",
        status: "wip",
        pdf: null,
      },
    ],
    learning: [
      { name: "Spring Professional", platform: "VMware" },
      { name: "System Design",       platform: "ByteByteGo" },
    ],
  },

  contact: {
    eyebrow: "// contact",
    title: "Let's talk about the next challenge",
    subtitle: "Open to software development opportunities. Have a project or role in mind? Write to me.",
    links: [
      { label: "Email",    value: "david.ardilagomez@gmail.com", href: "mailto:david.ardilagomez@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/d4vidg0mez",  href: "https://linkedin.com/in/d4vidg0mez" },
      { label: "GitHub",   value: "github.com/DavidG0m3z",       href: "https://github.com/DavidG0m3z" },
    ],
  },

  footer: {
    copy: "© 2025 · Built with Astro ·",
  },
};