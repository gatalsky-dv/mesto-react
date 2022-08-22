import {useContext, useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
	const currentUser = useContext(CurrentUserContext);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	
	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};
	
	function handleSubmit(e) {
		e.preventDefault();
		onUpdateUser({
			name,
			about: description,
		});
	}
	
	useEffect(() => {
		if (currentUser.name && currentUser.about) {
			setName(currentUser.name);
			setDescription(currentUser.about);
		}
	}, [currentUser]);
	
	return (
		<PopupWithForm
			name="user"
			title="Редактировать профиль"
			isOpen={isOpen}
			onClose={onClose}
			buttonText="Сохранить"
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
				onChange={handleNameChange}
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
				onChange={handleDescriptionChange}
			/>
			<span className="job-input-error"></span>
		</PopupWithForm>
	)
}