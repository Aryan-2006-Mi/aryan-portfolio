import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Database,
  Github, Linkedin, Mail, MapPin, Menu, Smartphone, Sparkles, Terminal,
  X, Layers3, GraduationCap, ExternalLink
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Aryan Mishra",
  headline: "Computer Science Student · Aspiring Software Engineer",
  email: "2aryan00mishra6@gmail.com",
  phone: "+91 9801477075",
  github: "https://github.com/Aryan-2006-Mi",
  linkedin: "https://www.linkedin.com/in/aryan-mishra-44169831b/",
};

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING",
    title: "Number Detection Neural Network",
    description:
      "Built neural networks in Python with NumPy, exploring both a mathematical implementation and an optimized CNN-based version.",
    stack: ["Python", "NumPy", "CNN", "Softmax", "Cross-Entropy"],
    icon: BrainCircuit,
    note: "Neural networks · Model implementation",
    // Add the direct repository URL when ready.
    github: "",
    demo: "",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Your Gear",
    description:
      "A sports-shopping platform designed to help people discover sports equipment and related products based on their needs.",
    stack: ["React", "Node.js", "MongoDB"],
    icon: Layers3,
    note: "Product discovery · Full-stack web project",
    github: "https://github.com/Aryan-2006-Mi/your-gear",
    demo: "https://your-gear.onrender.com/",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Time & Task Management",
    description:
      "A task-management website that organizes tasks using priority, deadlines, and creation dates.",
    stack: ["Web Development", "JavaScript"],
    icon: Code2,
    note: "Task organization · Prioritization",
    github: "https://github.com/Aryan-2006-Mi/Web-DEV-Project",
    demo: "https://aryan-2006-mi.github.io/Web-DEV-Project/",
  },
  {
    number: "04",
    category: "DATABASE SYSTEMS",
    title: "Food Product History",
    description:
      "A QR-code-based food traceability system that lets authorized users access product history and availability throughout shipment.",
    stack: ["Database", "QR Code", "Web Development"],
    icon: Database,
    note: "Traceability · Data access",
    github: "",
    demo: "",
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Python", "C", "C++", "Java", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Neural Networks", "NumPy", "CNN fundamentals", "AI/ML"],
  },
  {
    title: "Tools & Foundations",
    icon: Database,
    skills: ["GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "DSA", "DBMS"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Aryan Mishra home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">ARYAN MISHRA</span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Aryan<br /><span>Mishra.</span></h1>
            <p className="hero-subtitle">{profile.headline}</p>
            <p className="hero-description">
              I enjoy turning ideas into useful digital experiences and exploring how
              software, data, and AI can solve real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /> Email</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile card">
            <div className="visual-topline"><span>PORTFOLIO / 2026</span><span className="tiny-orbit">✳</span></div>
            <div className="portrait-placeholder">
              <div className="portrait-ring ring-one" />
              <div className="portrait-ring ring-two" />
              
<img
  className="profile-photo"
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="Aryan Mishra"
/>

              <div className="portrait-caption">CURIOUS BY NATURE.<br />BUILDER BY CHOICE.</div>
            </div>
            <div className="visual-bottom">
              <div><span className="visual-label">CURRENTLY STUDYING</span><strong>Computer Science & Engineering</strong></div>
              <div className="visual-location"><MapPin size={15} /> VIT Vellore, India</div>
            </div>
            <div className="floating-chip chip-top"><BrainCircuit size={16} /> AI / ML</div>
            <div className="floating-chip chip-bottom"><Code2 size={16} /> BUILDING WITH CODE</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
            <h2>Curiosity first.<br /><span>Impact always.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              I'm a Computer Science and Engineering student at VIT Vellore with a
              growing interest in <span>software development, AI/ML, databases, and problem-solving.</span>
            </p>
            <p className="body-copy">
              I like understanding how things work, learning by building, and improving
              my ideas through experimentation. My projects span neural networks,
              full-stack web development, task organization, and database-backed systems.
              I'm currently looking for opportunities to learn from strong teams and
              contribute to meaningful engineering work.
            </p>
            <div className="about-facts">
              <div><span className="fact-number">9.01</span><span className="fact-label">CURRENT CGPA</span></div>
              <div><span className="fact-number">04</span><span className="fact-label">FEATURED PROJECTS</span></div>
              <div><span className="fact-number">∞</span><span className="fact-label">THINGS TO LEARN</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-heading section-heading-row">
            <div><p className="eyebrow">02 / MY TOOLKIT</p><h2>Skills & <span>interests.</span></h2></div>
            <p className="heading-note">Tools and concepts I use, study, and keep building on.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><Icon size={21} strokeWidth={1.7} /></div>
                <h3>{group.title}</h3>
                <div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </article>;
            })}
          </div>
          <p className="skills-footnote"><Sparkles size={15} /> Skill set reflects my current learning and project experience.</p>
        </section>

        <section className="section-wrap section-block projects-section" id="projects">
          <div className="section-heading section-heading-row">
            <div><p className="eyebrow">03 / SELECTED WORK</p><h2>Things I've <span>built.</span></h2></div>
            <p className="heading-note">A selection of projects where I put concepts into practice.</p>
          </div>
          <div className="projects-list">
            {projects.map(project => {
              const Icon = project.icon;
              return <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                  <p className="project-note"><span /> {project.note}</p>
                </div>
                <div className="project-side">
                  <div className="project-icon"><Icon size={27} strokeWidth={1.45} /></div>
                  {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub <ArrowUpRight size={15} /></a> : null}
                  {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">Live demo <ExternalLink size={14} /></a> : null}
                </div>
              </article>;
            })}
          </div>
          <div className="project-link-notice">
            <span className="notice-mark">i</span>
            <p>Repository and live-demo links are connected for Your Gear and Time & Task Management. The Number Detection Neural Network and Food Product History links can be added when you share those URLs.</p>
          </div>
        </section>

        <section className="section-wrap section-block education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">04 / THE FOUNDATION</p>
            <h2>Education & <span>growth.</span></h2>
          </div>
          <div className="education-timeline">
            <div className="timeline-line" />
            <article className="education-item">
              <div className="timeline-dot" />
              <div className="education-date">CURRENTLY PURSUING</div>
              <div className="education-details">
                <div className="education-icon"><GraduationCap size={22} /></div>
                <div><h3>B.Tech — Computer Science and Engineering</h3><p>Vellore Institute of Technology · Vellore Campus</p><div className="education-meta"><span>CGPA: <strong>9.01 / 10</strong></span><span>Undergraduate</span></div></div>
              </div>
            </article>
            <article className="education-item">
              <div className="timeline-dot" />
              <div className="education-date">2024</div>
              <div className="education-details">
                <div className="education-icon"><GraduationCap size={22} /></div>
                <div><h3>Higher Secondary — Class XII</h3><p>Bhagat Public School, Kota</p><div className="education-meta"><span>Score: <strong>91%</strong></span></div></div>
              </div>
            </article>
            <article className="education-item">
              <div className="timeline-dot" />
              <div className="education-date">2022</div>
              <div className="education-details">
                <div className="education-icon"><GraduationCap size={22} /></div>
                <div><h3>Secondary — Class X</h3><p>Surajmull Jain Dayanand Anglo Vedic (DAV) Public School</p><div className="education-meta"><span>Score: <strong>93%</strong></span></div></div>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="section-wrap contact-inner">
            <p className="eyebrow">05 / LET'S CONNECT</p>
            <h2>Have an opportunity<br />or an idea? <span>Let's talk.</span></h2>
            <p className="contact-copy">I'm open to software development and AI/ML internship opportunities, collaborative projects, and conversations about technology.</p>
            <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={17} /><span>{profile.email}</span></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn profile</span><ArrowUpRight size={14} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub profile</span><ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ARYAN MISHRA</span></a>
        <p>Designed with intention. Built to keep growing.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Aryan Mishra</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
