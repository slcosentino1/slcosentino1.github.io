import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, FileDown, Menu, X, ExternalLink, Layers3, Workflow, BrainCircuit, GraduationCap, MoveUpRight } from 'lucide-react';
import './style.css';

const projects = [
  {
    number: '01', category: 'AI ENGINEERING / DEVELOPER TOOLING', title: 'Autonomous Engineering Harness',
    summary: 'An orchestration system coordinating AI coding agents across the software engineering lifecycle — from planning and implementation to independent review, correction and verification.',
    problem: 'AI coding agents can accelerate implementation, but coordinating multi-step work reliably requires more than a prompt. Work needs explicit phases, durable state, boundaries and a way to recover when execution is interrupted.',
    approach: ['Designed a Python orchestrator around a persistent workflow state machine.', 'Added human approval gates, execution boundaries, provider budgets and timeouts.', 'Built independent review stages with filtered code changes, review coverage and bounded correction cycles.', 'Integrated LangFuse to observe workflow stages and AI provider executions.'],
    decisions: ['Persist workflow state across CLI invocations instead of relying on a single long-running session.', 'Separate implementation from review to introduce an independent quality checkpoint.', 'Bound correction cycles and execution budgets to keep runs controllable.'],
    stack: ['Python', 'Codex CLI', 'Claude CLI', 'LangFuse'], url: 'https://github.com/slcosentino1/autonomous-engineering-harness', kind: 'Independent project'
  },
  {
    number: '02', category: 'GENAI / BACKEND SYSTEMS', title: 'AskDoc — GenAI RAG Platform',
    summary: 'A RAG service for asynchronous document ingestion, structure-aware chunking, embedding generation, semantic retrieval and LLM-based question answering.',
    problem: 'Document ingestion and question answering have different workloads and failure modes. Combining them into one synchronous process makes processing harder to scale and recover.',
    approach: ['Designed an asynchronous ingestion pipeline using Celery and RabbitMQ.', 'Separated document chunking from embedding generation so each stage can scale independently.', 'Implemented distinct retrieval and generation endpoints for reuse by external agents and applications.', 'Used PostgreSQL / pgvector for vector similarity search and LangFuse for AI observability.'],
    decisions: ['Split ingestion into independently executable stages to isolate failures.', 'Expose retrieval separately from generation so consumers can retrieve context without an LLM call.', 'Use PostgreSQL with pgvector to keep relational and vector data within one persistence layer.'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Celery', 'RabbitMQ', 'LangFuse'], url: 'https://github.com/slcosentino1/AskDoc', kind: 'Independent project'
  }
];

const experience = [
  { company: 'Aily Labs', role: 'Senior Software Engineer · Cloud / Platform', period: 'Aug 2023 — Present', intro: 'Decision Intelligence platform connecting business data across global enterprise functions and industries.', bullets: ['Own backend and platform initiatives across a multi-tenant SaaS platform on AWS, coordinating Backend, Data, Web and Mobile teams.', 'Drive implementation and architectural decisions, including modernization of legacy tenant architectures and data-driven approaches that reduce duplicated implementations.', 'Deliver end-to-end product functionality across Python, GraphQL, React and TypeScript, from API contracts through production release.', 'Implement asynchronous workflows with RabbitMQ and contribute to operationalizing AI agents using Python and Pydantic AI.', 'Mentor engineers, participate in production on-call and contribute to CI/CD and controlled deployments with Docker and Kubernetes.'], tech: 'Python · Pydantic AI · LangGraph · LangFuse · .NET · PostgreSQL · AWS · Docker · Kubernetes · RabbitMQ · React · GraphQL · Datadog' },
  { company: 'Hitachi Vantara', role: 'Software Engineer · Backend / Cloud', period: 'Mar 2022 — Aug 2023', intro: 'Large-scale advertising platform built around microservices and event-driven architectures.', bullets: ['Joined a four-person team building a new product area within a microfrontend architecture.', 'Expanded from frontend into backend development across microservices and asynchronous communication using Pub/Sub.', 'Contributed to scalability, maintainability, reliability and automated testing.'], tech: '.NET Core · PostgreSQL · Docker · React · TypeScript · GCP · Pub/Sub' },
  { company: 'AXA Seguros', role: 'Software Engineer · Backend / Cloud', period: 'Sep 2020 — Mar 2022', intro: 'Modernization of internal applications, contributing to architectural and technical decisions.', bullets: ['Co-designed and implemented an end-to-end modernization of a production application with stability, performance and failure-diagnosis issues.', 'Migrated the frontend to a React single-page application and introduced static frontend delivery using CDN and caching.', 'Reworked Node.js middleware and introduced observability to diagnose failures and performance issues.', 'Introduced Cypress end-to-end tests to strengthen application coverage and release reliability.'], tech: '.NET Core · Node.js · React · TypeScript · MSSQL · Azure · CDN · Caching · Observability · Cypress' },
  { company: 'IRAM', role: 'Software Engineer / Technical Lead', period: 'Nov 2015 — Sep 2020', intro: 'End-to-end delivery of internal applications across Human Resources and Standardization.', bullets: ['Led technical delivery, defining approaches, coordinating external developers and remaining hands-on.', 'Mentored and onboarded developers; presented deliverables and gathered stakeholder feedback.', 'Developed web, mobile and reporting solutions.'], tech: '.NET · C# · Angular · React · SQL Server · Azure · Xamarin · Power BI' },
  { company: 'Piramide Technologies', role: 'Software Engineer / Technical Lead', period: 'Mar 2012 — Mar 2015', intro: 'Technical lead for a four-developer team, coordinating technical decisions and delivery.', bullets: ['Led a production migration of insurance policies from a legacy Universal-based system to SQL Server.', 'Designed data mapping and transformation, including normalization into the target data model.', 'Worked with the team on a parallel-processing migration application and supported production execution.'], tech: 'C# · .NET · ASP.NET MVC · REST APIs · SQL Server · Jenkins · NUnit' },
];

const capabilities = [
  { n: '01', title: 'Understand the problem', text: 'Work with users and stakeholders to clarify the actual problem, constraints and desired outcomes — before jumping to implementation.' },
  { n: '02', title: 'Shape the solution', text: 'Translate needs into a pragmatic technical approach. Make architecture and trade-off decisions that fit the product and its operating context.' },
  { n: '03', title: 'Build hands-on', text: 'Stay close to implementation across backend, frontend, infrastructure and AI components. I enjoy turning the design into working software.' },
  { n: '04', title: 'Deliver and improve', text: 'Integrate, test, deploy and observe the solution in its real environment. Use feedback and production behavior to guide what comes next.' },
];

function ProjectCaseStudy({ project, index }: { project: typeof projects[number], index: number }) {
  const [expanded, setExpanded] = React.useState(false);
  return <article className={`case-study case-${index + 1}`}>
    <div className="case-visual" aria-label={`${project.title} conceptual system diagram`}>
      <div className="visual-head"><span>ENGINEERING NOTE / {project.number}</span><span>{project.kind.toUpperCase()}</span></div>
      {index === 0 ? <div className="harness-diagram">
        <div className="diagram-node orchestrator"><span className="node-kicker">CONTROL PLANE</span><strong>Orchestrator</strong><small>Persistent workflow state</small></div>
        <div className="diagram-connector"><i/><i/><i/></div>
        <div className="diagram-grid"><div className="diagram-node"><b>01</b><strong>Plan</strong></div><div className="diagram-node"><b>02</b><strong>Implement</strong></div><div className="diagram-node"><b>03</b><strong>Review</strong></div><div className="diagram-node"><b>04</b><strong>Verify</strong></div></div>
        <div className="diagram-foot"><span>APPROVAL GATES</span><span>BOUNDED EXECUTION</span><span>RECOVERY</span></div>
      </div> : <div className="askdoc-diagram">
        <div className="flow-step"><span>INPUT</span><strong>Document</strong><small>Upload / ingestion</small></div><div className="flow-arrow">↓</div>
        <div className="queue-step"><span>ASYNC PROCESSING</span><strong>Celery + RabbitMQ</strong></div><div className="flow-branches"><div><b>01</b><strong>Structure-aware<br/>chunking</strong></div><div><b>02</b><strong>Embedding<br/>generation</strong></div></div>
        <div className="flow-arrow">↓</div><div className="vector-step"><span>VECTOR STORE</span><strong>PostgreSQL / pgvector</strong></div><div className="flow-arrow">↓</div><div className="flow-output"><span>CONSUMPTION</span><strong>Retrieval API</strong><i/> <strong>Generation API</strong></div>
      </div>}
      <div className="visual-caption">ILLUSTRATIVE SYSTEM VIEW · NOT A LIVE ARCHITECTURE EXPORT</div>
    </div>
    <div className="case-content">
      <div className="case-meta"><span>{project.number} / {project.category}</span><span>INDEPENDENT PROJECT</span></div>
      <h3>{project.title}</h3><p className="case-summary">{project.summary}</p>
      <div className="case-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
      <button className="text-action" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>{expanded ? 'Close engineering notes' : 'Explore engineering notes'} <ArrowDownRight size={16}/></button>
      {expanded && <div className="case-details">
        <div><h4>THE PROBLEM</h4><p>{project.problem}</p></div>
        <div><h4>APPROACH</h4><ul>{project.approach.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div><h4>ENGINEERING DECISIONS</h4><ul>{project.decisions.map(item => <li key={item}>{item}</li>)}</ul></div>
      </div>}
      <a className="repo-link" href={project.url} target="_blank" rel="noreferrer">View source on GitHub <ArrowUpRight size={15}/></a>
    </div>
  </article>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="topbar"><a className="brand" href="#top" onClick={closeMenu}>SC<span>.</span></a><nav className={menuOpen ? 'nav open' : 'nav'}><a href="#work" onClick={closeMenu}>Work</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a><a className="nav-cv" href="/Sebastian_Cosentino_Resume.pdf" download>Download CV <FileDown size={14}/></a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button></header>
    <main id="top">
      <section className="hero shell">
        <div className="hero-topline"><span>SOFTWARE ENGINEERING / AI SYSTEMS / PRODUCT DELIVERY</span><span className="availability"><i/> OPEN TO THE RIGHT OPPORTUNITY</span></div>
        <div className="hero-main"><div className="hero-copy-block"><p className="eyebrow">SEBASTIAN COSENTINO <span>— BARCELONA, SPAIN</span></p><h1>From complex<br/>problems to <em>production.</em></h1><p className="hero-subtitle">Product-minded engineering. Hands-on execution. AI-powered systems.</p><p className="hero-description">I work across the entire engineering lifecycle — understanding problems with users and stakeholders, shaping technical solutions, building the software and taking it into production.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16}/></a><a className="button button-secondary" href="/Sebastian_Cosentino_Resume.pdf" download>Download CV <FileDown size={15}/></a></div></div><aside className="hero-aside"><span className="aside-index">PROFILE / 001</span><div className="aside-rule"/><p>15+ years building production software across backend, cloud and distributed systems.</p><p>Currently expanding the frontier: AI applications, agent workflows and autonomous engineering systems.</p><div className="aside-links"><a href="https://www.linkedin.com/in/scosentino/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={13}/></a><a href="https://github.com/slcosentino1" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a><a href="mailto:slcosentino1@gmail.com"><Mail size={15}/> Email <ArrowUpRight size={13}/></a></div></aside></div>
        <div className="hero-bottom"><span>BACKEND · PLATFORM · AI ENGINEERING</span><a href="#work">SCROLL TO EXPLORE <ArrowDown size={13}/></a><span>41°23' N / 2°10' E</span></div>
      </section>

      <section className="work-section section shell" id="work"><div className="section-intro"><div><p className="section-label">01 — SELECTED WORK</p><h2>Systems built to<br/><em>solve real problems.</em></h2></div><p className="intro-note">A selection of independent engineering projects. Each one explores a different challenge in orchestration, AI applications and reliable backend systems.</p></div>
        <div className="case-list">{projects.map((p, i) => <ProjectCaseStudy key={p.number} project={p} index={i}/>)}</div>
        <article className="ucb-case"><div className="ucb-preview"><a href="/ucb/" aria-label="Open UCB case presentation"><img src="/ucb/preview.jpg" alt="UCB interview presentation preview" /><span className="ucb-preview-label">CASE PRESENTATION / 2026</span></a></div><div className="ucb-case-copy"><p className="section-label">INTERVIEW CASE · PRODUCT / PLATFORM ENGINEERING</p><h3>UCB — Engineering experience in context</h3><p>A short walkthrough of a product I worked on, followed by my engineering background, platform experience and AI projects.</p><div className="enterprise-tags"><span>Product walkthrough</span><span>Backend ownership</span><span>Platform</span><span>AI Engineering</span></div><a className="repo-link" href="/ucb/">Open presentation page <ArrowUpRight size={15}/></a></div></article>
        <article className="enterprise-case"><div className="enterprise-index">03 / PROFESSIONAL EXPERIENCE</div><div className="enterprise-body"><div><p className="section-label">PLATFORM MODERNIZATION · ENTERPRISE</p><h3>Modernizing a production application</h3></div><div><p>At AXA, I co-designed and delivered the modernization of an application facing stability, performance and diagnosis challenges. The work combined a React single-page frontend, static delivery through CDN and caching, backend middleware improvements and end-to-end testing.</p><p className="enterprise-note">A professional case from my experience. Details are intentionally limited to non-confidential information.</p></div></div><div className="enterprise-tags"><span>React SPA</span><span>Node.js</span><span>CDN & Caching</span><span>Observability</span><span>Cypress</span></div></article>
      </section>

      <section className="approach-section section" id="approach"><div className="shell"><div className="section-intro"><div><p className="section-label">02 — HOW I WORK</p><h2>From understanding<br/>to <em>delivery.</em></h2></div><p className="intro-note">I combine product thinking, technical ownership and hands-on engineering throughout the lifecycle — staying close to both the problem and the implementation.</p></div><div className="approach-grid">{capabilities.map(item => <article className="approach-item" key={item.n}><span className="approach-number">{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><MoveUpRight className="approach-arrow" size={18}/></article>)}</div><div className="approach-footnote"><span>PRODUCT UNDERSTANDING</span><i/><span>TECHNICAL OWNERSHIP</span><i/><span>HANDS-ON ENGINEERING</span><i/><span>PRODUCTION FEEDBACK</span></div></div></section>

      <section className="experience-section section shell" id="experience"><div className="section-intro"><div><p className="section-label">03 — EXPERIENCE</p><h2>Built through years<br/>of <em>delivery.</em></h2></div><p className="intro-note">15+ years across product teams and enterprise environments — building software, modernizing platforms, making technical decisions and helping teams deliver.</p></div><div className="experience-list">{experience.map((job, i) => <article className="experience-row" key={job.company}><div className="experience-number">{String(i + 1).padStart(2, '0')}</div><div className="experience-main"><div className="experience-heading"><div><h3>{job.company}</h3><p>{job.role}</p></div><span>{job.period}</span></div><p className="experience-intro">{job.intro}</p><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul><p className="experience-tech">{job.tech}</p></div></article>)}</div><div className="earlier-experience"><span>EARLIER EXPERIENCE</span><p><strong>Atento</strong> · Software Engineer · Apr–Nov 2015 <b>/</b> <strong>Etermax</strong> · Software Engineer · Apr 2011–Mar 2012 <b>/</b> <strong>Proyectos de Tecnología Informática SRL</strong> · Software Engineer · Jun 2008–Apr 2011</p></div></section>

      <section className="about-section section" id="about"><div className="shell about-layout"><div><p className="section-label">04 — ABOUT</p><h2>Engineering is a<br/>team sport. <em>And a craft.</em></h2></div><div className="about-text"><p>I enjoy working on complex problems where product context, architecture and execution meet. I’m comfortable collaborating with stakeholders to understand what needs to be solved, then moving into the technical details and building the solution hands-on.</p><p>My background spans backend systems, cloud platforms and technical leadership. More recently, I’ve been applying those foundations to AI-powered applications and autonomous engineering workflows — with a focus on making them useful, observable and dependable.</p><div className="about-facts"><div><span>LOCATION</span><strong>Barcelona, Spain</strong></div><div><span>EDUCATION</span><strong>Computer Engineering · UTN FRBA</strong></div><div><span>FOCUS</span><strong>Product Engineering · AI Systems</strong></div></div></div></div></section>

      <section className="contact-section shell" id="contact"><p className="section-label">05 — CONTACT</p><div className="contact-layout"><h2>Have a complex<br/>problem to <em>solve?</em></h2><div><p>I'm interested in engineering challenges where product understanding, technical depth and hands-on delivery come together.</p><a className="button button-primary" href="mailto:slcosentino1@gmail.com">Let's talk <ArrowUpRight size={16}/></a></div></div><div className="contact-links"><a href="mailto:slcosentino1@gmail.com"><Mail size={15}/> Email</a><a href="https://www.linkedin.com/in/scosentino/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a><a href="https://github.com/slcosentino1" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a><a href="/Sebastian_Cosentino_Resume.pdf" download><FileDown size={15}/> Download CV</a></div></section>
    </main>
    <footer className="footer shell"><a className="brand" href="#top">SC<span>.</span></a><span>© {new Date().getFullYear()} Sebastian Cosentino</span><a href="#top">BACK TO TOP ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
