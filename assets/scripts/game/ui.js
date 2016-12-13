'use strict';

const app = require('../app.js');

function renderItem(item){
  let template =
`<div data-item="${item.id}" class="graffiti-one-container">
  <div class="graffiti-one-img-container">
    <a href="#">
      <img src="${item.url || "#"}" alt="Image to be linked to" class="graffiti-one-img">
    </a>
  </div>
  <div class="graffiti-one-info">
     <div class="row">
         <div class="col-md-4 id-container"><p>Tag Name:<br> ${item.id}</p></div>
           <!--  <div class="col-md-4 artist-name-container">Artist:<br>  ${item.artist}</div>
         <div class="col-md-4 url-container">URL:<br>  ${item.url}</div> -->
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
   // If the object is an array AND it is also an empty array do this
 } else {
   if (app.counter >= data.length) {
     app.counter = 0;
   }
   renderItem(data[app.counter]);
   app.counter += 1;
 // Else do this stuff (like if you are actually returned data)
 }
  $('.graffiti-main').show();
  $('.out-put-display').html("You successfully got images from the database!");
};

const uploadPictureSuccess = (data) => {
  $('.out-put-display').text("You've successfully uploaded a picture!" + data + "has been uploaded");
};

const deletePictureSuccess = () => {
  $('.out-put-display').text("You've successfully deleted a picture from the Graffiti Gallery!");
};

const commentPictureSuccess = (id) => {
  $('.comment-display').text(id);
  $('.out-put-display').text("You're comment was successful!");
};

const deleteFailure = (err) => {
  $('.out-put-display').text("You cannot delete pictures from the gallery that were not uploaded by you.");
};

const commentFailure = (err) => {
  $('.out-put-display').text("You cannot comment on pictures that were not uploaded by you.");
};

const failure = (err) => {
  $('.out-put-display').text("There has been an error! Please check the developer view and contact your local developer! Make sure your backend is running correctly and that the request has timed out. Or it could be something else! Sorry about that! I'd suggest googleing it!");
};

const failureToUploadUrl = (err) => {
  $('.out-put-display').text("In order to upload a picture, you need to enter the valid URL of an image.");
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
