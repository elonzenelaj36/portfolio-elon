import './About.css'

function About() {
  return (
    <section id="about" className="section section-border">
      <p className="section-label">About Me</p>
      <h2 className="section-title">Building things that matter</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>junior software developer</strong> with a genuine passion for building
            scalable, well-structured applications. My background spans full stack web development,
            AI-powered tooling, and network infrastructure design.
          </p>
          <p>
            I'm drawn to the <strong>backend and systems side</strong> of development — designing
            APIs, thinking through architecture, and solving problems that sit at the intersection
            of data and user experience.
          </p>
          <p>
            Learning is built into everything I do. Whether it's picking up a new framework,
            applying machine learning concepts to real projects, or exploring how AI changes the
            way software is built — I stay curious and adapt quickly.
          </p>
          <p>
            I thrive working on problems that require both <strong>creative thinking and technical
            precision</strong>, and I'm always looking to collaborate on meaningful work.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-num">3+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">3+</div>
            <div className="stat-label">Courses Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">5+</div>
            <div className="stat-label">Languages & Frameworks</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">BSc</div>
            <div className="stat-label">CS & Engineering</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
