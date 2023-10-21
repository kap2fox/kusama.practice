---
title: Kusama’s external bridge
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Video Lecture

https://youtu.be/YgJqWyBaOGY

<Spoiler title="<h2 style='display: inline;' >Lesson 13. Kusama’s external bridge</h2>">

# Introduction

In previous lessons, we explored how parachains in the Polkadot ecosystem are typically based on the Substrate framework or compatible with the Ethereum Virtual Machine (EVM). Moonriver serves as an excellent example of a Substrate-based blockchain, offering compatibility with Ethereum's smart contracts and dApps. 

With Moonriver, developers can easily deploy existing Solidity smart contracts and dApp frontends on the Kusama network with minimal modifications. This unique compatibility sets Moonriver apart as a powerful tool for decentralized applications and cross-chain interoperability within the Polkadot ecosystem, making possible delivering tokens outside of Kusama network.

# Moon family

The "Moon" family of blockchains includes Moonbeam, Moonriver, and Moonbase. Moonbeam, often considered the pioneer of this family, is an Ethereum-compatible parachain on Polkadot. It provides a bridge for Ethereum developers to port their existing Solidity smart contracts to Polkadot, fostering cross-chain compatibility and enabling the deployment of decentralized applications (DApps) on the Polkadot network.

Moonriver acts as a sister network to Moonbeam and operates on the Kusama network, which is a sister network to Polkadot. Moonbeam and Moonriver have nearly identical underlying technology. Moonriver may receive new features first before they get deployed to Moonbeam. The two share a testnet called Moonbase, where new features being tested before applying to Moonriver or Moonbeam. 

As you may have realized, the main purpose of this Moon family is to help developers build or to deploy existing Solidity and Vyper-based dApps directly from Ethereum network to Polkadot ecosystem. That’s the way they solve the famous interoperability problem.

<robo-academy-note type="note">
Vyper is a programming language designed for building smart contracts on the Ethereum blockchain. It was created as an alternative to Solidity, which is the most widely used language for Ethereum smart contracts. Vyper is similar to Python and is simpler than Solidity.
</robo-academy-note>


# Interoperability. Moon’s approach

Blockchain interoperability is a major challenge faced by Web3 projects. Polkadot and Kusama tackle this issue by creating an ecosystem of parachains. On the other hand, Moonbeam and Moonriver focus on enabling interoperability through smart contracts, which are a key feature of the Ethereum network.

This approach involves the creation of so called cross-chain connected contracts, which are smart contracts that facilitate communication and interaction between different blockchains. These contracts enable the linking of functionalities across various blockchains, allowing developers and users to access assets and services from multiple blockchain networks without the need for traditional asset teleporting. They serve as a bridge for cross-blockchain communication and interoperability, making it easier for users to work with assets from different chains while maintaining a seamless application experience.

**The next generation of decentralized applications.**

Cross-chain connected applications means the cooperation of smart contracts on the "backend" of the dApps that users interact with on the blockchain. These applications are connected across different blockchains, eliminating the need to bridge assets in order to use them in any application on any connected chain.

Connected applications built on Moonriver can utilize the functionality of Ethereum and Kusama networks by exchanging messages across chains. As a parachain on Kusama, Moonriver inherently supports HRMP as a messaging transport. This native support for cross-chain messaging makes Moonbeam particularly effective in assisting dApp developers who need to support various types of assets and use cases across multiple chains.

So, basically, developers from Ethereum network can deploy new or existing dApps to the Moonriver parachain using Hardhat, Truffle, Remix, and other popular deployment tools — with little or no modifications — and gain easy access to the Kusama network. Moonriver minimizes the changes required to run existing Solidity smart contracts on the network by mirroring Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more. 

**Where to find those applications?**

In the video lesson, we explained that you can find a bridge on the Moonriver network or create your own to transfer tokens outside the Kusama network, such as to the Ethereum network.

Bridges, as well as all dApps, are available on the [downtown moonbeam](https://www.dtmb.xyz/moonriver/explore/bridges) website.

**[Downtown Moonbeam](https://www.dtmb.xyz/)** is a platform that provides a curated list of projects specifically built within the Moonbeam and Moonriver ecosystems. It offers basic information for each dApp, including website information, a brief description, and contact information. These projects are built using smart contracts that are compatible with the Ethereum Virtual Machine (EVM).

# MOVR. Moonriver native token

[MOVR](https://coinmarketcap.com/currencies/moonriver/) is the native token of the Moonriver network. 

Users can stake their MOVR tokens on Moonriver using the dApp built by the Moonbeam Foundation. The dApp works on Moonbase Alpha (for demo purposes), Moonriver, and Moonbeam. 

**What else MOVR being used for?**

1. **Supporting the gas metering of smart contract execution**

This is the process of measuring and charging for the computational effort required to execute smart contracts on the Moonbeam platform.

<robo-academy-note type="note">
In blockchain networks, "gas" is a unit that measures the amount of computational effort that it will take to execute certain operations. Each operation costs a certain amount of gas, and the total cost of a transaction (in terms of gas) is the sum of the costs of all its operations.
</robo-academy-note>

When a user initiates a smart contract, they must pay a certain amount of MOVR tokens, which is calculated based on the gas cost of the contract's operations. This mechanism ensures that resources on the network are used efficiently and prevents spam transactions.
This is similar to how Ether is used to pay for gas on the Ethereum network. The users have to pay for the computational work of validating and storing transactions, and this payment is made in the network's native token (in this case, MOVR for Moonriver).

2. **Rewarding collators for maintaining and securing network**

In the Moonbeam network, collators are nodes that gather transactions into blocks and submit these blocks to the relay chain. Just like in Polkadot or Kusama. 
To reward these collators to perform their duties, they are rewarded with MOVR tokens. Part of each block reward goes to the collators that produced the block. They then share these rewards with their delegators, considering their percental contributions towards the collator's stake. This rewarding mechanism encourages more participants to become collators, thereby enhancing the decentralization and security of the network.
Moreover, token holders can delegate their tokens to collators, adding to the collator's stake and in return, the collator shares the rewards received from producing blocks amongst all of their delegators.

3. **On-chain governance mechanism**

Moonriver's governance mechanism is designed to allow the community to guide the development and changes to the protocol. This includes proposing referenda, electing council members, voting on proposals, and more. All these actions require the use of MOVR tokens.

Moonriver governance system shares similarities with the one in Polkadot and Kusama. However, it has implemented its own version of OpenGov, referred to as Governance v2. In this system, instead of the Fellowship found in Polkadot's governance, Moonbeam has a community OpenGov Technical Committee with similar power. This committee's power in governance resides in their ability to whitelist a proposal, but only if whitelisting that proposal would protect against a security vulnerability to the network.

It also provides precompiles that interact directly with Substrate's governance-related pallets, such as the Preimage Pallet, Conviction Voting Pallet, and Referenda Pallet. These precompiles allow token holders to access functions needed to create and manage proposals, make and manage Conviction-weighted votes, and view and submit referenda, all directly from a Solidity interface.

---

# Module Conclusion

In this module, we explored the complete journey of the KSM token: from acquiring the token on an exchange using fiat currency to the ability to transfer them from the Kusama network to the Ethereum network. Now, you understand that tokens can be purchased not only on centralized exchanges like Binance but also on decentralized protocols that support non-custodial software wallets, those we mentioned in the second module of the course.

We discussed two DEX protocols in the Kusama network, Karura and Basilisk, and how they function and provide token teleportation between Kusama parachains. Moreover, we discovered that blockchains can interact with each other not only through a network of parachains but also by utilizing smart contracts - via a parachain in the Kusama network called Moonriver- EVM-compatible blockchain that allows the deployment of dApps from the Ethereum network in the Kusama network.

# Next module

In the next module we’ll get acquainted with Crust Network, where we will discover how this powerful blockchain network opens the doors to unprecedented decentralization and data management. We will examine how Crust Network operates under the hood and what opportunities it offers for creating next-generation decentralized applications and services.

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question13.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question13.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question13.3"
/>

</Spoiler>


<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="moonriver"
/>