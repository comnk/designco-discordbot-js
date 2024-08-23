const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.DISCORD_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
console.log(token);

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);