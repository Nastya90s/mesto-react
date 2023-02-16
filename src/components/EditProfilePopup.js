import PopupWithForm from "./PopupWithForm";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

  const currentUser = useContext(CurrentUserContext);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [validationInputName, setValidationInputName] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [validationInputDescription, setValidationInputDescription] = useState(true);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");


useEffect(() => {
  setNameErrorMessage("");
  setDescriptionErrorMessage("");
  setValidationInputName(true);
  setValidationInputDescription(true);
  if (props.isOpen) {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }
}, [props.isOpen, currentUser]);


function handleChangeName(e) {
  setName(e.target.value);
  if (e.target.validity.valid) {
    setNameErrorMessage("");
    setValidationInputName(true);
  } else {
    setNameErrorMessage(e.target.validationMessage);
    setValidationInputName(false);
  }
}

function handleChangeDescription(e) {
  setDescription(e.target.value);
  if (e.target.validity.valid) {
    setDescriptionErrorMessage("");
    setValidationInputDescription(true);
  } else {
    setDescriptionErrorMessage(e.target.validationMessage);
    setValidationInputDescription(false);
  }
}

function handleSubmit(e) {
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();
  // Передаём значения управляемых компонентов во внешний обработчик
  props.onUpdateUser({
    name: name,
    about: description,
  });
} 
  
  return (
    <PopupWithForm
    noValidate=""
    name="Редактировать профиль"
    buttonText="Сохранить"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    disabled={!(nameErrorMessage === "" && descriptionErrorMessage === "")} 
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
      onChange={handleChangeName}
      value={name || ""}
    />
    <span 
      id="input-name-error" 
      className={validationInputName ? "popup__error" : "popup__error_active"}>
      {nameErrorMessage} 
    </span>
    <input
      className="popup__input popup__input_type_job"
      type="text"
      name="subtitle"
      id="input-job"
      placeholder="Введите профессию"
      required=""
      minLength={2}
      maxLength={200}
      onChange={handleChangeDescription}
      value={description || ""}
    />
    <span 
      id="input-job-error" 
      className={validationInputDescription ? "popup__error" : "popup__error_active"}>
      {descriptionErrorMessage}
    </span>
  </PopupWithForm>
   
  );
}

export default EditProfilePopup;