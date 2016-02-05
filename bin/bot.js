'use strict';

var NorrisBot = require('../lib/norrisbot');

// var token = process.env.BOT_API_KEY;
var token = 'xoxb-20380956836-M2uSQbhBhgOGt3xWIirx5fuv';
var dbPath = process.env.BOT_DB_PATH;
// var dbPath = '../data/norrisbot';
var name = process.env.BOT_NAME;
// var name = 'norrisbot';

var norrisbot = new NorrisBot({
	token: token,
	dbPath: dbPath,
	name: name
});

norrisbot.run();