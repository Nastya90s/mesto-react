import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
 

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

  return (
    <div className="App">
      <div className="page"> 
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
        <Footer />
    
        <PopupWithForm
          noValidate=""
          name="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_name"
            type="text"
            id="input-name" 
            name="title"
            placeholder="Введите имя"
            required=""
            minLength={2}
            maxLength={40}
          />
          <span 
            id="input-name-error" 
            className="popup__error" 
          />
          <input
            className="popup__input popup__input_type_job"
            type="text"
            name="subtitle"
            id="input-job"
            placeholder="Введите профессию"
            required=""
            minLength={2}
            maxLength={200}
          />
          <span 
            id="input-job-error" 
            className="popup__error" 
          />
        </PopupWithForm>

        <PopupWithForm
          className="popup__form popup__form_type_add" 
          noValidate=""
          name="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          >
            <input
              className="popup__input popup__input_type_place"
              type="text"
              id="element-place"
              name="place"
              placeholder="Название"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span 
              id="element-place-error"
              className="popup__error" 
            />
            <input
              className="popup__input popup__input_type_src"
              required=""
              type="url"
              id="element-src"
              name="src"
              placeholder="Ссылка на картинку"
            />
            <span id="element-src-error"
              className="popup__error" 
            />
        </PopupWithForm>

        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

        <PopupWithForm
          className="popup__form popup__form_type_avatar"
          name="Обновить аватар"
          noValidate=""
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_avatar"
            required=""
            type="url"
            id="element-avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
          />
          <span 
            id="element-avatar-error"
            className="popup__error"
          />
        </PopupWithForm>
      </div> 
    </div>
  );
}

export default App;



