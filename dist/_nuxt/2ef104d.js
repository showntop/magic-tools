(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1452:function(t,e,n){"use strict";n.r(e);n(184);var l=n(29),o=n.n(l),r={name:"RemoveDuplicate",head:function(){return this.$store.state.currentTool.head},data:function(){return{content:"",index:1,splitChar:"",labels:[{label:"换行去重"},{label:"全局去重"},{label:"指定分隔符去重"}]}},watch:{index:function(){this.splitChar=""}},computed:{result:function(){if(0===this.index)return o.a.chain(this.content.split("\n")).uniq().join("\n").value();if(1===this.index){for(var t="",i=0;i<this.content.length;i++)t.indexOf(this.content[i])<0&&(t+=this.content[i]);return t}return this.splitChar?o.a.chain(this.content.split(this.splitChar)).uniq().join(this.splitChar).value():this.content}}},c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("nya-closed-container",{staticClass:"remove_duplicate"},[e("nya-container",{attrs:{title:"文本去重"}},[e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n            选择\n        ")]),t._v(" "),e("div",{staticClass:"radio-group"},[e("nya-radio-group",{model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.labels,(function(label,i){return e("nya-radio",{key:i,staticClass:"mr-15",attrs:{value:i,label:label.label}})})),1)],1),t._v(" "),e("nya-input",{directives:[{name:"show",rawName:"v-show",value:2===t.index,expression:"index === 2"}],attrs:{label:"自定义分隔符",subtitle:"subtitle",type:"text",autocomplete:"on",autofocus:"",placeholder:""},model:{value:t.splitChar,callback:function(e){t.splitChar="string"==typeof e?e.trim():e},expression:"splitChar"}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{attrs:{fullwidth:"",rows:"8",type:"textarea",autofocus:"",autocomplete:"off",label:"待处理的内容",placeholder:"aaa\naaa"},model:{value:t.content,callback:function(e){t.content="string"==typeof e?e.trim():e},expression:"content"}})],1),t._v(" "),t.result?e("nya-container",{attrs:{title:"处理结果"}},[e("nya-copy",{attrs:{copy:t.result}},[e("div",{domProps:{textContent:t._s(t.result)}})])],1):t._e(),t._v(" "),e("nya-foot-info",{attrs:{title:"Tips"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);