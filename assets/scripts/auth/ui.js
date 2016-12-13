'use strict';

const app = require('../app.js');

$('#sign-out').hide();
$('#upload-picture-form').hide();
$('.graffiti-main').hide();
$('.get-pictures-button-container').hide();
$('#change-password').hide();
$('.post-sign-in-instructions').hide();


const signInSuccess = (data) => {
  app.user = data.user;
  app.counter = 0;
  $('.out-put-display').html("You've successfully signed in");
  $('#sign-in').fadeOut(1000);
  $('#sign-out').show();
  $('#upload-picture-form').show();
  $('.get-pictures-button-container').show();
  $('#change-password').show();
  $('#sign-up').fadeOut(1000);
  $('.instructions').fadeOut(1000);
  $('.post-sign-in-instructions').show();
};

const signOutSuccess = () => {
  app.user = null;
  app.counter = 0;
  $('#sign-out').fadeOut(1000);
  $('#upload-picture-form').fadeOut(1000);
  $('.graffiti-main').fadeOut(1000);
  $('.get-pictures-button-container').fadeOut(1000);
  $('.out-put-display').text("You've successfully signed out!");
  $('#change-password').fadeOut(1000);
  $('.instructions').show();
  $('#sign-in').show();
  $('#sign-up').show();
  $('.post-sign-in-instructions').fadeOut(1000);
};

const changePasswordSuccess = () => {
  $('.out-put-display').text("You've successfully changed your password!");
};

const success = (data) => {
  $('#sign-in').show();
  $('.out-put-display').text("You've successfully signed up!");
};

const fail = (error) => {
  $('.out-put-display').text("There has been an error! Make sure that you've signed up and have properly input your crediential information!");

};

module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
