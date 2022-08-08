import '../index.css';

export default function ImagePopup(props) {
	return (
		<div className="popup popup_image">
			<div className="popup__pic">
				<button aria-label="Закрыть" type="button" className="popup__close popup__close_image"></button>
				<img src="src/components/App#" alt="" className="popup__img" />
				<p className="popup__text"></p>
			</div>
		</div>
	)
}