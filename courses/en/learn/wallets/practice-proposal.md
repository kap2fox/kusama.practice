---
title: "Practice: Creating On-chain Proposal"
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Wallets
---


# Practice: Creating On-chain Proposal

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
  
<AccountManager>
<PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="democracy_proposal"
              question="Enter your proposal id(it should be a number like 58)"
          ></PracticeChecker>
</AccountManager>
<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="practice-proposal"
/>