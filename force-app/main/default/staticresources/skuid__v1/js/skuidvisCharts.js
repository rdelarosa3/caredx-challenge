!function(a){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=a,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=327)}({327:function(e,t,a){"use strict";a.r(t);a(328)},328:function(e,t,a){"use strict";var $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e};!function(E){var P=E.$,G=E.utils,i=E.mobile,h=E.time,L=E.events.subscribe,V=!1,S="CURRENCY",e=E.visualizations,B=e.core,j=e.chart,n=E.currency,z=E.ui.getRenderer,U=function(o){var t={plotOptions:{series:{animation:250}}},e=o.renderObj,a=j.types[e.type],i=a.hcType||e.type||"";if(i&&(t.plotOptions[i]={cursor:"pointer"},t.chart={type:i,zoomType:"xy"}),e.exporting&&(t.exporting=e.exporting),e.credits&&(t.credits=e.credits),void 0!==e.title&&void 0!==e.title.text&&P.extend(!0,t,{title:{text:e.title.text}}),void 0!==e.subtitle&&void 0!==e.subtitle.text&&P.extend(!0,t,{subtitle:{text:e.subtitle.text}}),!0===e.stacked&&P.extend(t.plotOptions.series,{stacking:"normal"}),e.legend&&("off"===e.legend.layout?t.legend={enabled:!1}:t.legend={layout:e.legend.layout,align:e.legend.halign,verticalAlign:e.legend.valign},!0!==e.legend.showLabels&&!1!==e.legend.showLabels||(t.plotOptions[i].dataLabels={enabled:e.legend.showLabels}),!0===o.metadata.hasDataLabels&&"off"!==e.legend.layout&&(e.legend.layout||e.legend.halign||e.legend.valign)&&(t.plotOptions[i].showInLegend=!0)),e.tooltip&&(t.tooltip={valuePrefix:e.tooltip.valuePrefix,valueSuffix:e.tooltip.valueSuffix}),e.colors&&(t.colors=e.colors),e.backgroundColor&&(t.chart.backgroundColor=e.backgroundColor),o.dataAxes&&0<o.dataAxes.length&&(t.yAxis=[],!0===o.metadata.hasXY&&(t.xAxis=[]),P.each(o.dataAxes,function(){var e={id:this.id};!0===this.flip&&(e.opposite=!0),this.title&&(e.title={text:this.title}),!1===this.allowDecimals&&(e.allowDecimals=!1),void 0!==this.minValue&&(e.min=this.minValue),void 0!==this.maxValue&&(e.max=this.maxValue),"xaxis"===this.type?t.xAxis.push(e):t.yAxis.push(e)})),o.categoryAxes&&(t.xAxis=[],P.each(o.categoryAxes,function(){var e={id:this.id};!0===this.flip&&(e.opposite=!0),this.title&&(e.title={text:this.title}),this.values&&(e.categories=P.map(this.values,function(e,t){return t})),t.xAxis.push(e)})),e.series){t.series=e.series;P.each(t.series,function(e,t){var a=t.actions;t.type&&(t.type=j.types[t.type].hcType||t.type),t.allSeriesActions&&t.allSeriesActions.length||a?P.extend(!0,t,function(n,l){return{events:{click:function(e){var t,a,i=e.point.actionIndex;if(n.allSeriesActions&&0<=i){var r=n.allSeriesActions[i];a=P(r.context).attr("modelId"),t=r.actions}else{if(n.allSeriesActions)return;t=l,a=P(n.actionsContext).attr("modelId")}E.actions.runActionsNode(t,o,{model:E.$M(a)||o.model,rows:e.point.sk_rows,initiatorId:o.editor._GUID,$Chart:{point:e.point}})}}}}(t,a)):t.allowPointSelect=!0})}if(a.additionalProps&&a.additionalProps(t),P.extend(t.chart,{reflow:!1}),void 0!==e.beforeRenderSnippet){var r=E.snippet.getSnippet(e.beforeRenderSnippet);void 0!==r&&r(t)}o.container.highcharts()&&o.container.highcharts().destroy(),o.container.highcharts(t),o.getHighchartsObject=function(){return o.container.highcharts()},o.getHCConfig=function(){return t}},r=function(e,t){var a=t.valueFieldMetadata,i=a.displaytype,r=a.scale;"CURRENCY"===i?t.tooltip={valuePrefix:G.decodeHTML(n.getSymbol(e)),valueSuffix:" "+e}:"PERCENT"===i&&(t.tooltip={valueSuffix:" %"}),void 0!==r&&(void 0===t.tooltip&&(t.tooltip={}),t.tooltip.valueDecimals=r,t.dataLabels={format:"{y:,."+r+"f}"})},D=function(a,e){if(e&&"PICKLIST"===e.displaytype&&0<e.picklistEntries.length){var i={};return P.each(e.picklistEntries,function(){var t=this.label||this.value;P.each(a,function(e){this.splitFieldValue===t&&(i[e]=this,delete a[e])})}),P.extend(i,a),i}return a},O=function(e){var t,a,i=e||{},r=i.model,n=i.row,l=i.field,o=i.type,s=i.dategranularity,d=i.template,u=i.val,c={model:r,activeCurrency:i.activeCurrency};if(u||("field"===o&&l&&r&&n&&(t=N(l.name||l.id,n,c)),"template"===o&&d&&r&&n&&(t=G.mergeAsText("row",d,{},r,n))),("field"===o&&t||u)&&s){var p=l&&l.displaytype,g="DATETIME"===p?h.parseSFDateTime:h.parseSFDate,f=u||g(t),v=h.formatDate;if("DATETIME"!==p||u||(f=h.getLocalDateTime(f)),f)switch(s){case"day":a=h.makeFormattedDateFromJS(f);break;case"calweek":a=Math.ceil(parseInt(v("o",f),10)/7)+" ("+f.getFullYear()+")";break;case"calmonth":a=v("M yy",f);break;case"calquarter":a="Q"+Math.ceil((parseInt(f.getMonth(),10)+1)/3)+" "+f.getFullYear();break;case"calyear":a=v("yy",f)}}return void 0===a&&(a=u||t),{rawVal:u||t,displayVal:a}},M=function(e,t){var a=e.valueFieldMetadata,i=e.aggFunction?" ("+(B.AGG_FUNCTIONS[e.aggFunction]&&B.AGG_FUNCTIONS[e.aggFunction].abbreviation||e.aggFunction)+")":"",r={model:e.model,activeCurrency:e.activeCurrency};return"field"===e.splitType&&e.model&&t&&e.splitField?N(e.splitField,t,r)+i:"template"===e.splitType?G.mergeAsText("row",e.splitTemplate,{},e.model,t):G.decodeHTML(a&&(a.name||a.label||a.id)||e.model.id)+i},Y=function(e){var t=n.getConversionRates();return t&&e?t[0].IsoCode:G.userInfo.defaultCurrency},N=function(e,t,a){var i=a.fieldMetadata||a.model.getField(e),r=a.activeCurrency,n=a.model,l=n.getFieldValue(t,e,!0);if("PICKLIST"===i.displaytype&&null!=l&&(l=(i.picklistEntries||[]).reduce(function(e,t){return t.value===l?t.label||t.value:e},l)),i.displaytype===S&&!0===G.isMultiCurrencyOrganization){var o=G.getRowCurrency({model:n,row:t,field:e});o!==r&&(l=G.convertCurrency(l,o,r))}return l},H={pie:{getSeriesData:function(n){if(!n||!n.valueField)return[];var l={},i=[],e=n.model,o=n.splitField,s=n.aggFunction,t=n.filterConditions||[],d={model:e,activeCurrency:n.activeCurrency};return P.each(e.getRows(t),function(){var e=N(n.valueField,this,d),t=N(o,this,d),a=M(n,this),i=l[a];if(i||(i=l[a]={value:null,count:0,splitFieldValue:t,dataRows:[]}),i.dataRows.push(this),s){var r=i.value;null===r?i.value=e||0:"sum"===s||"avg"===s?i.value+=e||0:"max"===s&&r<e?i.value=e:"min"===s&&e<r&&(i.value=e)}else i.value=e||0;i.count+=1}),"field"===n.splitType&&o&&(l=D(l,e.getField(o))),P.each(l,function(e,t){var a=t.value;s&&("avg"===s?a=t.value/t.count:"count"===s&&(a=t.count)),i.push({name:e,y:a,sk_rows:t.dataRows})}),i},buildSeries:function(e){var t={id:e.id||e.name,name:e.name,valueFieldMetadata:e.model.getField(e.valueField),data:H.pie.getSeriesData(e),type:e.type,actions:e.actions,actionsContext:e.actionsContext};return r(e.activeCurrency,t),t},buildSeriesArray:function(c,e,p){var g=[],f=c.renderObj.type;e.children("series").each(function(e,t){var a=P(t),i=a.attr("modelId"),r=a.attr("aggfunction"),n=B.AGG_FUNCTIONS[r],l=a.attr("splitfield")||a.attr("valuefield"),o=void 0!==n?" ("+n.abbreviation+")":"",s={model:i&&E.$M(i)||c.model,valueField:a.attr("valuefield"),splitType:a.attr("splittype")||"field",splitField:a.attr("splitfield"),splitTemplate:a.attr("splittemplate"),type:a.attr("type"),activeCurrency:p.activeCurrency},d=s.model.getField(l),u=a.children("actions").first();s.name=(void 0!==d&&(d.label||d.name))+o,s.id=s.name,s.filterConditions=p.filterConditions,s.valueFieldMetadata=s.model.getField(s.valueField),u.length&&(s.actions=u,s.actionsContext=a),r&&(s.aggFunction=r),g.push(H[f].buildSeries(s))});var t=g[0];t.allSeriesActions=[],t.actions&&(t.allSeriesActions.push({actions:t.actions,context:t.actionsContext}),P.each(t.data,function(e,t){t.actionIndex=0}));for(var a=1;a<g.length;a++){var i=g[a],r=i.data;i.actions&&t.allSeriesActions.push({actions:i.actions,context:i.actionsContext});for(var n=0;n<r.length;n++)t.data.push(r[n]),i.actions&&(r[n].actionIndex=a)}return[t]}},line:{buildDataAxes:function(o,e){var t=e.children("axis");0<t.length&&(o.dataAxes&&0===o.dataAxes.length||(o.dataAxes=[],delete o.defaultDataAxis,delete o.defaultXAxis,delete o.defaultYAxis),P.each(t,function(){var e=P(this),t=e.attr("title"),a=e.attr("type"),i=e.attr("minvalue"),r=e.attr("maxvalue"),n=o.dateGranularity||e.attr("dategranularity"),l={id:e.attr("id"),flip:"true"===e.attr("flip"),fillvals:e.attr("fillvals")};t&&0<t.length&&(l.title=t),a&&0<a.length&&(l.type=a),n&&(l.dategranularity=n),"true"===e.attr("integersonly")&&(l.allowDecimals=!1),void 0!==i&&(l.minValue=i),void 0!==r&&(l.maxValue=r),o.defaultDataAxis||(o.defaultDataAxis=l),"xaxis"!==a||o.defaultXAxis?"yaxis"!==a||o.defaultYAxis||(o.defaultYAxis=l):o.defaultXAxis=l,o.dataAxes.push(l)}))},buildCategoryAxes:function(o,e){var t=e.children("axis");0<t.length&&P.each(t,function(){var e=P(this),t=e.attr("categorytype")||"field",a=e.attr("field"),i=e.attr("template"),r=o.dateGranularity||e.attr("dategranularity"),n=e.attr("title"),l={id:e.attr("id"),flip:"true"===e.attr("flip"),fillvals:e.attr("fillvals"),values:{}};t&&(l.type=t),a&&(l.field=o.model.getField(a)),i&&(l.template=i),r&&(l.dategranularity=r),n&&(l.title=n),o.categoryAxes||(o.categoryAxes={},o.defaultCategoryAxis=l),o.categoryAxes[l.id]=l})},getSeriesData:function(e){var i=[],r=e.aggFunction;return P.each(e.categories,function(e,t){var a=t.value;r&&("avg"===r&&0<t.count?a=t.value/t.count:"count"===r&&(a=t.count)),i.push({y:a,name:e,sk_rows:t.dataRows})}),i},buildSeriesArray:function(n,e,T){var l={},i=[],I=e.attr("separated")||!1,S=0,k={},o=n.renderObj.type;return e.children("series").each(function(){var s,d,u=P(this),c={},p=u.attr("valuefield"),e=u.attr("splittype")||"field",g=u.attr("splitfield"),t=u.attr("splittemplate"),f=u.attr("type"),v=u.attr("aggfunction"),a=u.attr("modelId"),h=a&&E.$M(a)||n.model,y=u.attr("dataAxisId")||n.defaultDataAxis.id,x=u.attr("categoryAxisId")||n.defaultCategoryAxis&&n.defaultCategoryAxis.id,m=n.categoryAxes&&n.categoryAxes[x],i=u.attr("categoryField"),b=i&&h.getField(i)||n.categoryAxes&&n.categoryAxes[x]&&n.categoryAxes[x].field,C={model:h,activeCurrency:T.activeCurrency},A=u.children("actions").first(),r=T.filterConditions||[];if(k.hasOwnProperty(x)||(k[x]={}),b&&h&&(d=b.name||b.id),a&&n.editor.registerModel(h),p||g){var F=h.getField(p),w={model:h,valueFieldMetadata:F,aggFunction:v,splitType:e,splitField:g,splitTemplate:t,activeCurrency:T.activeCurrency};P.each(h.getRows(r),function(){var e=this;g&&(s=N(g,e,C));var t,a,i=M(w,e),r=N(p,e,C),n=(b||m.template?O({model:h,row:e,type:m.type,field:b,template:m.template,dategranularity:m.dategranularity,activeCurrency:T.activeCurrency}):{displayVal:"Values",rawVal:"Values"}).displayVal;if(void 0!==d){var l=N(d,e,C);k[x][l]=!0}if((t=c[i])||(c[i]=t={categories:{},valueFieldMetadata:F,splitFieldValue:s},v&&(t.aggFunction=v),f&&(t.type=f),I&&(t.stack=S),y&&(t.dataAxis=y),x&&(t.categoryAxis=x),A.length&&(t.actions=A,t.actionsContext=u)),m&&!m.values[n]&&(m.values[n]=!0),(a=t.categories[n])||(t.categories[n]=a={value:null,count:0,dataRows:[]}),v){var o=a.value;null===o?a.value=r||0:"sum"===v||"avg"===v?a.value+=r||0:"max"===v&&o<r?a.value=r:"min"===v&&r<o&&(a.value=r)}else a.value=r||0;a.count+=1,a.dataRows.push(e)})}I&&(S+=1),"field"===e&&g&&(c=D(c,h.getField(g))),P.extend(l,c)}),P.each(n.categoryAxes,function(){var e=this,r={};H[o].adjustCategories(e,P.map(k[e.id],function(e,t){return t})),P.each(l,function(a,i){r[a]={},P.extend(r[a],i),r[a].categories={},P.each(e.values,function(e){var t=i.categories[e]||{value:0,count:0};r[a].categories[e]=t})}),l=r}),P.each(l,function(e,t){var a={id:e,name:e,data:H[o].getSeriesData(t),actions:t.actions,valueFieldMetadata:t.valueFieldMetadata,actionsContext:t.actionsContext};t.type&&(a.type=t.type),t.stack&&(a.stack=t.stack),t.dataAxis&&(a.yAxis=t.dataAxis),t.categoryAxis&&(a.xAxis=t.categoryAxis),r(T.activeCurrency,a),i.push(a)}),i},adjustCategories:function(a,e){if(a.fillvals&&-1!==["true","year","month","week"].indexOf(a.fillvals)&&"field"===a.type&&a.dategranularity&&B.DATE_GRANULARITIES[a.dategranularity]){var i,r,n=a.dategranularity,t=B.DATE_GRANULARITIES[n],l=a.field,o="DATETIME"===l.displaytype?h.parseSFDateTime:h.parseSFDate,s={};P.each(e,function(e,t){if(!1===o(t))return s[t]=!0;(r<t||void 0===r)&&(r=t),(t<i||void 0===i)&&(i=t)});var d=o(i),u=o(r);d&&u&&("year"===a.fillvals?(d.setMonth(0),d.setDate(1),u=new Date(u.getFullYear()+1,0,0)):"month"===a.fillvals?(d.setDate(1),u=new Date(u.getFullYear(),u.getMonth()+1,0)):"week"===a.fillvals&&(d.setDate(d.getDate()-d.getDay()),u.setDate(u.getDate()-u.getDay()+6)));var c=d,p=function(e){var t=O({val:e,dategranularity:n,field:l}).displayVal;a.values[t]||(a.values[t]=!0)};if(c&&r&&(t.dayInterval||t.monthInterval||t.yearInterval))for(a.values={},p(c);c<u;)t.dayInterval&&c.setDate(c.getDate()+t.dayInterval),t.monthInterval&&c.setMonth(c.getMonth()+t.monthInterval,1),t.yearInterval&&c.setFullYear(c.getFullYear()+t.yearInterval,0,1),u<c&&(c=u),p(c);P.isEmptyObject(s)||P.extend(a.values,s)}}},bubble:{buildDataAxes:function(e,t){H.line.buildDataAxes(e,t)},buildSeries:function(g){var f=[],o={},s=g.model,d=g.xValueField,v=s.getField(d)||{},h=g.xAggFunction,y=void 0!==B.AGG_FUNCTIONS[h]&&B.AGG_FUNCTIONS[h].abbreviation,u=g.yValueField,x=s.getField(u)||{},m=g.yAggFunction,b=void 0!==B.AGG_FUNCTIONS[m]&&B.AGG_FUNCTIONS[m].abbreviation,C=g.sizeField,A=s.getField(C)||{},F=g.sizeAggFunction,w=void 0!==B.AGG_FUNCTIONS[F]&&B.AGG_FUNCTIONS[F].abbreviation,c=g.splitType,p=g.splitField,T=g.splitTemplate,I=function(e,t){var a=e.aggFunction,i=e.value;null===i?e.value=t||0:"sum"===a||"avg"===a?e.value+=t||0:"max"===a&&i<t?e.value=t:"min"===a&&t<i&&(e.value=t),e.count+=1},e=g.filterConditions||[];return P.each(s.getRows(e),function(){var e,t=this,a=M({model:s,valueFieldMetadata:v,aggFunction:h,splitType:c,splitField:p,splitTemplate:T,activeCurrency:g.activeCurrency},t)+", "+M({model:s,valueFieldMetadata:x,aggFunction:m,splitType:c,splitField:p,splitTemplate:T,activeCurrency:g.activeCurrency},t)+(C?", "+M({model:s,valueFieldMetadata:A,aggFunction:F,splitType:c,splitField:p,splitTemplate:T,activeCurrency:g.activeCurrency},t):""),i={sk_row:t},r={model:s,activeCurrency:g.activeCurrency},n=N(d,t,r)||0,l=N(u,t,r)||0;P.extend(i,{x:n,y:l}),C&&(e=N(C,t,r),i.size=e),o[a]||(o[a]={dataPoints:[]},"field"===c&&p&&(o[a].splitFieldValue=N(p,t,r)),g.yAxisId&&(o[a].yAxis=g.yAxisId),m&&(o[a].yAggFunction=m),g.xAxisId&&(o[a].xAxis=g.xAxisId),h&&(o[a].xAggFunction=h),F&&(o[a].sizeAggFunction=F),g.type&&(o[a].type=g.type)),o[a].dataPoints.push(i)}),"field"===c&&p&&(o=D(o,s.getField(p))),P.each(o,function(e,t){var a=[],i={id:e,name:e,data:[]};if(!0===g.isAggregate){var r={value:null,count:0,aggFunction:h},n={value:null,count:0,aggFunction:m},l={value:null,count:0,aggFunction:F},o=[];P.each(t.dataPoints,function(e,t){I(r,t.x),I(n,t.y),I(l,t.size),o.push(t.sk_row)}),function(e){P.each(e,function(){"avg"===this.aggFunction?this.value=this.value/this.count:"count"===this.aggFunction&&(this.value=this.count)})}([r,n,l]),a.push({x:r.value,y:n.value,size:l.value,sk_rows:o})}P.each(0<a.length?a:t.dataPoints,function(e,t){var a={x:t.x,y:t.y};C&&(a.z=t.size),a.sk_rows=[t.sk_row],i.data.push(a)}),t.type&&(i.type=t.type),t.xAxis&&(i.xAxis=t.xAxis),t.yAxis&&(i.yAxis=t.yAxis);var s,d=function(e){var t={prefix:"",suffix:""};return e.displaytype===S?(t.prefix=G.decodeHTML(E.currency.getSymbol(g.activeCurrency)),t.suffix=" "+g.activeCurrency):"PERCENT"===e.displaytype&&(t.suffix=" %"),t},u=d(v),c=d(x);if(s=v.label+(y?" ("+y+")":"")+": "+u.prefix+"{point.x}"+u.suffix+"<br/>",s+=x.label+(b?" ("+b+")":"")+": "+c.prefix+"{point.y}"+c.suffix+"<br/>",C){var p=d(A);s+=A.label+(w?" ("+w+")":"")+": "+p.prefix+"{point.z}"+p.suffix+"<br/>"}i.tooltip={pointFormat:s},f=f.concat(i)}),f},buildSeriesArray:function(c,e,p){var g=[],f=c.renderObj.type,v=p.filterConditions;return P.each(e.children("series"),function(){var e=P(this),t=e.attr("modelId"),a=e.attr("splittype")||"field",i=e.attr("splitfield"),r=e.attr("splittemplate"),n=e.attr("yaggfunction"),l=e.attr("xaggfunction"),o=e.attr("sizefield"),s=e.attr("sizeaggfunction"),d=e.attr("type"),u={model:t&&E.$M(t)||c.model,isAggregate:!!(n||l||s),yAxisId:e.attr("yAxisId")||c.defaultYAxis.id,yValueField:e.attr("yvaluefield"),yAggFunction:n,xAxisId:e.attr("xAxisId")||c.defaultXAxis.id,xValueField:e.attr("xvaluefield"),xAggFunction:l,activeCurrency:p.activeCurrency};d&&(u.type=d),a&&(u.splitType=a),i&&(u.splitField=i),r&&(u.splitTemplate=r),o&&(u.sizeField=o),s&&(u.sizeAggFunction=s),v&&(u.filterConditions=v),t&&c.editor.registerModel(u.model),g=g.concat(H[f].buildSeries(u))}),g}}};if(P.extend(H,{donut:H.pie,funnel:H.pie,pyramid:H.pie,spline:H.line,area:H.line,areaspline:H.line,column:H.line,bar:H.line,scatter:H.bubble,heatmap:H.bubble}),E.componentType.register("skuidvis__chartset",{render:function(e,t,a){var i=this;a.element.addClass("sk-chartset"),a.drillups=[],a.drillupButton=P("<div>").addClass("sk-chartset-drillup-button").hide().on("click.skuid",function(e){e.stopPropagation(),a.drillup()}).appendTo(a.element),a.chartArea=P("<div>").addClass("sk-chartset-chart").appendTo(a.element),a.initCharts=function(){i.initCharts(a,t)},a.initCharts(),a.renderChartByID=function(e,t){return i.renderChartByID(a,e,t)},a.renderChartByIndex=function(e,t){return i.renderChartByIndex(a,e,t)},a.drilldownByID=function(e,t){return i.drilldownByID(a,e,t)},a.drillup=function(){return i.drillup(a)},void 0===a.renderedChart&&a.renderChartByIndex(0)},initCharts:function(e,t){var a=e.charts=[],i=e.chartsMap={};t.children("charts").first().children().each(function(){var e=P(this),t=e.attr("uniqueid");a.push(e),t&&(i[t]=e)})},renderChart:function(e,t,a){if(void 0!==t){a||(a={}),a.chartSet=e;var i=E.component.factory({xmlDefinition:t,context:a,element:e.chartArea});return e.renderedChart=i}},renderChartByID:function(e,t,a){if(void 0!==t){var i=e.chartsMap[t];return i?this.renderChart(e,i,a):void 0}},renderChartByIndex:function(e,t,a){if(void 0!==t){var i=e.charts[t];return i?this.renderChart(e,i,a):void 0}},drilldown:function(e,t,a){if(void 0!==t){var i=a.drillupChart;e.drillups.push(i);var r={};return t.attr("backbuttontextcolor")&&P.extend(r,{color:t.attr("backbuttontextcolor")}),t.attr("backbuttonbgcolor")&&P.extend(r,{background:t.attr("backbuttonbgcolor")}),this.setDrillupButton(e,r),this.renderChart(e,t,a)}},drilldownByID:function(e,t,a){if(void 0!==t){var i=e.chartsMap[t];return i?this.drilldown(e,i,a):void 0}},setDrillupButton:function(e,t){t||(t={});var a=e.drillups,i=e.drillupButton;if(a.length){var r=a.slice(-1)[0].getBackButtonText()||"Back";i.css({color:t.color||"",background:t.background||""}).text(r).show()}else i.hide()},drillup:function(e){if(void 0!==e){var t=e.drillups.pop();if(void 0!==t){var a=t.xmlDefinition;return this.setDrillupButton(e,{color:a.attr("backbuttontextcolor"),background:a.attr("backbuttonbgcolor")}),e.renderedChart.unregister({removeElement:!1}),e.chartArea.replaceWith(t.render().element),i&&i.processResponsiveElements(),e.renderedChart=t}}}}),E.componentType.register("skuidvis__chart",{actions:{drilldown:function(e,t,a){t.doDrilldown(e,a)}},render:function(e,i,r){var t=r.context,n=r.chartSet=t&&t.chartSet,a=r.editor=new E.ui.Editor(e,{showSaveCancel:!1}),l=P("<div>"),o=i.attr("type")||"pie",s=r.metadata=j.types[o].metadata,d=r.model=E.$M(i.attr("model")),u=i.children("colors"),c=i.children("tooltip"),p=i.children("legend"),g=i.children("dataaxes"),f=r.categoryAxesNode=i.children("categoryaxes"),v=r.seriesListNode=i.children("serieslist"),h=i.children("allowedtypes"),y=i.attr("height")||"400px",x=i.attr("rendersnippet"),m=r.renderObj={type:o};V||(Highcharts.setOptions({lang:{decimalPoint:G.userLocale.decimalsSeparator,thousandsSep:G.userLocale.thousandsSeparator}}),V=!0),d&&(a.registerModel(d),a.handleDataRefresh=function(){r.draw()},a.handleChange=function(){E.ui.Editor.prototype.handleChange.call(this),r.rebuild()},a.handleCancel=function(){E.ui.Editor.prototype.handleCancel.call(this),r.rebuild()},a.handleSave=function(){E.ui.Editor.prototype.handleSave.call(this),r.rebuild()});var b=a.contents.addClass("sk-chart-wrapper"),C=i.attr("cssclass");function A(){var e=E.themeSettings.getAll(),t=e&&e.visualizations&&e.visualizations.chart||{};if(i.attr("backgroundcolor")?m.backgroundColor=i.attr("backgroundcolor"):void 0!==t.background?m.backgroundColor=t.background:delete m.backgroundColor,u&&u.children().length){var a=B.getColorsArray(u);a.length&&(m.colors=a)}else void 0!==t.colorPalette&&t.colorPalette.length?m.colors=t.colorPalette:delete m.colors}function F(e){e&&0<e.length&&H[o].buildCategoryAxes(r,e)}function w(e,t){if(e&&0<e.length){t||(t={});var a=t.context||r.context,i=r.createConditionsFromXml();a&&a.filterConditions&&(i=P.merge(i,a.filterConditions)),t=P.extend(!0,{filterConditions:i},t||{}),e.children("series").length&&(m.series=H[o].buildSeriesArray(r,e,t))}}function T(){!function(){var e=i.attr("maintitle"),t=i.attr("subtitle");m.useOrgCurrency="true"===i.attr("useorgcurrency")||!1,m.credits={enabled:!1},m.title={text:G.mergeAsTextInContext(e,G.getContextToUse(r))},t&&(m.subtitle={text:G.mergeAsTextInContext(t,G.getContextToUse(r))}),"true"===i.attr("stacking")&&(m.stacked=!0)}(),A(),!0===s.hasCategories&&f&&0<f.length&&F(f),!0===s.hasDataAxes&&g&&0<g.length&&function(e){e&&0<e.length&&H[o].buildDataAxes(r,e)}(g),w(v,{activeCurrency:Y(m.useOrgCurrency)}),void 0!==c&&0<c.length&&(m.tooltip=function(e){var t={},a=e.attr("prefix"),i=e.attr("suffix");return void 0!==a&&(t.valuePrefix=G.mergeAsText("model",a,{},d)),void 0!==i&&(t.valueSuffix=G.mergeAsText("model",i,{},d)),t}(c)),p&&0<p.length&&function(e){m.legend={};var t=e.attr("layout"),a=e.attr("halign"),i=e.attr("valign"),r=e.attr("showlabels"),n=m.legend;t&&(n.layout=t),a&&(n.halign=a),i&&(n.valign=i),"true"===r?n.showLabels=!0:"false"===r&&(n.showLabels=!1)}(p)}if(r.container=P("<div>").addClass("sk-chart-container sk-chart-standard").appendTo(b),C&&b.addClass(C),y&&b.css({height:y}),x&&(m.beforeRenderSnippet=x),"off"===i.attr("export")?m.exporting={enabled:!1}:"string"==typeof i.attr("export")&&(m.exporting={mode:i.attr("export")}),r.draw=function(){T(),U(r)},r.refresh=function(){!function(e){var i=e.getHighchartsObject(),r={};e.categoryAxes&&P.each(e.categoryAxes,function(){var e=P.map(this.values,function(e,t){return t});i.get(this.id).setCategories(e,!1)}),P.each(e.renderObj.series,function(e,t){var a=i.get(t.id);r[t.id]=!0,a?a.setData(t.data,!1):i.addSeries(t,!1)}),P.each(i.series,function(e,t){if(!t)return!1;r[t.options.id]||i.get(t.options.id).remove(!1)}),i.redraw()}(r)},r.rebuild=function(e){e||(e={});var t=e.categoryAxesNode||r.categoryAxesNode;!0===s.hasCategories&&t&&(t.children("axis").length&&F(t));var a=e.seriesListNode||r.seriesListNode;a&&w(a,$({activeCurrency:Y(m.useOrgCurrency)},e)),r.refresh()},r.reflow=function(){var e=r.container,t=e.highcharts();t&&t.chartWidth!==e.width()&&e.is(":visible")&&t.reflow()},r.doDrilldown=function(e,t){var a=e.attr("chartid");void 0===t&&(t={}),t.drillupChart=r;var i=E.component.createConditionsFromXml(P(e),t);i.length&&(t.filterConditions=i),n.drilldownByID(a,t)},r.getBackButtonText=function(){return"Back"},h&&0<h.length){var I=P('<div style="display:inline-block; padding-right:16px;">').hide().appendTo(l),S=h.children("type"),k=[];S&&S.length&&(P.each(j.types,function(){var e=this,t=e.value;t===o?k.push(e):P.each(S,function(){if(P(this).text()===t)return k.push(e),!1})}),I.html('<span style="font-weight:bold;padding-right:16px;">Chart Type</span>').append(z("PICKLIST").edit({required:!0,value:o,entries:k,onChange:function(e){var t,a={};P.each(r.getHighchartsObject().legend.getAllItems(),function(e,t){a[t.name]=t.visible}),o=e,m.type=e,U(r),t=r.getHighchartsObject().legend.getAllItems(),P.each(t,function(e,t){a.hasOwnProperty(t.name)&&(t.visible===a[t.name]&&t.setVisible(),t.setVisible())})}})).show())}if(!0===s.hasCategories&&f&&f.children("axis").length){var D=f.children("axis").first(),O=D.attr("dategranularity"),M=D.children("allowedgranularities").children("type"),N=[];M&&M.length&&(P.each(B.DATE_GRANULARITIES,function(){var e=this;e.value===O?N.push(e):P.each(M,function(){if(P(this).text()===e.value)return N.push(e),!1})}),P('<div style="display:inline-block;">').html('<span style="font-weight:bold;padding-right:16px;">Date Granularity</span>').append(z("PICKLIST").edit({required:!0,value:O,entries:N,onChange:function(e){r.dateGranularity=e,r.rebuild()}})).appendTo(l))}e.append(b,l),r.draw(),G.addResizeHandler(r.reflow,100),G.delayEventCallback({eventType:"tabshow pageload dialogopen stepchange",delay:20,callback:r.reflow}),r.unsubscribeAll(),r.storeSubscription(L("ui.reflow",r.reflow)),r.storeSubscription(L("ui.themeSettings.loaded",function(){A(),U(r)}));var _=r.definition.closest("panel");_.length&&r.storeSubscription(L("ui.panel.toggled",function(e){e.id==_.attr("uniqueid")&&r.reflow()}));var R=G.debounce(r.rebuild,500);r.storeSubscription(L("salesforce.async.field.rendered",function(n){var l=r.model.id;r.seriesListNode.children().each(function(e,t){var a=E.$(t),i=n.id,r=n.model.id;(a.attr("modelId")||l)===r&&(a.attr("splitfield")===i||"template"===a.attr("splittype")&&-1!==G.extractFieldsFromTemplate(a.attr("splittemplate")).indexOf(i))&&R()})}))}}),i){var t=i.processResponsiveElements;i.processResponsiveElements=function(){t(),P.each(E.component.getByType("skuidvis__chart"),function(e,t){t.container.is(":visible")&&t.reflow()})}}}(skuid)}});