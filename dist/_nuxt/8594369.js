(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1408:function(t,e,n){"use strict";n.r(e);n(86),n(184);var o=n(626),r={name:"UrlFormat",head:function(){return this.$store.state.currentTool.head},data:function(){return{context:"",index:0,labels:[{label:"URL参数解析",place:this.$store.state.env.url+"?a=1&b=2"},{label:"请求头转JSON",place:"accept-encoding: gzip, deflate, br\naccept-language: zh-CN,zh;q=0.9,en;q=0.8\ncache-control: no-cache"},{label:"JSON转请求头",place:'{\n  "accept-encoding": "gzip, deflate, br",\n  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",\n  "cache-control": "no-cache"\n}'},{label:"URL编码",place:this.$store.state.env.url+"?name=一灰灰blog"},{label:"URL解码",place:this.$store.state.env.url+"?name%3D%E4%B8%80%E7%81%B0%E7%81%B0blog"},{label:"Cookie格式化",place:"_ga=GA1.2.1056273789.1628510837; _t2=d990caf1-fdc5-4397-92e8-843f1e6e97d6;"}]}},watch:{index:function(){this.context=""}},computed:{results:function(){return this.context?(0===this.index?t=this.format_args():1===this.index?t=this.header_to_json():2===this.index?t=this.json_to_header():3===this.index?t=this.url_encode():4===this.index?t=this.url_decode():5===this.index&&(t=this.cookie_parse()),t instanceof String||"string"==typeof t?t:JSON.stringify(t,null,2)):"";var t}},methods:{format_args:function(){if(this.context.startsWith("http")){return!!/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(this.context)&&Object(o.a)(this.context)}return!!/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(this.context)&&Object(o.a)(this.context)},header_to_json:function(){for(var t=this.context.split("\n"),e={},i=0;i<t.length;i++){var n=t[i],o=0;o=n.startsWith(":")?n.indexOf(":",1):n.indexOf(":");var r=n.substring(0,o),l=n.substring(o+1);e[r.trim()]=l.trim()}return e},json_to_header:function(){try{var t=JSON.parse(this.context),e="",n=!0;for(var o in t)n?n=!1:e+="\n",e+=o+":"+t[o];return e}catch(t){return"非法的json串"}},url_encode:function(){return encodeURIComponent(this.context)},url_decode:function(){return decodeURIComponent(this.context)},cookie_parse:function(){return this.context.replaceAll(";","\n").replaceAll(" ","")}}},l=(n(964),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("nya-closed-container",{staticClass:"url_format"},[e("nya-container",{attrs:{title:"HTTP解析"}},[e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n            选择\n        ")]),t._v(" "),e("div",{staticClass:"radio-group"},[e("nya-radio-group",{model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.labels,(function(label,i){return e("nya-radio",{key:i,staticClass:"mr-15",attrs:{value:i,label:label.label}})})),1)],1),t._v(" "),e("nya-input",{attrs:{label:"请输入",placeholder:t.labels[t.index].place,rows:"5",type:"textarea",autocomplete:"on",autofocus:"",fullwidth:""},model:{value:t.context,callback:function(e){t.context="string"==typeof e?e.trim():e},expression:"context"}}),t._v(" "),e("div",{staticClass:"top-padding"},[t.results?e("nya-container",{attrs:{title:"解析结果"}},[e("nya-copy",{attrs:{copy:t.results}},[e("pre",{domProps:{textContent:t._s(t.results)}})])],1):t._e()],1)],1),t._v(" "),e("nya-foot-info",{attrs:{title:"Tips"}})],1)}),[],!1,null,null,null);e.default=component.exports},626:function(t,e,n){"use strict";n(184);e.a=function(t){if(t&&t.indexOf("?")>-1){var e=t.split("?")[1],n={},o=e.length?e.split("&"):[],r=null,l=null,c=null,i=0,d=o.length;for(i=0;i<d;i++)r=o[i].split("="),l=decodeURIComponent(r[0]),c=decodeURIComponent(r[1]),l.length&&(n[l]=c);return n}return{}}},673:function(t,e,n){var content=n(965);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("de6f3550",content,!0,{sourceMap:!1})},964:function(t,e,n){"use strict";n(673)},965:function(t,e,n){var o=n(3)((function(i){return i[1]}));o.push([t.i,".top-padding{padding-top:1em}",""]),o.locals={},t.exports=o}}]);