import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";
import avatarButton from "../utils/variables";



function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

   
    useEffect(() => {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([user, cards]) => {
          setUserName(user.name);
          setUserDescription(user.about)
          setUserAvatar(user.avatar);
          setCards(cards.map((card) => ({
            id: card._id,
            name: card.name,
            link: card.link,
            likes: card.likes
          })));
        })
        .catch((err) => { 
          console.log(err);
        })
    }, [])
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={onEditAvatar} >
                    <img className="profile__avatar" src={userAvatar} alt={avatarButton} />
                    <div className="profile__avatar-overlay"></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button 
                        className="profile__edit-button"
                        onClick={onEditProfile}
                        type="button">
                    </button>
                     <p className="profile__subtitle">{userDescription}</p>  
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
                  key={card.id} 
                  onCardClick={onCardClick} 
                  card={card} 
                />
                })
              }
            </section>
        </main>
    )
}
export default Main;