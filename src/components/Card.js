function Card({card, onCardClick}) {
    
  const handleCardClick = () => {
    onCardClick(card);
  }

  return (
    <article className="element">
        <button
          className="element__delete-button"
          type="button">
        </button>
        <img
          className="element__image"
          src={card.link}
          alt={card.name} 
          onClick={handleCardClick}
        />
        <div className="element__conteiner">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-conteiner">
            <button
              className="element__like-button"
              type="button">
            </button>
            <p className="element__like-count">{card.likes.length}</p>
          </div>
        </div>
      </article>
    );
  }

  export default Card;
  
