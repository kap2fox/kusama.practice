(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4yNf":function(t,e,n){"use strict";var a=n("I+eb"),i=n("4zBA"),o=n("HYAF"),s=n("WSbT"),r=n("V37c"),u=i("".slice),c=Math.max,l=Math.min;a({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var n,a,i=r(o(this)),p=i.length,g=s(t);return g===1/0&&(g=0),g<0&&(g=c(p+g,0)),(n=void 0===e?p:s(e))<=0||n===1/0||g>=(a=l(g+n,p))?"":u(i,g,a)}})},"7Elz":function(t,e,n){"use strict";n.r(e);n("07d7"),n("PKPk"),n("3bBZ"),n("+2oP"),n("4yNf"),n("yXV3");var a={components:{MetaInfo:function(){return Promise.all([n.e(1),n.e(2)]).then(n.bind(null,"9qaU"))}},data:function(){return{metaImgPath:""}},watch:{"$route.path":function(){var t=this.$page.playground.fileInfo.path.substr(this.$page.playground.fileInfo.path.indexOf("/")+1).slice(0,-3);this.metaImgPath="/og/".concat(t),this.$store.commit("SET_CURRENT_REACTION","")}},mounted:function(){var t=this.$page.playground.fileInfo.path.substr(this.$page.playground.fileInfo.path.indexOf("/")+1).slice(0,-3);this.metaImgPath="/og/".concat(t.substring(t.indexOf("/")+1))}},i=n("7uw+"),o=null,s=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("LayoutPlayground",{attrs:{docId:String(this.$page.playground.docId)}},[e("MetaInfo",{attrs:{pageTitle:this.$page.playground.title,pageDescription:this.$page.playground.description,pageImage:this.metaImgPath}}),e("section",{staticClass:"text__hyphened"},[e("section",{staticClass:"container__reg lesson-section"},[e("VueRemarkContent")],1)])],1)}),[],!1,null,null,null);"function"==typeof o&&o(s);e.default=s.exports}}]);