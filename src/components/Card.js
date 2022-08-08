import React from 'react';

export default function Card(props) {
	function handleClick() {
		props.onCardClick(props.card);
	}
	return (
		<article className="element">
			<img src={props.link} alt={props.name} className="element__maskgroup" onClick={handleClick}/>
			<button type="button" className="element__trash"></button>
			<div className="element__caption">
				<h2 className="element__name">{props.name}</h2>
				<div className="element__likes">
					<button type="button" className="element__heart"></button>
					<p className="element__counter">{props.likes}</p>
				</div>
			</div>
		</article>
	)
}

