(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1Iic":function(t,s,e){"use strict";e("KD33")},KD33:function(t,s,e){},UQY4:function(t,s,e){"use strict";e.r(s);e("qePV");var n={props:{lessonId:{type:Number,default:null,required:!0},course:{type:Object,default:function(t){if(t)return{path:t.path,lessons:t.lessons}}},docs:{type:Array},current:{type:Number}},computed:{prevPath:function(){if(this.course){var t="/online-courses/".concat(this.course.path,"/");return this.lessonId-2>=0?t+=this.course.lessons[this.lessonId-2].path:t=!1,t}if(this.current>-1&&0!==this.current)return"playground/"+this.docs[this.current-1].path},nextPath:function(){if(this.course){var t="/online-courses/".concat(this.course.path,"/");return this.lessonId<this.course.lessons.length?t+=this.course.lessons[this.lessonId].path:t=!1,t}if(this.current>-1&&this.current!==this.docs.length-1)return"playground/"+this.docs[this.current+1].path}}},r=(e("1Iic"),e("7uw+")),o=Object(r.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container__reg"},[e("nav",{class:{short:!t.prevPath},attrs:{"aria-labelledby":"Lessons navigation"}},[t.prevPath?e("g-link",{staticClass:"btn navigation__button",attrs:{to:t.prevPath}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left-long"}}),t._v("\n      "+t._s(t.course?t.$ts("Previous Lesson"):t.$ts("Previous Page"))+"\n    ")],1):t._e(),t.nextPath?e("g-link",{staticClass:"btn navigation__button",attrs:{to:t.nextPath}},[t._v("\n       "+t._s(t.course?t.$ts("Next Lesson"):t.$ts("Next Page"))+"\n      "),e("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right-long"}})],1):t._e()],1)])}),[],!1,null,"84feac08",null);s.default=o.exports}}]);