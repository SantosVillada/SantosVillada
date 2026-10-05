export type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  tags: string[];
  repo: string;
  demo: string;
  tone: "lime" | "orange" | "blue" | "pink";
  image: string;
  note?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "SiempreBela",
    type: "Sitio de servicios",
    description: "Experiencia web para un centro de estética: servicios, alquiler de equipos y consultas de turnos por WhatsApp.",
    tags: ["Next.js", "TypeScript", "UX"],
    repo: "https://github.com/SantosVillada/esthetician-website-alwaysbela",
    demo: "https://siemprebela.com",
    tone: "pink",
    image: "alwaysbela.png",
  },
  {
    number: "02",
    name: "Pistacol",
    type: "Sitio comercial",
    description: "Presentación de marca y catálogo para una línea de pistachos premium de origen argentino.",
    tags: ["TypeScript", "Contenido", "Conversión"],
    repo: "https://github.com/SantosVillada/Pistacol",
    demo: "https://pistacol.com",
    tone: "orange",
    image: "pistacol.png",
  },
  {
    number: "03",
    name: "Victoria Importaciones",
    type: "Landing de servicios",
    description: "Sitio para explicar un proceso de importación completo y convertir consultas en conversaciones por WhatsApp.",
    tags: ["TypeScript", "Servicios", "Responsive"],
    repo: "https://github.com/SantosVillada/Victoria-importaciones",
    demo: "https://victoria-importaciones.vercel.app",
    tone: "blue",
    image: "victoria-importaciones.png",
  },
  {
    number: "04",
    name: "MORADA",
    type: "Mockup conceptual · No funcional",
    description: "Exploración visual de una experiencia inmobiliaria: propiedades, filtros, agentes y recorridos de conversión.",
    tags: ["TypeScript", "UI", "Concepto"],
    repo: "https://github.com/SantosVillada/mockup-inmobiliaria",
    demo: "https://web-chi-seven-11.vercel.app",
    tone: "lime",
    image: "morada.png",
    note: "Mockup demostrativo. No es un producto funcional ni representa publicaciones reales.",
  },
];
