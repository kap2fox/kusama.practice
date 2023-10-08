---
title: "Lektion #5, IoT-Abonnements mit Robonomics Parachain"
lastUpdate: Thu May 04 2023 12:52:20 GMT+0400 (Samara Standard Time)
description: Sie werden lernen wie Sie ein IoT-Abonnement auf Robonomics Parachain mit echten Token aus unserem Netzwerk kaufen.
lessonNumber: 5
metaOptions: [Online Kurse, Einführungskurs]
defaultName: Introduction to the ideas of Robonomics
---

Die letzte Lektion unseres Einführungskurses ist höchstwahrscheinlich die anspruchsvollste, denn sie wird Ihnen einiges an Geschick und Geduld abverlangen. Sie werden lernen wie Sie ein IoT-Abonnement auf Robonomics Parachain mit echten Token aus unserem Netzwerk kaufen.


## Intro

Ein IoT-Abonnement ist ein Zugangsschlüssel zu allen Funktionen die mit der Änderung des Zustands des digital Twins eines cyber-physischen Systems und der Speicherung von Informationen über dieses System unter Verwendung des Polkadot/Kusama-Ökosystems verbunden sind. Durch den Besitz eines Abonnements wird der Nutzer von der Gebühr befreit um für die Transaktion zu zahlen. Stattdessen kann der Nutzer einmal in einem bestimmten Zeitraum eine kostenlose Transaktion senden.

Um ein Abonnement zu kaufen ist die Teilnahme an der Abonnement-Auktion erforderlich. Daher sollten Sie in dieser Lektion XRT-Tokens erhalten um Gebote abzugeben und Transaktionen durchzuführen. Weitere Informationen über diesen Prozess finden Sie auch in [unserem Wiki](https://wiki.robonomics.network/docs/get-subscription).


## Anleitung

<List type="numbers">

<li>

You need around 2 XRT Robonomics Parachain tokens ([über den Token](https://robonomics.network/xrt/)). Wenn Sie diese nicht haben gibt es mehrere Möglichkeiten sie zu erhalten:

a) If you pass both tests after Lesson 2 and Lesson 4 with 90% correct answers, you can request free tokens for the lesson. Check your scores on [the special checking dapp](https://lk.robonomics.academy/). Specifically, you need to score 15 out of 17 for Lesson 2 and 10 out of 11 for Lesson 4, and you have two attempts to do this. To get tokens, contact the Academy Administrator on our [Discord](https://discord.gg/xqDgG3EGm9) (IBerman#5862).

b) Kaufen XRT-Token an einer der Börsen (check out the [list of exchanges](https://www.coingecko.com/en/coins/robonomics-network#markets/)). Seien Sie vorsichtig wenn Sie nicht mit Kryptowährungsbörsen vertraut sind und denken Sie daran, dass alle Käufe auf Kryptowährungsbörsen potenzielle Risiken bergen können. Kaufen Sie nur die erforderliche Menge an Token um diese Lektion zu absolvieren. Also, keep in mind that Robonomics exists on two networks, Ethereum and Kusama, so each network has its own XRT token. You need a token that used by parachain in Kusama network.

c) If you have XRT token in Ethereum network (ERC-20 format), use [Exodus](https://old.dapp.robonomics.network/#/exodus) process to transfer tokens from the Ethereum network to Kusama. Keep in mind that the transfer of tokens is carried out once a week.

</li>

<li>

IoT-Abonnements werden in einem regulären Auktionsverfahren erworben bei dem der Höchstbietende ein Abonnement erhält.

Bevor Sie versuchen an der Auktion teilzunehmen, sollten Sie prüfen ob es noch freie Plätze gibt. Robonomics [Polkadot/Substratportal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate) öffnen mit Chain state Menü. Wählen Sie <code>rws</code> Abfrage mit <code>auctionQueue()</code> und drücken Sie eine '+'-Taste. Sie sollten die IDs der verfügbaren Auktionen sehen; merken Sie sich die ID einer dieser Auktionen. Wenn keine Auktionen angezeigt werden oder verfügbar sind, kontaktieren Sie uns bitte auf unserem Discord in "[🎓robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)" channel.

Wählen Sie nun im gleichen Chain state menu <code>rws</code> mit <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> und in <code>u32</code> Felder geben Sie die gespeicherte ID der Auktion ein. Nachdem Sie auf die Schaltfläche "+" geklickt haben, werden Ihnen Informationen über eine interessante Auktion angezeigt. Wenn die <code>winner</code> Feld hat <code>null</code> Wert, dann hat niemand dieses Abonnement und Sie können versuchen es zu bekommen.

</li>

<li>

Jetzt können Sie mit Ihren XRT-Tokens ein Gebot abgeben. 

Gehen Sie zum Menü Entwickler -> Extrinsic und wählen Sie für dasselbe polkadot.js-Konto das Sie in der vorherigen Lektion extrinsic verwendet haben <code>rws</code> mit <code>bid(index, amount)</code>. Im <code>index</code> geben Sie die ID der gewünschten Auktion ein. Im <code>amount</code> Feld sollten Sie die Anzahl der Token für das Gebot eingeben, umgerechnet in "Wiener" (1 XRT = 1 000 000 000 Wn). Bitte prüfen Sie den aktuellen Abonnementpreis in unserer [Dapp](https://dapp.robonomics.network/#/subscription). 

Senden Sie die Transaktion ab und wenn Sie Glück haben erhalten Sie das IoT-Abonnement. Sie können überprüfen, ob Ihre Polkadot-Adresse das Abonnement besitzt indem Sie das gleiche Chain state menu aufrufen.

</li>

<li>

Der letzte Schritt besteht darin, Geräte für Ihr IoT-Abonnement hinzuzufügen. 

Das bedeutet einfach, dass Sie Ihrem Abonnement zusätzliche Polkadot-Adressen zuweisen die Sie oder Ihre Geräte verwenden können um Extrinsics auszuführen (zum Beispiel um Geräte zu starten oder Gerätedaten an die Blockchain zu senden). 


Bevor Sie beginnen, erstellen Sie ein neues Konto für Robonomics Parachain (Anleitung in [unserem Wiki](https://wiki.robonomics.network/docs/create-account-in-dapp/)), und nennen es der Einfachheit halber "smart device".

Gehen Sie dann zum Menü Entwickler -> Extrinsic, und wählen Sie <code> rws</code> mit <code>setDevices()</code>. Verwenden Sie in der Geräteliste die Schaltfläche "Add item", um Geräte hinzuzufügen, und wählen Sie ein kürzlich erstelltes Konto für intelligente Geräte aus. Danach übermitteln Sie die Transaktion.

Die Geräteadresse sollte zum Abonnement hinzugefügt werden. Sie können sie im Chain state menu durch Abfrage überprüfen <code>rws</code> mit <code>devices()</code> für Ihr polkadot.js-Konto, das das Abonnement hat.

</li>

</List>

<Result>

Die Lektion wird als abgeschlossen betrachtet, wenn der Kauf eines IoT-Abonnements und das Hinzufügen eines Geräts erfolgreich abgeschlossen wurde.

You can check your results on [the special checking dapp](https://lk.robonomics.academy/). For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.

</Result>