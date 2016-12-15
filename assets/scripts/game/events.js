'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onGetPicture = function (event) {
  event.preventDefault();
  api.getPicture()
    .then(ui.getPictureSuccess)
    .catch(ui.failure);
  };

const onUploadPicture = function (event) {
  event.preventDefault();
  let battle = getFormFields(event.target).battle;
  let jpg = "jpg";
  let png = "png";
  let gif = "gif";

  let extensionString = battle.url.split('.').pop();
    if (extensionString === jpg) {
    }
    else if (extensionString === png) {
    }
    else if (extensionString === gif) {
    }
    else {
        $('.out-put-display').text("It appears that the URL you've tried to upload to the database is not an image URL or the URL uses an extension that is not accepted by this application. All URLs entered into the field MUST end with '.jpg', '.png', or '.gif' and must not have any character after the file extension.");
        return;
    }
  api.uploadPicture({battle})
    .then(ui.uploadPictureSuccess)
    .catch(ui.failureToUploadUrl);
  $('.get-picture-button').show();
  $('.delete-btn').show();
};

const onDeletePicture = function (event) {
  event.preventDefault();
  let id = $(event.target).data("item");
  api.deletePicture(id)
    .then(ui.deletePictureSuccess)
    // .then(api.getPicture)
    // .then(ui.getPictureSuccess)
    .catch(ui.deleteFailure);
};

const onCommentPicture = function (event) {
  event.preventDefault();
  let id = $(event.target).data("item");
  let commentField = getFormFields(event.target);
  api.commentPicture(id, commentField)
    .then(ui.commentPictureSuccess)
    // .then(api.getPicture)
    // .then(ui.getPictureSuccess)
    .catch(ui.commentFailure);
};

const addHandlers = () => {
  $('#get-picture-form').on('submit', onGetPicture);
  $('#upload-picture-form').on('submit', onUploadPicture);
  $(document).on('submit', '#delete-btn-form', onDeletePicture);
  $(document).on('submit', '#comment-form', onCommentPicture);
};

module.exports = {
  addHandlers,
};
