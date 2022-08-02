import '../index.css';

export default function Main() {
	function handleEditAvatarClick() {
		document.querySelector('.popup_avatar').classList.add('popup_opened');
	}
	
	function handleEditProfileClick() {
		document.querySelector('.popup_user').classList.add('popup_opened');
	}
	
	function handleAddPlaceClick() {
		document.querySelector('.popup_card').classList.add('popup_opened');
	}
	
	return (
		<main className="content">
			
			<section className="profile">
				<div className="profile__avatar" onClick={handleEditAvatarClick}>
					<img src="<%=require('./images/Avatar.png')%>" alt="Аватарка" className="profile__image"/>
				</div>
				<div className="profile__form">
					<div className="profile__info">
						<h1 className="profile__name">Жак-Ив Кусто</h1>
						<button aria-label="Редактировать" type="button" className="profile__edit" onClick={handleEditProfileClick}></button>
					</div>
					<p className="profile__description">Исследователь океана</p>
				</div>
				<button aria-label="Добавить" type="button" className="profile__add" onClick={handleAddPlaceClick}>
				</button>
			
			</section>
			
			<section className="elements">
			
			</section>
		
		</main>
	)
}