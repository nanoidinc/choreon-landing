import { CtaBtn } from './atoms';
import { Spotlight } from './spotlight';

export function Hero({ data }) {
  const { primaryHeading, primarySubHeading, action, spotlightImg } = data;
  return (
    <section className="hero">
      <div className="text-group">
        <h1 className="primary-heading">{primaryHeading}</h1>
        <h5 className="primary-subheading">{primarySubHeading}</h5>
      </div>
      <CtaBtn action={action} />
      <Spotlight img={spotlightImg} />
    </section>
  );
}
