(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{UQY4:function(t,s,n){"use strict";n.r(s);n("qePV");var e={props:{lessonId:{type:Number,default:null,required:!0},course:{type:Object,default:function(t){return{path:t.path,lessons:t.lessons}},required:!0}},methods:{},computed:{prevPath:function(){var t="/online-courses/".concat(this.course.path,"/");return this.lessonId-2>=0?t+=this.course.lessons[this.lessonId-2].path:t=!1,t},nextPath:function(){var t="/online-courses/".concat(this.course.path,"/");return this.lessonId<this.course.lessons.length?t+=this.course.lessons[this.lessonId].path:t=!1,t}}},o=(n("kNu9"),n("KHd+")),a=Object(o.a)(e,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"container__reg"},[n("nav",{class:{short:!t.prevPath},attrs:{"aria-labelledby":"Lessons navigation"}},[t.prevPath?n("g-link",{staticClass:"btn navigation__button",attrs:{to:t.prevPath}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left-long"}}),t._v("\n      "+t._s(t.$ts("Previous lesson"))+"\n    ")],1):t._e(),t.nextPath?n("g-link",{staticClass:"btn navigation__button",attrs:{to:t.nextPath}},[t._v("\n      "+t._s(t.$ts("Next lesson"))+"\n      "),n("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right-long"}})],1):t._e()],1)])}),[],!1,null,"03aacc2b",null);s.default=a.exports},kNu9:function(t,s,n){"use strict";n("uI+o")},"uI+o":function(t,s,n){}}]);