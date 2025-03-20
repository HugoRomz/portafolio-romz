import { z } from "astro:content";
import slugify from "slugify";

const urlProject =
  "https://docs.google.com/spreadsheets/d/1u7bGbzVPjCG7pdF8pUXeXjA3K_Dsq-qWB4px0OhStak/pub?gid=358153170&single=true&output=tsv";

const urlCertificates =
  "https://docs.google.com/spreadsheets/d/1u7bGbzVPjCG7pdF8pUXeXjA3K_Dsq-qWB4px0OhStak/pub?gid=1253845572&single=true&output=tsv";

const ProjectSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  descripcion: z.string(),
  tecnologias: z.array(z.string()),
  status: z.string(),
  url: z.string(),
  imagenes: z.array(z.string()),
});

const CertificateSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  institucion: z.string(),
  fecha_emision: z.string(),
  imagen: z.string(),
});

const api = {
  getProjects: async () => {
    const data = await fetch(urlProject).then((res) => res.text());
    const rows = data
      .split("\n")
      .slice(1)
      .map((row) => row.trim().split("\t"));
    return rows.map(
      ([nombre, descripcion, tecnologias, status, url, imagenes]) =>
        ProjectSchema.parse({
          id: slugify(nombre, { lower: true }),
          nombre,
          descripcion,
          tecnologias: tecnologias
            .split(",")
            .map((tecnologia) => tecnologia.trim()),
          status,
          url,
          imagenes: imagenes.split(",").map((imagen) => imagen.trim()),
        }),
    );
  },

  getCertificates: async () => {
    const data = await fetch(urlCertificates).then((res) => res.text());
    const rows = data
      .split("\n")
      .slice(1)
      .map((row) => row.trim().split("\t"));
    return rows.map(([nombre, institucion, fecha_emision, imagen]) =>
      CertificateSchema.parse({
        id: slugify(nombre, { lower: true }),
        nombre,
        institucion,
        fecha_emision,
        imagen,
      }),
    );
  },
};

export { api };
