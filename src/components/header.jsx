import { CtaBtn } from './atoms';

export function Header({ data }) {
  const { logo, links, linkActions } = data;
  return (
    <header>
      <img className="logo" src={logo.link} alt={logo.text} />
      <nav>
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
