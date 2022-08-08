// import logo from '../images/logo.svg';
import React, { useState } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

export default function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
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
        children = {
          <>
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
          </>
        }
      />
      <PopupWithForm
        name='card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children = {
          <>
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
          </>
        }
      />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children ={
          <>
            <input
              type="url"
              className="popup__input popup__input_value_link"
              id="avatar-input"
              name="avatar"
              placeholder="Ссылка на аватарку"
              required
            />
            <span className="avatar-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name='confirmation'
        title='Вы уверены?'
        // isOpen={}
        // onClose={}
      />
      
      <ImagePopup
      
      
      />
      
      

      </div>
  );
}