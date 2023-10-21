---
title: BSX style Liquidity
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Video Lecture

https://youtu.be/cua7KHSGOHg

<Spoiler title="<h2 style='display: inline;' >Lesson 12. BSX style Liquidity</h2>">

# Introduction

Continuing the topic of using decentralized non-custodial exchanges, we would like to tell you about another liquidity protocol that acts as a cryptocurrency exchange platform between Kusama parachains - Basilisk. Let's see for what purposes this platform is better suited, and what are the general differences from the previously discussed Karura.

# The way Basilisk provide liquidity

Basilisk is a liquidity protocol built for the Kusama ecosystem. Its mission is to enable liquidity for both fungible, and non-fungible tokens through its platform - [bsx.fi](https://bsx.fi/). 

## Fungible tokens swap

Basilisk enables fungible assets to bootstrap liquidity by choosing the AMM model which they find the most convenient. The first version of AMM’s comes with an implementation of Snek Swap (XYK) [](https://docs.bsx.fi/product_snek_swap)pools which allow users to buy and sell tokens, or to become a liquidity provider and earn rewards generated from trades.

### XYK pools explanation

There are pure mathematics in those XYK pools, but, just to keep things simple, we’ll try to explain them in words.

Imagine you have a big jar, and you want to trade one type of token for another. You put some of Token A into the jar, and you also put some of Token B into the same jar. Now, this jar represents a liquidity pool for trading these two tokens. 

When someone wants to make a trade, they take some Token A out of the jar and put some Token B back in (or vice versa). The trade happens automatically, based on a simple rule: the amount of Token A they take out multiplied by the amount of Token B left in the jar should equal the constant value we talked about earlier.

As more people make trades, the price of Token A compared to Token B in the jar can change. When lots of people want Token A, its price in the jar goes up. If more people want Token B, its price in the jar goes up instead.

So, XYK liquidity pools work by keeping a balance between two tokens in a jar, and the price of each token adjusts automatically based on how much people want to trade them. It's like a seesaw – when one side goes up, the other goes down, but the total weight stays the same. This system makes trading easy and fair for everyone in the pool.

Here are the XYK pools available in Basilisk atm:

1. **BSX/KSM**
2. **KSM/TNKR**
3. **TNKR/BSX**
4. **BSX/USDT**
5. **KSM/XRT**
6. **BSX/aUSD**
7. **BSX/XRT**
8. **KSM/aUSD**

## **NFT marketplace**

For NFT selling Basilisk features [KodaDot](https://kodadot.xyz/) - an open-source NFT marketplace built on the Polkadot network, operating on Kusama network. KodaDot currently supports trading NFTs across 9 different standards on 6 different Polkadot chains. It uses KSM tokens for interaction with platform.

At a later date, with the support of KodaDot’s UI the developers of Basilisk promise to update their marketplace, where besides minting and listing NFTs, users will also have an ability to set a royalty fee (a percentage of every trade goes to the owner of the fee), and to place an offer for non-listed NFTs. Apart from that they are developing a mechanism which will allow users to flip their NFTs using auctions - English, Top up and Candle auctions.

Basilisk is an actively developing and growing project, promising a lot of fresh new features for Web3. Join their live roadmap and check what has been done and what is about to be done irl - [Basilisk features roadmap.](https://www.notion.so/Basilisk-Features-Roadmap-External-d70cd8f064634bdfb547726dc57a2b2e?pvs=21)

<LessonImages src="kusama-theory-practice/lesson12-diagram.png" alt=""/>

# Cross-chain transferring

Just like Karura, Basilisk enables cross-chain teleport of tokens between Kusama parachains via HRMP protocol. Supported chains are: Kusama, Karura, Tinkernet, Statemine, Robonomics, Basilisk.

The distinctive feature of Basilisk is that you don't need a native network token to interact with DEX and pay transfer fees - the platform takes fees from the tokens involved in the transaction. However, the BSX token is used for governance and voting for different purposes.

You can connect your Talisman wallet to interact with Basilisk parachain and transfer tokens. 

Note that if you have not used this network before, and have not sent tokens there, for example from the Karura or Kusama network, you will have a zero balance. The reason for that is even if you have one wallet linked to different networks, the same tokens are stored in one network until you send them to another network. In the video lesson we have shown the process of teleporting KSM tokens from the Kusama network to the Basilisk network to exchange them for the XRT tokens that we need to continue the course. In Karura, for example, no liquidity pool of KSM/XRT.

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question12.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question12.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question12.3"
/>

</Spoiler>


<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="basilisk"
/>