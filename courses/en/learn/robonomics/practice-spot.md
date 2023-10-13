---
title: 'Practice: Spot'
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Robonomics]
defaultName: Robonomics
---

In this practice, you will learn how Spot executes remote commands using web3 processes on the example of drawing application. 

### Task

1. Open [the drawing dapp](http://spot.merklebot.com).
2. Draw something on canvas. Drawn lines are a bit simplifies so the look like combination of line segments. In the background they transforms into something like this:

<LessonCodeWrapper language="json" noCopyIcon>
  "segments":[[[177.5,220.328125],[190.5,178.328125],[219.5,85.328125],[231.5,54.328125],[233.5,47.328125],[235.36511763149002,52.91688964879671],[239.4736470173067,65.23149739679124],[243.59535289447004,77.59441894639015],[245.5,83.328125],[254.30087823273936,112.24995907524438],[264.87855842910164,146.26025405390618],[273.76695941091316,180.5544845056149],[277.5,210.328125]],[[131.5,167.328125],[230.2397236620671,131.27958963749234],[281.2825226385179,117.80557028326676],[332.5,117.328125]]]
</LessonCodeWrapper>


<LessonImages src="kusama-theory-practice/spot-draw.png" alt=""/>

3. Press launch button. Task for the robot will be represented in JSON file with segments and a bit of metadata and then will be pinned to Merklebot’s IPFS gateway. At this moment your browser will know CID with task (example `QmW4CKjF88kqT1i33vcwzXkZm1ZTThFFM6WmkTNoMpakXb`).

<LessonImages src="kusama-theory-practice/spot-send.png" alt=""/>

4. After you get a CID, it’s time for launch transaction. In fact, it is just a message with this CID, sent to robot by specified public address. You just need to sign this transaction with, for example, your Talisman wallet. 
5. After block in the Robonomics parachain will form (guaranteed <15 seconds), Spot will copy your drawing with his head movements.

<LessonImages src="kusama-theory-practice/spot-picture.png" alt=""/>

6. While drawing, Spot records all it’s movement in special type of file called [rosbag](http://wiki.ros.org/Bags). Video is also recorded. All this result are pined to IPFS. Result CID is published as datalog trasnaction, discussed in previous lessons. You could see it at Subscan. Also, to keep data accessible for a long time, transaction for storage in Crust is published. 

<LessonImages src="kusama-theory-practice/spot-results.png" alt=""/>

7. Also the picture drawn by Spot is minted as NFT and send to your wallet.

<LessonImages src="kusama-theory-practice/spot-nft.png" alt=""/>

<AccountManager>
<PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="spot_launch"
          ></PracticeChecker>
</AccountManager>