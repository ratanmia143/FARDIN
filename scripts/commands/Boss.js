const fs = require("fs");
module.exports.config = {
	name: "Botboss",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") || react.includes("bossk") || react.includes("karbot")) {
		var msg = {
				body: "আসসালামু আলাইকুম🥰🥰আমি 🥰FARDIN এর ভদ্র বট!!FB LINK :https://www.facebook.com/profile.php?id=61566660550510&mibextid=ZbWKwL🤍"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
