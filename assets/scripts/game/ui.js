'use strict';

const app = require('../app.js');
// const api = require ('./api');

const getPictureSuccess = (data) => {
  renderItem(data);
};

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
     <div class="col-md-4 tag-name-container"><p>Tag Name:${item.title}</p></div>
     <div class="col-md-4 artist-name-container">Artist:${item.artist}</div>
     <div class="col-md-4 location-container">Location:${item.location}</div>
     <div class="col-md-4 date-container">Date Photographed:${item.date}</div>
     <div class="col-md-4 url-container">URL:${item.url}</div>
     </div>
     <div class="row">
       <div class="col-md-12 description-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
     </div>
  </div>

  <div class="comment-box">
    <form id="comment-form">
      <input type="text" class="comment-container" name="battle[comment]">
      <input type="submit" class="comment-btn">
    <div class="comment-display">${item.comment}</div>
    </form>
  </div>
<!--  <div class="delete-btn-container">
    <form id='delete-btn-form'>
      <input type="text" name="battle[id]" placeholder="ID">
      <input type="submit" class='delete-btn' name='delete-picture-btn' value="Click this button to delete this image and information">
    </form>
  </div> -->
</div>`

$('.graffiti-main').html(template);
}

const uploadPictureSuccess = (data) => {
  app.items = app.items || [];
  app.items.push(data);
  console.log('Upload is working');
};

const deletePictureSuccess = (id) => {
  app.items.shift();
  if(app.items.length === 0 ){
      $('.get-picture-button').hide();
    return;
  };
};

const commentPictureSuccess = (id) => {
  $('.comment-display').text(id);
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
//
//
// // code from TTT:
// // 'use strict';
// //
// // const app = require('../app.js');
// //
// // const newGameSuccess = (data) => {
// //   app.game = data.game;
// //
// // };
// //
// // const getGameSuccess = function(data){
// //   $('.game-data').text('You have played ' + data.games.length + ' game(s)!');
// // };
// //
// // module.exports = {
// //   newGameSuccess,
// //   getGameSuccess,
// // };
