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
  // $('.get-picture-button').hide();
  // $('.delete-btn').hide();
  //
  $('#sign-in-email').val('test@test.com');
  $('#sign-in-password').val('1');
  $('#sign-in').submit();

});
