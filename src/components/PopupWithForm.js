function PopupWithForm(props)
{

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened` : ""}`}>
            <div className="popup__window">
                <form
                    className={`popup__form popup__form_type_${props.name}`}
                    name={props.name}
                    onSubmit={props.onSubmit}
                    noValidate
                >
                    <h3 className="popup__title">{props.name}</h3>
                    <button 
                        type="button" 
                        className="popup__close-button" 
                        onClick={props.onClose}
                    />
                    {props.children}
                    <button 
                        type="submit"
                        className={props.disabled ? "popup__save-button popup__save-button_invalid" : "popup__save-button"}
                        disabled={props.disabled}>
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
