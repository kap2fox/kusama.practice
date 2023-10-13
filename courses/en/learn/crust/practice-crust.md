---
title: 'Practice: Upload file to Crust'
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [ Learn, Crust ]
defaultName: Crust
---

# Practice: Upload file to Crust

In this task, you will use the Crust services to enhance the accessibility of your previously sent IPFS file. The task
is presented in two options: sending a file to the Crust Rocky test network and to the Crust Shadow network on Kusama.
The difference is that for Crust Rocky, you can get free test tokens, while Crust Shadow will require you to have CSM
tokens in your balance.

### Using Crust Rocky

1. First you need to get test CRU tokens. Go to Crust Discord[#🚰faucet channel](https://discord.gg/d6XuBXCqxU) and send
   your account address on Crust Rocky. After few seconds, you will get tokens.
2. Open the Crust Rocky network on
   the [app portal](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc-rocky.crust.network#/storage).
3. Go to the **Storage** tab and choose Storage user. You will see the interface for storage orders.
4. Press `Place order` button. You will see order parameters.
5. Paste the CID from the previous lesson (TXT file with your address) to the `File CID` field.
6. For the `File size` field you need to calculate the size of file in bytes. You can check it in IPFS Client or
   calculate it in any other way convenient for you.
7. You can add tips for more reliable storage of your file.
8. Submit the transaction and sign it.

### Using Crust Shadow

1. Open the Crust Shadow network on
   the [Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-shadow.crust.network%252F#/).
2. Go to the **Developer** tab and choose **Extrinsics**→**Submission**.
3. For your account, choose `xstorage->placeStorageOrder` in the `submit the following extrinsic` field.
4. Paste the CID from the previous lesson (TXT file with your address) to the `cid` field.
5. For the `size` field you need to calculate the size of file in bytes. You can check it in IPFS Client or calculate it
   in any other way convenient for you.

   **Warning**: The file size determines how many tokens will be spent on its pin. If you specified a smaller size, then
   the file will probably not be pinned. And if you specified a larger size, you will spend extra tokens.

6. Leave the `currencyId` field with `SelfReserve` option.
7. Submit the transaction and sign it. The task will be considered complete once a successful transaction appears on the
   Crust Shadow network at [Subscan](https://shadow.subscan.io/).

<AccountManager>
   <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="crust_rocky_order"
              question="Enter ipfs cid(Qm...) of pinned .txt file"
          ></PracticeChecker>
    <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="crust_shadow_order"
              question="Enter ipfs cid(Qm...) of pinned .txt file"
          ></PracticeChecker>
</AccountManager>

<FeedbackBlock
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="practice-crust"
/>