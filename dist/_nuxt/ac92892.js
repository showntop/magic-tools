(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1445:function(t,l,n){"use strict";n.r(l);var e=n(58),o="abcdefjhijklmnopqrstufwxyz",c="ABCDEFJHIJKLMNOPQRSTUFWXYZ",h="0123456789",r={name:"Random",components:{Dynamic:e.a},head:function(){return this.$store.state.currentTool.head},data:function(){return{lowAlpha:!0,upAlpha:!0,numAlpha:!0,specialAlpha:!1,alphaTxt:o+c+h,num:4,len:16,results:"",br:!0,index:0,labels:[{label:"a-z"},{label:"A-Z"},{label:"0-9"},{label:"!@#$%^&*"}]}},watch:{lowAlpha:function(){this.alphaTxt=this.upAlphaTxt()},upAlpha:function(){this.alphaTxt=this.upAlphaTxt()},numAlpha:function(){this.alphaTxt=this.upAlphaTxt()},specialAlpha:function(){this.alphaTxt=this.upAlphaTxt()}},methods:{upAlphaTxt:function(){var t="";return this.lowAlpha&&(t+=o),this.upAlpha&&(t+=c),this.numAlpha&&(t+=h),this.specialAlpha&&(t+="!@#$%^&*.?|'\""),t},gen:function(){for(var t=[],i=0;i<this.num;i++)t.push(this.genOnePwd());this.results=t.join("\n")},genOnePwd:function(){for(var t=this.alphaTxt.length,l="",i=0;i<this.len;i++){var n=Math.floor(Math.random()*t);l+=this.alphaTxt.charAt(n)}return l}}},m=n(2),component=Object(m.a)(r,(function(){var t=this,l=t._self._c;return l("nya-closed-container",{staticClass:"random"},[l("nya-container",{attrs:{title:"随机密码生成器"}},[l("div",{staticClass:"nya-input mb-15"},[l("label",{staticClass:"input-title"},[l("span",{staticStyle:{"padding-right":"1em"}},[t._v(" 使用字符： ")]),t._v(" "),l("nya-checkbox",{attrs:{label:"a-z"},model:{value:t.lowAlpha,callback:function(l){t.lowAlpha=l},expression:"lowAlpha"}}),t._v(" "),l("nya-checkbox",{attrs:{label:"A-Z"},model:{value:t.upAlpha,callback:function(l){t.upAlpha=l},expression:"upAlpha"}}),t._v(" "),l("nya-checkbox",{attrs:{label:"0-9"},model:{value:t.numAlpha,callback:function(l){t.numAlpha=l},expression:"numAlpha"}}),t._v(" "),l("nya-checkbox",{attrs:{label:"!@#$%^&*"},model:{value:t.specialAlpha,callback:function(l){t.specialAlpha=l},expression:"specialAlpha"}}),t._v(" "),l("span",{staticStyle:{padding:"0 1em",color:"gray"}},[t._v(" | ")])],1)]),t._v(" "),l("nya-input",{staticClass:"mb-15",attrs:{fullwidth:"",label:"密码簿",placeholder:"abcABC0-9",autocomplete:"off"},model:{value:t.alphaTxt,callback:function(l){t.alphaTxt="string"==typeof l?l.trim():l},expression:"alphaTxt"}}),t._v(" "),l("nya-input",{staticClass:"mb-15",attrs:{type:"number",label:"密码长度",placeholder:"16",autocomplete:"off"},model:{value:t.len,callback:function(l){t.len="string"==typeof l?l.trim():l},expression:"len"}}),t._v(" "),l("nya-input",{staticClass:"mb-15",attrs:{type:"number",label:"生成数量",placeholder:"10",autocomplete:"off"},model:{value:t.num,callback:function(l){t.num="string"==typeof l?l.trim():l},expression:"num"}}),t._v(" "),l("div",{staticClass:"nya-btn btn-danger",on:{click:t.gen}},[t._v("\n            生成密码\n        ")])],1),t._v(" "),t.results.length?l("nya-container",{attrs:{title:"随机密码如下"}},[l("nya-copy",{attrs:{copy:t.results}},[l("pre",[t._v(t._s(t.results))])])],1):t._e(),t._v(" "),l("nya-foot-info",{attrs:{title:"Tips"}})],1)}),[],!1,null,null,null);l.default=component.exports}}]);