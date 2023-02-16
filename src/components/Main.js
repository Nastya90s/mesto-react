import React, { useContext } from "react";
import Card from "./Card";
import avatarButton from "../utils/variables";
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main({ 
  cards, 
  onEditAvatar, 
  onEditProfile, 
  onAddPlace, 
  onCardClick, 
  onCardLike, 
  onCardDelete, 
}) {


  const currentUser = useContext(CurrentUserContext);
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={onEditAvatar} >
                    <img className="profile__avatar" src={currentUser.avatar} alt={avatarButton} />
                    <div className="profile__avatar-overlay"></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button 
                        className="profile__edit-button"
                        onClick={onEditProfile}
                        type="button">
                    </button>
                     <p className="profile__subtitle">{currentUser.about}</p>  
                </div>
                <button 
                    className="profile__add-button"
                    onClick={onAddPlace}
                    type="button">
                </button>           
            </section>
            <section className="elements">
              { 
                cards.map((card) => {
               return <Card 
                  key={card._id} 
                  card={card}
                  onCardClick={onCardClick} 
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
                })
              }
            </section>
        </main>
    )
}
export default Main;