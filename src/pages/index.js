import './index.css';
import Api from '../components/Api.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';

import {
  profileEditButton,
  cardAddButton,
  avatarEditButton,
  elementTemplate,
  popupEditUser,
  popupEditCard,
  popupEditAvatar,
  configValidator,
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
    'Content-Type': 'application/json'
  }
});

const formValidators = {}

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(configValidator, formElement);
  formValidators[formElement.name].enableValidation();
});

const createCard = (item) => {
  const card = new Card(item);
  return card.cardСreation();
}

const deleteCard = (currentCard) => {
  const cardId = currentCard.getCardId();
  api.deleteCard(cardId)
    .then(item => {
      currentCard.deleteCard();
      popupWithConfirmation.close();
    })
    .catch(err => {
      console.log(err);
    });
}

const likedCard = (card, clickHeart, cardId) => {
  if (clickHeart) {
    api.showLikesCard(cardId, 'PUT')
      .then(item => {
        card.handleCardLike(item);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    api.showLikesCard(cardId, 'DELETE')
    .then(item => {
      card.handleCardLike(item);
    })
    .catch(err => {
      console.log(err);
    });
  }
}

const openPopupWithImg = (name, link) => {
  popupWithImgOpen.open(name, link);
}

const handleSubmitEditProfileForm = ({ user: name, job: about }) => {
  popupEditProfile.toggleButtonText();
  api.editProfile(name, about)
    .then(data => {
      userInfo.setUserInfo(data);
      popupEditProfile.close();
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      popupEditProfile.toggleButtonText();
    })
}

const handleSubmitAddCardForm = ({ name: name, link: link }) => {
  const userId = userInfo.getUserId();
  popupAddCard.toggleButtonText();
  api.addNewCard(name, link)
    .then(item => {
      const elementCard = createCard({ item, elementTemplate, openPopupWithImg, openPopupWithConfirmation, likedCard, userId });
      cardsContainer.prependItem(elementCard);
      popupAddCard.close();
    })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    popupAddCard.toggleButtonText();
  })
}

const openPopupWithConfirmation = (currentCard) => {
  popupWithConfirmation.setCurrentCard(currentCard);
  popupWithConfirmation.open();
}

const handleSubmitUpdateAvatarForm = ({ avatar: avatar }) => {
  popupUpdateAvatar.toggleButtonText();
  api.updateAvatar(avatar)
    .then(item => {
      userInfo.editAvatar(avatar);
      popupUpdateAvatar.close();
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      popupUpdateAvatar.toggleButtonText();
    })
}

const popupWithImgOpen = new PopupWithImage('.popup_image');
popupWithImgOpen.setEventListeners();

const popupEditProfile = new PopupWithForm('.popup_user', handleSubmitEditProfileForm);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_card', handleSubmitAddCardForm);
popupAddCard.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation('.popup_confirmation', deleteCard);
popupWithConfirmation.setEventListeners();

const popupUpdateAvatar = new PopupWithForm('.popup_avatar', handleSubmitUpdateAvatarForm);
popupUpdateAvatar.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__description', '.profile__image');

const cardsContainer = new Section({
  renderer: (item, userId) => {
    const elementCard = createCard({ item, elementTemplate, openPopupWithImg, openPopupWithConfirmation, likedCard, userId });
    cardsContainer.addItem(elementCard);
  }
});

profileEditButton.addEventListener('click', () => {
  formValidators[popupEditUser.name].removeErrors();
  formValidators[popupEditUser.name].unlockButton();
  const profileInfo = userInfo.getUserInfo();
  popupEditProfile.setInputValues(profileInfo);
  popupEditProfile.open();
});

cardAddButton.addEventListener('click', () => {
  formValidators[popupEditCard.name].removeErrors();
  formValidators[popupEditCard.name].lockButton();
  popupAddCard.open();
});

avatarEditButton.addEventListener('click', () => {
  formValidators[popupEditAvatar.name].removeErrors();
  formValidators[popupEditAvatar.name].lockButton();
  popupUpdateAvatar.open();
});

Promise.all([ api.getUserInfo(), api.getInitialCards() ])
  .then(([{ name, about, avatar, _id }, data]) => {
    userInfo.setUserInfo({ name, about, avatar, _id });
    cardsContainer.renderItems(data, _id);
  })
  .catch((err) => {
    console.log(err);
  });