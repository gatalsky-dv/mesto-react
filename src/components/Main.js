import React from 'react';
import Api from '../utils/Api.js';

export default function Main(props) {
	
	
	return (
		<main className="content">
			
			<section className="profile">
				<div className="profile__avatar" onClick={props.onEditAvatar}>
					<img src="../images/Avatar.png" alt="Аватарка" className="profile__image"/>
				</div>
				<div className="profile__form">
					<div className="profile__info">
						<h1 className="profile__name">Жак-Ив Кусто</h1>
						<button aria-label="Редактировать" type="button" className="profile__edit" onClick={props.onEditProfile}></button>
					</div>
					<p className="profile__description">Исследователь океана</p>
				</div>
				<button aria-label="Добавить" type="button" className="profile__add" onClick={props.onAddPlace}>
				</button>
			</section>
			
			<section className="elements">
			</section>
		
		</main>
	)
}