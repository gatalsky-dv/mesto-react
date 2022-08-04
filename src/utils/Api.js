
export default class Api extends React.Component {
  constructor(props) {
    super(props);
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/users/me`, {
      headers: {
        authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
        'Content-Type':
          'application/json'
      },
    })
  }
}
    
//
//     _сheckResponseData(res)
//     {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(`Ошибка: ${res.status}`);
//     }
//
//     getInitialCards()
//     {
//       return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/cards`, {
//         headers: {
//           authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
//           'Content-Type':
//             'application/json'
//         },
//       })
//         .then(res => this._сheckResponseData(res));
//     }
//
//     getUserInfo()
//     {
//
//         .then(res => this._сheckResponseData(res))
//     }
//
//     editProfile(name, about)
//     {
//       return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/users/me`, {
//         method: 'PATCH',
//         headers: {
//           authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
//           'Content-Type':
//             'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           about,
//         })
//       })
//         .then(res => this._сheckResponseData(res));
//     }
//
//     addNewCard(name, link)
//     {
//       return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/cards`, {
//         method: 'POST',
//         headers: {
//           authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
//           'Content-Type':
//             'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           link,
//         })
//       })
//         .then(res => this._сheckResponseData(res));
//     }
//
//     deleteCard(cardId)
//     {
//       return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/cards/${cardId}`, {
//         method: 'DELETE',
//         headers: {
//           authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
//           'Content-Type':
//             'application/json'
//         },
//       })
//         .then(res => this._сheckResponseData(res));
//     }
//
//     showLikesCard(cardId, method)
//     {
//       return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/cards/${cardId}/likes`, {
//         method: method,
//         headers: {
//           authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
//           'Content-Type':
//             'application/json'
//         },
//       })
//         .then(res => this._сheckResponseData(res));
//     }
//
//     updateAvatar(avatar)
//     {
//       return fetch(`https://mesto.nomoreparties.co/v1/cohort-45/users/me/avatar`, {
//         method: 'PATCH',
//         headers: {
//           authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
//           'Content-Type':
//             'application/json'
//         },
//         body: JSON.stringify({
//           avatar,
//         })
//       })
//         .then(res => this._сheckResponseData(res))
//     }
//
//   }
// }

