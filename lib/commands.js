const { EventEmitter } = require('events');

const events = new EventEmitter();

events.commands = [];
events.plugins = [];
events.loaded = false;

events.addCommand = function addCommand(cmd) {
  if (!cmd || typeof cmd !== 'object') return cmd;
  this.commands.push(cmd);
  return cmd;
};

events.load = function load() {
  this.loaded = true;
  return this.commands;
};

module.exports = events;
