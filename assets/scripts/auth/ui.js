'use strict';

const app = require('../app.js');

$('#sign-out').hide();
// $('#upload-picture-form').hide();
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
  $('.post-sign-in-instructions').show();
  $('.sign-in-btn').hide();
  $('.sign-up-btn').hide();
  $('.change-pw-btn').removeClass('hidden');
  $('#sign-out-btn').removeClass('hidden');
  $('.change-pw-btn').show();
  $('#sign-out-btn').show();
  $('#sign-in-modal').modal('hide');
  $('#sign-up-modal').modal('hide');
  $('.sign-in-form input').val('');
  $('.sign-up-form input').val('');
  $('.auth-dropdown-toggle').text("Sign Out/Change Password");

  // $('#sign-in-modal').hide();
  // $('#sign-up-modal').hide();
};


const signOutSuccess = () => {
  app.user = null;
  app.counter = 0;
  $('#sign-out').hide();
  $('#upload-picture-form').hide();
  $('.graffiti-main').hide();
  $('.get-pictures-button-container').hide();
  $('.out-put-display').text("You've successfully signed out!");
  $('#change-password').hide();
  $('.instructions').show();
  $('.create-med-btn').addClass('hidden');
  $('.change-pw-btn').hide();
  $('#sign-out-btn').hide();
  $('.sign-in-btn').show();
  $('.sign-up-btn').show();
  $('.auth-dropdown-toggle').text("Sign Up/Sign In");
};

const signUpFailure = (error) => {
  $('.out-put-display').text('You Must Enter a Valid Email Address and matching passwords.');
}

const signInFailure = (error) => {
  $('.sign-in-modal-title').text('Sign-in -- email or password incorrect');
}

const changePasswordSuccess = () => {
  $('.out-put-display').text("You've successfully changed your password!");
  $('#change-password-modal').modal('hide');
  $('.change-password-form input').val('');
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
  signUpFailure,
};
