import { useContext } from 'react';
import { Cards, Hero, DetailWithImg, Spotlight } from '../index';
import { Spacer, ImgWrapper } from '../atoms';
import { DataContext } from '../context/data';

export const Home = () => {
  const data = useContext(DataContext);
  return (
    <div className="content">
      <Hero data={data.hero} />
      <Spacer type="section" />
      <section className="section">
        <h3 className="section-title">{data.servicesOverview.title}</h3>
        <Spacer amount={28} />
        <h4 className="section-subtitle txt-center">
          {data.servicesOverview.subtitle}
        </h4>
        <Spacer type="subsection" />
        <ImgWrapper
          className="img"
          useBackgroundGlow="true"
          src={data.servicesOverview.img.src}
          alt={data.servicesOverview.img.alt}
        />
      </section>
      <Spacer type="section" />
      <section className="section">
        <h3 className="section-title">{data.getStartedSteps.title}</h3>
        <Spacer type="subsection" />
        <Cards cards={data.getStartedSteps.cards} />
      </section>
      <Spacer type="section" />
      <section className="section">
        <h3 className="section-title txt-center">{data.keyHighlights.title}</h3>
        <Spacer amount={28} />
        <h4 className="section-subtitle txt-center">
          {data.keyHighlights.subtitle}
        </h4>
        <Spacer type="subsection" />
        <DetailWithImg
          title={data.powerfulCli.title}
          description={data.powerfulCli.subtitle}
          img={data.powerfulCli.img}
        />
        <Spacer type="subsection" />
        <Cards cards={data.keyHighlights.cards} />
        <Spacer type="subsection" />
        <DetailWithImg
          title={data.security.title}
          description={data.security.description}
          img={data.security.img}
          useBackgroundGlow={false}
        />
        <Spacer type="subsection" />
        <DetailWithImg
          title={data.pricing.cardPayDetail.title}
          description={data.pricing.cardPayDetail.description}
          img={data.pricing.cardPayDetail.img}
          useBackgroundGlow={false}
        />
        <Spacer type="subsection" />
        <Cards cards={data.pricing.flexCards} />
      </section>
      <Spacer type="section" />
      <section className="section">
        <h3 className="section-title txt-center">{data.nextIdea.title}</h3>
        <Spacer type="subsection" />
        <Cards cards={data.nextIdea.cards} />
      </section>
      <Spacer type="section" />
      <Spotlight size="half" content={data.bottomCtaSection} />
    </div>
  );
};
