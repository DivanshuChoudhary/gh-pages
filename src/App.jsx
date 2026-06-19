import './App.css'

function App() {
  const skills = ['HTML', 'CSS', 'Git', 'GitHub']

  return (
    <div className="portfolio">

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Frontend Developer</span>
          <h1 className="name">
            <span className="name-solid">Divanshu</span>
            <span className="name-outline">Choudhary</span>
          </h1>
          <p className="tagline">
            I build clean, accessible interfaces — one line of code at a time.
          </p>
        </div>
        <div className="scroll-hint">↓</div>
      </section>

      {/* Skills */}
      <section className="skills-section" id="skills">
        <div className="section-inner">
          <p className="section-label">Skills</p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="section-inner contact-inner">
          <p className="section-label">Contact</p>
          <h2 className="contact-heading">Let's work together.</h2>
          <a className="email-link" href="mailto:choudharydivanshu95@gmail.com">
            choudharydivanshu95@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2025 Divanshu Choudhary</span>
      </footer>

    </div>
  )
}

export default App