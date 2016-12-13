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

module.exports = {
  getPicture,
  uploadPicture,
  deletePicture,
  commentPicture,
};
