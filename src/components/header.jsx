import { useState } from 'react';
import { CtaBtn } from './atoms';

export function Header({ data }) {
  const { logo, links, linkActions } = data;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hamburgerIcon = isMenuOpen
    ? '/images/icon-close.svg'
    : '/images/icon-menu.svg';
  const hamburgerMenuClass = isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu';
  return (
    <header>
      <img
        onClick={() => setMenuOpen(!isMenuOpen)}
        src={hamburgerIcon}
        alt=""
        className="hamburger-menu-icon"
      />
      <img className="logo" src={logo.link} alt={logo.text} />
      <nav className={hamburgerMenuClass}>
        <ul>
          {links.map((link) => (
            <li>
              <a className="link" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="actions">
        {linkActions.map((action) => (
          <CtaBtn action={action} />
        ))}
      </div>
    </header>
  );
}
