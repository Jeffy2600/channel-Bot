const { Client, Intents } = require('discord.js');
const winston = require('winston');

// กำหนดค่า log
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// สร้าง client และ login
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  logger.info('Bot is ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('Pong!');
  }
});

// จับข้อผิดพลาด
client.on('error', error => {
  logger.error('Error occurred:', error);
});

