import { certificates, type Certificate } from "@data/certificates";
import { technologies, type Technology } from "../data/technologies";

import defaultIcon from "@assets/code-asterisk.svg";

function createDefaultTech(techId: string): Technology {
  return {
    id: techId,
    name: techId,
    logo: defaultIcon,
    bgColor: "#F9FAFB",
    textColor: "#6B7280",
    ringColor: "#D1D5DB",
  };
}

export function getCertificatesCardWithTech(): Array<{
  techDetails: { id: string; name: string }[];
}> {
  return certificates.map((certificate) => ({
    id: certificate.id,
    name: certificate.name,
    description: certificate.description,
    issuer: certificate.issuer,
    date: certificate.date,
    url: certificate.url,
    techDetails: certificate.technologies.map(
      (techId) =>
        technologies.find((tech) => tech.id === techId) ??
        createDefaultTech(techId),
    ),
  }));
}

export function getTotalCertificatesCount(): number {
  return certificates.length;
}
