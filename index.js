
// const { clientId, guildId, token, publicKey } = require('./config.json');
require('dotenv').config()
// const APPLICATION_ID = process.env.APPLICATION_ID 
const TOKEN = process.env.TOKEN 
// const PUBLIC_KEY = process.env.PUBLIC_KEY || 'not set'
// const GUILD_ID = process.env.GUILD_ID 
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');



const express = require('express');


const app = express();

app.get('/', async (req,res) =>{

  // Create a new client instance
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
  // When the client is ready, run this code (only once).
  // The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
  // It makes some properties non-nullable.
  client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  });

  // メッセージ受信時の処理
  client.on('messageCreate', message => {
    // メッセージがBot自身のものだった場合は無視する
    console.log('------------message------------')
    console.info(message);
    if (message.author.bot) return;

    // メッセージが「おはよう」という内容だった場合に返信する
    if (message.content.toLowerCase() === 'おはよう') {
        message.reply('おはようございます！');
    }
  });

  // Log in to Discord with your client's token
  client.login(TOKEN);
  return res.send('Follow documentation ')

})


app.listen(8999, () => {

})

