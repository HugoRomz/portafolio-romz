export interface Technology {
  id: string;
  name: string;
  logo: string; // Ruta local o URL
  bgColor: string;
  textColor: string;
  ringColor: string;
}

export const technologies: Technology[] = [
  {
    id: "js",
    name: "JavaScript",
    logo: "/public/images/tech/js.svg",
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "ts",
    name: "TypeScript",
    logo: "/public/images/tech/ts.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "css",
    name: "CSS",
    logo: "/public/images/tech/css.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "html",
    name: "HTML",
    logo: "/public/images/tech/html.svg",
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "php",
    name: "PHP",
    logo: "/public/images/tech/php.svg",
    bgColor: "#F3E8FF", // bg-purple-50
    textColor: "#6B21A8", // text-purple-800
    ringColor: "#A78BFA", // ring-purple-400
  },
  {
    id: "java",
    name: "Java",
    logo: "/public/images/tech/java.svg",
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "react",
    name: "React",
    logo: "/public/images/tech/react.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    logo: "/public/images/tech/tailwind.svg",
    bgColor: "#CCFBF1", // bg-teal-50
    textColor: "#0D9488", // text-teal-800
    ringColor: "#2DD4BF", // ring-teal-400
  },
  {
    id: "astro",
    name: "Astro",
    logo: "/public/images/tech/astro.svg",
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "vue",
    name: "Vue.js",
    logo: "/public/images/tech/vue.svg",
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: "/public/images/tech/postgresql.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "mysql",
    name: "MySQL",
    logo: "/public/images/tech/mysql.svg",
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "figma",
    name: "Figma",
    logo: "/public/images/tech/figma.svg",
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "vercel",
    name: "Vercel",
    logo: "/public/images/tech/vercel.svg",
    bgColor: "#000000", // bg-black
    textColor: "#FFFFFF", // text-white
    ringColor: "#4B5563", // ring-gray-600
  },
  {
    id: "c",
    name: "C",
    logo: "/public/images/tech/c.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "swift",
    name: "Swift",
    logo: "/public/images/tech/swift.svg",
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "express",
    name: "Express",
    logo: "/public/images/tech/express.svg",
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "fastapi",
    name: "FastAPI",
    logo: "/public/images/tech/fastapi.svg",
    bgColor: "#CCFBF1", // bg-teal-50
    textColor: "#0D9488", // text-teal-800
    ringColor: "#2DD4BF", // ring-teal-400
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    logo: "/public/images/tech/bootstrap.svg",
    bgColor: "#F3E8FF", // bg-purple-50
    textColor: "#6B21A8", // text-purple-800
    ringColor: "#A78BFA", // ring-purple-400
  },
  {
    id: "github",
    name: "GitHub",
    logo: "/public/images/tech/github.svg",
    bgColor: "#000000", // bg-black
    textColor: "#FFFFFF", // text-white
    ringColor: "#4B5563", // ring-gray-600
  },
  {
    id: "trello",
    name: "Trello",
    logo: "/public/images/tech/trello.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "postman",
    name: "Postman",
    logo: "/public/images/tech/postman.svg",
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "wordpress",
    name: "WordPress",
    logo: "/public/images/tech/wordpress.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "stack-pevn",
    name: "PEVN",
    logo: "", // Sin logo
    bgColor: "#F3F4F6", // bg-gray-50
    textColor: "#374151", // text-gray-700
    ringColor: "#9CA3AF", // ring-gray-400
  },
  {
    id: "primevue",
    name: "PrimeVue",
    logo: "/public/images/tech/primevue.svg",
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "node",
    name: "Node.js",
    logo: "/public/images/tech/node.svg",
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: "/public/images/tech/mongodb.svg",
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "sequelize",
    name: "Sequelize",
    logo: "/public/images/tech/sequelize.svg",
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
];
