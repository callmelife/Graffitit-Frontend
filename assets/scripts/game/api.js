'use strict';

const app = require('../app.js');

const getPicture = function() {
  return $.ajax({
    url: app.host + '/battles',
    method:'GET',
  });
};

window.getPicture = getPicture;

const uploadPicture = function(data) {
  return $.ajax({
    url: app.host + '/battles/',
    method: 'POST',
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data,
  });
};

const deletePicture = function(id) {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/battles/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const commentPicture = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/battles/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};


// Authorization: 'Token token=' + app.user.token,
//       },
//       data: {
//         "game": {
//           "cell": {
//             "index": index,
//             "value": value
//           },
//           "over": trueOrFalse
//         }
//       }
//     }).then(data=>app.game = data.game);
//   };


//
//
// // This is an example
// const myRequest = (data, success, fail) => {
//   $.ajax(Object.assign({ method: 'POST', data }, ajaxDefaults))
//   .done(success)
//   .fail(fail);
// };

module.exports = {
  getPicture,
  uploadPicture,
  deletePicture,
  commentPicture,
  // myRequest,
};

// const updateGame = (index,value,trueOrFalse) => {
//     return $.ajax({
//       url: app.host + '/games/'+ app.game.id,
//       method: "PATCH",
//       headers: {
//         Authorization: 'Token token=' + app.user.token,
//       },
//       data: {
//         "game": {
//           "cell": {
//             "index": index,
//             "value": value
//           },
//           "over": trueOrFalse
//         }
//       }
//     }).then(data=>app.game = data.game);
//   };
//
// module.exports = {
//   getPicture,
//   getGame,
//   updateGame,
//   createGame
// };
