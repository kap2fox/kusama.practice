---
title: Polkadot & Kusama structure
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Video Lecture

https://youtu.be/n0BuV3-PPn4

<Spoiler title="<h2 style='display: inline;' >Lesson 2. Polkadot & Kusama structure</h2>">

# **Introduction**

Now that we have reviewed the core of the Polkadot ecosystem, we can delve into its complex mechanics and its contribution to enhancing security and connectivity of the parachains within the network.

Just as understanding the anatomy of a human body helps us understand its functions, grasping the structure of Polkadot ecosystem will help us comprehend how they operate. To get a better understanding of this, let's picture Polkadot as a flexible futuristic city.

# **Polkadot Ecosystem as Future City**

## Relay Chain

The heart of our city. It is a main highway that keeps everything in Polkadot connected and running smoothly. The Relay Chain is responsible for the network's shared security, consensus, and cross-chain interoperability.

Technically speaking, Relay Chain is a modular blockchain, built with [Substrate](https://www.parity.io/blog/how-to-build-your-own-blockchain-using-parity-substrate/) - a framework, which was created especially for multichain future. In Polkadot it serves two main functions: providing security for the network and enabling cross-chain interoperability.

| Security | Interoperability                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Validators** stake their tokens (DOT or KSM)<br/> as collateral to validate proofs from **collators**,<br/> participate in the production of new blocks,<br/> and confirm the validity of transactions. <br/>This collective security model allows all <br/>**parachains** and **parathreads** to benefit <br/>from the security of the Relay Chain,<br/> reducing the risk of attacks<br/> and enhancing trust in the network. | [Horizontal Relay-routed Message Passing (HRMP)](https://wiki.polkadot.network/docs/learn-xcm-transport) <br/>protocol provides cross-chain interoperability <br/>in Relay Chain, while the more advanced<br/> [Cross-Chain Message Passing protocol (XCMP)](https://wiki.polkadot.network/docs/learn-xcm) is still<br/> under implementation.<br/> HRMP allowing parachains to exchange messages<br/> directly with each other via the Relay Chain. |

Validators can be thought of as the police officers of this city. Their job is to ensure the legitimacy of all transactions occurring on the network. They validate proofs (summaries or representations of the block and its transactions) from collators (those who collect parachain data). By doing so, they help secure the Relay Chain and all the chains connected to it.

The network's participants nominate validators with their tokens, and the individuals with the most votes become validators. This system ensures that the network is fair and not controlled by a selected few people.

## **Understanding Parachains and Parathreads**

### **Parachains**

Branching off the main highway, we have the parachains. Imagine them like unique neighborhoods, each with their own vibes and specialties. Parachains benefit from the security and interoperability of the Relay Chain, but they can also do their own thing -  they could be a residential area, a business district, a park or a shopping center that serve different purposes. They also can have their own tokens, rules, handle their own transactions and even smart-contracts.

Each parachain **connected to the Relay Chain via special nodes called validators**. They are responsible for validating the information produced by the collators of each parachain. Once validated, these transactions are included in the blockchain.

### **Parathreads**

Parathreads are like pop-up stores or food trucks. They are similar to parachains, but they don't have permanent slots on the Relay Chain. They basically rent space when they need it, making them a flexible and cost-effective option for less active blockchains.

Parathreads are a proposed feature for the Polkadot network and, if implemented, would function similarly to parachains but with a key difference. Rather than holding a permanent slot in the Relay Chain, parathreads would operate on a pay-as-you-go basis, connecting to the Relay Chain as and when needed. This proposed model would be a cost-effective option for projects that may not require continuous connectivity to the network.

In theory, just like parachains, parathreads would have their own tokens and specific functionalities. They would also use collators to gather transactions and produce proofs for the validators on the Relay Chain. However, they would only pay for the specific times they are included in the Relay Chain.

## **Bridges: Connecting Different Networks**

Not every blockchain can become a parachain of Polkadot or Kusama network. To be a part of it, blockchains must meet two specific criteria:

- **Be substrate-based or be compatible.** Polkadot and Kusama are built on a Substrate framework. To become a parachain, the blockchain must also be built on Substrate or at least be compatible with it.
- **Adopt a shared security model.** Potential Parachains need to adopt Polkadot or Kusama's shared security model, which means they don't need their own set of validators or miners to secure their network. Instead, they rely on Polkadot or Kusama's validators.

If a blockchain doesn't meet these criteria, such as having a different consensus mechanism or not being built on Substrate, then we need to **bridge** them.

In our future city, we can imagine bridges… as actual bridges allowing a free flow of goods and supplies between our city and neighboring cities, i.e., external blockchains like Ethereum or Bitcoin. These blockchains cannot become parachains because they use different consensus mechanisms and have their own unique architecture, community, governance models, etc. Becoming a parachain would mean giving up sovereignty as they would have to conform to Polkadot's consensus and governance model.

Bridges make it possible for such external networks to interact and communicate with Polkadot or Kusama network without having to become parachains.

## **DOT and KSM: Governance, Staking, & Bonding**

### **Governance**

Owning DOT and KSM is equals to having voting tickets in our city council. If you have them, you can participate in deciding how the city should evolve. The more tokens you have, the more you can say. For example, token holders can vote on network upgrades or approve funding for some projects, just like this course. Imagine having the power to vote on whether our city gets a new park, or how high the buildings can be? This concept of governance system is very relevant to how Decentralized Autonomous Organization (DAO) operate, however, they are not strictly considered DAOs due to elements of centralized development.

With recent updates, Polkadot gone even more democratic with its [OpenGov](https://polkadot.network/features/opengov/) model, which is giving more decision-making power to average DOT or KSM token holders. A few key points about how it works:

1. In the network there are no first-class citizens, and no single authority or group makes decisions. All DOT or KSM holders can make decisions and changes to the network to its treasury expenditures.
2. The new expert body of network, which has replaced council, the fellowship, provides technical expertise but has no hard power over the network. It can declare some proposals on bug fixes or identifying malicious ones.
3. Unique mechanism allows for multiple referenda to run simultaneously, that leads to faster decision-making without compromising security.
4. The main network and all connected parachains are able to upgrade without hard forks, almost seamlessly.

### **Staking**

Every DOT or KSM holder can lock up his tokens to validate transactions (or nominate someone else to do so). In return for staking, and by thus helping secure the network, staker earns reward. This is like your way of contributing to the city’s security. By staking your tokens, you’re saying “I trust in this city, and I’m willing to put my tokens on the line for it”. And the city rewards you for that trust. If you’re a validator, you can even participate in the creation of new blocks and check transactions, just like being part of the city council. 

### **Bonding**

This is what you do when you want to add a new building (or parachain) to our city. You bond (or lock up) your DOT or KSM tokens for a certain period to secure a slot for your parachain. This is like putting down a deposit on a piece of land where you want to build your own skyscraper. Once the lease is up, you get your deposit back.

In addition to bonding tokens for parachain slots, DOT and KSM holders can also bond their tokens for auctions, where they can participate in the auction of other parachain slots. This is similar to buying a plot of land with a building already on it. The tokens are locked up for a certain period, and if the auction is unsuccessful, the tokens are returned. In the next lesson, we will explore the mechanisms of validators and collators in more detail, and how they work together to secure the network and enable cross-chain communication.

## Kusama network

Kusama can be envisioned as the Burning Man festival to Polkadot's polished NYC. As explained in lesson 1, Kusama shares the vast majority of Polkadot’s underlying technologies, including all the network components, such as parachains connected to the Relay Chain, NPoS consensus, on-chain governance, etc. but with different purposes:

- **Pre-production testing field**

Polkadot is the primary network for enterprise-level applications and transactions that require security and stability, while Kusama thrives on playful experimentation. Kusama serves as a playground where developers can test new projects and technologies in a fully decentralized environment before implementing them on Polkadot. It can be thought of as somewhere between a "mainnet" and a "testnet".

- **Nurturing new projects**

Similar to how the Burning Man festival nurtures emerging artists and performers, Kusama provides a nurturing environment for newer, less-established teams. Kusama has a lower barrier to entry for developer teams that wish to deploy as a parachain, and low bond requirements for validators and parachains. These teams can iterate on their technology and business models, deploying parachains on Kusama's lower-stakes platform (minimum stake for Kusama is 0.1 KSM, while it is 250 DOT for Polkadot). This approach enables them to build a starting user base and establish their presence within the community. As these projects mature, they can seamlessly transition to Polkadot, where they can further thrive as established businesses.

- **Innovations and experiments**

Kusama is also a platform for pioneering governance models, incentive structures, and even DAOs. The network becomes a canvas for ambitious experiments. The Kusama Treasury acts as a capital base for testing novel incentive systems, while the engaged community, driven by their passion for exploration, contributes to the development of cutting-edge governance mechanisms.

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question2.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question2.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question2.3"
/>

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Practice: Install Wallet</h2>">

In this small practical task, you will learn how to install and create a wallet designed to work with the Polkadot and Kusama ecosystems.

All wallets operate on the same principle: generating a associated pair of public and private keys. The public key acts as your public address for identification, while the private key authorizes access to manage your account and perform any actions on its behalf. Losing access or compromising the private key results in the loss of tokens without the possibility of recovery.

It is important to understand whether you have full access to the private key or not. For example, if you use centralized crypto exchanges, you can still manage your crypto assets, but you do not have access to the private key associated with them. Only the administration of the service has access to the key, and at any time can terminate your service. Such wallets are called **custodial wallets**, as opposed to wallets where you have access to the key — **non-custodial wallets**.

<robo-academy-note type="warning" title="Warning">
  It is ALWAYS recommended to use non-custodial wallets.
</robo-academy-note>

There are many different applications for non-custodial wallets, such as browser extensions, mobile apps, and even physical devices. They can also be divided into two types: **hot** (having access to the Internet) and **cold** (having limited or no access to the network). For example, extensions and mobile apps are considered hot, while writing down your private key on paper would be considered a cold wallet.

In any case, almost all wallet applications during the creation phase will ask you to write down **a seed or mnemonic or recovery phrase**, consisting of a set of random words. This is done so that users can conveniently restore their wallet, instead of having to use a long set of numbers and letters that consist the private key each time. You can think of the seed phrase as a private key, just written in a more convenient format.

<robo-academy-note type="warning" title="Warning">
  Always securely store your seed phrases.
</robo-academy-note>

## Task

1. Download and install a wallet application. Different wallet options are available for Polkadot and Kusama (see [here](https://wiki.polkadot.network/docs/wallets-and-extensions)). All of them provide basic functionality (wallet creation, transaction sending), but some advanced features of the ecosystem may not be available. In our course, we will use [Talisman wallet](https://www.talisman.xyz/), which works within the browser.
2. Create a wallet. The application will ask you to create a strong password for it, which will be used for quick access to the wallet from this application.
3. Securely write down and save the seed phrase for your wallet.

<AccountManager>
    <PracticeChecker practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task" taskId="create_wallet"></PracticeChecker>
</AccountManager>

</Spoiler>

<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="ecosystem-explained"
/>