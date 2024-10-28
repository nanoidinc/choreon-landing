import React from 'react';
import {
  Cards,
  Header,
  Hero,
  DetailWithImg,
  Spotlight,
  Footer,
} from './components';
import { Spacer } from './components/atoms';
import { data } from './data';
import './styles/header.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/detail-with-img.css';
import './styles/spotlight.css';
import './styles/footer.css';

export const Layout = () => {
  return (
    <>
      <Header data={data.header}></Header>
      <div className="content">
        <Hero
          data={data.hero}
        />
        <section className="section">
          <h3 className="section-title">{data.getStartedSteps.title}</h3>
          <Spacer amount={68} />
          <Cards cards={data.getStartedSteps.cards} />
        </section>
        <Spacer amount={120} />
        <section className="section">
          <h3 className="section-title txt-center">
            {data.keyHighlights.title}
          </h3>
          <Spacer amount={28} />
          <h4 className="section-subtitle txt-center">
            {data.keyHighlights.subtitle}
          </h4>
          <Spacer amount={80} />
          <DetailWithImg
            title={data.powerfulCli.title}
            description={data.powerfulCli.subtitle}
            img={data.powerfulCli.img}
          />
          <Spacer amount={80} />
          <Cards cards={data.keyHighlights.cards} />
          <Spacer amount={120} />
          <DetailWithImg
            title={data.security.title}
            description={data.security.description}
            img={data.security.img}
            useBackgroundGlow={false}
          />
          <Spacer amount={120} />
          <DetailWithImg
            title={data.pricing.cardPayDetail.title}
            description={data.pricing.cardPayDetail.description}
            img={data.pricing.cardPayDetail.img}
            useBackgroundGlow={false}
          />
          <Spacer amount={80} />
          <Cards cards={data.pricing.flexCards} />
        </section>
        <Spacer amount={120} />
        <section className="section">
          <h3 className="section-title txt-center">
            {data.nextIdea.title}
          </h3>
          <Spacer amount={64} />
          <Cards cards={data.nextIdea.cards} useBackground={false} />
        </section>
        <Spacer amount={120} />
        <section className="hero">
          <Spotlight size="half" content={data.bottomCtaSection} />
        </section>
      </div>
      <Footer data={data.footer} />
    </>
  );
};
