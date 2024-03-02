require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds
    ]
})

client.on('ready', () => {
    console.log(`You have power over your mind — not outside events. Realize this, and you will find strength.`);
  });

  client.login(process.env.TOKEN);