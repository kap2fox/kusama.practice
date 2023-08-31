---
title: Crypto in your mobile — NovaWallet
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Video Lecture

https://youtu.be/uku-pez8XGU

# Lesson 6. Nova Wallet. All you need in one hand

## Introduction

In the previous lessons, we explored two suitable wallets for the Polkadot ecosystem, both intended for use on your PC. But what if you need a wallet on your phone to manage your assets on the go? That's where Nova Wallet fits perfectly. Let's explore this next-gen wallet for the Polkadot/Kusama ecosystem.

## Features and functionality

No need to remind you that web3 world is not only about sending and receiving crypto. As well as the previous two wallets, Nova provides a comprehensive toolkit on your phone that allows you to explore and participate in over 63 networks, offering a wide range of functions, including:

1. **Staking**

Nova Wallet provides two main ways to stake **DOT** or **KSM** tokens: self-delegation or via a **[Nomination Pool](https://novawalletapp.medium.com/polkadot-staking-nomination-pools-are-live-7b3284232c66)**.

"What is the difference?" you may ask. Well, in self-delegation, you personally control which Validator nodes your tokens are staked with, while nomination pools allow users to pool their funds together and nominate/stake as a group, greatly reducing the amount of tokens required to begin staking.

In addition to **DOT** and **KSM** tokens, you can also stake tokens from various parachains, such as **AZERO, KMA, GLMR, MOVR, PDEX, CAPS, TUR, WND, and ZTG**, with attractive APYs ranging from 8.64% to 81%.


<robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
        <LessonImages src="kusama-theory-practice/lesson6-staking-list.png" alt=""/>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
        <LessonImages src="kusama-theory-practice/lesson6-stake-dot.png" alt=""/>\
    </robo-academy-grid-element>
</robo-academy-grid>


1. **Governance & Crowdloans**

Nova Wallet makes participating in governance processes, such as voting on referenda, extremely simple. In the Vote section, you can check all ongoing referenda and yay/nay it with your tokens. You even have the option to delegate your voting power to another account, voting alongside it!

You can use Nova Wallet to easily contribute to Polkadot and Kusama crowdloans in a non-custodial way, which one we strongly recommend you to do it, and not via a Centralized Exchange (CEX).


<robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
        <LessonImages src="kusama-theory-practice/lesson6-vote-governance.png" alt=""/>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
        <LessonImages src="kusama-theory-practice/lesson6-vote-crowdloans.png" alt=""/>
    </robo-academy-grid-element>
</robo-academy-grid>


1. **Nova Browser with quick acces to Polkadot dApps**

Nova's built-in browser provides quick access to various web pages while connecting your Nova Wallet accounts to interact with Polkadot and EVM dApps. The catalogue contains different dApps within the Polkadot ecosystem, such as DEX, Governance, NFT, Staking, Crowdloans, and more.

## Setting up Nova Wallet

Nova Wallet is available for download on both the App Store and Google Play Store. After downloading the app, you can choose to create a new wallet within Nova or import an existing one using your recovery seed or private key. The good news is that Nova is compatible with all major wallets, including Talisman for your browser, Ledger for secure crypto storage, as well as Polkadot.js account, and popular wallets like MetaMask – all in one hand. Sounds convenient, doesn't it? By the way, there’s a detailed overview of the installation in our video lesson, we hope you watched it.

## Conclusion

Nova Wallet stands out as one of the most user-friendly and effective crypto wallets for mobile phones. Its full compatibility with the Polkadot and Kusama ecosystems makes it an ideal choice for Web3 tasks, offering versatility and convenience. However, it's essential to remember that a wallet like Nova is simply an interface for accessing your assets, which are always securely stored in the blockchain (especially in the case of non-custodial wallets like Nova). The responsibility for wallet security lies directly with the user and how diligently they handle their seed phrase. We conclude the block dedicated to cryptocurrency wallets and switching to the exploration of Asset Hub - a powerful tool for creating, managing, and customizing your own tokens. See you soon!

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question6.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question6.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question6.3"
/>

</Spoiler>

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Practice: Creating On-chain Proposal</h2>">

In this practice, you will create a proposal on the Rococo testnet. Before starting, make sure you have enough free ROC tokens to submit a proposal (minimum 0.0033333333 ROC) and to vote on it. If not, your can use [Triangle faucet](https://faucet.triangleplatform.com/polkadot/rococo) or any faucet that your can find in Internet.

### Preparing preimage

The point of Governance in the Polkadot ecosystem is to propose changes to the network, and in such a way that changes are automatically carried out after a decision is made. Therefore, before creating a proposal, the applicant must prepare an image of these changes, which will be linked to the proposal. This is preimage and in fact it is commands for execution using the available extrinsics. For our task, we will use the extrinsic `system.remark`, which allows to save a text string in a chain.

1. Select the Rococo testnet on the [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io) portal. 
2. Go to the **Governance** tab and choose **Preimages**. Press `Add preimage` button.
3. For your account, choose `system->remark` in the `propose` field. Add any text string you want to the `remark` field.
4. Save the preimage hash, you will need it later. Then press `Submit preimage`. The preimage should appear in the list.

### Submitting proposal

Now you can start the actual creation of the proposal:

1. Go to the **Governance** tab and choose **Democracy**. Press `Submit proposal` button.
2. In the appeared window, for your account paste the saved preimage hash. Note that you will be required to lock a certain amount of ROC tokens. If the proposal is successful, it will be returned to you after its execution.
3. Confirm the proposal creation.

Since Governance in Rococo is still operating on the first version, after creating a proposal, it will appear on the queue list waiting a referendum. Every launch period (in this case, 7 days), proposals from this list are sent for voting depending on the number of endorsements. You can endorse any proposal with your tokens, which will be locked until a decision is made on it.

### Designing the proposal text

As you may have noticed, the Polkadot.js portal does not provide a detailed description of proposals, except for the applicant's address, the number of supporters, and the description of extrinsics. For this purpose, external services such as [Polkassembly](https://polkassembly.io/) and [Subsquare](http://subsquare.io/) have been developed by the community to conveniently track existing referendums and discussions, as well as add additional information to proposals. When creating a proposal on the Rococo network, you also automatically created a page for it on the Subsquare service. Now, let's try to add some context to your proposal.

1. On the **Democracy** tab, find your proposal and expand its details using the button on the far right (looks like a down arrow).
2. You will notice that an additional field called `external links` has appeared with icons of various services. You need to find the Subsquare icon and click on it. You should be redirected to your proposal in the Subsquare service.
3. Most likely you will see that your proposal is called "Untitled - public proposal #X". Let's change its name and add some text. To do this, you first need to log in to Subsquare using the same account you used to create the proposal. The site will automatically recognize you as its author and allow you to edit the text.
4. Click on the Edit button and add the following information (where X is the proposal number assigned by the system):

    **Title:**

    <RoboAcademyDialog>
        Test Proposal for From Theory to Practice Course #X
    </RoboAcademyDialog>

    **Issue:**

    <RoboAcademyDialog>
        This is a test proposal prepared as part of the "Kusama - From Theory to Practice" course.
    </RoboAcademyDialog>

    After the changes, don't forget to click the `Update` button.

### Referendum

After the launch period, if the proposal has gained enough endorsements or if there were no other candidates, voting on the proposal begins. During voting, you also use your tokens to either support (Aye) or reject (Nay) a proposal. Moreover, the strength of your voice directly depends on the amount of your tokens and the period for which you want to lock your tokens. For example, 10 ROC tokens locked for 2 launch periods (14 days) will be counted as 20 ROC tokens.

Depending on the importance of proposed changes in the network, some proposals may require the support of the majority of all token holders in the network. Less demanding proposals only require any number of Yay votes to outweigh Nay votes.

To complete this task, you don't need to wait for your proposal to enter the referendum state and be accepted. However, we recommend waiting for this and trying to push your proposal for accepting.

</Spoiler>

<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="novawallet"
/>