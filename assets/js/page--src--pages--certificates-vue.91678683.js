(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"Z+j5":function(_,e,t){},"av/C":function(_,e,t){"use strict";t.r(e);var a=t("dHuT").a,r=(t("rwbM"),t("7uw+")),s=Object(r.a)(a,(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("Layout",[t("MetaInfo",{attrs:{pageTitle:"Apply for Certificate",pageDescription:"Collect blockchain proved certificate that you are familiar with the modern web technologies for the IoT.",pageImage:"/og/apply-for-certificate"}}),t("page-title",{attrs:{title:_.$ts("Apply for Certificate"),breadcrumbs:_.breadcrumbs}}),t("section",{staticClass:"container__narrow"},[t("gsp-form",{class:_.result,attrs:{gscriptID:_.gscript,captchaID:_.captcha}},[t("section",[t("h2",[_._v(_._s(_.$ts("Course Information")))]),t("label",{staticClass:"container__full"},[_._v("\n            "+_._s(_.$ts("Select course that you passed"))+":"),t("br"),t("select",{directives:[{name:"model",rawName:"v-model",value:_.course,expression:"course"}],staticClass:"container__full",attrs:{required:"","data-gsp-name":"course","data-gsp-data":_.enCourse||_.course},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(_){return _.selected})).map((function(_){return"_value"in _?_._value:_.value}));_.course=e.target.multiple?t:t[0]}}},_._l(_.courses,(function(e){return t("option",{key:e.id},[_._v(_._s(_.$ts(e.title)))])})),0)]),t("label",{staticClass:"container__full"},[_._v("\n            "+_._s(_.$ts("Enter Polkadot address that you used"))+":"),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:_.account,expression:"account"}],staticClass:"container__full",attrs:{type:"text",required:"","data-gsp-name":"account","data-gsp-data":_.account},domProps:{value:_.account},on:{input:function(e){e.target.composing||(_.account=e.target.value)}}})])]),t("section",[t("h2",[_._v(_._s(_.$ts("Information for Certificate")))]),t("label",{staticClass:"container__full"},[_._v("\n            "+_._s(_.$ts("Your full name"))+":"),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:_.name,expression:"name"}],staticClass:"container__full",attrs:{type:"text",required:"","data-gsp-name":"name","data-gsp-data":_.name},domProps:{value:_.name},on:{input:function(e){e.target.composing||(_.name=e.target.value)}}})]),t("label",{staticClass:"container__full"},[_._v("\n            "+_._s(_.$ts("Your email (for notification)"))+":"),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:_.email,expression:"email"}],staticClass:"container__full",attrs:{type:"email",required:"","data-gsp-name":"email","data-gsp-data":_.email},domProps:{value:_.email},on:{input:function(e){e.target.composing||(_.email=e.target.value)}}})]),t("label",{staticClass:"container__full"},[_._v("\n            "+_._s(_.$ts("Discord (username)"))+":"),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:_.discord,expression:"discord"}],staticClass:"container__full",attrs:{type:"text","data-gsp-name":"Discord","data-gsp-data":_.discord},domProps:{value:_.discord},on:{input:function(e){e.target.composing||(_.discord=e.target.value)}}})]),t("input",{attrs:{type:"hidden","data-gsp-name":"tags","data-gsp-data":"academy, academy certificate"}}),t("input",{attrs:{type:"hidden","data-gsp-name":"status","data-gsp-data":"new"}})]),t("section",{staticClass:"text__center"},[t("button",{on:{click:_.form}},["init"===_.result||"error"===_.result?t("span",[_._v(_._s(_.$ts("Request Certificate")))]):_._e(),"wait"===_.result?t("span",[_._v(_._s(_.$ts("Sending your request")))]):_._e(),"success"===_.result?t("span",[_._v(_._s(_.$ts("Your request has been sent")))]):_._e(),"wait"===_.result?t("Loader"):_._e()],1)])])],1)],1)}),[],!1,null,"60dff09e",null);e.default=s.exports},dHuT:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("uFwe"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("07d7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("PKPk"),core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("3bBZ"),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("R5XZ"),core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__),_data_online_courses_yaml__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("QRG1"),_data_online_courses_yaml__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_data_online_courses_yaml__WEBPACK_IMPORTED_MODULE_5__),_data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("ean2"),_data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_6__);__webpack_exports__.a={components:{PageTitle:function(){return Promise.all([__webpack_require__.e(0),__webpack_require__.e(3),__webpack_require__.e(4)]).then(__webpack_require__.bind(null,"id0j"))},MetaInfo:function(){return __webpack_require__.e(91).then(__webpack_require__.bind(null,"9qaU"))},Loader:function(){return Promise.all([__webpack_require__.e(0),__webpack_require__.e(7)]).then(__webpack_require__.bind(null,"VV+c"))}},data:function(){return{breadcrumbs:[{to:"/",text:"Robonomics Academy"}],gscript:"AKfycbwfqXmjv3gZGq3PxcLSXoPW2W380s8xPScY2Hz1GfXYzIcrs-8CxCK5naeoOn_w5lhf",captcha:"6Ldn7g0gAAAAAOOL-2KFHiDDDMXtWRy9Xo-5AtcR",course:this.$ts(_data_online_courses_yaml__WEBPACK_IMPORTED_MODULE_5___default.a[0].title),account:"",name:"",email:"",discord:"",result:this.$response}},computed:{courses:function(){return _data_online_courses_yaml__WEBPACK_IMPORTED_MODULE_5___default.a},translations:function(){return _data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_6___default.a},enCourse:function(){return this.courseNameForGS(this.course)}},methods:{form:function(){var _=this,e=setInterval((function(){_.result=_.$response}),1e3);"success"!==this.$response&&"error"!==this.$response||clearInterval(e)},courseNameForGS:function courseNameForGS(alias){var _iterator=Object(_home_runner_work_robonomics_academy_robonomics_academy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.translations),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;if(item[this.$locale]===alias)return eval("item.en")}}catch(_){_iterator.e(_)}finally{_iterator.f()}}}}},rwbM:function(_,e,t){"use strict";t("Z+j5")}}]);