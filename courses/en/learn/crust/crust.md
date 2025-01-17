---
title: Crust distribute your file in the network
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Crust]
defaultName: Crust
---

# Video Lecture

https://youtu.be/zgjOHP7pmiA

<Spoiler title="<h2 style='display: inline;' >Lesson 15. How to manage data in IPFS?</h2>">


## Crust Network

[Crust](https://crust.network/) is a digitally encrypted **application layer** built on the MPoW (Meaningful Proof of Work) mechanism and GPoS (Guaranteed Proof of Stake). It is also a new generation of **blockchain technology** that provides a **decentralized storage network** of the Web3 ecosystem. It supports multiple storage layer protocols such as IPFS, and exposes storage interfaces to application layer. Crust's technical stack is also capable of supporting a decentralized computing layer. It is designed to build a decentralized cloud ecosystem that values data privacy and ownership.

### Four version’s of one

As a blockchain, Crust has 4 implementations with slight difference (and testing purposes).

**Crust Mainnet** - Main branch of Crust Network. Here nodes can execute and obtain corresponding token rewards, users can utilize all the storage features and everyone stays happy. As a blockchain, Crust has it’s own token - [CRU](https://coinmarketcap.com/currencies/crustnetwork/).

**Crust Maxwell -** Preview version of Crust, fully functional yet with volume limitations. Created to test and simulate all the new features in environment close to real! 

**Crust Rocky -** A developer-oriented testnet for Crust internal testing.

**Crust Shadow -** “Kusama version” of Crust Network with it’s own [tokens](https://coinmarketcap.com/currencies/crust-shadow/) — CSM.

### The structure of Crust

Simplified, Crust is working in a three layers:

1. Decentralized Storage Market for data storage **order placement**
2. Meaningful Proof of Work for **zero-trust storage**
3. Guaranteed Proof of Stake as a **consensus** algorithm for whole blockchain to work

<LessonImages src="kusama-theory-practice/lesson15-structure.png" alt=""/>

### TEE (Trusted Execution Environment)

In a nutshell, TEE (Trusted Execution Environment) is a **secure computing environment** that utilizes hardware-based security measures to enhance system security. It combines multiple computer-related technologies to provide a trusted and isolated space for **executing sensitive operations**. The core specifications of TEE include features like endorsement keys for secure authentication, **sealed storage** to protect private data, **memory curtaining** to isolate storage areas, **secure input/output** for protected user interactions, and **remote attestation** for verifying system integrity.
TEE can be implemented using various solutions, with Intel SGX and ARM TrustZone being the most widely recognized and used. It offers a simpler and more efficient approach compared to complex algorithm-level solutions. TEE supports the trusted execution of complex computing logic, making it suitable for supporting **decentralized computing** alongside **decentralized storage**, forming a complete decentralized cloud service ecosystem like Crust envisions.

### **MPoW (Meaningful Proof of Work)**

MPoW is a mechanism built on top of the TEE  to provide technical assurance for trusted execution of codes in the Crust network. MPoW consists of two **types of proof**: environment consensus and workload consensus.

**Environment Consensus**: When a new node joins the network, its TEE needs to be verified through consensus. Nodes in the Crust network verify the environment of the new node, associating its identity and TEE public key through remote attestation and recording them on the chain.

**Workload Consensus** involves two aspects:

1. Periodic spot-checking: In each cycle, Crust nodes' **storage capacity and status** are spot-checked by their local TEE. The TEE handles the packaging and verification logic of MPoW, and after receiving user files, the nodes use the TEE for re-encryption and storage. Only the TEE can restore files, ensuring data privacy and protection against Sybil Attacks. The TEE signs a **work report onto the chain**, simplifying the storage consensus process.
2. Computing workload verification: Crust proposes a Proof of Running Tracking (PoRT) algorithm that combines TEE with LXC (Linux Container). This allows computing workload by working nodes to be calculated and verified through consensus.

MPoW ensures that nodes in the Crust network execute code in a trusted environment, and it simplifies storage and computing consensus while maintaining data security and privacy.

### **GPoS (Guaranteed Proof of Stake)**

The consensus mechanism used in the Crust network is GPoS. It is a variation of the Proof of Stake (PoS) consensus, where nodes compete for the position of verifiers by **staking** CRU tokens and providing **storage resources as guarantees**. The more storage resources a node contributes, the higher its guarantee limit will be.

There are four types of participants in the Crust system:

| Role | Description |
| --- | --- |
| Verifiers | Nodes responsible for packaging and generating blocks in the network, they need to hold storage resources as a guarantee and stake CRU tokens to participate. |
| Candidates | Nodes that competed to be verifiers but were not selected, they also need storage resources as guarantees and can stake CRU tokens. |
| Guarantors | Accounts that provide guarantees for other nodes in the network by staking CRU tokens as encumbered assets. |
| Users | Consumers who use Crust network resources, such as storage and computing services, and can purchase these services using CRU tokens or other token assets. |

GPoS ensures that participants in the Crust network have a vested interest in the system's success and provide storage resources, which are crucial for the decentralized storage and computing services offered by Crust.

### **DSM (Decentralized Storage Market)**

Crust DSM (Decentralized Storage Market) is a crucial component of the Crust network, designed to provide high-quality storage services for various applications and platforms. It operates with two main mechanisms:

- **Pricing Mechanism**: 
Users in the Crust network sign storage orders, and the network calculates the corresponding price based on the current storage **supply and demand** situation. The pricing mechanism ensures fair and efficient allocation of storage resources.
- **Storage Order Mechanism**: 
Users generate storage orders specifying their storage needs and file descriptions. A portion of the fee paid by the user goes to the network's reward pool for nodes that provided CRU token staking, while the other part goes to the reward pool for the nodes storing the user's files. Nodes can **obtain files through IPFS** and store them locally. After sealing, verification, and proof through local MPoW, nodes can **declare file storage** and compete for rewards based on the provided storage proofs.

<LessonImages src="kusama-theory-practice/lesson15-market.png" alt=""/>

### Summary for storage users

When you want to store your data in decentralized way, Crust is among the first options you could choose. Previous lesson showed us blockchain structure and security proofs of Crust. Now lets see how storage works.

**Storage over IPFS**

Everything you store via Crust is actually stored in giant public file system. So, your file at start should be placed somewhere in IPFS. It could go local node or public node, doesn’t matter. Just put them and get their CID.

**Make a contract**

As soon as your know CID of data you want to store, we move to blockchain. To make an order for storage, we are sending extrinsic. It should contain CID of your data, some CRU’s for storage payment and time of storage. Time of storage is default to half a year and for some cases it is more than enough. If you understood, that the contract you’ve made is too short, you could always extend it with another extrinsic.

**When the contract is published**

At the moment contract is published, storage-nodes starts to fight over it (as long as you placed enough of CRUs). Node that want to get a piece of a pie clones your file to it local storage. Once in some time node should prove that you data is still stored. Then proof is done, node gets reward

**Download your data**
Your data will be accessible in IPFS network by CID as long, as it was placed in contract.

### References

[Crust Technical Whitepaper](https://ipfs.io/ipfs/QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t)

[Crust Economic Whitepaper](https://ipfs.io/ipfs/QmRYJN6V5BzwnXp7A2Avcp5WXkgzyunQwqP3Es2Q789phF)

[Crust Wiki](https://wiki.crust.network/docs/en/crustOverview.html)

</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question15.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question15.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question15.3"
/>

</Spoiler>

<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="crust"
/>