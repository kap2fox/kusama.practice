---
title: InterPlanetary File System as file storage
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Video Lecture

https://youtu.be/EbMDtf5oQcI

<Spoiler title="<h2 style='display: inline;' >Lesson 14. Decentralized storage network</h2>">

## **InterPlanetary File System**

### What is IPFS?

**IPFS**, the [InterPlanetary File System](http://ipfs.tech), is an innovative peer-to-peer distributed file system. It aims to revolutionize how we store and share data across the internet. IPFS offers a decentralized, censorship-resistant, and highly efficient approach to content distribution, while connects all computing devices under a unified system of files.

At the core of IPFS lies its decentralized network of **interconnected nodes**. Every node in the IPFS network is a participant in the storage and sharing of data. In traditional client-server models, data is centralized on specific servers. IPFS nodes act as both consumers and providers of content. This peer-to-peer architecture ensures that files are distributed across multiple nodes and reduces the risk of data loss and enabling faster retrieval times.

<LessonImages src="kusama-theory-practice/lesson14-diagram.png" alt=""/>

### A bit of IPFS History

Community of IPFS splits the whole period in the parts:

1. **Peer-to-peer summer** (1999~2003)
In 1999, Napster shook the world with its offer of unlimited, free music, marking a time when record labels had yet to embrace new business models. Users freely shared media files through Napster's peer-to-peer network, eliminating barriers. This era led to a **burst of innovation in P2P technology**, spawning notable projects like Gnutella, Kazaa, MojoNation, BitTorrent, and Skype, among others, some driven by ideology, while others succeeded based on their merits, much like Napster, Skype, and BitTorrent. Legal challenges, particularly due to copyrighted content sharing, and the growing dominance of centralized control eventually halted this P2P wave, though it showcased the potential of P2P architectures and hinted at their resurgence in the future.
2. **Origin of IPFS** (2013-2017)
Juan Benet grew up during the era of P2P innovation, experiencing its potential firsthand. Studying computer science at Stanford, he developed a deep interest in distributed networks. In 2013, while working on a scientific innovation project, Juan recognized the inefficiencies in sharing and versioning large datasets. Drawing from his background in P2P systems and inspired by Git's data-linking and BitTorrent's file-sharing, he conceived the IPFS project. He founded **Protocol Labs** to support this vision and, with the help of early contributors, brought IPFS to life. This journey continued with milestones like the 0.4.0 release of Kubo, spin-offs like Multiformats and libp2p, and significant events such as IPFS' use against state censorship.
3. **The next chapter** (2018 - today)
To bring its ideological and technical advantages to a broader audience, the project embarked on a path of development and collaboration. This strategy yielded remarkable outcomes in 2019, marked by the inaugural IPFS Camp in Barcelona, fostering innovation and partnerships, including a successful collaboration with Netflix. By the end of that year, the IPFS network had grown significantly, with a robust community of over 4,000 open-source contributors.

### How it works?

At the heart of IPFS is its **content-addressed data model**. Instead of referencing files by their locations or URLs, IPFS uses cryptographic hashes to uniquely identify each piece of data based on its content and get an **unique fingerprint** called a [content identifier](https://proto.school/anatomy-of-a-cid) (CID). This ensures that identical data always maps to the same hash, promoting deduplication and efficient caching.

When a user adds a file to IPFS, it is divided into smaller blocks, each assigned a unique hash. These blocks are then distributed across the IPFS network, utilizing a peer-to-peer architecture. Nodes in the network store and share these blocks, creating redundancy and resilience in case some nodes go offline.

One critical concept in IPFS is "**pinning**." Pinning involves instructing an IPFS node to keep a specific file or data structure stored permanently, preventing it from being automatically garbage collected. Pinning is crucial for ensuring that important files remain accessible, even if the original uploader goes offline.

When a user pins a file, their IPFS node maintains a local copy of the file's blocks. As long as the file is pinned, the node actively replicates and shares the blocks with other nodes on the network. This redundancy enhances availability and improves retrieval speeds.

### Start your IPFS node

To begin, you'll need to install an **IPFS client** on your computer or server. IPFS provides easy-to-use [command-line tools](https://docs.ipfs.tech/install/command-line/) and [graphical interfaces](https://docs.ipfs.tech/install/ipfs-desktop/#windows), depending on your preference. 

Once installed, you can start an IPFS node, which will join the global IPFS network. You can then add files to IPFS using the client's commands, which will generate a unique content-based hash for each file. These files will become available on the IPFS network, and you can share them with others using the provided hash.

### References

[IPFS Whitepaper](https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf)


</Spoiler>

<Spoiler title="<h2 style='display: inline;' >Theory: Test</h2>">

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question14.1"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question14.2"
/>

<QuizBlock 
quizUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Quiz"
quizId="question14.3"
/>

</Spoiler>