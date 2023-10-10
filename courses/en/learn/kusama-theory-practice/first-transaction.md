---
title: NPoS tools in Polkadot
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Video Lecture

https://youtu.be/B624H4K1Fzc

<Spoiler title="<h2 style='display: inline;' >Lesson 3. NPoS tools in Polkadot</h2>">

# Introduction

We have previously delved into the history and distinctive framework of Polkadot. Now, it is time to delve even deeper. In this tutorial, we will comprehend the fundamental principles of Polkadot's consensus - NPoS, together with the functions of validators, nominators and collators, and the mechanisms employed to maintain network security and efficiency.

# The mechanics of NPoS
<robo-academy-note type="note">
Moonbeam is the only parachain in Polkadot that is fully compatible with Ethereum. This network provides multi-chain projects with access to the Polkadot ecosystem, facilitating their expansion within it.
</robo-academy-note> 

Consensus is a method for achieving agreement over a shared state. Polkadot stands apart from mainstream consensus mechanisms such as Proof of Work and Proof of Stake by using a more innovative solution called Nominated Proof of Stake. This feature allows stakeholders to participate in securing the network in two ways: as validators and **nominators**. Oh, and there are also collators. What are they?

| Role | Description | Responsibilities | Risks |
| --- | --- | --- | --- |
| Validators | They are the core of Polkadot's NPoS system. They stake their DOTs or KSMs as a bond, playing a crucial role in maintaining network integrity. | They authenticate and validate proofs submitted by collators, finalize blocks, and engage in consensus protocols with other validators. | They risk losing their staked tokens or face slashing if they act maliciously or fail in their duties. |
| Nominators | They support the network by selecting and backing trustworthy validators with their stake. | They do not participate in block validation or consensus but play an essential role in carefully choosing validators. | The risks for them are generally lower than validators, but they can still lose part of their stake if their chosen validators act maliciously or incompetently. |
| Collators | They are responsible for maintaining parachains. | They collect parachain transactions from users and generate state transition proofs for validators. | Similar to validators, they risk losing their stake if they fail in their responsibilities or engage in malicious activity. |

In simple words, NPoS is a system where people lock up or "stake" their cryptocurrency to help secure the network. There are two main roles: validators, who run computers to verify transactions and create new blocks, and nominators, who back these validators with their own staked cryptocurrency. This system is designed to be fair, secure, and efficient, allowing for a large number of participants and ensuring the network remains decentralized.

To keep the network secure, they use a variety of tools. **Polkadot.js** provides a suite of tools for interacting with the NPoS system in the Polkadot network. Here’s how it works:

## **Polkadot.js**

Interactions with the Polkadot network are facilitated by [Polkadot.js](https://polkadot.js.org/). This interface provides developers the ability to query a node and interact with the Substrate built blockchains, like Polkadot or Kusama and their parachains, using JavaScript. For example, you can use it’s API, one of the component of Polkadot.js collection, to interface with a Moonbeam node to read and write data to the network.


<robo-academy-note type="note">
Moonbeam is the only parachain in Polkadot that is fully compatible with Ethereum. This network provides multi-chain projects with access to the Polkadot ecosystem, facilitating their expansion within it.
</robo-academy-note> 

In our future city Polkadot.js serves as a multi-functional city hub or town center, where citizens come to engage with the community, participate in governance, manage their resources, etc.

Polkadot.js offers these following capabilities:

1. **Managing staking, including nominating validators.**

In this section most job by validators and nominators are done. Participation in staking starts with choosing validators you want to support. This is an important decision since it impacts your share of the staking revenue. 

2. **Participating in governance via votes and referenda.**

Since Polkadot is decentralized network, every token holder can have a vote in network governance. In the Referenda section of Polkadot.js, you can vote on existing proposals or create your own. Your vote will be weighed according to amount of tokens you have.

3. **Viewing block and transaction information.**

This can be accessed from the main page of the Explorer section. It displays the latest blocks that have been added to the blockchain, and some additional information: height, hash, parent hash, state root, and **extrinsics** root.

<robo-academy-note type="note">
In Polkadot, extrinsics represent pieces of information about transactions that come from outside the chain and are included in the blocks. They include not only regular transactions that transfer tokens from one account to another but also other types of operations, such as staking operations, governance votes, etc.
</robo-academy-note> 

4. **Interacting with smart contracts.**

Polkadot.js can interact with smart contracts deployed on the network. To use this feature, the network in question must support the necessary smart contract functionality.

5. **Sending and receiving tokens.**

Polkadot.js provides a wallet browser extension for sending and receiving tokens that allows you to participate and interact with all Polkadot features such as: **decentralized finances (DeFi)**, videogames, digital art, social media and more. It is not actually a full-featured wallet, as it relies on the Polkadot apps UI to initiate transactions. 

In the video, dedicated to this lesson, we showed an example of a transaction sent through the Rococo testnet using the Talisman wallet that we set up in a previous video. Hopefully, you have had a chance to watch it! There’s a lot more available networks on the [Polkadot.js.org/apps](http://Polkadot.js.org/apps). It includes Polkadot, Kusama, **Westend**, **Rococo** and all the networks inside them. You can choose the network you want to interact with using the drop-down menu at the top of the page. 

---

# Module conclusion

Let's summarise what we've learned from the first part of our course:

**Lesson 1 - Exploring Polkadot.** At the core of the Polkadot ecosystem lies the concept of a "heterogeneous multichain" where various blockchains, known as parachains, unite within a single network. Shared security, facilitated by validators securing the entire network, empowers parachains with a solid foundation. This concept is the brainchild of Dr. Gavin Wood, who sought to address blockchain interoperability challenges that Ethereum and other platforms grappled with.

**Lesson 2 - Polkadot & Kusama Structure.** We used the metaphor of a futuristic city to describe how the Polkadot ecosystem works. The Polkadot network itself - Relay Chain - serves as the heart of the city, ensuring shared security, consensus, and cross-chain interoperability. Parachains and Parathreads, akin to neighborhoods, leverage the Relay Chain security while pursuing their own functions. Bridges link external blockchains to this city, enriching its connections. The governance, staking, and bonding mechanisms grant power to city citizens, enabling them to shape the city's evolution. Kusama, the experimental counterpart, adds a dynamic touch, serving as a testing ground for innovative projects.

**Lesson 3 - NPoS Tools in Polkadot.** Polkadot uses a rare consensus mechanism - Nominated Proof-of-Stake (NPoS). Validators, nominators, and collators - protectors of the network -  collaboratively ensure network security and integrity by locking up their cryptocurrency. The Polkadot.js interface acts as a bustling city hub, enabling users to interact with the possibilities of Polkadot ecosystem using NPoS system, engage in governance, manage resources, view transaction data, and even interact with smart contracts.

## Next module

In our next module, we will become acquainted with **crypto-wallets**, especially made for Web3 needs, which you can create to interact with the Polkadot ecosystem. Stay tuned!

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question3.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question3.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question3.3"
/>

</Spoiler>


<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="first-transaction"
/>