# Tomarket Bot

## Description

Tomarket Bot for Auto playing game

# Table of Contents

- [Example Data](#ex-data)

# Warning

All Risks are borne by the user!

## Features

- **Auto Play and Claim Game Points**: Play games and claim game points automatically.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   https://github.com/Bangkithari18/tomarket-bot.git
   ```

2. **Navigate to the project directory:**

   ```bash
   tomarket-bot
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Configuration

1. **Create a `.env` file** in the root directory of the project.

2. **Add your `data` to the `.env` file**. Example format:

   ```env
   DATA=userxxxxxx
   ```

   - To find your `data`, follow these steps:

     1. Open [Web Telegram](https://web.telegram.org) in your browser.
     2. Open the [Tomarket Bot](https://t.me/Tomarket_ai_bot/app?startapp=0000337d).
     3. Open DevTools (right-click on the page and select "Inspect" or press `F12`).
     4. Go to the "Application" tab, then "Session Storage", and choose `https://mini-app.tomarket.ai`.
     5. Find `SourceTarget`, copy its value.
     6. Go to [UrlDecoder](https://www.urldecoder.org/) and paste and click decode
     7. Copy from `user= to hash=` [Example Data](#ex-data)

## Example Data

```
user=%7ajgshagsfirst_namfdfdss%%2last_name%22%3A%aknah%22username%22%3A%22Bafaefagfa%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=59302567161adfsad54463795&chat_type=sender&start_param=frens&auth_date=17253223029059&hash=3116344429fc5e299d04eekhsodksndjs96857sdsdsds
```

### Running the Bot

To start the bot, run:

```bash
node index.js
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
