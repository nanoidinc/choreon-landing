import { useContext, useEffect, useState } from 'react';
import '../../styles/docs.css';
import { DataContext } from '../context/data';

export const Docs = () => {
  const data = useContext(DataContext);
  const { topics } = data.docs;
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = topics.map((topic) => ({
        id: topic.title.toLowerCase().replace(/\s+/g, '-'),
        offset:
          document.getElementById(
            topic.title.toLowerCase().replace(/\s+/g, '-')
          )?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + 100;
      const current = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        return (
          scrollPosition >= section.offset &&
          (!nextSection || scrollPosition < nextSection.offset)
        );
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [topics]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="docs-container">
      <div className="docs-wrapper">
        <main className="docs-content">
          {topics.map((topic) => {
            const sectionId = topic.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <section
                key={topic.title}
                id={sectionId}
                className="docs-section"
              >
                <h2 className="section-title">{topic.title}</h2>
                <div className="section-description">{topic.description}</div>
              </section>
            );
          })}
        </main>

        <aside className="docs-sidebar">
          <div className="sidebar-sticky">
            <h6 className="sidebar-heading">On This Page</h6>
            <nav className="sidebar-nav">
              {topics.map((topic) => {
                const sectionId = topic.title
                  .toLowerCase()
                  .replace(/\s+/g, '-');
                return (
                  <button
                    key={topic.title}
                    onClick={() => scrollToSection(sectionId)}
                    className={`nav-link ${
                      activeSection === sectionId ? 'active' : ''
                    }`}
                  >
                    {topic.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};
