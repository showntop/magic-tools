(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1403:function(t,e,n){"use strict";n.r(e);n(86),n(184),n(26);var r={name:"Amount",head:function(){return this.$store.state.currentTool.head},data:function(){return{amount:"9,905.62",otherAmount:"0",day:"141",financing_rate:"0.025",financing_service_rate:"0.0008",radio:"1",results:"",rate_per_year:!0}},mounted:function(){this.update_result()},watch:{amount:function(){this.results=this.update_result()},otherAmount:function(){this.results=this.update_result()},day:function(){this.results=this.update_result()},financing_rate:function(){this.results=this.update_result()},financing_service_rate:function(){this.results=this.update_result()},radio:function(){this.results=this.update_result()}},methods:{handleChange:function(){this.rate_per_year=!this.rate_per_year,this.results=this.update_result()},update_result:function(){var t=[];if(this.radio.trim()&&this.radio.startsWith("["))try{var e=JSON.parse(this.radio.trim()),n=0;console.log("解析数据:",e);for(var i=0;i<e.length;i++)t.push(e[i].ratio-n),n=e[i].ratio}catch(e){console.log(e),t.push(100)}else if(this.radio.trim())if(this.radio.indexOf(",")>=0)for(var r=this.radio.trim().split(","),o=0;o<r.length;o++)t.push(parseFloat(r[o]));else{var l=parseFloat(this.radio.trim());l<1?t.push(100*l):1==l||l>=100?t.push(100):t.push(l)}else t.push(100);0===t.length&&t.push(100),console.log("计算成本",t);for(var c="",h=parseFloat(this.amount.trim().replaceAll(",",""))+parseFloat(this.otherAmount.trim().replace(",","")),f=0;f<t.length;f++){var d=this.calculate_financing_amount(h*t[f]/100,this.day.trim(),this.financing_rate.trim(),this.financing_service_rate.trim(),parseFloat(t[f])/100,this.rate_per_year);c+="第"+(f+1)+"期:\n比例:"+t[f]+"\n"+d+"\n-----------\n",console.log(c)}return this.results=c,c},calculate_financing_amount:function(t,e,n,r,o,l){var c=(e/360).toFixed(8),h=l?c:1;console.log("perYear:",l,h);var f=parseFloat((t/(1-n*c-r*h)).toFixed(2)),d=parseFloat((f-t).toFixed(2)),m=parseFloat((f*r*h).toFixed(2)),_=d-m,v=f-d,y=t*o+d;return"申请金额: "+f.toFixed(2)+"\n预计融资金额: "+v.toFixed(2)+"\n融资成本: "+d.toFixed(2)+"\n预计融资利息: "+_.toFixed(2)+"\n预计运维支出: "+m.toFixed(2)+"\n本期申请支付金额: "+y.toFixed(2)}}},o=r,l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("nya-closed-container",{attrs:{title:"融资成本计算"}},[e("nya-container",[e("nya-input",{staticClass:"mb-15",attrs:{label:"预计放款",placeholder:"9,905.62",autocomplete:"off",autofocus:""},model:{value:t.amount,callback:function(e){t.amount="string"==typeof e?e.trim():e},expression:"amount"}}),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{label:"其他费用",placeholder:"0",autocomplete:"off",autofocus:""},model:{value:t.otherAmount,callback:function(e){t.otherAmount="string"==typeof e?e.trim():e},expression:"otherAmount"}}),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{label:"融资账期",type:"number",placeholder:"141",autocomplete:"off",autofocus:""},model:{value:t.day,callback:function(e){t.day="string"==typeof e?e.trim():e},expression:"day"}}),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{label:"预计融资利率",type:"number",placeholder:"0.025",autocomplete:"off",autofocus:""},model:{value:t.financing_rate,callback:function(e){t.financing_rate="string"==typeof e?e.trim():e},expression:"financing_rate"}}),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{label:"预计运维利率",type:"number",placeholder:"0.0008",autocomplete:"off",autofocus:""},model:{value:t.financing_service_rate,callback:function(e){t.financing_service_rate="string"==typeof e?e.trim():e},expression:"financing_service_rate"}}),t._v(" "),e("nya-checkbox",{attrs:{checked:t.rate_per_year,label:"年化"},on:{change:t.handleChange}}),t._v(" "),e("nya-input",{attrs:{label:"分期比例(规则如一次付完，输入1； 一期付90%，两期付完: 90,100; 三期付完: 60,90,100)",placeholder:"90,100",autocomplete:"off",autofocus:"",fullwidth:""},model:{value:t.radio,callback:function(e){t.radio="string"==typeof e?e.trim():e},expression:"radio"}})],1),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.results,expression:"results"}],attrs:{title:"融资信息计算结果"}},[e("pre",[t._v(t._s(t.results))])]),t._v(" "),e("nya-container",{attrs:{title:"计算公式如下"}},[e("pre",[e("code",[t._v("\n## 年化\n申请金额 = 预计放款 / (1 - 融资账期 * 预计融资利率 / 360 - 融资账期 * 预计运维利率 / 360)\n融资成本 = 申请金额 - 预计放款\n预计运维支出 = 申请金额 * 预计运维利率 * day / 360\n预计融资利息 = 申请金额 - 融资成本\n\n## 按次\n申请金额 = 预计放款 / (1 - 融资账期 * 预计融资利率 / 360 - 预计运维利率)\n融资成本 = 申请金额 - 预计放款\n预计运维支出 = 申请金额 * 预计运维利率\n预计融资利息 = 申请金额 - 融资成本\n\n")])])]),t._v(" "),e("nya-foot-info",{attrs:{title:"Tips"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);