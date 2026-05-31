import './Projects.css'

const projects = [
  {
    icon: '🤖',
    iconClass: '',
    title: 'AI Powered CV & Job Match Analyzer',
    desc: 'Built an AI-powered resume analyzer that evaluates CV compatibility with job descriptions using NLP-based semantic matching and ATS analysis. Features interactive dashboards with match scoring, skill gap detection, keyword optimization, PDF reporting, and AI-generated recruiter-style feedback.',
    tech: [
      { label: 'Python',     cls: 'badge-blue' },
      { label: 'FastAPI',    cls: 'badge-blue' },
      { label: 'Streamlit',  cls: 'badge-green' },
      { label: 'OpenAI API', cls: 'badge-purple' },
      { label: 'NLP',        cls: 'badge-purple' },
      { label: 'Pandas',     cls: 'badge-green' },
      { label: 'Plotly',     cls: 'badge-orange' },
    ],
  },
  {
    icon: '🚀',
    iconClass: 'green-icon',
    title: 'Crowdfunding Web Platform',
    desc: 'Full stack crowdfunding platform with authentication, campaign management, and real-time funding interactions. Designed and implemented scalable RESTful APIs and a normalized relational database schema to manage users, campaigns, and transactions across an end-to-end system.',
    tech: [
      { label: 'React.js',   cls: 'badge-blue' },
      { label: 'Express',    cls: 'badge-green' },
      { label: 'PostgreSQL', cls: 'badge-purple' },
      { label: 'REST API',   cls: 'badge-orange' },
    ],
  },
  {
    icon: '🌐',
    iconClass: 'purple-icon',
    title: 'Stadium Network Infrastructure Design',
    desc: 'Designed a scalable stadium network architecture simulating high-traffic environments with thousands of concurrent users. Implemented VLAN segmentation, routing and IP addressing schemes, and evaluated network resilience during simulated event-level traffic scenarios.',
    tech: [
      { label: 'Cisco Packet Tracer', cls: 'badge-purple' },
      { label: 'VLAN',               cls: 'badge-blue' },
      { label: 'Networking',          cls: 'badge-green' },
    ],
  },
]

function Projects() {
  return (
    <section id="projects" className="section section-border">
      <p className="section-label">Projects</p>
      <h2 className="section-title">What I've built</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-header">
              <div className={`project-icon ${p.iconClass}`}>{p.icon}</div>
            </div>
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span className={`tech-badge ${t.cls}`} key={t.label}>{t.label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
