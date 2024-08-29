# Tomarket Bot

## Description

Auto farm ticket

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
   cd tomarket-bot
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Configuration

1.  **Create a `.env` file** in the root directory of the project.

2.  **Add your `data` to the `.env` file**. Example format:

        ```env
        QUERY_ID=userxxxx
        ```

        - To find your `data user`, follow these steps:

               1. Open [Telegram App](https://web.telegram.org) in your browser.
               2. Open settings
               3. Open Advance scroll down
               4. Open Experimental settings
               5. Find Enable webview inspecting
               6. Close Telegram and open again
               7. Open the [tomarket Bot](https://t.me/Tomarket_ai_bot/app?startapp=0000337d).
               8. Open DevTools (right-click on the page and select "Inspect").
               9. Go to the "Console" tab
               10. Copy [data](#how-to-get-data) paste and click enter, if you show data copied !
               11.Go to `.env` and paste to QUERY_ID=`USERXXXXX` you can replace `USERXXXXX`

## How To Get Data

```javascript
copy(
  decodeURIComponent(sessionStorage.SourceTarget)
    .split("#tgWebAppData=")[1]
    .split("&tgWebAppVersion=")[0]
);
console.log("data copied !\npaste ctrl + v");
```

### Running the Bot

To start the bot, run:

```bash
node index.js
```

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
