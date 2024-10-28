import { CtaBtn } from './atoms';

export function Spotlight({ size = 'full', img = null, content = null }) {
  const shouldRenderContent = Boolean(content);
  const shouldRenderImg = !shouldRenderContent && img;
  return (
    <div className={`spotlight ${size}`}>
      <div className="glowing-ellipse-top"></div>
      <div className="glowing-ellipse-bottom"></div>
      {shouldRenderImg && (
        <div className="img-wrapper">
          <img src={img.src} alt={img.alt} className="spotlight-img" />
        </div>
      )}

      {shouldRenderContent && (
        <div className="content">
          <h1 className="section-title">{content.title}</h1>
          {content.subtitle && <h5 className="section-subtitle">{content.subtitle}</h5>}
          {content.action && <CtaBtn action={content.action} />}
        </div>
      )}
    </div>
  );
}
