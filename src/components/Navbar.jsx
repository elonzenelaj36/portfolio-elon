import { useState, useEffect } from 'react'
import { MenuIcon, CloseIcon } from './Icons'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Education', 'Courses', 'Contact']

function Navbar() {
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'courses', 'contact']
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id, e) => {
    e.preventDefault()
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <a href="#hero" className="nav-logo" onClick={(e) => scrollTo('hero', e)}>
          EZ<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? 'active' : ''}
                onClick={(e) => scrollTo(l, e)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-toggle" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu">
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => scrollTo(l, e)}>
            {l}
          </a>
        ))}
      </div>
    </>
  )
}

export default Navbar
