export function Cards({ cards, useBackground = true }) {
  const cardClsName = useBackground ? 'card with-bg' : 'card';
  return (
    <section className="card-list">
      {cards.map((card, idx) => (
        <div className={cardClsName}>
          <div className="masthead">
            {card.icon && <img className="icon" src={card.icon} alt="Card Icon" />}
            {!card.icon && <h4 className="index">{idx + 1}.</h4>}
          </div>
          <h5 className="title">{card.title}</h5>
          <p className="description">{card.description}</p>
        </div>
      ))}
    </section>
  );
}
