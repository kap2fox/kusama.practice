---
title: "Practice: Mint token"
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, AssetHUB]
defaultName: AssetHUB
---

# Practice: Mint token

### Intro

In this practical task, you will use AssetHub on the Rococo testnet to mint your own token and then disperse them. The task will be considered successfully completed after you send your created tokens to the any 3 addresses.

### Teleporting ROC

1. Make sure you have enough ROC tokens (1 ROC is more than enough). If not, you can use [Triangle faucet](https://faucet.triangleplatform.com/polkadot/rococo) or any faucet that your can find in Internet. 
2. Select the Rococo testnet on the [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io) portal. Go to the Accounts tab and choose Teleport.
3. In `send from account` and `send to address` fields choose your account. In the destination chain field select **AssetHub**. Specify needed amount of ROC tokens and confirm the transaction.
4. Go to AssetHub in Rococo and check that the tokens teleported successfully.

### Creating assets

1. Go to the Network tab and choose Assets→Overview. In the upper right corner, press `Create` button.
2. Specify any `asset name`, `asset symbol`, `asset decimals`, `minimum balanc`, unique `asset id` and press `Next`.
3. In `admin account`, `issuer account` and `freezer account` fields select your account. Press `Create` and confirm the transaction.
4. Now you need to mint some amount tokens. In the Overview menu find your token in the list and press `Mint`.
5. For your address specify any amount of tokens, press `Mint` and confirm the transaction.

**Note**: In addition to sending your assets directly through the extrinsics, there is a convenient way to do this using the Polkadot.JS portal interface. Go to Assets→Balances menu and in the `asset to query for balances` field find your created token. Find your account with tokens and press `Send`. Prepare a transaction for sending and confirm it.

### Dispersing tokens

To distribute your tokens to several addresses at once, we suggest you use [our Disperse script](https://colab.research.google.com/drive/163Fh9wre__w2srMuwyxTGSstK4xkPNiK?usp=sharing#scrollTo=EBtoEqYs7vYA), which we have posted on Google Collab. The script will run in the Collab environment, so you only need to fill in the appropriate fields.

1. Run the first block of script to initialize the required packages for the Substrate interface.
2. In the `SUBSTRATE_ENDPOINT` block, you need specify the data that will allow you to connect to the desired parachain. In our case, it is AssetHub Rococo, so you can leave the field blank.
3. In the third block, you need to insert the seed phrase of the account from which your tokens will be sent.
4. In the `ASSET_ID` block, enter the ID of your token.
5. In the `WALLET_LIST` block, enter three addresses (in AssetHub Rococo format) separated by commas. These can be any three addresses, including any other accounts you have created.
6. For an account to be considered existing by the network, it needs to have a certain minimum number of tokens (DOT in Polkadot, KSM in Kusama, XRT in Robonomics, etc). If the account is considered non-existent, you won't be able to send your created assets to it. To address this issue, a transaction has been added to the script for the initial sending of native tokens. For comparison, the table below shows the minimum deposit in different networks.
    
    
    | Polkadot | Kusama | Rococo (and AssetHub) |
    | --- | --- | --- |
    | 1 DOT | 0.000333333333 KSM | 0.000033333333 ROC |
    
    To do this, in the `EXISTANCE_DEPOSIT` block, you need to specify the amount of native tokens (in this case ROC tokens, as we are in Rococo AssetHub) that will be equally distributed to the selected addresses. Keep in mind that you need to specify this amount in token fractions, depending on the number of zeros after the decimal point. In Rococo AssetHub, 1 ROC = 1 000 000 000 000.
    
7. In the `AMOUNT` field, you need to specify how much of your tokens will be equally distributed to the selected addresses. Keep in mind that you need to specify this amount in fractions of the token, depending on the number of decimal places you specified when creating your asset.
8. Next, you need to sequentially execute two blocks that will send your transactions. The first transaction will send ROC tokens, and the second will send your asset tokens.

<AccountManager>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="roc_create_asset" 
                question="Enter asset id of created token" >
</PracticeChecker>
</AccountManager>

<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="practice-mint"
/>