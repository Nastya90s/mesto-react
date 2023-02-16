import React, { useContext } from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Card({card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = useContext(CurrentUserContext);
  
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id; 

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменные, которые после зададим в `className` для кнопок
  const cardLikeButtonClassName = (`element__like-button ${isLiked ? "element__like-button_active " : ""}`);
  const cardDeleteButtonClassName = (`element__delete-button ${isOwn ? "" : "element__delete-button:hover"}`);
  

  const handleCardClick = () => {
    onCardClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card);
  }

  return (
    <article className="element">
      {isOwn && (
        <button
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
          type="button">
        </button>
      )}
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
              onClick={handleLikeClick}
              className={cardLikeButtonClassName}
              type="button">
            </button>
            <p className="element__like-count">{card.likes.length}</p>
          </div>
        </div>
      </article>
    );
  }

  export default Card;
  
