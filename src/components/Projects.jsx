import './Projects.css'

const projects = [
  {
    icon: '🤖',
    iconClass: '',
    title: 'AI Powered Car-Marketplace',
    desc: 'Built a full-stack AI-powered car marketplace where users can buy and sell vehicles with intelligent assistance. Features local AI integration (Ollama/LLaMA 3.2) for automated listing descriptions, smart car recommendations via natural language chat, and real-time market price estimation. Includes image uploads, advanced search and filtering, favorites system, and a personal seller dashboard',
    tech: [
      { label: 'JavaScript',     cls: 'badge-blue' },
      { label: 'React.js',    cls: 'badge-blue' },
      { label: 'MySql',  cls: 'badge-green' },
      { label: 'Ollama AI', cls: 'badge-purple' },
      { label: 'JSON',        cls: 'badge-purple' },
      { label: 'Node.js',     cls: 'badge-green' },
      { label: 'Express.js',     cls: 'badge-orange' },
    ],
  },
  {
    icon: '🚀',
    iconClass: 'green-icon',
    title: 'Student-Study dashboard',
    desc: 'Student Study Dashboard is a full-stack web application designed to help students stay organized and focused. It features a Notes Manager for creating, editing, and searching categorized notes, a Task Tracker with completion filtering and progress tracking, and a Pomodoro Study Timer with an animated countdown ring. ',
    tech: [
      { label: 'React.js',   cls: 'badge-blue' },
      { label: 'Express.js',    cls: 'badge-green' },
      { label: 'Node.js', cls: 'badge-purple' },
      { label: 'JavaScript',   cls: 'badge-orange' },
      { label: 'JSON Files',   cls: 'badge-orange' },
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
