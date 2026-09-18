const { sck: groupdb } = require('./database/group');
const { sck1: userdb } = require('./database/user');
const { Pluginsdb: Plugindb } = require('./database/plugins');
const { alive: alivedb } = require('./database/alive');
const { RandomXP } = require('./database/xp');
const { card } = require('./database/cards');

module.exports = {
  groupdb,
  userdb,
  Plugindb,
  alivedb,
  RandomXP,
  card,
  sck: groupdb,
  sck1: userdb,
};
