import {useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [name, setName] = useState("");
  const [link, setLink] = useState("")

  const [validationInputName, setValidatioInputName] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [validationInputLink, setValidationInputLink] = useState(true);
  const [linkErrorMessage, setLinkErrorMessage] = useState("");


  useEffect(() => {
    setName("");
    setLink("");
    setNameErrorMessage("");
    setLinkErrorMessage("");
    setValidatioInputName(false);
    setValidationInputLink(false);
  }, [isOpen]);

  
  function handleChangeName(e) {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameErrorMessage("");
      setValidatioInputName(true);
    } else {
      setNameErrorMessage(e.target.validationMessage);
      setValidatioInputName(false);
    }
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
    if (e.target.validity.valid) {
      setLinkErrorMessage("");
      setValidationInputLink(true);
    } else {
      setLinkErrorMessage(e.target.validationMessage);
      setValidationInputLink(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
      onAddPlace({
        name,
        link,
      })
    }

  return (
    <PopupWithForm
      className="popup__form popup__form_type_add" 
      noValidate=""
      name="Новое место"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      disabled={!validationInputName || !validationInputLink}
      >
      <input
        className="popup__input popup__input_type_place"
        type="text"
        id="element-place"
        name="place"
        value={name}
        placeholder="Название"
        required=""
        minLength={2}
        maxLength={30}
        onChange={handleChangeName}
      />
      <span 
        id="element-place-error"
        className={validationInputName ? "popup__error" : "popup__error_active"}>{nameErrorMessage}
      </span>

      <input
        className="popup__input popup__input_type_src"
        required=""
        type="url"
        id="element-src"
        name="src"
        value={link}
        placeholder="Ссылка на картинку"
        onChange={handleChangeLink}
      />
      <span id="element-src-error"
        className={validationInputLink ? "popup__error" : "popup__error_active"}>{linkErrorMessage}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;