import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick }) {
	
	const currentUser = useContext(CurrentUserContext);
	const { name, link, _id, owner: { _id: ownerId } } = card;
	const likes = card.likes.map((item) => item._id);
	
	const isOwn = ownerId === currentUser?._id;
	
	
	
	function handleClick() {
		onCardClick(card);
	}
	return (
		<article className="element">
			<img src={link} alt={name} className="element__maskgroup" onClick={handleClick}/>
			<button type="button" className="element__trash"></button>
			<div className="element__caption">
				<h2 className="element__name">{name}</h2>
				<div className="element__likes">
					<button type="button" className="element__heart"></button>
					<p className="element__counter">{likes.length}</p>
				</div>
			</div>
		</article>
	)
}

