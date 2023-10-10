---
title: "Practice: First Transaction"
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Practice: First Transaction

In this practical task, you will need to execute your first transaction using test tokens on the Rococo testnet. The task will be considered successfully completed when the transaction is executed successfully and the ROC tokens are transferred to the specified address.

### Task

1. Go to the [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io) portal and select the Rococo testnet from the dropdown list in the top left corner.
2. Approve the connection of your account to the portal via your wallet application.
3. Go to the Accounts tab, choose your added account and copy the account’s address in the Rococo network format.
4. Get any amount of ROC tokens using a faucet. Your can use [Triangle faucet](https://faucet.triangleplatform.com/polkadot/rococo) or any faucet that your can find in Internet. 

<robo-academy-note type="warning" title="Warning">
  Always be careful when dealing with external sites and your crypto assets. Never share your private keys and seed phrases.
</robo-academy-note>
    
5. Return to the Accounts tab on the Polkadot.js portal to make a transaction. Click Send, paste the following address into the `send to address` field:
    
<LessonCodeWrapper language="json" noLines>
  GkMByX2YdJa8USs4NJLzqYnzB2mTLotCuHWhs4bF9Ht5eio
</LessonCodeWrapper>

and specify any amount of ROC tokens. The address will change its format to Rococo format.

6. Press the `Make Transfer` button and confirm the transaction in your wallet application.

<AccountManager>
    <PracticeChecker practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task" taskId="send_roc_tx"></PracticeChecker>
</AccountManager>


<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="practice-transaction"
/>