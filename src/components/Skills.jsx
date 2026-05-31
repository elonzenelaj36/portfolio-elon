import './Skills.css'

const groups = [
  {
    name: 'Languages & Frameworks',
    icon: '⟨/⟩',
    iconClass: 'icon-blue',
    tagClass: 'tag-blue',
    tags: ['Java', 'JavaScript', 'Python', 'React.js', 'Express', 'FastAPI'],
  },
  {
    name: 'Data & Analysis',
    icon: '◎',
    iconClass: 'icon-green',
    tagClass: 'tag-green',
    tags: ['NLP', 'Data Analysis', 'Pandas', 'Machine Learning', 'Data Visualization'],
  },
  {
    name: 'Tools & Environments',
    icon: '⊞',
    iconClass: 'icon-purple',
    tagClass: 'tag-purple',
    tags: ['Git / GitHub', 'SQL Server', 'Cisco Packet Tracer', 'PostgreSQL', 'Streamlit'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section section-border">
      <p className="section-label">Technical Skills</p>
      <h2 className="section-title">Tools of the trade</h2>
      <div className="skills-grid">
        {groups.map((g) => (
          <div className="skills-group" key={g.name}>
            <div className="skills-group-header">
              <div className={`skills-group-icon ${g.iconClass}`}>{g.icon}</div>
              <span className="skills-group-name">{g.name}</span>
            </div>
            <div className="skill-tags">
              {g.tags.map((t) => (
                <span className={`skill-tag ${g.tagClass}`} key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
