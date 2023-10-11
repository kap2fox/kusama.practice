---
title: Robonomics applications 
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Robonomics]
defaultName: Robonomics
---

# Video Lecture

https://youtu.be/k2AiU1ZGAow

<Spoiler title="<h2 style='display: inline;' >Lesson 17. Robonomics applications</h2>">

# Introduction

If previous section discussed applications on a software level, the hero of today's lesson series is about hardware.
Get settled and let's go!

# The vision of robots economy

Imagine a world where autonomous robots and IoT devices act as economic agents, making independent decisions and forming agreements with the speed of computation. Robonomics presents an economic system in which such agents are capable to perform key economic action and use blockchain with a commitment to transparency. Opened to collaboration and supplied with continuous development, Robonomics Network defines the future of autonomous economy and creates new the possibilities of decentralized automation.

### **History of Robonomics**

**2015-2016: First Human-Machine interactions via blockchain**
It was a time when Ethereum had recently unfurled its mainnet to the world. The notion that sparked this journey was rather profound: what if robots could undertake tasks for cryptocurrency, their actions meticulously governed by smart contracts?

To validate this audacious concept, the founders embarked on the creation of a [demonstration](https://youtu.be/V_3rcP2Duv0). Picture this scene: a drone, adorned with a sleek, futuristic design, not under the direct control of a human operator, but rather steered by the computational prowess of an Ethereum-based computer. It was as though the pages of science fiction had come to life.

**2016-2018: Start of Robonomics Network**

In this phase, Robonomics was like a mad scientist's lab, buzzing with innovation. Wild idea was developed: what if any device could become a smart robot controlled by Ethereum and backed by the Robot Operating System (ROS) with IPFS as File storage? This "Robot-as-a-Service" and robot economy concepts led them to create a decentralized network, allowing these robots to offer their skills reliably. 

In 2018, they unveiled our Robonomics Whitepaper and launched the alpha version of Robonomics Network on Ethereum's mainnet. During this exciting era, they ventured into Industry 4.0, exploring smart factories, cities, and homes. 

**2019-2020: Transition to Polkadot**
A moment arrived when the limitations of Ethereum came into sharp focus. Scalability issues, sluggish transaction speeds, and exorbitant costs were causing headaches. Although eagerly awaited Ethereum 2.0 was a solution, its repeated delays prompted Robonomics to seek alternatives. Enter Polkadot, the sharded blockchain ecosystem that held the promise of addressing these concerns. Main features of Robonomics were transferred to parachain on the Rococo testnet.

**2021-2022: Officially Parachain and Sovereign Home Automation**

In the year of 2021, the Robonomics project underwent a remarkable transformation, with sights firmly set on bringing IoT applications to life via parachain on Kusama. Tests of connection of sensors to Robonomics parachain, digital twin functionality, and many other cool staff were developed at that moment.

In the beginning of 2022, Robonomics emerged victorious, winning the 20th parachain slot auction, and officially became parachain ID 2048 on the Kusama network. This marked the start of new stage, with the launch of datalog, DigitalTwin, liability functions, and IoT subscriptions, all accessible to users across the ecosystem.

In parallel, experiments with IoT equipment led to conceive the concept of a sovereign smart home— one liberated from the clutches of centralized cloud service providers

### Crypto for Robots

XRT is a native token for the Robonomics  which exists on Kusama network. Along with it where few types of extrinsics — entities that lives in the chain of blocks, crucial for the idea of interaction in this parachain:

- Datalog — extrinsic to store some data on chain. It is supposed to keep some data immutable. Available space is 512 bytes (roughly 512 symbols).
- Launch are used to pass some commands to other user of blockchain, usually device or robot. It contains address of robot, which is polling the chain for new commands, and command itself — up to 32 bytes. It could be some text or even IPFS CID.
- Digital Twin is a kind of map or a table. It helps to keep in one place list of multiple agents, with different addresses (Source) with comment (Topic Name).
- Liability is a contract tool, required to turn robots into independent economic agents. It’s creation starts with negotiations, proceeds with signing of agreement and ends with report from the robot side.

At this moment we are only introducing extrinsics, next lessons will clarify usage of them.

### References

You could deepen you knowledge of Robonomics Network with:

- [Whitepaper](https://www.notion.so/Robonomics-89eff6cb75ac4b9680ca943ca2c332cd?pvs=21)
- [Intro](https://robonomics.network/intro/)
- [Wiki](https://www.notion.so/Robonomics-89eff6cb75ac4b9680ca943ca2c332cd?pvs=21)

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question17.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question17.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question17.3"
/>

</Spoiler>

<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="robonomics"
/>