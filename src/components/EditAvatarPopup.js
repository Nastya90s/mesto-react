import {useEffect, useRef, useState} from "react";
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({isOpen, onUpdateAvatar, onClose}) {
  const avatarRef = useRef("");

  const [validationInputAvatar, setValidationInputAvatar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  


  useEffect(() => {
    setValidationInputAvatar(false);
    setErrorMessage("");
  
    avatarRef.current.value = "";
  }, [isOpen]);


  function onChange(e) {
    if (e.target.validity.valid) {
      setErrorMessage("");
      setValidationInputAvatar(true);
    } else {
      setErrorMessage(e.target.validationMessage);
      setValidationInputAvatar(false);
    }
  };

function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm
      className="popup__form popup__form_type_avatar"
      name="Обновить аватар"
      noValidate=""
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      disabled={!validationInputAvatar}
    >
      <input
        className="popup__input popup__input_type_avatar"
        required=""
        type="url"
        id="element-avatar"
        name="avatar"
        placeholder="Ссылка на картинку"
        onChange={onChange} 
        ref={avatarRef}
      />
      <span 
        id="element-avatar-error"
        className={validationInputAvatar ? "popup__error" : "popup__error_active"}>{errorMessage}
      </span>
     </PopupWithForm>
  );
}

export default EditAvatarPopup;        