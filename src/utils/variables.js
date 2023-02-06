const popupAddSelector = ".popup_type_add";
const popupEditSelector = ".popup_type_edit";
const popupAvatar = ".popup_type_avatar";
const popupConfirm = ".popup_type_confirm";

//Объявление кнопок вызова попапов добавления карточки и редактирования профиля
const popUpOpenAddPlace = document.querySelector(".profile__add-button");
const popUpOpenEditProfile = document.querySelector(".profile__edit-button");

const inputTypeName = document.querySelector(".popup__input_type_name");
const inputTypeJob = document.querySelector(".popup__input_type_job");
const avatarButton = document.querySelector(".profile__avatar-container");

// FormValidator
const formValidatorOptions = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_invalid",
  inputErrorClass: "popup__input_type_error",
};

export {
  popupAddSelector,
  popupEditSelector,
  popUpOpenAddPlace,
  popUpOpenEditProfile,
  formValidatorOptions,
  inputTypeName,
  inputTypeJob,
  popupAvatar,
  popupConfirm,
};  

export default avatarButton;