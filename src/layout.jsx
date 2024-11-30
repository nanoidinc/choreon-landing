import React from 'react';
import {
  Cards,
  Header,
  Hero,
  DetailWithImg,
  Spotlight,
  Footer,
} from './components';
import { Spacer, ImgWrapper } from './components/atoms';
import { data } from './data';
import './styles/header.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/detail-with-img.css';
import './styles/spotlight.css';
import './styles/footer.css';
import './styles/responsive.css';

export const Layout = () => {
  return (
    <>
      <Header data={data.header} otherImages={data.otherImages}></Header>
      <Spacer type="section" />
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
          <h3 className="section-title txt-center">
            {data.keyHighlights.title}
          </h3>
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
          <Cards cards={data.nextIdea.cards} useBackground={false} />
        </section>
        <Spacer type="section" />
        <Spotlight size="half" content={data.bottomCtaSection} />
      </div>
      <Footer data={data.footer} />
    </>
  );
};
