const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var schedule = require('node-schedule');

client.on('ready', () => {
	// change channel name to name of channel or just set to equal the channel ID if you already know it.
    var test = client.channels.find(channel => channel.id === '672551565151830022');
    test.send('@everyone Evento do Reino');

	var rule = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	rule.minute = 0; // Must set to 0 or scheduled job will run every minute.
    rule.hour = [14, 16, 18]; // Hours are based on your system's time.
    
	var j = schedule.scheduleJob(' 58 * * * * ', function() {
 
		test.send('@everyone Evento do Reino');
	})

	console.log("Bot is ready.");
});
client.login(config.token);