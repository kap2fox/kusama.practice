---
title: 'Practice: Light a Lamp'
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Robonomics]
defaultName: Robonomics
---

The [Lights Up](https://v0.dapp.robonomics.network/#/lights-up) demo allow you to get a demo subscription, which is useful only inside demo, and test remote control of the smart lamp.

### Task

1. First, you need to add your account address to the demo subscription list. You can do this using the [@robonomics_free_rws](https://t.me/robonomics_free_rws_bot)Telegram bot.
2. Open the [dapp with demo](https://v0.dapp.robonomics.network/#/lights-up) and connect your account to it. In `Get IoT Subscription` line you should see that the subscription is active.
3. Select the desired **color** you wish to illuminate the lamp with.
4. Go through the **authentication** process in the Crust ecosystem. This authentication step serves the purpose of **storing information** of the chosen light settings for future reference. As this data is stowed away, an IPFS Hash is generated in the background.
5. After signing and sending a transaction, a **launch extrinsic** will be dispatched. This extrinsic incorporates the IPFS hash and the robot account address. In about 15 seconds the lamp's color changes accordingly.

<AccountManager>
<PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="lights_up"
          ></PracticeChecker>
</AccountManager>

<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="practice-lamp"
/>