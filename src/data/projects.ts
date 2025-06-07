export interface Project {
  id: string;
  name: string;
  description: string;
  descriptionShort?: string;
  technologies: string[];
  status: "active" | "archived" | "completed";
  githubUrl?: string;
  demoUrl?: string;
  features: (string | { title: string; description: string })[];
  programFunctionality: (
    | string
    | { title: string; description: string; icon: string }
  )[];
  cover: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "sigest",
    name: "UNACH - SIGEST",
    description:
      "The SIGEST system is a comprehensive platform for university graduation. It allows applicants to register, submit documents, and track their acceptance process; enables students to access their dashboard, consult the curriculum map, manage teams, and upload theses or projects; allows teachers to manage modules, assign grades, schedule advisory sessions, and validate documents; and lets administrators and super administrators manage catalogs, courses, users, and roles, ensuring a smooth, transparent, and efficient workflow at every stage.",
    descriptionShort:
      "A comprehensive platform to manage seminars and graduation projects, optimizing registration, evaluation, and academic supervision.",
    technologies: [
      "primevue",
      "vue",
      "stack-pevn",
      "postgresql",
      "node",
      "express",
      "sequelize",
    ],
    status: "completed",
    githubUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    demoUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    features: [
      {
        title: "Applicant Management",
        description: "Registration, document upload, and enrollment tracking.",
      },
      {
        title: "Academic Management",
        description:
          "Consultation of curriculum maps, grades, and teacher assignments.",
      },
      {
        title: "Team and Project Management",
        description:
          "Creation and oversight of theses and graduation projects.",
      },
      {
        title: "Teacher Management",
        description:
          "Module oversight, grading, advisory sessions, and document management.",
      },
      {
        title: "System Administration",
        description:
          "Management of users, courses, catalogs, roles, and evidences.",
      },
    ],
    programFunctionality: [
      {
        title: "Applicant Registration and Tracking",
        description:
          "Pre-registration, document submission, and enrollment approval.",
        icon: "📝",
      },
      {
        title: "Academic Management",
        description:
          "Consultation of subjects, teachers, grades, and advisory sessions.",
        icon: "📚",
      },
      {
        title: "Team Management",
        description: "Creation, management, and tracking of thesis teams.",
        icon: "👥",
      },
      {
        title: "System Administration",
        description: "Configuration of users, roles, courses, and evidences.",
        icon: "⚙️",
      },
    ],
    cover:
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1742453422/Portafolio/Projects/SIGEST/540shots_so_v0uwag.png",
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
    id: "ramirez-window-cleaning",
    name: "Ramirez Window Cleaning",
    description:
      "Landing page developed for a window cleaning business that clearly and attractively details the services offered by a young and entrepreneurial team. The platform highlights the quality, professionalism, and reliability of the service, and includes visual examples of completed work, facilitating quote requests and estimates.",
    descriptionShort:
      "Landing page developed for a window cleaning business that clearly and attractively details the offered services.",
    technologies: ["astro", "tailwind", "html", "css", "js"],
    status: "completed",
    githubUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    demoUrl: "https://ramirezwindowcleaning.com/",
    features: [
      {
        title: "Professional Services",
        description: "Clearly and directly presents the cleaning services.",
      },
      {
        title: "Modern Design",
        description: "Clean, modern interface that captures attention.",
      },
      {
        title: "Photo Gallery",
        description: "Interactive display of high-resolution images.",
      },
      {
        title: "Responsive Design",
        description: "Optimized for mobile and desktop devices.",
      },
    ],
    programFunctionality: [
      {
        title: "Service Quotation",
        description: "Facilitates contact and the request for estimates.",
        icon: "💬",
      },
      {
        title: "Project Gallery",
        description: "Displays examples of completed work.",
        icon: "🖼️",
      },
    ],
    cover:
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1743466643/Portafolio/Projects/ramirezWebsite/711shots_so_sen2yi.webp",
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1743466643/Portafolio/Projects/ramirezWebsite/711shots_so_sen2yi.webp",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1743466644/Portafolio/Projects/ramirezWebsite/822shots_so_wjphov.webp",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1743466645/Portafolio/Projects/ramirezWebsite/745shots_so_rwzdro.webp",
    ],
  },
  {
    id: "maximiliano",
    name: "Baby Gallery",
    description:
      "Landing page designed to showcase a gallery of photos and details about a baby, capturing unique moments and providing an immersive visual experience. The platform stands out for its attractive, minimalist design, making it easy to access personal information and special details, and adapts perfectly to any device.",
    descriptionShort:
      "Landing page designed to showcase a gallery of photos and details about a baby, capturing unique moments and providing a visual experience.",
    technologies: ["astro", "tailwind", "html", "css", "js"],
    status: "completed",
    githubUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    demoUrl: "https://www.maximiliano.website/",
    features: [
      {
        title: "Photo Gallery",
        description: "Interactive display of high-resolution images.",
      },
      {
        title: "Responsive Design",
        description: "Optimized for mobile and desktop devices.",
      },
    ],
    programFunctionality: [
      {
        title: "Photo Viewing",
        description: "Allows users to explore a gallery of baby images.",
        icon: "🖼️",
      },
      {
        title: "Personal Information",
        description:
          "Displays relevant data and interesting facts about the baby.",
        icon: "ℹ️",
      },
    ],
    cover:
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1743466944/Portafolio/Projects/websiteMax/41shots_so_ssyujm.webp",
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1743466944/Portafolio/Projects/websiteMax/41shots_so_ssyujm.webp",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1743466945/Portafolio/Projects/websiteMax/430shots_so_wsmuon.webp",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1743468160/Portafolio/Projects/websiteMax/647shots_so_re95mk.webp",
    ],
  },
];
