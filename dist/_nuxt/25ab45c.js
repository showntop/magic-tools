(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1155:function(t,n,e){"use strict";e(675)},1156:function(t,n,e){var o=e(3)((function(i){return i[1]}));o.push([t.i,".linux_command .nya-subtitle{margin-top:.9375rem}.linux_command li{cursor:pointer}.linux_command li:active,.linux_command li:hover{-webkit-text-decoration:underline;text-decoration:underline}.linux_command .readCommand_modal{background-color:var(--t2);border-radius:.3125rem;max-width:100%;padding:.9375rem}.linux_command .readCommand_modal .title{border-bottom:.0625rem solid #dad9d9;font-size:1.25rem;font-weight:700;margin-bottom:.625rem;padding-bottom:.9375rem;text-align:center}.linux_command .readCommand_modal .close-modal{border-top:.0625rem solid #dad9d9;cursor:pointer;font-size:1.25rem;font-weight:700;margin-top:.9375rem;padding-top:.9375rem;text-align:center}",""]),o.locals={},t.exports=o},1386:function(t,n,e){"use strict";e.r(n);e(30),e(37),e(10),e(68),e(69);var o=e(571),r=e.n(o),l=e(968),c=e.n(l),d=e(627),m=e.n(d),h=(e(628),{name:"LinuxCommand",components:{Dynamic:e(58).a},head:function(){return this.$store.state.currentTool.head},data:function(){return{geting:!0,data:{},searchVal:"",command:null,commandData:null,results:""}},computed:{searchResults:function(){var t=this;return Object.keys(this.data).filter((function(n){return t.data[n].n.toString().toLowerCase().indexOf(t.searchVal.toLowerCase())>=0}))},content:function(){return this.commandData?function(content){return c()(content,{breaks:!0,highlight:function(code){return m.a.highlightAuto(code).value}})}(this.commandData):""}},mounted:function(){if(this.$db.get("linux_command").value()){var t=r()(),n=this.$db.get("linux_command.time").value();t.diff(r.a.unix(n),"day")>1?this.getData():(this.data=this.$db.get("linux_command.data").value(),this.geting=!1)}else this.getData()},methods:{getData:function(){var t=this;this.$axios.get("https://unpkg.com/linux-command@1.2.5/dist/data.json").then((function(n){t.data=n.data,t.$db.set("linux_command",{time:r()().unix(),data:n.data}).write(),t.geting=!1})).catch((function(n){t.$swal({type:"error",title:"下载失败",text:"ERROR: 获取数据失败，请刷新页面重试 ".concat(n)}),t.geting=!1}))},query:function(t){var n=this;this.clear(),this.$store.commit("SET_STORE",{key:"globalLoading",value:!0}),this.$axios.get("https://unpkg.com/linux-command/command/".concat(t,".md")).then((function(e){n.commandData=e.data,n.command=t,n.$store.commit("SET_STORE",{key:"globalLoading",value:!1}),n.$modal.show("readCommand")})).catch((function(t){n.$swal({type:"error",title:"查询失败",text:"ERROR: ".concat(t)}),n.$store.commit("SET_STORE",{key:"globalLoading",value:!1})}))},clear:function(){this.command="",this.commandData=""}}}),f=(e(1155),e(2)),component=Object(f.a)(h,(function(){var t=this,n=t._self._c;return n("nya-closed-container",{staticClass:"linux_command"},[n("client-only",[n("modal",{attrs:{name:"readCommand",classes:"readCommand_modal",height:"auto",width:"800px",scrollable:"",adaptive:""}},[n("div",{staticClass:"title"},[t._v("\n                "+t._s(t.command)+" 命令详情\n            ")]),t._v(" "),n("Dynamic",{staticClass:"content typo",attrs:{template:t.content}}),t._v(" "),n("div",{staticClass:"close-modal",on:{click:function(n){return t.$modal.hide("readCommand")}}},[t._v("\n                关闭\n            ")])],1)],1),t._v(" "),n("nya-container",{attrs:{title:"Linux 命令查询"}},[n("nya-input",{attrs:{label:t.geting?"获取数据中···":"请输入要查询的命令",placeholder:"alias",autocomplete:"off",autofocus:"",fullwidth:""},model:{value:t.searchVal,callback:function(n){t.searchVal="string"==typeof n?n.trim():n},expression:"searchVal"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.searchVal,expression:"searchVal"}],staticClass:"nya-subtitle"},[t._v("\n            搜索结果（点击查看详情）\n        ")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchVal,expression:"searchVal"}],staticClass:"nya-list"},t._l(t.searchResults,(function(e,o){return n("li",{key:o,on:{click:function(n){return t.query(e)}}},[n("b",[t._v(t._s(t.data[e].n))]),t._v("："+t._s(t.data[e].d)+"\n            ")])})),0)],1),t._v(" "),t.results?n("nya-container",{attrs:{title:"查询成功"}},[n("a",{attrs:{href:t.results,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.results)+"\n        ")])]):t._e(),t._v(" "),n("nya-foot-info",{attrs:{title:"Tips"}},[n("li",[t._v("\n            数据来自 "),n("a",{attrs:{href:"https://github.com/jaywcjlove/linux-command",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            jaywcjlove/linux-command\n        ")])]),t._v(" "),n("li",[t._v("部分地区无法访问unpkg的cdn，如果出现网络错误请自行更换环境使用")])])],1)}),[],!1,null,null,null);n.default=component.exports},675:function(t,n,e){var content=e(1156);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("110d6498",content,!0,{sourceMap:!1})}}]);