import { projects, type Project } from "@data/projects";
import { technologies, type Technology } from "../data/technologies";
import defaultIcon from "@assets/code-asterisk.svg";

function createDefaultTech(techId: string): Technology {
  return {
    id: techId,
    name: techId,
    logo: defaultIcon,
    bgColor: "#FFFFFF",
    textColor: "#111827",
    ringColor: "#D1D5DB",
  };
}

export function getProjectsCardWithTech(): Array<{
  techDetails: { id: string; name: string }[];
}> {
  return projects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    status: project.status,
    descriptionShort: project.descriptionShort,
    githubUrl: project.githubUrl,
    demoUrl: project.demoUrl,
    cover: project.cover,
    techDetails: project.technologies.map(
      (techId) =>
        technologies.find((tech) => tech.id === techId) ??
        createDefaultTech(techId),
    ),
  }));
}

export function getTotalProjectsCount(): number {
  return projects.length;
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
