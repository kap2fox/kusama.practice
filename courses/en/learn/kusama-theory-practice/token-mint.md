---
title: How to mint your own token?
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Video Lecture

https://youtu.be/c54NYf36T1U

# Lesson 7. Minting tokens in AssetHub

# **Introduction**

Welcome back, members of the Polkadot spaceship!🚀 We have just finished the second module of the Polkadot course, where we got acquainted with the world of crypto-wallets, specifically those made for the Polkadot ecosystem or that fit perfectly with it, ensuring that your digital treasures are always at your fingertips with a user-friendly experience.

This time, we will talk about the treasures themselves, and what’s important - not those you can buy, but those you can create yourself! Today, we shift our focus to the assets that can be created and managed in Polkadot & Kusama via **AssetHub**, a revolutionary system parachain that was made for creating and managing both fungible and non-fungible tokens (also known as NFTs) in Polkadot ecosystem.

# Tokens matter: utility & security

First of all, let's talk about tokens. Tokens are a major part of the crypto-world. Apart from coins, like Bitcoin or Ether, tokens are built on existing blockchain platforms and derive their value from the services, utilities, or assets they represent. Tokens can be used to access specific features, interact with dApps, facilitate transactions, and even represent ownership of real-world or digital assets.

Tokens are at the heart of many blockchain ecosystems, including Polkadot. However, not all tokens are created equal. There are two primary types of tokens you should know about: **utility tokens** and **security tokens**. Let's briefly touch on these concepts:

- **Utility Tokens**
    
    Utility tokens provide access to a specific service or product within a network. Think of them as keys that unlock certain features. For example, if you have a utility token within a gaming platform, you might be able to access special in-game items or features.
    
    Utility tokens are not typically considered investments. Their value is tied to their usability and demand within the ecosystem, rather than any potential for future financial returns.
    
    **Example:** [MANA](https://coinmarketcap.com/ru/currencies/decentraland/) is the utility token of the Decentraland virtual world. It allows users to purchase and trade virtual land, digital assets, and services within the platform.
    
- **Security Tokens**
    
    Security tokens represent ownership in an asset or entity and often involve investments. They are subject to regulatory requirements, as they are similar to traditional securities.
    
    Unlike utility tokens, security tokens often come with the expectation of financial returns, such as dividends or capital appreciation. Their value can be influenced by the success and profitability of the underlying asset or venture. Security tokens allow investment in any asset that already has value, such as real estate, a car, or corporate stock.
    
    **Example:** Companies often launch security tokens for fundraising. An example of this is **[Props](https://coinmarketcap.com/link/currencies/props)**, a token for accredited and non-accredited investors under Reg CF in the US via a Token Debt Payable by Assets (DPA). It has raised $1.07 million from 794 investors.
    

In fact, the majority of token creators do not want their tokens to be classified as security tokens due to the politics of the SEC (The United States ***Securities and Exchange Commission)***. The reason for that is security tokens are subject to the same rules and regulations as traditional securities. This means that they must comply with securities laws and regulations, which can be complex and costly. Utility tokens, on the other hand, are not subject to securities laws and regulations and are not considered securities.

AssetHub mainly focuses on utility tokens since they enable users to hold utility within specific applications or ecosystems. This makes it easier for developers to innovate and for users to engage with various platforms.

# **AssetHub**

In 2021, Parity Technologies, the company behind Polkadot, decided to roll out a brand new common-good parachain designed to allow users of the Polkadot ecosystem to place their own tokens on the network. A slot on the network for this parachain was granted by governance rather than being auctioned off as in other networks. In the new network called AssetHub (former Statemint and Statemine), users could mint their fungible or non-fungible token by providing collateral in the form of the network's own cryptocurrency (DOT or KSM). 

<robo-academy-note type="note">
Common-good parachain is a parachain designed to serve the community’s collective interests, offering services that benefit everyone, much like a public utility.
</robo-academy-note>

## Fungible & Non-Fungible tokens

Fungible assets are interchangeable, which means one unit is equivalent to any other unit to claim the underlying item. The Asset Hub represents fungible assets in the Assets pallet. This pallet presents a similar interface for those familiar with the ERC20 standard. However, the logic is encoded directly in the chain's runtime. As such, operations are not gas-metered but benchmarked upon every release, leading to efficient execution and stable transaction fees.

Unlike fungible assets, the particular instance of a [non-fungible asset (NFT)](https://wiki.polkadot.network/docs/learn-nft) has a separate meaning from another instance of the same class. The Asset Hub represents NFTs in the [Uniques and NFTs pallets](https://wiki.polkadot.network/docs/learn-nft-pallets).

Similar to the Assets pallet, this functionality is encoded into the chain. Operations are benchmarked before each release instead of any runtime metering, ensuring efficient execution and stable transaction fees.

## Why would i need my own token?

That’s a nice question you got. Well, imagine you're an individual with some groundbreaking idea. You're an artist, a game developer, an entrepreneur, or simply someone bursting with creativity, searching the way to monetize their work. Lucky for you, AssetHub allows you to turn your creations into digital assets. Your art can now be owned, traded, and appreciated in the Polkadot ecosystem, opening up new avenues for recognition and revenue in an upcoming web3 future:

- **You're a game developer**. AssetHub becomes your virtual playground. You can create **utility** tokens that serve as in-game currency, unlocking special features, items, or levels.
- **You’re a dApp developer**. You can create tokens that power your platforms. Whether it's a decentralized marketplace, a voting system, or a social media network, tokens can be designed to facilitate interactions, incentivize participation, and ensure smooth operations.
- **You’re entrepreneur or a startup owner**. You can tokenize assets traditionally considered illiquid, such as real estate or artworks. This allows fractional ownership and makes these assets more accessible to a broader range of investors. **Security** tokens can also represent ownership in ventures, providing a new way to invest.
- **You’re leader of a community project**. Tokens can serve you a powerful tool for building and nurturing communities. By creating tokens, you can reward contributors, incentivize active participation, and foster a sense of ownership. Members can earn tokens for their contributions, which can then be used within the ecosystem or exchanged for other assets.

Asset creation on Polkadot isn't limited to predefined categories. You have the freedom to craft tokens that cater to specific niches and user needs. Whether it's personalized membership tokens, event tickets, or loyalty points, the possibilities are really only limited by your creativity and needs.

## Requirements for creating a token in AssetHub

AssetHub is available for Polkadot users on both the Polkadot and Kusama relay chains, as well as on the testnets Westend and Rococo. Anyone on the network can create assets on the Asset Hub as long as they can reserve the required deposit of 10 DOT and around 0.201 DOT for the metadata. When you deploy a new token on the network, it can either be sufficient or non-sufficient. What does it mean?

To possess a non-sufficient asset within your account, the account must exist on the blockchain and hold a balance in the native asset that is at least equal to the **[Existential Deposit (ED)](https://support.polkadot.network/support/solutions/articles/65000168651)**. For example, on Polkadot AssetHub, this would require a balance of 0.1 DOT, while on Kusama AssetHub, it would be 0.000003333 KSM. Notably, these existential deposits are 10 times smaller compared to those on the Relay Chains.

On the other hand, a sufficient asset, such as Tether (USDT), does not require the receiver account to hold an existential deposit in the native token (DOT or KSM) to receive the asset.

<robo-academy-note type="note">
Existential Deposit (ED) is the minimum amount of tokens that a wallet must hold on the relay chain to be considered "active." This limit helps maintain network performance and reduces fees.
</robo-academy-note>

If you want to practice creating your own token, you can do so on a testnet by using test tokens, which can be easily obtained through a faucet’s. We have demonstrated the entire process in our video lesson.

# Extra

**More about “Statemint”, later AssetHub** - [https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/](https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/)

**How to Create, Transfer and Destroy Fungible Tokens on Polkadot** - [https://youtu.be/knNLZEyposM](https://youtu.be/knNLZEyposM)


<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="token-mint"
/>