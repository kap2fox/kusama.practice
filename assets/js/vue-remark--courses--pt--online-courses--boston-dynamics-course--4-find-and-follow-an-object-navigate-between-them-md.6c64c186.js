(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{UQSp:function(o,e,t){"use strict";e.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}},aWJ5:function(o,e,t){"use strict";t.r(e);var a=t("7uw+"),r=t("UQSp"),n=t("Kw5r");function s(o){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:r.a},c=function(o){var e=o.options.components=o.options.components||{},t=o.options.computed=o.options.computed||{};Object.keys(i).forEach((function(o){"object"===s(i[o])&&"function"==typeof i[o].render||"function"==typeof i[o]&&"function"==typeof i[o].options.render?e[o]=i[o]:t[o]=function(){return i[o]}}))},d=n.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",u={excerpt:null,title:"Lição #4, Encontre e siga um objeto, navegue entre eles",description:"Na terceira lição, você aprenderá como encontrar objetos do mundo e ir até eles.",lessonNumber:4,courseID:2,metaOptions:["Cursos on-line","Desenvolvimento de software Boston Dynamics Spot"]};var l=function(o){o.options[p]&&(o.options[p]=u),n.a.util.defineReactive(o.options,p,u),o.options.computed=d.computed({$frontmatter:function(){return o.options[p]}},o.options.computed)},m=Object(a.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("VueRemarkRoot",[t("section",{staticClass:"container__reg"},[t("h2",{attrs:{id:"do-que-se-trata"}},[t("a",{attrs:{href:"#do-que-se-trata","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),o._v("Do que se trata?")]),t("p",[o._v("Na terceira lição, você aprenderá como encontrar objetos do mundo e ir até eles.")])]),t("section",{staticClass:"container__reg"},[t("h2",{attrs:{id:"o-desafio"}},[t("a",{attrs:{href:"#o-desafio","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),o._v("O desafio")]),t("p",[o._v("Você começa com o Spot no local com alguns fiduciais (uma marca no objeto) ao redor. Criar e executar o script Python detecta pelo menos dois fiduciais e mover o Spot para cada um deles dentro de 1 m.")])]),t("section",{staticClass:"container__reg"},[t("h2",{attrs:{id:"instruções"}},[t("a",{attrs:{href:"#instru%C3%A7%C3%B5es","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),o._v("Instruções")]),t("List",{attrs:{type:"numbers"}},[t("li",[t("p",[o._v("O Spot possui o World Object Service (Serviço de Objetos do Mundo) que fornece uma maneira de rastrear e armazenar objetos detectados ao redor do Spot no mundo. Um objeto do mundo é considerado um item de nível superior na cena que possui alguma quantidade de informação semântica associada a ele. Mais informações você pode encontrar na guia "),t("a",{attrs:{href:"https://dev.bostondynamics.com/docs/concepts/robot_services#world-object",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("Robot Services")]),o._v(" na documentação do Spot SDK.")]),t("p",[o._v("Usando o serviço de objetos do mundo, você pode encontrar fiduciais perto do Spot.")]),t("p",[o._v("O Spot pode encontrar objetos mais rapidamente se ele estiver de pé.")]),t("p",[o._v("Na tarefa, você precisará encontrar as coordenadas dos fiduciais e ir até eles. Você já sabe como ir para as coordenadas locais a partir da "),t("a",{attrs:{href:"/online-courses/boston-dynamics-course/3-remote-controlled-and-programmed-motion"}},[o._v("Lição 2")]),o._v(". O exemplo de como encontrar um fiducial e suas coordenadas está em "),t("a",{attrs:{href:"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("fiducial_follow example")]),o._v(".")]),t("p",[o._v("Em seu script, primeiro, você precisa encontrar o objeto fiducial com o World Object Service:")]),t("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\nfiducial_objects = world_object_client.list_world_objects(object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects\n")]),t("p",[o._v("Então obtenha as coordenadas fiduciais em um quadro visual:")]),t("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[o._v("\nfiducial = fiducial_objects[0]\nvision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())\n")])],1),t("li",[o._v("\nConecte-se ao Spot a partir de um terminal ou usando sua função de execução remota do ambiente de desenvolvimento.\n"),t("lessonCodeWrapper",{attrs:{language:"bash"}},[o._v("\nssh student@strelka.ygg.merklebot.com\n")])],1),t("li",[t("p",[o._v("Desenvolva e demonstre sua solução para o desafio.")]),t("p",[o._v("Nós criamos o "),t("a",{attrs:{href:"https://dev.bostondynamics.com/python/examples/estop/readme",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("E-Stop endpoint")]),o._v(" para você, portanto, você não deve criá-lo. Para autenticação do Spot, use o nome de usuário e a senha do arquivom "),t("code",[o._v("/home/student/credentials")]),o._v(". O endereço do Spot é "),t("code",[o._v("192.168.50.3")]),o._v(".")])])])],1),t("section",{staticClass:"container__reg"},[t("h3",{attrs:{id:"você-está-pronto-para-praticar"}},[t("a",{attrs:{href:"#voc%C3%AA-est%C3%A1-pronto-para-praticar","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),o._v("Você está pronto para praticar?")]),t("p",[o._v("Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.")]),t("h5",{attrs:{id:"lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-textalugue-uma-vaga-"}},[t("a",{attrs:{href:"#lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-textalugue-uma-vaga-","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),t("LessonButtonLink",{attrs:{src:"https://dapp.spot-sdk.education/#/checkout",text:"Alugue uma vaga"}})],1)])])}),[],!1,null,null,null);"function"==typeof c&&c(m),"function"==typeof l&&l(m);e.default=m.exports}}]);