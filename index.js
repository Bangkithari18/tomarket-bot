require("dotenv").config();
require("colors");
const readlineSync = require("readline-sync");
const {
  getToken,
  getBalance,
  playGames,
  claimPoints,
} = require("./third_party/api.js");
const { displayScreen } = require("./utility/display.js");
const { delay } = require("./utility/delay.js");

(async () => {
  displayScreen();
  console.log("⌛ Please wait...\n".yellow);

  const Login = await getToken();
  const token = Login.data.access_token;
  const balance = await getBalance(token);
  try {
    console.log(`Hi : ${Login.data.fn} ${Login.data.ln} !`.green);
    console.log(`Your balance : ${balance.data.available_balance}`.green);
    console.log(`Your ticket : ${balance.data.play_passes}`.green);
    const featureChoice = readlineSync.question(
      "Which feature would you like to use?\n1. Auto Play and Claim Game Points \nChoose 1: "
    );
    if (featureChoice === "1") {
      if (balance.data.play_passes > 0) {
        console.log("🎮 Auto playing game and claiming reward...".yellow);
        let counter = balance.data.play_passes;
        while (counter > 0) {
          await playGames(token);
          console.log("Play game in 30 second ...".yellow);
          await delay(30000);
          const randPoints = Math.floor(Math.random() * (480 - 300 + 1)) + 300;
          await claimPoints(token, randPoints);
          const newBalance = await getBalance(token);
          console.log(
            `Play game success! Your balance now: ${newBalance.data.available_balance} `
              .green
          );
          console.log(`Your ticket now : ${newBalance.data.play_passes}`);
          counter--;
          if (counter === 0) {
            console.log(`Ticket not found : ${balance.data.play_passes}`.red);
            return;
          }
        }
      } else {
        console.log(`Ticket not found : ${balance.data.play_passes}`.red);
      }
    }
  } catch (error) {
    console.log(error);
  }
})();
