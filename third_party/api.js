const axios = require("axios");

async function getToken() {
  const { data } = await axios({
    url: "https://api-web.tomarket.ai/tomarket-game/v1/user/login",
    method: "POST",
    data: {
      init_data: process.env.DATA,
      invite_code: "0000337d",
    },
  });

  return data;
}

async function getBalance(token) {
  const { data } = await axios({
    url: "https://api-web.tomarket.ai/tomarket-game/v1/user/balance",
    method: "GET",
    headers: { Authorization: token },
    data: null,
  });
  return data;
}

async function playGames(token) {
  const { data } = await axios({
    url: "https://api-web.tomarket.ai/tomarket-game/v1/game/play",
    method: "POST",
    headers: { Authorization: token },
    data: {
      game_id: "59bcd12e-04e2-404c-a172-311a0084587d",
    },
  });
  return data;
}

async function claimPoints(token, points) {
  const { data } = await axios({
    url: "https://api-web.tomarket.ai/tomarket-game/v1/game/claim",
    method: "POST",
    headers: { Authorization: token },
    data: {
      game_id: "59bcd12e-04e2-404c-a172-311a0084587d",
      points: points,
    },
  });
  return data;
}
module.exports = {
  getToken,
  getBalance,
  playGames,
  claimPoints,
};
