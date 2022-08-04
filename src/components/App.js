// import logo from '../images/logo.svg';
import React, { useState } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

export default function App() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_avatar').classList.add('popup_opened');
  }
  
  function handleEditProfileClick() {
    document.querySelector('.popup_user').classList.add('popup_opened');
  }
  
  function handleAddPlaceClick() {
    document.querySelector('.popup_card').classList.add('popup_opened');
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    console.log('работает');
  }
  
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name='user'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name='card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name='confirmation'
        title='Вы уверены?'
        // isOpen={}
        // onClose={}
      />
      
      <ImagePopup />
      
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

      </div>
  );
}