(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--en--learn--spot-try-it-out--overview-md"],{

/***/ "+WgP":
/*!*************************************************************************************!*\
  !*** ./courses/en/learn/spot-try-it-out/overview.md?vue&type=template&id=1a6b844c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4a610d07_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_1a6b844c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4a610d07-vue-loader-template\"}!../../../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=template&id=1a6b844c& */ \"+eWZ\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4a610d07_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_1a6b844c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4a610d07_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_1a6b844c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/en/learn/spot-try-it-out/overview.md?");

/***/ }),

/***/ "+eWZ":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4a610d07-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/en/learn/spot-try-it-out/overview.md?vue&type=template&id=1a6b844c& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"With this tutorial you will be able to see in simulation what real Spot did.\")]),_c('h2',{attrs:{\"id\":\"requirements\"}},[_c('a',{attrs:{\"href\":\"#requirements\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Requirements\")]),_c('ul',[_c('li',[_vm._v(\"ROS melodic desktop (installation instructions \"),_c('a',{attrs:{\"href\":\"http://wiki.ros.org/melodic/Installation/Ubuntu\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"here\")]),_vm._v(\")\")])]),_c('br'),_c('h2',{attrs:{\"id\":\"install-package\"}},[_c('a',{attrs:{\"href\":\"#install-package\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Install package\")]),_vm._v(\"\\nCreate workspace and clone packages:\\n\"),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nmkdir -p ~/catkin_ws/src\\ncd ~/catkin_ws/src\\ngit clone https://github.com/clearpathrobotics/spot_ros.git\\ngit clone https://github.com/ros/geometry2 --branch 0.6.5\\n\\n\")]),_c('p',[_vm._v(\"Open the \"),_c('code',{pre:true},[_vm._v(\"view_model.launch\")]),_vm._v(\" file:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\nnano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch\\n\")]),_c('p',[_vm._v(\"And set \"),_c('code',{pre:true},[_vm._v(\"use_sim_time\")]),_vm._v(\" parameter to \"),_c('code',{pre:true},[_vm._v(\"true\")]),_vm._v(\", file must look like this:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"language-xml\"}},[_vm._v(\"<launch>\\n  <param name=\\\"/use_sim_time\\\" value=\\\"true\\\"/>\\n  <include file=\\\"$(find spot_description)/launch/description.launch\\\"/>\\n\\n  <node name=\\\"joint_state_publisher_gui\\\" pkg=\\\"joint_state_publisher_gui\\\" type=\\\"joint_state_publisher_gui\\\" />\\n\\n  <node name=\\\"rviz\\\" pkg=\\\"rviz\\\" type=\\\"rviz\\\" args=\\\"-d $(find spot_viz)/rviz/model.rviz\\\" />\\n</launch>\\n\")])]),_c('p',[_vm._v(\"Then install dependencies:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\ncd ~/catkin_ws/\\nrosdep install --from-paths src --ignore-src -y\\ncatkin_make\\n\")]),_c('h2',{attrs:{\"id\":\"run\"}},[_c('a',{attrs:{\"href\":\"#run\",\"aria-hidden\":\"true\"}},[_c('span',{staticClass:\"icon icon-link\"})]),_vm._v(\"Run\")]),_c('p',[_vm._v(\"Get example rosbag file:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\",\"codeClass\":\"big-code\"}},[_vm._v(\"\\nwget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef\\n\")]),_c('p',[_vm._v(\"Run rviz with the Spot model:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsource ~/catkin_ws/devel/setup.bash\\nroslaunch spot_viz view_model.launch\\n\")]),_c('p',[_vm._v(\"Then in a new terminal:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nsource ~/catkin_ws/devel/setup.bash\\nroslaunch spot_viz view_robot.launch\\n\")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"spot-try-it-out/spot.jpg\",\"alt\":\"spot_viz\"}}),_c('p',[_vm._v(\"Play rosbag file and you will see the robot move:\")]),_c('LessonCodeWrapper',{attrs:{\"language\":\"bash\"}},[_vm._v(\"\\nrosbag play spot_rosbag.bag\\n\")]),_c('LessonImages',{attrs:{\"imageClasses\":\"mb\",\"src\":\"spot-try-it-out/spot2.jpg\",\"alt\":\"spot_viz\"}}),_c('p',[_vm._v(\"Looking for possibilities to operate Boston Dynamics Spot in real life? We have \"),_c('a',{attrs:{\"href\":\"/online-courses/boston-dynamics-course/\"}},[_vm._v(\"course and remote control\")]),_vm._v(\" service for it.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./courses/en/learn/spot-try-it-out/overview.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224a610d07-vue-loader-template%22%7D!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "7+EY":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/en/learn/spot-try-it-out/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_kusama_practice_kusama_practice_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_kusama_practice_kusama_practice_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/en/learn/spot-try-it-out/overview.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "70SS":
/*!***************************************************************************************************************!*\
  !*** ./courses/en/learn/spot-try-it-out/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Xr65\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/en/learn/spot-try-it-out/overview.md?");

/***/ }),

/***/ "Hgm/":
/*!**********************************************************************************************************!*\
  !*** ./courses/en/learn/spot-try-it-out/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"7+EY\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/en/learn/spot-try-it-out/overview.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "Xr65":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/en/learn/spot-try-it-out/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Operate Boston Dynamics Spot\",\n  \"lastUpdate\": \"Thu May 04 2023 12:53:28 GMT+0400 (Samara Standard Time)\",\n  \"description\": \"Operate Boston Dynamics Spot\",\n  \"metaOptions\": [\"Learn\"],\n  \"defaultName\": \"Operate Boston Dynamics Spot\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/en/learn/spot-try-it-out/overview.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/gridsome/node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "f3VC":
/*!******************************************************!*\
  !*** ./courses/en/learn/spot-try-it-out/overview.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _overview_md_vue_type_template_id_1a6b844c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.md?vue&type=template&id=1a6b844c& */ \"+WgP\");\n/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"7uw+\");\n/* harmony import */ var _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"Hgm/\");\n/* harmony import */ var _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"70SS\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _overview_md_vue_type_template_id_1a6b844c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _overview_md_vue_type_template_id_1a6b844c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/en/learn/spot-try-it-out/overview.md?");

/***/ })

}]);