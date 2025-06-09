export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  description: string;
  technologies: string[];
  date: string;
  url: string;
}

export const certificates: Certificate[] = [
  {
    id: "528b8dfb-218a-4929-9785-f30288ec3938",
    name: "Comandos DML: Manipulación de datos con MySQL",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: modelaje de la base de datos, creación de la estructura, inclusión, alteración y eliminación de datos, autoincremento, patrones y triggers.",
    technologies: ["mysql", "workbench"],
    date: "2025-05-03",
    url: "https://app.aluracursos.com/certificate/528b8dfb-218a-4929-9785-f30288ec3938",
  },
  {
    id: "5689061d-fd76-4352-8886-885983b1e0fe",
    name: "Desarrollo de carrera: demanda del mercado",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: carrera profesional, rendimiento, motivaciones, valores y demandas del mercado.",
    technologies: ["soft-skills", "career"],
    date: "2024-10-01",
    url: "https://app.aluracursos.com/certificate/5689061d-fd76-4352-8886-885983b1e0fe",
  },
  {
    id: "b9cc3fcc-5767-4d0b-8c90-94cfdab199f0",
    name: "Java: aplicando la Orientación a Objetos",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: modelado de ScreenMatch, control de acceso, reutilización de comportamientos, aplicación de comportamientos comunes y consolidación de conocimientos.",
    technologies: ["java", "poo"],
    date: "2024-11-20",
    url: "https://app.aluracursos.com/certificate/b9cc3fcc-5767-4d0b-8c90-94cfdab199f0",
  },
  {
    id: "1eb19b74-f51d-48c2-9728-8e917a86189b",
    name: "Java: creando tu primera aplicación",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: primer programa en Java, construcción de catálogo de películas, control de flujo y consolidación de conocimientos.",
    technologies: ["java"],
    date: "2024-10-05",
    url: "https://app.aluracursos.com/certificate/1eb19b74-f51d-48c2-9728-8e917a86189b",
  },
  {
    id: "9b0da25b-a013-4f4b-b3d9-ef2601628964",
    name: "Propósito profesional: ser el protagonista de tu carrera",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: propósito, realización y felicidad, valores, prioridades y vida con propósito.",
    technologies: ["soft-skills", "career"],
    date: "2024-09-15",
    url: "https://app.aluracursos.com/certificate/9b0da25b-a013-4f4b-b3d9-ef2601628964",
  },
  {
    id: "b0a74374-d90f-4c7b-aa59-6fec4e145ea8",
    name: "Transición de carrera: una guía al campo de tecnología",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: transición de carrera, marca personal, entrevistas, cultura tecnológica y currículum.",
    technologies: ["career", "tech-industry"],
    date: "2024-08-20",
    url: "https://app.aluracursos.com/certificate/b0a74374-d90f-4c7b-aa59-6fec4e145ea8",
  },
  {
    id: "7431fcf7-fdac-4bea-8063-3b0602e7a400",
    name: "Consultas SQL: Avanzando en SQL con MySQL",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: configuración del ambiente, filtrado y presentación de datos, unión de tablas, funciones de MySQL y generación de informes.",
    technologies: ["mysql", "sql"],
    date: "2025-05-15",
    url: "https://app.aluracursos.com/certificate/7431fcf7-fdac-4bea-8063-3b0602e7a400",
  },
  {
    id: "61ecc5e0-97d4-4231-9a2c-2dcae7d2a4c6",
    name: "Introducción a SQL con MySQL: Manipule y consulte datos",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: instalación y configuración de MySQL, manipulación y administración de datos y consultas SQL.",
    technologies: ["mysql", "sql"],
    date: "2025-04-10",
    url: "https://app.aluracursos.com/certificate/61ecc5e0-97d4-4231-9a2c-2dcae7d2a4c6",
  },
  {
    id: "8697fbce-d5ce-452d-b3d4-08b8d8b01391",
    name: "Procedures SQL: Ejecutando código en MySQL",
    issuer: "Alura LATAM",
    description:
      "Este curso abordó los siguientes tópicos: preparación del ambiente, procedimientos almacenados, interacciones con la base de datos, control de flujo, cursores y funciones.",
    technologies: ["mysql", "sql", "procedures"],
    date: "2025-03-25",
    url: "https://app.aluracursos.com/certificate/8697fbce-d5ce-452d-b3d4-08b8d8b01391",
  },
];
