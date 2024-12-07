export function Footer({ data }) {
  const { logo, primaryLinks, socialSites, copyrightText, otherLinks } = data;
  return (
    <footer>
      <div className="social-links">
        <img className="choreon-logo" src={logo.link} alt={logo.text} />
        <ul className="primary-links">
          {primaryLinks.map((link) => (
            <li>
              <a className="link" href={link.href}>{link.text}</a>
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
            <li>
              <a className="link" href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
