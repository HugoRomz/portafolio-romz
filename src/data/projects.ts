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
    id: "lexarium",
    name: "LEXARIUM",
    description:
      "Aplicación web personal para gestión y aprendizaje de vocabulario en inglés, diseñada para crear un sistema personalizado de estudio y seguimiento de palabras. Integra autenticación moderna con Clerk y base de datos robusta en Supabase, permitiendo organizar, categorizar y practicar vocabulario de forma intuitiva. En constante evolución con mejoras en arquitectura de datos y experiencia de usuario, representa un enfoque personal al aprendizaje de idiomas mediante tecnología moderna.",
    descriptionShort:
      "App web personal para gestión de vocabulario en inglés con autenticación Clerk y base de datos Supabase, enfocada en aprendizaje personalizado.",
    technologies: [
      "vue",
      "clerk",
      "supabase",
      "lucide",
      "tailwind",
      // "preline",
      "vercel",
    ],
    status: "active",
    githubUrl: "https://github.com/HugoRomz/EnglishWordApp.git",
    demoUrl: "https://english-word-app-seven.vercel.app/",

    features: [
      {
        title: "Gestión Personal de Vocabulario",
        description:
          "Sistema intuitivo para agregar, organizar y categorizar palabras en inglés con definiciones, ejemplos y notas personales para un aprendizaje más efectivo.",
      },
      {
        title: "Autenticación Moderna y Segura",
        description:
          "Integración con Clerk para manejo robusto de usuarios, sesiones y seguridad, superando retos técnicos de compatibilidad con actualizaciones de API.",
      },
      {
        title: "Base de Datos Escalable",
        description:
          "Arquitectura de datos en Supabase en constante mejora para mayor robustez, con diseño evolutivo que soporta nuevas funcionalidades y opciones avanzadas.",
      },
      {
        title: "Interfaz Moderna y Responsiva",
        description:
          "Diseño elegante con Tailwind, iconografía Lucide y componentes Preline, en proceso de refinamiento continuo para mejor experiencia de usuario.",
      },
    ],

    programFunctionality: [
      {
        title: "Biblioteca de Vocabulario",
        description:
          "Gestión completa de palabras con definiciones, ejemplos y categorización personalizada",
        icon: "📚",
      },
      {
        title: "Sistema de Aprendizaje",
        description:
          "Herramientas para practicar y reforzar el vocabulario agregado de forma interactiva",
        icon: "🧠",
      },
      {
        title: "Gestión de Usuario",
        description:
          "Autenticación segura y personalización de la experiencia de aprendizaje individual",
        icon: "👤",
      },
      {
        title: "Progreso y Estadísticas",
        description:
          "Seguimiento del avance en el aprendizaje con métricas personales de vocabulario",
        icon: "📊",
      },
    ],

    cover:
      "https://res.cloudinary.com/dhcer3iwe/image/upload/v1749456435/Portafolio/Projects/lexarium/548shots_so_yv9ijk.webp",
    images: [
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1749456437/Portafolio/Projects/lexarium/642shots_so_nzf6ee.webp",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1749456438/Portafolio/Projects/lexarium/197shots_so_qagoa6.webp",
      "https://res.cloudinary.com/dhcer3iwe/image/upload/t_Banner 16:9/v1749456435/Portafolio/Projects/lexarium/548shots_so_yv9ijk.webp",
    ],
  },
  {
    id: "sigest",
    name: "UNACH - SIGEST",
    description:
      "Sistema integral que revoluciona el proceso de seminarios de titulación en la UNACH, eliminando completamente los trámites manuales y presenciales. Permite a estudiantes gestionar todo su proceso de graduación digitalmente, desde pre-registro hasta entrega de tesis, mientras proporciona a maestros herramientas avanzadas de supervisión académica y a administradores control total del programa. Desarrollado como proyecto de titulación real, implementa una arquitectura escalable que trasciende seminarios para servir cualquier tipo de curso académico.",
    descriptionShort:
      "Plataforma integral que digitaliza el proceso completo de seminarios de titulación, eliminando trámites presenciales y automatizando la gestión académica universitaria.",
    technologies: [
      "vue",
      "primevue",
      "node",
      "express",
      "postgresql",
      "sequelize",
    ],
    status: "completed",
    githubUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    demoUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",

    features: [
      {
        title: "Gestión Integral de Estudiantes",
        description:
          "Pre-registro digital, consulta de módulos y calificaciones, formación de equipos, gestión de proyectos y entrega de tesinas en una plataforma unificada.",
      },
      {
        title: "Supervisión Académica Completa",
        description:
          "Herramientas para maestros: seguimiento de asesorados, gestión de calificaciones, retroalimentación en tiempo real y administración de documentos académicos.",
      },
      {
        title: "Administración Centralizada",
        description:
          "Control total del programa: creación de módulos y cursos, asignación de maestros, revisión de proyectos, generación automática de constancias y gestión de usuarios.",
      },
      {
        title: "Arquitectura Escalable y Robusta",
        description:
          "Base de datos optimizada con diseño extensible que trasciende seminarios para servir múltiples tipos de cursos académicos con rendimiento superior.",
      },
      {
        title: "Digitalización Completa de Procesos",
        description:
          "Eliminación total de trámites manuales y presenciales, automatizando flujos de trabajo que antes requerían desplazamientos físicos y comunicación ambigua.",
      },
    ],

    programFunctionality: [
      {
        title: "Portal del Estudiante",
        description:
          "Pre-registro → Consulta académica → Formación de equipos → Desarrollo y entrega de proyectos",
        icon: "🎓",
      },
      {
        title: "Centro de Supervisión Docente",
        description:
          "Gestión de asesorados → Calificaciones → Retroalimentación → Administración de documentos",
        icon: "👨‍🏫",
      },
      {
        title: "Panel Administrativo",
        description:
          "Creación de cursos → Asignación de recursos → Revisión de proyectos → Generación de constancias",
        icon: "⚙️",
      },
      {
        title: "Sistema de Gestión Académica",
        description:
          "Administración de usuarios, roles, materias y seguimiento completo del proceso de titulación",
        icon: "📊",
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
      "Landing page profesional desarrollada para empresa de limpieza de ventanas en Estados Unidos, diseñada para competir directamente con empresas establecidas del sector. La plataforma combina un diseño moderno y llamativo con funcionalidad práctica, destacando la calidad del servicio a través de una galería dinámica de trabajos reales y facilitando el contacto directo con clientes potenciales. Implementada con Astro para máximo rendimiento y optimización SEO.",
    descriptionShort:
      "Landing page profesional para empresa de limpieza de ventanas en EU, diseñada para competir en el mercado local con diseño moderno y galería dinámica.",
    technologies: ["astro", "tailwind", "html", "css", "js"],
    status: "completed",
    githubUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    demoUrl: "https://ramirezwindowcleaning.com/",

    features: [
      {
        title: "Diseño Competitivo Profesional",
        description:
          "Interfaz moderna diseñada específicamente para competir con empresas establecidas del mercado estadounidense, proyectando confianza y profesionalismo.",
      },
      {
        title: "Galería Dinámica con Grid Bento",
        description:
          "Sistema de galería avanzado con disposición dinámica de imágenes que muestra trabajos reales de la empresa de forma visualmente impactante.",
      },
      {
        title: "Contacto Directo Optimizado",
        description:
          "Sistema de contacto integrado que conecta directamente con el email empresarial, facilitando la comunicación inmediata con clientes potenciales.",
      },
      {
        title: "Rendimiento y SEO Optimizado",
        description:
          "Desarrollado con Astro para carga ultrarrápida, consumo mínimo de recursos y optimización SEO para posicionamiento local.",
      },
    ],

    programFunctionality: [
      {
        title: "Showcase de Servicios",
        description:
          "Presentación clara y atractiva de servicios de limpieza con enfoque en calidad y profesionalismo",
        icon: "✨",
      },
      {
        title: "Galería de Trabajos Reales",
        description:
          "Grid dinámico tipo Bento que exhibe proyectos completados con imágenes de alta calidad",
        icon: "🖼️",
      },
      {
        title: "Contacto Empresarial",
        description:
          "Formulario de contacto directo que envía consultas al email corporativo para respuesta rápida",
        icon: "📧",
      },
      {
        title: "Experiencia Mobile-First",
        description:
          "Diseño responsivo optimizado para todos los dispositivos con navegación intuitiva",
        icon: "📱",
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
    name: "Baby Gallery - Maximiliano",
    description:
      "Sitio web especial creado para la celebración del primer año de Maximiliano, diseñado como complemento digital de las invitaciones familiares. La plataforma presenta una experiencia emotiva e íntima con galería organizada cronológicamente por meses, mostrando el crecimiento del bebé desde su nacimiento. Incluía un countdown interactivo hasta el día de la celebración que se transformó en una lluvia de confetti al finalizar, creando un momento mágico para los visitantes.",
    descriptionShort:
      "Sitio web especial para el primer año de Maximiliano, con galería cronológica por meses y countdown interactivo que celebra con confetti.",
    technologies: ["astro", "tailwind", "html", "css", "js"],
    status: "completed",
    githubUrl: "https://github.com/HugoRomz/seminarioapp_backend.git",
    demoUrl: "https://www.maximiliano.website/",

    features: [
      {
        title: "Galería Cronológica Mensual",
        description:
          "Organización temporal que muestra el crecimiento mes a mes durante el primer año, creando una narrativa visual emotiva del desarrollo del bebé.",
      },
      {
        title: "Countdown Interactivo con Confetti",
        description:
          "Contador regresivo hasta la celebración que se transforma en una explosión de confetti al llegar al día especial, generando un momento mágico.",
      },
      {
        title: "Experiencia Familiar Íntima",
        description:
          "Diseño elegante y minimalista que complementa las invitaciones físicas, creando una experiencia digital especial para familia y amigos cercanos.",
      },
      {
        title: "Grid Dinámico de Fotografías",
        description:
          "Sistema de galería avanzado con disposición elegante que presenta las fotos más importantes de cada etapa del crecimiento.",
      },
    ],

    programFunctionality: [
      {
        title: "Timeline del Primer Año",
        description:
          "Navegación cronológica que permite explorar el crecimiento mes por mes con fotos destacadas",
        icon: "📅",
      },
      {
        title: "Galería Familiar",
        description:
          "Exhibición elegante de momentos especiales organizados por etapas de desarrollo",
        icon: "👶",
      },
      {
        title: "Celebración Digital",
        description:
          "Countdown que culmina en confetti, creando un momento especial compartido con los invitados",
        icon: "🎉",
      },
      {
        title: "Experiencia Responsive",
        description:
          "Diseño adaptado para que familia pueda disfrutar desde cualquier dispositivo",
        icon: "📱",
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
