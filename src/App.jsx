import React, { useState, useEffect } from 'react';
import './index.css';
import heroImage from './assets/hero-image.png';
import davidImage from './assets/david.png';

const techStack = [
  { name: 'Python', icon: 'python' },
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'AWS', icon: 'amazonaws' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'Kafka', icon: 'apachekafka' },
  { name: 'Spark', icon: 'apachespark' },
  { name: 'Terraform', icon: 'terraform' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Redis', icon: 'redis' },
  { name: 'OpenAI', icon: 'openai' },
  { name: 'GitHub', icon: 'github' }
];

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home" className="nav-logo">David Clark</a>
        </div>
        <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#highlights" onClick={() => setMenuOpen(false)}>Impact</a></li>
            <li><a href="#timeline" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Work</a></li>
            <li><a href="#expertise" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="https://onedrive.live.com/?id=%2Fpersonal%2F899675BF6ED04394%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FDavid%5FClark%5FResume%2Epdf&listurl=%2Fpersonal%2F899675BF6ED04394%2FDocuments&ithint=file%2Cpdf&TeamsCID=11e47caa%2Dba88%2D4c98%2D9859%2Dfdfce7b00317&linkOpenTime=1783015775954&migratedtospo=true&parent=%2Fpersonal%2F899675BF6ED04394%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&wdCid=&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy84OTk2NzVCRjZFRDA0Mzk0L0lRQlRPOW1YaGd3alJxeWJiR0FhRGJJdkFkME1UT0Z1WWZLSW9MLXNNMy1Mc3EwP1RlYW1zQ0lEPTExZTQ3Y2FhLWJhODgtNGM5OC05ODU5LWZkZmNlN2IwMDMxNyZsaW5rT3BlblRpbWU9MTc4MzAxNTc3NTk1NA&ga=1" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume ↓</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <a href="#contact" className="nav-btn">Contact</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      <div className="sections-container">
        <section id="home" className="hero-section">
          <div className="hero-left">
            <div className="icon-wrapper">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066ff" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h1 className="hero-title">
              Principal AI <br/>
              <span className="italic-text">Platform Engineer.</span>
            </h1>
            <p className="hero-subtitle">
              Building production-grade AI systems, LLM platforms, Real-time ML Infrastructure, Scalable Cloud Applications.
            </p>
            <a href="#experience" className="cta-btn">View Experience</a>
            <p className="subtext">10M+ Events Processed</p>
            
            <div className="divider"></div>
            
            <div className="clients-section">
              <p>Trusted Technologies</p>
              <div className="client-logos">
                {techStack.slice(0, 6).map((tech, idx) => (
                  <img key={`hero-tech-${idx}`} src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.icon}.svg`} alt={tech.name} className="tech-icon-small" title={tech.name} />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="image-container">
              <img src={heroImage} alt="Workspace" />
            </div>
            <div className="stats-row">
              <div className="stat-box light-box">
                <span className="stat-box-title">Daily Users</span>
                <span className="stat-box-number black-text">100K+</span>
              </div>
              <div className="stat-box dark-box">
                <span className="stat-box-number white-text">10+</span>
                <span className="stat-box-desc">years of<br/>AI dev experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-section">
          <p className="tech-title">Trusted Technologies</p>
          <div className="tech-scroller">
            <div className="tech-track">
              {techStack.map((tech, idx) => (
                <div className="tech-item" key={`original-${idx}`}>
                  <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.icon}.svg`} alt={`${tech.name} logo`} className="tech-icon" />
                  <span>{tech.name}</span>
                </div>
              ))}
              {techStack.map((tech, idx) => (
                <div className="tech-item" aria-hidden="true" key={`duplicate-${idx}`}>
                  <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.icon}.svg`} alt="" className="tech-icon" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section fade-in-section">
          <div className="about-header">
            <span className="about-subtitle">/ Who Am I</span>
            <h2 className="about-title">Pushing Boundaries <span className="light-text">since 2014</span></h2>
          </div>
          
          <div className="about-content">
            <div className="about-left">
              <div className="about-image-wrapper">
                <img src={davidImage} alt="David Clark" />
              </div>
              <div className="about-details">
                <div className="social-icons">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div className="about-name">
                  <strong>David Clark</strong>
                  <span>Principal AI Engineer</span>
                </div>
              </div>
            </div>
            
            <div className="about-right">
              <p className="about-bio">
                A Principal AI Platform Engineer passionate about creating intuitive digital experiences and robust architectures. I've collaborated with tech giants to design systems that blend scalability and performance, focusing on solving complex problems through data-driven engineering.
              </p>
              
              <div className="experience-list">
                <div className="exp-item">
                  <span className="exp-role">Principal AI Engineer</span>
                  <span className="exp-company">TechNova Solutions</span>
                  <span className="exp-date">2021 &rarr; Now</span>
                </div>
                <div className="exp-item">
                  <span className="exp-role">Senior ML Engineer</span>
                  <span className="exp-company">DataFlow Systems</span>
                  <span className="exp-date">2018 &rarr; 2021</span>
                </div>
                <div className="exp-item">
                  <span className="exp-role">Backend Engineer</span>
                  <span className="exp-company">CloudScale Inc</span>
                  <span className="exp-date">2015 &rarr; 2018</span>
                </div>
                <div className="exp-item">
                  <span className="exp-role">Software Developer</span>
                  <span className="exp-company">InnovateTech</span>
                  <span className="exp-date">2014 &rarr; 2015</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers Section */}
        <div className="outcomes-section-wrapper">
          <section id="highlights" className="outcomes-section fade-in-section">
            <div className="outcomes-header">
              <span className="section-subtitle">/ Impact</span>
            </div>
            <h2 className="outcomes-title">Delivering Impact.</h2>

            <div className="outcomes-grid">
              {/* Row 1: Large Cards (span 2) */}
              <div className="outcome-card-large">
                <h3 className="outcome-value">35%</h3>
                <p className="outcome-text">latency reduction in AI pipelines via architectural optimizations</p>
                <span className="outcome-company">@ PREDICTHQ</span>
              </div>
              <div className="outcome-card-large">
                <h3 className="outcome-value">10M+</h3>
                <p className="outcome-text">global events processed daily by highly scalable data streams</p>
                <span className="outcome-company">@ PREDICTHQ</span>
              </div>
              <div className="outcome-card-large">
                <h3 className="outcome-value">28%</h3>
                <p className="outcome-text">increase in forecasting accuracy for demand prediction models</p>
                <span className="outcome-company">@ PREZI</span>
              </div>

              {/* Row 2: Small Cards (span 1) */}
              <div className="outcome-card-small">
                <h4 className="outcome-small-value">50%</h4>
                <span className="outcome-small-text">FASTER DEPLOYMENTS</span>
              </div>
              <div className="outcome-card-small">
                <h4 className="outcome-small-value">40%</h4>
                <span className="outcome-small-text">DRIFT REDUCTION</span>
              </div>
              
              <div className="outcome-card-small">
                <h4 className="outcome-small-value">99.9%</h4>
                <span className="outcome-small-text">SYSTEM UPTIME</span>
              </div>
              <div className="outcome-card-small">
                <h4 className="outcome-small-value">100k+</h4>
                <span className="outcome-small-text">REQ/DAY @ PREDICTHQ</span>
              </div>

              <div className="outcome-card-small">
                <h4 className="outcome-small-value">10+</h4>
                <span className="outcome-small-text">YEARS EXPERIENCE</span>
              </div>
              <div className="outcome-card-small">
                <h4 className="outcome-small-value">5</h4>
                <span className="outcome-small-text">ENGINEERS MENTORED</span>
              </div>
            </div>
          </section>
        </div>


        <section id="expertise" className="toolbox-section fade-in-section">
          <div className="section-header">
            <span className="section-subtitle">/ Stack</span>
            <h2 className="section-title">The toolbox.</h2>
          </div>
          
          <div className="toolbox-grid">
            <div className="dash-card toolbox-card">
              <div className="card-header-flex">
                <h3 className="card-title">AI Engineering</h3>
                <span className="toolbox-number">01</span>
              </div>
              <div className="toolbox-tags">
                <span className="tb-tag">LLMs</span>
                <span className="tb-tag">RAG</span>
                <span className="tb-tag">PYTORCH</span>
                <span className="tb-tag">TENSORFLOW</span>
                <span className="tb-tag">NLP</span>
                <span className="tb-tag">DEEP LEARNING</span>
              </div>
            </div>
            
            <div className="dash-card toolbox-card">
              <div className="card-header-flex">
                <h3 className="card-title">Data Engineering</h3>
                <span className="toolbox-number">02</span>
              </div>
              <div className="toolbox-tags">
                <span className="tb-tag">APACHE KAFKA</span>
                <span className="tb-tag">APACHE SPARK</span>
                <span className="tb-tag">AIRFLOW</span>
                <span className="tb-tag">REDIS</span>
                <span className="tb-tag">ELASTICSEARCH</span>
              </div>
            </div>

            <div className="dash-card toolbox-card">
              <div className="card-header-flex">
                <h3 className="card-title">Backend</h3>
                <span className="toolbox-number">03</span>
              </div>
              <div className="toolbox-tags">
                <span className="tb-tag">PYTHON</span>
                <span className="tb-tag">GO</span>
                <span className="tb-tag">NODE.JS</span>
                <span className="tb-tag">JAVA</span>
                <span className="tb-tag">REST APIS</span>
              </div>
            </div>

            <div className="dash-card toolbox-card">
              <div className="card-header-flex">
                <h3 className="card-title">Cloud Infrastructure</h3>
                <span className="toolbox-number">04</span>
              </div>
              <div className="toolbox-tags">
                <span className="tb-tag">AWS</span>
                <span className="tb-tag">DOCKER</span>
                <span className="tb-tag">KUBERNETES</span>
                <span className="tb-tag">TERRAFORM</span>
              </div>
            </div>

            <div className="dash-card toolbox-card">
              <div className="card-header-flex">
                <h3 className="card-title">DevOps & Observability</h3>
                <span className="toolbox-number">05</span>
              </div>
              <div className="toolbox-tags">
                <span className="tb-tag">CI/CD PIPELINES</span>
                <span className="tb-tag">GITHUB ACTIONS</span>
                <span className="tb-tag">PROMETHEUS</span>
                <span className="tb-tag">GRAFANA</span>
              </div>
            </div>

            <div className="dash-card toolbox-card">
              <div className="card-header-flex">
                <h3 className="card-title">Databases</h3>
                <span className="toolbox-number">06</span>
              </div>
              <div className="toolbox-tags">
                <span className="tb-tag">POSTGRESQL</span>
                <span className="tb-tag">MONGODB</span>
                <span className="tb-tag">VECTOR DATABASES</span>
              </div>
            </div>
          </div>
        </section>


        {/* Experience Timeline Section */}
        <section id="experience" className="timeline-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Career Sequence</span>
            <h2 className="section-title">Professional Experience</h2>
          </div>
          
          <div className="timeline-container">
            {/* Roku */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Roku</h3>
                  <span className="tl-date">09/2023 - Present</span>
                </div>
                <span className="tl-role">Senior AI Engineer</span>
                <p className="tl-desc">Elevated Roku's machine learning capabilities in recommendation systems, enhancing user engagement and ad revenue significantly.</p>
              </div>
            </div>

            {/* Mycroft AI Inc */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Mycroft AI Inc</h3>
                  <span className="tl-date">05/2019 - 02/2023</span>
                </div>
                <span className="tl-role">Senior Data Engineer</span>
                <p className="tl-desc">Led the development of a robust data infrastructure supporting AI advancements in voice recognition technologies.</p>
              </div>
            </div>

            {/* Enova International */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Enova International</h3>
                  <span className="tl-date">08/2016 - 04/2019</span>
                </div>
                <span className="tl-role">Software Engineer</span>
                <p className="tl-desc">Enhanced system efficiency and integrated ML models to improve financial decision-making processes.</p>
              </div>
            </div>

            {/* Civis Analytics */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Civis Analytics</h3>
                  <span className="tl-date">06/2014 - 08/2016</span>
                </div>
                <span className="tl-role">Data Science Researcher</span>
                <p className="tl-desc">Provided advanced predictive analytics to enhance audience targeting and engagement strategies.</p>
              </div>
            </div>
            
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="contact-section fade-in-section">
          <div className="contact-container">
            <h2 className="contact-title">Let's Build Intelligent Systems Together</h2>
            <p className="contact-desc">
              Whether you're scaling AI infrastructure, deploying production ML, or building LLM-powered products, I'd love to connect.
            </p>
            <div className="contact-actions">
              <a href="#" className="contact-btn primary">Email Me</a>
              <a href="#" className="contact-btn secondary">LinkedIn</a>
              <a href="#" className="contact-btn secondary">Phone</a>
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <strong>David Clark</strong>
            <span>Principal AI Platform Engineer</span>
          </div>
          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
          <div className="footer-right">
            &copy; 2026
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default App;
