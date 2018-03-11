/* jshint ignore:start */
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;
const client = new TelegramBot(token, {
    polling: true
});


client.on('message', async message => {
    //I HATE THIS SHIT PLEPLE PLEE
    if (message.text === `${prefix}start`) {
        client.sendMessage(message.chat.id, "Chào bạn :3 mình có thể giúp gì không ạ")
    }
    if (message.text === `${prefix}ping`) {
        client.sendMessage(message.chat.id, "Pong!!");
    }

});