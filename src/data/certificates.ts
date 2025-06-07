export interface Certificate {
  id: string;
  name: string;
  issue: string;
  description: string;
  technologies: string[];
  date: string;
  url: string;
}

export const certificates: Certificate[] = [
  {
    id: "AWS-CCP-789-XYZ-2023",
    name: "Certified JavaScript Developer",
    issue: "Certification in JavaScript programming language.",
    description:
      "This certification demonstrates proficiency in JavaScript, covering core concepts, advanced features, and best practices for web development.",
    technologies: [
      "primevue",
      "vue",
      "stack-pevn",
      "postgresql",
      "node",
      "express",
      "sequelize",
    ],
    date: "2023",
    url: "https://example.com/certification/javascript-developer",
  },
  {
    id: "AWS-CCP-789-XYZ-2021",
    name: "Certified React Developer",
    issue: "Certification in React framework.",
    description:
      "This certification validates expertise in building user interfaces using React, including state management, component lifecycle, and hooks.",
    technologies: [
      "primevue",
      "vue",
      "stack-pevn",
      "postgresql",
      "node",
      "express",
      "sequelize",
    ],
    date: "2023",
    url: "https://example.com/certification/react-developer",
  },
  {
    id: "AWS-CCP-789-XYZ-2022",
    name: "Certified Node.js Developer",
    issue: "Certification in Node.js runtime environment.",
    description:
      "This certification showcases skills in server-side development using Node.js, including asynchronous programming and RESTful APIs.",
    technologies: [
      "primevue",
      "vue",
      "stack-pevn",
      "postgresql",
      "node",
      "express",
      "sequelize",
    ],
    date: "2023",
    url: "https://example.com/certification/nodejs-developer",
  },
];
