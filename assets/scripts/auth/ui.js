'use strict';

const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user;
  app.counter = 0;
};

const signOutSuccess = () => {
  app.user = null;
  app.counter = 0;
};

const changePasswordSuccess = () => {
};

const success = (data) => {
  $('#sign-in').show();
};

const fail = (error) => {
  console.error(error);
};

module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
