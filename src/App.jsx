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

        <section id="highlights" className="highlights-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Career Highlights</span>
            <h2 className="section-title">Delivering Impact</h2>
          </div>
          
          <div className="highlights-grid">
            <div className="stat-box dark-box highlight-card">
              <span className="stat-box-number white-text">10+</span>
              <span className="stat-box-desc">Years<br/>Experience</span>
            </div>
            <div className="stat-box light-box highlight-card">
              <span className="stat-box-number black-text">100K+</span>
              <span className="stat-box-desc" style={{color: '#666'}}>Daily Users<br/>Served</span>
            </div>
            <div className="stat-box dark-box highlight-card">
              <span className="stat-box-number white-text">10M+</span>
              <span className="stat-box-desc">Global Events<br/>Processed</span>
            </div>
            <div className="stat-box light-box highlight-card">
              <span className="stat-box-number black-text">99.9%</span>
              <span className="stat-box-desc" style={{color: '#666'}}>System<br/>Uptime</span>
            </div>
          </div>
        </section>

        <section id="expertise" className="dashboard-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Technical Expertise</span>
            <h2 className="section-title">Core Competencies</h2>
          </div>
          
          <div className="dashboard-grid">
            <div className="dash-col-left">
              {/* Top Left: AI & Data */}
              <div className="dash-card tall-card">
                 <div className="card-tabs">
                   <span className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</span>
                   <span className={`tab ${activeTab === 'ai' ? 'active' : ''}`} onClick={() => setActiveTab('ai')}>AI Engineering</span>
                   <span className={`tab ${activeTab === 'data' ? 'active' : ''}`} onClick={() => setActiveTab('data')}>Data Engineering</span>
                 </div>
                 
                 {activeTab === 'overview' && (
                   <>
                     <div className="chart-container">
                        <div className="pie-chart"></div>
                        <span className="chart-label pos-1">LLMs & RAG</span>
                        <span className="chart-label pos-2">PyTorch & TF</span>
                        <span className="chart-label pos-3">Deep Learning</span>
                        <span className="chart-label pos-4">Kafka & Spark</span>
                        <span className="chart-label pos-5">Airflow</span>
                        <span className="chart-label pos-6">PostgreSQL & Mongo</span>
                        <span className="chart-label pos-7">Redis & Elastic</span>
                        <span className="chart-label pos-8">NLP</span>
                     </div>
                     
                     <div className="insight-box">
                        <svg className="lightning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        <p>Your <strong>AI Engineering</strong> and <strong>Data</strong> pipelines form the core of your expertise. Building scalable LLMs and managing real-time streams with Kafka shows a highly adaptable technical foundation.</p>
                     </div>
                   </>
                 )}
                 
                 {activeTab === 'ai' && (
                   <>
                     <div className="chart-container" style={{ alignContent: 'center', height: '400px' }}>
                        <div className="skill-tags">
                          <span className="skill-tag">Large Language Models (LLMs)</span>
                          <span className="skill-tag">Retrieval-Augmented Gen (RAG)</span>
                          <span className="skill-tag">Natural Language Processing</span>
                          <span className="skill-tag">PyTorch</span>
                          <span className="skill-tag">TensorFlow</span>
                          <span className="skill-tag">Deep Learning Architectures</span>
                        </div>
                     </div>
                     <div className="insight-box">
                        <svg className="lightning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        <p>Specialized in designing and fine-tuning <strong>Large Language Models</strong> and building highly accurate <strong>RAG</strong> systems for enterprise AI solutions.</p>
                     </div>
                   </>
                 )}
                 
                 {activeTab === 'data' && (
                   <>
                     <div className="chart-container" style={{ alignContent: 'center', height: '400px' }}>
                        <div className="skill-tags">
                          <span className="skill-tag">Apache Kafka</span>
                          <span className="skill-tag">Apache Spark</span>
                          <span className="skill-tag">Airflow</span>
                          <span className="skill-tag">PostgreSQL</span>
                          <span className="skill-tag">MongoDB</span>
                          <span className="skill-tag">Redis</span>
                          <span className="skill-tag">Elasticsearch</span>
                        </div>
                     </div>
                     <div className="insight-box">
                        <svg className="lightning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        <p>Extensive experience in designing scalable event-driven architectures with <strong>Kafka</strong> and <strong>Spark</strong>, backed by robust SQL and NoSQL data stores.</p>
                     </div>
                   </>
                 )}
              </div>
              
              {/* Bottom Left: Cloud */}
              <div className="dash-card">
                <div className="card-header-flex">
                  <h3 className="card-title">Cloud Infrastructure</h3>
                  <span className="info-icon">!</span>
                </div>
                <div className="gauge-wrapper">
                  <div className="gauge-chart">
                    <svg viewBox="0 0 100 55" className="gauge-svg">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f0f0f0" strokeWidth="12" strokeLinecap="round" />
                      <path d="M 10 50 A 40 40 0 0 1 45 12" fill="none" stroke="#9b8af4" strokeWidth="12" strokeLinecap="round" />
                      <path d="M 45 12 A 40 40 0 0 1 75 22" fill="none" stroke="#ffaf7a" strokeWidth="12" strokeLinecap="round" />
                      <path d="M 75 22 A 40 40 0 0 1 85 40" fill="none" stroke="#3dd3e6" strokeWidth="12" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="gauge-legend">
                    <div className="legend-item"><span className="dot purple"></span> AWS (46%)</div>
                    <div className="legend-item"><span className="dot orange"></span> Docker/K8s (24%)</div>
                    <div className="legend-item"><span className="dot cyan"></span> Terraform (15%)</div>
                  </div>
                </div>
                <div className="insight-box">
                    <svg className="lightning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    <p>Infrastructure as code and containerization drive your deployments. Your focus on <strong>Kubernetes</strong> and <strong>AWS</strong> ensures robust, high-availability ML platforms.</p>
                 </div>
              </div>
            </div>
            
            <div className="dash-col-right">
              {/* Top Right: DevOps */}
              <div className="dash-card">
                <div className="card-header-flex">
                  <h3 className="card-title">DevOps Workflows</h3>
                  <span className="info-icon">!</span>
                </div>
                <div className="checklist">
                  <div className="check-item">
                    <div className="checkbox checked"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className="check-text">
                      <strong>CI/CD Pipelines</strong>
                      <span>Automated testing & deployments</span>
                    </div>
                  </div>
                  <div className="check-item">
                    <div className="checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className="check-text">
                      <strong>GitHub & GitLab</strong>
                      <span>Version control & Actions</span>
                    </div>
                  </div>
                  <div className="check-item">
                    <div className="checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className="check-text">
                      <strong>Prometheus</strong>
                      <span>Metrics and alerting setup</span>
                    </div>
                  </div>
                  <div className="check-item">
                    <div className="checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className="check-text">
                      <strong>Grafana</strong>
                      <span>System observability dashboards</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Right: Backend */}
              <div className="dash-card">
                <div className="card-header-flex">
                  <h3 className="card-title">Backend Skills</h3>
                  <span className="info-icon">!</span>
                </div>
                <div className="progress-list">
                  <span className="progress-group-title">Core languages & APIs:</span>
                  
                  <div className="progress-item">
                    <div className="progress-info"><span>Python</span><span>95%</span></div>
                    <div className="progress-bar"><div className="progress-fill purple-fill" style={{width: '95%'}}></div></div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-info"><span>Go</span><span>85%</span></div>
                    <div className="progress-bar"><div className="progress-fill purple-fill" style={{width: '85%'}}></div></div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-info"><span>Node.js</span><span>75%</span></div>
                    <div className="progress-bar"><div className="progress-fill purple-fill" style={{width: '75%'}}></div></div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-info"><span>Java</span><span>70%</span></div>
                    <div className="progress-bar"><div className="progress-fill purple-fill" style={{width: '70%'}}></div></div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-info"><span>REST APIs</span><span>92%</span></div>
                    <div className="progress-bar"><div className="progress-fill purple-fill" style={{width: '92%'}}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="timeline-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Experience</span>
            <h2 className="section-title">Career Timeline</h2>
          </div>
          
          <div className="timeline-container">
            {/* PredictHQ */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>PredictHQ</h3>
                  <span className="tl-date">2022 – Present</span>
                </div>
                <span className="tl-role">Principal AI Platform Engineer</span>
                
                <div className="tl-cards-grid check-cards">
                  <div className="tl-card">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Built AI event intelligence pipeline
                  </div>
                  <div className="tl-card">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Processed 10M+ global events
                  </div>
                  <div className="tl-card">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Increased forecasting accuracy by 28%
                  </div>
                  <div className="tl-card">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Reduced latency by 35%
                  </div>
                  <div className="tl-card">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Supported 100K+ daily API requests
                  </div>
                  <div className="tl-card">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Achieved 99.9% uptime
                  </div>
                </div>
              </div>
            </div>

            {/* Prezi */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Prezi</h3>
                  <span className="tl-date">2020 – 2022</span>
                </div>
                <span className="tl-role">AI Platform Engineer</span>
                
                <div className="tl-cards-grid stat-cards">
                  <div className="tl-stat-card">
                    <span className="stat-num">20%</span>
                    <span className="stat-desc">User Engagement<br/>Increase</span>
                  </div>
                  <div className="tl-stat-card">
                    <span className="stat-num">25%</span>
                    <span className="stat-desc">NLP<br/>Accuracy</span>
                  </div>
                  <div className="tl-stat-card">
                    <span className="stat-num">35%</span>
                    <span className="stat-desc">Pipeline Speed<br/>Improvement</span>
                  </div>
                  <div className="tl-stat-card">
                    <span className="stat-num">15%</span>
                    <span className="stat-desc">Retention<br/>Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Full Stack Engineer */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Senior Full Stack Engineer</h3>
                  <span className="tl-date">2017 – 2020</span>
                </div>
                <div className="tl-tags" style={{marginTop: '1rem'}}>
                  <span className="tl-tag">React</span>
                  <span className="tl-tag">Node</span>
                  <span className="tl-tag">Python</span>
                  <span className="tl-tag">Microservices</span>
                  <span className="tl-tag">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Full Stack Engineer */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Full Stack Engineer</h3>
                  <span className="tl-date">2014 – 2017</span>
                </div>
                <div className="tl-tags" style={{marginTop: '1rem'}}>
                  <span className="tl-tag">React</span>
                  <span className="tl-tag">MongoDB</span>
                  <span className="tl-tag">Jenkins</span>
                  <span className="tl-tag">CI/CD</span>
                  <span className="tl-tag">Testing</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Featured Projects</span>
            <h2 className="section-title">Case Studies</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <h3>AI Event Intelligence Platform</h3>
              <div className="project-tags">
                <span className="p-tag">10M+ events processed</span>
                <span className="p-tag">ML forecasting</span>
                <span className="p-tag">Kafka streaming</span>
                <span className="p-tag">AWS deployment</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Recommendation Engine</h3>
              <div className="project-tags">
                <span className="p-tag">Personalized content</span>
                <span className="p-tag">NLP</span>
                <span className="p-tag">User behavior prediction</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Real-Time AI APIs</h3>
              <div className="project-tags">
                <span className="p-tag">100K+ requests/day</span>
                <span className="p-tag">Low latency</span>
                <span className="p-tag">High availability</span>
              </div>
            </div>
            <div className="project-card">
              <h3>ML Deployment Platform</h3>
              <div className="project-tags">
                <span className="p-tag">CI/CD</span>
                <span className="p-tag">Monitoring</span>
                <span className="p-tag">Automated retraining</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers Section */}
        <section id="achievements" className="achievements-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Impact</span>
            <h2 className="section-title">By The Numbers</h2>
          </div>
          <div className="editorial-stats">
            <div className="stat-item">
              <span className="stat-value">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100K+</span>
              <span className="stat-label">Daily Requests</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">10M+</span>
              <span className="stat-label">Events Processed</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">35%</span>
              <span className="stat-label">Latency Reduction</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">28%</span>
              <span className="stat-label">Accuracy Increase</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50%</span>
              <span className="stat-label">Deployment Speed</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">40%</span>
              <span className="stat-label">Drift Reduction</span>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="timeline-section fade-in-section">
          <div className="section-header center-align">
            <span className="section-subtitle">/ Education</span>
            <h2 className="section-title">Academic Background</h2>
          </div>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>M.S. Computer Science</h3>
                  <span className="tl-date">2014 – 2016</span>
                </div>
                <span className="tl-role">Stratford University</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="tl-header">
                  <h3>Bachelor of Science</h3>
                  <span className="tl-date">2011 – 2014</span>
                </div>
                <span className="tl-role">Computer Science</span>
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
