(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{Kd3E:function(e,t,a){},Qfef:function(e,t,a){"use strict";a("Kd3E")},"Xt/a":function(e,t,a){"use strict";a.r(t);a("07d7"),a("PKPk"),a("3bBZ"),a("R5XZ");var s={components:{Loader:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"VV+c"))}},props:{text:{type:String,required:!0,default:""},lessonTitle:{type:String,default:""}},data:function(){return{gscript:"AKfycbyBVMhvIP3PZAXQRIuLMALNyxh900aJQfEVp8Kzp4u6IlXkV_IF2r4cw_XSPIxuyUOb",captcha:"6Ldn7g0gAAAAAOOL-2KFHiDDDMXtWRy9Xo-5AtcR",email:"",result:this.$response,location:"",comment:"",interval:null}},methods:{form:function(){var e=this;this.interval=setInterval((function(){e.result=e.$response}),1e3)}},mounted:function(){var e=this;this.location="https://robonomics.academy"+this.$route.path,"success"!==this.$response&&"error"!==this.$response||(clearInterval(this.interval),this.result="init"),document.body.addEventListener("click",(function(){e.$store.state.currentReaction&&e.$emit("closeForm")}))}},n=(a("Qfef"),a("7uw+")),o=Object(n.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lesson-reaction-form__wrapper"},[a("div",{staticClass:"lesson-reaction-form__header"},[a("div",[e.$store.state.currentReaction===e.text?a("span",{staticClass:"lesson-reaction__check"}):e._e(),a("h3",[e._v(e._s(e.$store.state.currentReaction))])]),a("span",{staticClass:"lesson-reaction__close",attrs:{tabindex:"0"},on:{click:function(t){return e.$emit("closeForm")}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark","aria-hidden":"true"}})],1)]),"success"!==e.result&&e.$store.state.currentReaction===e.text?a("gsp-form",{staticClass:"lesson-reaction-form__form",class:e.result,attrs:{gscriptID:e.gscript,captchaID:e.captcha}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"container__full",attrs:{type:"email",placeholder:"Your email",required:"","data-gsp-name":"Email","data-gsp-data":e.email},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticClass:"container__full",attrs:{type:"text",placeholder:"Your comment","data-gsp-name":"Comment","data-gsp-data":e.comment},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{type:"hidden",placeholder:"location","data-gsp-name":"Location","data-gsp-data":e.location},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.currentReaction,expression:"$store.state.currentReaction"}],attrs:{type:"hidden",placeholder:"reaction","data-gsp-name":"Reaction","data-gsp-data":e.$store.state.currentReaction},domProps:{value:e.$store.state.currentReaction},on:{input:function(t){t.target.composing||e.$set(e.$store.state,"currentReaction",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lessonTitle,expression:"lessonTitle"}],attrs:{type:"hidden",placeholder:"lessonTitle","data-gsp-name":"Lesson","data-gsp-data":e.lessonTitle},domProps:{value:e.lessonTitle},on:{input:function(t){t.target.composing||(e.lessonTitle=t.target.value)}}}),a("button",{staticClass:"lesson-reaction-form__btn",attrs:{disabled:"wait"===e.result},on:{click:e.form}},["init"===e.result||"error"===e.result?a("div",{staticClass:"lesson-reaction-form__btn-wrapper"},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope","aria-hidden":"true"}}),a("span",[e._v("Tell us more")])],1):e._e(),"wait"===e.result?a("div",{staticClass:"lesson-reaction-form__btn-wrapper"},[a("Loader"),a("span",[e._v("Sending your info...")])],1):e._e()])])]):e._e(),"success"===e.result?a("div",{staticClass:"lesson-reaction-form__success"},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope","aria-hidden":"true"}}),e._m(0)],1):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._v("Thanks,"),t("br"),this._v(" we’ll keep in touch!")])}],!1,null,"2abf8725",null);t.default=o.exports}}]);