skuid.runtime.registerApi("v2","skuidvisCharts",function(e){var t=function(e){var t={};function i(a){if(t[a]){return t[a].exports}var l=t[a]={i:a,l:false,exports:{}};e[a].call(l.exports,l,l.exports,i);l.l=true;return l.exports}i.m=e;i.c=t;i.d=function(e,t,a){if(!i.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:a})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(e,t){if(t&1)e=i(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var a=Object.create(null);i.r(a);Object.defineProperty(a,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";return i(i.s=743)}({54:function(t,i,a){"use strict";a.d(i,"a",function(){return r});a.d(i,"b",function(){return s});const l=e.utils,n=e.$;function r(t,i){return l.mergeAsTextInContext(t||e.$L("Select_Option_None"),i||{})}const s={edit:function e(t){let i,a=t.entries,s="change.skuid",o=t.onChange,u;if(l.isFunction(a)){a=a()}i=n("<select>");let d=false,c=t.value||t.value===""||t.value===0,f={},p=t.defaultValue,g=[],h=c?t.value:"",y=l.isString(h)?h.replace(/\"/g,'\\"'):h,x=l.isString(p)?p.replace(/\"/g,'\\"'):p;if(a){n.each(a,function(e,t){let i=t.value,a=n("<option>").attr("value",i).text(t.label);if(t.disabled===true)a.prop("disabled",true);f[i]=a;g.push(a)})}if(h&&l.isUndefined(f[h])){f[h]=n("<option>").attr("value",h).text(t.label?t.label:h);g.unshift(f[h])}if(!t.required||t.addNoneOption){g.unshift(n("<option>").attr("value","").text(r(t.noneLabel)))}if(g.length){i.append(g)}if(c&&h in f){d=true}if(c&&d){i.val(h);i.children('[value="'+y+'"]').attr("selected",true)}else{if(typeof p!=="undefined"&&p in f){i.val(p);i.children('[value="'+x+'"]').attr("selected",true)}}if(o){u=i.val();i.off(s).on(s,function(){o(i.val(),u);u=i.val()})}return i}}},743:function(t,i,a){"use strict";a.r(i);var l=a(54);(function(e){let t=e.$,i=e.utils,a=e.time,n=e.events.subscribe,r=false,s="CURRENCY",o="PICKLIST",u=e.visualizations,d=u.core,c=u.chart,f=e.currency,p=function i(a){let l={plotOptions:{series:{animation:0}}},n=a.renderObj,r=c.types[n.type],s=r.hcType||n.type||"";if(s){l.plotOptions[s]={cursor:"pointer"};l.chart={type:s,zoomType:"xy"}}if(n.exporting){l.exporting=n.exporting}if(n.credits){l.credits=n.credits}if(n.title!==undefined&&n.title.text!==undefined){t.extend(true,l,{title:{text:n.title.text}})}if(n.subtitle!==undefined&&n.subtitle.text!==undefined){t.extend(true,l,{subtitle:{text:n.subtitle.text}})}if(n.stacked===true){t.extend(l.plotOptions.series,{stacking:"normal"})}if(n.legend){if(n.legend.layout==="off"){l.legend={enabled:false}}else{l.legend={layout:n.legend.layout,align:n.legend.halign,verticalAlign:n.legend.valign}}if(n.legend.showLabels===true||n.legend.showLabels===false){l.plotOptions[s].dataLabels={enabled:n.legend.showLabels}}if(a.metadata.hasDataLabels===true&&n.legend.layout!=="off"&&(n.legend.layout||n.legend.halign||n.legend.valign)){l.plotOptions[s].showInLegend=true}}if(n.tooltip){l.tooltip={valuePrefix:n.tooltip.valuePrefix,valueSuffix:n.tooltip.valueSuffix}}if(n.colors){l.colors=n.colors}if(n.backgroundColor){l.chart.backgroundColor=n.backgroundColor}if(n.height){l.chart.height=n.height}if(a.dataAxes&&a.dataAxes.length>0){l.yAxis=[];if(a.metadata.hasXY===true){l.xAxis=[]}t.each(a.dataAxes,function(){let e={id:this.id};if(this.flip===true){e.opposite=true}if(this.title){e.title={text:this.title}}if(this.allowDecimals===false)e.allowDecimals=false;if(this.minValue!==undefined)e.min=this.minValue;if(this.maxValue!==undefined)e.max=this.maxValue;if(this.type==="xaxis"){l.xAxis.push(e)}else{l.yAxis.push(e)}})}if(a.categoryAxes){l.xAxis=[];t.each(a.categoryAxes,function(){let e={id:this.id};if(this.flip===true){e.opposite=true}if(this.title){e.title={text:this.title}}if(this.values){e.categories=t.map(this.values,function(e,t){return t})}l.xAxis.push(e)})}if(n.series){l.series=n.series;h(a,l.series)}if(r.additionalProps){r.additionalProps(l)}t.extend(l.chart,{reflow:false});if(n.beforeRenderSnippet!==undefined){let t=e.snippet.getSnippet(n.beforeRenderSnippet);if(t!==undefined)t(l)}if(a.container.highcharts())a.container.highcharts().destroy();a.container.highcharts(l);a.getHighchartsObject=function(){return a.container.highcharts()};a.getHCConfig=function(){return l}},g=function e(i){let a=i.getHighchartsObject(),l={},n=[];if(i.categoryAxes){t.each(i.categoryAxes,function(){let e=this,i=t.map(e.values,function(e,t){return t}),l=a.get(e.id);l.setCategories(i,false)})}h(i,i.renderObj.series);t.each(i.renderObj.series,function(e,t){let n=a.get(t.id);l[t.id]=true;if(n){if(i.renderObj.series.length===1){n.setData(t.data,false)}else{a.get(t.id).remove(false);a.addSeries(t,false)}}else{a.addSeries(t,false)}});t.each(a.series,function(e,t){if(!t){return false}else if(!l[t.options.id]){n.push(t.options.id)}});n.forEach(e=>{a.get(e).remove(false)});a.colorCounter=0;a.redraw()},h=function i(a,l){let n=function i(l,n){return{events:{click(i){let r=i.point.actionIndex,s,o;if(l.allSeriesActions&&r>=0){let e=l.allSeriesActions[r];o=t(e.context).attr("modelId"),s=e.actions}else if(!l.allSeriesActions){s=n;o=t(l.actionsContext).attr("modelId")}else{return}e.actions.runActionsNode(s,a,{model:e.$M(o)||a.model,rows:i.point.sk_rows,$Chart:{point:i.point}})}}}};t.each(l,function(e,i){let a=i.actions;if(i.type){i.type=c.types[i.type].hcType||i.type}if(i.allSeriesActions&&i.allSeriesActions.length||a){t.extend(true,i,n(i,a))}else{i.allowPointSelect=true}})},y=function e(t,a){let l=a.valueFieldMetadata;let n=l.displaytype;let r=l.scale;if(n==="CURRENCY"){a.tooltip={valuePrefix:i.decodeHTML(f.getSymbol(t)),valueSuffix:" "+t}}else if(n==="PERCENT"){a.tooltip={valueSuffix:" %"}}if(r!==undefined){if(a.tooltip===undefined)a.tooltip={};a.tooltip.valueDecimals=r;a.dataLabels={format:"{y:,.".concat(r,"f}")}}},x=function e(i,a){if(a&&a.displaytype==="PICKLIST"&&a.picklistEntries.length>0){let e={};t.each(a.picklistEntries,function(){let a=this.label||this.value;t.each(i,function(t){let l=this;if(l.splitFieldValue===a){e[t]=l;delete i[t]}})});t.extend(e,i);return e}return i},v=function e(t){let l=t||{},n=l.model,r=l.row,s=l.field,o=l.type,u=l.dategranularity,d=l.template,c=l.val,f,p,g={model:n,activeCurrency:l.activeCurrency};if(!c){if(o==="field"&&s&&n&&r){f=A(s.name||s.id,r,g)}if(o==="template"&&d&&n&&r){f=i.mergeAsText("row",d,{},n,r)}}if((o==="field"&&f||c)&&u){let e=s&&s.displaytype,t=e==="DATETIME"?a.parseSFDateTime:a.parseSFDate,i=c?c:t(f),l=a.formatDate;if(e==="DATETIME"&&!c){i=a.getLocalDateTime(i)}if(i){switch(u){case"day":p=a.makeFormattedDateFromJS(i);break;case"calweek":p=Math.ceil(parseInt(l("o",i),10)/7)+" ("+i.getFullYear()+")";break;case"calmonth":p=l("M yy",i);break;case"calquarter":p="Q"+Math.ceil((parseInt(i.getMonth(),10)+1)/3)+" "+i.getFullYear();break;case"calyear":p=l("yy",i);break;case"fq":break;case"fy":break;case"calmonthinyear":break;case"caldayinmonth":break}}}if(p===undefined)p=c||f;return{rawVal:c||f,displayVal:p}},m=function e(t,a){let l=t.valueFieldMetadata,n=t.aggFunction?" ("+(d.AGG_FUNCTIONS[t.aggFunction]&&d.AGG_FUNCTIONS[t.aggFunction].abbreviation||t.aggFunction)+")":"",r,s={model:t.model,activeCurrency:t.activeCurrency};if(t.splitType==="field"&&t.model&&a&&t.splitField){r=A(t.splitField,a,s)+n}else if(t.splitType==="template"){r=i.mergeAsText("row",t.splitTemplate,{},t.model,a)}else{r=i.decodeHTML(l&&(l.name||l.label||l.id)||t.model.id)+n}return r},b=function e(t){let a=f.getConversionRates();return a&&t?a[0].IsoCode:i.userInfo.defaultCurrency},A=function e(t,a,l){let n=l.fieldMetadata||l.model.getField(t),r=l.activeCurrency,u=l.model,d=u.getFieldValue(a,t,true);if(n.displaytype===o){if(d!==null&&d!==undefined){d=(n.picklistEntries||[]).reduce((e,t)=>t.value===d?t.label||t.value:e,d)}}if(n.displaytype===s&&i.isMultiCurrencyOrganization===true){let e=i.getRowCurrency({model:u,row:a,field:t});if(e!==r){d=i.convertCurrency(d,e,r)}}return d},C={pie:{getSeriesData(e){if(!e||!e.valueField)return[];let i={},a=[],l=e.model,n=e.splitField,r=e.aggFunction,s=e.filterConditions||[],o={model:l,activeCurrency:e.activeCurrency};t.each(l.getRows(s),function(){let t=this,a=A(e.valueField,t,o),l=A(n,t,o),s=m(e,t),u=i[s];if(!u){u=i[s]={value:null,count:0,splitFieldValue:l,dataRows:[]}}u.dataRows.push(t);if(r){let e=u.value;if(e===null){u.value=a||0}else if(r==="sum"||r==="avg"){u.value+=a||0}else if(r==="max"&&a>e){u.value=a}else if(r==="min"&&a<e){u.value=a}}else{u.value=a||0}u.count+=1});if(e.splitType==="field"&&n){i=x(i,l.getField(n))}t.each(i,function(e,t){let i=t.value;if(r){if(r==="avg"){i=t.value/t.count}else if(r==="count"){i=t.count}}a.push({name:e,y:i,sk_rows:t.dataRows})});return a},buildSeries(e){let t={id:e.id||e.name,name:e.name,valueFieldMetadata:e.model.getField(e.valueField),data:C.pie.getSeriesData(e),type:e.type,actions:e.actions,actionsContext:e.actionsContext};y(e.activeCurrency,t);return t},buildSeriesArray(i,a,l){let n=[],r=i.renderObj.type;a.children("series").each(function(a,s){let o=t(s),u=o.attr("modelId"),c=o.attr("aggfunction"),f=d.AGG_FUNCTIONS[c],p=o.attr("splitfield")||o.attr("valuefield"),g=f!==undefined?" ("+f.abbreviation+")":"",h={model:u&&e.$M(u)||i.model,valueField:o.attr("valuefield"),splitType:o.attr("splittype")||"field",splitField:o.attr("splitfield"),splitTemplate:o.attr("splittemplate"),type:o.attr("type"),activeCurrency:l.activeCurrency},y=h.model.getField(p),x=o.children("actions").first();h.name=(y!==undefined&&(y.label||y.name))+g;h.id=h.name;h.filterConditions=l.filterConditions;h.valueFieldMetadata=h.model.getField(h.valueField);if(x.length){h.actions=x;h.actionsContext=o}if(c)h.aggFunction=c;n.push(C[r].buildSeries(h))});let s=n[0];s.allSeriesActions=[];if(s.actions){s.allSeriesActions.push({actions:s.actions,context:s.actionsContext});t.each(s.data,function(e,t){t.actionIndex=0})}for(let e=1;e<n.length;e++){let t=n[e],i=t.data;if(t.actions){s.allSeriesActions.push({actions:t.actions,context:t.actionsContext})}for(let a=0;a<i.length;a++){s.data.push(i[a]);if(t.actions){i[a].actionIndex=e}}}return[s]}},line:{buildDataAxes(e,i){let a=i.children("axis");if(a.length>0){if(!e.dataAxes||e.dataAxes.length!==0){e.dataAxes=[];delete e.defaultDataAxis;delete e.defaultXAxis;delete e.defaultYAxis}t.each(a,function(){let i=t(this),a=i.attr("title"),l=i.attr("type"),n=i.attr("minvalue"),r=i.attr("maxvalue"),s=e.dateGranularity||i.attr("dategranularity"),o={id:i.attr("id"),flip:i.attr("flip")==="true",fillvals:i.attr("fillvals")};if(a&&a.length>0){o.title=a}if(l&&l.length>0){o.type=l}if(s){o.dategranularity=s}if(i.attr("integersonly")==="true")o.allowDecimals=false;if(n!==undefined)o.minValue=n;if(r!==undefined)o.maxValue=r;if(!e.defaultDataAxis){e.defaultDataAxis=o}if(l==="xaxis"&&!e.defaultXAxis){e.defaultXAxis=o}else if(l==="yaxis"&&!e.defaultYAxis){e.defaultYAxis=o}e.dataAxes.push(o)})}},buildCategoryAxes(e,i){let a=i.children("axis");if(a.length>0){t.each(a,function(){let i=t(this),a=i.attr("categorytype")||"field",l=i.attr("field"),n=i.attr("template"),r=e.dateGranularity||i.attr("dategranularity"),s=i.attr("title"),o={id:i.attr("id"),flip:i.attr("flip")==="true",fillvals:i.attr("fillvals"),values:{}};if(a)o.type=a;if(l)o.field=e.model.getField(l);if(n)o.template=n;if(r)o.dategranularity=r;if(s)o.title=s;if(!e.categoryAxes){e.categoryAxes={};e.defaultCategoryAxis=o}e.categoryAxes[o.id]=o})}},getSeriesData(e){let i=[],a=e.aggFunction;t.each(e.categories,function(e,t){let l=t.value;if(a){if(a==="avg"&&t.count>0){l=t.value/t.count}else if(a==="count"){l=t.count}}i.push({y:l,name:e,sk_rows:t.dataRows})});return i},buildSeriesArray(i,a,l){let n={},r=[],s=a.attr("separated")||false,o=0,u={},d=i.renderObj.type;a.children("series").each(function(){let a=t(this),r={},d=a.attr("valuefield"),c=a.attr("splittype")||"field",f=a.attr("splitfield"),p=a.attr("splittemplate"),g,h=a.attr("type"),y=a.attr("aggfunction"),b=a.attr("modelId"),C=b&&e.$M(b)||i.model,F=a.attr("dataAxisId")||i.defaultDataAxis.id,w=a.attr("categoryAxisId")||i.defaultCategoryAxis&&i.defaultCategoryAxis.id,S=i.categoryAxes&&i.categoryAxes[w],T=a.attr("categoryField"),I=T&&C.getField(T)||i.categoryAxes&&i.categoryAxes[w]&&i.categoryAxes[w].field,k={model:C,activeCurrency:l.activeCurrency},D,O=a.children("actions").first(),M=l.filterConditions||[];if(!u.hasOwnProperty(w)){u[w]={}}if(I&&C){D=I.name||I.id}if(d||f){let e=C.getField(d),i={model:C,valueFieldMetadata:e,aggFunction:y,splitType:c,splitField:f,splitTemplate:p,activeCurrency:l.activeCurrency};t.each(C.getRows(M),function(){let t=this;if(f){g=A(f,t,k)}let n=m(i,t),c=A(d,t,k),p=I||S.template?v({model:C,row:t,type:S.type,field:I,template:S.template,dategranularity:S.dategranularity,activeCurrency:l.activeCurrency}):{displayVal:"Values",rawVal:"Values"},x=p.displayVal,b,T;if(D!==undefined){let e=A(D,t,k);u[w][e]=true}if(!(b=r[n])){r[n]=b={categories:{},valueFieldMetadata:e,splitFieldValue:g};if(y){b.aggFunction=y}if(h){b.type=h}if(s){b.stack=o}if(F){b.dataAxis=F}if(w){b.categoryAxis=w}if(O.length){b.actions=O;b.actionsContext=a}}if(S&&!S.values[x]){S.values[x]=true}if(!(T=b.categories[x])){b.categories[x]=T={value:null,count:0,dataRows:[]}}if(y){let e=T.value;if(e===null){T.value=c||0}else if(y==="sum"||y==="avg"){T.value+=c||0}else if(y==="max"&&c>e){T.value=c}else if(y==="min"&&c<e){T.value=c}}else{T.value=c||0}T.count+=1;T.dataRows.push(t)})}if(s){o+=1}if(c==="field"&&f){r=x(r,C.getField(f))}t.extend(n,r)});t.each(i.categoryAxes,function(){let e=this;let i={};C[d].adjustCategories(e,t.map(u[e.id],function(e,t){return t}));t.each(n,function(a,l){i[a]={};t.extend(i[a],l);i[a].categories={};t.each(e.values,function(e){let t=l.categories[e]||{value:0,count:0};i[a].categories[e]=t})});n=i});t.each(n,function(e,t){let i={id:e,name:e,data:C[d].getSeriesData(t),actions:t.actions,valueFieldMetadata:t.valueFieldMetadata,actionsContext:t.actionsContext};if(t.type){i.type=t.type}if(t.stack){i.stack=t.stack}if(t.dataAxis){i.yAxis=t.dataAxis}if(t.categoryAxis){i.xAxis=t.categoryAxis}y(l.activeCurrency,i);r.push(i)});return r},adjustCategories(e,i){if(e.fillvals&&["true","year","month","week"].indexOf(e.fillvals)!==-1&&e.type==="field"&&e.dategranularity&&d.DATE_GRANULARITIES[e.dategranularity]){let l=e.dategranularity,n=d.DATE_GRANULARITIES[l],r=e.field,s=r.displaytype==="DATETIME"?a.parseSFDateTime:a.parseSFDate,o={},u,c;t.each(i,function(e,t){if(s(t)===false){o[t]=true;return true}if(t>c||typeof c==="undefined"){c=t}if(t<u||typeof u==="undefined"){u=t}});let f=s(u);let p=s(c);if(f&&p){if(e.fillvals==="year"){f.setMonth(0);f.setDate(1);p=new Date(p.getFullYear()+1,0,0)}else if(e.fillvals==="month"){f.setDate(1);p=new Date(p.getFullYear(),p.getMonth()+1,0)}else if(e.fillvals==="week"){f.setDate(f.getDate()-f.getDay());p.setDate(p.getDate()-p.getDay()+6)}}let g=f,h=function t(i){let a=v({val:i,dategranularity:l,field:r}),n=a.displayVal;if(!e.values[n]){e.values[n]=true}};if(g&&c&&(n.dayInterval||n.monthInterval||n.yearInterval)){e.values={};h(g);while(g<p){if(n.dayInterval){g.setDate(g.getDate()+n.dayInterval)}if(n.monthInterval){g.setMonth(g.getMonth()+n.monthInterval,1)}if(n.yearInterval){g.setFullYear(g.getFullYear()+n.yearInterval,0,1)}if(g>p){g=p}h(g)}}if(!t.isEmptyObject(o))t.extend(e.values,o)}}},bubble:{buildDataAxes(e,t){C.line.buildDataAxes(e,t)},buildSeries(a){let l=[],n={},r=a.model,o=a.xValueField,u=r.getField(o)||{},c=a.xAggFunction,f=d.AGG_FUNCTIONS[c]!==undefined&&d.AGG_FUNCTIONS[c].abbreviation,p=a.yValueField,g=r.getField(p)||{},h=a.yAggFunction,y=d.AGG_FUNCTIONS[h]!==undefined&&d.AGG_FUNCTIONS[h].abbreviation,v=a.sizeField,b=r.getField(v)||{},C=a.sizeAggFunction,F=d.AGG_FUNCTIONS[C]!==undefined&&d.AGG_FUNCTIONS[C].abbreviation,w=a.splitType,S=a.splitField,T=a.splitTemplate,I=function e(t,i){let a=t.aggFunction,l=t.value;if(l===null){t.value=i||0}else if(a==="sum"||a==="avg"){t.value+=i||0}else if(a==="max"&&i>l){t.value=i}else if(a==="min"&&i<l){t.value=i}t.count+=1},k=function e(i){t.each(i,function(){if(this.aggFunction==="avg"){this.value=this.value/this.count}else if(this.aggFunction==="count"){this.value=this.count}})},D=a.filterConditions||[];t.each(r.getRows(D),function(){let e=this;let i=m({model:r,valueFieldMetadata:u,aggFunction:c,splitType:w,splitField:S,splitTemplate:T,activeCurrency:a.activeCurrency},e)+", "+m({model:r,valueFieldMetadata:g,aggFunction:h,splitType:w,splitField:S,splitTemplate:T,activeCurrency:a.activeCurrency},e)+(v?", "+m({model:r,valueFieldMetadata:b,aggFunction:C,splitType:w,splitField:S,splitTemplate:T,activeCurrency:a.activeCurrency},e):"");let l={sk_row:e};let s={model:r,activeCurrency:a.activeCurrency};let d=A(o,e,s)||0;let f=A(p,e,s)||0;let y;t.extend(l,{x:d,y:f});if(v){y=A(v,e,s);l.size=y}if(!n[i]){n[i]={dataPoints:[]};if(w==="field"&&S){n[i].splitFieldValue=A(S,e,s)}if(a.yAxisId){n[i].yAxis=a.yAxisId}if(h){n[i].yAggFunction=h}if(a.xAxisId){n[i].xAxis=a.xAxisId}if(c){n[i].xAggFunction=c}if(C){n[i].sizeAggFunction=C}if(a.type){n[i].type=a.type}}n[i].dataPoints.push(l)});if(w==="field"&&S){n=x(n,r.getField(S))}t.each(n,function(n,r){let o=[],d={id:n,name:n,data:[]};if(a.isAggregate===true){let e={value:null,count:0,aggFunction:c},i={value:null,count:0,aggFunction:h},a={value:null,count:0,aggFunction:C},l=[];t.each(r.dataPoints,function(t,n){I(e,n.x);I(i,n.y);I(a,n.size);l.push(n.sk_row)});k([e,i,a]);o.push({x:e.value,y:i.value,size:a.value,sk_rows:l})}t.each(o.length>0?o:r.dataPoints,function(e,t){let i={x:t.x,y:t.y};if(v)i.z=t.size;i.sk_rows=[t.sk_row];d.data.push(i)});if(r.type){d.type=r.type}if(r.xAxis){d.xAxis=r.xAxis}if(r.yAxis){d.yAxis=r.yAxis}let p,x=function t(l){let n={prefix:"",suffix:""};if(l.displaytype===s){n.prefix=i.decodeHTML(e.currency.getSymbol(a.activeCurrency));n.suffix=" "+a.activeCurrency}else if(l.displaytype==="PERCENT"){n.suffix=" %"}return n},m=x(u),A=x(g);p=u.label+(f?" ("+f+")":"")+": "+m.prefix+"{point.x}"+m.suffix+"<br/>";p+=g.label+(y?" ("+y+")":"")+": "+A.prefix+"{point.y}"+A.suffix+"<br/>";if(v){let e=x(b);p+=b.label+(F?" ("+F+")":"")+": "+e.prefix+"{point.z}"+e.suffix+"<br/>"}d.tooltip={pointFormat:p};l=l.concat(d)});return l},buildSeriesArray(i,a,l){let n=[],r=i.renderObj.type,s=l.filterConditions;t.each(a.children("series"),function(){let a=t(this),o=a.attr("modelId"),u=a.attr("splittype")||"field",d=a.attr("splitfield"),c=a.attr("splittemplate"),f=a.attr("yaggfunction"),p=a.attr("xaggfunction"),g=a.attr("sizefield"),h=a.attr("sizeaggfunction"),y=a.attr("type"),x={model:o&&e.$M(o)||i.model,isAggregate:f||p||h?true:false,yAxisId:a.attr("yAxisId")||i.defaultYAxis.id,yValueField:a.attr("yvaluefield"),yAggFunction:f,xAxisId:a.attr("xAxisId")||i.defaultXAxis.id,xValueField:a.attr("xvaluefield"),xAggFunction:p,activeCurrency:l.activeCurrency};if(y)x.type=y;if(u)x.splitType=u;if(d)x.splitField=d;if(c)x.splitTemplate=c;if(g)x.sizeField=g;if(h)x.sizeAggFunction=h;if(s)x.filterConditions=s;n=n.concat(C[r].buildSeries(x))});return n}}};t.extend(C,{donut:C.pie,funnel:C.pie,pyramid:C.pie,spline:C.line,area:C.line,areaspline:C.line,column:C.line,bar:C.line,scatter:C.bubble,heatmap:C.bubble});e.componentType.register("skuidvis__chartset",{render(e,i,a){let l=this;a.drillups=[];a.chartArea=t("<div>").appendTo(a.element);a.element.css({position:"relative"});a.initCharts=function(){l.initCharts(a,i)};a.initCharts();a.renderChartByID=function(e,t){return l.renderChartByID(a,e,t)};a.renderChartByIndex=function(e,t){return l.renderChartByIndex(a,e,t)};a.drilldownByID=function(e,t){return l.drilldownByID(a,e,t)};a.drillup=function(){return l.drillup(a)};a.drillupButton=a.getParentComponent().getState().drillupButton;a.drillupButton.subscribe("click",()=>a.drillup());if(a.renderedChart===undefined)a.renderChartByIndex(0)},initCharts(e,i){let a=e.charts=[],l=e.chartsMap={};i.children("charts").first().children().each(function(){let e=t(this),i=e.attr("uniqueid");a.push(e);if(i)l[i]=e})},renderChart(t,i,a){if(i===undefined)return;if(!a)a={};a.chartSet=t;let l=e.component.factory({xmlDefinition:i,context:a,element:t.chartArea});t.chartArea.append(l.element);t.renderedChart=l;return l},renderChartByID(e,t,i){if(t===undefined)return;let a=e.chartsMap[t];if(a)return this.renderChart(e,a,i)},renderChartByIndex(e,t,i){if(t===undefined)return;let a=e.charts[t];if(a)return this.renderChart(e,a,i)},drilldown(e,t,i){if(t===undefined)return;let a=this,l=i.drillupChart;e.drillups.push(l);let n={};a.setDrillupButton(e,n);return this.renderChart(e,t,i)},drilldownByID(e,t,i){if(t===undefined)return;let a=e.chartsMap[t];if(a)return this.drilldown(e,a,i)},setDrillupButton(e){const t=e.drillups;let i=e.drillupButton;if(!t.length){i.set("show",false)}else{const e=t.slice(-1)[0];i.set({show:true,label:e.getBackButtonText()||"Back"})}},drillup(e){if(e===undefined)return;let t=this,i=e.drillups,a=i.pop();if(a!==undefined){let i=a.xmlDefinition;t.setDrillupButton(e,{color:i.attr("backbuttontextcolor"),background:i.attr("backbuttonbgcolor")});e.renderedChart.unregister({removeElement:false});e.chartArea.empty();e.chartArea.append(a.container);e.renderedChart=a;return a}}});e.componentType.register("skuidvis__chart",{actions:{drilldown(e,t,i){t.doDrilldown(e,i)}},render(a,s,o){let u=o.get("context"),f=o.chartSet=u&&u.chartSet,h=t("<div>"),y=s.attr("type")||"pie",x=o.metadata=c.types[y].metadata,v=o.model=e.$M(s.attr("model")),m=s.children("colors"),A=s.children("tooltip"),F=s.children("legend"),w=s.children("dataaxes"),S=o.categoryAxesNode=s.children("categoryaxes"),T=o.seriesListNode=s.children("serieslist"),I=s.children("allowedtypes"),k=s.attr("height")||"400px",D=s.attr("rendersnippet"),O=o.renderObj={type:y};o.animationDuration=parseInt(s.attr("animationDuration")||250,10);if(!r){e.lib.Highcharts.setOptions({lang:{decimalPoint:i.userLocale.decimalsSeparator,thousandsSep:i.userLocale.thousandsSeparator},chart:{style:{fontFamily:"inherit"}}});r=true}let M=t("<div>").addClass("sk-chart-wrapper"),N=s.attr("cssclass");o.container=t("<div>").addClass("sk-chart-container sk-chart-standard").appendTo(M);if(N)M.addClass(N);if(k){M.css({height:k});O.height=k}if(D)O.beforeRenderSnippet=D;if(s.attr("export")==="off")O.exporting={enabled:false};else if(typeof s.attr("export")==="string")O.exporting={mode:s.attr("export")};const _=function e(){let t=s.attr("maintitle"),a=s.attr("subtitle");O.useOrgCurrency=s.attr("useorgcurrency")==="true"||false;O.credits={enabled:false};O.title={text:i.mergeAsTextInContext(t,i.getContextToUse(o))};if(a)O.subtitle={text:i.mergeAsTextInContext(a,i.getContextToUse(o))};if(s.attr("stacking")==="true")O.stacked=true};const P=function t(){let i=e.themeSettings.getAll(),a=i&&i.visualizations&&i.visualizations.chart||{};if(s.attr("backgroundcolor")){O.backgroundColor=s.attr("backgroundcolor")}else if(a.background!==undefined){O.backgroundColor=a.background}else{delete O.backgroundColor}if(m&&m.children().length){let e=d.getColorsArray(m);if(e.length){O.colors=e}}else if(a.colorPalette!==undefined&&a.colorPalette.length){O.colors=a.colorPalette}else{delete O.colors}};const R=function e(t){let a={},l=t.attr("prefix"),n=t.attr("suffix");if(l!==undefined)a.valuePrefix=i.mergeAsText("model",l,{},v);if(n!==undefined)a.valueSuffix=i.mergeAsText("model",n,{},v);return a};const E=function e(t){O.legend={};let i=t.attr("layout"),a=t.attr("halign"),l=t.attr("valign"),n=t.attr("showlabels"),r=O.legend;if(i)r.layout=i;if(a)r.halign=a;if(l)r.valign=l;if(n==="true")r.showLabels=true;else if(n==="false")r.showLabels=false};const L=function e(t){if(t&&t.length>0){C[y].buildDataAxes(o,t)}};const V=function e(t){if(t&&t.length>0){C[y].buildCategoryAxes(o,t)}};const G=function e(i,a){if(i&&i.length>0){if(!a)a={};let e=a.context||o.get("context"),l=o.createConditionsFromXml();if(e&&e.filterConditions)l=t.merge(l,e.filterConditions);a=t.extend(true,{filterConditions:l},a||{});if(i.children("series").length)O.series=C[y].buildSeriesArray(o,i,a)}};const B=function e(){_();P();if(x.hasCategories===true&&S&&S.length>0){V(S)}if(x.hasDataAxes===true&&w&&w.length>0){L(w)}G(T,{activeCurrency:b(O.useOrgCurrency)});if(A!==undefined&&A.length>0){O.tooltip=R(A)}if(F&&F.length>0){E(F)}};o.draw=function(){B();p(o)};o.refresh=function(){g(o)};o.rebuild=function(e){if(!e)e={};let t=e.categoryAxesNode||o.categoryAxesNode;if(x.hasCategories===true&&t){let e=t.children("axis");if(e.length)V(t)}let i=e.seriesListNode||o.seriesListNode;if(i){G(i,Object.assign({activeCurrency:b(O.useOrgCurrency)},e))}o.refresh()};o.reflow=function(){let e=o.container,t=e.highcharts();if(t&&t.chartWidth!==e.width()&&e.is(":visible"))t.reflow()};o.doDrilldown=function(i,a){let l=i.attr("chartid");if(a===undefined)a={};a.drillupChart=o;let n=e.component.createConditionsFromXml(t(i),a);if(n.length)a.filterConditions=n;f.drilldownByID(l,a)};o.getBackButtonText=function(){return"Back"};if(I&&I.length>0){let e=t('<div style="display:inline-block; padding-right:16px;">').hide().appendTo(h),i=I.children("type"),a=[];if(i&&i.length){t.each(c.types,function(){let e=this,l=e.value;if(l===y){a.push(e)}else{t.each(i,function(){let i=t(this).text();if(i===l){a.push(e);return false}})}});e.html('<span style="font-weight:bold;padding-right:16px;">Chart Type</span>').append(l["b"].edit({required:true,value:y,entries:a,onChange(e){let i={},a;t.each(o.getHighchartsObject().legend.getAllItems(),function(e,t){i[t.name]=t.visible});y=e;O.type=e;p(o);a=o.getHighchartsObject().legend.getAllItems();t.each(a,function(e,t){if(i.hasOwnProperty(t.name)){if(t.visible===i[t.name]){t.setVisible()}t.setVisible()}})}})).show()}}if(x.hasCategories===true&&S&&S.children("axis").length){let e=S.children("axis").first(),i=e.attr("dategranularity"),a=e.children("allowedgranularities"),n=a.children("type"),r=[];if(n&&n.length){t.each(d.DATE_GRANULARITIES,function(){let e=this;if(e.value===i){r.push(e)}else{t.each(n,function(){let i=t(this).text();if(i===e.value){r.push(e);return false}})}});t('<div style="display:inline-block;">').html('<span style="font-weight:bold;padding-right:16px;">Date Granularity</span>').append(l["b"].edit({required:true,value:i,entries:r,onChange(e){o.dateGranularity=e;o.rebuild()}})).appendTo(h)}}a.append(M,h);o.draw();i.addResizeHandler(o.reflow,100);i.delayEventCallback({eventType:"tabshow pageload dialogopen stepchange",delay:20,callback:o.reflow});o.unsubscribeAll();o.storeSubscription(n("ui.reflow",o.reflow));o.storeSubscription(n("ui.themeSettings.loaded.v2",function(){P();p(o)}));["saved","cancelled","loaded","row.updated"].forEach(e=>o.storeSubscription(v.subscribe(e,()=>o.rebuild())));const j=o.definition.closest("panel, skuid__slidingPanel");if(j.length){o.storeSubscription(n("ui.panel.toggled",e=>{e.id==j.attr("uniqueid")&&o.reflow()}))}const z=i.debounce(o.rebuild,500);o.storeSubscription(n("salesforce.async.field.rendered",function(t){const a=o.model.id;o.seriesListNode.children().each(function(l,n){const r=e.$(n);const s=t.id;const o=t.model.id;const u=r.attr("modelId");const d=u||a;if(d===o&&(r.attr("splitfield")===s||r.attr("splittype")==="template"&&i.extractFieldsFromTemplate(r.attr("splittemplate")).indexOf(s)!==-1)){z()}})}))}})})(e)}});return t});