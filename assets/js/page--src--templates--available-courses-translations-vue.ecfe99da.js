(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BGoi:function(n,t){n.exports=[{lang:"English",abbr:"en",id:0},{lang:"Русский",abbr:"ru",id:1},{lang:"Español",abbr:"es",id:2},{lang:"Deutsch",abbr:"de",id:3},{lang:"Italiano",abbr:"it",id:4},{lang:"Português",abbr:"pt",id:5}]},KA2E:function(n,t,e){"use strict";e.r(t);e("07d7"),e("PKPk"),e("3bBZ"),e("TeQF"),e("rB9j"),e("Rm1S");var s=e("BGoi"),a=e.n(s),o={components:{MetaInfo:function(){return Promise.all([e.e(1),e.e(2)]).then(e.bind(null,"9qaU"))}},data:function(){return{lessonTitle:"",courseID:"",lessonNumber:"",defaultName:""}},computed:{lessonsList:function(){var n=this;return this.$page.courses.edges.filter((function(t){return t.node.path.match(/\/([^\/]+)[\/]?$/)[1]===n.postTitle}))},locales:function(){return a.a}},methods:{redirectToChosenLocale:function(n){window.location.href=n},getLanguage:function(n){return a.a.filter((function(t){return t.abbr===n}))}},created:function(){var n=this.$route.path.match(/\/([^\/]+)[\/]?$/);this.postTitle=n[1],this.courseID=this.lessonsList[0].node.courseID,this.lessonNumber=this.lessonsList[0].node.lessonNumber,this.defaultName=this.lessonsList[0].node.defaultName}},r=(e("KrRr"),e("7uw+")),i=null,l=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("CourseLayout",{attrs:{courseId:String(n.courseID),lessonId:String(n.lessonNumber),noTranslations:"",defaultTitle:n.defaultName}},[e("MetaInfo",{attrs:{pageTitle:"Available Translations",pageDescription:"This lesson has no translation yet. Please see another available translations"}}),e("section",{staticClass:"container__reg"},[e("p",{staticClass:"no-translations__text"},[n._v("\n      This lesson has no translation for "+n._s(n.$locale&&n.getLanguage(n.$locale)[0].lang)+". Please see another available translations:\n    ")]),e("div",{staticClass:"no-translations__wrapper"},n._l(n.lessonsList,(function(t){return e("a",{key:t.node.id,staticClass:"no-translations__link btn__outline",attrs:{href:t.node.path},on:{click:function(e){return n.redirectToChosenLocale(t.node.path)}}},[n._v("\n      \n        "+n._s(n.getLanguage(t.node.path.replace(/^\/([^\/]*).*$/,"$1"))[0].lang)+"\n\n      ")])})),0)])],1)}),[],!1,null,"1860466e",null);"function"==typeof i&&i(l);t.default=l.exports},KrRr:function(n,t,e){"use strict";e("rLYW")},Rm1S:function(n,t,e){"use strict";var s=e("xluM"),a=e("14Sl"),o=e("glrk"),r=e("UMSQ"),i=e("V37c"),l=e("HYAF"),u=e("3Eq5"),c=e("iqWW"),d=e("FMNM");a("match",(function(n,t,e){return[function(t){var e=l(this),a=null==t?void 0:u(t,n);return a?s(a,t,e):new RegExp(t)[n](i(e))},function(n){var s=o(this),a=i(n),l=e(t,s,a);if(l.done)return l.value;if(!s.global)return d(s,a);var u=s.unicode;s.lastIndex=0;for(var f,h=[],g=0;null!==(f=d(s,a));){var b=i(f[0]);h[g]=b,""===b&&(s.lastIndex=c(a,r(s.lastIndex),u)),g++}return 0===g?null:h}]}))},rLYW:function(n,t,e){}}]);