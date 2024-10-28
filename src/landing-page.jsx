import React from 'react';
import textContent from './data.json';

// Header Component
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src="/images/choreon-logo.png" alt="Choreon Logo" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
      <button className="login-button">Get Started</button>
    </header>
  );
}

// Hero Component
function Hero({ content }) {
  return (
    <section className="hero">
      <div>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
        <button className="cta-button">{content.ctaText}</button>
      </div>
      <div>
        <img src={content.image} alt="Choreon Pulse Dashboard" />
      </div>
    </section>
  );
}

// Features Component
function Features({ content }) {
  return (
    <section className="features">
      <h2>{content.title}</h2>
      <div className="card-list">
        {content.items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// GetStarted Component
function GetStarted({ content }) {
  return (
    <section className="get-started">
      <div>
        <h2>{content.title}</h2>
        <div className="steps">
          {content.steps.map((step, index) => (
            <div key={index} className="step">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="cta-button">{content.ctaText}</button>
      </div>
    </section>
  );
}

// Footer Component
function Footer({ content }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        {content.links.map((link, index) => (
          <a key={index} href={link.url}>{link.text}</a>
        ))}
      </div>
      <p className="copyright">{content.copyright}</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero content={textContent.hero} />
        <Features content={textContent.features} />
        <GetStarted content={textContent.getStarted} />
      </main>
      <Footer content={textContent.footer} />
    </div>
  );
}

export default App;
