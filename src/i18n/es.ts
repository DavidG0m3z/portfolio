export const es = {
  navbar: {
    links: [
      { label: "Inicio",          href: "#inicio" },
      { label: "Sobre mí",        href: "#sobre-mi" },
      { label: "Stack",           href: "#stack" },
      { label: "Proyectos",       href: "#proyectos" },
      { label: "Certificaciones", href: "#certificaciones" },
      { label: "Contacto",        href: "#contacto" },
    ],
    viewCV: "Ver CV",
    download: "Descargar",
    cvModalTitle: "David Gómez — CV",
    cvFile:"/resume-es.pdf"
  },

  hero: {
    eyebrow: "Software Engineer · Backend · Mobile · Cloud & Data",
    title1: "Software Engineer especializado en",
    title2: "backend, arquitecturas distribuidas y soluciones cloud.",
    description: "Construyo APIs robustas y servicios backend escalables con Java y Node.js. Apasionado por el diseño de sistemas, la automatización y el análisis de datos como siguiente paso en mi carrera.",
    btnProjects: "Ver proyectos",
    btnContact: "Contactar",
    btnCV: "Ver CV",
    metrics: [
      { value: "2+", label: "años de experiencia" },
      { value: "5+", label: "proyectos completados" },
      { value: "3",  label: "proyectos en producción" },
    ],
    tags: {
      location: "Medellín, Colombia",
      available: "Disponible",
      remote: "Híbrido / Remoto",
    },
    terminalTitle: "david@portfolio:~",
  },

  about: {
    eyebrow: "// about me",
    title: "Sobre mí",
    tagline: "Desarrollador de software junior con mentalidad de senior.",
    facts: [
      "Ingeniero de Sistemas de la Universidad de Antioquia, enfocado en el desarrollo backend, las arquitecturas escalables y los sistemas distribuidos.",
      "Me apasiona entender cómo los sistemas evolucionan y escalan para responder a las demandas del negocio.",
      "Disfruto especialmente el diseño de arquitecturas y la planificación técnica de soluciones de software.",
      "Valoro el trabajo colaborativo y el intercambio de ideas, ya que las mejores soluciones suelen surgir de la construcción colectiva y la discusión técnica.",
      "Mantengo una práctica constante de resolución de problemas y retos de programación para fortalecer el pensamiento algorítmico y las habilidades de análisis.",
      "Creo en el valor estratégico de los datos, me interesa la Ingeniería de Datos y el Machine Learning.",
    ],
  },

  stack: {
    eyebrow: "// tech stack",
    title: "Ecosistema Tecnológico",
    specialtiesEyebrow: "// specialties",
    specialtiesTitle: "Especialidades",
    groups: [
      { category: "Backend",        items: ["Spring Boot", "NestJS", "Express", ".NET"] },
      { category: "Mobile",         items: ["React Native", "Kotlin (Jetpack Compose)"] },
      { category: "Frontend",       items: ["React", "Astro"] },
      { category: "Cloud & DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Azure", "Linux"] },
      { category: "Bases de Datos", items: ["PostgreSQL", "MariaDB / MySQL", "MongoDB", "Redis", "JPA / Hibernate", "TypeORM"] },
      { category: "Testing",        items: ["JUnit", "Mockito", "Jest", "Vitest", "SonarQube", "Postman"] },
      { category: "Data",           items: ["Pandas", "Matplotlib", "Seaborn", "Scikit-learn"] },
      { category: "IA",             items: ["Claude Code", "GitHub Copilot", "Open Code"] },
    ],
    languages: ["Java", "TypeScript", "JavaScript", "C#", "Kotlin", "Python", "SQL"],
    specialties: [
      { label: "REST APIs",        desc: "Diseño, versionado y documentación con Swagger" },
      { label: "Cliente-Servidor", desc: "HTTP, stateless, separación de responsabilidades" },
      { label: "Microservicios",   desc: "Spring Cloud, Gateway, Eureka, comunicación entre servicios" },
      { label: "Seguridad",        desc: "JWT, AWS IAM, autenticación y autorización, Top 10 OWASP" },
      { label: "Diseño de BD",     desc: "Relacional, NoSQL, índices, maestro/esclavo" },
      { label: "Apps Móviles",     desc: "React Native, Android nativo con Jetpack Compose" },
      { label: "System Design",    desc: "Diseño de sistemas escalables, diagramas de arquitectura y componentes" },
      { label: "Linux",            desc: "Administración, scripting y entornos de servidor" },
      { label: "CI/CD",            desc: "GitHub Actions, pipelines automatizados y despliegue continuo" },
    ],
  },

  projects: {
    eyebrow: "// projects",
    title: "Proyectos Destacados",
    tabs: ["Todos", "Backend", "Mobile"],
    wipBadge: "En progreso",
    prodBadge: "Producción",
    projects: [
      {
        name: "Recursos Educativos API",
        description: "API REST para gestión de recursos educativos en la plataforma virtual de la Universidad de Antioquia. Proyecto real con metodología Scrum y entregas en producción.",
        metrics: [
          { label: "Entorno",      value: "Producción" },
          { label: "Metodología",  value: "Scrum" },
        ],
      },
      {
        name: "YouTube Manager API",
        description: "API que consume la API de YouTube para traer y servir videos de canales universitarios. Desarrollada para la plataforma virtual Ude@ de la Universidad de Antioquia.",
        metrics: [
          { label: "Entorno", value: "Producción" },
          { label: "Cliente", value: "Ude@" },
        ],
      },
      {
        name: "Bebio App",
        description: "App móvil de seguimiento de crecimiento de bebés. Proyecto personal con visión comercial, orientado a publicación en tiendas de aplicaciones.",
        metrics: [
          { label: "Plataforma", value: "iOS / Android" },
          { label: "Backend",    value: "Firebase" },
        ],
      },
      {
        name: "Task Manager API",
        description: "API de gestión de tareas desarrollada en .NET con arquitectura limpia por capas, similar a la arquitectura hexagonal.",
        metrics: [
          { label: "Arquitectura", value: "Clean" },
          { label: "Lenguaje",     value: ".NET / C#" },
        ],
      },
      {
        name: "PagosYa — Backend",
        description: "Plataforma de pagos virtuales con arquitectura de microservicios. Auth, wallet, transacciones y notificaciones con Spring Cloud Gateway y Eureka.",
        metrics: [
          { label: "Arquitectura", value: "Microservicios" },
          { label: "Deploy",       value: "AWS EKS" },
        ],
      },
      {
        name: "PagosYa — Mobile",
        description: "Frontend móvil de la plataforma PagosYa. Wallet virtual con historial de transacciones y transferencias en tiempo real.",
        metrics: [
          { label: "Plataforma", value: "iOS / Android" },
          { label: "Estado",     value: "En progreso" },
        ],
      },
    ],
  },

  certifications: {
    eyebrow: "// certifications",
    title: "Certificaciones",
    obtained: "Obtenida",
    wip: "En progreso",
    viewCert: "Ver certificado",
    learningEyebrow: "// continuous learning",
    learningTitle: "Aprendizaje Continuo",
    inProgress: "En curso",
    certModalDownload: "Descargar",
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
    title: "Hablemos del próximo desafío",
    subtitle: "Abierto a oportunidades en desarrollo de software. ¿Tienes un proyecto o rol en mente? Escríbeme.",
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

export type Translations = typeof es;