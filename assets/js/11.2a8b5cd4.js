(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "AEAr":
/*!****************************************!*\
  !*** ./src/components/UserTracker.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserTracker_vue_vue_type_template_id_74c7a6d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTracker.vue?vue&type=template&id=74c7a6d8&scoped=true& */ \"ri9c\");\n/* harmony import */ var _UserTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTracker.vue?vue&type=script&lang=js& */ \"uFlm\");\n/* empty/unused harmony star reexport *//* harmony import */ var _UserTracker_vue_vue_type_style_index_0_id_74c7a6d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserTracker.vue?vue&type=style&index=0&id=74c7a6d8&prod&scoped=true&lang=css& */ \"wRUM\");\n/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"7uw+\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _UserTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _UserTracker_vue_vue_type_template_id_74c7a6d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _UserTracker_vue_vue_type_template_id_74c7a6d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"74c7a6d8\",\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/UserTracker.vue?");

/***/ }),

/***/ "Frj7":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/UserTracker.vue?vue&type=style&index=0&id=74c7a6d8&prod&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/UserTracker.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "YF2D":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/UserTracker.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cookies */ \"Kyfw\");\n/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cookies__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      option: 'allow metrics'\n    };\n  },\n  methods: {\n    allowUserTracker: function allowUserTracker() {\n      if (true) {\n        switch (this.option) {\n          case 'only critical':\n            vue_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.set('userTracker', this.option);\n            this.$store.commit('SET_USER_TRACKER', {\n              option: 'only critical',\n              localStorage: true,\n              cookies: true,\n              metrics: false\n            });\n            break;\n\n          case 'allow metrics':\n            vue_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.set('userTracker', this.option);\n            this.$store.commit('SET_USER_TRACKER', {\n              option: 'allow metrics',\n              localStorage: false,\n              cookies: true,\n              metrics: true\n            });\n            break;\n\n          default:\n            vue_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.set('userTracker', this.option);\n            this.$store.commit('SET_USER_TRACKER', {\n              option: 'no actions',\n              localStorage: false,\n              cookies: false,\n              metrics: false\n            });\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/UserTracker.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "f4ku":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"3ec475f9-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/UserTracker.vue?vue&type=template&id=74c7a6d8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:\"user-tracker\"},[_c('div',{staticClass:\"user-tracker__wrapper\"},[_c('g-link',{staticClass:\"user-tracker__info\",attrs:{\"to\":\"/privacy-policy/\"}},[_vm._v(\"i\")]),_c('h3',{staticClass:\"user-tracker__title\"},[_vm._v(\"\\n        \"+_vm._s(_vm.$ts('Choose way to communicate with this website:'))+\"\\n      \")])],1),_c('form',{staticClass:\"user-tracker__form\",on:{\"submit\":function($event){$event.preventDefault();return _vm.allowUserTracker.apply(null, arguments)}}},[_c('select',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.option),expression:\"option\"}],class:{'small': _vm.option === 'allow metrics'},attrs:{\"name\":\"privacy-policy\"},on:{\"change\":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = \"_value\" in o ? o._value : o.value;return val}); _vm.option=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{\"selected\":\"\",\"value\":\"allow metrics\"}},[_vm._v(_vm._s(_vm.$ts('Allow metrics')))]),_c('option',{attrs:{\"value\":\"only critical\"}},[_vm._v(_vm._s(_vm.$ts('Only critical actions')))]),_c('option',{attrs:{\"value\":\"no actions\"}},[_vm._v(_vm._s(_vm.$ts('Disallow any actions')))])]),_c('button',{staticClass:\"user-tracker__btn\"},[_vm._v(\"Ok\")])])])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/components/UserTracker.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%223ec475f9-vue-loader-template%22%7D!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "ri9c":
/*!***********************************************************************************!*\
  !*** ./src/components/UserTracker.vue?vue&type=template&id=74c7a6d8&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_template_id_74c7a6d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"3ec475f9-vue-loader-template\"}!../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./UserTracker.vue?vue&type=template&id=74c7a6d8&scoped=true& */ \"f4ku\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_template_id_74c7a6d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_template_id_74c7a6d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/UserTracker.vue?");

/***/ }),

/***/ "uFlm":
/*!*****************************************************************!*\
  !*** ./src/components/UserTracker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./UserTracker.vue?vue&type=script&lang=js& */ \"YF2D\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/UserTracker.vue?");

/***/ }),

/***/ "wRUM":
/*!******************************************************************************************************!*\
  !*** ./src/components/UserTracker.vue?vue&type=style&index=0&id=74c7a6d8&prod&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_style_index_0_id_74c7a6d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./UserTracker.vue?vue&type=style&index=0&id=74c7a6d8&prod&scoped=true&lang=css& */ \"Frj7\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_style_index_0_id_74c7a6d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_style_index_0_id_74c7a6d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_style_index_0_id_74c7a6d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTracker_vue_vue_type_style_index_0_id_74c7a6d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/UserTracker.vue?");

/***/ })

}]);