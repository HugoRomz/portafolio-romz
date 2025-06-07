import { certificates, type Certificate } from "@data/certificates";
import { technologies, type Technology } from "../data/technologies";

// Función para obtener proyectos con id y datos necearios junto con datos de tecnologías
export function getCertificatesCardWithTech(): Array<{
  techDetails: { id: string; name: string }[];
}> {
  return certificates.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    issue: project.issue,
    date: project.date,
    url: project.url,
    techDetails: project.technologies.map(
      (techId) => technologies.find((tech) => tech.id === techId)!,
    ),
  }));
}
