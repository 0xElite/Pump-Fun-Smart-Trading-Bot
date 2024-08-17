# Pump.fun Solana Trading and Sniping Bot

![JavaScript](https://img.shields.io/badge/language-JavaScript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=white)
![mjs](https://img.shields.io/badge/language-mjs-%2320232A?style=flat-square&logo=javascript&logoColor=white)

![photo_2024-08-17_16-16-24](https://github.com/user-attachments/assets/801b4d9c-3029-4082-b076-d6cbd03cf329)

## Overview

The **Pump.fun Solana Trading and Sniping Bot** is a sophisticated tool designed to automate trading and sniping of new token launches on the Solana blockchain. This bot uses advanced strategies to optimize trading decisions based on market cap changes and bonding curve dynamics,offering an automated solution that efficiently manages trades, monitors market conditions, and executes strategies to optimize profits while minimizing risks.

## Trading Strategy

The bot’s trading strategy is carefully designed to ensure optimal performance in a dynamic market:

- **Initial Buy**: The bot scrapes Pump.fun to identify new token pairs with favorable bonding curves.
- **Monitoring**: Once a token is bought, the bot monitors the market cap and bonding curve progress.
- **Profit Targets**:
  - Aims to take profit at a 25% increase, and again at another 25% increase.
  - Sells 50% of the tokens at the first 25% increase, and 75% of the remaining tokens at the next 25% increase.
- **Stop Loss**: The bot will sell all tokens if the market cap falls by 10%.
- **Bonding Curve**: Sells 75% of the tokens if the bonding curve reaches a critical level, keeping 25% as a moon bag.
- **Timing**: Resets the timer if the price goes up and monitors the trade for a set period, adjusting actions based on market conditions.

## Key Features

- **Automated Trading**: Automatically identifies and trades new token pairs on Pump.fun using predefined strategies.
- **Market Monitoring**: Continuously monitors market cap and bonding curve progress to inform trading decisions.
- **Profit Optimization**: Implements profit targets and stop-loss mechanisms to maximize gains and minimize risks.
- **Customizable Settings**: Users can configure environment variables and trading parameters to suit their specific needs.

## Requirements
- **Node.js**

## Installation & Usage
Follow these steps to set up the Pump.fun Solana Trading and Sniping Bot:

### 1. Clone the Repository

Clone the repository to your local machine:

```sh git clone https://github.com/0xElite/Pump-Fun-Smart-Trading-Bot.git ```

```sh npm install dotenv axios @solana/web3.js @solana/spl-token selenium-webdriver fs bs58 blessed blessed-contrib ```

## PumpPortal.fun API Key 

To interact with the Pump.fun API, you need to obtain your API key:
Follow the instructions to generate your API key. ' https://pumpportal.fun/trading-api/setup '
Save this API key as it will be required in the .env file.

## Config 'convert_key.js'

- Replace "YOUR_PRIVATE_KEY_HERE" with your actual Base58 encoded private key.
- Run the script to generate your Solana wallet JSON file:

```sh node convert_key.js ```
A file named solana_wallet.json will be created in your project directory. This file will be used for signing transactions on the Solana blockchain.

## Configure Solana CLI 

Configure your Solana CLI with the following commands:
- ```sh solana config set --url https://api.mainnet-beta.solana.com ```
- ```sh solana config set --keypair /path/to/your/solana/wallet.json ```

## Set up Environnement Variables
Edit th "example.env" to ".env" 
.env file in the root directory of the project and configure the following variables:

- API_KEY=PUMP Portal API Key
- SOLANA_WALLET_PATH=./solana_wallet.json
- MINIMUM_BUY_AMOUNT=0.015
- MAX_BONDING_CURVE_PROGRESS=10
- SELL_BONDING_CURVE_PROGRESS=15


## Run 

Start the trading bot using this command:
```sh node script.mjs ```
Then press 'C' for start the Bot 

To sell all your SPL tokens, run the following command:
```sh node sell.js ```
This will execute the sale of all SPL tokens, following the stop-loss and profit-taking strategies.


### Disclaimer
Use this tool at your own risk. Cryptocurrency trading involves significant risk and can result in the loss of your capital. Always conduct thorough research before making any trading decisions.

