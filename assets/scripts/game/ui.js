'use strict';

const app = require('../app.js');

function renderItem(item){

  let template = `<div data-item="${item.id}" class="graffiti-one-container">
  <div class="graffiti-one-img-container">
    <a href="#">
      <img src="${item.url || "#"}" alt="Image to be linked to" class="graffiti-one-img">
    </a>
  </div>
  <div class="graffiti-one-info">
     <div class="row">
         <div class="col-md-4 id-container"><p>Picture ID:<br> ${item.id}</p></div>
         <div class="col-md-4 url-container">URL:<br>  ${item.url}</div>
         <div class="col-md-4 comment-display">Comments:<br>  ${item.comment}</div>
     </div>
  </div>
  <div class="comment-box">
    <form id="comment-form" data-item="${item.id}">
      <input type="text" class="comment-container" placeholder="Enter Comments Here" name="battle[comment]">
      <input type="submit" class="comment-btn">
    </form>
  </div>
  <div class="delete-btn-container">
    <form id='delete-btn-form' data-item="${item.id}">
      <input type="submit" class='delete-btn' value="Click Here to Delete the Current Picture">
    </form>
  </div>
</div>`;

$('.graffiti-main').html(template);
}

const getPictureSuccess = (data) => {
  if (Array.isArray(data.battles) && data.battles.length === 0){
    $('.out-put-display').text("If you'd like to view a picture, input the URL below and press 'submit'");
 } else {
   if (app.counter >= data.battles.length) {
     app.counter = 0;
   }
   renderItem(data.battles[app.counter]);
   app.counter += 1;
 }
  $('.graffiti-main').show();
  $('.out-put-display').html("The GET communication between the backend and the front end was successful! If no images are being displayed below, that means there are no images currently in the database. Try uploading a valid image URL and then try to load it!");
};

const uploadPictureSuccess = (data) => {
  $('.out-put-display').text("You've successfully uploaded a picture!");
};

const deletePictureSuccess = () => {
  $('.graffiti-one-container').hide();
  $('.out-put-display').text("You've successfully deleted a picture from the Graffiti Gallery!");
};

const commentPictureSuccess = (id) => {
  $('.comment-display').text(id);
  $('.out-put-display').text("You're comment was successful! Scroll through the gallery again to see your comment displayed with the picture.");
};

const deleteFailure = (err) => {
  $('.out-put-display').text("You cannot delete pictures from the gallery that were not uploaded by you.");
};

const commentFailure = (err) => {
  $('.out-put-display').text("You cannot comment on pictures that were not uploaded by you.");
};

const failure = (err) => {
  $('.out-put-display').text("Please ensure that you've followed the instructions listed on this page and any relevant instructions provided.");
};

const failureToUploadUrl = (err) => {
  $('.out-put-display').text("In order to upload a picture, you need to enter the valid URL of an image. Please ensure that the URL is an image's URL and that the URL uses an extension that is accepted by this application. All URLs entered into the field MUST end with '.jpg', '.png', or '.gif' and must not have any character after the file extension.");
};

module.exports = {
  getPictureSuccess,
  uploadPictureSuccess,
  deletePictureSuccess,
  commentPictureSuccess,
  deleteFailure,
  commentFailure,
  failure,
  failureToUploadUrl,
};
