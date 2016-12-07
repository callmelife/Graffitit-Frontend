'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onGetPicture = function (event) {
  event.preventDefault();
  let firstItem = app.items.shift();
  ui.getPictureSuccess(firstItem);
  app.items.push(firstItem);

  // api.getPicture()
  // .then(ui.getPictureSuccess)
  // .catch(ui.failure);
};

const onUploadPicture = function (event) {
  event.preventDefault();
  let battle = getFormFields(event.target).battle;
  api.uploadPicture({battle})
  .then(ui.uploadPictureSuccess)
  .catch(ui.failure);
  $('.get-picture-button').show();
  $('.delete-btn').show();
};

const onDeletePicture = function (event) {
  event.preventDefault();
  if(app.items.length === 0 ){
    return;
  }
  let deleteItem = app.items[0]
  let battle = getFormFields(event.target);
  api.deletePicture(deleteItem.id)
  .then(ui.deletePictureSuccess)
  .catch(ui.failure);
  $('.graffiti-one-container').hide();
};

const onCommentPicture = function (event) {
  event.preventDefault();
  console.log(event.target);
  let id = $(event.target).data("item");
  console.log(id);

    // let pictureComment = app.items[0];
    let commentField = getFormFields(event.target);
    // let newComment = {
    //   comment: commentField.find('.comment-container').text()
    // };
    api.commentPicture(id, commentField)
    .then(api.getPicture)
    .then(data => app.items = data)
    .then((data)=>{
      app.items = data;
      let firstItem = app.items.shift();
      ui.getPictureSuccess(firstItem);
      app.items.push(firstItem);
    })
    .catch(ui.failure);
};



const addHandlers = () => {
  api.getPicture().then(data => app.items = data);
  // api.uploadPicture().then(data => app.game.id = data.game.id);
  $('#get-picture-form').on('submit', onGetPicture);
  $('#upload-picture-form').on('submit', onUploadPicture);
  $('#delete-btn-form').on('submit', onDeletePicture);
  $(document).on('submit', '#comment-form', onCommentPicture);
};


module.exports = {
  addHandlers,
};
