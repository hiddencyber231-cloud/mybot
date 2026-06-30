const TelegramBot = require('node-telegram-bot-api');

// Replace with your BotFather token
const token = '8843799527:AAEuh2eqc6LdgDpsdj1wYgbye-D-dLTo1cc';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `👋 Welcome!

Choose a command:

/help - Help
/about - About this bot`
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "This is the help section.");
});

bot.onText(/\/about/, (msg) => {
  bot.sendMessage(msg.chat.id, "This bot was built using Node.js in Termux.");
});

console.log("Bot is running...");
