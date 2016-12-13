'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

window.app = require('./app');

$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
});
