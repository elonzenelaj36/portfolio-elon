import { GmailIcon, LinkedInIcon, GitHubIcon, ArrowIcon } from './Icons'
import './Hero.css'

function Hero() {
  const scrollTo = (id, e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Available for opportunities
        </div>
        <h1 className="hero-name">
          Elon<br />
          <span className="accent-word">Zenelaj</span>
        </h1>
        <p className="hero-role">Junior Software Developer</p>
        <p className="hero-summary">
          Motivated and versatile software developer with a strong foundation in full stack
          development, problem solving, and modern technologies. Passionate about building scalable
          applications and continuously improving technical skills through hands-on learning and
          development.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary" onClick={(e) => scrollTo('projects', e)}>
            View Projects <ArrowIcon />
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => scrollTo('contact', e)}>
            Get in touch
          </a>
        </div>
        <div className="hero-socials">
          <a href="mailto:elonzenelaj8@gmail.com" className="social-link">
            <GmailIcon /> elonzenelaj8@gmail.com
          </a>
          <a href="https://linkedin.com/in/elonzenelaj" target="_blank" rel="noreferrer" className="social-link">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://github.com/elonzenelaj36" target="_blank" rel="noreferrer" className="social-link">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
