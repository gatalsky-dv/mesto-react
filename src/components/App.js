import logo from './logo.svg';
import './index.css';

function App() {
  return (
      <body className="page">

      <header className="header">
        <a href="#" className="header__logo"></a>
      </header>

      <main className="content">

        <section className="profile">
          <div className="profile__avatar">
            <img src="<%=require('./images/Avatar.png')%>" alt="Аватарка" className="profile__image" />
          </div>
          <div className="profile__form">
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button aria-label="Редактировать" type="button" className="profile__edit"></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button aria-label="Добавить" type="button" className="profile__add">
          </button>

        </section>

        <section className="elements">

        </section>

      </main>

      <footer className="footer">
        <p className="footer__text">&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_user">
        <div className="popup__container">
          <button aria-label="Закрыть" type="button" className="popup__close popup__close_user"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="profile" method="get" className="popup__form popup__form_user" noValidate>
            <input
                type="text"
                className="popup__input popup__input_value_name"
                id="name-input"
                name="user"
                placeholder="Имя позьзователя"
                required
                minLength="2"
                maxLength="40"
            />
              <span className="name-input-error"></span>
              <input
                  type="text"
                  className="popup__input popup__input_value_job"
                  id="job-input"
                  name="job"
                  placeholder="О себе"
                  required
                  minLength="2"
                  maxLength="200"
              />
                <span className="job-input-error"></span>
                <button type="submit" className="popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_card">
        <div className="popup__container">
          <button aria-label="Закрыть" type="button" className="popup__close popup__close_card"></button>
          <h3 className="popup__title">Новое место</h3>
          <form name="card" className="popup__form popup__form_card" noValidate>
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
                <button type="submit" className="popup__button">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_image">
        <div className="popup__pic">
          <button aria-label="Закрыть" type="button" className="popup__close popup__close_image"></button>
          <img src="#" alt="" className="popup__img" />
            <p className="popup__text"></p>
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__container popup__container_avatar">
          <button aria-label="Закрыть" type="button" className="popup__close popup__close_avatar"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form name="avatar-edit" className="popup__form popup__form_avatar" noValidate>
            <input
                type="url"
                className="popup__input popup__input_value_link"
                id="avatar-input"
                name="avatar"
                placeholder="Ссылка на аватарку"
                required
            />
              <span className="avatar-input-error"></span>
              <button type="submit" className="popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_confirmation">
        <div className="popup__container popup__container_confirmation">
          <button aria-label="Закрыть" type="button" className="popup__close popup__close_confirmation"></button>
          <h3 className="popup__title popup__title_confirmation">Вы уверены?</h3>
          <form name="card-delete" className="popup__form popup__form_confirmation" noValidate>
            <button type="submit" className="popup__button popup__button_confirmation">Да</button>
          </form>
        </div>
      </div>

      <template id="element-template">
        <article className="element">
          <img className="element__maskgroup" />
            <button type="button" className="element__trash"></button>
            <div className="element__caption">
              <h2 className="element__name"></h2>
              <div className="element__likes">
                <button type="button" className="element__heart"></button>
                <p className="element__counter"></p>
              </div>
            </div>
        </article>
      </template>

      </body>
  );
}

export default App;
