(window.webpackJsonp=window.webpackJsonp||[]).push([[2,87],{"9qaU":function(e,t,a){"use strict";a.r(t);var o=a("R9PY").a,i=a("7uw+"),_=a("Kw5r"),s=_.a.config.optionMergeStrategies.computed,n={metadata:{siteName:"Robonomics Academy",siteUrl:"https://robonomics.academy"}},r=function(e){var t=e.options;t.__staticData?t.__staticData.data=n:(t.__staticData=_.a.observable({data:n}),t.computed=s({$static:function(){return t.__staticData.data}},t.computed))},c=Object(i.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);"function"==typeof r&&r(c);t.default=c.exports},R9PY:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("uFwe"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2B1R"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("yq1k"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("JTJg"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__),_data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ean2"),_data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_4__);__webpack_exports__.a={props:{pageTitle:{type:String,default:""},pageDescription:{type:String,default:""},pageImage:{type:String,default:""},pageImageWidth:{type:String,default:"1280"},pageImageHeight:{type:String,default:"765"},pageLang:{type:String,default:"en"},coursePage:{type:Boolean,default:!1},coursePageList:{type:Boolean,default:!1}},data:function(){return{allLocales:["en","ru","es","de","it","pt"],locale:"en",metaTitle:"",metaDescription:"",metaImage:""}},watch:{"$route.path":function(){this.metaTitle=this.getMetaInfo(this.pageTitle),this.metaDescription=this.getMetaInfo(this.pageDescription),this.metaImage=this.pageImage}},computed:{image:function(){return""!=this.pageImage?this.$static.metadata.siteUrl+this.metaImage+"-"+this.locale+".png":this.$static.metadata.siteUrl+"/og/index.png"},url:function(){return this.$static.metadata.siteUrl+this.$route.fullPath},translations:function(){return _data_locales_translations_yaml__WEBPACK_IMPORTED_MODULE_4___default.a},googleCourseInfo:function(){return this.coursePage?[{type:"application/ld+json",json:{"@context":"http://schema.org","@type":"Course",name:this.pageTitle,description:this.pageDescription,provider:{"@type":"Organization",name:"Robonomics Academy",sameAs:"https://robonomics.academy/"},headline:this.pageTitle,image:this.image}}]:this.coursePageList?[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",itemListElement:[{"@type":"ListItem",position:1,item:{"@type":"Course",url:"https://robonomics.academy/online-courses/introduction-course/",name:this.getMetaInfo("Introduction Course"),description:this.getMetaInfo("Welcome Introduction Course!"),provider:{"@type":"Organization",name:"Robonomics Academy",sameAs:"https://robonomics.academy/"}}},{"@type":"ListItem",position:2,item:{"@type":"Course",url:"https://robonomics.academy/online-courses/boston-dynamics-course/",name:this.getMetaInfo("Boston Dynamics Spot Software Developing"),description:this.getMetaInfo("Our new Boston Dynamics Spot Software Developing!"),provider:{"@type":"Organization",name:"Robonomics Academy",sameAs:"https://robonomics.academy/"}}},{"@type":"ListItem",position:3,item:{"@type":"Course",url:"https://robonomics.academy/online-courses/smart-home-course/",name:this.getMetaInfo("Sovereign Smart Home with Robonomics and Home Assistant"),description:this.getMetaInfo("In this course, you will go through all the steps required in order to build your own sovereign smart home, the main advantage of which is the safety / privacy of user data."),provider:{"@type":"Organization",name:"Robonomics Academy",sameAs:"https://robonomics.academy/"}}}]}}]:[]}},methods:{getLocale:function(){var e=this;this.allLocales.map((function(t){e.$route.path.includes("/".concat(t,"/"))&&(e.locale=t)}))},getMetaInfo:function getMetaInfo(alias){var hasAlias=0,_iterator=Object(_home_runner_work_robonomics_academy_robonomics_academy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.translations),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;if(item.alias===alias)return hasAlias++,eval("item.".concat(this.locale))?eval("item.".concat(this.locale)):eval("item.en")}}catch(e){_iterator.e(e)}finally{_iterator.f()}if(0==hasAlias)return alias}},metaInfo:function(){var e=this.locale,t=this.metaTitle+" / "+this.$static.metadata.siteName,a=this.metaDescription,o=this.image;return{title:t,htmlAttrs:{lang:e,amp:!0},meta:[{key:"description",name:"description",content:a},{name:"yandex-verification",content:"291ac12dc046e37f"},{property:"og:type",content:"website"},{property:"og:site_name",content:this.$static.metadata.siteName},{property:"og:title",content:t},{property:"og:description",content:a},{property:"og:image",content:o},{property:"og:image:width",content:this.pageImageWidth},{property:"og:image:height",content:this.pageImageHeight},{property:"og:url",content:this.url},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:t},{name:"twitter:image",content:o},{name:"twitter:description",content:a},{name:"twitter:site",content:"@AIRA_Robonomics"},{name:"twitter:creator",content:"@AIRA_Robonomics"}],script:this.googleCourseInfo}},created:function(){this.getLocale(),this.metaTitle=this.getMetaInfo(this.pageTitle),this.metaDescription=this.getMetaInfo(this.pageDescription),this.metaImage=this.pageImage}}}}]);