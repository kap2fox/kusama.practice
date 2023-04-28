(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{PX6a:function(o,e,t){"use strict";t.r(e);var i=t("7uw+"),n=t("UQSp"),a=t("Kw5r");function r(o){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}a.a.config.optionMergeStrategies;var l={VueRemarkRoot:n.a},s=function(o){var e=o.options.components=o.options.components||{},t=o.options.computed=o.options.computed||{};Object.keys(l).forEach((function(o){"object"===r(l[o])&&"function"==typeof l[o].render||"function"==typeof l[o]&&"function"==typeof l[o].options.render?e[o]=l[o]:t[o]=function(){return l[o]}}))},c=a.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"Lezione #3, L'Ecosistema Polkadot per l'Infrastruttura IoT Domestica",description:"In questa lezione proverai a controllare una lampadina intelligente che funziona tramite Home Assistant, che ha dei moduli Robonomics aggiuntivi.",lessonNumber:3,courseID:1,metaOptions:["Corsi online","Corso Introduttivo"],defaultName:"Introduction to the ideas of Robonomics"};var d=function(o){o.options[u]&&(o.options[u]=p),a.a.util.defineReactive(o.options,u,p),o.options.computed=c.computed({$frontmatter:function(){return o.options[u]}},o.options.computed)},m=Object(i.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("VueRemarkRoot",[t("p",[o._v("La lezione 2 ha spiegato i principi fondamentali di Robonomics e ha menzionato Polkadot / Kusama come promettenti piattaforme blockchain per la sua implementazione. Ora è il momento di dare un'occhiata più da vicino alle funzionalità della Parachain Robonomics, come parte dell'ecosistema Polkadot nella rete Kusama. In particolare, vorremmo mostrare come funzionano gli abbonamenti IoT di Robonomics. Durante la prima lezione, il tuo indirizzo è stato inserito all'abbonamento Iot del corso e l'hai già riuscito ad utilizzarlo due volte: quando hai cercato il tuo riflesso nello specchio nero e quando hai consegnato i risultati del test.")]),t("h2",{attrs:{id:"intro"}},[t("a",{attrs:{href:"#intro","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),o._v("Intro")]),t("p",[o._v("In questa lezione proverai a controllare una lampadina intelligente che funziona tramite Home Assistant, che ha dei moduli Robonomics aggiuntivi. Il tuo obiettivo è accendere/spegnere la lampadina utilizzando l'interfaccia standard Polkadot/Substrate sulla Parachain Robonomics. La lampadina è in diretta su "),t("a",{attrs:{href:"https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("YouTube")]),o._v(" così puoi vedere il tuo risultato in tempo reale. Inoltre, è disponibile un set di istruzioni più dettagliate sull'utilizzo di un abbonamento IoT sul "),t("a",{attrs:{href:"https://wiki.robonomics.network/docs/subscription-launch/",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("nostro wiki")]),o._v(".")]),t("h2",{attrs:{id:"istruzioni"}},[t("a",{attrs:{href:"#istruzioni","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),o._v("Istruzioni")]),t("List",{attrs:{type:"numbers"}},[t("li",[t("p",[o._v("Apri Robonomics "),t("a",{attrs:{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("Polkadot/Substrate portal")]),o._v(".")]),t("p",[o._v("Dovresti vedere il menu Extrinsics (funzioni dell'ecosistema Polkadot). Se bloccato, utilizzando il menu in alto a sinistra vai su "),t("code",[o._v(" Kusama & Parachains -> Robonomics")]),o._v(",  e premi "),t("code",[o._v("Switch")]),o._v(". Quindi vai su "),t("code",[o._v("Developer")]),o._v(" nell'intestazione superiore, e poi su "),t("code",[o._v("Extrinsics")]),o._v(".")])]),t("li",[o._v('\nNel primo campo, dove c\'è scritto "using the selected account", seleziona lo stesso account polkadot.js che hai utilizzato nelle lezioni precedenti.\n')]),t("li",[o._v('\nNel secondo campo "submit the following extrinsic", seleziona '),t("code",[o._v("rws")]),o._v(" extrinsics e sciegli "),t("code",[o._v("call(subscriptionId, call)")]),o._v(". Questo ti consentirà di inviare una function call utilizzando l'abbonamento IoT.\n")]),t("li",[o._v("\nNel campo "),t("code",[o._v("subscriptionId: AccountId32")]),o._v(" copia questo indirizzo proprietario dell'abbonamento: "),t("code",[o._v("4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r")])]),t("li",[t("p",[o._v("Nel campo "),t("code",[o._v("call: Call")]),o._v(" scegli il comando "),t("code",[o._v("launch(robot, param)")]),o._v(".")]),t("p",[o._v("Questo ti mostrerà altri due campi: "),t("code",[o._v("robot")]),o._v(" e "),t("code",[o._v("param")]),o._v(".")])]),t("li",[o._v("\nNel campo "),t("code",[o._v("robot: AccountId32")]),o._v(" copia questo indirizzo della lampadina intelligente: "),t("code",[o._v("4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9")])]),t("li",[t("p",[o._v("Nel campo "),t("code",[o._v("param: H256")]),o._v(" devi specificare 1 (acceso) o 0 (spento) per accendere/spegnere la lampadina. ")]),t("p",[o._v("Puoi farlo con:")]),t("p",[t("code",[o._v("0x0000000000000000000000000000000000000000000000000000000000000001")])]),t("p",[o._v("o")]),t("p",[t("code",[o._v("0x0000000000000000000000000000000000000000000000000000000000000000")])])]),t("li",[t("p",[o._v('Premi il pulsante "Submit Transaction".')]),t("p",[o._v(" Non dimenticare di aprire lo "),t("a",{attrs:{href:"https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("streaming su YouTube")]),o._v(" prima di firmare la transazione.")])])]),t("Result",[t("p",[o._v("La lezione sarà considerata completata dopo l'invio di una transazione riuscita e la sua apparizione sul Polkadot explorer col tuo account polkadot.js.")]),t("p",[o._v("You can check your results on "),t("a",{attrs:{href:"https://lk.robonomics.academy/",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("the special checking dapp")]),o._v(". For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.")])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(m),"function"==typeof d&&d(m);e.default=m.exports},UQSp:function(o,e,t){"use strict";e.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}}}]);