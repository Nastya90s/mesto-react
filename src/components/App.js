import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from './ImagePopup';
import api from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({}); 
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      }) 
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .then(closeAllPopups)
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    api.saveNewUserInfo(userData.name, userData.about)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleUpdateAvatar(userData) {
  api.saveNewUserAvatar(userData.avatar)
  .then((res) => {
    setCurrentUser(res);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleAddPlaceSubmit(inputValues) {
  api.sendNewCard(inputValues.name, inputValues.link)
  .then((newCard) => {
    setCards([newCard, ...cards]); 
    closeAllPopups();
  })
  .catch(err => {
    console.log(err);
  });
}

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  useEffect(() => {
    function handelEscape(e) {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }

    function handleEscClose(e) {
      if (
        e.target.classList.contains("popup_opened") ||
        e.target.classList.contains("popup__close-icon")
      ) {
        closeAllPopups();
      }
    }
    document.addEventListener("mousedown", handleEscClose);
    document.addEventListener("keydown", handelEscape);

    return () => {
      document.removeEventListener("keydown", handelEscape);
      document.removeEventListener("mousedown", handleEscClose);
    };
  }, []);

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <div className="page"> 
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
        /> 

        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        /> 

        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        /> 
      </div> 
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;



