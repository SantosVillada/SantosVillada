import Image from "next/image";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-${project.tone}`}>
      <div className="project-visual">
        <Image src={`/projects/${project.image}`} alt={`Captura de pantalla de ${project.name}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-content">
        <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.note && <p className="project-note">{project.note}</p>}
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links"><a href={project.demo} target="_blank" rel="noreferrer">Ver demo <ArrowUpRight /></a><a href={project.repo} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a></div>
      </div>
    </article>
  );
}
