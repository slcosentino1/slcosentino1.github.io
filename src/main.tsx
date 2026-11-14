import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, FileDown, Layers3, Workflow, BrainCircuit, Cloud, Code2, Database, Network, ShieldCheck, GraduationCap, Menu } from 'lucide-react';
import './style.css';

const projects = [
  {
    number: '01', title: 'Autonomous Engineering Harness', type: 'AI ENGINEERING / DEVELOPER TOOLING',
    description: 'A Python-based orchestration system coordinating AI coding agents across the software engineering lifecycle — from planning and implementation to independent review, correction and verification.',
    details: ['Persistent workflow state machine', 'Human approval gates and execution boundaries', 'Independent AI reviews and bounded correction cycles', 'LangFuse observability across workflow stages'],
    stack: ['Python', 'Codex CLI', 'Claude CLI', 'LangFuse'], url: 'https://github.com/slcosentino1/autonomous-engineering-harness', icon: <Workflow />
  },
  {
    number: '02', title: 'AskDoc — GenAI RAG Platform', type: 'GENAI / BACKEND SYSTEMS',
    description: 'A RAG service for asynchronous document ingestion, structure-aware chunking, embedding generation, semantic retrieval and LLM-based question answering.',
    details: ['Two-stage processing pipeline with Celery and RabbitMQ', 'Independent scaling and failure isolation', 'Separate retrieval and generation endpoints', 'PostgreSQL / pgvector and LangFuse integration'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Celery', 'RabbitMQ'], url: 'https://github.com/slcosentino1/AskDoc', icon: <BrainCircuit />
  }
];

const experience = [
  { company: 'Aily Labs', role: 'Senior Software Engineer · Cloud / Platform', period: 'Aug 2023 — Present', intro: 'Decision Intelligence platform for global enterprises across pharmaceutical, biotech, healthcare, consumer goods and retail.', bullets: ['Own backend and platform initiatives across a multi-tenant SaaS platform on AWS, coordinating Backend, Data, Web and Mobile teams.', 'Drive technical implementation and architectural decisions, including modernization of legacy tenant architectures.', 'Deliver end-to-end product functionality across Python, GraphQL, React and TypeScript, from API contracts through production release.', 'Implement asynchronous workflows with RabbitMQ and contribute to AI agent operationalization using Python and Pydantic AI.', 'Mentor engineers, participate in production on-call and contribute to CI/CD and controlled deployments with Docker and Kubernetes.'], tech: 'Python · Pydantic AI · LangGraph · LangFuse · .NET · PostgreSQL · AWS · Docker · Kubernetes · RabbitMQ · React · GraphQL · Datadog' },
  { company: 'Hitachi Vantara', role: 'Software Engineer · Backend / Cloud', period: 'Mar 2022 — Aug 2023', intro: 'Large-scale advertising platform built around microservices and event-driven architectures.', bullets: ['Joined a four-person team building a new product area within a microfrontend architecture.', 'Expanded from frontend into backend development across microservices and asynchronous communication using Pub/Sub.', 'Contributed to scalability, maintainability, reliability and automated testing.'], tech: '.NET Core · PostgreSQL · Docker · React · TypeScript · GCP · Pub/Sub' },
  { company: 'AXA Seguros', role: 'Software Engineer · Backend / Cloud', period: 'Sep 2020 — Mar 2022', intro: 'Modernization of internal applications, contributing to architectural and technical decisions.', bullets: ['Co-designed and implemented an end-to-end modernization of a production application with stability and performance issues.', 'Migrated the frontend to a React SPA and introduced static frontend delivery using CDN and caching.', 'Reworked Node.js middleware and introduced observability to diagnose failures and performance issues.', 'Introduced Cypress end-to-end tests to strengthen application coverage and release reliability.'], tech: '.NET Core · Node.js · React · TypeScript · MSSQL · Azure · CDN · Caching · Observability · Cypress' },
  { company: 'IRAM', role: 'Software Engineer / Technical Lead', period: 'Nov 2015 — Sep 2020', intro: 'End-to-end delivery of internal applications across Human Resources and Standardization.', bullets: ['Led technical delivery, defining approaches, coordinating external developers and remaining hands-on.', 'Mentored and onboarded developers; presented deliverables and gathered stakeholder feedback.', 'Developed web, mobile and reporting solutions.'], tech: '.NET · C# · Angular · React · SQL Server · Azure · Xamarin · Power BI' },
  { company: 'Piramide Technologies', role: 'Software Engineer / Technical Lead', period: 'Mar 2012 — Mar 2015', intro: 'Technical lead for a four-developer team, coordinating technical decisions and delivery.', bullets: ['Led a production migration of insurance policies from a legacy Universal-based system to SQL Server.', 'Designed data mapping and transformation, including normalization into the target data model.', 'Worked with the team on a parallel-processing migration application and supported production execution.'], tech: 'C# · .NET · ASP.NET MVC · REST APIs · SQL Server · Jenkins · NUnit' },
];

const skillGroups = [
  { icon: <Code2 />, name: 'Backend Engineering', items: 'Python, FastAPI, .NET Core, C#, Node.js, REST APIs, GraphQL, Microservices' },
  { icon: <BrainCircuit />, name: 'AI & GenAI', items: 'LLMs, RAG, Embeddings, Vector Search, pgvector, Pydantic AI, LangGraph, LangFuse, AI Agents' },
  { icon: <Network />, name: 'Distributed Systems', items: 'Event-Driven Architecture, RabbitMQ, Pub/Sub, Asynchronous Processing' },
  { icon: <Cloud />, name: 'Cloud & Infrastructure', items: 'AWS, GCP, Azure, Docker, Kubernetes, CDN, Caching' },
  { icon: <Database />, name: 'Data & Persistence', items: 'PostgreSQL, SQL Server, MongoDB' },
  { icon: <ShieldCheck />, name: 'Delivery & Quality', items: 'CI/CD, Observability, Distributed Tracing, XUnit, Jest, Cypress, pytest' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="topbar"><a className="brand" href="#top" onClick={closeMenu}>SC<span>.</span></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={20}/></button><nav className={menuOpen ? 'nav open' : 'nav'}>{[['Projects','#projects'],['Experience','#experience'],['Expertise','#expertise'],['About','#about']].map(([label,href])=><a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="/Sebastian_Cosentino_Resume.pdf" download>Download CV <FileDown size={14}/></a></nav></header>
    <main id="top">
      <section className="hero shell">
        <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR THE RIGHT OPPORTUNITY <span className="eyebrow-line"/></div>
        <p className="hero-kicker">Hello, I'm Sebastian</p>
        <h1>Engineering reliable<br/><em>systems</em> for what’s next.</h1>
        <p className="hero-copy">Senior Backend / Platform Engineer with 15+ years of experience building production software across backend, cloud and distributed systems. Recently focused on AI-powered applications and autonomous engineering workflows.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a><a className="button button-quiet" href="/Sebastian_Cosentino_Resume.pdf" download>Download résumé <FileDown size={16}/></a></div>
        <div className="hero-meta"><span><MapPin size={14}/> Barcelona, Spain</span><span className="meta-sep">/</span><a href="mailto:slcosentino1@gmail.com"><Mail size={14}/> Email me</a><span className="meta-sep">/</span><a href="https://github.com/slcosentino1" target="_blank" rel="noreferrer"><Github size={14}/> GitHub <ArrowUpRight size={12}/></a><span className="meta-sep">/</span><a href="https://www.linkedin.com/in/scosentino/" target="_blank" rel="noreferrer" className="linkedin-link"><Linkedin size={14}/> LinkedIn <ArrowUpRight size={12}/></a></div>
        <div className="hero-index"><span>01 / 04</span><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span></div>
      </section>

      <section className="section shell" id="projects"><div className="section-heading"><div><p className="section-label">01 — SELECTED WORK</p><h2>Projects that turn<br/><em>ideas into systems.</em></h2></div><p className="section-aside">A closer look at the systems I've designed and built — from autonomous engineering workflows to production-oriented GenAI applications.</p></div>
        <div className="project-grid">{projects.map(p=><article className="project-card" key={p.number}><div className="project-top"><span className="project-number">{p.number} / PROJECT</span><span className="project-icon">{p.icon}</span></div><p className="project-type">{p.type}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p><ul className="project-details">{p.details.map(d=><li key={d}>{d}</li>)}</ul><div className="tag-list">{p.stack.map(s=><span key={s}>{s}</span>)}</div><a className="project-link" href={p.url} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={15}/></a></article>)}</div>
      </section>

      <section className="section section-alt" id="experience"><div className="shell"><div className="section-heading"><div><p className="section-label">02 — EXPERIENCE</p><h2>Building, leading<br/><em>and delivering.</em></h2></div><p className="section-aside">15+ years working across product teams, modernizing platforms, making technical decisions and taking initiatives from design to production.</p></div>
        <div className="timeline">{experience.map((job,i)=><article className="timeline-item" key={job.company}><div className="timeline-marker"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-content"><div className="job-heading"><div><h3>{job.company}</h3><p>{job.role}</p></div><span className="job-period">{job.period}</span></div><p className="job-intro">{job.intro}</p><ul>{job.bullets.map(b=><li key={b}>{b}</li>)}</ul><p className="job-tech">{job.tech}</p></div></article>)}</div>
        <div className="earlier"><span className="section-label">EARLIER EXPERIENCE</span><p><strong>Atento</strong> · Software Engineer · 2015 &nbsp; / &nbsp; <strong>Etermax</strong> · Software Engineer · 2011–2012 &nbsp; / &nbsp; <strong>Proyectos de Tecnología Informática</strong> · Software Engineer · 2008–2011</p></div>
      </div></section>

      <section className="section shell" id="expertise"><div className="section-heading"><div><p className="section-label">03 — TECHNICAL EXPERTISE</p><h2>Strong foundations.<br/><em>Broad perspective.</em></h2></div><p className="section-aside">Combining software engineering fundamentals with cloud-native architecture and hands-on AI engineering.</p></div><div className="skills-grid">{skillGroups.map(g=><article className="skill-card" key={g.name}><div className="skill-icon">{g.icon}</div><h3>{g.name}</h3><p>{g.items}</p></article>)}</div></section>

      <section className="section about-section" id="about"><div className="shell about-grid"><div><p className="section-label">04 — A BIT ABOUT ME</p><h2>Engineering is more than<br/><em>writing code.</em></h2></div><div className="about-copy"><p>I enjoy working on complex problems where architecture, product thinking and execution meet. My approach combines hands-on engineering with technical ownership: understanding the problem, making pragmatic decisions, aligning teams and following through to production.</p><p>My recent work explores how AI systems can become useful, observable and reliable parts of real engineering workflows — without losing sight of the fundamentals that make software dependable.</p><div className="education"><GraduationCap size={19}/><div><strong>Computer Engineering</strong><span>Universidad Tecnológica Nacional (UTN FRBA)</span><small>Bachelor Degree · 2008–2015</small></div></div></div></div></section>

      <section className="contact-section shell" id="contact"><p className="section-label">LET'S CONNECT</p><h2>Have a challenging problem<br/>to <em>solve?</em></h2><p className="contact-copy">I'm always interested in discussing engineering challenges, platform architecture and AI-powered products.</p><a className="button button-primary" href="mailto:slcosentino1@gmail.com">Get in touch <ArrowUpRight size={16}/></a><div className="contact-links"><a href="mailto:slcosentino1@gmail.com"><Mail size={15}/> Email</a><a href="https://github.com/slcosentino1" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a><a href="https://www.linkedin.com/in/scosentino/" target="_blank" rel="noreferrer" className="linkedin-link"><Linkedin size={15}/> LinkedIn</a><a href="/Sebastian_Cosentino_Resume.pdf" download><FileDown size={15}/> Download CV</a></div></section>
    </main>
    <footer className="footer shell"><a className="brand" href="#top">SC<span>.</span></a><span>© {new Date().getFullYear()} Sebastian Cosentino</span><a href="#top">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
