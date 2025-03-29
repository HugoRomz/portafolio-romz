export interface Project {
  id: string;
  name: string;
  description: string;
  descriptionShort?: string;
  technologies: string[];
  status: "active" | "archived";
  githubUrl?: string;
  demoUrl?: string;
  features: (string | { title: string; description: string })[];
  programFunctionality: (
    | string
    | { title: string; description: string; icon: string }
  )[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "proyecto-1",
    name: "UNACH - SIGEST",
    description:
      "Sistema centralizado para optimizar la gestión de seminarios y proyectos de titulación universitaria. Permite administrar cursos, asignar docentes, supervisar tesis y facilitar la colaboración entre estudiantes y asesores. Los usuarios interactúan según su rol: los administradores configuran los periodos y validan inscripciones; los docentes evalúan, comparten recursos y guían proyectos; los alumnos y egresados suben avances, reciben calificaciones y agendan asesorías. Integra seguimiento en tiempo real, seguridad robusta y adaptabilidad a los flujos institucionales, eliminando redundancias y garantizando la transparencia en los procesos de titulación.",
    descriptionShort:
      "Sistema integral para la gestión del seminario de titulación: módulos de cursos, periodos, usuarios, docentes, roles, etc.",
    technologies: [
      "primevue",
      "vue",
      "stack-pevn",
      "postgresql",
      "node",
      "express",
      "sequelize",
    ],
    status: "active",
    githubUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    demoUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    features: [
      {
        title: "Responsive Design",
        description:
          "Fully responsive layout that works on all devices, from mobile to desktop.",
      },
      {
        title: "Modern Architecture",
        description:
          "Built with the latest technologies and best practices for optimal performance.",
      },
      {
        title: "User Authentication",
        description:
          "Secure login and registration system with role-based access control.",
      },
      {
        title: "Real-time Updates",
        description:
          "Live data updates without page refreshes for a seamless user experience.",
      },
    ],
    programFunctionality: [
      {
        title: "Sales Analytics",
        description:
          "Visualize real-time sales data with interactive charts and customizable reports to identify trends and opportunities.",
        icon: "📊",
      },
      {
        title: "Inventory Management",
        description:
          "Control product stock, receive low inventory alerts, and manage supplier orders from a centralized interface.",
        icon: "📦",
      },
      {
        title: "Customer Profiles",
        description:
          "Access detailed customer profiles with purchase history, preferences, and behavior to improve personalization.",
        icon: "👤",
      },
      {
        title: "Marketing Automation",
        description:
          "Schedule and monitor email marketing campaigns, personalized offers, and promotions based on customer behavior.",
        icon: "📱",
      },
    ],
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742453422/Portafolio/Projects/SIGEST/540shots_so_v0uwag.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742449115/Portafolio/Projects/SIGEST/screencapture-localhost-5173-auth-registro-2025-03-19-23_23_02_zozv6l.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742449111/Portafolio/Projects/SIGEST/screencapture-localhost-5173-2025-03-19-23_14_51_dkwel7.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742449113/Portafolio/Projects/SIGEST/screencapture-localhost-5173-admin-usuarios-2025-03-19-23_20_27_f0h0wc.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742449113/Portafolio/Projects/SIGEST/screencapture-localhost-5173-admin-seminarios-2025-03-19-23_15_38_atg98w.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742449112/Portafolio/Projects/SIGEST/screencapture-localhost-5173-admin-documentacionDocentes-2025-03-19-23_34_23_j16p5o.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742504310/Portafolio/Projects/SIGEST/DiagramaSeminario_1_bsqzuh.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1742449115/Portafolio/Projects/SIGEST/screencapture-localhost-5173-docentes-documentacion-2025-03-19-23_34_44_g7y69b.png",
    ],
  },
  {
    id: "proyecto-2",
    name: "App de tareas",
    description:
      "Aplicación web para gestionar tareas, con categorías, fechas de vencimiento y recordatorios.",
    descriptionShort:
      "Aplicación web para gestionar tareas, con categorías, fechas de vencimiento y recordatorios.",
    technologies: ["js", "react"],
    status: "active",
    githubUrl: "",
    demoUrl: "",
    features: [
      {
        title: "Responsive Design",
        description:
          "Fully responsive layout that works on all devices, from mobile to desktop.",
      },
      {
        title: "Modern Architecture",
        description:
          "Built with the latest technologies and best practices for optimal performance.",
      },
      {
        title: "User Authentication",
        description:
          "Secure login and registration system with role-based access control.",
      },
      {
        title: "Real-time Updates",
        description:
          "Live data updates without page refreshes for a seamless user experience.",
      },
    ],
    programFunctionality: [
      {
        title: "Sales Analytics",
        description:
          "Visualize real-time sales data with interactive charts and customizable reports to identify trends and opportunities.",
        icon: "📊",
      },
      {
        title: "Inventory Management",
        description:
          "Control product stock, receive low inventory alerts, and manage supplier orders from a centralized interface.",
        icon: "📦",
      },
      {
        title: "Customer Profiles",
        description:
          "Access detailed customer profiles with purchase history, preferences, and behavior to improve personalization.",
        icon: "👤",
      },
      {
        title: "Marketing Automation",
        description:
          "Schedule and monitor email marketing campaigns, personalized offers, and promotions based on customer behavior.",
        icon: "📱",
      },
    ],
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1724377012/Portafolio/Prueba/png-transparent-responsive-web-design-web-development-web-template-system-mockup-mobile-app-template-template-electronics-web-design_jn9hma.png",
    ],
  },
  {
    id: "proyecto-3",
    name: "App de recetas",
    description:
      "Aplicación web para buscar y guardar recetas de cocina, con filtros y favoritos.",
    descriptionShort:
      "Aplicación web para buscar y guardar recetas de cocina, con filtros y favoritos.",
    technologies: ["js", "react", "node"],
    status: "archived",
    githubUrl: "",
    demoUrl: "",
    features: [
      {
        title: "Responsive Design",
        description:
          "Fully responsive layout that works on all devices, from mobile to desktop.",
      },
      {
        title: "Modern Architecture",
        description:
          "Built with the latest technologies and best practices for optimal performance.",
      },
      {
        title: "User Authentication",
        description:
          "Secure login and registration system with role-based access control.",
      },
      {
        title: "Real-time Updates",
        description:
          "Live data updates without page refreshes for a seamless user experience.",
      },
    ],
    programFunctionality: [
      {
        title: "Sales Analytics",
        description:
          "Visualize real-time sales data with interactive charts and customizable reports to identify trends and opportunities.",
        icon: "📊",
      },
      {
        title: "Inventory Management",
        description:
          "Control product stock, receive low inventory alerts, and manage supplier orders from a centralized interface.",
        icon: "📦",
      },
      {
        title: "Customer Profiles",
        description:
          "Access detailed customer profiles with purchase history, preferences, and behavior to improve personalization.",
        icon: "👤",
      },
      {
        title: "Marketing Automation",
        description:
          "Schedule and monitor email marketing campaigns, personalized offers, and promotions based on customer behavior.",
        icon: "📱",
      },
    ],
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1724377012/Portafolio/Prueba/png-transparent-responsive-web-design-web-development-web-template-system-mockup-mobile-app-template-template-electronics-web-design_jn9hma.png",
    ],
  },
];
