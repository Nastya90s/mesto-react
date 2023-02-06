function PopupWithForm({
    name,
    onClose,
    isOpen,
    children,
    buttonText,
    onSubmit,
})
{
    return (
        <div className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ""}`}>
            <div className="popup__window">
                <form
                    className={`popup__form popup__form_type_${name}`}
                    name={name}
                    onSubmit={onSubmit}
                >
                    <h3 className="popup__title">{name}</h3>
                    <button 
                        type="button" 
                        className="popup__close-button" 
                        onClick={onClose}
                    />
                    {children}
                    <button type="submit" className="popup__save-button">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
