const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var schedule = require('node-schedule');

client.on('ready', () => {
	// change channel name to name of channel or just set to equal the channel ID if you already know it.
    var test = client.channels.find(channel => channel.id === '672551565151830022');

	var eventoReino = new schedule.RecurrenceRule(); // Creates new Recurrence Rule 
	eventoReino.minute = 0; // Must set to 0 or scheduled job will run every minute.
    eventoReino.hour = [12, 14, 16, 18, 20, 22, 00, 02]; // Hours are based on your system's time.
    
	var j = schedule.scheduleJob(eventoReino, function() {
 
		test.send('@everyone Evento do Reino');
	})

	var worldBoss = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	worldBoss.minute = 30; // Must set to 0 or scheduled job will run every minute.
    worldBoss.hour = [13, 17, 23]; // Hours are based on your system's time.

	var k = schedule.scheduleJob(worldBoss, function() {
 
		test.send('@everyone World Boss');
	})

	var gvg = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	gvg.minute = 0; // Must set to 0 or scheduled job will run every minute.
	gvg.hour = 22; // Hours are based on your system's time.
	gvg.dayOfWeek = [2,4];
	
	var i = schedule.scheduleJob(gvg, function() {
 
		test.send('@everyone GVG');
	})

	console.log("Bot is ready.");
});
client.login(config.token);