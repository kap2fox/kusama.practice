(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"7Men":function(t,e,i){},O7Vd:function(t,e,i){"use strict";i("7Men")},wAnW:function(t,e,i){"use strict";i.r(e);i("sMBO");var s={props:{tag:{type:Object,required:!0}},data:function(){return{isActive:null}},methods:{activateTag:function(t,e){var i=e.id,s=e.name;this.isActive=i,this.$emit("activateTag",i),t.target.classList.contains("delete-tag")?this.removeActive(s):this.$store.commit("SET_ACTIVE_TAGS",s)},removeActive:function(t){this.isActive=null,this.$store.commit("REMOVE_ACTIVE_TAGS",t)}}},a=(i("O7Vd"),i("7uw+")),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn btn__tag",class:{active:t.isActive===t.tag.id},on:{click:function(e){return t.activateTag(e,t.tag)}}},[i("span",{staticClass:"btn__text"},[t._v(" "+t._s(t.tag.name))]),t.isActive===t.tag.id?i("span",{staticClass:"delete-tag"}):t._e()])}),[],!1,null,"52751289",null);e.default=n.exports}}]);