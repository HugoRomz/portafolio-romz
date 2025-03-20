import { projects, type Project } from "@data/projects";
import { technologies, type Technology } from "../data/technologies";

// Función para obtener proyectos con datos completos de tecnologías
export function getProjectsWithTech(): Array<
  Project & { techDetails: Technology[] }
> {
  return projects.map((project) => ({
    ...project,
    techDetails: project.technologies.map(
      (techId) => technologies.find((tech) => tech.id === techId)!,
    ),
  }));
}
