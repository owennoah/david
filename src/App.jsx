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
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="/#projects" onClick={() => setMenuOpen(false)}>Work</a></li>
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

        {/* Engineering Showcases / Projects Section */}
        <section id="projects" className="projects-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Applied Intelligence</span>
            <h2 className="section-title">Engineering Showcases</h2>
          </div>

          <div className="projects-filter">
            <button className="filter-btn">All</button>
            <button className="filter-btn">ML/DL</button>
            <button className="filter-btn">Data Eng</button>
            <button className="filter-btn active">Software</button>
          </div>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-showcase-card">
              <div className="project-graphic">
                <div className="pg-bg-glow"></div>
                <div className="pg-content">
                  <div className="pg-node pg-source">
                    <span className="pg-title">Event Streams</span>
                    <span className="pg-sub">10M+ events</span>
                  </div>
                  <div className="pg-line">
                    <div className="pg-pulse-dot"></div>
                  </div>
                  <div className="pg-node pg-target">
                    <span className="pg-title">Forecast Model</span>
                    <span className="pg-sub">+28% Acc</span>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <span className="project-category">AI Platform // Data Pipeline</span>
                  <h3 className="project-title-hover">PredictHQ AI Platform</h3>
                </div>
                <p className="project-desc">
                  Built AI-driven event intelligence pipelines processing 10M+ global events, boosting forecasting accuracy by 28%. Trimmed infrastructure costs by 20% while maintaining performance.
                </p>
                
                <div className="project-tech-tags">
                  <span>XGBoost</span>
                  <span>PyTorch</span>
                  <span>Kafka</span>
                  <span>AWS</span>
                  <span className="tech-more">NLP</span>
                </div>

                <div className="project-footer">
                  <div className="project-metric">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#9FD458" stroke="#9FD458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>99.9% Uptime Sustained</span>
                  </div>
                  <button className="project-link">
                    Diagnostics
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-showcase-card">
              <div className="project-graphic">
                <div className="pg-bg-glow"></div>
                <div className="pg-content">
                  <div className="pg-node pg-source">
                    <span className="pg-title">Slide Content</span>
                    <span className="pg-sub">Analysis</span>
                  </div>
                  <div className="pg-line">
                    <div className="pg-pulse-dot"></div>
                  </div>
                  <div className="pg-node pg-target">
                    <span className="pg-title">Rec. Engine</span>
                    <span className="pg-sub">+20% Eng</span>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <span className="project-category">Machine Learning // NLP</span>
                  <h3 className="project-title-hover">Prezi AI Platform</h3>
                </div>
                <p className="project-desc">
                  Boosted user engagement by 20% by creating recommendation models for personalized content. Built NLP pipelines for slide analysis, increasing relevance scoring accuracy by 25%.
                </p>
                
                <div className="project-tech-tags">
                  <span>React</span>
                  <span>Flask</span>
                  <span>Spark</span>
                  <span>Python</span>
                  <span className="tech-more">NLP</span>
                </div>

                <div className="project-footer">
                  <div className="project-metric">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#9FD458" stroke="#9FD458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>+20% User Engagement</span>
                  </div>
                  <button className="project-link">
                    Diagnostics
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-showcase-card">
              <div className="project-graphic">
                <div className="pg-bg-glow"></div>
                <div className="pg-content">
                  <div className="pg-node pg-source">
                    <span className="pg-title">Frontend Apps</span>
                    <span className="pg-sub">React/Redux</span>
                  </div>
                  <div className="pg-line">
                    <div className="pg-pulse-dot"></div>
                  </div>
                  <div className="pg-node pg-target">
                    <span className="pg-title">Backend APIs</span>
                    <span className="pg-sub">Microservices</span>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <span className="project-category">Full Stack // Infrastructure</span>
                  <h3 className="project-title-hover">Prezi Scalable Backend</h3>
                </div>
                <p className="project-desc">
                  Developed backend services supporting 50K+ daily active users using Node.js and Python. Strengthened system reliability by transitioning from monolithic to microservices architecture.
                </p>
                
                <div className="project-tech-tags">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>Redux</span>
                  <span className="tech-more">PostgreSQL</span>
                </div>

                <div className="project-footer">
                  <div className="project-metric">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#9FD458" stroke="#9FD458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>50K+ Daily Active Users</span>
                  </div>
                  <button className="project-link">
                    Diagnostics
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-showcase-card">
              <div className="project-graphic">
                <div className="pg-bg-glow"></div>
                <div className="pg-content">
                  <div className="pg-node pg-source">
                    <span className="pg-title">Legacy Data</span>
                    <span className="pg-sub">Migration</span>
                  </div>
                  <div className="pg-line">
                    <div className="pg-pulse-dot"></div>
                  </div>
                  <div className="pg-node pg-target">
                    <span className="pg-title">MongoDB</span>
                    <span className="pg-sub">Scalability</span>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <span className="project-category">Full Stack // Database</span>
                  <h3 className="project-title-hover">Trbhi Web Applications</h3>
                </div>
                <p className="project-desc">
                  Built 5+ scalable web applications and re-architected database systems, migrating legacy infrastructure to MongoDB for improved scalability. Integrated third-party services.
                </p>
                
                <div className="project-tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Jenkins</span>
                  <span className="tech-more">CI/CD</span>
                </div>

                <div className="project-footer">
                  <div className="project-metric">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#9FD458" stroke="#9FD458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>99.9% Availability</span>
                  </div>
                  <button className="project-link">
                    Diagnostics
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="premium-contact-wrapper fade-in-section" id="contact">
          <div className="premium-contact-container">
            
            <div className="pro-contact-grid">
              
              <div className="pro-contact-info">
                <div className="pro-info-header">
                  <div className="glowing-badge">
                    <span className="pulse-dot"></span>
                    <span className="badge-text">SECURE COMMUNICATION LINK</span>
                  </div>
                  <h2 className="premium-title">Transmit Telemetry Signal</h2>
                  <p className="premium-subtitle">
                    Connect with David Clark for large-scale Deep Learning architecture, MLOps orchestration, high-throughput backend consulting, or leadership opportunities.
                  </p>
                </div>

                <div className="pro-details-list">
                  <div className="pro-detail-item">
                    <div className="pro-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className="pro-text">
                      <span className="pro-label">PRIMARY EMAIL</span>
                      <a href="mailto:david@example.com" className="pro-value">david@example.com</a>
                    </div>
                  </div>

                  <div className="pro-detail-item">
                    <div className="pro-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="pro-text">
                      <span className="pro-label">DIRECT TELEPHONY</span>
                      <span className="pro-value">(646) 478-1356</span>
                    </div>
                  </div>

                  <div className="pro-detail-item">
                    <div className="pro-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div className="pro-text">
                      <span className="pro-label">OPERATING BASE</span>
                      <span className="pro-value">Kansas City, MO</span>
                    </div>
                  </div>

                  <div className="pro-detail-item">
                    <div className="pro-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <div className="pro-text">
                      <span className="pro-label">PROFESSIONAL LINK</span>
                      <a href="#" className="pro-value">linkedin.com/in/david</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pro-contact-form">
                <form className="pro-form-inner" onSubmit={(e) => e.preventDefault()}>
                  <div className="pro-input-row">
                    <div className="pro-input-group">
                      <label>ENTITY NAME</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="pro-input-group">
                      <label>RETURN ADDRESS</label>
                      <input type="email" placeholder="john@domain.com" required />
                    </div>
                  </div>
                  <div className="pro-input-group">
                    <label>TRANSMISSION KEY</label>
                    <input type="text" placeholder="Project Inquiry" required />
                  </div>
                  <div className="pro-input-group">
                    <label>PAYLOAD BODY</label>
                    <textarea placeholder="Describe your telemetry requirements..." rows="5" required></textarea>
                  </div>
                  <button type="submit" className="pro-submit">
                    <span>TRANSMIT STREAM</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

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
