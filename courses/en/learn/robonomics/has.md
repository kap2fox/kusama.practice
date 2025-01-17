---
title: Send transaction to your smart home
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Robonomics]
defaultName: Robonomics
---

# Video Lecture

https://youtu.be/qOvzvvMA_Lc

<Spoiler title="<h2 style='display: inline;' >Lesson 20. Send transaction to your smart home</h2>">

### Smart Home Realities

In the realm of contemporary IoT offerings for smart homes, a vast array of solutions beckons, promising to usher in a new era of connectivity and convenience. However, beneath the surface, a recurring dilemma persists—namely, the entanglement with **centralized cloud providers** and the considerable financial investments required for **proprietary gateways**. This dilemma invariably results in a scenario where the end user finds themselves beholden to hardware and infrastructure vendors for the continued operation of their smart ecosystem. 

Upon closer examination of existing smart home paradigms, two prominent challenges emerge. Firstly, there exists a disconcerting absence of **control over the data** shared with vendors and third-party entities, giving rise to concerns surrounding data privacy and security. 
Secondly, the inherent vulnerability of smart homes to the **unpredictability of centralized cloud** servers underscores the fragility of these systems. 

### Home Assistant

Partially, there is a way to abandon proprietary software disadvantages — usage of open-source projects like Home Assistant.

Home Assistant is an **open-source** home automation **platform** renowned for its versatility, empowering users to orchestrate and automate an array of smart devices and services within their homes. Offering seamless integration with a wide spectrum of devices, from lights to sensors and cameras, Home Assistant facilitates communication via multiple protocols, including Zigbee and MQTT. With a robust automation engine, users can craft intricate routines that trigger actions based on events and conditions, while its customization options enable the creation of personalized user interfaces. The platform further extends its capabilities through a rich repository of **add-ons and integrations**, and it provides both local and cloud-based access, fostering a vibrant community of users and developers dedicated to enhancing the smart home experience.

Home Assistant excels in local IoT control within your home. In contrast, Robonomics offers blockchain-powered integration for secure and decentralized communication across a broader network, transcending home boundaries.

### Robonomic’s Home Assistant Integration

Robonomics integration offers a **gateway** to your local smart home, enabling remote access **through encrypted transactions** on the Robonomics blockchain. This robust integration empowers you to:

1. **Monitor Current States**: Keep an eye on the real-time status of your smart devices and sensors, regardless of your physical location.
2. **Call Services**: With the power of blockchain at your fingertips, initiate and manage services for your connected devices effortlessly.
3. **User Management**: Seamlessly administer Home Assistant users, ensuring secure and convenient access for authorized individuals.
4. **Backup Creation**: Safeguard your smart home configuration and data by creating backups that can be readily accessed when needed. 

Everything you’ll need is accessible via Robonomics Dapp

<LessonImages src="kusama-theory-practice/lesson20-scheme.png" alt=""/>

### Robonomics Subscription to HAS

In our exploration of the Lights Up demo, we've had a glimpse of the power of subscriptions, a concept central to the Robonomics ecosystem. But subscriptions in Robonomics extend beyond mere demonstrations. They address a common and persistent annoyance in the world of blockchain transactions – paying commissions. Picture this: an IoT device dutifully sending telemetry data every 5 to 10 minutes. While this continuous data flow is invaluable, it can quickly accumulate transaction fees that become a significant expense over the course of a month. Enter the Robonomics Web Service (RWS) subscription, a standout feature of the Robonomics Network. With RWS, you can simply pay a monthly fee and bid farewell to the hassle of transaction costs. It's a game-changer for IoT enthusiasts, offering a **cost-effective and convenient solution for managing and maintaining** your smart ecosystem.

What's even more impressive is the flexibility RWS provides. You have the power to **add and remove other individuals** to and from this subscription, granting them seamless access without the need for any additional setup or expenditure. This collaborative approach not only simplifies the sharing of resources and data but also underscores the inclusive and community-driven ethos of Robonomics. With RWS, the benefits of blockchain technology are made accessible to all, fostering a vibrant ecosystem of shared resources and collaborative innovation.

### Things that you need

To seamlessly utilize the Robonomics integration, a few prerequisites must be met. First and foremost, you will need an account within the Robonomics Network equipped with a subscription. Additionally, a controller account must be added to this subscription as a device, bearing the **ed25519** type, granting it the capability to transmit **telemetry data** from Home Assistant and **execute commands** for your smart devices.

Here are the crucial things you'll need to configure integration:

1. **Robonomics Controller Account Seed:** This is the seed phrase for your controller account, and it's imperative to note that this seed is exclusively stored on your local machine. The integration utilizes this seed to encrypt data and facilitate transactions on behalf of the controller account.
2. **Robonomics Subscription Owner Address:** This field requires the address of the subscription owner's account. It is essential for conducting transactions using the subscription.
3. **Custom IPFS Gateway:** While the default integration stores data in a local IPFS node, you have the option to specify a custom IPFS gateway via its URL. This customization, particularly recommended for backups, can enhance connectivity and ensure a smoother data exchange process within the integration.

### References

[Robonomics Dapp](https://dapp.robonomics.network/#/)

[Smart Home with Web3 Technologies](https://wiki.robonomics.network/docs/robonomics-smart-home-overview/#secure-iot-with-blockchain)

[User management and administration features](https://www.notion.so/Robonomics-89eff6cb75ac4b9680ca943ca2c332cd?pvs=21)

[RWS subscriptions](https://wiki.robonomics.network/docs/subscription-launch)

</Spoiler>


<FeedbackBlock 
formUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/default/Feedback"
lessonLabel="has"
/>