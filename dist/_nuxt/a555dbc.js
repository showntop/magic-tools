(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1157:function(t,l,e){"use strict";e(676)},1158:function(t,l,e){var n=e(3)((function(i){return i[1]}));n.push([t.i,".markdown-format pre{font-family:sans-serif}",""]),n.locals={},t.exports=n},1387:function(t,l,e){"use strict";e.r(l);var n=e(58);e(184),e(26);function o(){this.cells=new Array,this.column_widths=new Array,this.output_table=""}function c(t){for(var l=t.length,e=0,i=0;i<l;i++)65280&t.charCodeAt(i)&&e++,e++;return e}o.prototype.add_missing_cell_columns=function(){for(var t=0,l=this.cells.length;t<l;t+=1)for(var e=0,n=this.column_widths.length;e<n;e+=1)void 0===this.cells[t][e]&&(this.cells[t][e]="")},o.prototype.format_table=function(table){this.import_table(table),this.get_column_widths(),this.add_missing_cell_columns(),this.pad_cells_for_output(),this.output_table="| ",this.output_table+=this.cells[0].join(" | "),this.output_table+=" |\n",this.output_table+="|-",this.output_table+=this.cells[1].join("-|-"),this.output_table+="-|\n";for(var t=2,l=this.cells.length;t<l;t+=1)this.output_table+="| ",this.output_table+=this.cells[t].join(" | "),this.output_table+=" |\n"},o.prototype.get_column_widths=function(){this.column_widths=new Array;for(var t=0,l=this.cells.length;t<l;t+=1)for(var e=0,n=this.cells[t].length;e<n;e+=1)(void 0===this.column_widths[e]||this.column_widths[e]<c(this.cells[t][e]))&&(this.column_widths[e]=c(this.cells[t][e]))},o.prototype.import_table=function(table){for(var t=table.split("\n");-1==t[0].indexOf("|");)t.shift();for(var l=0,e=t.length;l<e;l+=1)if(-1!=t[l].indexOf("|")){this.cells[l]=new Array;for(var n=t[l].split("|"),o=0,c=n.length;o<c;o+=1)this.cells[l][o]=n[o],this.cells[l][o]=this.cells[l][o].replace(/^\s+/g,""),this.cells[l][o]=this.cells[l][o].replace(/\s+$/g,""),1==l&&(this.cells[l][o]=this.cells[l][o].replace(/-+/g,"-"))}if(this.get_column_widths(),0==this.column_widths[0])for(l=0,e=this.cells.length;l<e;l+=1)this.cells[l].shift();if(this.get_column_widths(),0==this.column_widths[this.column_widths.length-1])for(l=0,e=this.cells.length;l<e;l+=1)this.cells[l].length==this.column_widths.length&&this.cells[l].pop();this.get_column_widths()},o.prototype.pad_cells_for_output=function(){for(var t=0,l=this.cells.length;t<l;t+=1)for(var e=0,n=this.cells[t].length;e<n;e+=1)if(1!=t)for(;c(this.cells[t][e])<this.column_widths[e];)this.cells[t][e]+=" ";else for(;c(this.cells[t][e])<this.column_widths[e];)this.cells[t][e]+="-"};var h={name:"sitemap",components:{Dynamic:n.a},data:function(){return{content:"",results:""}},watch:{content:function(){this.format_table()}},methods:{format_table:function(){if(this.content){var t="";try{var l=new o;l.format_table(this.content),t=l.output_table}catch(t){}this.results=t||""}}}},r=(e(1157),e(2)),component=Object(r.a)(h,(function(){var t=this,l=t._self._c;return l("nya-closed-container",{staticClass:"markdown-format"},[l("nya-container",{attrs:{title:"markdown表格格式化"}},[l("nya-input",{staticClass:"top-margin-1em",attrs:{fullwidth:"",rows:"5",type:"textarea",autofocus:"",label:"请输入markdown语法表格"},model:{value:t.content,callback:function(l){t.content=l},expression:"content"}})],1),t._v(" "),t.results?l("nya-container",{attrs:{title:"格式化输出"}},[l("nya-copy",{attrs:{copy:t.results}},[l("pre",[t._v(t._s(t.results))])])],1):t._e(),t._v(" "),l("nya-foot-info",{attrs:{title:"Tips"}},[l("li",[t._v(" 让markdown的表格代码更好看")])])],1)}),[],!1,null,null,null);l.default=component.exports},676:function(t,l,e){var content=e(1158);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("05608025",content,!0,{sourceMap:!1})}}]);