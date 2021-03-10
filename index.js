const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

require('events').EventEmitter.defaultMaxListeners = 300;
const moment = require("moment")
require("dotenv").config
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { registerFont } = require('canvas');
const { Canvas, resolveImage } = require('canvas-constructor');
registerFont('./Impact.ttf', { family: 'shark' });

/////////////////

const prefix = "!"//البرفكس
const developers = '';//ايديك 

//user ____________________________________________________________________________

const imageC =
	'https://media.discordapp.net/attachments/810581347462676510/814968249779224576/PROFILE.png';



client.on('message', async msg => {

const user = msg.mentions.users.first() || msg.author,
userimg = user.avatarURL({format : 'png'}),
AVATAR = await resolveImage(userimg)


	if (msg.content.startsWith(prefix + 'user')) {
		const image = await resolveImage(imageC);

		async function shark() {
			const ctx = new Canvas(1048, 1048)

				.printImage(image, 0, 0, 1048, 1048)
        .printCircularImage(AVATAR, 200, 200, 170)

	.setTextSize(70)
	.setTextFont("shark")
.setColor("#fff")
.printText(user.username ,460, 520 )   
.printText(`#${user.discriminator} `,480, 686 ) 
.printText(moment(user.createdTimestamp).format('YYYY/M/D') , 480 , 840)   
.printText(user.id , 213 , 999)  
.toBuffer();

			return ctx;


		}

		msg.channel.send({
			files: [{ attachment: await shark(), name: 'canvas.png' }]
		});
	}
});

//profile ____________________________________________________________________________

const imageCe =
	'https://media.discordapp.net/attachments/809374915752230912/815490945730609163/New_Project_138_C1D9DF7.png?width=670&height=670';



client.on('message', async msg => {

const user = msg.mentions.users.first() || msg.author,
userimg = user.avatarURL({format : 'png'}),
AVATAR = await resolveImage(userimg)
let rep = db.get(`reps_${user.id}`)
if (rep === 'null'){
bale = 0;
}

const calculateUserXp = xp => Math.floor(0.1 * Math.sqrt(xp));
let xp = (await db.fetch(`Xp_${user.id}`)) || 1;
const level = calculateUserXp(xp); 
minxp = (level * level) / 0.01;
maxxp = ((level + 1) * (level + 1)) / 0.01;
const bar = ((xp - minxp) / (maxxp - xp)) * 650;


	if (msg.content.startsWith(prefix + 'profile')) {
		const image = await resolveImage(imageCe);

		async function shark() {
			const ctx = new Canvas(1048, 1048)

				.printImage(image, 0, 0, 1048, 1048)
        .printCircularImage(AVATAR, 554 , 280, 192)
        .printRectangle(240, 760 , 700 , 100)



	.setTextSize(80)
	.setTextFont("sharks")
.setColor("#fff")
.printText(user.username ,250, 560 ) 
.printText(level , 810 , 333)
.printText(rep , 190 , 333)
.printText(`${xp} / `,290, 820)
.printText(` ${maxxp}  Xp`,540, 820)





.toBuffer();

			return ctx;


		}

		msg.channel.send({
			files: [{ attachment: await shark(), name: 'canvas.png' }]
		});
	}
});

//system xp  ____________________________________________________________________________


const db = require("quick.db")

client.on('message', async message => {
const user = message.author
let userxp = await db.fetch (`Xp_${user.id}`) || 1;
const calculateUserXp = (xp) => Math.floor(0.1 * Math.sqrt(xp));

if(!message.author.bot) {
  const xp = Math.ceil(Math.random () * (5 * 10));
  const level = calculateUserXp(userxp);
  const newLevel = calculateUserXp(userxp + xp);


  if(newLevel > level) {
    db.add(`coins_${user.id}`,200)

      var ranks =  message.guild.channels.cache.find(c => c.name === `shark-test`)
        if(!ranks) return 

  const credit =  await db.get(`coins_${user.id}`)
   ranks.send(` <@${user.id}> ** 🥳 Yay New Level ${level} ** `)
  }
await db.add(`Xp_${user.id}`, xp)
}
});

//rep  ____________________________________________________________________________

const ms = require("parse-ms");

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + "rep")) {

        let user = message.mentions.users.first();
        if (!user) return message.channel.send(` Mention the user`)

        let timeout = 86400000;

        let rep = db.get(`reps_${user.id}`) 

        let cooldown = db.get(`repcooldown_${message.author.id}_${message.guild.id}`)

        if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {

            let time = ms(timeout - (Date.now() - cooldown));

            message.channel.send(` **${time.hours}h ${time.minutes}m ${time.seconds}s** Left `);

        } else {
            if (user.id === message.author.id) return message.channel.send(`You can't rep yourself!`)
            if (user.bot) return message.channel.send(`You can't rep bots!`)
            message.channel.send(`** ${message.author}  give rep to <@${user.id}>  **`)

            db.add(`reps_${user.id}`, 1)

            db.set(`repcooldown_${message.author.id}_${message.guild.id}`, Date.now())
        }
    }
});


//rank ____________________________________________________________________________

const imageCes =
	'https://media.discordapp.net/attachments/816197403253669889/816936445243686932/image0.jpg?width=1416&height=670';



client.on('message', async msg => {

const user = msg.mentions.users.first() || msg.author,

userimg = user.avatarURL({format : 'png'}),
AVATAR = await resolveImage(userimg)
    let rep = db.get(`reps_${user.id}`) 

const calculateUserXp = xp => Math.floor(0.1 * Math.sqrt(xp));
let xp = (await db.fetch(`Xp_${user.id}`)) || 1;
const level = calculateUserXp(xp); 
minxp = (level * level) / 0.01;
maxxp = ((level + 1) * (level + 1)) / 0.01;
const bar = ((xp - minxp) / (maxxp - xp)) * 650;


	if (msg.content.startsWith(prefix + 'rank')) {
		const image = await resolveImage(imageCes);

		async function shark() {
			const ctx = new Canvas(2559, 1210)

				.printImage(image, 0, 0, 2559, 1210)
        .printCircularImage(AVATAR, 500 , 550, 450)
        .setColor("aqua")
        .printRectangle( 1000 , 780 , bar , 200)



	.setTextSize(120)
	.setTextFont("sharks")
.setColor("white")
.printText(`${xp} / ${maxxp} `,1400, 700)
.printText(`${level} `,2400, 130)
.printText(user.username , 1000 , 500)





.toBuffer();

			return ctx;


		}

		msg.channel.send({
			files: [{ attachment: await shark(), name: 'canvas.png' }]
		});
	}
});



client.login(process.env.token);

