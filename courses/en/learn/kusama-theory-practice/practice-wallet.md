---
title: "Practice: Install Wallet"
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Practice: Install Wallet

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


<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="practice-wallet"
/>