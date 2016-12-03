'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');
// const gameEvents = require('./game/events.js')
// const gameApi = require('./game/api.js');

  // $('#sign-in').hide();
  // $('.game-board').hide();
  // $('#sign-out').hide();
  // $('#change-password').hide();
window.app = require('./app');

$(() => {
  // gameEvents.addHandlers();
  authEvents.addHandlers();
  gameEvents.addHandlers();
  $('#sign-in').find('input[name="credentials[email]"]').val("jk@1.com");
  $('#sign-in').find('input[name="credentials[password]"]').val("1");
  $('#sign-in').trigger('submit');
  $('.get-picture-button').hide();
  $('.delete-btn').hide();
});
