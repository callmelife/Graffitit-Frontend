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
  $('#sign-in').hide();
  $('#sign-out').show();
  $('#upload-picture-form').show();
  $('.get-pictures-button-container').show();
  $('#change-password').show();
  $('#sign-up').hide();
  $('.instructions').hide();
  $('.post-sign-in-instructions').show()
};

const signOutSuccess = () => {
  app.user = null;
  app.counter = 0;
  $('#sign-out').hide();
  $('#upload-picture-form').hide();
  $('.graffiti-main').hide();
  $('.get-pictures-button-container').hide();
  $('.user-facing-output').text("You've successfully signed out!");
  $('#change-password').hide();
  $('.instructions').show();
};

const changePasswordSuccess = () => {
  $('.user-facing-output').text("You've successfully changed your password!");
};

const success = (data) => {
  $('#sign-in').show();
  $('.user-facing-output').text("You've successfully signed up!");
};

const fail = (error) => {
  $('.user-facing-output').text("There has been an error! Make sure that you've signed up and have properly input your crediential information!");

};

module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
