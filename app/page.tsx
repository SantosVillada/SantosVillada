import { ContactForm } from "@/components/contact-form";
import { ArrowDown, ArrowUpRight, Spark } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const siteUrl = "https://www.santosvillada.com";

export default function Home() {
  return (
    <>
      <header className="site-header"><a className="wordmark" href="#inicio" aria-label="Santos Villada, inicio">Santos Villada<span>.</span></a><nav><a href="#enfoque">Enfoque</a><a href="#proyectos">Proyectos</a><a href="#contacto" className="nav-cta">Hablemos <ArrowUpRight /></a></nav></header>
      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Desarrollo web + IA</p><h1>Construyo soluciones digitales para <em>problemas reales.</em></h1><p className="hero-lead">Websites, aplicaciones, automatizaciones y productos digitales. Desarrollo moderno, criterio y herramientas de IA para avanzar mejor.</p><div className="hero-actions"><a className="button button-primary" href="#contacto">Hablemos de tu proyecto <ArrowUpRight /></a><a className="text-link" href="#proyectos">Ver proyectos <ArrowDown /></a></div></div>
          <div className="hero-aside"><div className="orbit"><span className="orbit-word orbit-top">IDEAR</span><span className="orbit-word orbit-right">CONSTRUIR</span><span className="orbit-word orbit-bottom">ITERAR</span><span className="orbit-word orbit-left">LANZAR</span><div className="orbit-core"><Spark /></div></div><p>Una idea no necesita estar completamente definida para empezar a hablar de ella.</p></div>
        </section>

        <section className="signal-strip"><div><span>01</span><strong>Entender</strong><small>el problema</small></div><div><span>02</span><strong>Diseñar</strong><small>la dirección</small></div><div><span>03</span><strong>Construir</strong><small>la solución</small></div><div><span>04</span><strong>Iterar</strong><small>hasta que funcione</small></div></section>

        <section className="section-wrap intro-section" id="enfoque"><div className="section-kicker">/ 01 — Enfoque</div><div className="intro-grid"><h2>No vendo solamente código. <span>Construyo algo que tenga sentido para vos.</span></h2><div><p>Me interesa entender qué necesitás antes de decidir cómo construirlo. Así, la tecnología acompaña al problema y no al revés.</p><p>Uso herramientas modernas e inteligencia artificial para investigar, prototipar, automatizar tareas y revisar el trabajo con más velocidad. El criterio, el contexto y las decisiones siguen siendo humanos.</p></div></div></section>

        <section className="section-wrap capabilities"><div className="section-kicker">/ 02 — Qué puedo construir</div><div className="capability-grid"><article><span>01</span><h3>Websites</h3><p>Landing pages y sitios que explican bien una propuesta y convierten visitas en conversaciones.</p></article><article><span>02</span><h3>Web apps</h3><p>Herramientas personalizadas, dashboards y sistemas internos para trabajar mejor.</p></article><article><span>03</span><h3>IA & agentes</h3><p>Automatizaciones e integraciones con IA que resuelven tareas concretas, sin humo.</p></article><article><span>04</span><h3>MVPs & SaaS</h3><p>De una idea inicial a un producto funcional que se pueda probar y mejorar.</p></article><article><span>05</span><h3>Integraciones</h3><p>APIs, servicios externos y sistemas existentes conectados de forma ordenada.</p></article><article className="capability-last"><span>+</span><h3>¿Otra cosa?</h3><p>Contame el problema. La solución puede empezar por una conversación.</p></article></div></section>

        <section className="process-section"><div className="section-wrap"><div className="section-kicker">/ 03 — Cómo trabajo</div><div className="process-list"><div><span>01</span><h3>Entender</h3><p>Hablamos del problema, el objetivo y lo que ya existe.</p></div><div><span>02</span><h3>Definir</h3><p>Ordenamos prioridades y elegimos el próximo paso útil.</p></div><div><span>03</span><h3>Construir</h3><p>Diseño y desarrollo con herramientas modernas e IA donde suma.</p></div><div><span>04</span><h3>Iterar</h3><p>Probamos, aprendemos y mejoramos antes de darlo por terminado.</p></div></div></div></section>

        <section className="section-wrap projects-section" id="proyectos"><div className="projects-heading"><div className="section-kicker">/ 04 — Proyectos seleccionados</div><p>Una muestra de sitios y experiencias digitales construidas para contextos distintos.</p></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></section>

        <section className="contact-section" id="contacto"><div className="section-wrap contact-grid"><div><div className="section-kicker">/ 05 — Contacto</div><h2>¿Tenés algo en mente?</h2><p>Contame qué querés construir, mejorar o automatizar. No hace falta que la idea esté completamente definida.</p><div className="contact-details"><a href="mailto:scvillada@gmail.com">scvillada@gmail.com <ArrowUpRight /></a><a href="https://wa.me/5493512155061" target="_blank" rel="noreferrer">WhatsApp: +54 9 351 215-5061 <ArrowUpRight /></a></div></div><ContactForm /></div></section>
      </main>
      <footer className="site-footer section-wrap"><a className="wordmark" href="#inicio">Santos Villada<span>.</span></a><p>Desarrollo web, productos digitales e IA aplicada.</p><a href="#inicio">Volver arriba ↑</a></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Person", "@id": `${siteUrl}/#person`, name: "Santos Villada", url: siteUrl, jobTitle: "Desarrollador web", email: "scvillada@gmail.com", telephone: "+54 9 351 215-5061", sameAs: ["https://github.com/SantosVillada"] }, { "@type": "ProfessionalService", "@id": `${siteUrl}/#service`, name: "Santos Villada", url: siteUrl, description: "Desarrollo de productos digitales, aplicaciones web, automatizaciones e integraciones con IA.", areaServed: "Worldwide", provider: { "@id": `${siteUrl}/#person` } }] }) }} />
    </>
  );
}
