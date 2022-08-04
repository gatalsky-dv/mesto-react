import React from 'react';

export default function PopupWithForm(props) {

	return (
		<div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
			<div className='popup__container'>
				<button aria-label="Закрыть" type="button" className={`popup__close popup__close_${props.name}`} onClick={props.onClose} />
				<h3 className="popup__title">{props.title}</h3>
				<form name="profile" method="get" className={`popup__form popup__form_${props.name}`} noValidate>
					{props.children}
					<button type="submit" className="popup__button">Сохранить</button>
				</form>
			</div>
		</div>
	)
}