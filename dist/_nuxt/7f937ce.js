(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1420:function(t,e,n){"use strict";n.r(e);n(43);var l={name:"TemperatureConversion",head:function(){return this.$store.state.currentTool.head},data:function(){return{valC:"",valF:"",valK:"",valRa:"",valRe:""}},methods:{convert:function(t,e){if(t.length<1)this.clear();else{var n=0;switch(t=Number(t),e){case"C":n=t;break;case"F":n=(t-32)/1.8;break;case"K":n=t-273.15;break;case"Ra":n=(t-32-459.67)/1.8;break;case"Re":n=1.25*t}var l=function(i,n){return e===i?t:parseFloat(n.toFixed(2))};n=Number(n),this.valC=l("C",n),this.valF=l("F",1.8*n+32),this.valK=l("K",n+273.15),this.valRa=l("Ra",1.8*n+32+459.67),this.valRe=l("Re",.8*n)}},clear:function(){this.valC="",this.valF="",this.valK="",this.valRa="",this.valRe=""}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nya-closed-container",{staticClass:"temperature_conversion"},[e("nya-container",{attrs:{title:"温度单位转换"}},[e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"摄氏度",placeholder:"请输入摄氏度",value:t.valC,fullwidth:""},on:{input:function(e){return t.convert(e,"C")}}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"华氏度",placeholder:"请输入华氏度",value:t.valF,fullwidth:""},on:{input:function(e){return t.convert(e,"F")}}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"开氏度",placeholder:"请输入开氏度",value:t.valK,fullwidth:""},on:{input:function(e){return t.convert(e,"K")}}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"兰氏度",placeholder:"请输入兰氏度",value:t.valRa,fullwidth:""},on:{input:function(e){return t.convert(e,"Ra")}}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"列氏度",placeholder:"请输入列氏度",value:t.valRe,fullwidth:""},on:{input:function(e){return t.convert(e,"Re")}}}),t._v(" "),e("br")],1),t._v(" "),e("nya-foot-info",{attrs:{title:"Tips"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);