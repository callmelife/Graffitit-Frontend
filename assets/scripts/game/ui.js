'use strict';

const app = require('../app.js');

function renderItem(item){
let template = `<div data-item="${item.id}" class="graffiti-one-container">
  <div class="graffiti-one-img-container">
    <a href="#">
      <img src="${item.url || "#"}" alt="Image to be linked to" class="graffiti-one-img">
    </a>
  </div>
<!-- This div contains all code relevant to img one's info-->
  <div class="graffiti-one-info">
     <div class="row">
     <div class="col-md-4 id-container"><p>Tag Name:<br> ${item.id}</p></div>
     <div class="col-md-4 tag-name-container"><p>Tag Name:<br> ${item.title}</p></div>
     <div class="col-md-4 artist-name-container">Artist:<br>  ${item.artist}</div>
     <div class="col-md-4 location-container">Location:<br>  ${item.location}</div>
     <div class="col-md-4 date-container">Date Photographed:<br>  ${item.date}</div>
     <div class="col-md-4 url-container">URL:<br>  ${item.url}</div>
     <div class="col-md-4 comment-display">Comments:<br>  ${item.comment}</div>
     </div>
     <div class="row">
       <div class="col-md-12 description-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
     </div>
  </div>
  <div class="comment-box">
    <form id="comment-form" data-item="${item.id}">
      <input type="text" class="comment-container" name="battle[comment]">
      <input type="submit" class="comment-btn">
    </form>
  </div>
  <div class="delete-btn-container">
    <form id='delete-btn-form' data-item="${item.id}">
      <!-- <input type="text" name="id"  placeholder="ID"> -->
      <input type="submit" class='delete-btn' value="DELETE PICTURE">
    </form>
  </div>
<!--  <div class="delete-btn-container">
    <form id='delete-btn-form'>
      <input type="text" name="battle[id]" placeholder="ID">
      <input type="submit" class='delete-btn' name='delete-picture-btn' value="Click this button to delete this image and information">
    </form>
  </div> -->
</div>`;

$('.graffiti-main').html(template);
}

const getPictureSuccess = (data) => {
  console.log(data);
  console.log("---- get picture success should be working ----")
  if (Array.isArray(data.battles) && data.battles.length === 0){
    alert("--- NO DATA IN THE DB, this is an empty array----")
   // If the object is an array AND it is also an empty array do this
 } else {
   if (app.counter >= data.length) {
     app.counter = 0;
   }
   renderItem(data[app.counter]);
   app.counter += 1;
 // Else do this stuff (like if you are actually returned data)
 }

  $(".out-put-display").text("You successfully got images from the database!");
};

const uploadPictureSuccess = (data) => {
  // console.log("checking if data getting passed to uploadPictureSuccess exists", data);
  // console.log(app.items);
  // console.log(data); // this contains the info as of now.
  // app.items = app.items;
  app.items = data;
  // console.log("checking if data getting passed to uploadPictureSuccess exists", data);
  // console.log("console log app.items", app.items);
  // console.log("console log data", data); // this contains the info as of now.
  // console.log("console log app.data", app.data);
  // console.log(app.items);
  if (app.items.length > 0) {
  app.items.push(data);
  console.log('data successfully pushed');
  } else {

  };

  console.log('Upload is working');
  console.log(data.id);
};

const deletePictureSuccess = () => {
  console.log("SUCCESSFUL DELETE");
  // console.log(app.items);
  // app.items.shift();
  // console.log(app.items);
  // if(app.items.length === 0 ){
  //     $('.get-picture-button').hide();
  //   return;
  // }
};

const commentPictureSuccess = (id) => {
  $('.comment-display').text(id);
  console.log(app.items.id);
};

const failure = (err) => {
  console.error(err);
};

module.exports = {
  getPictureSuccess,
  uploadPictureSuccess,
  deletePictureSuccess,
  commentPictureSuccess,
  failure,

};
