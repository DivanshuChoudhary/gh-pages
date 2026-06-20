import "./App.css";

const skills = ["HTML", "CSS", "Git", "GitHub"];

function App() {
  return (
    <div className="app-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <header className="hero">
        <nav className="navbar glass">
          <div className="brand">
            <span className="brand-dot" />
            <span>Divanshu Choudhary</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-card glass">
          <p className="kicker">B.Tech CSE Student • Learning DevOps</p>
          <h1>Bright, clean, and modern portfolio.</h1>
          <p className="hero-text">
            I am Divanshu Choudhary, a B.Tech CSE student currently learning DevOps and building strong frontend fundamentals.
          </p>

          <div className="hero-badges">
            <span>DevOps Learner</span>
            <span>Frontend Basics</span>
            <span>Responsive Design</span>
          </div>

          <div className="hero-actions">
            <a className="btn primary" href="#about">About Me</a>
            <a className="btn secondary" href="#contact">Contact</a>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-title">
            <p>About</p>
            <h2>Who I am</h2>
          </div>
          <div className="info-card glass">
            <p>
              I am a B.Tech CSE student and currently learning DevOps. I like creating simple, visually appealing, and responsive web interfaces.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title">
            <p>Skills</p>
            <h2>What I know</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-card glass">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-title">
            <p>Contact</p>
            <h2>Let's connect</h2>
          </div>
          <div className="info-card glass contact-card">
            <span>Email</span>
            <a href="mailto:choudharydivanshu95@gmail.com">
              choudharydivanshu95@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;