'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onGetPicture = function (event) {
  event.preventDefault();
  let firstItem = app.items.shift()
  ui.getPictureSuccess(firstItem);
  app.items.push(firstItem);
};

const onUploadPicture = function (event) {
  event.preventDefault();
  let battle = getFormFields(event.target).battle;
  api.uploadPicture({battle})
  .then(ui.uploadPictureSuccess)
  .catch(ui.failure);
};

const onDeletePicture = function (event) {
  event.preventDefault();
  // let deleteItem = app.items.shift()
  // let item = getFormFields(event.target).battle;  // .parent to how ever many levels within the container there artist-name-container
  // api.deletePicture(item.attr('data-item'))  // data-item will have to be edited.
  api.deletePicture()
  .then(ui.deletePictureSuccess)
  .catch(ui.failure);
  // item.remove();
};

const addHandlers = () => {
  api.getPicture().then(data => app.items = data);
  // api.uploadPicture().then(data => app.game.id = data.game.id);
  $('#get-picture-form').on('submit', onGetPicture);
  $('#upload-picture-form').on('submit', onUploadPicture);
  $('#delete-btn-form').on('submit', onDeletePicture);

};

module.exports = {
  addHandlers,
};
