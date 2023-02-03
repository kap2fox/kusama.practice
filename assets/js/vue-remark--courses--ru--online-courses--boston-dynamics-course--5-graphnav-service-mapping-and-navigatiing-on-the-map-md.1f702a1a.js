(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{MUUR:function(t,o,e){"use strict";e.r(o);var n=e("7uw+"),s=e("UQSp"),a=e("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var p={VueRemarkRoot:s.a},i=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===r(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?o[t]=p[t]:e[t]=function(){return p[t]}}))},c=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",_={excerpt:null,title:"Урок #5, сервис GraphNav. Картографирование и навигация по карте",description:"В четвертом уроке вы научитесь записывать и воспроизводить автономные миссии с помощью сервиса GraphNav.",lessonNumber:5,courseID:2,metaOptions:["Онлайн Курсы","Разработка программного обеспечения для Spot от Boston Dynamics"]};var u=function(t){t.options[l]&&(t.options[l]=_),a.a.util.defineReactive(t.options,l,_),t.options.computed=c.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("VueRemarkRoot",[e("section",{staticClass:"container__reg"},[e("h2",{attrs:{id:"о-чем-вы-узнаете"}},[e("a",{attrs:{href:"#%D0%BE-%D1%87%D0%B5%D0%BC-%D0%B2%D1%8B-%D1%83%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("О чем вы узнаете")]),e("p",[t._v("В четвертом уроке вы научитесь записывать и воспроизводить автономные миссии с помощью сервиса GraphNav.")])]),e("section",{staticClass:"container__reg"},[e("h2",{attrs:{id:"задача"}},[e("a",{attrs:{href:"#%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Задача")]),e("p",[t._v("В этом уроке вы не сможете решить задачу, не написав собственный скрипт на Python.")]),e("List",{attrs:{type:"numbers"}},[e("li",[t._v("Запишите карту, избегая препятствий. Вы можете использовать инструмент дистанционного управления WASD. Сохраните свой результат в "),e("code",[t._v("/home/student/result")]),t._v(".")]),e("li",[t._v("Переместите Spot через записанные путевые точки. Вы можете использовать инструмент командной строки службы GraphNav.")])])],1),e("section",{staticClass:"container__reg"},[e("h2",{attrs:{id:"инструкция"}},[e("a",{attrs:{href:"#%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Инструкция")]),e("List",{attrs:{type:"numbers"}},[e("li",[e("p",[t._v("Spot SDK включает в себя API, клиентские библиотеки и примеры, которые поддерживают разработку автономных навигационных режимов для робота Spot. В совокупности этот сервис называется GraphNav. Карты записываются и сохраняются, а позже их можно использовать с любым роботом из вашего парка. В процессе записи карты вы можете назначать действия и обратные вызовы API путевым точкам вдоль маршрута карты.")]),e("p",[t._v("Прочтите "),e("a",{attrs:{href:"https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("GraphNav Tech Summary")]),t._v(", чтобы понять, как это работает. "),e("a",{attrs:{href:"https://dev.bostondynamics.com/docs/concepts/autonomy/initialization",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Инициализация")]),t._v(" также является важной частью, она понадобится вам в этом уроке.")]),e("p",[t._v("Вы можете посмотреть записанные карты на примере "),e("a",{attrs:{href:"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("View Map")]),t._v(". Для этого вам нужно скопировать карту на свой компьютер:")]),e("lessonCodeWrapper",{attrs:{language:"python",codeClass:"big-code"}},[t._v("\nscp -r student@strelka.ygg.merklebot.com:<path_to_the_map_on_spot> <path_to_the_map_to_download>\n")]),e("p",[t._v("Также вам нужно "),e("a",{attrs:{href:"https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-package",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("установить пакеты Spot")]),t._v(".")]),e("p",[t._v("Изучите "),e("a",{attrs:{href:"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("примеры записи и воспроизведения миссий")]),t._v(", чтобы использовать их для записи карты и воспроизведения записанной миссии. Используйте пример "),e("a",{attrs:{href:"https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("wasd")]),t._v(" для перемещения робота во время записи карты.")])],1),e("li",[e("p",[t._v("Подключитесь к Spot с терминала или с помощью функции удаленного выполнения вашей среды разработки.")]),e("lessonCodeWrapper",{attrs:{language:"bash"}},[t._v("\nssh student@strelka.ygg.merklebot.com\n")])],1),e("li",[e("p",[t._v("Разработайте и продемонстрируйте свое решение задачи.")]),e("p",[t._v("Мы создаем "),e("a",{attrs:{href:"https://dev.bostondynamics.com/python/examples/estop/readme",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("конечную точку E-Stop")]),t._v(" для вас, поэтому вам не нужно ее создавать. Для аутентификации Spot используйте имя пользователя и пароль из файла - "),e("code",[t._v("/home/student/credentials")]),t._v(". Адрес Spot: "),e("code",[t._v("192.168.50.3")]),t._v(".")]),e("p",[t._v("Вы можете запустить инструмент удаленного управления из справочника примеров.")]),e("lessonCodeWrapper",{attrs:{language:"bash"}},[t._v("\ncd ~/spot-sdk/python/examples/wasd\npython3 wasd.py --username <SPOT_AUTH_USERNAME> --password <SPOT_AUTH_PASSWORD> <SPOT_ADDRESS>\n")]),e("p",[t._v("Инструмент командной строки GraphNav находится по адресу")]),e("lessonCodeWrapper",{attrs:{language:"bash"}},[t._v("\n~/spot-sdk/python/examples/graph_nav_command_line\n")])],1)])],1),e("section",{staticClass:"container__reg"},[e("h3",{attrs:{id:"готовы-приступить-к-практике"}},[e("a",{attrs:{href:"#%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B-%D0%BF%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%BF%D0%B8%D1%82%D1%8C-%D0%BA-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Готовы приступить к практике?")]),e("p",[t._v("Как только почувствуете, что готовы, вы можете купить часовой практический сеанс, указав свои учетные данные для доступа (SSH-ключ) и время, когда вы хотите подключиться к Spot для решения задачи.")]),e("h5",{attrs:{id:"lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-textарендовать-spot-"}},[e("a",{attrs:{href:"#lessonbuttonlink-srchttpsdappspot-sdkeducationcheckout-text%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-spot-","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),e("LessonButtonLink",{attrs:{src:"https://dapp.spot-sdk.education/#/checkout",text:"Арендовать Spot"}})],1)])])}),[],!1,null,null,null);"function"==typeof i&&i(d),"function"==typeof u&&u(d);o.default=d.exports},UQSp:function(t,o,e){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);