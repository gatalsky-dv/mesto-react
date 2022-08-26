import { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

export default function App() {
	
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCards] = useState([]);
	
	useEffect(() => {
		api.getUserInfo()
			.then((res) => {
				setCurrentUser(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	
	useEffect(() => {
		api.getInitialCards()
			.then((res) => {
				setCards(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	
	
	function handleCardLike(card) {
		// снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some( i => i._id === currentUser._id );
		
		// отправляем запрос в API и получаем обновленные данные карточки
		api.showLikesCard(card._id, isLiked)
			.then((newCard) => { //форматируем новый массив на основе имеющегося, подставляя в него новую карточку
				const newCards = cards.map((c) => c._id === card._id ? newCard : c);
				//обновляем стейт
				setCards(newCards);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	
	function handleCardDelete(cardId) {
		api.deleteCard(cardId._id)
			.then((res) => {
				setCards(cards.filter(card => card._id !== cardId._id))
			})
			.catch((err) => {
				console.log(err);
			});
	}
	
	function handleUpdateUser({name, about}) {
		api.editProfile({name, about})
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => console.log(err))
	}
	
	function handleUpdateAvatar({avatar}) {
		api.updateAvatar({avatar})
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => console.log(err))
	}
	
	const handleEscClose = (evt) => {
		if (evt.key === 'Escape') {
			closeAllPopups();
		}
	}
	
	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
		document.addEventListener('keydown', handleEscClose);
	}
	
	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
		document.addEventListener('keydown', handleEscClose);
	}
	
	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
		document.addEventListener('keydown', handleEscClose);
	}
	
	function handleCardClick(card) {
		setSelectedCard(card);
		document.addEventListener('keydown', handleEscClose);
	}
	
	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(null);
	}
	
	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<Header/>
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
					cards={cards}
					onCardLike={handleCardLike}
					onCardDelete={handleCardDelete}
				/>
				<Footer/>
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<PopupWithForm
					name="card"
					title="Новое место"
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					buttonText="Создать"
				>
					<input
						type="text"
						className="popup__input popup__input_value_title"
						id="title-input"
						name="name"
						placeholder="Название"
						required
						minLength="2"
						maxLength="30"
					/>
					<span className="title-input-error"></span>
					<input
						type="url"
						className="popup__input popup__input_value_link"
						id="link-input"
						name="link"
						placeholder="Ссылка на картинку"
						required
					/>
					<span className="link-input-error"></span>
				</PopupWithForm>
				
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>

				<PopupWithForm
					name="confirmation"
					title="Вы уверены?"
					// isOpen={}
					// onClose={}
				/>
				<ImagePopup
					name="image"
					card={selectedCard}
					isOpen={!!selectedCard}
					onClose={closeAllPopups}
				/>
			</div>
		</CurrentUserContext.Provider>
	);
}