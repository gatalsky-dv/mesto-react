import React, { useState } from 'react';
import api from '../utils/Api.js';
import App from './App';
import Card from './Card'

export default function Main(props) {
	
	const [userName, setUserName] = useState('Жак-Ив Кусто');
	const [userDescription, setUserDescription] = useState('Исследователь океана');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);
	
	React.useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then(([user, cards]) => {
				setUserName(user.name);
				setUserDescription(user.about);
				setUserAvatar(user.avatar);
				setCards(cards);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	
	return (
		<main className="content">
			
			<section className="profile">
				<div className="profile__avatar" onClick={props.onEditAvatar}>
					<div style={{ backgroundImage: `url(${userAvatar})`}} className="profile__image"/>
				</div>
				<div className="profile__form">
					<div className="profile__info">
						<h1 className="profile__name">{userName}</h1>
						<button aria-label="Редактировать" type="button" className="profile__edit" onClick={props.onEditProfile}></button>
					</div>
					<p className="profile__description">{userDescription}</p>
				</div>
				<button aria-label="Добавить" type="button" className="profile__add" onClick={props.onAddPlace}>
				</button>
			</section>
			
			<section className="elements">
				{cards.map((data) => {
					return (
						<Card
							card={data}
							key={data._id}
							name={data.name}
							link={data.link}
							likes={data.likes.length}
							// onCardClick={onCardClick}
						/>
				)})}
			</section>
		
		</main>
	)
}