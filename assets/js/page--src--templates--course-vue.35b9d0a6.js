(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"4yNf":function(t,e,i){"use strict";var s=i("I+eb"),n=i("4zBA"),a=i("HYAF"),o=i("WSbT"),r=i("V37c"),c=n("".slice),u=Math.max,h=Math.min;s({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var i,s,n=r(a(this)),f=n.length,l=o(t);return l===1/0&&(l=0),l<0&&(l=u(f+l,0)),(i=void 0===e?f:o(e))<=0||i===1/0||l>=(s=h(l+i,f))?"":c(n,l,s)}})},Ied6:function(t,e,i){"use strict";i("oWN+")},hfGJ:function(t,e,i){"use strict";i.r(e);i("07d7"),i("PKPk"),i("3bBZ"),i("+2oP"),i("4yNf"),i("yXV3");var s={components:{MetaInfo:function(){return Promise.all([i.e(1),i.e(2)]).then(i.bind(null,"9qaU"))}},data:function(){return{metaImgPath:""}},watch:{"$route.path":function(){var t=this.$page.course.fileInfo.path.substr(this.$page.course.fileInfo.path.indexOf("/")+1).slice(0,-3);this.metaImgPath="/og/".concat(t),this.$store.commit("SET_CURRENT_REACTION","")}},created:function(){var t=this.$page.course.fileInfo.path.substr(this.$page.course.fileInfo.path.indexOf("/")+1).slice(0,-3);this.metaImgPath="/og/".concat(t.substring(t.indexOf("/")+1))},mounted:function(){var t=this;"allow metrics"===$cookies.get("userTracker")&&(this.$gtag.pageview(this.$route),this.$nextTick((function(){t.$metrika&&t.$metrika.hit(t.$route)})))}},n=(i("Ied6"),i("7uw+")),a=null,o=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("CourseLayout",{attrs:{courseId:String(this.$page.course.courseID),title:String(this.$page.course.title),defaultTitle:String(this.$page.course.defaultName)}},[e("MetaInfo",{attrs:{pageTitle:this.$page.course.title,pageDescription:this.$page.course.description,pageImage:this.metaImgPath}}),e("section",{staticClass:"text__hyphened"},[e("section",{staticClass:"lesson-section container__mid"},[e("VueRemarkContent")],1)])],1)}),[],!1,null,null,null);"function"==typeof a&&a(o);e.default=o.exports},"oWN+":function(t,e,i){}}]);