export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: "active" | "archived";
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "proyecto-1",
    name: "Sistema Integral para la Gestión del Seminario de Titulación",
    description: "",
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
    features: ["", ""],
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742453422/Portafolio/Projects/SIGEST/540shots_so_v0uwag.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742449115/Portafolio/Projects/SIGEST/screencapture-localhost-5173-auth-registro-2025-03-19-23_23_02_zozv6l.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742449111/Portafolio/Projects/SIGEST/screencapture-localhost-5173-2025-03-19-23_14_51_dkwel7.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742449113/Portafolio/Projects/SIGEST/screencapture-localhost-5173-admin-usuarios-2025-03-19-23_20_27_f0h0wc.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742449113/Portafolio/Projects/SIGEST/screencapture-localhost-5173-admin-seminarios-2025-03-19-23_15_38_atg98w.png",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742449112/Portafolio/Projects/SIGEST/screencapture-localhost-5173-admin-documentacionDocentes-2025-03-19-23_34_23_j16p5o.png",

      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742449115/Portafolio/Projects/SIGEST/screencapture-localhost-5173-docentes-documentacion-2025-03-19-23_34_44_g7y69b.png",
    ],
  },
  {
    id: "proyecto-2",
    name: "App de tareas",
    description:
      "Aplicación web para gestionar tareas, con categorías, fechas de vencimiento y recordatorios.",
    technologies: ["js", "react"],
    status: "active",
    githubUrl: "",
    demoUrl: "",
    features: ["Dark mode"],
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1724377012/Portafolio/Prueba/png-transparent-responsive-web-design-web-development-web-template-system-mockup-mobile-app-template-template-electronics-web-design_jn9hma.png",
    ],
  },
  {
    id: "proyecto-3",
    name: "App de recetas",
    description:
      "Aplicación web para buscar y guardar recetas de cocina, con filtros y favoritos.",
    technologies: ["js", "react", "node"],
    status: "archived",
    githubUrl: "",
    demoUrl: "",
    features: ["Dark mode"],
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1724377012/Portafolio/Prueba/png-transparent-responsive-web-design-web-development-web-template-system-mockup-mobile-app-template-template-electronics-web-design_jn9hma.png",
    ],
  },
];
