import './Courses.css'

const courses = [
  {
    title: 'AI for Everyone',
    author: 'Andrew Ng — Coursera',
    badgeLabel: 'AI / ML',
    badgeCls: 'badge-purple',
    desc: 'Core AI concepts, machine learning understanding, AI feasibility assessment, and ethical considerations in deploying AI systems for real-world business use cases.',
  },
  {
    title: 'Data Scientist: Machine Learning Career Path',
    author: 'Codecademy',
    badgeLabel: 'Data Science',
    badgeCls: 'badge-green',
    desc: 'Python data analysis, data cleaning, visualization with real datasets, foundational machine learning, and interpreting model outputs for decision making.',
  },
  {
    title: 'Software Development Program',
    author: 'Digital School Kosovo',
    badgeLabel: 'Software Dev',
    badgeCls: 'badge-blue',
    desc: 'Programming fundamentals, algorithmic thinking, and practical software engineering experience through project-based learning and real-world problem solving.',
  },
]

function Courses() {
  return (
    <section id="courses" className="section section-border">
      <p className="section-label">Learning</p>
      <h2 className="section-title">Courses & certifications</h2>
      <div className="courses-grid">
        {courses.map((c) => (
          <div className="course-card" key={c.title}>
            <span className={`course-badge ${c.badgeCls}`}>{c.badgeLabel}</span>
            <div className="course-title">{c.title}</div>
            <div className="course-author">{c.author}</div>
            <p className="course-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
