const telegramBot = require("node-telegram-bot-api");
require("dotenv").config();

//GET TOKEN FROM BOTFATHER BOT IN TELEGRAM APP
const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, { polling: true });

//GET API'S FROM API DOCSUMENT OF TELEGRAM WRBSITE
bot.on("message", (message) => {
  let chat_id = message.from.id;
  bot.sendMessage(chat_id, `hello ${message.from.first_name}`);
  //all middlewares or functions or you want do with user
});
