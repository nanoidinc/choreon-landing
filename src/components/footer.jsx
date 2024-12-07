import { useContext } from 'react';
import { NavLink } from 'react-router';
import { DataContext } from './context/data';

export function Footer() {
  const data = useContext(DataContext);
  const { logo, primaryLinks, socialSites, copyrightText, otherLinks } = data.footer;
  return (
    <footer>
      <div className="social-links">
        <NavLink to="/">
          <img className="choreon-logo" src={logo.link} alt={logo.text} />
        </NavLink>
        <ul className="primary-links">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul>
          {socialSites.map((link) => (
            <li>
              <a className="link" href={link.href}>
                <img src={link.icon} alt={link.text} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="tos">
        <ul className="copyright-and-links">
          <li>{copyrightText}</li>
          {otherLinks.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
