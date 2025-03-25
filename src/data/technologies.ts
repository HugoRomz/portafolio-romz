import jsLogo from "@assets/javascript.svg";
import tsLogo from "@assets/typescript.svg";
import cssLogo from "@assets/css.svg";
import htmlLogo from "@assets/html5.svg";
import phpLogo from "@assets/php.svg";
import javaLogo from "@assets/java.svg";
import reactLogo from "@assets/react_dark.svg";
import tailwindLogo from "@assets/tailwindcss.svg";
import astroLogo from "@assets/astro.svg";
import vueLogo from "@assets/vue.svg";
import postgresqlLogo from "@assets/postgresql.svg";
import mysqlLogo from "@assets/mysql.svg";
import figmaLogo from "@assets/figma.svg";
import vercelLogo from "@assets/vercel_dark.svg";
import cLogo from "@assets/c.svg";
import swiftLogo from "@assets/swift.svg";
import expressLogo from "@assets/expressjs.svg";
import fastapiLogo from "@assets/fastapi.svg";
import bootstrapLogo from "@assets/bootstrap.svg";
import githubLogo from "@assets/github-dark.svg";
import trelloLogo from "@assets/trello.svg";
import postmanLogo from "@assets/postman.svg";
import wordpressLogo from "@assets/wordpress.svg";
import primevueLogo from "@assets/primevue.svg";
import nodeLogo from "@assets/nodejs.svg";
import mongodbLogo from "@assets/mongodb.svg";
import sequelizeLogo from "@assets/sequelize.svg";
import gitLogo from "@assets/git.svg";
import jwtLogo from "@assets/jwt.svg";
import springLogo from "@assets/spring.svg";
import swaggerLogo from "@assets/swagger.svg";
import viteLogo from "@assets/vitejs.svg";
import vscodeLogo from "@assets/vscode.svg";
import stack from "@assets/stack.svg";

export interface Technology {
  id: string;
  name: string;
  logo: any;
  bgColor: string;
  textColor: string;
  ringColor: string;
}

export const technologies: Technology[] = [
  {
    id: "js",
    name: "JavaScript",
    logo: jsLogo,
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "ts",
    name: "TypeScript",
    logo: tsLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "css",
    name: "CSS",
    logo: cssLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "html",
    name: "HTML",
    logo: htmlLogo,
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "php",
    name: "PHP",
    logo: phpLogo,
    bgColor: "#F3E8FF", // bg-purple-50
    textColor: "#6B21A8", // text-purple-800
    ringColor: "#A78BFA", // ring-purple-400
  },
  {
    id: "java",
    name: "Java",
    logo: javaLogo,
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "react",
    name: "React",
    logo: reactLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    logo: tailwindLogo,
    bgColor: "#CCFBF1", // bg-teal-50
    textColor: "#0D9488", // text-teal-800
    ringColor: "#2DD4BF", // ring-teal-400
  },
  {
    id: "astro",
    name: "Astro",
    logo: astroLogo,
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "vue",
    name: "Vue.js",
    logo: vueLogo,
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: postgresqlLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "mysql",
    name: "MySQL",
    logo: mysqlLogo,
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "figma",
    name: "Figma",
    logo: figmaLogo,
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "vercel",
    name: "Vercel",
    logo: vercelLogo,
    bgColor: "#000000", // bg-black
    textColor: "#FFFFFF", // text-white
    ringColor: "#4B5563", // ring-gray-600
  },
  {
    id: "c",
    name: "C",
    logo: cLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "swift",
    name: "Swift",
    logo: swiftLogo,
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "express",
    name: "Express",
    logo: expressLogo,
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "fastapi",
    name: "FastAPI",
    logo: fastapiLogo,
    bgColor: "#CCFBF1", // bg-teal-50
    textColor: "#0D9488", // text-teal-800
    ringColor: "#2DD4BF", // ring-teal-400
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    logo: bootstrapLogo,
    bgColor: "#F3E8FF", // bg-purple-50
    textColor: "#6B21A8", // text-purple-800
    ringColor: "#A78BFA", // ring-purple-400
  },
  {
    id: "github",
    name: "GitHub",
    logo: githubLogo,
    bgColor: "#000000", // bg-black
    textColor: "#FFFFFF", // text-white
    ringColor: "#4B5563", // ring-gray-600
  },
  {
    id: "trello",
    name: "Trello",
    logo: trelloLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "postman",
    name: "Postman",
    logo: postmanLogo,
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "wordpress",
    name: "WordPress",
    logo: wordpressLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "stack-pevn",
    name: "PEVN",
    logo: stack, // Sin logo
    bgColor: "#F3F4F6", // bg-gray-50
    textColor: "#374151", // text-gray-700
    ringColor: "#9CA3AF", // ring-gray-400
  },
  {
    id: "primevue",
    name: "PrimeVue",
    logo: primevueLogo,
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "node",
    name: "Node.js",
    logo: nodeLogo,
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: mongodbLogo,
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "sequelize",
    name: "Sequelize",
    logo: sequelizeLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "git",
    name: "Git",
    logo: gitLogo,
    bgColor: "#FEE2E2", // bg-red-50
    textColor: "#B91C1C", // text-red-700
    ringColor: "#F87171", // ring-red-400
  },
  {
    id: "jwt",
    name: "JWT",
    logo: jwtLogo,
    bgColor: "#FEF3C7", // bg-amber-50
    textColor: "#B45309", // text-amber-700
    ringColor: "#FBBF24", // ring-amber-400
  },
  {
    id: "spring",
    name: "Spring",
    logo: springLogo,
    bgColor: "#D1FAE5", // bg-green-50
    textColor: "#065F46", // text-green-800
    ringColor: "#34D399", // ring-green-400
  },
  {
    id: "swagger",
    name: "Swagger",
    logo: swaggerLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "vite",
    name: "Vite",
    logo: viteLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
  {
    id: "vscode",
    name: "VSCode",
    logo: vscodeLogo,
    bgColor: "#DBEAFE", // bg-blue-50
    textColor: "#1E40AF", // text-blue-800
    ringColor: "#60A5FA", // ring-blue-400
  },
];
