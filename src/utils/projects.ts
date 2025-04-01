import { projects, type Project } from "@data/projects";
import { technologies, type Technology } from "../data/technologies";

// Función para obtener proyectos con id y datos necearios junto con datos de tecnologías
export function getProjectsCardWithTech(): Array<{
  techDetails: { id: string; name: string }[];
}> {
  return projects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    descriptionShort: project.descriptionShort,
    githubUrl: project.githubUrl,
    demoUrl: project.demoUrl,
    cover: project.cover,
    techDetails: project.technologies.map(
      (techId) => technologies.find((tech) => tech.id === techId)!,
    ),
  }));
}

export function getProjectWithTech(
  id: string,
): Project & { techDetails: Technology[] } {
  const project = projects.find((project) => project.id === id)!;
  return {
    ...project,
    techDetails: project.technologies.map(
      (techId) => technologies.find((tech) => tech.id === techId)!,
    ),
  };
}
