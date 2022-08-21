import {useContext, useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
	const currentUser = useContext(CurrentUserContext);
	const [name, setName] = useState();
	const [description, setDescription] = useState();
	
	const handleChange = (e) => {
		setName(e.target.value);
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		onUpdateUser({
			name,
			about: description,
		});
	}
	useEffect(() => {
		setName(currentUser?.name);
		setDescription(currentUser?.about);
	}, [currentUser]);
	
	return (
		<PopupWithForm
			name='user'
			title='Редактировать профиль'
			isOpen={isOpen}
			onClose={onClose}
			buttonText='Сохранить'
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				className="popup__input popup__input_value_name"
				id="name-input"
				name="name"
				placeholder="Имя позьзователя"
				required
				minLength="2"
				maxLength="40"
				value={name}
				onChange={handleChange}
			/>
			<span className="name-input-error"></span>
			<input
				type="text"
				className="popup__input popup__input_value_job"
				id="job-input"
				name="description"
				placeholder="О себе"
				required
				minLength="2"
				maxLength="200"
				value={description}
				onChange={handleChange}
			/>
			<span className="job-input-error"></span>
		</PopupWithForm>
	)
}