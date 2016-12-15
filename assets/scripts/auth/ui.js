'use strict';

const app = require('../app.js');

$('#sign-out').hide();
$('#upload-picture-form').hide();
$('#change-password').hide();
$('.post-sign-in-instructions').hide();
$('.graffiti-main').hide();
$('.get-pictures-button-container').hide();
$('.frame-label').hide();


const signInSuccess = (data) => {
  app.user = data.user;
  app.counter = 0;
  $('#change-password').show();
  $('#sign-up').fadeOut(1000);
  $('#sign-in').fadeOut(1000);
  $('#sign-out').show();
  $('#upload-picture-form').show();
  $('.get-pictures-button-container').show();
  $('.instructions').fadeOut(1000);
  $('.post-sign-in-instructions').show();
  $('.out-put-display').text("You've successfully signed in");
  $('.frame-label').show();
};

const signOutSuccess = () => {
  app.user = null;
  app.counter = 0;
  $('#sign-out').fadeOut(1000);
  $('#upload-picture-form').fadeOut(1000);
  $('#sign-in').show();
  $('#sign-up').show();
  $('#change-password').fadeOut(1000);
  $('.get-pictures-button-container').fadeOut(1000);
  $('.instructions').show();
  $('.graffiti-main').fadeOut(1000);
  $('.post-sign-in-instructions').fadeOut(1000);
  $('.frame-label').fadeOut(1000);
  $('.out-put-display').text("You've successfully signed out!");
};

const changePasswordSuccess = () => {
  $('.out-put-display').text("You've successfully changed your password!");
};

const success = (data) => {
  $('#sign-in').show();
  $('.out-put-display').text("You've successfully signed up!");
};

const fail = (error) => {
  $('.out-put-display').text("There has been an error! Make sure that you've signed up and have properly input your crediential information in the sign up field!");
};

const signUpFail = (error) => {
  $('.out-put-display').text("You've failed to sign up properly! Make sure that you've signed up with a unique user name and that you entered the same password into both password fields.");
};

const signInFail = (error) => {
  $('.out-put-display').text("You've failed to sign in properly! Please make sure that you've input your credientials correctly.");
};

const changePwFail= (error) => {
  $('.out-put-display').text("You've failed to change your password properly! Make sure that you are entering the correct password and the new password is different than the first password.");
};



module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpFail,
  signInFail,
  changePwFail
};
