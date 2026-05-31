import { GmailIcon, LinkedInIcon, GitHubIcon } from './Icons'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section section-border">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's work together</h2>
      <div className="contact-box">
        <div className="contact-headline">Open to opportunities</div>
        <p className="contact-sub">
          Open to junior software development opportunities and collaboration. Whether it's a
          full-time role, freelance project, or just a conversation — feel free to reach out.
        </p>
        <p className="num">+383 49 891 759</p>
        <div className="contact-links">
          <a href="mailto:elonzenelaj8@gmail.com" className="contact-link email">
            <GmailIcon /> elonzenelaj8@gmail.com
          </a>
          <a href="https://linkedin.com/in/elonzenelaj" target="_blank" rel="noreferrer" className="contact-link linkedin">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://github.com/elonzenelaj36" target="_blank" rel="noreferrer" className="contact-link github">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
