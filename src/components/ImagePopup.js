function ImagePopup(props) {

    return (
      <div className={`popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`} >
        <div className="popup__window">
          <img
            className="popup__image"
            src={props.card?.link}
            alt={props.card?.name}
          />
          <h3 className="popup__subtitle">{props.card ? props.card.name : ""}</h3>
          <button
            className="popup__close-button"
            type="button"
            onClick={props.onClose}
          />
        </div>
      </div>
    );
  }
  
  export default ImagePopup;