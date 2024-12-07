import { useContext, useState } from 'react';
import { DataContext } from './context/data';
import { NavLink } from 'react-router';
import { CtaBtn } from './atoms';

export function Header() {
  const data = useContext(DataContext);
  const { logo, links, linkActions } = data.header;
  const { otherImages } = data;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hamburgerIcon = isMenuOpen ? otherImages.closeIcon : otherImages.menuIcon;
  const hamburgerMenuClass = isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu';
  return (
    <header>
      <img
        onClick={() => setMenuOpen(!isMenuOpen)}
        src={hamburgerIcon}
        alt=""
        className="hamburger-menu-icon"
      />
      <NavLink to="/">
        <img className="logo" src={logo.link} alt={logo.text} />
      </NavLink>
      
      <nav className={hamburgerMenuClass}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} className="link">{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="actions">
        {linkActions.map((action) => (
          <CtaBtn key={action} action={action} />
        ))}
      </div>
    </header>
  );
}
